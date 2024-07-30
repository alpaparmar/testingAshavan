export type VisitorFunction = (value: any) => any;

export function deepMapObject(value: any, visitorFn: VisitorFunction) {
    if (Array.isArray(value)) {
        value = value.map((e) => {
            return deepMapObject(e, visitorFn);
        });
    } else if (typeof value == 'object' && value !== null && value !== undefined) {
        const newObject = {};
        for (const [k, v] of Object.entries(value)) {
            newObject[k] = deepMapObject(v, visitorFn);
        }
        value = newObject;
    }
    value = visitorFn(value);
    return value;
}

export function findObjectById(objectId, objects, debugContext) {
    if (!objectId) {
        return null;
    }
    const object = objects.find((object) => object.__metadata?.id === objectId) || null;
    if (!object && debugContext) {
        const reverseStack = debugContext.stack.slice().reverse();
        const objectIndex = reverseStack.findIndex((object) => !!object.__metadata?.relProjectPath);
        if (objectIndex >= 0) {
            const filePath = reverseStack[objectIndex].__metadata.relProjectPath;
            const fieldPath = debugContext.keyPath
                .slice()
                .reverse()
                .slice(0, objectIndex + 1)
                .reverse()
                .join('.');
            console.warn(`The '${objectId}' referenced in file '${filePath}' in field '${fieldPath}' was not found`);
        }
    }
    return object;
}

export function resolveReferences(object, fieldPaths, objects, debugContext = { keyPath: [], stack: [] }) {
    const _resolveDeep = (value, fieldNames, debugContext) => {
        if (typeof value === 'string') {
            const result = findObjectById(value, objects, debugContext);
            return _resolveDeep(result, fieldNames, debugContext);
        } else if (Array.isArray(value)) {
            return value
                .map((item, index) =>
                    _resolveDeep(item, fieldNames, {
                        keyPath: debugContext.keyPath.concat(index),
                        stack: debugContext.stack.concat([value])
                    })
                )
                .filter(Boolean);
        }

        if (!value || fieldNames.length === 0) {
            return value;
        }
        const [fieldName, ...tail] = fieldNames;
        if (!(fieldName in value)) {
            return value;
        }
        const result = _resolveDeep(value[fieldName], tail, {
            keyPath: debugContext.keyPath.concat(fieldName),
            stack: debugContext.stack.concat(value)
        });
        return {
            ...value,
            [fieldName]: result
        };
    };

    return fieldPaths.reduce((object, fieldPath) => {
        const fieldNames = fieldPath.split('.');
        return _resolveDeep(object, fieldNames, debugContext);
    }, object);
}


export function getRootPagePath(pagePath) {
    const pagedPathMatch = pagePath.match(/\/page\/\d+$/);
    if (!pagedPathMatch) {
        return pagePath;
    }
    return pagePath.substring(0, pagedPathMatch.index);
}

export function getPagedItemsForPage(page, items, numOfItemsPerPage) {
    const pageUrlPath = page.__metadata?.urlPath;
    const baseUrlPath = getRootPagePath(pageUrlPath);
    if (numOfItemsPerPage === 0) {
        return {
            pageIndex: 0,
            baseUrlPath,
            numOfPages: 1,
            numOfTotalItems: items.length,
            items: items
        };
    }
    const pageIndexMatch = pageUrlPath.match(/\/page\/(\d+)$/);
    const pageIndex = pageIndexMatch ? parseInt(pageIndexMatch[1]) - 1 : 0;
    const numOfPages = Math.ceil(items.length / numOfItemsPerPage) || 1;
    const startIndex = pageIndex * numOfItemsPerPage;
    const endIndex = startIndex + numOfItemsPerPage;
    return {
        pageIndex,
        baseUrlPath,
        numOfPages: numOfPages,
        numOfTotalItems: items.length,
        items: items.slice(startIndex, endIndex)
    };
}

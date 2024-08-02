import { defineStackbitConfig, DocumentStringLikeFieldNonLocalized, SiteMapEntry } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';
import { allModels } from './.stackbit/models';

const gitContentSource = new GitContentSource({
    rootPath: __dirname,
    contentDirs: ['content'],
    models: Object.values(allModels),
    assetsConfig: {
        referenceType: 'static',
        staticDir: 'public',
        uploadDir: 'images',
        publicPath: '/'
    }
});


export const config = defineStackbitConfig({
    stackbitVersion: '~0.6.0',
    ssgName: 'nextjs',
    nodeVersion: '18',
    styleObjectModelName: 'ThemeStyle',
    contentSources: [gitContentSource],
    presetSource: {
        type: 'files',
        presetDirs: ['./.stackbit/presets']
    },
    siteMap: ({ documents, models }): SiteMapEntry[] => {
        const pageModels = models.filter((model) => model.type === 'page').map((model) => model.name);
        return documents
            .filter((document) => pageModels.includes(document.modelName))
            .map((document) => {
                console.info('documentt->>>>', document)
                let slug = (document.fields.slug as DocumentStringLikeFieldNonLocalized)?.value;
                if (!slug) return null;
                /* Remove the leading slash in order to generate correct urlPath
                regardless of whether the slug is '/', 'slug' or '/slug' */
                slug = slug.replace(/^\/+/, '');
                switch (document.modelName) {
                    case 'PostFeedLayout':
                        return {
                            urlPath: '/blog',
                            document: document
                        };
                    case 'PostLayout':
                        return {
                            urlPath: `/blog/${slug}`,
                            document: document
                        };
                    default:
                        return {
                            urlPath: `/${slug}`,
                            document: document
                        };
                }
            });
    }
});

// const config = defineStackbitConfig({
//     stackbitVersion: '~0.6.0',
//     ssgName: 'nextjs',
//     nodeVersion: '18',
//     contentSources: [
//         new GitContentSource({
//             rootPath: __dirname,
//             contentDirs: ['content'],
//             models: [...allModels],
//             assetsConfig: {
//                 referenceType: 'static',
//                 staticDir: 'public',
//                 uploadDir: 'images',
//                 publicPath: '/'
//             }
//         })
//     ],
//     // modelExtensions: [
//     //     { name: 'PageLayout', type: 'page', urlPath: '/{slug}' },
//     //     { name: 'PostFeedLayout', type: 'page', urlPath: '/blog' },
//     //     { name: 'PostLayout', type: 'page', urlPath: '/blog/{slug}' }
//     // ],
//     siteMap: ({ documents, models }) => {
//         // console.info('models->>>>>>>>>>>>>>>>>', models);
//         const pageModels = models.filter(m => m.type === "page").map(m => m.name);
//         // console.info('agegegegeeee', pageModels)
//         return documents.filter(d => pageModels.includes(d.modelName)).map(document => {
//             // console.info('document->>>>>>>>>>>>>>>>>>>>>', document);
//             // const slug = getLocalizedFieldForLocale(document.fields.slug);
//             // console.log('slug->>>>>>>>>>>>>>>>>>>>>', slug);
//             const resultData = extractPath(document.manageUrl)
//             // console.info('ammamamamaa', resultData, resultData.split('pages')[1].split('.md')[0].split('\\')[1]);
//             //@ts-ignore
//             // console.log('slug.manageURL', )
//             //@ts-ignore
//             // if (!slug || !slug.value) return null;
//             //@ts-ignore
//             // const urlPath = "/" + slug.value.replace(/^\/|\/$/g, '')

//             const finalResult = resultData && resultData?.replace('index', '')
//             const finalUrlPath = (finalResult && ("/" + finalResult?.replace('\\', '/'))).length > 0 ? finalResult && ("/" + finalResult?.replace('\\', '/') + "/") : '/'
//             // console.info('finalresulrrrrr', finalUrlPath)
//             return {
//                 stableId: document?.srcProjectId,
//                 urlPath: finalUrlPath,
//                 document: { ...document, manageUrl: finalUrlPath },
//                 isHomePage: finalUrlPath === "/"
//             };
//         }).filter(Boolean) as SiteMapEntry[];
//     },
//     presetSource: {
//         type: 'files',
//         presetDirs: ['./.stackbit/presets']
//     },
//     styleObjectModelName: 'ThemeStyle'
// });
export default config;

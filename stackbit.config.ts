import { defineStackbitConfig, getLocalizedFieldForLocale, SiteMapEntry } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';
import { allModels } from './.stackbit/models';

const extractPath = (input) => {
    const match = input.match(/content\\pages\\(.*)\.md$/);
    return match ? match[1] : null;
}

const config = defineStackbitConfig({
    stackbitVersion: '~0.6.0',
    ssgName: 'nextjs',
    nodeVersion: '18',
    contentSources: [
        new GitContentSource({
            rootPath: __dirname,
            contentDirs: ['content'],
            models: [...allModels],
            assetsConfig: {
                referenceType: 'static',
                staticDir: 'public',
                uploadDir: 'images',
                publicPath: '/'
            }
        })
    ],
    modelExtensions: [
        { name: 'PageLayout', type: 'page', urlPath: '/{slug}' },
        { name: 'PostFeedLayout', type: 'page', urlPath: '/blog' },
        { name: 'PostLayout', type: 'page', urlPath: '/blog/{slug}' }
    ],
    siteMap: ({ documents, models }) => {
        // console.info('models->>>>>>>>>>>>>>>>>', models);
        const pageModels = models.filter(m => m.type === "page").map(m => m.name);
        // console.info('agegegegeeee', pageModels)
        return documents.filter(d => pageModels.includes(d.modelName)).map(document => {
            // console.info('document->>>>>>>>>>>>>>>>>>>>>', document.type);
            // const slug = getLocalizedFieldForLocale(document.fields.slug);
            // console.log('slug->>>>>>>>>>>>>>>>>>>>>', slug);
            const resultData = extractPath(document.manageUrl)
            // console.info('ammamamamaa', resultData, resultData.split('pages')[1].split('.md')[0].split('\\')[1]);
            //@ts-ignore
            // console.log('slug.manageURL', )
            //@ts-ignore
            // if (!slug || !slug.value) return null;
            //@ts-ignore
            // const urlPath = "/" + slug.value.replace(/^\/|\/$/g, '')

            const finalResult = resultData && resultData?.replace('index', '')
            const finalUrlPath = (finalResult && ("/" + finalResult?.replace('\\', '/'))).length > 0 ? finalResult && ("/" + finalResult?.replace('\\', '/')) : '/'
            // console.info('finalresulrrrrr', finalUrlPath)
            return {
                stableId: document?.srcProjectId,
                urlPath: finalUrlPath,
                document,
                isHomePage: finalUrlPath === "/"
            };
        }).filter(Boolean) as SiteMapEntry[];
    },
    presetSource: {
        type: 'files',
        presetDirs: ['./.stackbit/presets']
    },
    styleObjectModelName: 'ThemeStyle'
});
export default config;

import {
    Config,
    ContentObject,
    ContentObjectType,
    GlobalProps,
    PageComponentProps,
    PostLayout,
    ProjectLayout,
    RecentPostsSection,
    RecentProjectsSection,
    PostFeedLayout,
    ProjectFeedLayout
} from '@/types';
import { deepMapObject, getPagedItemsForPage, resolveReferences, getRootPagePath } from './data-utils';
import { ConfigModel } from '.stackbit/models/Config';

export function resolveStaticProps(urlPath: string, allData: ContentObject[]): PageComponentProps {
    const rootUrlPath = getRootPagePath(urlPath);

    const originalPage = allData.find((obj) => obj.__metadata.urlPath === rootUrlPath);
    const globalProps: GlobalProps = {
        site: allData.find((obj) => obj.__metadata.modelName === ConfigModel.name) as Config
    };

    function enrichContent(value: any) {
        const type = value?.__metadata?.modelName;
        if (type && PropsResolvers[type]) {
            const propsData = {
                __metadata: {
                    ...value.__metadata,
                    urlPath
                }
            }
            const resolver = PropsResolvers[type];
            return resolver({ ...value, ...propsData }, allData);
        } else {
            return value;
        }
    }



    const enrichedPage = deepMapObject(originalPage, enrichContent) as ContentObject;
    // console.info('ghghghhghghghhghgh---->>>>>', globalProps)
    return {
        ...enrichedPage,
        global: globalProps
    };
}

type ResolverFunction = (props: ContentObject, allData: ContentObject[]) => ContentObject;

const PropsResolvers: Partial<Record<ContentObjectType, ResolverFunction>> = {
    // PostFeedLayout: (props, allData) => {
    //     const allPosts = getAllPostsSorted(allData);
    //     return {
    //         ...(props as PostFeedLayout),
    //         items: allPosts
    //     };
    // },
    PostFeedLayout: (props, data) => {
        //@ts-ignore
        const numOfPostsPerPage = props?.numOfPostsPerPage ?? 10;
        const allPosts = getAllPostsSorted(data);
        const paginationData = getPagedItemsForPage(props, allPosts, numOfPostsPerPage);
        const items = resolveReferences(paginationData.items, ['author', 'category'], data);
        return {
            ...props,
            ...paginationData,
            items
        };
    },
    // RecentPostsSection: (props, allData) => {
    //     const recentPosts = getAllPostsSorted(allData).slice(0, (props as RecentPostsSection).recentCount || 3);
    //     return {
    //         ...props,
    //         posts: recentPosts
    //     };
    // },
    RecentPostsSection: (props, data) => {
        const allPosts = getAllPostsSorted(data).slice(0, (props as RecentPostsSection).recentCount || 6);
        const recentPosts = resolveReferences(allPosts, ['author', 'category'], data);
        return {
            ...props,
            posts: recentPosts
        };
    },
    ProjectLayout: (props, allData) => {
        const allProjects = getAllProjectsSorted(allData);
        const currentProjectId = props.__metadata?.id;
        const currentProjectIndex = allProjects.findIndex((project) => project.__metadata?.id === currentProjectId);
        const nextProject = currentProjectIndex > 0 ? allProjects[currentProjectIndex - 1] : null;
        const prevProject = currentProjectIndex < allProjects.length - 1 ? allProjects[currentProjectIndex + 1] : null;
        return {
            ...props,
            prevProject,
            nextProject
        };
    },
    ProjectFeedLayout: (props, allData) => {
        const allProjects = getAllProjectsSorted(allData);
        return {
            ...(props as ProjectFeedLayout),
            items: allProjects
        };
    },
    RecentProjectsSection: (props, allData) => {
        const recentProjects = getAllProjectsSorted(allData).slice(0, (props as RecentProjectsSection).recentCount || 3);
        return {
            ...props,
            projects: recentProjects
        };
    }
};

function getAllPostsSorted(objects: ContentObject[]) {
    const all = objects.filter((object) => object.__metadata?.modelName === 'PostLayout') as PostLayout[];
    const sorted = all.sort((postA, postB) => new Date(postB.date).getTime() - new Date(postA.date).getTime());
    return sorted;
}

function getAllProjectsSorted(objects: ContentObject[]) {
    const all = objects.filter((object) => object.__metadata?.modelName === 'ProjectLayout') as ProjectLayout[];
    const sorted = all.sort((projectA, projectB) => new Date(projectB.date).getTime() - new Date(projectA.date).getTime());
    return sorted;
}

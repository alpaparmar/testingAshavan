import { Model } from '@stackbit/types';
import { seoFields, seoFieldGroups } from './seo-fields';

export const PostFeedLayoutModel: Model = {
    type: 'page',
    layout: 'PostFeedLayout',
    name: 'PostFeedLayout',
    label: 'Blog',
    labelField: 'title',
    hideContent: true,
    // extends: ['Seo'],
    singleInstance: true,
    file: 'content/pages/blog/{index}.md',
    filePath: 'content/pages/blog/index.md',
    fieldGroups: [
        {
            name: 'settings',
            label: 'Settings',
            icon: 'gear'
        }
    ],
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            default: 'This is a page title'
        },
        {
            type: 'string',
            name: 'subtitle',
            label: 'Subtitle',
            default: 'This is a page subtitle'
        },
        {
            type: 'number',
            name: 'numOfPostsPerPage',
            label: 'Number of Posts per page',
            description: 'set to 0 to show all posts on a single page',
            default: 10
        },
        {
            type: 'model',
            name: 'postFeed',
            readOnly: true,
            label: 'Post Feed',
            models: ['PagedPostsSection'],
            default: {
                title: null,
                subtitle: null,
                showDate: true,
                showAuthor: true,
                variant: 'variant-a',
                colors: 'colors-a',
                actions: []
            }
        },
        {
            type: 'list',
            name: 'topSections',
            label: 'Top Sections',
            items: {
                type: 'model',
                models: [],
                groups: ['sectionComponent']
            }
        },
        {
            type: 'list',
            name: 'bottomSections',
            label: 'Bottom Sections',
            items: {
                type: 'model',
                models: [],
                groups: ['sectionComponent']
            }
        },
        {
            type: 'slug',
            name: 'slug',
            label: 'Slug',
            description:
                'The URL path of this page relative to site root. For example, the site root page would be "/", and post page would be "posts/new-post/"',
            required: true,
            hidden: false,
            localized: false,
            group: 'settings'
        },
        // ...seoFields,
        {
            type: 'style',
            name: 'styles',
            styles: {
                title: {
                    fontWeight: ['400', '700'],
                    fontStyle: ['normal', 'italic'],
                    textAlign: ['left', 'center', 'right']
                }
            },
            default: {
                title: {
                    textAlign: 'center'
                }
            }
        }
    ]
};

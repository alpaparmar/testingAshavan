import { Model } from '@stackbit/types';
import { seoFields, seoFieldGroups } from './seo-fields';

export const PostLayoutModel: Model = {
    type: 'page',
    name: 'PostLayout',
    layout: 'PostLayout',
    label: 'Post',
    // urlPath: '/blog/{slug}',
    // filePath: 'content/pages/blog/{slug}.md',
    filePath: 'content/pages/blog/{slug}.md',
    thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/default.png',
    extends: ['SeoNonstopInterop'],
    // fieldGroups: [
    //     ...seoFieldGroups,
    //     {
    //         name: 'styles',
    //         label: 'Styles',
    //         icon: 'palette'
    //     }
    // ],
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
            default: 'This is a blog post title',
            required: true
        },
        {
            type: 'date',
            name: 'date',
            label: 'Date',
            required: true
        },
        {
            type: 'reference',
            name: 'author',
            label: 'Author',
            models: ['Person'],
            default: 'content/data/team/person.json'
        },
        {
            type: 'string',
            name: 'excerpt',
            label: 'Excerpt',
            default: 'Nunc rutrum felis dui, ut consequat sapien scelerisque vel. Integer condimentum dignissim justo vel faucibus.'
        },
        {
            type: 'model',
            name: 'featuredImage',
            label: 'Featured image',
            models: ['ImageBlock'],
            default: {
                type: 'ImageBlock',
                url: 'https://assets.stackbit.com/components/images/default/post-4.jpeg',
                altText: 'Post thumbnail image',
                caption: ''
            }
        },
        {
            type: 'list',
            name: 'bottomSections',
            label: 'Sections',
            items: {
                type: 'model',
                models: [],
                groups: ['sectionComponent']
            },
            default: [
                {
                    type: 'TextSection',
                    elementId: '',
                    colors: 'colors-a',
                    actions: [
                        {
                            type: 'Link',
                            altText: 'Share on LinkedIn',
                            url: 'https://www.linkedin.com/sharing/share-offsite/?url=',
                            target: '_blank',
                            rel: 'noopener',
                            showIcon: true,
                            icon: 'linkedin',
                            iconPosition: 'right',
                            elementId: ''
                        },
                        {
                            type: 'Link',
                            altText: 'Share on Twitter',
                            url: 'https://twitter.com/intent/tweet?text=&url=',
                            target: '_blank',
                            rel: 'noopener',
                            showIcon: true,
                            icon: 'twitter',
                            iconPosition: 'right',
                            elementId: ''
                        }
                    ],
                    subtitle: 'Share this post',
                    styles: {
                        self: {
                            height: 'auto',
                            width: 'narrow',
                            margin: ['mt-0', 'mb-0', 'ml-0', 'mr-0'],
                            padding: ['pt-0', 'pb-24', 'pl-4', 'pr-4'],
                            justifyContent: 'center'
                        },
                        title: {
                            textAlign: 'left'
                        },
                        subtitle: {
                            textAlign: 'left',
                            fontWeight: 700
                        },
                        text: {
                            textAlign: 'left'
                        }
                    }
                },
                {
                    type: 'CtaSection',
                    elementId: '',
                    colors: 'colors-f',
                    title: 'Subscribe to the blog',
                    text: 'Get new post notifications in your inbox',
                    actions: [
                        {
                            type: 'Button',
                            label: 'Sign up',
                            url: 'https://subscribepage.io/nonstop-interop',
                            style: 'primary',
                            rel: 'noopener',
                            target: '_blank'
                        }
                    ],
                    backgroundImage: null,
                    styles: {
                        self: {
                            height: 'auto',
                            width: 'narrow',
                            margin: ['mt-0', 'mb-0', 'ml-0', 'mr-0'],
                            padding: ['pt-24', 'pb-24', 'pl-4', 'pr-4'],
                            justifyContent: 'center',
                            alignItems: 'center',
                            lexDirection: 'row',
                            borderRadius: 'full'
                        },
                        title: {
                            textAlign: 'left'
                        },
                        text: {
                            textAlign: 'left'
                        },
                        actions: {
                            justifyContent: 'flex-start'
                        }
                    }
                },
                {
                    type: 'RecentPostsSection',
                    elementId: '',
                    showDate: true,
                    showAuthor: false,
                    showExcerpt: false,
                    variant: 'variant-c',
                    actions: [
                        {
                            type: 'Button',
                            label: 'View all',
                            altText: 'View all posts',
                            url: '/blog',
                            style: 'secondary'
                        }
                    ],
                    styles: {
                        self: {
                            height: 'auto',
                            width: 'wide',
                            margin: ['mt-0', 'mb-0', 'ml-0', 'mr-0'],
                            padding: ['pt-24', 'pb-24', 'pl-4', 'pr-4'],
                            justifyContent: 'center'
                        },
                        title: {
                            textAlign: 'center'
                        },
                        subtitle: {
                            textAlign: 'center'
                        },
                        actions: {
                            justifyContent: 'center'
                        }
                    },
                    title: 'Latest from Nonstop Interop',
                    colors: 'colors-a',
                    recentCount: 3
                }
            ]
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
        // ...seoFields
    ]
};

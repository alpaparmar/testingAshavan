import { Model } from '@stackbit/types';

export const FeaturedPostsSectionModel: Model = {
    type: 'object',
    name: 'FeaturedPostsSection',
    label: 'Featured posts',
    labelField: 'title',
    thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/default.png',
    extends: ['PostFeedSection'],
    groups: ['sectionComponent'],
    fields: [
        {
            type: 'string',
            name: 'title',
            default: 'Featured'
        },
        {
            type: 'string',
            name: 'subtitle',
            default: 'Featured blog posts section example'
        },
        {
            type: 'string',
            name: 'colors',
            default: 'colors-h'
        },
        {
            type: 'list',
            name: 'posts',
            label: 'Posts',
            items: {
                type: 'reference',
                models: ['PostLayout']
            }
        }
    ]
};

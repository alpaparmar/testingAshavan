import { Model } from '@stackbit/types';

export const PagedPostsSectionModel: Model = {
    type: 'object',
    name: 'PagedPostsSection',
    label: 'Post feed',
    labelField: 'title',
    extends: ['PostFeedSection'],
    fields: [
        {
            type: 'string',
            name: 'title',
            hidden: true,
            default: null
        },
        {
            type: 'string',
            name: 'subtitle',
            hidden: true,
            default: null
        },
        {
            type: 'boolean',
            name: 'showDate',
            default: true
        },
        {
            type: 'boolean',
            name: 'showAuthor',
            default: true
        },
        {
            type: 'string',
            name: 'variant',
            default: 'variant-a'
        },
        {
            type: 'list',
            name: 'actions',
            hidden: true,
            items: {
                type: 'model',
                models: []
            },
            default: []
        },
        {
            type: 'string',
            name: 'colors',
            default: 'colors-a'
        }
    ]
};
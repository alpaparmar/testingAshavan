import { Model } from '@stackbit/types';

export const RecentPostsSectionModel: Model = {
    type: 'object',
    name: 'RecentPostsSection',
    label: 'Recent posts',
    labelField: 'title',
    extends: ['PostFeedSection'],
    groups: ['sectionComponent'],
    fields: [
        {
            type: 'string',
            name: 'title',
            default: 'Recent Posts',
        },
        {
            type: 'string',
            name: 'subtitle',
            default: 'Latest blog posts section example',
        },
        {
            type: 'string',
            name: 'colors',
            default: 'colors-h'
        },
        {
            type: 'number',
            name: 'recentCount',
            label: 'Number of recent posts to show',
            default: 6,
        }
    ]
};

import { Model } from '@stackbit/types';

export const FeatureHighlightSectionModel: Model = {
    type: 'object',
    name: 'FeatureHighlightSection',
    label: 'Feature highlight',
    labelField: 'title',
    thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/default.png',
    extends: ['Section'],
    groups: ['sectionComponent'],
    fieldGroups: [
        {
            name: 'styles',
            label: 'Styles'
        },
        {
            name: 'settings',
            label: 'Settings'
        }
    ],
    fields: [
        {
            type: 'string',
            name: 'colors',
            default: 'colors-f'
        },
        {
            type: 'enum',
            name: 'backgroundSize',
            group: 'styles',
            label: 'Background size',
            options: [
                {
                    label: 'Full',
                    value: 'full'
                },
                {
                    label: 'Inset',
                    value: 'inset'
                }
            ],
            default: 'full'
        },
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            default: 'This Is A Feature Title'
        },
        {
            type: 'string',
            name: 'subtitle',
            label: 'Subtitle',
            default: 'The section subtitle'
        },
        {
            type: 'model',
            name: 'badge',
            label: 'Badge',
            models: ['Badge']
        },
        {
            type: 'markdown',
            name: 'text',
            label: 'Text',
            default: 'Aenean eros ipsum, interdum quis dignissim non, sollicitudin vitae nisl.\n Aenean vel aliquet elit, at blandit ipsum. Sed eleifend felis sit amet \n erat molestie, hendrerit malesuada justo ultrices. Nunc volutpat at erat \n vitae interdum. Ut nec massa eget lorem blandit condimentum et at risus.'
        },
        {
            type: 'list',
            name: 'actions',
            label: 'Actions',
            items: {
                type: 'model',
                models: ['Button', 'Link']
            },
            default: [
                {
                    type: 'Button',
                    label: 'Get Started',
                    url: '/',
                    style: 'primary',
                    elementId: 'hero-main-button'
                },
                {
                    type: 'Button',
                    label: 'Learn More',
                    url: '/',
                    style: 'secondary'
                }
            ]
        },
        {
            type: 'model',
            name: 'media',
            label: 'Media',
            models: ['ImageBlock', 'VideoBlock'],
            default: {
                type: 'ImageBlock',
                url: 'https://assets.stackbit.com/components/images/default/hero.png',
                altText: 'Hero section image'
            }
        },
        {
            type: 'style',
            name: 'styles',
            styles: {
                self: {
                    height: ['auto', 'screen'],
                    width: ['narrow', 'wide', 'full'],
                    margin: ['tw0:96'],
                    padding: ['tw0:96'],
                    justifyContent: ['flex-start', 'flex-end', 'center'],
                    borderRadius: '*',
                    borderWidth: ['0:8'],
                    borderStyle: '*',
                    borderColor: [
                        {
                            value: 'border-primary',
                            label: 'Primary color',
                            color: '$primary'
                        },
                        {
                            value: 'border-secondary',
                            label: 'Secondary color',
                            color: '$secondary'
                        },
                        {
                            value: 'border-dark',
                            label: 'Dark color',
                            color: '$dark'
                        },
                        {
                            value: 'border-complementary',
                            label: 'Complementary color',
                            color: '$complementary'
                        }
                    ]
                },
                title: {
                    fontWeight: ['400', '700'],
                    fontStyle: ['normal', 'italic'],
                    textAlign: ['left', 'center', 'right']
                },
                subtitle: {
                    fontWeight: ['400', '700'],
                    fontStyle: ['normal', 'italic'],
                    textAlign: ['left', 'center', 'right']
                },
                text: {
                    textAlign: ['left', 'center', 'right']
                },
                actions: {
                    justifyContent: ['flex-start', 'flex-end', 'center']
                }
            },
            default: {
                self: {
                    height: 'auto',
                    width: 'wide',
                    margin: ['mt-0', 'mb-0', 'ml-0', 'mr-0'],
                    padding: ['pt-12', 'pb-12', 'pl-4', 'pr-4'],
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    borderRadius: 'none',
                    borderWidth: 0,
                    borderStyle: 'none',
                    borderColor: 'border-dark',
                    boxShadow: 'none'
                },
                title: {
                    textAlign: 'left'
                },
                subtitle: {
                    fontWeight: 400,
                    fontStyle: 'normal',
                    textAlign: 'left'
                },
                text: {
                    textAlign: 'left'
                },
                actions: {
                    justifyContent: 'flex-start'
                }
            }
        }
    ]
}
import { Model } from '@stackbit/types';

export const HeroSectionModel: Model = {
    type: 'object',
    name: 'HeroSection',
    label: 'Hero',
    labelField: 'title',
    thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/default.png',
    groups: ['sectionComponent'],
    fieldGroups: [
        {
            name: 'styles',
            label: 'Styles',
            icon: 'palette'
        },
        {
            name: 'settings',
            label: 'Settings',
            icon: 'gear'
        }
    ],
    fields: [
        {
            type: 'string',
            name: 'colors',
            label: 'colors-f'
        },
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            default: 'This Is A Big Hero Headline'
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
            models: ['Badge'],
        },
        {
            type: 'markdown',
            name: 'text',
            label: 'Text',
            default:
                'Aenean eros ipsum, interdum quis dignissim non, sollicitudin vitae nisl. Aenean vel aliquet elit, at blandit ipsum. Sed eleifend felis sit amet erat molestie, hendrerit malesuada justo ultrices. Nunc volutpat at erat vitae interdum. Ut nec massa eget lorem blandit condimentum et at risus.'
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
            models: ['FormBlock', 'ImageBlock', 'VideoBlock'],
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
                    alignItems: ['flex-start', 'flex-end', 'center'],
                    justifyContent: ['flex-start', 'flex-end', 'center'],
                    flexDirection: ['row', 'row-reverse', 'col', 'col-reverse'],
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
                    fontWeight: ['400', '500'],
                    fontStyle: ['italic'],
                    textAlign: ['left', 'center', 'right'],
                    textDecoration: ['underline']
                },
                subtitle: {
                    fontWeight: ['400', '500'],
                    fontStyle: ['italic'],
                    textAlign: ['left', 'center', 'right'],
                    textDecoration: ['underline']
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
                    borderColor: 'border-dark'
                },
                title: {
                    textAlign: 'left'
                },
                subtitle: {
                    fontWeight: 400,
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
};

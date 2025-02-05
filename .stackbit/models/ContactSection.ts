import { Model } from '@stackbit/types';

export const ContactSectionModel: Model = {
    type: 'object',
    name: 'ContactSection',
    label: 'Contact',
    labelField: 'title',
    thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/default.png',
    extends: 'Section',
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
            default: 'colors-h'
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
            label: 'Title'
        },
        {
            type: 'markdown',
            name: 'text',
            label: 'Text',
            default: 'Aenean eros ipsum, interdum quis dignissim non, sollicitudin vitae nisl.\nAenean vel aliquet elit, at blandit ipsum.'
        },
        {
            type: 'model',
            name: 'form',
            label: 'Form',
            models: ['FormBlock'],
            default: {
                type: 'FormBlock',
                elementId: 'contact-form',
                action: '',
                destination: '',
                fields: [
                    {
                        type: 'TextFormControl',
                        name: 'name',
                        label: 'Name',
                        placeholder: 'Your name',
                        isRequired: true,
                        width: '1/2'
                    },
                    {
                        type: 'EmailFormControl',
                        name: 'email',
                        label: 'Email',
                        placeholder: 'Your email',
                        isRequired: true,
                        width: '1/2'
                    },
                    {
                        type: 'TextFormControl',
                        name: 'home-address',
                        label: 'Home address',
                        placeholder: 'Your home address',
                        isRequired: true,
                        width: 'full'
                    },
                    {
                        type: 'CheckboxFormControl',
                        name: 'updates',
                        label: 'Sign me up to receive updates',
                        width: 'full'
                    }
                ],
                submitLabel: 'Send Message'
            }
        },
        {
            type: 'model',
            name: 'media',
            label: 'Media',
            models: ['ImageBlock', 'VideoBlock'],
            default: {
                type: 'ImageBlock',
                url: 'https://assets.stackbit.com/components/images/default/contact.png',
                altText: 'Contact form image'
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
                    ],
                    boxShadow: '*'
                },
                title: {
                    fontWeight: ['400', '500'],
                    fontStyle: ['normal', 'italic'],
                    textAlign: ['left', 'center', 'right'],
                },
                text: {
                    textAlign: ['left', 'center', 'right']
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
                text: {
                    textAlign: 'left'
                }
            }
        }
    ]
};

import { Model } from '@stackbit/types';

export const HiddenFormControlModel: Model = {
    type: 'object',
    name: 'HiddenFormControl',
    label: 'Hidden',
    labelField: 'label',
    fieldGroups: [
        {
            name: 'styles',
            label: 'Styles'
        }
    ],
    fields: [
        {
            type: 'string',
            name: 'name',
            label: 'Name',
            required: true,
            default: ''
        },
        {
            type: 'string',
            name: 'label',
            label: 'Label',
            default: ''
        },
        {
            type: 'string',
            name: 'value',
            label: 'Value'
        },
        {
            type: 'boolean',
            name: 'hideLabel',
            label: 'Hide label',
            default: true
        },
        {
            type: 'boolean',
            name: 'isRequired',
            label: 'Is the field required?',
            default: false
        },
        {
            type: 'enum',
            name: 'width',
            group: 'styles',
            label: 'Width',
            options: [
                {
                    label: 'Full',
                    value: 'full'
                },
                {
                    label: 'One half',
                    value: '1/2'
                }
            ],
            default: 'full'
        }
    ]
}
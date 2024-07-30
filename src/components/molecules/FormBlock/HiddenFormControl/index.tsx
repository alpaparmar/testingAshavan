import * as React from 'react';
import classNames from 'classnames';

export default function HiddenFormControl(props) {
    const width = props.width || 'full';
    const labelId = `${props.name}-label`;
    const attr: any = {};
    if (props.label) {
        attr['aria-labelledby'] = labelId;
    }
    if (props.isRequired) {
        attr.required = true;
    }
    return (
        <div
            className={classNames('sb-form-control', {
                'sm:col-span-2': width === 'full'
            })}
            data-sb-field-path={props['data-sb-field-path']}
            style={{display: 'none'}}
        >
            <input
                id={props.name}
                className="sb-hidden"
                type="hidden"
                name={props.name}
                value={props.value}
                {...attr}
                data-sb-field-path=".name#@id .name#@name"
            />
        </div>
    );
}

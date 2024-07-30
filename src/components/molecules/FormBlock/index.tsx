import * as React from 'react';
import classNames from 'classnames';

import { getComponent } from '../../components-registry';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';

export default class FormBlock extends React.Component<any> {
    state = {
        submitted: false,
        error: false
    };

    formRef = React.createRef<HTMLFormElement>();

    formHandler(data, url) {
        return null;
    }

    handleSubmit(event, formAction) {
        event.preventDefault();

        const data = new FormData(this.formRef.current);
        const value = Object.fromEntries(data.entries());

        this.setState({
            submitted: false,
            error: false
        });

        this.formHandler(value, formAction)
            .then(() => {
                this.setState({
                    submitted: true
                });
                this.formRef.current.reset();
            })
            .catch(() => {
                this.setState({
                    error: true
                });
            });
    }

    componentDidUpdate(prevProps, prevState) {
        if (!prevState.submitted && this.state.submitted) {
            setTimeout(() => {
                this.setState({
                    submitted: false
                });
            }, 5000);
        }
    }

    render() {
        const {
            fields = [],
            elementId,
            variant = 'variant-a',
            action,
            useAxios,
            method,
            destination,
            submitLabel,
            successMsg,
            className,
            styles = {},
            'data-sb-field-path': annotation
        } = this.props;
        if (fields.length === 0) {
            return null;
        }
        const formHoneypotName = `${elementId}-bot-field`;
        return (
            <form
                className={classNames('sb-component', 'sb-component-block', 'sb-component-form-block', className)}
                name={elementId}
                id={elementId}
                {...(!useAxios ? { method: method } : null)}
                {...(!useAxios ? { action: action } : null)}
                {...(useAxios ? { onSubmit: (e) => this.handleSubmit(e, action)} : null)}
                data-netlify="true"
                ref={this.formRef}
                data-netlify-honeypot={formHoneypotName}
                data-sb-field-path={annotation}
            >
                <div className={classNames('w-full', 'flex', 'flex-col', { 'sm:flex-row sm:items-end': variant === 'variant-b' })}>
                    <div
                        className={classNames('grid', 'gap-y-4', 'sm:grid-cols-2', 'sm:gap-x-4', { 'sm:flex-grow': variant === 'variant-b' }, 'text-left')}
                        data-sb-field-path=".fields"
                    >
                        {useAxios && <input type="hidden" name="form-name" value={elementId} />}
                        {useAxios && <input type="hidden" name="form-destination" value={destination} />}
                        {fields.map((field, index) => {
                            const fieldType = field.type;
                            if (!fieldType) {
                                throw new Error(`form field does not have the 'type' property`);
                            }
                            const FormControl = getComponent(fieldType);
                            if (!FormControl) {
                                throw new Error(`no component matching the form field type: ${fieldType}`);
                            }
                            return <FormControl key={index} {...field} data-sb-field-path={`.${index}`} />;
                        })}
                    </div>
                    <div
                        className={classNames(
                            variant === 'variant-a' ? 'mt-8' : 'mt-4 sm:mt-0 sm:ml-4',
                            styles.submitLabel?.textAlign ? mapStyles({ textAlign: styles.submitLabel?.textAlign }) : null
                        )}
                    >
                        <button
                            type="submit"
                            className="sb-component sb-component-block sb-component-button sb-component-button-primary"
                            data-sb-field-path=".submitLabel"
                        >
                            {submitLabel}
                        </button>
                        
                    </div>
                </div>
                <div className={classNames('mt-2')}>
                    {this.state.submitted && <span className="ml-8">{successMsg ? successMsg : "Thank you, your submission was successful."}</span>}
                    {this.state.error && <span className="ml-8 text-info">Something went wrong, please try again.</span>}
                </div>
            </form>
        );
    }
}

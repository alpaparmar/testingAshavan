import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';

import { getComponent } from '../../components-registry';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { getDataAttrs } from '../../../utils/get-data-attrs';
import { Action, Badge } from '../../atoms';
import { AnnotatedField } from '@/components/Annotated';

export default function HeroSection(props) {
    const cssId = props.elementId || null;
    const colors = props.colors || 'colors-a';
    const sectionStyles = props.styles?.self || {};
    const sectionWidth = sectionStyles.width || 'wide';
    const sectionHeight = sectionStyles.height || 'auto';
    const sectionJustifyContent = sectionStyles.justifyContent || 'center';
    const sectionFlexDirection = sectionStyles.flexDirection || 'row';
    const sectionAlignItems = sectionStyles.alignItems || 'center';
    const imageDivPosition = props.media?.position || null;
    return (
        <div
            id={cssId}
            {...getDataAttrs(props)}
            className={classNames(
                'sb-component',
                'sb-component-section',
                'sb-component-hero-section',
                colors,
                'flex',
                'flex-col',
                'justify-center',
                mapMinHeightStyles(sectionHeight),
                sectionStyles.margin,
                sectionStyles.padding || 'py-12 px-4',
                sectionStyles.borderColor,
                sectionStyles.borderStyle ? mapStyles({ borderStyle: sectionStyles.borderStyle }) : 'border-none',
                sectionStyles.borderRadius ? mapStyles({ borderRadius: sectionStyles.borderRadius }) : null
            )}
            style={{
                borderWidth: sectionStyles.borderWidth ? `${sectionStyles.borderWidth}px` : null
            }}
        >
            <div className={classNames('flex', 'w-full', mapStyles({ justifyContent: sectionJustifyContent }))}>
                <div className={classNames('w-full', mapMaxWidthStyles(sectionWidth))}>
                    <div
                        className={classNames(
                            'flex',
                            mapFlexDirectionStyles(sectionFlexDirection),
                            mapStyles({ alignItems: sectionAlignItems }),
                            'space-y-8',
                            {
                                'lg:space-y-0 lg:space-x-8': sectionFlexDirection === 'row',
                                'space-y-reverse lg:space-y-0 lg:space-x-8 lg:space-x-reverse': sectionFlexDirection === 'row-reverse',
                                'space-y-reverse': sectionFlexDirection === 'col-reverse'
                            }
                        )}
                    >
                        <div className="flex-1 w-full">
                            {heroBody(props)}
                            {heroActions(props)}
                        </div>
                        {props.media && (
                            <div className={classNames('flex-1', 'w-full', imageDivPosition)}>
                                {heroMedia(props.media)}
                                {props.media?.showCaption && props.media?.caption && (
                                    <div className="absolute bg-white bg-opacity-70 left-0 mx-2 bottom-2 p-1.5 text-xs pointer-events-none">{props.media?.caption}</div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function heroMedia(media) {
    const mediaType = media.type;
    if (!mediaType) {
        throw new Error(`hero section media does not have the 'type' property`);
    }
    const Media = getComponent(mediaType);
    if (!Media) {
        throw new Error(`no component matching the hero section media type: ${mediaType}`);
    }
    return <Media {...media} data-sb-field-path=".media" />;
}

function heroBody(props) {
    const styles = props.styles || {};
    return (
        <div>
            {props.badge && <AnnotatedField path=".badge"><Badge {...props.badge} data-sb-field-path=".badge" /></AnnotatedField>}
            {props.title && (
                <AnnotatedField path=".title">
                    <h1 className={classNames('h1', styles.title ? mapStyles(styles.title) : null, { 'mt-4': props.badge?.label })} data-sb-field-path=".title">
                        {props.title}
                    </h1>
                </AnnotatedField>
            )}
            {props.subtitle && (
                <AnnotatedField path=".subtitle">
                    <p
                        className={classNames('text-xl', 'sm:text-2xl', styles.subtitle ? mapStyles(styles.subtitle) : null, { 'mt-4': props.title })}
                        data-sb-field-path=".subtitle"
                    >
                        {props.subtitle}
                    </p>
                </AnnotatedField>
            )}
            {props.text && (
                <AnnotatedField path=".text">
                    <Markdown
                        options={{ forceBlock: true, forceWrapper: true }}
                        className={classNames('sb-markdown', 'sm:text-lg', styles.text ? mapStyles(styles.text) : null, { 'mt-6': props.title || props.subtitle })}
                        data-sb-field-path=".text"
                    >
                        {props.text}
                    </Markdown>
                </AnnotatedField>
            )}
        </div>
    );
}

function heroActions(props) {
    const actions = props.actions || [];
    if (actions.length === 0) {
        return null;
    }
    const styles = props.styles || {};
    return (
        <div
            className={classNames('overflow-x-hidden', {
                'mt-8': props.title || props.subtitle || props.text || props.badge
            })}
            tabIndex={-1}
        >
            <div
                className={classNames('flex', 'flex-wrap', 'items-center', '-mx-2', styles.actions ? mapStyles(styles.actions) : null)}
                data-sb-field-path=".actions"
            >
                {actions.map((action, index) => (
                    <Action key={index} {...action} className="mb-3 mx-2 lg:whitespace-nowrap" data-sb-field-path={`.${index}`} />
                ))}
            </div>
        </div>
    );
}

function mapMinHeightStyles(height) {
    switch (height) {
        case 'screen':
            return 'min-h-screen';
    }
    return null;
}

function mapMaxWidthStyles(width) {
    switch (width) {
        case 'narrow':
            return 'max-w-screen-md';
        case 'wide':
            return 'max-w-screen-xl';
        case 'full':
            return 'max-w-full';
    }
    return null;
}

function mapFlexDirectionStyles(flexDirection) {
    switch (flexDirection) {
        case 'row':
            return ['flex-col', 'lg:flex-row'];
        case 'row-reverse':
            return ['flex-col-reverse', 'lg:flex-row-reverse'];
        case 'col':
            return ['flex-col'];
        case 'col-reverse':
            return ['flex-col-reverse'];
    }
    return null;
}

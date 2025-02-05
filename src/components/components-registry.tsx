import dynamic from 'next/dynamic';
import { ComponentType } from 'react';
import { Annotated } from './Annotated';
import { ContentObject, GlobalProps } from '@/types';

/**
 * The getComponent() function loads a component using dynamic import.
 *
 * Dynamic imports are useful when you wish to load a module conditionally. For example, if a home page renders the
 * "HeroSection" conditionally, then loading it with getComponent('HeroSection') will ensure that the "HeroSection"
 * is bundled only when used.
 */

type DynamicComponentProps = ContentObject & {
    global?: GlobalProps;
};

export const DynamicComponent: React.FC<DynamicComponentProps> = (props) => {
    const modelName = props?.type;

    // Resolve component by content type
    if (!modelName) {
        throw new Error(`Object does not have a 'type' property: ${JSON.stringify(props, null, 2)}`);
    }

    let Component = components[modelName] as ComponentType;
    if (!Component) {
        throw new Error(`No component matches type: '${modelName}'`);
    }

    return (
        <Annotated content={props} >
            <Component {...props} />
        </Annotated>
    );
};

export function getComponent(key: string): ComponentType {
    return components[key];
}

/**
 * Map of dynamically imported components.
 *
 * The mapping key of a dynamically imported component is the model name describing the props of that component.
 * And the value is the component imported via Next.js dynamic import. You should use dynamic components for large
 * components or components with heavy external dependencies that are used sparingly in your website's pages.
 * To learn more about Nextjs dynamic imports visit:
 * https://nextjs.org/docs/advanced-features/dynamic-import
 *
 * Dynamic components can be selected at run-time based on the type of their content (props). This is because
 * components are mapped by models that describe their content, and content's type always matches the model name.
 * For example, a page component can call `getComponent(section.type)` function, passing it the type of section
 * data it needs to render, and get back the component that can render that type of data:
 *
 *     const Section = getComponent(section.type);
 *     return <Section {...section} />;
 */
const components = {
    CheckboxFormControl: dynamic(() => import('./molecules/FormBlock/CheckboxFormControl')),
    ContactSection: dynamic(() => import('./sections/ContactSection')),
    CtaSection: dynamic(() => import('./sections/CtaSection')),
    EmailFormControl: dynamic(() => import('./molecules/FormBlock/EmailFormControl')),
    FaqSection: dynamic(() => import('./sections/FaqSection')),
    FeatureHighlightSection: dynamic(() => import('./sections/FeatureHighlightSection')),
    FeaturedItem: dynamic(() => import('./sections/FeaturedItemsSection/FeaturedItem')),
    FeaturedItemsSection: dynamic(() => import('./sections/FeaturedItemsSection')),
    FeaturedPeopleSection: dynamic(() => import('./sections/FeaturedPeopleSection')),
    FormBlock: dynamic(() => import('./molecules/FormBlock')),
    HeroSection: dynamic(() => import('./sections/HeroSection')),
    HiddenFormControl: dynamic(() => import('./molecules/FormBlock/HiddenFormControl')),
    ImageBlock: dynamic(() => import('./molecules/ImageBlock')),
    JobsSection: dynamic(() => import('./sections/JobsSection')),
    MediaGallerySection: dynamic(() => import('./sections/MediaGallerySection')),
    PostFeedSection: dynamic(() => import('./sections/PostFeedSection')),
    FeaturedPostsSection: dynamic(() => import('./sections/FeaturedPostsSection')),
    RecentPostsSection: dynamic(() => import('./sections/RecentPostsSection')),
    QuoteSection: dynamic(() => import('./sections/QuoteSection')),
    SelectFormControl: dynamic(() => import('./molecules/FormBlock/SelectFormControl')),
    TestimonialsSection: dynamic(() => import('./sections/TestimonialsSection')),
    TextareaFormControl: dynamic(() => import('./molecules/FormBlock/TextareaFormControl')),
    TextFormControl: dynamic(() => import('./molecules/FormBlock/TextFormControl')),
    TextSection: dynamic(() => import('./sections/TextSection')),
    VideoBlock: dynamic(() => import('./molecules/VideoBlock')),
    PageLayout: dynamic(() => import('./layouts/PageLayout')),
    PostLayout: dynamic(() => import('./layouts/PostLayout')),
    PostFeedLayout: dynamic(() => import('./layouts/PostFeedLayout')),
    PostFeedCategoryLayout: dynamic(() => import('./layouts/PostFeedCategoryLayout'))
};

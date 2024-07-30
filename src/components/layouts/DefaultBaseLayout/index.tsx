import * as React from 'react';
import Head from 'next/head';
import classNames from 'classnames';

import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { Annotated } from '@/components/Annotated';
import { seoGenerateTitle, seoGenerateMetaTags, seoGenerateMetaDescription } from '@/utils/seo-utils';

export default function DefaultBaseLayout(props) {
    const { global, ...page } = props;
    const { site } = global;
    const siteMeta = site?.__metadata || {};
    const pageMeta = page?.__metadata || {};
    const title = seoGenerateTitle(page, site);
    const metaTags = seoGenerateMetaTags(page, site);
    const metaDescription = seoGenerateMetaDescription(page, site);
    let canonicalUrl;
    // adding two <script> tags on lines 32 and 33 (just before </Head>) to always include the cookie consent scripts
    return (
        <div className={classNames('sb-page', pageMeta.pageCssClasses)} data-sb-object-id={pageMeta.id}>
            <div className="sb-base sb-default-base-layout">
                <Head>
                    <title>{title}</title>
                    {metaDescription && <meta name="description" content={metaDescription} />}
                    {metaTags.map((metaTag) => {
                        if (metaTag.format === 'property') {
                            // OpenGraph meta tags (og:*) should have the format <meta property="og:…" content="…">
                            // Save value of OpenGraph url tag as canonical URL
                            if (metaTag.property === 'og:url') {
                                canonicalUrl = metaTag.content;
                            }
                            return <meta key={metaTag.property} property={metaTag.property} content={metaTag.content} />
                        }
                        return <meta key={metaTag.property} name={metaTag.property} content={metaTag.content} />
                    })}
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    {site?.favicon && <link rel="icon" href={site.favicon} />}
                    {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
                    {title !== "Page Not Found - Ashavan" && <script src="https://cdn.websitepolicies.io/lib/cookieconsent/cookieconsent.min.js" defer></script>}
                    {title !== "Page Not Found - Ashavan" && <script src="/cookie-banner.js"></script>}
                </Head>
                {/* {site.header && <Header {...site.header} annotationPrefix={siteMeta.id} />} */}
                {site?.header && (
                    <Annotated content={site}>
                        <Annotated content={site.header}>
                            <Header {...site.header} />
                        </Annotated>
                    </Annotated>
                )}
                {props.children}
                {site?.footer && (
                    <Annotated content={site}>
                        <Annotated content={site.footer}>
                            <Footer {...site.footer} />
                        </Annotated>
                    </Annotated>
                )}
                {/* {site.footer && <Footer {...site.footer} annotationPrefix={siteMeta.id} />} */}
            </div>
        </div>
    );
}

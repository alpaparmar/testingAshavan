import * as React from 'react';
import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';

// import { getBaseLayoutComponent } from '../../../utils/base-layout';
// import BaseLayout from '../BaseLayout';
import DefaultBaseLayout from '../DefaultBaseLayout';
import { getComponent } from '../../components-registry';
import getPageUrlPath from '../../../utils/get-page-url-path';
import { Social, Link } from '../../atoms';

export default function PostLayout(props) {
    const { ...page } = props;
    // const BaseLayout = getBaseLayoutComponent(page.baseLayout, site.baseLayout);
    const sections = page.bottomSections || [];
    const dateTimeAttr = dayjs(page.date).format('YYYY-MM-DD HH:mm:ss');
    const formattedDate = dayjs(page.date).format('MMMM D, YYYY');
    const cssId = page.elementId || null;

    return (
        <DefaultBaseLayout {...props}>
            <main id="main" className="sb-layout sb-post-layout">
                <article className="colors-a px-4 sm:px-8 py-14 lg:py-20 pb-4 lg:pb-10">
                    <div className="max-w-screen-2xl mx-auto">
                        <header className="max-w-screen-md mx-auto mb-12 text-center">
                            <div className="text-lg mb-4">
                                <time dateTime={dateTimeAttr} data-sb-field-path="date">
                                    {formattedDate}
                                </time>
                            </div>
                            {page.title && <h1 data-sb-field-path="title">{page.title}</h1>}
                            <PostAttribution post={page} />
                        </header>
                        {page.markdownContent && (
                            <Markdown id={cssId} options={{ forceBlock: true }} className="sb-markdown max-w-screen-md mx-auto" data-sb-field-path="markdown_content">
                                {page.markdownContent}
                            </Markdown>
                        )}
                    </div>
                </article>
                {sections.length > 0 && (
                    <div data-sb-field-path="bottomSections">
                        {sections.map((section, index) => {
                            const Component = getComponent(section.type);
                            if (!Component) {
                                throw new Error(`no component matching the page section's type: ${section.type}`);
                            }
                            return <Component key={index} {...section} data-sb-field-path={`bottomSections.${index}`} />;
                        })}
                    </div>
                )}
            </main>
        </DefaultBaseLayout>
    );
}

function PostAttribution({ post }) {
    if (!post.author && !post.category) {
        return null;
    }
    const author = post.author ? postAuthor(post.author) : null;
    const category = post.category ? postCategory(post.category) : null;
    return (
        <div className="mt-6 text-lg">
            {author && (
                <>
                    {'By '}
                    {author}
                </>
            )}
            {category && (
                <>
                    {author ? ' in ' : 'In '}
                    {category}
                </>
            )}
        </div>
    );
}

function postAuthor(author) {
    const children = (
        <>
            {author.firstName && <span data-sb-field-path=".firstName">{author.firstName}</span>}{' '}
            {author.lastName && <span data-sb-field-path=".lastName">{author.lastName}</span>}{' '}&nbsp;
            {author.socialLinks.length > 0 && (
                <span data-sb-field-path=".socialLinks">
                    {author.socialLinks.map((link, index) => (
                        <span key={index}>
                            <Social {...link} data-sb-field-path={`.${index}`} />
                        </span>
                    ))}
                </span>
            )}
        </>
    );
    return author.slug ? (
        <Link data-sb-field-path="author" href={`/blog/author/${author.slug}`}>
            {children}
        </Link>
    ) : (
        <span data-sb-field-path="author">{children}</span>
    );
}

function postCategory(category) {
    return (
        <Link data-sb-field-path="category" href={getPageUrlPath(category)}>
            {category.title}
        </Link>
    );
}

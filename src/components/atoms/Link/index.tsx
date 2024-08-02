import * as React from 'react';
import NextLink from 'next/link';
import { Annotated } from '@/components/Annotated';

export default function Link({ children, href, ...other }) {
    // Pass Any internal link to Next.js Link, for anything else, use <a> tag
    // console.info('href->>>>>>>>>>>>>>>>>>>>>>>>', href, { ...other })
    const internal = /^\/(?!\/)/.test(href);
    if (internal) {
        return (
            <Annotated content={{ ...other }}>
                <NextLink href={href} {...other}>
                    {children}
                </NextLink>
            </Annotated>
        );
    }

    return (
        <a href={href} {...other}>
            {children}
        </a>
    );
}

export function seoGenerateMetaTags(page, site) {
    let pageMetaTags = {};

    if (site?.defaultMetaTags?.length) {
        site.defaultMetaTags.forEach((metaTag) => {
            pageMetaTags[metaTag.property] = metaTag.content;
        });
    }

    pageMetaTags = {
        ...pageMetaTags,
        ...(seoGenerateTitle(page, site) && { 'og:title': seoGenerateTitle(page, site) }),
        ...(seoGenerateOgDescription(page, site) && { 'og:description': seoGenerateOgDescription(page, site) }),
        ...(seoGenerateOgImage(page, site) && { 'og:image': seoGenerateOgImage(page, site) }),
        ...(seoGenerateOgImageAltText(page, site) && { 'og:image:alt': seoGenerateOgImageAltText(page, site) })
    };

    if (page?.metaTags?.length) {
        page.metaTags.forEach((metaTag) => {
            pageMetaTags[metaTag.property] = metaTag.content;
        });
    }

    let metaTags = [];
    Object.keys(pageMetaTags).forEach((key) => {
        if (pageMetaTags[key] !== null) {
            metaTags.push({
                property: key,
                content: pageMetaTags[key],
                format: key.startsWith('og') ? 'property' : 'name'
            });
        }
    });

    return metaTags;
}

export function seoGenerateTitle(page, site) {
    let title = page?.metaTitle ? page.metaTitle : page?.title;
    if (site?.titleSuffix && page?.addTitleSuffix !== false) {
        title = `${title} - ${site.titleSuffix}`;
    }
    return title;
}

export function seoGenerateMetaDescription(page, site) {
    let metaDescription = null;
    // Blog posts use the excerpt as the default meta description
    if (page?.__metadata.modelName === 'PostLayout') {
        metaDescription = page.excerpt;
    }
    // page metaDescription field overrides all others
    if (page?.metaDescription) {
        metaDescription = page.metaDescription;
    }
    return metaDescription;
}

export function seoGenerateOgDescription(page, site) {
    return seoGenerateMetaDescription(page, site);
}

export function seoGenerateOgImage(page, site) {
    let ogImage = null;
    // Use the site's default og:image field
    if (site?.defaultSocialImage) {
        ogImage = site.defaultSocialImage;
    }
    // Blog posts use the featuredImage as the default og:image
    if (page?.__metadata.modelName === 'PostLayout') {
        if (page.featuredImage?.url) {
            ogImage = page.featuredImage.url;
        }
    }
    // page socialImage field overrides all others
    if (page?.socialImage) {
        ogImage = page.socialImage;
    }

    // ogImage should use an absolute URL. Get the Netlify domain URL from the Netlify environment variable process.env.URL
    const domainUrl = site?.env?.URL ? site?.env.URL : null;

    if (ogImage) {
        if (domainUrl) {
            return domainUrl + ogImage;
        } else {
            return ogImage;
        }
    }
    return null;
}

export function seoGenerateOgImageAltText(page, site) {
    let ogImageAltText = null;
    let tags = null;
    // Use the site's default og:image:alt field
    if (site?.defaultSocialImage && site?.defaultMetaTags?.length) {
        tags = site.defaultMetaTags.filter((metaTag) => metaTag.property === 'og:image:alt');
        if (tags.length) {
            ogImageAltText = tags[0].content || null;
        }
    }
    // Blog posts use the featuredImage as the default og:image, so take the alt text from there
    if (page?.__metadata.modelName === 'PostLayout') {
        if (page.featuredImage?.url) {
            ogImageAltText = page.featuredImage.altText || null;
        }
    }
    // page socialImage field overrides all others, so look to the metaTags on the page
    if (page?.socialImage && page?.metaTags?.length) {
        tags = page.metaTags.filter((metaTag) => metaTag.property === 'og:image:alt');
        if (tags.length) {
            ogImageAltText = tags[0].content || null;
        }
        else {
            ogImageAltText = null;
        }
    }

    return ogImageAltText;
}
---
type: PageLayout
layout: PageLayout
metaTitle: null
metaDescription: 'Search for information, blog posts, and more on our website'
addTitleSuffix: true
socialImage: null
slug: search
metaTags:
  - type: MetaTag
    property: 'og:title'
    content: Search - Ashavan
  - type: MetaTag
    property: 'og:url'
    content: 'https://ashavan.co/search'
  - type: MetaTag
    property: 'og:description'
    content: 'Search for information, blog posts, and more on our website'
title: Search
sections:
  - type: TextSection
    elementId: ''
    colors: colors-a
    title: Search our site
    subtitle: Powered by DuckDuckGo
    actions: []
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-36
          - pb-9
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
      text:
        textAlign: center
  - type: ContactSection
    elementId: ''
    colors: colors-a
    backgroundSize: full
    form:
      type: FormBlock
      variant: variant-b
      elementId: search
      destination: ''
      fields:
        - type: TextFormControl
          name: q
          hideLabel: true
          isRequired: false
          width: full
          label: Search terms
        - type: HiddenFormControl
          name: kh
          value: '1'
          hideLabel: true
          isRequired: false
          label: kh
        - type: HiddenFormControl
          name: sites
          value: ashavan.co
          hideLabel: true
          isRequired: false
          label: sites
      submitLabel: Search
      action: 'https://duckduckgo.com/'
      useAxios: false
      method: GET
    media: null
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-72
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: center
      text:
        textAlign: center
---

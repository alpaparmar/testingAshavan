---
type: PostLayout
layout: PostLayout
metaTitle: USCDI's power will be stifled until write access is required - Nonstop Interop
slug: uscdi-power-write-access-20220930
metaDescription: >-
  USCDI can’t reach its full potential as long as the regulations for CHIT
  continue to focus on read and search capabilities.
addTitleSuffix: true
socialImage: /images/Road-sign-speed-humps-ahead-1664514000.jpg
metaTags:
  - type: MetaTag
    property: 'og:description'
    content: >-
      USCDI can't reach its full potential as long as the regulations for CHIT
      continue to focus on read and search capabilities.
  - type: MetaTag
    property: 'og:title'
    content: >-
      USCDI's power will be stifled until write access is required - Nonstop
      Interop - Ashavan
  - type: MetaTag
    property: 'og:image:alt'
    content: Yellow road sign that says "Speed humps ahead"
  - type: MetaTag
    property: 'og:type'
    content: article
  - type: MetaTag
    property: 'og:url'
    content: 'https://ashavan.co/blog/uscdi-power-write-access-20220930'
title: USCDI's power will be stifled until write access is required
date: '2022-09-30'
excerpt: >-
  USCDI can't reach its full potential as long as the regulations for CHIT
  continue to focus on read and search capabilities.
featuredImage:
  type: ImageBlock
  url: /images/Road-sign-speed-humps-ahead-1664514000.jpg
  altText: Yellow road sign that says "Speed humps ahead"
  caption: ''
bottomSections:
  - type: TextSection
    elementId: ''
    colors: colors-a
    actions:
      - type: Link
        altText: Share on LinkedIn
        url: 'https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fashavan.co%2Fblog%2Fuscdi-power-write-access-20220930'
        target: _blank
        rel: noopener
        showIcon: true
        icon: linkedin
        iconPosition: right
        elementId: ''
      - type: Link
        altText: Share on Twitter
        url: 'https://twitter.com/intent/tweet?text=USCDI%27s%20power%20will%20be%20stifled%20until%20write%20access%20is%20required%20-%20Nonstop%20Interop&url=https%3A%2F%2Fashavan.co%2Fblog%2Fuscdi-power-write-access-20220930'
        target: _blank
        rel: noopener
        showIcon: true
        icon: twitter
        iconPosition: right
        elementId: ''
    subtitle: Share this post
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
          - pt-0
          - pb-24
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
        fontWeight: 700
      text:
        textAlign: left
  - type: CtaSection
    elementId: ''
    colors: colors-f
    title: Subscribe to the blog
    text: |
      Get new post notifications in your inbox
    actions:
      - type: Button
        label: Sign up
        url: 'https://subscribepage.io/nonstop-interop'
        style: primary
        rel: noopener
        target: _blank
    backgroundImage: null
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
          - pt-24
          - pb-24
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
        borderRadius: full
      title:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
  - type: RecentPostsSection
    elementId: ''
    showDate: true
    showAuthor: false
    showExcerpt: false
    variant: variant-c
    actions:
      - type: Button
        label: View all
        altText: View all posts
        url: /blog
        style: secondary
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-24
          - pb-12
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
      actions:
        justifyContent: center
    title: Latest from Nonstop Interop
    subtitle: ''
    colors: colors-a
    recentCount: 3
elementId: postContent
author: content/data/team/person.json
---
![Yellow road sign that says "Speed humps ahead"](/images/Road-sign-speed-humps-ahead-1664514000.jpg)

Today is the final day to [submit feedback](https://www.healthit.gov/isa/united-states-core-data-interoperability-uscdi) to the ONC on version four of the USCDI. Since USCDI first came out in 2020, the ONC has made several useful updates and regularly raised the bar on the data that Certified Health Information Technology must be able to exchange. For example, version 2 added sexual orientation and gender identity as constituent data elements to better support care for LGBTQ+ patients, and version 3 brought the first billing-related data class of health insurance information. No doubt USCDI is an important standard that moves healthcare interoperability forward.

Yet USCDI can't reach its full potential as long as the regulations for CHIT continue to focus on read and search capabilities. Currently, vendors are required only to provide a standard API that can "[respond to requests](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-D/part-170/subpart-C/section-170.315#p-170.315\(g\)\(10\))" for the mandatory data points. This solves only one half of the interoperability equation. The ability for external systems to create and update data in a patient's chart is equally important in the pursuit of a competitive app-based ecosystem.

##### Write about that

Why is write access as important as read? For one, the ability to write data into an EHR opens up a large number of workflows for digital health companies. Remote patient monitoring, insurance verification, diagnostic questionnaires, and clinical research immediately come to mind, but the possibilities go well beyond such a short list.

Secondly—and just as importantly—write access better enables innovators to challenge the dominant position of EHRs as the guardians of our health information. Prioritizing read and search implies that the EHR knows all and you should just accept that. Anyone with experience in this industry, however, recognizes that the fragmented nature of health IT means the EHR can't be everywhere and know everything. There are numerous sources of data—from patients to wearables to insurance payers—that could meaningfully contribute to a patient's health record if they just had an easy, standards-based way to do so.

Plus, establishing a floor for CHIT to accept data over RESTful APIs will accelerate our shift to modern standards and technologies. Nowadays plenty of write operations occur, but vendors must work around limited API support and leverage options such as HL7v2 interfaces and file imports. These can work well in many instances, but they can take longer to implement, are harder to scale, and come with extra baggage such as the need for a VPN. The technology for 21st-century data exchange exists; we just need to nudge CHIT developers towards robustly supporting it.

##### Do it the write way

To be clear, federal rules don't need to require unlimited write access. They could take an incremental approach, first obligating updates and then create operations, and it may not make sense to mandate delete access via APIs. I acknowledge too that mandating write access will create additional burdens for CHIT developers, since validating, sanitizing, and ingesting data from an external source is inherently more complex and riskier than responding to a request. Yet another reason why slow and steady is likely best here. Nevertheless, it's important that we begin this journey now; otherwise the power of USCDI will continue to be stifled.

\---

Photo by [Michael Anthony](https://www.pexels.com/@michaelanthony/) on [Pexels](https://www.pexels.com)

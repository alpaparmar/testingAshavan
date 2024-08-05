---
type: PostLayout
layout: PostLayout
metaTitle: 'Dear EHRs, don''t be spooked by middleware - Nonstop Interop'
metaDescription: >-
  Middleware has been a scary concept for EHRs; the fears are misplaced,
  however, and interoperability would be better served if all varieties of
  software had access to EHRs’ integration options.
addTitleSuffix: true
socialImage: /images/Jack-o-lantern-head-1667192400.jpg
slug: ehrs-spooked-middleware-20221031
metaTags:
  - type: MetaTag
    property: 'og:description'
    content: >-
      Middleware has been a scary concept for EHRs; the fears are misplaced,
      however, and interoperability would be better served if all varieties of
      software had access to EHRs’ integration options.
  - type: MetaTag
    property: 'og:title'
    content: 'Dear EHRs, don''t be spooked by middleware - Nonstop Interop - Ashavan'
  - type: MetaTag
    property: 'og:type'
    content: article
  - type: MetaTag
    property: 'og:url'
    content: 'https://ashavan.co/blog/ehrs-spooked-middleware-20221031'
  - type: MetaTag
    property: 'og:image:alt'
    content: Jack-o'-lantern on the head of a shadowy figure
title: 'Dear EHRs, don''t be spooked by middleware'
date: '2022-10-31'
excerpt: >-
  Middleware has been a scary concept for EHRs; the fears are misplaced,
  however, and interoperability would be better served if all varieties of
  software had access to EHRs’ integration options.
featuredImage:
  type: ImageBlock
  url: /images/Jack-o-lantern-head-1667192400.jpg
  altText: Jack-o'-lantern on the head of a shadowy figure
  caption: ''
bottomSections:
  - type: TextSection
    elementId: ''
    colors: colors-a
    actions:
      - type: Link
        altText: Share on LinkedIn
        url: >-
          https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fashavan.co%2Fblog%2Fehrs-spooked-middleware-20221031
        target: _blank
        rel: noopener
        showIcon: true
        icon: linkedin
        iconPosition: right
        elementId: ''
      - type: Link
        altText: Share on Twitter
        url: >-
          https://twitter.com/intent/tweet?text=Dear%20EHRs%2C%20don%27t%20be%20spooked%20by%20middleware%20-%20Nonstop%20Interop&url=https%3A%2F%2Fashavan.co%2Fblog%2Fehrs-spooked-middleware-20221031
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
    colors: colors-a
    recentCount: 3
elementId: postContent
author: content/data/team/person.json
---
![Jack-o'-lantern on the head of a shadowy figure](/images/Jack-o-lantern-head-1667192400.jpg)

If you’ve been in health IT circles for a while, the description of “beings who roam the world at night searching for people whose blood they feed upon” may make you think of both [vampires](https://www.history.com/topics/folklore/vampire-history) and EHR companies. The comparison is grossly unfair, though you’ll certainly [bleed money](https://www.healthit.gov/faq/how-much-going-cost-me) over EHR implementation and maintenance. EHRs are not ghouls, but that doesn’t mean they’re perfect either.

Case in point: in the interoperability world, EHRs have historically been very skeptical of middleware applications. By middleware I mean not only your traditional interoperability engines that serve as an integration layer between multiple software systems, but also digital platforms that strive to provide an all-in-one experience for patients and providers (and therefore make the EHR’s UI irrelevant). Middleware providers have struggled to get listed on EHR app marketplaces and to gain access to the full suite of integration options.

EHRs have had some understandable concerns regarding middleware. One is that middleware applications often serve as a pass-through to other software. EHRs can’t truly know where the data sourced from their databases is ending up and how it’s being used. Is that iPaas feeding data only to a CRM to boost patient engagement, or is it also shipping demographics to marketers, data brokers, or worse?

Hand-in-hand with that is the criticism that middleware seeks the interoperability kitchen sink. By connecting to every API and pulling every data point, middleware provides a primordial soup of integrations, rather than a standardized, tightly defined product with prescriptive use cases. This is particularly problematic in an industry whose daily operations revolve around clear, structured workflows. EHRs don’t want to risk blowback from their customers for sanctioning second-class software, and they are not alone. Apple, for example, places [26 printed pages](https://developer.apple.com/app-store/review/guidelines/) of requirements upon App Store developers to prevent a bad experience for its customers.

Yet if a third-party vendor has developed inferior software, shouldn’t it be up to its customers—both prospective and actual—to make that judgement for themselves? What EHRs miss in their trepidation is that middleware companies sell pretty much exclusively to other businesses, not directly to consumers. These businesses—whether they are health systems, technology companies, or researcher organizations—are savvy buyers who should own the responsibility and power to choose the best products for their needs. Likewise, rather than EHRs being the arbiters of who should and shouldn’t receive data, middleware’s customers should retain the authority to determine the right recipients.

Unsaid by EHRs is the challenge that middleware presents to their revenue models. App developer programs often mandate an annual fee just to participate in the official marketplace; Oracle Cerner, for instance, [pulls in $15,000-25,000](https://code.cerner.com/apiaccess) annually per application validation, with only the higher tier earning you the ability to market the app on the App Gallery. If a middleware system lists itself and integrates on behalf of 15 destination systems, that’s 15 lost sources of annual recurring revenue for the EHR. I can’t help but suspect that this is a major cause of the quaking in their boots; as sympathetic as I am about the loss of revenue, the primary objective of interoperability is seamless data exchange, not higher profitability.

Middleware has been a scary concept for EHRs; thankfully the information blocking regulations’ new, broader reach has lessened their fear—or at least, their resistance—though [the lack of penalties](https://ashavan.co/blog/hhs-oig-past-due-info-blocking-20221006) is holding back the rules’ full effect. The fears are misplaced, however, and interoperability would be better served if all varieties of software had access to EHRs’ integration options. Let’s open up the playing field and let providers decide what’s a trick and what’s a treat.

\--- 

Photo by [Kenny Eliason](https://unsplash.com/@neonbrand) on [Unsplash](https://unsplash.com)

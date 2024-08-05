---
type: PostLayout
layout: PostLayout
metaTitle: Why interoperating in healthcare is hard - Nonstop Interop
metaDescription: >-
  Learn about the three key reasons why healthcare interoperability remains
  challenging
addTitleSuffix: true
socialImage: /images/Labyrinth-game-board-with-red-ball-1656306000.jpg
slug: interoperating-healthcare-hard-20220627
metaTags:
  - type: MetaTag
    property: 'og:description'
    content: >-
      Learn about the three key reasons why healthcare interoperability remains
      challenging
  - type: MetaTag
    property: 'og:title'
    content: Why interoperating in healthcare is hard - Nonstop Interop - Ashavan
  - type: MetaTag
    property: 'og:url'
    content: 'https://ashavan.co/blog/interoperating-healthcare-hard-20220627'
  - type: MetaTag
    property: 'og:type'
    content: article
  - type: MetaTag
    property: 'og:image:alt'
    content: Labyrinth game board with red ball
title: Why interoperating in healthcare is hard
date: '2022-06-27'
elementId: postContent
excerpt: >-
  Passing data between systems continues to be a struggle in 2022. Learn about
  the three key reasons why healthcare interoperability remains challenging.
featuredImage:
  type: ImageBlock
  url: /images/Labyrinth-game-board-with-red-ball-1656306000.jpg
  altText: Labyrinth game board with red ball
  caption: ''
  elementId: ''
bottomSections:
  - type: TextSection
    elementId: ''
    colors: colors-a
    actions:
      - type: Link
        altText: Share on LinkedIn
        url: 'https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fashavan.co%2Fblog%2Finteroperating-healthcare-hard-20220627'
        target: _blank
        rel: noopener
        showIcon: true
        icon: linkedin
        iconPosition: right
        elementId: ''
      - type: Link
        altText: Share on Twitter
        url: 'https://twitter.com/intent/tweet?text=Why%20interoperating%20in%20healthcare%20is%20hard%20-%20Nonstop%20Interop&url=https%3A%2F%2Fashavan.co%2Fblog%2Finteroperating-healthcare-hard-20220627'
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
author: content/data/team/person.json
---
![Labyrinth game board with red ball](/images/Labyrinth-game-board-with-red-ball-1656306000.jpg)

"It should be easy." If you've dealt with interoperability in healthcare at any point within the past decade, that thought has probably crossed your mind at least once. Innovation and ingenuity have led to software that can chat with you like a human, transmit money to a bank account across the globe, and track a package from the warehouse to the front door. But in healthcare, it can be a struggle simply to pass a consolidated clinical summary from a referring provider to a specialist. In my mind, there are three key reasons why healthcare interoperability remains challenging.

##### Availability

Healthcare technology didn't begin with a culture of interoperability. That's understandable, given that we can trace health information management systems back to the 1960s when the industry was truly entering uncharted waters and our technological capabilities were far more limited than today's. Integrations have been added as business needs arose and standards were defined, but I would argue this bias towards interoperability as an add-on rather than an intrinsic feature slowed its progress.

Even now, the culture of interoperability is nascent and the availability of integrations is incomplete. HL7v2 interfaces are widely supported by EHRs and ancillary systems, but their publisher-subscriber model and lack of inherent security make them ill-suited for modern web applications. API coverage is growing, but among the major EHRs such as Epic and Cerner, the majority of APIs only support pulling data out, not pushing data in, and only for a single patient at a time. Most EHRs, payers, and clearinghouses don't advertise direct database access for advanced data extraction and analytics. And high costs to integrate—which I assert is common throughout the tech industry—can make available integration methods de facto inaccessible.

##### Complexity

Healthcare is difficult to distill down to ones and zeros. For one, it is ubiquitous across the globe, which means that healthcare integrations must accommodate the enormous variety of cultural differences. Take something as basic as a patient's name; in the Western world, we are accustomed to a pattern of first names and family names, with most people also having a middle name. How then to interoperate with software designed for a totally different region, such as Ethiopia where [patronymics](https://en.wikipedia.org/wiki/Patronymic) dominate instead? Street addresses provide comparable challenges across borders, yet true interoperability can't function only for Western standards.

Secondly, meaningful healthcare data encompasses an array of data points, types, and formats. There are discrete values like vital signs that boil down to a number with a unit of measure. There are free-text strings ranging from a brief reason for a visit to lengthy rich-text notes. There are images, PDF documents, code sets, and more, some of which could be intensely private or critical for patient care. It isn't like integrating with Google Maps, where a few details about your origin and destination results in a mundane set of driving directions. Healthcare is a reflection of the realities of life, and life is complex.

##### Fragmentation

This factor is the most difficult one to overcome, in my opinion. If healthcare IT is a jigsaw puzzle, modern interoperability is trying to put it together only to realize several pieces don't fit. You might perfect one or two corners, but the full picture can't be seamless.

In healthcare we rely upon a vast number of systems and data repositories, from EHRs to ancillary lab and radiology systems to public health registries and others. No two software applications or databases have the exact same data points and in the exact same format. Not one is an authoritative data source for a majority of patients (at least, not unless Oracle can truly pull off a national health records database—but I digress).

Compare this to, say, developing smartphone apps, where Apple's iOS and Google's Android have cornered the market. To make my app work, I only need to code to the standards of two platforms, and as those standards evolve, I can make updates that work for all users at once. Admittedly I'm oversimplifying—there are aspects such as OS versions to consider—but the permutations are still more limited, and the points of integration will remain the same whether my user is in Jakarta or Jackson Hole.

We simply don't have this luxury today in healthcare technology and we may never enjoy it. No doubt industry standards such as HL7v2, ANSI X12, and FHIR help reduce the complexity of integrations, but they don't eliminate the need for understanding and adapting to the nuances of each source and destination system, which is a time-consuming chore. This will always be a source of friction in the race to build an interoperable healthcare network.

##### Speed limits remain

The struggle is real. Healthcare could very well be the only industry in the U.S. where the federal government has had to mandate a minimum data set that must be exchangeable through APIs and to specify rules to prevent information blocking. To me, this speaks volumes to how challenging healthcare interoperability remains and how far we have to go. I can't say with certainty where the finish line lies, but I can say the journey isn't easy.

\---

Photo by [Alexas_Fotos](https://pixabay.com/users/alexas_fotos-686414) on [Pixabay](https://pixabay.com)

---
type: PostLayout
layout: PostLayout
metaTitle: The evolution of interoperability (part 2) - Nonstop Interop
metaDescription: null
addTitleSuffix: true
slug: evolution-interoperability-20230511
metaTags:
  - type: MetaTag
    property: 'og:type'
    content: article
  - type: MetaTag
    property: 'og:title'
    content: The evolution of interoperability (part 2) - Nonstop Interop - Ashavan
  - type: MetaTag
    property: 'og:description'
    content: >-
      Tracking the shift towards patient-centric interoperability and the rise
      of more assertive regulators
  - type: MetaTag
    property: 'og:url'
    content: 'https://ashavan.co/blog/evolution-interoperability-20230511'
  - type: MetaTag
    property: 'og:image:alt'
    content: Several flowers in a row and in progressive stages of blooming
title: The evolution of interoperability (part 2)
date: '2023-05-11'
author: content/data/team/person.json
excerpt: >-
  Tracking the shift towards patient-centric interoperability and the rise of
  more assertive regulators
featuredImage:
  type: ImageBlock
  url: /images/Flowers-blooming-1683781200.jpg
  altText: Several flowers in a row and in progressive stages of blooming
  caption: ''
bottomSections:
  - type: TextSection
    elementId: ''
    colors: colors-a
    actions:
      - type: Link
        altText: Share on LinkedIn
        url: >-
          https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fashavan.co%2Fblog%2Fevolution-interoperability-20230511
        target: _blank
        rel: noopener
        showIcon: true
        icon: linkedin
        iconPosition: right
        elementId: ''
      - type: Link
        altText: Share on Twitter
        url: >-
          https://twitter.com/intent/tweet?text=The%20evolution%20of%20interoperability%20%28part%202%29%20-%20Nonstop%20Interop&url=https%3A%2F%2Fashavan.co%2Fblog%2Fevolution-interoperability-20230511
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
---
*This is the second post in a two-part series on the evolution of interoperability. Read part one* [*here*](/blog/evolution-interoperability-20230428)*.*

![Several flowers in a row and in progressive stages of blooming](/images/Flowers-blooming-1683781200.jpg)

Last time, we looked at how interoperability has changed from the 1980s through the Meaningful Use era. We reached a point where interoperability was mostly event-driven and based on individual connections, and where technical standards focused on specific use cases. Today I'd like to continue our walk through time, but to begin, we'll need to back up a touch to the early 2010s.

##### The discovery of FHIR

In the [Shahnameh](https://en.wikipedia.org/wiki/Shahnameh), legend has it that a king discovered fire when he threw a stone intending to kill a snake. He missed, but sparks flew when the stone hit another stone. Fire was found, an act [celebrated](https://parsi-times.com/2023/02/zoroastrians-celebrate-jashn-e-sadeh-in-iran/) to this day by Zoroastrians worldwide and many in Iran.

The discovery of FHIR is certainly less fanciful but no less consequential. Before FHIR, healthcare lacked a clear-cut standard for exchanging data through modern web-based technologies. The technical components ([OAuth](/blog/oauth-most-important-standard-interoperability-20221013), HTTPS, JSON, etc.) were there, but we hadn't turned towards representing data in discrete, interconnected concepts (e.g., patient demographics within a Patient, facility details within a Location, drug information within a Medication).

That changed when "[Resources for Healthcare](https://hl7.org/fhir/2011Aug/)" emerged in 2011. Though admittedly immature, we finally had a way to interoperate using a 21st century approach, much like Twitter or Facebook have always worked. FHIR has since grown bigger and stronger, with its fifth major version released earlier this year. Yet more important than the blossoming of the specification is how the healthcare IT community has embraced it. FHIR accelerators emerged to solve real-world problems with FHIR; the federal government began to push for FHIR adoption. This is a major shift from the old way, where different standards were developed and recommended for specific use cases. Instead, FHIR has become the foundational standard for healthcare interoperability, poised to one day replace narrower frameworks like HL7v2 and DICOM. 

##### It gets personal (and regulated)

![Timeline of interoperability milestones from 2010 to 2023](/images/Interoperability-timeline-3-1683781200.jpg)

FHIR hasn't been the only thing heating up over the past 10-ish years. Notably, interoperability has evolved to become more patient-centric. [Blue Button](https://www.va.gov/BLUEBUTTON/index.asp) launched in 2010 with the goal of empowering patients' access to their health data. Championed by both the VA and CMS, Blue Button has unlocked veterans' health data and Medicare beneficiaries' claims data via APIs. CMS went further in 2020 when it finalized the [Patient Access Rule](https://www.federalregister.gov/documents/2020/05/01/2020-05050/medicare-and-medicaid-programs-patient-protection-and-affordable-care-act-interoperability-and), which required affected payers to release FHIR R4 APIs. This opened the door for developers to build patient-facing apps powered by members' clinical and claims data.

CMS hasn't stopped there. Late last year, the agency proposed expanding API requirements for many payers by mandating support for [electronic prior authorization](/blog/cms-prior-auth-rule-20230302), the ability for payers to exchange data on a member, and the ability for providers to request member data individually or in bulk. Yet again, as proposed these APIs would all need to be FHIR R4 APIs. Not to be outdone, ONC has been more focused on interoperability since requiring patient-facing APIs in 2015. The highlight has been [USCDI](/blog/uscdi-power-write-access-20220930), which is like a baseline for interoperability nationwide. Under USCDI, certified EHRs must support exchanging select data elements through FHIR R4 APIs. The beauty is that new data elements are added to USCDI each year, thereby raising the bar for interoperability on a regular basis once ONC completes the necessary rulemaking.

These regulations demonstrate how the federal government has become more assertive in moving the needle for interoperability. Rather than waiting for the industry to voluntarily embrace FHIR, the government has made it a required standard on multiple occasions. Rather than relying on private certification programs, such as the [HIMSS maturity models](/blog/himss-stage-8-20221114), to incentivize the availability of APIs and the data they support, the government has mandated modern technologies and an ever-expanding scope of interoperability. This would have never happened 15 years ago, when technology was less ubiquitous and interoperability looked much different.

##### Marching on

The context of the past informs the dreams of our future. In merely a dozen years, we've seen a transition from individual standards to the broad-based FHIR, and we've seen government play a more active role in policing technology and patients' access to their data. I hope you've enjoyed this brief history; it makes me appreciate all the people who have worked tirelessly on interoperability since before I was born.

Now, I've used this series of posts to focus on the past, not the future. What lies ahead? Humans are [incredibly bad](https://www.rd.com/list/predictions-that-were-wrong/) at [predicting](https://www.poynter.org/reporting-editing/2015/the-internet-bah-classic-off-target-essay-appeared-20-years-ago/) the future—thus, I won't add to that miserable record. I will, though, highlight the potential of [TEFCA](/blog/teach-football-tefca-20230216). Once fully implemented with live QHINs, TEFCA will provide us with a network-based approach to interoperability from coast-to-coast. Rather than repeatedly building individual connections, systems will be able to route data wherever it needs to go by leveraging existing digital highways. I'm eager to see if TEFCA turns data exchange over networks into a popular choice; if so, this would truly be a milestone in the evolution of interoperability.

\---

Photo by [Edward Howell](https://unsplash.com/@edwardhowellphotography) on [Unsplash](https://unsplash.com)

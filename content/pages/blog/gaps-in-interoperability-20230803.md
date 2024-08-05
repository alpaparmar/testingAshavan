---
type: PostLayout
layout: PostLayout
metaTitle: The most significant gaps in interoperability - Nonstop Interop
metaDescription: null
addTitleSuffix: true
socialImage: null
slug: gaps-in-interoperability-20230803
metaTags:
  - type: MetaTag
    property: 'og:type'
    content: article
  - type: MetaTag
    property: 'og:url'
    content: 'https://ashavan.co/blog/gaps-in-interoperability-20230803'
title: The most significant gaps in interoperability
date: '2023-08-03'
author: content/data/team/person.json
excerpt: >-
  Interoperability isn't new, but its progress has been uneven and that has led
  to real-life disparities, both technological and practical.
featuredImage:
  type: ImageBlock
  url: /images/Mind-the-interoperability-gap-1691038800.jpg
  altText: Train platform with "Mind the Interoperability Gap" written in yellow
  caption: ''
bottomSections:
  - type: TextSection
    elementId: ''
    colors: colors-a
    actions:
      - type: Link
        altText: Share on LinkedIn
        url: >-
          https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fashavan.co%2Fblog%2Fgaps-in-interoperability-20230803
        target: _blank
        rel: noopener
        showIcon: true
        icon: linkedin
        iconPosition: right
        elementId: ''
      - type: Link
        altText: Share on Twitter
        url: >-
          https://twitter.com/intent/tweet?text=The%20most%20significant%20gaps%20in%20interoperability%20-%20Nonstop%20Interop&url=https%3A%2F%2Fashavan.co%2Fblog%2Fgaps-in-interoperability-20230803
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
![Train platform with "Mind the Interoperability Gap" written in yellow](/images/Mind-the-interoperability-gap-1691038800.jpg)

I recently returned from a quick personal trip to London. It was a jolly good time, filled with new friends and familiar experiences. Perhaps the only downside was the weather, but you can't ask for much in a city that's closer to the Arctic than the tropics.

If you've ever visited the home of Big Ben, you've likely taken the Tube and heard the unceasing refrain to "mind the gap between the train and the platform." This phrase, which [originated in the 1960s](https://www.mylondon.news/news/local-news/london-undergrounds-mind-gap-phrase-17178357), can be particularly helpful when the gap is rather [large and dangerous](https://www.mylondon.news/news/zone-1-news/london-underground-station-huge-gap-26713803). Thankfully, the chasms rarely cause anyone harm.

This naturally led the nerd in me to wonder, which gaps should we be paying mind to in healthcare interoperability? [Interoperability isn't new](/blog/evolution-interoperability-20230428), but its progress has been uneven and that has led to real-life disparities, both technological and practical. Interoperability's significant holes may not be as obvious as the empty space at Tube stations, but they are worth knowing and, more importantly, closing.

##### Webhooks are wanting

If you aren't familiar with webhooks, I plan to cover them in greater detail in a future post. For now, suffice it to say that webhooks are like push notifications in the world of APIs. Just like you might get an alert on your phone when there's a new email in your inbox, webhooks allow software system A to alert software system B when something new has occurred. A webhook message can be very simple, sometimes as little as the ID of the entity that was created or changed, or it can be more verbose and include details on what specifically changed, when, and by whom.

Webhooks are critical to full interoperability because they make APIs usable in event-based workflows, but sadly, webhooks have near-nonexistent support within healthcare IT. Among the major EHRs, none of them support true webhooks; athenahealth comes closest with its [changed data subscriptions](https://docs.athenahealth.com/api/guides/changed-data-subscriptions), but these differ from actual webhooks and are only available for athenahealth's proprietary APIs. The lack of webhooks means healthcare today must rely on clunkier non-API technologies, such as HL7v2 interfaces, to support event-based workflows like diagnostic orders and results. This makes it much harder for developers to innovate in specialties that rely on event-driven workflows.

##### Bulk is too basic

Sample any EHR's integration capabilities, and you will find the vast majority are designed for single-patient transactions. Epic, for instance, provides a wide range of integration capabilities, from HL7v2 interfaces to FHIR APIs to specialized web services for printing and device integration. When you need to retrieve or upload data across an entire population, however, the road becomes more arduous. You could try [Bulk FHIR](https://fhir.epic.com/Documentation?docId=fhir_bulk_data), but you'll face slow processing times, a limit of a thousand patients per request, and a constraint that the needed data falls within an available FHIR resource. Using Kit—Epic's method of opening up the Caboodle enterprise data warehouse to third-party vendors—will allow for larger pulls, but the database queries aren't free, and Kit includes a meager subset of all Epic data points.

With few exceptions, bulk data exchange simply hasn't been part of the culture of healthcare technology. This is somewhat understandable given the sensitive nature of healthcare data; no provider or payer wants a vendor to access more than the minimum necessary. Even today, the only federal regulation that touches on bulk data exchange is the requirement that certified EHRs support Bulk FHIR for the first version of USCDI—and this requirement only took effect seven months ago. Yet the industry must embrace bulk data transactions to enable advancements in artificial intelligence, population health, operations, and analytics. All these domains subsist on data, and lots of it, so we must make it easier for technology products to gather extensive amounts of data efficiently.

##### Can read, can't write

Similar to bulk exchange, the culture of healthcare interoperability has been far more focused on pulling data out of systems than pushing data in. None of [athenahealth's FHIR APIs](https://docs.athenahealth.com/api/resources/complete_list_athena_apis#List_of_available_FHIR_APIs_7) support writing to the EHR. Epic lists about [450 available FHIR APIs](https://fhir.epic.com/Specifications), yet by my count, only 32 allow for sending updates in. Yes, HL7v2 and X12 interfaces have historically had greater writing capabilities, such as the ability to create or update appointments, documents, and diagnostic results, but these point-to-point connections are more difficult to scale than APIs and often require a VPN tunnel to be configured and maintained.

If we accept the fact that much of healthcare occurs outside the walls of a hospital or clinic, then we must accept that other sources of healthcare data should be able to easily contribute to the patient's medical record. The ONC could help here by requiring EHRs to support [bidirectional data exchange](/blog/uscdi-power-write-access-20220930) for USCDI.

##### Clinical has been king

Lastly, interoperability's emphasis overwhelmingly has been on clinical data, rather than operational, administrative, or financial data. For example, no major EHR provides a way for third-party apps to fetch hospital occupancy metrics through a single API. Likewise, EHRs have dragged their feet on releasing billing-related APIs, and robotic process automation (aka screen-scraping) has become a favored tool in revenue cycle due to the lack of interoperable alternatives. On the regulatory front, the [first two versions of USCDI](https://www.healthit.gov/isa/united-states-core-data-interoperability-uscdi) included only clinical data elements, and the recently finalized USCDI v4 has nine times as many clinical data elements as non-clinical.

The absence of a spectrum of APIs hinders the adoption of new tools, such as revenue cycle management products, automated coding systems, and IT administration apps. They also make data collection for public health agencies more arduous. Imagine if, during the height of the COVID-19 pandemic, the CDC could have simply called an API to know the number of staffed, occupied, and available beds at a hospital. It would have provided faster data collection while eliminating [a complicated daily reporting task](https://www.hhs.gov/sites/default/files/covid-19-faqs-hospitals-hospital-laboratory-acute-care-facility-data-reporting.pdf) for overburdened health officials. No new technology is needed to close this gap; it just takes the willingness to make the interoperable exchange of all data a top priority.

\--- 

Image by [Greg Plominski](https://pixabay.com/users/gregplom-3802982) from [Pixabay](https://pixabay.com)

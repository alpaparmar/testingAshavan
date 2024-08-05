---
type: PostLayout
layout: PostLayout
metaTitle: Stress tests should be required for Certified Health IT - Nonstop Interop
addTitleSuffix: true
metaTags:
  - type: MetaTag
    property: 'og:url'
    content: 'https://ashavan.co/blog/stress-tests-certified-health-it-20220824'
  - type: MetaTag
    property: 'og:type'
    content: article
title: Stress tests should be required for Certified Health IT
date: '2022-08-24'
slug: stress-tests-certified-health-it-20220824
excerpt: >-
  If we are to have truly seamless integration in healthcare, we must have
  standards that enforce the speed and availability of data exchange, and CHIT
  should be held accountable to those standards.
featuredImage:
  type: ImageBlock
  url: /images/Female-weightlifter-performing-squats-1661317200.jpg
  altText: Female weightlifter performing squats
  caption: ''
bottomSections:
  - type: TextSection
    elementId: ''
    colors: colors-a
    actions:
      - type: Link
        altText: Share on LinkedIn
        url: >-
          https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fashavan.co%2Fblog%2Fstress-tests-certified-health-it-20220824
        target: _blank
        rel: noopener
        showIcon: true
        icon: linkedin
        iconPosition: right
        elementId: ''
      - type: Link
        altText: Share on Twitter
        url: >-
          https://twitter.com/intent/tweet?text=Stress%20tests%20should%20be%20required%20for%20Certified%20Health%20IT%20-%20Nonstop%20Interop&url=https%3A%2F%2Fashavan.co%2Fblog%2Fstress-tests-certified-health-it-20220824
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
![Female weightlifter performing squats](/images/Female-weightlifter-performing-squats-1661317200.jpg)

This month the Federal Reserve wrapped up its [annual stress test program](https://www.federalreserve.gov/supervisionreg/stress-tests-capital-planning.htm) for the largest American banks. Thanks to the Dodd-Frank Act of 2010, each year the Fed simulates the impact of a severe economic downturn on these pillars of finance to ensure they would remain solvent and able to support the economy. Earlier in the summer, the Fed announced that [all banks performed well](https://www.federalreserve.gov/newsevents/pressreleases/bcreg20220623a.htm), even in the face of tougher criteria than last year, and can withstand "total projected losses of $612 billion." More recently it outlined the [minimum capital requirements](https://www.federalreserve.gov/publications/files/large-bank-capital-requirements-20220804.pdf) for each institution to guarantee sufficient cushion against a recession.

Good to know, but this blog is not about banking and finance. (If it were, maybe we would call it Perpetual Pesos.) Yet we can learn something from the world of money that is pertinent to healthcare interoperability. Today, developers of Certified Health IT (CHIT) must meet a wide variety of requirements outlined in federal regulations, yet none of those regulations address the basic level of technical performance and stability. This needs to change. If we are to have truly seamless integration in healthcare, we must have standards that enforce the speed and availability of data exchange, and CHIT should be held accountable to those standards.

##### A dollar short

Under the current rules, CHIT must support [a host of workflows](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-D/part-170/subpart-C/section-170.315) from electronically ordering medications and labs to sending a Continuity of Care Document during a transition of care. The 21st Century Cures Act led to [API requirements](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-D/part-170/subpart-D/section-170.404) and information blocking rules as well. These are good things, but thus far the federal government's carrots and sticks have been aimed at the features and usage of clinically focused software.

Nothing in the current standards requires CHIT developers to simulate a large spike in API calls and HL7 interface messages or for vendor-hosted EHRs to guarantee a level of uptime. As our healthcare data highways become more congested, we need to elevate the importance of system performance and availability. Consumers, clinicians, and innovators need to be able to trust that when they reach out electronically for information, the source system will be almost assured to respond quickly.

##### Going from rags to riches

What would it look like to set and enforce performance standards for CHIT? I envision something akin to the Federal Reserve's stress test program, but with changes that account for the uniqueness of healthcare and for the regulatory processes already in place.

For one, any new rules should apply to all CHIT and not just the largest vendors. While some banks may be more important and impactful to our economy given their size, healthcare data is valuable regardless of the source or its parent company's market share. Considering the [fragmented nature](/blog/interoperating-healthcare-hard-20220627) of our data today, a patient could have meaningful information stored in both a major EHR used in a hospital and a tiny competitor used in a small physician clinic, so it's essential that every CHIT vendor meets expectations.

Secondly, the ONC has already defined a process for CHIT to attest that it follows the regulations and to conduct real-world testing to verify the technology meets the legal requirements. Congress should empower the ONC to define and enforce technical criteria that can be incorporated into this process. For example, CHIT could be required to measure and report annually the percentage of system uptime per production instance, the number of API calls received in total, the number of API calls that failed due to a server error, and the total and failed number of XDS.b document sharing transactions.

Additionally, the real world testing process could be enhanced to include simulations of high-volume transactions. In light of the growing focus on big data and analytics, I would advocate for CHIT to test and verify that they can efficiently respond to numerous simultaneous multi-patient requests, such as through Bulk FHIR. CHIT could be instructed on specific scenarios to test and data points to measure, and the ONC could use this information to publish an interoperability report card that allows health systems and app developers to better compare how well each product performs.

##### Pass the buck?

The framework I've described is simply a starting point and certainly needs refinement. I acknowledge there are some flaws out of the gate, mainly around who isn't included.

First, I've focused only on CHIT, but in reality, interoperability is important for all kinds of other non-certified products as well, such as data warehouses, PACS, and LIMS. Should we force these other systems to become certified as well? I don't think so, at least not within the current CHIT guidelines. Perhaps we could start with a voluntary program to allow ancillary applications to measure and report their technical performance.

Similarly, I've focused this discussion primarily on APIs and similar request-response exchange technologies. HL7v2 interfaces are still a big part of healthcare interoperability, however, and should not be left out. The challenge is that health systems often route these transactions through an interface engine, and EHRs can't be held accountable for the performance of another vendor's software. Again, there may be an opportunity for interoperability platforms and EHRs to collaborate and voluntarily demonstrate how well they perform together.

Lastly, CHIT can run simulations day and night, but what matters in the end is how well each production instance is performing in real life. This introduces complicating factors such as hardware and security software that can influence integration performance. Again, EHRs can't be held accountable for things not under their control, which would be the case for any product hosted by the healthcare systems. And I do not think we should impose new regulations on every meaningful user of CHIT, as that would introduce additional burdens on thousands of providers—some of whom, such as Critical Access Hospitals and Federally Qualified Health Centers, may not have the staff and resources to comply. Yet we must find a way to ensure the outcomes seen in an idealized test environment translate into the same bang for the buck in day-to-day interoperability.

\---

Photo by [Alora Griffiths](https://unsplash.com/@aloragriffiths) on [Unsplash](https://unsplash.com)

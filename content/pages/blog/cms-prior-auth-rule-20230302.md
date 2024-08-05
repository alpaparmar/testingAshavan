---
type: PostLayout
layout: PostLayout
metaTitle: 'CMS'' prior auth rule: game-changer or hot mess? - Nonstop Interop'
metaDescription: >-
  CMS needs to be bolder and more prescriptive to ensure standardized prior auth
  APIs are truly a game-changer for healthcare in the US.
addTitleSuffix: true
socialImage: /images/Swirling-books-1677736800.jpg
slug: cms-prior-auth-rule-20230302
metaTags:
  - type: MetaTag
    property: 'og:title'
    content: >-
      CMS' prior auth rule: game-changer or hot mess? - Nonstop Interop -
      Ashavan
  - type: MetaTag
    property: 'og:description'
    content: >-
      CMS needs to be bolder and more prescriptive to ensure standardized prior
      auth APIs are truly a game-changer for healthcare in the US.
  - type: MetaTag
    property: 'og:type'
    content: article
  - type: MetaTag
    property: 'og:url'
    content: 'https://ashavan.co/blog/cms-prior-auth-rule-20230302'
  - type: MetaTag
    property: 'og:image:alt'
    content: A pile of books swirling like a whirlpool
title: 'CMS'' prior auth rule: game-changer or hot mess?'
date: '2023-03-02'
author: content/data/team/person.json
excerpt: >-
  CMS needs to be bolder and more prescriptive to ensure standardized prior auth
  APIs are truly a game-changer for healthcare in the US.
featuredImage:
  type: ImageBlock
  url: /images/Swirling-books-1677736800.jpg
  altText: A pile of books swirling like a whirlpool
  caption: ''
bottomSections:
  - type: TextSection
    elementId: ''
    colors: colors-a
    actions:
      - type: Link
        altText: Share on LinkedIn
        url: >-
          https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fashavan.co%2Fblog%2Fcms-prior-auth-rule-20230302
        target: _blank
        rel: noopener
        showIcon: true
        icon: linkedin
        iconPosition: right
        elementId: ''
      - type: Link
        altText: Share on Twitter
        url: >-
          https://twitter.com/intent/tweet?text=CMS%27%20prior%20auth%20rule%3A%20game-changer%20or%20hot%20mess%3F%20-%20Nonstop%20Interop&url=https%3A%2F%2Fashavan.co%2Fblog%2Fcms-prior-auth-rule-20230302
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
![A pile of books swirling like a whirlpool](/images/Swirling-books-1677736800.jpg)

Prior authorization is no fun. Patients get anxious about whether services they need will be denied. Providers gripe about enduring years of training only to have greedy insurance companies tell them what is and isn't medically appropriate. Payers benefit from prior auth by reducing healthcare utilization and claims volume, but it comes at the cost of significant overhead and unwieldy processes. Perhaps only paper makers and faxing companies are happy with the status quo.

On the other hand, reading proposed rulemaking by the federal government is...kind of fun? Maybe only for consultants. It's certainly exciting to see proposed changes that will move an industry forward and bring about greater transparency and efficiency, and CMS' [proposed rule on electronic prior authorization](https://www.federalregister.gov/documents/2022/12/13/2022-26479/medicare-and-medicaid-programs-patient-protection-and-affordable-care-act-advancing-interoperability) will do just that. Embracing electronic prior auth could reduce administrative burden and save [nearly half a billion dollars](https://www.caqh.org/sites/default/files/2023-01/2022-caqh-index.pdf) annually, but there are key gaps that could lead to a frustrating mess when implementing portions of the rule. CMS needs to be bolder and more prescriptive to ensure standardized prior auth APIs are truly a game-changer for healthcare in the US.

##### Recapping the rulemaking

The first order of business is an overview of the proposed rule. It's rather difficult to condense 134 three-column pages into a few sentences, so I must exclude numerous details. We've shared a [series of LinkedIn posts](https://www.linkedin.com/search/results/content/?fromOrganization=[%2273933754%22]&keywords=prior%20auth%20OR%20chocolate&origin=FACETED_SEARCH&sid=osk&sortBy=%22relevance%22) that you may find helpful in learning about the rule beyond what's covered here.

###### *Who's affected?*

Two major groups: payers and providers. In terms of payers, Medicare Advantage organizations, state Medicaid and CHIP programs (both Fee-for-Service and managed care), and companies that sell plans through the federal health insurance marketplaces must comply. Notably, Medicare Fee-for-Service (aka "traditional Medicare") is not impacted. In terms of providers, clinicians and hospitals who receive incentive payments or penalties from CMS for their interoperability practices will have new measures to report on.

###### *What must they do?*

Payers will need to develop three new APIs: a Provider Access API that allows providers to pull data from payers about a member, a so-called PARDD API that supports prior authorization workflows, and a Payer-to-Payer API that allows insurance companies to exchange data with each other—for example, when a patient has concurrent plans and wants to share health data between them. Payers must also enhance their existing [Patient Access API](https://www.cms.gov/Regulations-and-Guidance/Guidance/Interoperability/index#CMS-Interoperability-and-Patient-Access-Final-Rule), which allows patients to connect their member data with apps of their choice, to include prior auth information. Lastly, affected payers will need to report annual metrics on Patient Access API usage and prior auth decision-making.

Providers must measure and report on the number of prior authorizations requested and how many were requested electronically via an insurer's PARDD API. The measures are the only new aspect here; CMS is baking them into existing processes for data collection and sharing as part of the [incentive programs](https://www.cms.gov/regulations-and-guidance/legislation/ehrincentiveprograms).

###### *What are the key dates?*

March 13 is the deadline for submitting comments on the proposed rule. Most provisions would take effect by January 1, 2026, though certain exceptions and exemptions are permitted.

##### Someone missed a spot

On the whole, the proposal outlines valuable changes. I applaud CMS for taking this step and recognize the significant effort it's taken to reach this point on the part of policymakers, industry players, and collaborative groups like the [Da Vinci Project](https://www.hl7.org/about/davinci/index.cfm). Here's where the rule falls short, however.

###### *FHIR suppression*

CMS is requiring all of the planned APIs to be FHIR APIs, and they are strongly encouraging the use of certain FHIR Implementation Guides to serve as playbooks for how payers design and develop their new APIs. Yet FHIR is only partially useful within prior authorization workflows because of [existing regulations](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-162/subpart-M/section-162.1302#p-162.1302(b)(2)(ii)) that require the use of X12 278 transactions. It is unlawful today for a provider to send a prior authorization request directly to a payer using FHIR, and CMS is not looking to change that with the proposed rule. Instead, it is cornering providers and payers into translating prior authorization messages between FHIR and X12 278 as they attempt to conform to incompatible regulations.

Imagine if every time you ate at a restaurant, the server had to translate your order into Morse code before sending it to the chef in the kitchen, and the chef had to do the same when announcing your dish was ready. It would be an unnecessary hoop to jump through and would likely doom the restaurant's operations. Translating data between formats isn't as hard on a computer, but CMS is nonetheless introducing greater [complexity](/blog/interoperating-healthcare-hard-20220627) into healthcare technology and forcing further reliance upon clearinghouses (which [may exchange FHIR](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-162/subpart-I/section-162.930) data under certain circumstances). If the agency believes FHIR is the future of healthcare interoperability, it needs to embrace FHIR fully and use this rule to add FHIR as a HIPAA-compliant standard for prior auth.

###### *Codify the codes*

Complementary to the above is the issue of code sets. X12 278 transactions have standard code sets that must be used, such as for the status or denial reason for a request. FHIR can't be so rigid, since it must work for healthcare workflows outside the US, thus an API can be FHIR-compliant while using completely novel codes. The recommended Implementation Guides mandate the X12 code sets, but CMS isn't willing to require those IGs "while they are still undergoing additional enhancements."

This leaves the health IT community crossing its fingers that everyone will do the right thing and use the tried-and-true code sets. It would be better if CMS asserted that the payers' APIs need to utilize the X12 code sets or that payers must provide a machine-readable mapping of their codes to the X12 ones. Either approach would provide consistency and reduce friction for health IT developers when working with the APIs.

###### *99 payers, but I don't know which one*

As discussed earlier, the Payer-to-Payer API would allow payers to exchange data with each other, thus making it easier for a patient to share data between concurrent payers or to move their data to their new payer if their health plan has changed. Notably, patients must opt-in to this data exchange, and payers must collect enough information to know who the other insurance company is and how that payer identifies the member (e.g., the member ID with the other payer).

When you contemplate all the different payers, brand names, and subsidiaries out there, I fear that identifying the right insurer is going to be a nightmare in this process. Proper payer identification is crucial, as that determines the URL you use to make the Payer-to-Payer API calls. Not knowing the correct URL is like being late for lunch and not knowing the address of the café you're trying to get to. You're going to end up in the wrong spot.

Consider Centene, which is one of the country's largest payers and which boasts the most plans on the marketplaces. It operates multiple brands, such as a different Ambetter brand in each of 27 states. But if you look up Ambetter in the de facto [national list of insurers](https://content.naic.org/cis_consumer_information.htm), you find only two. Payers often operate multiple subsidiaries that are the true licensed entities (SilverSummit Healthplan and Celtic Insurance Company would be two examples for Centene). If a new Humana member specifies they want to pull their data from "Ambetter," Humana must waste time and energy figuring out which Ambetter it is, what the true name of the insurance company is, and which URL to connect to.

The situation is not hopeless, however. CMS could beef up the proposed rule to address this challenge in two ways. First, CMS should require affected payers to leverage [the power of OAuth](/blog/oauth-most-important-standard-interoperability-20221013). OAuth allows apps to connect to one another in a secure fashion by proving that a user is really who they claim to be and sharing select data points across apps. For payer-to-payer data exchange, payer #1 could show a button within the member's online account that says "Connect to a different payer." Clicking the button would generate a unique, short-lived URL associated with the member's account. The member could then share that URL with payer #2, and payer #2 could immediately call that URL, ask the member to authenticate and approve the data exchange, and gather the member's health history. This would reduce the extra paperwork for members and insurers and is analogous to the process that Google and Facebook use when you leverage your existing account to sign into a different website.

A second, slightly lower-tech option would be to strongly encourage payer #2 to request payer #1's public website when the member provides their identifying information. While this approach wouldn't be as automatic as OAuth, having the website in addition to the payer's name would allow payer #2 to more easily research and discover the right payer to connect to. Payers could even build a collaborative database to map public websites to API URLs and automate data exchange down the line. The larger point is that we have technological options here that CMS should endorse, and if it doesn't, it risks discontent and poor adoption of the Payer-to-Payer API.

##### From good to great

Those aren't all the weaknesses of the proposed prior auth rule—I'll spare you my concerns regarding the required metrics and the conversion of prior auth guidelines into a usable format for APIs. But I want to reiterate that there is a lot to like about the proposed rule, and I'm thankful that we have the rulemaking process to scrutinize and improve upon federal action before it takes effect. A few prescriptive refinements are all that's needed to ensure CMS fosters a future of efficiency and interoperability, rather than one of confusion and regrets.

\---

Photo by [Pixabay](https://www.pexels.com/@pixabay/) on [Pexels](https://www.pexels.com)

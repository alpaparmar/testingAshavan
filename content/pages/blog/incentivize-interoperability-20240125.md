---
type: PostLayout
layout: PostLayout
metaTitle: It pays to incentivize interoperability - Nonstop Interop
metaDescription: null
addTitleSuffix: true
socialImage: null
slug: incentivize-interoperability-20240125
metaTags:
  - type: MetaTag
    property: 'og:type'
    content: article
  - type: MetaTag
    property: 'og:url'
    content: 'https://ashavan.co/blog/incentivize-interoperability-20240125'
title: It pays to incentivize interoperability
date: '2024-01-25'
author: content/data/team/person.json
excerpt: >-
  Financial incentives should be regularly in play for high-value/high-impact interoperability initiatives.
featuredImage:
  type: ImageBlock
  url: /images/Jason-Kelce-prior-auth-APIs-1706162400.jpg
  altText: Jason Kelce shirtless with word bubble that says "Only a 3-year wait for prior auth APIs!!!"
  caption: ''
bottomSections:
  - type: TextSection
    elementId: ''
    colors: colors-a
    actions:
      - type: Link
        altText: Share on LinkedIn
        url: >-
          https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.ashavan.co%2Fblog%2Fincentivize-interoperability-20240125
        target: _blank
        rel: noopener
        showIcon: true
        icon: linkedin
        iconPosition: right
        elementId: ''
      - type: Link
        altText: Share on Twitter
        url: >-
          https://twitter.com/intent/tweet?text=It%20pays%20to%20incentivize%20interoperability%20-%20Nonstop%20Interop&url=https%3A%2F%2Fwww.ashavan.co%2Fblog%2Fincentivize-interoperability-20240125
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
![Jason Kelce shirtless with word bubble that says "Only a 3-year wait for prior auth APIs!!!"](/images/Jason-Kelce-prior-auth-APIs-1706162400.jpg)

In recent weeks, HHS and its agencies have been anything but slackers. Each of the past three months has brought some kind of notable rulemaking that moves the needle on interoperability. In November, it was a proposed rule on [provider disincentives](https://www.federalregister.gov/documents/2023/11/01/2023-24068/21st-century-cures-act-establishment-of-disincentives-for-health-care-providers-that-have-committed) for information blocking. The ONC followed in December with its latest final rule for Health IT Certification, known as the [HTI-1 rule](https://www.healthit.gov/topic/laws-regulation-and-policy/health-data-technology-and-interoperability-certification-program). And just last week, CMS issued its most important [interoperability-related rule](https://www.cms.gov/newsroom/fact-sheets/cms-interoperability-and-prior-authorization-final-rule-cms-0057-f) since 2020, one that adds a host of requirements for prior authorization-related FHIR APIs.

But while our federal government no doubt moves, it doesn't necessarily move quickly, and it doesn't always ask others to move quickly either. The prior auth rule is a good example. Impacted payers—which include Medicare Advantage insurers, state Medicaid and CHIP programs, and payers who offer federal marketplace plans—have until January 1, 2027, to release their prior auth APIs, and these APIs only need to cover prior auth for procedures, not drugs.

Though I don't want to minimize the challenge of this task, three years is far too long a wait until prior auth begins to emerge from the Stone Age. If we want to rapidly improve prior authorization processes—and, more generally, accelerate the advancement of interoperability in healthcare—we should invest in financial incentives.

##### PA = Pretty Awful

Prior auth is basically a reality of life. If you have insurance and need a consultation with a specialist, a complex procedure, or an expensive medication, your insurance company will likely require pre-approval before agreeing to pay. This extra hoop to jump through doesn't please providers; 89% of respondents to [an AMA survey](https://www.ama-assn.org/system/files/prior-authorization-survey.pdf) said the prior auth process has negatively impacted their patients' care, and 88% feel it is a burdensome task.

Burden equates to wasted time and money. It's at such an extreme that [CMS estimates](https://www.federalregister.gov/public-inspection/2024-00895/medicare-and-medicaid-programs-patient-protection-and-affordable-care-act-advancing-interoperability) its final rule will collectively save practices and hospitals 230 million hours and $16 billion over 10 years. The Council for Affordable Quality Healthcare, which tracks adoption of electronic transactions for administrative workflows under HIPAA, is less generous, with its most recent estimate that fully electronic prior auth would save the industry (providers and payers) [$450 million annually](https://www.caqh.org/sites/default/files/2023-05/2022-caqh-index-report.pdf). (Note: CAQH defines electronic prior auth as X12 278 transactions, not API-based transactions, since HIPAA mandates the former.)

##### Moolah to get moving

Whichever estimate you believe, there's the potential to cut hundreds of millions of dollars in unnecessary spending by getting our industry to embrace modern technology—and that's for only one portion of a single workflow. But we're leaving that money locked up and out of reach if most payers (legally) delay deployment of the prior auth APIs until 2027. I don't begrudge CMS for setting that timeframe; insurance companies have a lot of work ahead of them, from [translating their prior auth criteria](/blog/cms-prior-auth-rule-20230302) into machine-computable rules to developing and testing their APIs, and no one wants to see a hasty and flawed rollout.

But that doesn't mean there aren't ways for public and private players to encourage the availability of prior auth APIs sooner. If payers release their APIs in 2025 or 2026, their billing providers will realize enormous savings sooner. One idea would be for providers and payers to arrange to share in these savings until the official deadline arrives. Another option could be for the federal government to temporarily increase payments or cost sharing for those leading-edge payers. Both approaches would reward innovation, speed, and efficiency and would still result in overall savings for our industry.

I will admit, this is an idea with holes and flaws. For one, any financial incentives from Washington will have to be paid for, because [our national debt](/blog/interoperability-debt-pie-20230525) isn't getting smaller. Second, the payers' prior auth APIs are less than helpful if EHRs don't support transacting with them, so some sort of benefit has to be considered for EHRs that provide early support.<sup>1</sup> And calculating, documenting, and exchanging the savings resulting from the prior auth APIs could be a burdensome process itself, negating some of the overall benefits.

Nonetheless, if we want to go big on prior authorization, we have to dream big. Thinking more broadly, I believe financial incentives should be regularly in play for high-value/high-impact interoperability initiatives. For example, [webhooks can add significant value](/blog/webhooks-biggest-gap-interoperability-20230822) and open the door to new innovations, so EHRs should be incentivized to offer webhooks until they are mandatory.

Right now the pace of change in interoperability is essentially the speed at which Congress passes new laws and HHS issues new rules—in other words, a slow, methodical grind. When greater interoperability can bring greater efficiency, lower spending, and healthier lives, we should be willing to commit money upfront to realize those benefits. In business, when you want something done, you invest not only time but also money into making it happen. Healthcare in America is a business, and interoperability must be one of its most important investments.

\---
###### Notes

**Note 1: EHRs and prior auth APIs**

CMS' prior auth rule does not affect EHRs in any way. Any rulemaking to require EHRs to support prior auth APIs would need to come from the ONC. It is widely expected that the ONC's next rule for Health IT Certification, the HTI-2 rule, will include this requirement when it is proposed this year.
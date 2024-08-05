---
type: PostLayout
layout: PostLayout
metaTitle: What if an EHR fails? - Nonstop Interop
metaDescription: >-
  While the comparisons aren't exact, we can draw valuable lessons for
  healthcare and interoperability from the recent banking firestorm.
addTitleSuffix: true
socialImage: /images/Silicon-valley-ehr-1678856400.jpg
slug: what-if-ehr-fails-20230315
metaTags:
  - type: MetaTag
    property: 'og:title'
    content: What if an EHR fails? - Nonstop Interop - Ashavan
  - type: MetaTag
    property: 'og:description'
    content: >-
      While the comparisons aren't exact, we can draw valuable lessons for
      healthcare and interoperability from the recent banking firestorm.
  - type: MetaTag
    property: 'og:type'
    content: article
  - type: MetaTag
    property: 'og:url'
    content: 'https://ashavan.co/blog/what-if-ehr-fails-20230315'
  - type: MetaTag
    property: 'og:image:alt'
    content: >-
      Man holding a phone with a questioning look on his face, standing beneath
      a sign that says "Silicon Valley EHR?"
title: What if an EHR fails?
date: '2023-03-15'
author: content/data/team/person.json
excerpt: >-
  While the comparisons aren't exact, we can draw valuable lessons for
  healthcare and interoperability from the recent banking firestorm.
featuredImage:
  type: ImageBlock
  url: /images/Silicon-valley-ehr-1678856400.jpg
  altText: >-
    Man holding a phone with a questioning look on his face, standing beneath a
    sign that says "Silicon Valley EHR?"
  caption: ''
bottomSections:
  - type: TextSection
    elementId: ''
    colors: colors-a
    actions:
      - type: Link
        altText: Share on LinkedIn
        url: >-
          https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fashavan.co%2Fblog%2Fwhat-if-ehr-fails-20230315
        target: _blank
        rel: noopener
        showIcon: true
        icon: linkedin
        iconPosition: right
        elementId: ''
      - type: Link
        altText: Share on Twitter
        url: >-
          https://twitter.com/intent/tweet?text=What%20if%20an%20EHR%20fails%3F%20-%20Nonstop%20Interop&url=https%3A%2F%2Fashavan.co%2Fblog%2Fwhat-if-ehr-fails-20230315
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
![Man holding a phone with a questioning look on his face, standing beneath a sign that says "Silicon Valley EHR?"](/images/Silicon-valley-ehr-1678856400.jpg)

Well...that escalated quickly.

The life of Silicon Valley Bank went into roller coaster mode last week as the bank [announced](https://ir.svb.com/news-and-research/news/news-details/2023/SVB-Financial-Group-Announces-Proposed-Offerings-of-Common-Stock-and-Mandatory-Convertible-Preferred-Stock/default.aspx) a share offering to offset nearly $2 billion in losses. Depositors, many of whom are startups or are connected to venture capital, promptly fled to the tune of [$42 billion](https://dfpi.ca.gov/wp-content/uploads/sites/337/2023/03/DFPI-Orders-Silicon-Valley-Bank-03102023.pdf) in a single day, and the fallout has pulled Signature Bank down with it and hammered plenty of regional financial institutions.

All this begs the question of whether we can draw any lessons for healthcare and interoperability. I'll concede that the comparisons can't be exact, but if we suspend some disbelief, what would happen in the extreme case of an EHR suddenly becoming unavailable to patients and providers? What harm could that do and is there anything we can do to prepare?

##### Long odds

Let's be clear that there are no signs that any major EHR companies are imminently threatened, nor would a collapse play out in the same way. At the most basic level, banks operate by accepting your deposits and making money on them through loans and investments. If a large number of account holders suddenly want to yank out their cash, a bank may have to sell securities (potentially at a loss) or borrow money to meet the demand.

EHRs are much different. While they will gladly take in more of your data and repurpose it for analytics, algorithms, and automation, wiping it out is a harder process. For one, [data retention regulations](https://library.ahima.org/PB/RetentionDestruction) obligate healthcare providers to hold on to your information for years, and in the US there is no [right to be forgotten](https://gdpr-info.eu/art-17-gdpr/). Nor is there any practical risk of a "run" that threatens an EHR's solvency. Revenue for an EHR company is typically dependent on factors like the number of concurrent users or the number of licensed modules, rather than the raw quantity of data on a hard drive.

##### A better bet

Instead, the more likely parallel to what we see in the financial world is the issue of access to your data. Suppose you woke up to the news that all patient records at your primary source of healthcare were inaccessible. Such a scenario isn't far-fetched; it could occur if a health system that hosts the EHR itself suddenly [closes its doors](https://www.healthcarefinancenews.com/news/dallas-independent-walnut-hill-medical-center-files-bankruptcy-after-sudden-closure), or a [ransomware attack](https://healthitsecurity.com/news/uvm-health-brings-ehr-back-online-one-month-after-ransomware-attack) forces IT systems offline, or a provider simply [doesn't pay its bills](https://clarksvillenow.com/local/acm-medical-clinic-closed-in-clarksville-as-employees-go-without-pay-lose-access-to-records/).

Thankfully such instances are rare and usually temporary, but that isn't guaranteed. Healthcare lacks a mechanism like the FDIC to serve as a backstop and restore faith and availability in times of crisis. If your data were permanently locked away, treatment would be disrupted, digital health apps that rely on connections to your patient record would be rendered ineffective, and transitioning to a new care provider would be very difficult. Patients would need to rebuild their clinical history from scratch, and the government won't be coming to the rescue.

##### Coming out ahead

What can we do to address this challenge? On a personal level, we should treat our health information like any other irreplaceable asset and back it up on a regular basis. Federal rules require certified EHRs to facilitate [exporting](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-D/part-170/subpart-C/section-170.315#p-170.315\(e\)\(1\)) your clinical information and [exchanging it](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-D/part-170/subpart-C/section-170.315#p-170.315\(g\)\(9\)) via APIs, so much like you might save important family photos on a flash drive, you can leverage these mandatory features to create a copy of your data for safekeeping. Perhaps downloading and archiving a copy of your medical information becomes an annual household ritual, like checking your credit report or getting an eye exam.

This is admittedly only a partial solution, however, and revised policies are warranted. The current regulations simply require that the APIs support [USCDI v1](https://www.healthit.gov/isa/united-states-core-data-interoperability-uscdi), so not all EHRs will allow retrieving things like diagnostic reports, encounter information, and detailed problems and medications. Policymakers should raise the bar for EHR developers and push them to support the latest version of USCDI, so that patients can safely archive a larger subset of their data.

CMS should also press forward with the Patient API and Provider API requirements in its proposed [prior authorization rule](/blog/cms-prior-auth-rule-20230302). While probably not CMS' primary intent of the proposal, these APIs open new options for patients and providers to retrieve valuable clinical data directly from payers, which could be a lifesaver if EHR data is inaccessible. The rule wouldn't help the uninsured population or Medicare Fee-for-Service members, but it would nonetheless help a significant majority of patients lower the risk of permanent loss of their medical history.

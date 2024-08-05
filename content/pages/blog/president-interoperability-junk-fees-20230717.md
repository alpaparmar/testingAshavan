---
type: PostLayout
layout: PostLayout
metaTitle: 'Mr. President, don''t ignore interoperability''s junk fees - Nonstop Interop'
metaDescription: null
addTitleSuffix: true
socialImage: null
slug: president-interoperability-junk-fees-20230717
metaTags:
  - type: MetaTag
    property: 'og:type'
    content: article
  - type: MetaTag
    property: 'og:url'
    content: 'https://ashavan.co/blog/president-interoperability-junk-fees-20230717'
title: 'Mr. President, don''t ignore interoperability''s junk fees'
date: '2023-07-17'
author: content/data/team/person.json
excerpt: >-
  Interoperability is such a core part of our personal and national health that
  more should be done to get it down to a fair price.
featuredImage:
  type: ImageBlock
  url: /images/Biden-junk-fees-1689570000.jpg
  altText: >-
    Edited photo of President Joe Biden and Lael Brainard before a screen that
    says "Junk Fees" and with a speech bubble that says "Interoperate with me,
    I'm Irish"
  caption: ''
bottomSections:
  - type: TextSection
    elementId: ''
    colors: colors-a
    actions:
      - type: Link
        altText: Share on LinkedIn
        url: >-
          https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fashavan.co%2Fblog%2Fpresident-interoperability-junk-fees-20230717
        target: _blank
        rel: noopener
        showIcon: true
        icon: linkedin
        iconPosition: right
        elementId: ''
      - type: Link
        altText: Share on Twitter
        url: >-
          https://twitter.com/intent/tweet?text=Mr.%20President%2C%20don%27t%20ignore%20interoperability%27s%20junk%20fees%20-%20Nonstop%20Interop&url=https%3A%2F%2Fashavan.co%2Fblog%2Fpresident-interoperability-junk-fees-20230717
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
![Edited photo of President Joe Biden and Lael Brainard before a screen that says "Junk Fees" and with a speech bubble that says "Interoperate with me, I'm Irish"](/images/Biden-junk-fees-1689570000.jpg)

The President of the United States is not a fan of fees. [Hidden fees](https://apnews.com/article/biden-junk-fees-pricing-livenation-airbnb-10c32ecf2306cad8123d55c392a8b887) for an Airbnb or concert ticket? He wants them wiped out. Overdraft and bounced check fees [from banks](https://apnews.com/article/inflation-biden-business-economy-government-and-politics-39153f8d641f587e2fccb53f94371401)? They've gotta go.

President Biden's [latest push](https://apnews.com/article/biden-health-care-insurance-prescription-drugs-e8960514ff32bcc37bb8becccf3112cf) against so-called "junk fees" dipped into the world of healthcare. Ten days ago, he announced a [new federal rule](https://www.federalregister.gov/documents/2023/07/12/2023-14238/short-term-limited-duration-insurance-independent-noncoordinated-excepted-benefits-coverage) to restrict short-term, limited-duration insurance (STLDI) and [new guidance](https://www.cms.gov/files/document/faqs-part-60.pdf) requiring healthcare facility fees to be revealed upfront. STLDI usually carries capped benefit amounts and doesn't cover pre-existing conditions, so the Biden administration is proposing to revert STLDI back to a maximum coverage period of three months. (President Trump's administration had extended it to 364 days.)

Some will cheer these changes, and some will criticize them. But for the interoperability community, we should be pushing the White House not to forget about healthcare's other junk fees—high fees for interoperability. There's a host of charges that impede frictionless data exchange and hinder innovation, and they've become ingrained within the culture of healthcare interoperability. It doesn't have to be this way, though, and we need the backing and attention of the President (and Congress) to reduce those costs.

##### HL7v2 interface fees

Let's start with an oldie but not-so-goodie. HL7v2 interfaces have been around for decades, and they are synonymous with high fees. [Epic's approach](https://www.epic.com/Docs/MUCertification.pdf) is typical; either you pay a one-time licensing fee plus an ongoing annual maintenance fee, or you package those together into one recurring fee (see the bottom of page 13 of the linked PDF). Either way the cat gets skinned, you will be bleeding.

EHRs generally don't disclose the exact costs, but it's [common knowledge](https://community.spiceworks.com/topic/175107-hl7-interface-cost-and-maintenance) that they run from $10,000-$20,000 per interface. When you think about the typical number of interfaces at play at a typical health system—ADTs, SIUs, ORMs, ORUs, DFTs, MDMs, and more—that's a hefty amount going towards interfaces. And keep in mind, those are simply the license and maintenance fees. Implementation service fees for establishing and configuring the data connections will require even more moolah.

##### API fees

APIs are the new way to interoperate, but the old habit of charging for them remains. Thankfully, many EHRs no longer charge integrators for using FHIR APIs required by USCDI, but that doesn't mean costs have been entirely eliminated.

Epic, for example, has shifted some of the burden away from third-party vendors and onto its customers. Health systems on Epic must pay [subscription fees](https://fhir.epic.com/Download/ApiLicenseAgreement) in order for its FHIR APIs to be usable by vendors (see section 5 "Subscription and Other Fees"). Oracle Cerner takes [a similar approach](https://www.cerner.com/certified-health-it), imposing a host of setup and annual fees that could bring the price of a first-time implementation to over $50,000 (click the "Keep Reading" button under the "Certified API Technology Fees" section). And several EHRs offer so-called ["non-certified"](https://docs.athenahealth.com/api/resources/complete_list_athena_apis) or "private" APIs that come with per-transaction costs; the amounts vary, but I've seen transaction fees range from 1 cent to $1.24 per API call. That can be cost-prohibitive for apps with a large user base or that need significant amounts of data.

##### Exclusive marketplaces

In fairness to EHR companies, platforms' charging fees for interoperability is not new; [Apple](https://arstechnica.com/gadgets/2021/03/google-undercuts-apple-with-new-15-revenue-share-for-certain-play-apps/), Google, [Salesforce](https://developer.salesforce.com/docs/atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_rev_share.htm), and [Shopify](https://shopify.dev/docs/apps/store/revenue-share)—just to name a few—have been milking app developers for 15-30% of revenue for years. The main reason they can do this is that they host exclusive marketplaces and developer programs. Want to create an awesome iOS app? You'll have to play by Apple's rules, get approved for their App Store, and share a large chunk of your revenue with them. Any attempt to wriggle yourself out of these handcuffs will get you booted and banned.

EHRs have striven to copy this approach, though thankfully information blocking rules and certified FHIR API requirements have ensured some open integration methods remain. Nonetheless, EHRs maintain a level of monopoly over how integrators distribute apps to health systems. You can't simply search the Internet and download any app you desire from wherever you'd like, such as a competing marketplace. Instead, integrators must register and distribute their app within the EHR's designated developer portal. Furthermore, getting your app listed on an official marketplace to showcase and market your offering will require a big wad of cash; Cerner, for example, asks for [$25,000 per year per app](https://code.cerner.com/apiaccess) and $3,000 per production connection. The lack of choice, and the high fees it engenders, are simply wrong.

##### Unchain us from these charges

To borrow from Christopher Bullock (not [Benjamin Franklin](https://en.wikipedia.org/wiki/Death_and_taxes_%28idiom%29), you may feel that nothing in life is certain except death, taxes, and integration fees. You know they're a problem when the federal government must bake language regarding fees into its [information blocking rules](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-D/part-171/subpart-C/section-171.302), so that vendors are on notice that excessive charges will not be tolerated. To be clear, I don't believe companies should be prohibited from levying anything at all, and I also acknowledge how serious it is to ask government to intervene in matters of business. As a business owner, I don't take that lightly. However, I firmly believe interoperability is such a core part of our personal and national health that more should be done to get it down to [a fair price](/blog/fair-price-interoperability-20230622). Mr. President, I hope you'll make healthcare interoperability the next task in your battle against junk fees.

---
type: PostLayout
layout: PostLayout
metaTitle: >-
  Tesla's charging deals illustrate a flawed approach to interoperability -
  Nonstop Interop
metaDescription: null
addTitleSuffix: true
socialImage: null
slug: tesla-flawed-approach-interoperability-20230614
metaTags:
  - type: MetaTag
    property: 'og:type'
    content: article
  - type: MetaTag
    property: 'og:url'
    content: 'https://ashavan.co/blog/tesla-flawed-approach-interoperability-20230614'
title: Tesla's charging deals illustrate a flawed approach to interoperability
date: '2023-06-14'
author: content/data/team/person.json
excerpt: >-
  The auto industry's embrace of a still-proprietary standard contrasts with the
  evolution of healthcare interoperability standards and tips the scales towards
  a single company.
featuredImage:
  type: ImageBlock
  url: /images/Tesla-charger-1686718800.jpg
  altText: Tesla charger at night
  caption: ''
bottomSections:
  - type: TextSection
    elementId: ''
    colors: colors-a
    actions:
      - type: Link
        altText: Share on LinkedIn
        url: >-
          https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fashavan.co%2Fblog%2Ftesla-flawed-approach-interoperability-20230614
        target: _blank
        rel: noopener
        showIcon: true
        icon: linkedin
        iconPosition: right
        elementId: ''
      - type: Link
        altText: Share on Twitter
        url: >-
          https://twitter.com/intent/tweet?text=Tesla%27s%20charging%20deals%20illustrate%20a%20flawed%20approach%20to%20interoperability%20-%20Nonstop%20Interop&url=https%3A%2F%2Fashavan.co%2Fblog%2Ftesla-flawed-approach-interoperability-20230614
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
![Tesla charger at night](/images/Tesla-charger-1686718800.jpg)

The past three weeks have brought some notable news within interoperability—but for cars, not healthcare. [Ford declared](https://apnews.com/article/ford-tesla-supercharger-network-charging-evs-851373260a81ed39d7fce7e10fdeec1f) in late May that it will move to adopt Tesla's standard for electric vehicle charging; by this time next year, Ford EV owners will have access to Tesla's network of chargers, and new cars that Ford produces from 2025 onwards will use Tesla's currently proprietary charging standard. [General Motors followed](https://apnews.com/article/general-motors-tesla-charging-stations-electric-vehicles-f53d07e5459aac0c9c6723a6469fbe6d) last week with much the same announcement, ratcheting up the pressure on other automakers to follow suit. It's safe to say the road ahead likely leads to Tesla's standard becoming [the universal one](https://techcrunch.com/2023/06/12/ev-charger-networks-are-turning-to-tesla-standard-as-support-accelerates/) in North America. Amazing how much can change in three weeks.

Is this good news or bad? Like anything of consequence, that [depends on your perspective](/blog/perception-the-difference-for-interoperability-20230412). Media outlets and financial analysts were quick to point out the benefits, such as unlocking the fastest charging on the market for even more cars and reducing the friction of EV adoption. Clearly it will be a financial boon for Tesla as more vehicles to charge means more revenue for the mother ship; Tesla's stock rose 27% from May 26 through June 9, soundly beating the S&P 500's 3.5% climb.

But we shouldn't ignore the disadvantages of this approach and the lessons we can learn for healthcare interoperability. The auto industry's embrace of a still-proprietary standard contrasts with [the evolution of healthcare interoperability](/blog/evolution-interoperability-20230428) standards and tips the scales towards a single company. Consumers and carmakers should be wary of these changes leading to unpleasant shocks.

##### Untangling the wires

Unless you're an expert on EVs, your brain might need a recharge on charging standards. (Note: this post focuses on North America, as standards vary globally.) EV charging has [two key technical aspects](https://www.pcmag.com/how-to/can-i-plug-in-charging-an-electric-car-explained). One is the level of charging, which essentially means the power and speed at which vehicles can charge. Most public chargers in the US are Level 2 chargers, but these are pretty slow and only suitable when you can leave your car charging for a couple of hours. Level 3 chargers, including Tesla's Superchargers, are the fastest; automakers want their customers to have convenient access to these to make charging less of a hassle, especially on road trips.

The second aspect is the shape and size of the connector and inlet. Think of the connector as the plug at the end of a power cord and the inlet as the outlet in a wall. The plug and outlet must match up or you'd never be able to plug anything in. EV connectors and inlets are either NACS, which is Tesla's proprietary standard that (as of now) only its cars use and support, and CCS, which is used by almost every other manufacturer and which is a [public industry standard](https://webstore.iec.ch/publication/59922) that has gone through the standards development process. A key aspect of Ford and GM's decision is that their cars will move away from CCS and adopt NACS, with an adapter needed for vehicles that still have a CCS inlet. The top three US EV producers—representing [60% of the current market](https://www.reuters.com/world/us/white-house-says-tesla-chargers-available-federal-dollars-long-they-include-ccs-2023-06-09/)—will be on NACS in short order.

I think any objective observer would agree that Tesla's charging infrastructure is better. In addition to having the most Level 3 chargers in North America, the NACS design is slimmer and lighter. Credit is due to Tesla as well for [publishing NACS](https://www.tesla.com/blog/opening-north-american-charging-standard) for other automakers and charging infrastructure companies to utilize, and it says it's working to make NACS a public standard. This is certainly not entirely out of altruism; Tesla must make its charging network usable by other brands in order to qualify for billions in federal subsidies.

##### Watts not to like?

There is no guarantee, however, that NACS will become a public standard. Such a process can take over a year, and until that happens, Tesla could choose to modify the standard without input from others, limit information sharing with standards development committees, or reverse itself and keep its specification proprietary. To be clear, there is no indication that Tesla will do such things, but they remain distinct possibilities. To relate this back to healthcare interoperability, imagine that FHIR was originally a proprietary standard created by ACME EHR company. One day ACME says, "We're opening up FHIR to everyone!" and the health IT world rejoices. But then as more and more EHRs and digital health apps get onboard with FHIR, ACME retains control and slow-walks making it a truly open, multistakeholder standard. Suddenly those EHRs and apps are stranded on a ship with an uncooperative captain.

That scenario would be even worse if ACME is able to financially gain from the use of FHIR, such as through royalties or pay-to-play fees. No one would appreciate a shakedown like that. The circumstances for Tesla aren't quite the same, but no doubt Tesla will see monetary benefits from its Ford and GM arrangements. Until other charging networks build out NACS infrastructure, consumers will have little choice but to rely on Tesla chargers. Tesla could earn money from selling NACS-to-CCS adapters or mandating network access fees, and while the company has historically shied away from advertising, driving more cars to its chargers creates a stellar opportunity to self-promote or sell ad space at its charging stations. Busier charging stations also increase the likelihood that Tesla can collect [idle fees](https://www.tesla.com/support/supercharger-idle-fee). Cha-ching, cha-ching, cha-ching.

Lastly, a very important distinction is needed. While Tesla has opened up its NACS standard, these deals with Ford and GM do not open up its entire network. Reports are that 12,000 of the 17,000 Superchargers will be accessible to the latter two's drivers; ostensibly, Tesla is reserving 5,000 Superchargers for its own customers' exclusive use. The end result is that Tesla gets to decide where thousands of drivers can and can't charge. Again, tying back to healthcare, this would be like an HIE picking and choosing which health systems a provider can request clinical data from. To maximize the power of networks, they must be truly interoperable, and they can't be truly interoperable if not every point on the network is equally accessible.

##### Lighting the way

What would be the better approach? There’s no doubt we need to get to a common charging standard; can you imagine how painful it would be if the nozzle on a gasoline pump came in a variety of shapes, like diamond and trapezoid? As I mentioned earlier, NACS is likely the best standard out there today, but that doesn't mean it's the best it can be.

As it undergoes peer review and becomes a truly open standard, we may find that changes are needed to make NACS truly interoperable across all vehicles. Car companies, Tesla included, and charging vendors should be uniting around a single, public, and interoperable charging standard and baking that into vehicles and charging stations. We absolutely can start with NACS as the initial proposal, but we should allow it to go through revisions, improvements, and testing before everyone jumps onto the bandwagon. This is what we do for FHIR, where HL7 leads a standards development process that is [well-documented](https://confluence.hl7.org/display/HL7/Understanding+the+Standards+Process), consensus-based, and open to all, and where new proposals are validated in the real world on multiple occasions to verify they are the best choice. The EV industry would do well not to short-circuit truly fair and open progress in charging, and it could learn some valuable lessons from the healthcare IT community.

\--- 

Photo by [Paul Steuber](https://unsplash.com/@paulsteuber) on [Unsplash](https://unsplash.com)

---
type: PostLayout
layout: PostLayout
metaTitle: What's a fair price for interoperability? - Nonstop Interop
metaDescription: null
addTitleSuffix: true
socialImage: null
slug: fair-price-interoperability-20230622
metaTags:
  - type: MetaTag
    property: 'og:type'
    content: article
  - type: MetaTag
    property: 'og:url'
    content: 'https://ashavan.co/blog/fair-price-interoperability-20230622'
title: What's a fair price for interoperability?
date: '2023-06-22'
author: content/data/team/person.json
excerpt: >-
  It's time healthcare priced interoperability as a core necessity rather than a
  premium feature.
featuredImage:
  type: ImageBlock
  url: /images/Reddit-private-community-1687410000.jpg
  altText: >-
    Notification box from Reddit stating that the mildly interesting subreddit
    is private in protest of Reddit's proposed API changes
  caption: ''
bottomSections:
  - type: TextSection
    elementId: ''
    colors: colors-a
    actions:
      - type: Link
        altText: Share on LinkedIn
        url: >-
          https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fashavan.co%2Fblog%2Ffair-price-interoperability-20230622
        target: _blank
        rel: noopener
        showIcon: true
        icon: linkedin
        iconPosition: right
        elementId: ''
      - type: Link
        altText: Share on Twitter
        url: >-
          https://twitter.com/intent/tweet?text=What%27s%20a%20fair%20price%20for%20interoperability%3F%20-%20Nonstop%20Interop&url=https%3A%2F%2Fashavan.co%2Fblog%2Ffair-price-interoperability-20230622
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
![Notification box from Reddit stating that the mildly interesting subreddit is private in protest of Reddit's proposed API changes](/images/Reddit-private-community-1687410000.jpg)

When the Internet is mad about something, it goes for shock and awe. As [far back as 1996](http://www.cnn.com/TECH/9602/cyber_censors/index.html), websites have intentionally gone unusable in the hopes of jolting the public into action or depriving corporate antagonists of money. [The 2012 uprising](https://en.wikipedia.org/wiki/Protests_against_SOPA_and_PIPA) over two pieces of federal legislation prompted social media sites to go dark, led to GoDaddy temporarily losing thousands of domains, and ultimately killed the proposals.

Last week many Reddit communities (aka subreddits) waged civil war in protest of the [company's own changes](https://www.reddit.com/r/reddit/comments/145bram/addressing_the_community_about_changes_to_our_api/). Reddit announced in April that, among other things, it would begin charging for API calls, and [the anticipated costs](https://www.reddit.com/r/apolloapp/comments/13ws4w3/had_a_call_with_reddit_to_discuss_pricing_bad/) have spurred popular Reddit apps to announce they will shut down. This comes on the heels of Twitter's move to [monetize its API](https://www.wired.co.uk/article/twitter-data-api-prices-out-nearly-everyone) and [cut off](https://www.theverge.com/2023/1/19/23562947/twitter-third-party-client-tweetbot-twitterific-ban-rules) access to any competitor apps.

Frankly, if Reddit were a healthcare software company, its announcement would have been a nothingburger. What to some may seem like a sudden and exorbitant shift is par for the course in our industry. Integration fees are far too common (and excessive) in healthcare technology, and Reddit's saga teaches the healthcare IT community an important lesson: we need to reframe what's a fair price for interoperability.

##### Summarizing the swordfight

A heaping amount of context is necessary. First, Reddit is unique among the major social media companies in that it grants the moderators of subreddits a large amount of control. Beyond complying with a few platform-wide regulations, moderators set the rules, police their community, and determine the visibility of content. This power is the price Reddit pays in exchange for having volunteers handle the vast majority of oversight. Rather than face the expense and controversy inherent to the top-down approach Twitter and Facebook take, Reddit can lay some foundational rules and leave the rest to ordinary users.

Secondly, Reddit's changes affect its API in a few ways. New API rate limits will go into effect on July 1. Additional fees begin to apply to apps making more than 100 API calls per minute, and they come out to 0.024 cents per API call. Since some popular Reddit apps make tens of millions of API calls per day, however, those app creators will face thousands of dollars in expenses. Users despise this because the official Reddit app allegedly has poor moderation tools and [isn't accessible](https://www.reddit.com/r/Blind/comments/14ds81l/rblinds_meetings_with_reddit_and_the_current/) for the visually impaired, thus many have gravitated towards third-party replacements.

Why is Reddit implementing these changes? As always, interoperability boils down to [data and power](/blog/interoperability-data-power-20220607). Reddit holds an enormous amount of user-generated data written in a variety of styles, much of which is publicly accessible without a login. Tech companies have taken advantage by using Reddit's API to pull down gobs of data and train their AI algorithms on it. In essence, Reddit is subsidizing the advancement of AI and it wants the power to monetize that. Additionally, when third-party apps use the API to serve content, they divert users from going directly to the Reddit app and website; that translates into fewer eyeballs viewing Reddit's ads and less money flowing to the corporation. What CEO wouldn't want to stop that?

##### The price is wrong

On its face, Reddit's proposed fee isn't excessive. No one likes having new charges sprung on them, but 0.024 cents per API call falls near the free-of-charge Facebook API and well below the 0.5 cent per call fee for [integrating with Google Maps](https://developers.google.com/maps/documentation/routes/usage-and-billing#routes-basic). Compare these prices to the health IT world, where I've seen transaction fees range from 1 cent to $1.24 per API call. Yes, you read that right—more than a dollar for a single API call.

High fees have been a staple of healthcare interoperability, though government regulation has helped somewhat. Nowadays the major EHRs make their USCDI-mandated APIs available free of charge to avoid government scrutiny, and information blocking rules delineate [several constraints](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-D/part-171/subpart-C#171.302) on EHR companies regarding data exchange fees. Yet the law still provides plenty of leeway for significant integration expenses, stating that "a reasonable profit margin" is permitted without defining what counts as reasonable.

As an entrepreneur, I'm a big fan of profit, but interoperability is such a fundamental part of efficient healthcare delivery that I believe EHRs should only be able to charge for integrations at-cost. I view interoperability like I do two-factor authentication; both may seem like optional features, but in reality they are essential components of functioning software that should be available to all users and should not be fat sources of earnings.

A counterpoint is that a profit margin is necessary to incentivize EHRs to develop new APIs, but I would say this is a weak argument. For one, EHRs still have a profit motive through offering value-added services like security reviews, app marketplaces, and marketing support. If EHRs release more APIs, more third-party developers will want to integrate with their software and leverage those services. Moreover, the profit incentive for APIs is already weak since EHR companies likely earn a much healthier profit on software licenses, and they are motivated to focus R&D resources on adding features for native users instead of third-party integrators.

##### Interoperability is a necessity

In healthcare, interoperability isn't simply a matter of convenience. It's just as much a matter of wellness, efficiency, innovation, and fairness. Data exchange allows doctors to be better informed when seeing a brand new patient and reduces duplicate procedures. It allows a cancer patient to seek care without towing around thick binders of paper. It allows entrepreneurs to create new, competing products and lower switching costs between technology platforms. We need interoperability to have a functioning and rational healthcare system, and capping integration fees at-cost is the right move to get us there faster. It's time healthcare priced interoperability as a core necessity rather than a premium feature.

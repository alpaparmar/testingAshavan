---
type: PostLayout
layout: PostLayout
metaTitle: >-
  OAuth - not FHIR - has been the most important standard for modern
  interoperability - Nonstop Interop
metaDescription: >-
  OAuth provides a simple, secure structure to enable software systems to
  communicate, and it has been the most important standard thus far for modern
  healthcare interoperability.
addTitleSuffix: true
socialImage: /images/Two-coins-on-table-1665637200.jpg
slug: oauth-most-important-standard-interoperability-20221013
metaTags:
  - type: MetaTag
    property: 'og:title'
    content: >-
      OAuth - not FHIR - has been the most important standard for modern
      interoperability - Nonstop Interop - Ashavan
  - type: MetaTag
    property: 'og:type'
    content: article
  - type: MetaTag
    property: 'og:description'
    content: >-
      OAuth provides a simple, secure structure to enable software systems to
      communicate, and it has been the most important standard thus far for
      modern healthcare interoperability.
  - type: MetaTag
    property: 'og:url'
    content: >-
      https://ashavan.co/blog/oauth-most-important-standard-interoperability-20221013
  - type: MetaTag
    property: 'og:image:alt'
    content: Two coins partially stacked on a brown table
title: >-
  OAuth - not FHIR - has been the most important standard for modern
  interoperability
date: '2022-10-13'
excerpt: >-
  OAuth provides a simple, secure structure to enable software systems to
  communicate, and it has been the most important standard thus far for modern
  healthcare interoperability.
featuredImage:
  type: ImageBlock
  url: /images/Two-coins-on-table-1665637200.jpg
  altText: Two coins partially stacked on a brown table
  caption: ''
bottomSections:
  - type: TextSection
    elementId: ''
    colors: colors-a
    actions:
      - type: Link
        altText: Share on LinkedIn
        url: 'https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fashavan.co%2Fblog%2Foauth-most-important-standard-interoperability-20221013'
        target: _blank
        rel: noopener
        showIcon: true
        icon: linkedin
        iconPosition: right
        elementId: ''
      - type: Link
        altText: Share on Twitter
        url: 'https://twitter.com/intent/tweet?text=OAuth%20-%20not%20FHIR%20-%20has%20been%20the%20most%20important%20standard%20for%20modern%20interoperability%20-%20Nonstop%20Interop&url=https%3A%2F%2Fashavan.co%2Fblog%2Foauth-most-important-standard-interoperability-20221013'
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
![Two coins partially stacked on a brown table](/images/Two-coins-on-table-1665637200.jpg)

"Can you explain OAuth to me?" A customer posed this question recently and I happily obliged, describing how tokens are its currency, how it differs from [basic authentication](https://en.wikipedia.org/wiki/Basic_access_authentication), and where you can see it in use in everyday life. Then, I thought nothing of the conversation for a few days.

I realized later that I probably gave the customer an incomplete answer. I offered a decent lesson on the basics of OAuth and how it works, but I don't think I did justice to why it's so valuable. In the world of healthcare interoperability, our hearts start pounding over concepts like USCDI and TEFCA. FHIR is likely the greatest source of excitement and it no doubt holds great potential. But if I had to vote tomorrow for the most impactful idea thus far for 21st century interoperability, I would choose OAuth.

##### A standout standard

Before I expand upon my opinion, let's go over some of the facts. The most basic thing to know about OAuth is that it is a standard. If you work in healthcare, you live, breathe, and eat standards. There are standards for how medications are coded, how quickly stroke patients should receive treatment, and which diagnoses can be used on claims. ("Burn due to water skis on fire" somehow makes the cut.) In healthcare IT it's no different. We have a veritable alphabet soup to guide us on exchanging data over point-to-point interfaces (HL7v2, X12) and protecting information and managing risk (HITRUST), among countless other things.

OAuth is a standard that allows apps to connect to one another in a secure fashion by proving that a user is really who they claim to be and that they have permission to do the things they want to do. Like any good standard, it has improved over time, and [OAuth 2.0](https://oauth.net/2/) is the latest version. There are a few flavors but I'll focus on what's known as the "[authorization code grant](https://www.rfc-editor.org/rfc/rfc6749#section-4.1)."

You probably have used OAuth in your life without realizing it; if you've ever visited a website and created an account by clicking a button that says "Log in with Google" or "Log in with Facebook," that's OAuth. When you click that button, app #1 (the website) communicates with app #2 (the "identity provider," such as Google or Facebook) and says "Hey, this user wants to log in with their account." If you aren't already signed in, the identity provider will ask for your username and password to prove your identity, and it may ask you for permission to connect your account to the website and to share a few details.

Does this mean Google and Facebook are leaking your username and password to other apps? Not at all. The language of OAuth is tokens; when these apps talk to one another, they exchange long combinations of numbers and letters called tokens, which serve as a passport of sorts to uniquely identify you and what you're trying to do. These tokens allow app #2 to tell app #1 "You have permission to use this user's account with your website. Just be sure to show this passport when you send a request to me, so that I know it's legitimate."

##### Reducing the friction

This use of tokens is a key aspect of OAuth's value to healthcare interoperability. First and foremost, from a patient's perspective, OAuth simplifies the experience of connecting apps to your medical records. When you can log in and pull data securely using an existing account—say, a patient portal account—you have a user experience with less friction, not to mention fewer usernames and passwords to remember. Tokens also expire and become useless relatively quickly, usually within an hour, so they provide a greater layer of protection in case someone malicious gets ahold of one.

The benefits are equivalent for the developers of healthcare apps, because they can design their app without needing to manage and secure an extra set of login credentials and without needing to accommodate unique authentication workflows for every EHR. Think back to 2015 when Meaningful Use Stage 3 first [mandated patient access](https://www.federalregister.gov/d/2015-25595/p-1501) to their health information through APIs. Could this endeavor have ever been successful if app developers needed to support a dozen authorization schemes in order to support a critical mass of EHRs? I am skeptical.

##### Winner

I do not intend to downplay the importance of FHIR or any other standard relevant to healthcare interoperability. Really smart, passionate people have created these essential frameworks, and we need all of them to accelerate our progress. But FHIR, USCDI, and TEFCA are too new in my mind to have had the greatest impact to this point, and more mature standards like HL7v2 and X12 are hamstrung by their dependency on event-driven point-to-point interfaces, which aren't conducive to an app-based ecosystem. OAuth provides a simple, secure structure to enable software systems to communicate, and from my point of view, it has been the most important standard thus far for modern healthcare interoperability.

\---

Photo by [Erdenebayar](https://pixabay.com/users/erdenebayar-740663/) on [Pixabay](https://pixabay.com)

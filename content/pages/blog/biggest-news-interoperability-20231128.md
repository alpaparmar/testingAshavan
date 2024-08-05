---
type: PostLayout
layout: PostLayout
metaTitle: The biggest news in interoperability isn't in healthcare - Nonstop Interop
metaDescription: null
addTitleSuffix: true
socialImage: null
slug: biggest-news-interoperability-20231128
metaTags:
  - type: MetaTag
    property: 'og:type'
    content: article
  - type: MetaTag
    property: 'og:url'
    content: 'https://ashavan.co/blog/biggest-news-interoperability-20231128'
title: The biggest news in interoperability isn't in healthcare
date: '2023-11-28'
author: content/data/team/person.json
excerpt: >-
  Apple's decision advances the fundamental goal of interoperability, bringing
  greater parity to the exchange of messages across platforms.
featuredImage:
  type: ImageBlock
  url: /images/Apple-hearts-Google-1701151200.jpg
  altText: Apple hearts Google
  caption: ''
bottomSections:
  - type: TextSection
    elementId: ''
    colors: colors-a
    actions:
      - type: Link
        altText: Share on LinkedIn
        url: >-
          https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fashavan.co%2Fblog%2Fbiggest-news-interoperability-20231128
        target: _blank
        rel: noopener
        showIcon: true
        icon: linkedin
        iconPosition: right
        elementId: ''
      - type: Link
        altText: Share on Twitter
        url: >-
          https://twitter.com/intent/tweet?text=The%20biggest%20news%20in%20interoperability%20isn%27t%20in%20healthcare%20-%20Nonstop%20Interop&url=https%3A%2F%2Fashavan.co%2Fblog%2Fbiggest-news-interoperability-20231128
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
![Apple hearts Google](/images/Apple-hearts-Google-1701151200.jpg)

You might've missed Apple's big announcement this month. If so, you're forgiven. What should have been a wave felt more like a ripple, because news about interoperability—unlike news about Taylor Swift—rarely makes headlines.

Beginning in 2024, Apple will reverse years of resistance and [start supporting](https://www.theverge.com/2023/11/16/23964171/apple-iphone-rcs-support) Rich Communication Services (RCS) for messaging with non-Apple devices. If you've ever used a modern messaging app that works over Wi-Fi or that shows you when the other person is typing a response, it's possible that you were using RCS. This announcement doesn't mean Apple is suddenly an altruistic industry player—the company is likely responding to [European regulations](https://www.privacyworld.blog/2022/10/dma-eu-publishes-the-new-digital-markets-act/) and [scrutiny](https://www.theverge.com/2023/9/6/23861030/imessage-bing-european-union-commission-digital-markets-act-dma)—but it does portend a more complete, satisfying, and interoperable messaging experience for millions of people.

##### A tell-all on protocols

To appreciate why Apple's shift is a big deal, we need to dissect what it actually means. The word to know in telecommunications is "protocol," which you can think of as a standard that describes how devices and networks can communicate. Analogous to how APIs facilitate data exchange between software applications, communications protocols allow the happy birthday text you type out for your cousin to leave your device, traverse the globe, make it to the correct destination phone, and display accurately for the birthday boy.

Texting has been around for decades, but for most of that time, it's been based on SMS, a protocol from the 1980s. SMS has done its job well and is universally supported, but it has some drawbacks. For one, it sends messages over a cellular network, so you must have a phone plan. It technically only supports messages of 160 characters (even less than Twitter!), though carriers handle breaking up and reassembling longer texts for us. And SMS' support for sending images and videos, via an extension to the protocol known as [MMS](https://www.twilio.com/en-us/learn/messaging/what-are-sms-and-mms), is pretty limited in terms of the size and quality of the files.

In recent years, new kinds of messaging apps that use the Internet, rather than cell networks, have exploded in popularity. WhatsApp, WeChat, Messenger, and Signal are but a few examples. These apps provide numerous handy features like larger message sizes and the ability to see whether your message was sent, received, and opened. Phone carriers wanted to bring an equivalent experience to their subscribers, so they banded together and developed RCS as the industry-standard protocol to do that. Carriers and device manufacturers have 260 pages of [open specifications](https://www.gsma.com/futurenetworks/wp-content/uploads/2019/10/RCC.71-v2.4.pdf) to implement, and the end result allows you and I to do things like transfer files during a call or resize images and videos before sharing them.

##### Apple finally bites

RCS is not supported by everyone, however, and that brings us to the world's most valuable company. Apple is well-known for erecting a walled garden and locking users into its ecosystem. Its Messages app is available only on Apple devices and uses a proprietary protocol called iMessage. For messaging with non-Apple devices, Messages falls back to SMS/MMS. Those non-Apple users appear in a conversation with green bubbles, rather than the traditional blue, and up till now, Apple has stubbornly declined to provide a modern or commensurate experience. One of its go-to arguments has been that iMessage offers superior security, since RCS does not natively address encrypting messages end-to-end.

Google and Samsung, on the other hand, have embraced RCS and [publicly advocated](https://www.android.com/get-the-message/) for its adoption; Google has tried publicly shaming Apple into changing its mind, even making the rather [dubious claim](https://www.usatoday.com/story/tech/2022/01/10/google-imessage-iphone-text-messages/9155873002/) that the different colored bubbles represent a form of bullying. The effort was fruitless for years, however, until Apple's declaration on November 16 that RCS support is coming and that the company will work with industry stakeholders to improve the standard's security.

To be clear, this decision does not mean iMessage is going away or that Apple is opening up any new integration opportunities. Apple will continue to use the closed-source protocol for Apple device-to-Apple device communication. We the people will still be divided into blue and green camps. RCS will simply replace SMS/MMS as the primary protocol for communicating with non-Apple devices.

##### Slow and steady

It's a small step forward, but also a significant win for interoperability. The fundamental goal of interoperability is to be able to exchange data between systems and to have that data be equally usable and understandable regardless of where it lives. Apple's decision advances that aim, bringing greater parity to the exchange of messages across platforms and allowing everyone in the world who has or communicates with an Android device to enjoy texts, images, and videos in equal measure. And that is truly big news.

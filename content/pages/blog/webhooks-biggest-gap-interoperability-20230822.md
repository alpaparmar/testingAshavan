---
type: PostLayout
layout: PostLayout
metaTitle: Webhooks are the biggest gap in today's interoperability - Nonstop Interop
metaDescription: null
addTitleSuffix: true
socialImage: null
slug: webhooks-biggest-gap-interoperability-20230822
metaTags:
  - type: MetaTag
    property: 'og:type'
    content: article
  - type: MetaTag
    property: 'og:url'
    content: 'https://ashavan.co/blog/webhooks-biggest-gap-interoperability-20230822'
title: Webhooks are the biggest gap in today's interoperability
date: '2023-08-22'
author: content/data/team/person.json
featuredImage:
  type: ImageBlock
  url: /images/Email-notification-1692680400.jpg
  altText: Mail app icon on a smartphone screen with two unread notifications
  caption: ''
bottomSections:
  - type: TextSection
    elementId: ''
    colors: colors-a
    actions:
      - type: Link
        altText: Share on LinkedIn
        url: >-
          https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fashavan.co%2Fblog%2Fwebhooks-biggest-gap-interoperability-20230822
        target: _blank
        rel: noopener
        showIcon: true
        icon: linkedin
        iconPosition: right
        elementId: ''
      - type: Link
        altText: Share on Twitter
        url: >-
          https://twitter.com/intent/tweet?text=Webhooks%20are%20the%20biggest%20gap%20in%20today%27s%20interoperability%20-%20Nonstop%20Interop&url=https%3A%2F%2Fashavan.co%2Fblog%2Fwebhooks-biggest-gap-interoperability-20230822
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
excerpt: >-
  The lack of webhooks is the most important reason why point-to-point
  interfaces will not be obsolete anytime soon.
---
![Mail app icon on a smartphone screen with two unread notifications](/images/Email-notification-1692680400.jpg)

A few weeks ago, I outlined [the most significant gaps](/blog/gaps-in-interoperability-20230803) in healthcare interoperability. In this post, I'd like to elaborate on what I view as the #1 gap: the lack of webhooks.

##### Push notifications for APIs

If you aren't familiar with webhooks, it's best to think of them like push notifications, but for APIs. Today you may have an email app on your phone, and that app will trigger a notification whenever you receive a new email. This is helpful (to a point—we all know how exhausting endless notifications can get) because it keeps you from having to constantly open the app and check your inbox for new messages. Instead, you know immediately when you receive something from your spouse, your favorite store, or that Nigerian prince who could make you rich.

Webhooks serve much the same purpose, though rather than alerting a human being about something different or new, they alert another software system. This permits App A to provide a news feed of sorts to App B, so that App B can keep up-to-date on what's going on in App A. Why does App B care? Staying in sync may be essential to get the maximum value from App B. For example, let's say a healthcare provider uses a CRM system for marketing and patient engagement. If a patient logs into the patient portal (App A) and updates their mailing address, email address, or cell phone number, the CRM (App B) needs to know about that change. Otherwise, future messages and marketing materials could end up undelivered or sent to the wrong patient.

When webhooks don't exist, that news feed becomes invisible to App B, and it must jump through numerous hoops to shine a light on the black box of App A. The most common workaround is polling, where App B pings App A every few minutes to check for any updates. Again, that's like having to jump into your email app to figure out if there's a new email. Not only is this detrimental to efficiency, because both apps must commit system resources to sending and processing the every-few-minute checks, but it can be easier said than done. Sometimes App A can't filter its response down to only the records that were added or changed since the last time App B polled; this means App B must pull back all the data it might care about and analyze it to figure out what's actually net-new. That would be like opening your inbox and seeing that every email is marked as unread, even though you've read most or all of them already.

##### Walking through a webhook

There's no standard for how a webhook must look; that's up to the sending system. It just needs to provide enough information so that the receiving system can take meaningful action. The below is an example of a very simple webhook, written in a format called [JSON](https://www.w3schools.com/js/js_json_intro.asp) ("jay-sawn") that's commonly used with APIs:

```
{
    "record_id": 129483,
    "event": "diagnosis_added",
    "event_date": "2023-08-17",
    "event_time": "5:23 PM CDT"
}
```

We can see that a diagnosis was added at a certain day and time, but we don't know what the diagnosis is, which patient it is for, when the patient first began having the issue, etc. We can discover that information, however, because the webhook includes an ID of the new diagnosis. We simply need to call an API with that ID, and we will get more details.

Contrast that with the below example of a more verbose webhook:

```
{
    "record_id": 129483,
    "record_name": "Pecked by turkey, subsequent encounter",
    "event": "diagnosis_added",
    "event_date": "2023-08-17",
    "event_time": "5:23 PM CDT",
    "patient_id": 90038273,
    "is_sensitive": false,
    "added_by": "Dr. Nonstop Interop",
    "is_primary_diagnosis": true,
    "icd_10_code": "W61.43XD",
    "start_date": "2023-08-16",
    "note": "Patient states the bird was having a bad day and didn't want to go in the oven."
}
```

Now we can determine details like the ICD-10 code and description of the diagnosis, and who documented the diagnosis in the patient's chart, without needing to make additional API calls. Each approach has its pros and cons, but in either case, the fact that we can immediately know when a new diagnosis is added to a patient's medical record provides a wealth of actionable value.

##### The status quo in health IT

Unfortunately, that actionable value is MIA in healthcare IT. Webhooks have near-nonexistent support within our industry; among the major EHRs, none of them support true webhooks, and only athenahealth provides a partial alternative.

How does this hurt healthcare? Webhooks are critical to full interoperability because they make APIs usable in event-based workflows. Let's take laboratory testing, for instance. Most lab workflows are event-based. A provider orders a test in the EHR, which triggers a notification to collect a specimen; the specimen is collected, which triggers accessioning and labeling; and the results are documented by the lab, which triggers a result message back to the EHR. Without an event-based communication framework, such as webhooks, the lab system would have to constantly poll the EHR for new orders, and the EHR would have to constantly poll the lab system to find new results. Not fun and not efficient.

For decades, healthcare has relied on HL7v2 interfaces as that event-based communication framework. Lab orders are sent as ORM messages, and results are returned as ORU messages. This certainly gets the job done, but these interfaces and similar non-API technologies are far from ideal. They don't use the latest data formats and technologies, which makes it difficult for modern app developers to support them in their products. The interfaces require a VPN to ensure the data transmitted remains secure. And they are inherently individual, point-to-point connections that are neither publicly discoverable nor easily scalable. Modern APIs overcome all of these limitations.

The lack of webhooks is the most important reason why point-to-point interfaces will not be obsolete anytime soon. There is hope on the horizon, however. Recently, the ONC accepted comments on its HTI-1 proposed rule, which would update several of the regulations surrounding EHR certification. HTI-1 includes a [request for information](https://www.federalregister.gov/documents/2023/04/18/2023-07229/health-data-technology-and-interoperability-certification-program-updates-algorithm-transparency-and#h-184) on FHIR Subscriptions, which are webhooks within FHIR, with ONC asking if "there is a need to define a minimum set of Subscription Topics that can be consistently implemented by all health IT developers of certified health IT." In other words, are there some webhooks all certified EHRs should support? Nothing in this rule, as proposed, would add a new regulatory requirement on EHRs to support webhooks. But it's evident that ONC is studying the issue and could propose such a requirement in the future, and when the day comes that webhooks are universally and robustly supported, that would close the biggest gap in healthcare interoperability.

\---

Photo by [Brett Jordan](https://unsplash.com/@brett_jordan) on [Unsplash](https://unsplash.com)

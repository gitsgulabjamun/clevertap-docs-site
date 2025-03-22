---
title: "Delivery Optimization_Campaign_redesign_WIP"
slug: "delivery-optimization"
excerpt: ""
hidden: true
metadata: 
  image: []
  robots: "index"
createdAt: "Thu Apr 15 2021 23:01:55 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Apr 15 2021 23:05:12 GMT+0000 (Coordinated Universal Time)"
---
## Overview

You can optimize push delivery with push implication and sending to app inbox. 

## Optimize with Push Amplification

Push notifications are a great way to engage customers despite the issue of low deliverability on certain device manufacturers. In addition, more and more users choose to opt out of push notifications.

With push amplification at your disposal, you can counter this challenge by enhancing the delivery of push notifications to devices that missed receiving them.

To enable this feature, navigate to _Settings_ > _Engage_ > _Setup_ > _Push Amplification_. Turn on the push amplification toggle as displayed below:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/188e8ce-Screenshot_2019-01-09_at_6.58.11_AM.png",
        "Screenshot 2019-01-09 at 6.58.11 AM.png",
        945
      ],
      "border": true
    }
  ]
}
[/block]


> 🚧 Toggling Push Notification Amplification
> 
> Once you turn on push amplification, all the push campaigns created will be amplified from that moment onward and this applies the same way when you turn it off.

Once push amplification is turned on, your campaigns reach more users through your push notifications. You can check these boost numbers on your push campaign stats page.

![](https://files.readme.io/65a05d4-Push_amplification_report.png "Push amplification report.png")

Push amplification can be achieved via retrying the _Push_ message as is (where messages are suppressed by the device) and _App Inbox_ where the user has chosen to DND the push messages.

> 📘 Support for Push Amplification via Inbox
> 
> We support _Push Amplification via Inbox_ and retrying push notifications due to delivery issues with certain OEMs. 
> 
> If the app is online when _Push_ is delivered, the Inbox delivery is done on the next _App Launch_ and not immediately after the _Push_ is delivered.

## Optimize with App Inbox

Apart from push amplification, you can further increase delivery of push notification by sending a copy of the same message to _App Inbox_. 

To send a copy of the push message to **App Inbox**, click the checkbox that appears at the bottom of the message builder of push notification in the _What_ section.

![](https://files.readme.io/777a4b6-New_1.png "New 1.png")

> 📘 App Inbox as its Own Channel
> 
> _App Inbox_ also exists as a stand-alone channel. For more information, refer to [App Inbox](https://docs.clevertap.com/docs/app-inbox).

  From this screen, you can do the following:

- You can customize the same push message for _App Inbox_. 
  - You can change the title color, message color, background color, and also add filter tags that classify your message into tabs. For more information, refer to [Message Tags](https://docs.clevertap.com/docs/app-inbox#section-message-tags). 
  - You can set a time to live (TTL) for _App Inbox_ message in the setup section. For more information on setting up TTL, refer to [Time to Live](https://docs.clevertap.com/docs/app-inbox#section-time-to-live).

## Push Amplification and App Inbox Stats

You can view the stats for push messages copied to _App Inbox_ on the _Push stats_ page. The percentage boost represents the percentage of messages boosted by _App Inbox_ as compared to the total of messages sent via _App Inbox_ and _Push Amplification_.

To view the stats for the copied messages, you can use the tab _App Inbox stats_.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1401bf8-Push_amplification_report_for_App_Inbox.png",
        "Push amplification report for App Inbox.png",
        1580
      ],
      "border": true
    }
  ]
}
[/block]

---
title: "Best Time"
slug: "best-time"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Thu Jul 26 2018 07:51:20 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Mar 15 2021 12:24:31 GMT+0000 (Coordinated Universal Time)"
---
# Overview

_Best Time_ is a feature that recommends the most optimal time to send a message to each user for a _Batch_ campaign or a _Journey_. 

We optimize the message send-time for each user based on when that user is most active with your application. If you send a campaign with the _Best Time_ feature enabled, users will be more likely to engage with your message when receiving it.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b6b2bdc-image1.png",
        "image1.png",
        717
      ],
      "border": true
    }
  ]
}
[/block]


You can use the Best Time feature with the following channels: [Email](doc:email), [Push Notification](doc:push), [Web Push](doc:web-push), and [SMS](doc:sms).

You can use the Best Time feature with the following campaign types:

- One Time >  Later > Best Time
- Multiple Dates > Best Time on Every Date
- Multiple Dates > Combination of Best Time and Fixed Time
- Recurring > Best Time

# How It Works

We identify the_ best time_ based on a specific event that is chosen by you.

CleverTap sends _Best Time_ campaigns by splitting a day into two-hour buckets, that is, 12 buckets in all. Your users are then assigned to one of these buckets based on the time of the day they are most active with your app. The user is then sent the Campaign or Journey in that two-hour window.

If there is any user who has not performed the selected event in the last 180 days, then they are sent the _Campaign/Journey_ at the CleverTap default time. The default time is right after the 12th bucket.

For example, if a _Best Time_ campaign is created on January 1 at 5:15 pm, then all users who are most active between 5:00 pm to 7:00 pm will qualify for the first bucket and receive the campaign immediately. The next run will happen at 7:15 pm, and users who are most active in the 7:00 pm to 9:00 pm bucket will receive the message. 

# Best Time Setup

Under _Settings_ > _Setup_ -> _Best Time_ you can set up the event which will be used to calculate the best time. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3bda37e-Setup_Best_Time.png",
        "Setup_Best_Time.png",
        674
      ],
      "border": true
    }
  ]
}
[/block]


# Feature Guide

## Best Time - Campaign

### Create a Campaign

You can use the Best Time feature with the following channels: Email, Push Notification, Web Push, and SMS.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c0662bb-campaigns_channel_Mobile_Push.png",
        "campaigns_channel_Mobile_Push.png",
        1090
      ],
      "border": true
    }
  ]
}
[/block]


### Select the Campaign Type

You can use the Best Time feature with the following campaign types:

- One Time > Later > Best Time
- Multiple Dates >  Best Time on Every Date
- Multiple Dates > Combination of Best Time and Fixed Time
- Recurring > Best Time

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/116989a-campaigns_channel_Mobile_Push_segment_select.png",
        "campaigns_channel_Mobile_Push_segment_select.png",
        1085
      ],
      "border": true
    }
  ]
}
[/block]


### Select the Best Time Option

This option is available for multiple dates and _Recurring_ campaigns. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cafc440-campaigns_channel_Mobile_Push_best_time.png",
        "campaigns_channel_Mobile_Push_best_time.png",
        1064
      ],
      "border": true
    }
  ]
}
[/block]


## Best Time - Journeys

For campaigns following a past behavior segment, messages can be delivered at the best time. It is applicable for Email, Mobile Push, SMS, and Web Push channels. 

### Click Sleep time

For setting a message to deliver at the best time, click on the _sleep time_ (timer icon) between the segment and the next message.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7051f5a-Journey_Best_Time.png",
        "Journey_Best_Time.png",
        967
      ],
      "border": true
    }
  ]
}
[/block]


### Select the Best Time Option

Select the_ Best time _option to send out a message at the best time. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/83c55bb-Journey_Best_Time_Select.png",
        "Journey_Best_Time_Select.png",
        530
      ],
      "border": true
    }
  ]
}
[/block]


# Notes

If _Best Time_ is chosen as the delivery option, the following advanced options will be applicable:

- **User Time Zone:** Considering the _Best Time_ feature chooses the time when the user is most active, the [user time zone](https://docs.clevertap.com/docs/notification-delivery-options#section-delivery-in-user-s-timezone) is always implicitly applied.
- **Global Throttle Limits:** [Message throttling](https://docs.clevertap.com/v1.0/docs/notification-delivery-options#section-message-frequency-caps) cannot be applied with the Best Time feature.

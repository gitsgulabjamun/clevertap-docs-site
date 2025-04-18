---
title: "Best Time Campaigns"
slug: "best-time_campaigns-and-journeys_wip"
excerpt: ""
hidden: true
metadata: 
  image: []
  robots: "index"
createdAt: "Wed Oct 28 2020 10:56:04 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Oct 29 2020 19:52:57 GMT+0000 (Coordinated Universal Time)"
---
# Overview

Best Time is a feature that recommends the most optimal time to send a message to each user for a Batch campaign or a Journey. 

We optimize the message send time for each user based on when that user is most active with your application. If you send a campaign with the Best Time feature enabled, users will be more likely to engage with your message when receiving it.

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

- One Time → Later → Best Time
- Multiple Dates → Best Time on Every Date
- Multiple Dates → Combination of Best Time and Fixed Time
- Recurring -> Best Time

# How It Works

We identify the "Best Time" based on a specific event that is chosen by you.

CleverTap sends Best Time campaigns by splitting a day into two-hour buckets, that is 12 buckets in all. Your users are then assigned to one of these buckets based on the time of the day they are most active with your app. The user is then sent the campaign or Journey in that two-hour window.

If there is any user who has not performed the selected event in the last 180 days, they are sent the Campaign/Journey at the CleverTap default time. The default time is right after the 12th bucket.

For example, if a Best Time campaign is created on January 1 at 5:15 pm, then all users who are most active between 5:00pm to 7:00pm will qualify for the first bucket and receive the campaign immediately. The next run will happen at 7:15pm, and users who are most active in the 7:00pm to 9:00pm bucket will receive the message. 

# Best Time Setup

Under Settings -> Setup -> Best Time you can set up the event which will be used to calculate the best time. 

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

### Step 1: Create a Campaign

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


### Step 2: Select the Campaign Type

You can use the Best Time feature with the following campaign types:

- One Time → Later → Best Time
- Multiple Dates → Best Time on Every Date
- Multiple Dates → Combination of Best Time and Fixed Time
- Recurring -> Best Time

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


### Step 3: Select the Best Time Option

This option is available for Multiple dates and Recurring campaigns. 

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

### Step 1: Click Sleep time

For setting a message to deliver at the best time, click on the sleep time (timer icon) between the segment and the next message.

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


### Step 2: Select the Best Time Option

Select the best time option to send out a message at a best time. 

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

If Best Time is chosen as the delivery option, the following advanced options will be applicable:

- **User Time Zone:** Since the Best Time feature chooses the time when the user is most active, the [user time zone](https://docs.clevertap.com/docs/notification-delivery-options#section-delivery-in-user-s-timezone) is always implicitly applied.
- **Global Throttle Limits:** [Message throttling](https://docs.clevertap.com/v1.0/docs/notification-delivery-options#section-message-frequency-caps) cannot be applied with the Best Time feature.

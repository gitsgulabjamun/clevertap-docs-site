---
title: "Web Push"
slug: "web-push"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Fri Jan 19 2018 21:14:19 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Apr 01 2021 00:24:19 GMT+0000 (Coordinated Universal Time)"
---
# Overview

Web push notifications are browser-based messages you can send to your website users even when they are outside of your website.

# Introduction

Web push notifications provide the ability to communicate brief, yet important alerts to your users while CleverTap’s rich segmentation and powerful infrastructure can help send time-sensitive, relevant, and personalized push messages at scale.

> 🚧 Prerequisite
> 
> The prerequisite to set up web push campaigns requires a specific code configuration. For more information, refer to [Web](https://developer.clevertap.com/docs/web) in the developer documentation.

The _Web Push_ feature makes it easy to set up web push campaigns for all your users or specific user segments. These segments can be created on the basis of past or live user behavior, user properties, or a combination of user behavior and properties. 

Once a campaign has been sent, you can view detailed reports on how many messages were sent, how many users clicked on them, how many users converted as a result, and more.

# Create a Web Push Campaign

This guide shows how to create a web push campaign from start to finish.

## Create a New Campaign

To start creating a web push campaign, perform the following steps:

1. Navigate to _Campaigns_. 
2. Click on the **+Campaign** button.
3. Select _Web Push_ under the _Desktop / Mobile web channels_ section. 

![](https://files.readme.io/a663fd0-Web_Push_select_channel.png "Web_Push_select_channel.png")

### Select the Campaign Type

To select the campaign type, use the following to make your selection:

Past behavior campaigns can be scheduled to run:

- One time: On a specific date and time.
- Multiple dates: On multiple specified dates and times.
- Recurring: On a recurring basis.

Live campaigns can be set up as follows:

- Single action: In response to a user event.
- Inaction within time: User event or inaction combination, such as an abandoned cart scenario.
- On a date/time: Based on a date event property value of an event, such as a reminder for upcoming travel booking.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/dedb0ed-Web_Push_select_campaign_type.png",
        "Web_Push_select_campaign_type.png",
        1186
      ],
      "border": true
    }
  ]
}
[/block]


For instance, you can choose to create a live, _Inaction within time_ campaign that will target users as soon as they add a product to their cart but do not finish transacting within 10 minutes, the golden window within which most users transact on our website.

## Define the When

Set up the _When_ to schedule the campaign start and end.

![](https://files.readme.io/f31caee-Web_Push_Select_When.png "Web_Push_Select_When.png")

Global campaign limits are limits you can apply to determine how many web push notifications each app user receives per day. If you would like to override these settings for an important campaign, you can click on the _Don’t apply global campaign limits to this campaign_ checkbox.

You can also click on the _Advanced_ checkbox to specify _Do Not Disturb (DND)_ hours during which notifications from this web push campaign are prevented from going out, either by discarding them or delaying delivery to after DND hours complete, such as 9 PM to 9 AM.

Since past behavior campaigns can have scheduled times, you have the option to stop campaign delivery after a certain cut-off time, or even deliver at the specified time in the user’s timezone. For more information, refer to [Notification Delivery Options](doc:notification-delivery-options).

> 📘 Recurring Day
> 
> If you specify a recurring day for a campaign, such as the 7th of each month, then the campaign will start for the specified day and ignore the creation date. This is a precaution to avoid sending a campaign unintentionally on a prior date.

## Define the Who

Next, indicate the target audience for your web push campaign. 

You can target your web push campaign to a new user segment by clicking on **Create an ad-hoc segment** or use a previously saved user segment from the list of pre-saved segments shown in the table as shown below. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ce57925-New_Campaign_Saved_Segment_PBS_Who.png",
        "New_Campaign_Saved_Segment_PBS_Who.png",
        1132
      ],
      "border": true
    }
  ]
}
[/block]


If you choose to create an ad-hoc segment, you can now select a type of segment on which to base your web push campaign. The target can be created either on the basis of past user behavior and/or user properties, or live (ongoing) user behavior (the latter is useful to send out real-time, triggered web push campaigns).

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c5db5bb-Web_Push_Select_Who.png",
        "Web_Push_Select_Who.png",
        1108
      ],
      "sizing": "100",
      "border": true
    }
  ]
}
[/block]


You can also check the _Filter this stream based on these users’ past behavior/user properties_ checkbox to filter by any past user behavior or user properties. For past behavior campaigns, you will also have an option to estimate reach to view how many users qualify for the campaign criteria and are reachable via web push notifications.

## Define the What

The web push notification text fields shown below can be personalized for every user based on specific user property or event property values. For more information, refer to [User Profiles](https://docs.clevertap.com/docs/user-profiles).

1. To invoke the personalization menu, type “@” in the title or the message field.

Emojis can be included in your web push notifications, such as in a regular text. You can use the CleverTap emoji picker or copy-paste emojis from an Emoji keyboard online.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0fce5f0-Web_Push_Select_What.png",
        "Web_Push_Select_What.png",
        998
      ],
      "border": true
    }
  ]
}
[/block]


2. _(Optional)_ Specify a deep link.

You can specify a deep link so that upon a web push click, the user is taken back to one of your specific webpages, such as the checkout page. With dynamic replacements, you can take the user right back to the webpage of the product they just added to their cart and present them with an incentive to encourage the transaction. 

3. _(Optional)_ Specify an image link.

You can also specify a publicly-hosted image URL, such as a product they just added to their cart. You can add from a list of default web push notification icons we offer, specify a _Time To Live_ for the web push notification to remain viewable to users, prevent notification dismissal unless interacted with by the user, and even include a call to action links within the notification.

4. Send a test.

Once you are done setting up the content of your campaign, you have the option to send a test web push notification to any CleverTap user profile you have marked as a test profile.

### Setup

To define your campaign setup at this stage, perform the following steps:

1. Create the control groups.
2. Add labels.
3. Set up conversion tracking.
4. After testing, when you are satisfied with the appearance of your campaign, click **Continue** to view your campaign summary. 

![](https://files.readme.io/eaa14f0-Web_Push_Select_Setup.png "Web_Push_Select_Setup.png")

## Overview and Schedule Campaign

As a final step, save and schedule your campaign to ensure that your message reaches your intended audience.

Click **Schedule notification**.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a915280-Web_Push_Select_Overview.png",
        "Web_Push_Select_Overview.png",
        984
      ],
      "sizing": "100",
      "border": true
    }
  ]
}
[/block]


# Viewing Web Push Campaign Stats

Once the campaign has been sent, you can view its stats from the dashboard by clicking on **Campaigns**, then selecting the campaign of interest to view its total sends, clicks, conversions, and revenue from conversions (if applicable).

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ad05981-Web_Push_Campaign_Report.png",
        "Web_Push_Campaign_Report.png",
        1335
      ],
      "sizing": "100"
    }
  ]
}
[/block]


# Campaign Considerations

Below are some things to consider in regards to Safari.

## Safari Considerations

Safari, being a proprietary browser, has some built-in restrictions. Following are the considerations with Safari web push as compared to Chrome or Firefox:

- Deep link URL is mandatory or else the notifications will not be rendered.
- Custom icons are not rendered in the notifications as Safari uses the icons available in the Safari push package.
- Image and call to action buttons are not available for Safari notifications.
- Sent and viewed events are not supported as there is no handler unlike Service Worker in Chrome and Firefox to capture the click and view events.

## Safari Errors

You may encounter the following errors while sending web push notification on Safari:  

- Invalid Authentication
- BadRequest(400)
- DeviceTokenInactiveForTopic(410)
- ServerUnavailable(503)

---
title: "Notification Delivery Options_WIP"
slug: "notification-delivery-options_user_timezone_wip"
excerpt: ""
hidden: true
metadata: 
  image: []
  robots: "index"
createdAt: "Wed Oct 28 2020 11:53:31 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Apr 15 2021 04:13:12 GMT+0000 (Coordinated Universal Time)"
---
# Delivery in User’s Timezone

CleverTap gives the option for delivering notifications in the user’s timezone while creating scheduled Campaigns or Journeys. This is a relevant feature for businesses having international users and who want to send time-sensitive notifications to their users. If you select this option, CleverTap staggers the delivery of notifications and qualifies users according to their timezone.

## User Timezone - Campaigns

To set the timezone of the users, push it via the Tz key in the profile update push.

When setting up a campaign to be delivered in the User’s Timezone distinguish between the timezone of your Account (Account Timezone) and the local timezone of the users receiving the campaign.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b4dbc67-Campaign_Notification_Delivery_options.png",
        "Campaign_Notification_Delivery_options.png",
        903
      ],
      "sizing": "100",
      "border": true
    }
  ]
}
[/block]


Assume a marketer in San Francisco (Pacific Time) creates a campaign at 4:14 PM in their CleverTap Dashboard. The campaign is scheduled to deliver messages to users at 8:00 PM in their local timezone.

At 5:00 PM Pacific Time (account’s timezone) the first set of messages will deliver to users on the East Coast (8:00 PM in the Eastern timezone). One hour later (6:00 PM Pacific or 8:00 PM Central Time) the second set of messages will be delivered to anyone qualifying in this timezone. Two hours after that (8:00 PM Pacific) the next set of messages are delivered to users on the West Coast, and so forth. A typical campaign will execute for every timezone around the globe, delivering messages to any user who qualifies in each timezone.

After the marketer finishes creating the above campaign, it moves into a scheduled state as shown here.

![](https://files.readme.io/a4cba74-Screenshot_2020-06-09_at_8.40.26_PM.png "Screenshot 2020-06-09 at 8.40.26 PM.png")

Once the campaign starts executing it moves into the Running state and you’ll be able to see same that campaign is scheduled to deliver in user timezone on Overview page. 

There are two additional delivery options: _Drop the campaign_ or _Deliver the campaigns the next day_.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a85fe79-Screenshot_2020-06-09_at_8.55.29_PM.png",
        "Screenshot 2020-06-09 at 8.55.29 PM.png",
        742
      ],
      "border": true
    }
  ]
}
[/block]


How these delivery options work:

Consider the above marketer to be located in the Midwest (Central Time). At 11:30 AM, a lunchtime campaign has been scheduled to be delivered in each user’s local time. As above, the _Campaign Start Time_ is set to 12:00 PM and the first set of messages will go out at noon Central Time. Two hours later, West Coast users receive the campaign.

Since this campaign was initiated at 11:30 AM Central, it was already 12:30 PM Eastern Time, which is after the specified delivery time for the East Coast users.

The campaign continues to deliver messages in each timezone moving from East to West until it reaches the first timezone.

If _Drop the campaign_ was selected, any user whose timezone had already been passed when the campaign kicked off will NOT receive this campaign.

If _Deliver the campaigns the next day_ was selected, then the campaign continues executing for every timezone around the globe and eventually delivers the campaign to the East Coast users at noon (Eastern Time) the next day.

> 📘 Critical Delivery Dates
> 
> If it is critical for a campaign to be delivered on a certain calendar day (e.g., an Easter campaign) and the message has to arrive on Easter Sunday or not at all, choose the “Drop the Message” option.

## User Timezone - Journeys

You can increase conversion by delivering messages in the user's timezone. Let us consider the same example as campaigns. A marketer is located in the Midwest (Central Time). A lunchtime Journey has been scheduled to deliver messages in each user’s local time. The first set of messages following a past behavior segment is set to go out at 11:30 am Central Time. Two hours later, West Coast users receive the message.

Because this message was scheduled to be delivered at 11:30 AM Central, it was already 12:30 PM Eastern Time, which is after the specified delivery time for the East Coast users. The message is delivered the next day for the users for whom the time of delivery has already passed.

The Journey continues to deliver messages in each timezone moving from East to West until it reaches the first timezone.

1. Create a Journey. You can set the user timezone from the entry node. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/55a38d1-Journey_User_Timezone_Entry_Node.png",
        "Journey_User_Timezone_Entry_Node.png",
        975
      ],
      "border": true
    }
  ]
}
[/block]


2. Click the Entry node and select the option to Deliver in User's Time zone. This timezone is then applicable to all the subsequent nodes. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9921d7a-Journey_User_Timezone_Entry_Node_Select.png",
        "Journey_User_Timezone_Entry_Node_Select.png",
        1129
      ],
      "border": true
    }
  ]
}
[/block]


3. You can also exclude any subsequent message nodes from the user timezone. Open the node and select "Exclude this node from user timezone."

![](https://files.readme.io/84ceb2e-Journey_User_Timezone_Message_Node_Exclude.png "Journey_User_Timezone_Message_Node_Exclude.png")

# Do Not Disturb Hours

CleverTap gives the option for setting the “Do Not Disturb” hours for notification delivery while creating a campaign. You can set this to ensure that the users who get qualified for the campaign are not disturbed during the specified DND hours.

If a user qualifies for a notification in DND hours, you can decide to either completely discard the notification, or specify to deliver the notification to him or her after the end of DND hours.

## Set DND for Mobile Push, SMS, Email, Web Push, or WhatsApp

To set DND for Mobile Push, SMS, Email, Web Push, or WhatsApp campaigns, perform the following steps. 

1. From _Channel_ > _Type_ > _When_, check the **Advanced** checkbox to display the DND options. 

![](https://files.readme.io/78ac26c-2020-08-17_14-35-27_Advanced_option_selected.png "2020-08-17_14-35-27_Advanced option selected.png")

2. Check the **Do not send this campaign on** checkbox.

![](https://files.readme.io/2594543-2020-08-17_14-58-28_Do_not_send_campaign_on.png "2020-08-17_14-58-28_Do not send campaign on.png")

3. Select the days and input the times you do not want to send campaign notifications. If you want to use the same time inactive period for each day, click the **Copy Time To All** link.
4. Click **Continue**.

# Campaign Frequency for Mobile In-App or Web Pop Up 

Campaign frequency provides the ability to define when the messages should be delivered. If a user qualifies outside this window, the message is discarded.

To set campaign frequency for Mobile In-App or Web Pop Up campaigns, perform the following steps: 

1. From _Channel_ > _When_ click the **Set campaign frequency** checkbox.

![](https://files.readme.io/38f0f41-2020-08-17_15-39-09_Online_Mobile_InApp.png "2020-08-17_15-39-09_Online_Mobile InApp.png")

2. Select the days and input the times you do not want to send campaign notifications. If you want to use the same time inactive period for each day, click the **Copy Time To All** link.

![](https://files.readme.io/56ec59c-2020-08-17_15-43-06_Set_campaign_frequency.png "2020-08-17_15-43-06_Set campaign frequency.png")

3. Click **Continue**.

# Campaign Cut-Off

CleverTap gives the option for setting the campaign “cut-off” time for every scheduled campaign while creating it. You can set this to ensure that the delivery of notifications is stopped after the specified cut-off time. This is useful if the campaign is time-sensitive and if the notification won’t be relevant later.

# Message Frequency Caps

If you have multiple marketing campaigns running simultaneously for any one channel (Push, Email, etc), the same user may qualify to receive a message from more than one campaign in a given day (or week/month). Frequency Caps allow you to limit the number of notifications a user will receive from all the campaigns running for that channel

Frequency is channel-specific. Frequency Caps allows you to limit the total notifications received in a given timeframe for one delivery channel and not across all the channel as a whole.

Frequency Caps are set under Campaign Limits in Settings > Setup:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/20ad6dc-564c098-Screenshot_2020-06-09_at_9.01.49_PM.png",
        "564c098-Screenshot_2020-06-09_at_9.01.49_PM.png",
        984
      ],
      "border": true
    }
  ]
}
[/block]


For more information about frequency caps, please visit [this page](doc:messaging-frequency-caps).

## Error Reporting with Frequency Caps

In the Error Reporting section of the campaign report, you can find the number of users that did not receive the campaign because of this frequency cap setting.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/160274c-find3.png",
        "find3.png",
        2256
      ],
      "border": true
    }
  ]
}
[/block]

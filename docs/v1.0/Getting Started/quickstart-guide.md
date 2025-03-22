---
title: "Quick Start Guide: Using Demo Account"
slug: "quickstart-guide"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Wed Jan 10 2018 00:40:50 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Mar 23 2021 20:08:29 GMT+0000 (Coordinated Universal Time)"
---
## Overview

The demo account provides access to the CleverTap platform for testing purposes. For this guide, we will use a demo account that is part of the CleverTap dashboard to email a discount code to users who have added an item to their shopping cart but did not complete a purchase. 

You will accomplish this in three steps through the CleverTap dashboard:

- Run a report to confirm if cart abandonment is a problem for your company.
- Create a segment to identify users who abandoned their cart.
- Build a campaign to email a discount code to users in that segment.

# CleverTap Demo Account

The demo account is already populated with user data, so you can experiment with CleverTap before integrating our SDK into your app. If you do not already have a CleverTap account, sign up for [one here](https://clevertap.com/sign-up/). 

To access your CleverTap demo account:

1. Log in to your [CleverTap account](https://dashboard.clevertap.com/).
2. Click on your account name on the top left corner of the CleverTap dashboard.
3. Click the **Demo - Ecommerce** button. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/04a0224-1_CleverTap_Demo_Account_.png",
        "1 CleverTap Demo Account .png",
        345
      ],
      "border": true
    }
  ]
}
[/block]


Once logged into the demo account, analyze, and solve the cart abandonment issue.

# Run a Report

As a data-driven marketer, before running a campaign to our users, we should first validate the issue. Our hypothesis is that more than 10% of users abandoned their cart. Using CleverTap, we can run a report to confirm if this hypothesis is true. 

1. From the CleverTap dashboard, select _Analytics_, then click **Funnels**. 

The funnel report in CleverTap provides the ability to view the drop-off between different stages that you have defined. In this case, we want to understand the drop-off between the number of users who add an item to their cart to the number of users who complete a purchase.

2. Select the funnel steps:

- Under _Step 1_, select _Product Viewed_. 
- Click **+ Funnel Step**, then under _Step 2_, select _Added to Cart_. 
- Click **+ Funnel Step**, then under _Step 3_, select _Charged_. 

_Product Viewed,_ _Added to Cart_, and _Charged_ are events tracked by CleverTap. After you [integrate our SDK](https://clevertap-developer-docs.readme.io/v1.0/docs/getting-started) in your app, you can immediately start tracking and analyzing these events in the CleverTap dashboard.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0c00065-Run_a_Report_1_-_Funnels_steps.png",
        "Run a Report 1 - Funnels steps.png",
        1418
      ],
      "border": true
    }
  ]
}
[/block]


Unfortunately, the cart abandonment problem is worse than expected. Only 47% of users who add an item to their cart complete a purchase which means the other 53% abandon their cart.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c43bceb-funnel2.png",
        "funnel2.png",
        1141
      ],
      "border": true
    }
  ]
}
[/block]


# Create a Segment

A CleverTap segment is a group of users whose actions and profile properties match a set of criteria you have defined. Segments are created to identify users who added an item to their cart but then did not complete a purchase within five minutes.

1. From the CleverTap dashboard, navigate to _Segments_, then click the **Segments** option.
2. Click **+ Segment** to create a new segment.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/15eba62-Create_a_Segment_1_-__Segment.png",
        "Create a Segment 1 - + Segment.png",
        1354
      ],
      "border": true
    }
  ]
}
[/block]


3. On the next page under _Live user segments_, select the _Inaction within time_ box.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/50a8969-Create_a_Segment_3_-_Inaction_within_time_box.png",
        "Create a Segment 3 - Inaction within time box.png",
        1180
      ],
      "border": true
    }
  ]
}
[/block]


4. Under the _As soon as user does_ section, select _Added to Cart_ which tracks when an item was added to a user's shopping cart in the app. 
5. In the _And does not do_ section, enter five minutes for the time. 

These settings create a continuously updated segment that identifies users who added an item to cart, but then did not complete a purchase within five minutes.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/85cd769-Create_a_Segment_2_-_Live_user_segment_-_Inaction_within_time_.png",
        "Create a Segment 2 - Live user segment - Inaction within time .png",
        685
      ],
      "border": true
    }
  ]
}
[/block]


6. Save the segment as _Added To Cart but did not Charge within 5 minutes_, then click **Save**.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7e20fae-Create_a_Segment_4_-_new_segment_name.png",
        "Create a Segment 4 - new segment name.png",
        688
      ],
      "border": true
    }
  ]
}
[/block]


# Build a Campaign

CleverTap offers nine different messaging channels enabling you to reach your users on the optimal channel, such as email, in-app notification, or push notification.

1. Next to the _Added To Cart but did not Charge within 5 minutes_ segment, click **Engage** in the dropdown menu. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9712992-Build_a_Campaign_1_-_Create_campaign.png",
        "Build a Campaign 1 - Create campaign.png",
        1394
      ],
      "border": true
    }
  ]
}
[/block]


2. Under _Email channels_, select _Email_.

![](https://files.readme.io/68c4600-Build_a_Campaign_1b_-_Select_email_channel.png "Build a Campaign 1b - Select email channel.png")

3. Select a campaign type.

![](https://files.readme.io/ef7d515-Build_a_Campaign_1c_-_Select_campaign_type.png "Build a Campaign 1c - Select campaign type.png")

3. Name the campaign _Abandoned Cart Email_.
4. Select a start and end date/time. This keeps the campaign running until the time you specify. 

Alternatively, you can keep the campaign running continuously by selecting _Never end_.

![](https://files.readme.io/70ea522-Build_a_Campaign_1d_-_Name_campaign_and_When_selection.png "Build a Campaign 1d - Name campaign and When selection.png")

On the next page, keep the default settings which is pre-populated based on the segment you selected earlier. 

5. Add a gap of 15 days, so a user does not receive a discount code again until after 15 days have passed.

> 📘 Gap Range
> 
> The gap range must be between 15 minutes and 40 days.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7f1329e-Build_a_Campaign_1e_-_Day_gap_and_Who_selection_NEW.png",
        "Build a Campaign 1e - Day gap and Who selection NEW.png",
        1626
      ],
      "border": true
    }
  ]
}
[/block]


6. Select the type of message you want to send to your users, then enter text in the email body or you can click **Continue to Sender details** to proceed to the next step.

![](https://files.readme.io/1e83527-Build_a_Campaign_1f_-_What_Message_selection.png "Build a Campaign 1f - What Message selection.png")

7. Fill out the email subject line and body. Using the @ symbol, you can make the email personalized for each user based on information from their profile properties. 
8. Once you are done entering all the necessary information, click **Continue**.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/06d2ef1-Build_a_Campaign_1g_-_enter_What_content.png",
        "Build a Campaign 1g - enter What content.png",
        1612
      ],
      "border": true
    }
  ]
}
[/block]


9. Review the setup page, then click **Continue**.

![](https://files.readme.io/5ce015f-Build_a_Campaign_1h_-_Setup.png "Build a Campaign 1h - Setup.png")

10. Click **Schedule notification** and your campaign will be live. 

Since this a demo account, no emails will be sent. If you follow these same steps for your regular CleverTap account, each user in this segment will receive an email. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/69b59d4-Build_a_Campaign_1i_-_Schedule_notification.png",
        "Build a Campaign 1i - Schedule notification.png",
        1631
      ],
      "border": true
    }
  ]
}
[/block]


# Next Steps

You now have built your first campaign in CleverTap.

First, you ran a report to analyze if there was an issue with cart abandonment in your app. After confirming this issue, you created a segment to identify users who abandoned their cart. Finally, you set up a campaign to engage your users in that segment and encouraged them to complete the purchase.

To start solving problems like these for your company, you need to integrate our SDK into your app by following one of [these guides](https://developer.clevertap.com/docs). If you want to keep exploring more CleverTap features before integrating our SDK, check out our [core concepts pages](doc:user-profiles).

To integrate your app and get started, refer to [Quick Project Setup](https://docs.clevertap.com/docs/quick-project-setup).

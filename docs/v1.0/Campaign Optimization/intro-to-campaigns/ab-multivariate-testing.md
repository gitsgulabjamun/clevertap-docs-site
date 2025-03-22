---
title: "A/B & Multivariate Testing"
slug: "ab-multivariate-testing"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Mon Feb 05 2018 22:50:51 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Mar 10 2021 16:05:39 GMT+0000 (Coordinated Universal Time)"
---
## Overview

Optimizing messages and campaigns is a crucial activity for any app marketer. 

We offer three ways to optimize everything you deliver:

- A/B & Multivariate Testing
- Split Message Delivery 
- Sending Campaigns to an Audience Subset

# A/B Testing

A/B Testing lets you compare up to three different versions of a message for any campaign. 

You can try different copy, creatives calls to action, or any combination of these to make sure you have designed the best message for each campaign. 

Pick the size of the test audience to run and we will do the rest. We will determine the winner based on the number of click-throughs, and then deliver the winning message to the rest of your target audience.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e5353df-ab1.gif",
        "ab1.gif",
        1280
      ],
      "border": true
    }
  ]
}
[/block]


For any campaign, you’ll need the content and creatives for each message. When creating a Push Notification campaign, you’ll now see an option to add up to three variants of any message to test which one performs best.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d2212c4-Campaigns_multivariate_AB_What_example.png",
        "Campaigns_multivariate_AB_What_example.png",
        1003
      ],
      "border": true
    }
  ]
}
[/block]


After you have added the desired number of variants you are ready to determine how big of a test to run.

## Campaigns Sent to Past Behavior Segments

For campaigns sent to Past Behavior Segments (grouping of users based on their actions in the past) you have two options: launch the A/B test to a percentage of your target audience or send out an absolute number of messages. In either case, we’ll deliver the variants equally to the test audience.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bb7e63f-Campaigns_multivariate_AB_message_AB_test.png",
        "Campaigns_multivariate_AB_message_AB_test.png",
        1026
      ],
      "border": true
    }
  ]
}
[/block]


For example:

- You are testing three messages (Variant A, Variant B, Variant C)
- Your Campaign Reach is 2,000,000 users
- You choose a Test Population of 15% of Campaign Reach (300,000 users)

Then we will send:

- Variant A to 100,000 users
- Variant B to 100,000 users
- Variant C to 100,000 users

After the 300,000 messages have been delivered, we will calculate the winning message over this test group based on the number of click-throughs. 

We’ll then automatically send the winning message to the remainder of your target audience, which in this example is 1,700,000 users.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/75f0487-Screenshot_2020-06-10_at_12.34.51_AM.png",
        "Screenshot 2020-06-10 at 12.34.51 AM.png",
        1439
      ],
      "border": true
    }
  ]
}
[/block]


> 👍 Note
> 
> We ensure there are always an equal number of messages sent for each variant. This ensures there is no bias introduced during the test phase and that the best performing message is always declared the winner.

## Campaigns Sent to Live User Segments

With campaigns sent to Live User Segments, campaign (triggered) messages are delivered immediately when a user’s activity matches the criteria that you have selected. 

**Example**  
In this scenario, you want to send a message when the user has completed a booking or purchase. Because it’s not possible to determine the reach of triggered campaigns upfront, you must decide how many of the total messages to send for A/B testing before a winner is declared.

If you select 500 users as your test audience, we will alternate delivery of Variant A and Variant B as users qualify for the campaign. After 500 total messages are sent (Variant A – 250 and Variant B – 250), we will decide the _Winner_ based on the number of clicks and continue only with this winning message for the duration of the campaign.

Deciding on a test audience for A/B Testing triggered campaigns requires some estimation. We recommend you check the total messages that were sent for similar triggered campaigns in the past to get a sense of how many users may qualify. If you select a test audience that’s too small (say 25 users) you will get a statistically insignificant sample. 

If your test group size exceeds the total number of users who ultimately qualify for that campaign, then no _Winner_ is be declared and each message variant is alternatively delivered for the duration of the campaign.

# Split Delivery

For some campaigns, you want to send multiple variants of a message to your entire target audience without selecting a winner. With _Split Delivery_, you choose what percentage of your target audience receives each variant and we’ll deliver them accordingly.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7a1a774-ab5.png",
        "ab5.png",
        1200
      ],
      "border": true
    }
  ]
}
[/block]


Here’s how it works:

As with A/B testing, when creating the message for a campaign you can add up to three variants. With _Split Delivery_ you can decide what percentage of your audience receives each message variant. We will deliver the messages in exactly this proportion for the duration of the campaign.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4107e24-Campaigns_multivariate_AB_message_split_test.png",
        "Campaigns_multivariate_AB_message_split_test.png",
        1028
      ],
      "border": true
    }
  ]
}
[/block]


After the campaign is completed, navigate to the campaign stats to compare how each message performed.

# Deliver to a Subset of the Target Audience

Sometimes you want to send a message to only a subset of the qualifying audience (Target Reach) for a campaign or avoid sending it if the number of qualified users exceeds the specified number.

A great use case for this is a limited offer. You want to send a fixed number of coupon codes that you want to distribute. If the total reach for your campaign exceeds the available number of coupon codes,  you can simply limit the number of users who will receive the message to the available number of coupons. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8f35a4d-ab7.png",
        "ab7.png",
        406
      ],
      "border": true
    }
  ]
}
[/block]


Here’s how it works:

In the campaign creation flow, when you are determining who to send your message to, under the _Campaign Reach _section, select the option to limit delivery of the messages to the number you want.

For triggered campaigns (based on Live User Segments), as users qualify, they will receive the message until the total specified quantity is delivered, after which the campaign ends. For campaigns based on _Past Behavior Segments_, we will randomly select the users who receive the message.

The campaign limits can also be configured as follows: 

- Daily Limit - Limit the number of users for _each day_, for_ Best Time_, _User-Timezone_, and _Triggered_ campaigns.

- Campaign Run Limit - Limit the number of users for each run of a campaign, for Fixed Time or Recurring campaigns.

- Safety check - Prevent sending out unwanted campaigns. A campaign does not run if the number of qualified users exceeds the safety limit. The campaign creator receives an email alert for further action. For example, a customer has a budget for distributing 1000 discount coupons but the qualified user count is 10,000. If you select the safety check, the campaign does not run and prevents the sender from spending over budget. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/72a74a3-Campaign_Campaign_reach_annotated.png",
        "Campaign_Campaign_reach_annotated.png",
        1360
      ],
      "border": true
    }
  ]
}
[/block]


# Email A/B Testing

CleverTap's Email A/B Testing feature lets you compare up to three different versions of an email to find the best-performing one. You decide the size of the test audience for the A/B test, we will determine the winner based on the number of clicks, and then deliver the winning message to the rest of your target audience.

## Setup Steps

Creating an email campaign using the A/B testing feature follows a similar pattern to creating a normal email campaign. After choosing the segment to target and frequency of communication, you will be given an option to run the campaign as an A/B test. 

Click **Select** in the A/B test box to set up the email A/B test.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/00b3a8f-Campaigns_multivariate_AB_test_Email.png",
        "Campaigns_multivariate_AB_test_Email.png",
        1281
      ],
      "sizing": "100",
      "border": true
    }
  ]
}
[/block]


On the next page, build two or three different variations of the email you want to send. You can modify the email template, content, subject line, and sender name. 

Click **Continue** after you are finished building the email variations.

Select the sample size and wait time until the winning message is decided. Then click **Continue**.

![](https://files.readme.io/6c6dc2c-Campaigns_multivariate_message_Email_AB.png "Campaigns_multivariate_message_Email_AB.png")

> 👍 Winner Evaluation
> 
> We will determine the winner based on the number of clicks, and then deliver the winning message to the rest of your target audience. 
> 
> In the above image, we are sending the A/B test to a sample size of 10% who will receive either Variant A or B. In other words, 5% of the target segment will receive email Variant A and another 5% will receive email Variant B. We will wait for 45 minutes to evaluate the winner based on the number of clicks. The winner variant is then automatically sent to the remaining 90% of the target segment.
> 
> If there is a tie between Variant A and B, we will send the email Variant A to the remaining 90% of the audience.

You are finished with setting up the A/B test portion of building your email campaign. Now, you can complete the rest of steps similar to a normal campaign. Clicking **Schedule Notification** will finalize your email campaign.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/dc04e04-Campaigns_multivariate_Email_Setup.png",
        "Campaigns_multivariate_Email_Setup.png",
        1143
      ],
      "border": true
    }
  ]
}
[/block]


Check the **overview** and schedule the campaign.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a90fb0b-Campaigns_multivariate_AB_test_Email_Overview.png",
        "Campaigns_multivariate_AB_test_Email_Overview.png",
        1137
      ],
      "border": true
    }
  ]
}
[/block]


# Multivariate Campaigns

Using the_ Message on user property _type, you can create the multivariate campaigns.  
You can send a campaign based on the user property to your user base. 

For example, if you have users segregated based on languages. You can send campaign content in different languages based on their user property. You can select the _language_ as the user property for the multivariate campaign  
This will allow you to create multiple messages in the same campaign, each reaching out to users based on their language preference.

You can create up to 50 such variants in the same message. The default variant will engage the users who have no value against the profile property

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7de494d-Screenshot_2019-01-29_at_4.21.57_PM.png",
        "Screenshot 2019-01-29 at 4.21.57 PM.png",
        1008
      ],
      "border": true
    }
  ]
}
[/block]

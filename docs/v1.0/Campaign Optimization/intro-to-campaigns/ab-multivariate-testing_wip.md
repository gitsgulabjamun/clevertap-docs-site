---
title: "A/B & Multivariate Testing_Campaign_redesign_WIP"
slug: "ab-multivariate-testing_wip"
excerpt: ""
hidden: true
metadata: 
  image: []
  robots: "index"
createdAt: "Tue Apr 13 2021 23:11:58 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Apr 15 2021 04:11:27 GMT+0000 (Coordinated Universal Time)"
---
## Overview

Optimizing messages and campaigns is a crucial activity for any app marketer. Clevertap offers three ways to optimize everything you deliver:

- A/B & multivariate testing.
- Split message delivery.
- Sending campaigns to an audience subset.

# A/B Testing

A/B testing lets you compare up to three different versions of a message for any campaign. You can try different copy, creatives calls to action, or any combination of these to make sure you have designed the best message for each campaign. 

Pick the size of the test audience to run and we do the rest. We determine the winner based on the number of click-throughs and then deliver the winning message to the rest of your target audience.

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


For any campaign, you need the content and creatives for each message. When you create a push notification campaign, you have an option to add up to three variants of any message to test which one performs best.

After you have added the desired number of variants you are ready to determine how big of a test to run.

## Campaigns Sent to Past Behavior Segments

For campaigns sent to past behavior segments (grouping of users based on their past actions), you have two options: launch the A/B test to a percentage of your target audience or send out an absolute number of messages. In either case, we deliver the variants equally to the test audience.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a78e21f-1_Variant_distribution.png",
        "1 Variant distribution.png",
        1273
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

Then, we send:

- Variant A to 100,000 users
- Variant B to 100,000 users
- Variant C to 100,000 users

After the 300,000 messages have been delivered, we calculate the winning message over this test group based on the number of click-throughs. 

We then automatically send the winning message to the remainder of your target audience which in this example is 1,700,000 users.

The following is a sample report:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3a62ff3-2_Report.png",
        "2 Report.png",
        1354
      ],
      "border": true
    }
  ]
}
[/block]


> 📘 Equal Number of Sent Messages
> 
> We ensure there are always an equal number of messages sent for each variant. This ensures there is no bias introduced during the test phase and that the best performing message is always declared the winner.

## Campaigns Sent to Live User Segments

With campaigns sent to live user segments, campaign (triggered) messages are delivered immediately when a user’s activity matches the criteria that you have selected. 

### Example

In this scenario, you want to send a message when the user has completed a booking or purchase. Since it is not possible to determine the reach of triggered campaigns upfront, you must decide how many of the total messages to send for A/B testing before a winner is declared.

If you select 500 users as your test audience, we alternate delivery of Variant A and Variant B as users qualify for the campaign. After 500 total messages are sent (Variant A – 250 and Variant B – 250), we decide the winner based on the number of clicks and only continue with this winning message for the duration of the campaign.

Deciding on a test audience for A/B testing triggered campaigns requires some estimation. We recommend you check the total messages that were sent for similar triggered campaigns in the past to get a sense of how many users may qualify. If you select a test audience that is too small (25 users) you will get a statistically insignificant sample. 

If your test group size exceeds the total number of users who ultimately qualify for that campaign, then no winner is be declared and each message variant is alternatively delivered for the duration of the campaign.

# Split Delivery

For some campaigns, you want to send multiple variants of a message to your entire target audience without selecting a winner. With split delivery, you choose what percentage of your target audience receives each variant and we deliver them accordingly.

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


Here is how it works:

As with A/B testing, when creating the message for a campaign you can add up to three variants. With split delivery, you can decide what percentage of your audience receives each message variant. We deliver the messages in exactly this proportion for the duration of the campaign.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3c36f7a-3_Split_Delivery.png",
        "3 Split Delivery.png",
        1338
      ],
      "border": true
    }
  ]
}
[/block]


After the campaign is completed, navigate to the campaign stats to compare how each message performed.

# Deliver to a Subset of the Target Audience

Sometimes you want to send a message to only a subset of the qualifying audience (target reach) for a campaign or avoid sending it if the number of qualified users exceeds the specified number.

A use case is a limited offer when you want to distribute a fixed number of coupon codes. If the total reach for your campaign exceeds the available number of coupon codes, you can simply limit the number of users who will receive the message to the available number of coupons. 

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


Here is how it works:

In the campaign creation flow, when you are determining who to send your message to under the _Limits and Control Group_ section, select the option to limit delivery of the messages to the number you want.

For triggered campaigns (based on live user segments), as users qualify, they receive the message until the total specified quantity is delivered after which the campaign ends. For campaigns based on past behavior segments, we randomly select the users who receive the message.

The campaign limits can also be configured as follows: 

- Global campaign limit: Limits the number of users for each day, for the best time, user timezone, and triggered campaigns.

- Campaign run limit: Limits the number of users for each run of a campaign for a fixed time or recurring campaigns.

- Safety check: Prevents sending out unwanted campaigns. A campaign does not run if the number of qualified users exceeds the safety limit. The campaign creator receives an email alert for further action. 

> 👍 Target Audience Example
> 
> A customer has a budget for distributing 1,000 discount coupons but the qualified user count is 10,000. If you select the safety check, the campaign does not run and prevents the sender from spending over budget.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d57e2ac-4_Limits.png",
        "4 Limits.png",
        1300
      ],
      "border": true
    }
  ]
}
[/block]


# Email A/B Testing

CleverTap's email A/B testing feature lets you compare up to three different versions of an email to find the best-performing one. You decide the size of the test audience for the A/B test, we determine the winner based on the number of clicks, and then deliver the winning message to the rest of your target audience.

## Setup Steps

Creating an email campaign using the A/B testing feature follows a similar pattern to creating a normal email campaign. After choosing the segment to target and frequency of communication, you can run the campaign as an A/B test using the following steps.

1. Select _A/B Test_ to set up the email A/B test.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6a99abc-5_Select_AB_Test.png",
        "5 Select AB Test.png",
        1343
      ],
      "sizing": "100",
      "border": true
    }
  ]
}
[/block]


2. On the next page, build two or three different variations of the email you want to send. You can modify the email template, content, subject line, and sender name. 

3. Click **Continue** after you are finished building the email variations.

4. Select the sample size and wait time until the winning message is decided. 

5. Then click **Continue**.

![](https://files.readme.io/6c6dc2c-Campaigns_multivariate_message_Email_AB.png "Campaigns_multivariate_message_Email_AB.png")

> 📘 Winner Evaluation
> 
> We determine the winner based on the number of clicks and then deliver the winning message to the rest of your target audience. 
> 
> In the above image, we are sending the A/B test to a sample size of 10% who will receive either Variant A or B. In other words, 5% of the target segment will receive email Variant A and another 5% will receive email Variant B. We will wait for 45 minutes to evaluate the winner based on the number of clicks. The winner variant is then automatically sent to the remaining 90% of the target segment.
> 
> If there is a tie between Variant A and B, we will send the email Variant A to the remaining 90% of the audience.

You are finished with setting up the A/B test portion of building your email campaign. Now, you can complete the rest of the steps similar to a normal campaign. 

6. Click **Publish Campaign** to finalize your campaign.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/21481dd-6_Summary.png",
        "6 Summary.png",
        1373
      ],
      "border": true
    }
  ]
}
[/block]


# Multivariate Campaigns

Using the message on user property type, you can create multivariate campaigns. You can send a campaign based on the user property to your user base. 

For example, if you have users segregated based on languages. You can send campaign content in different languages based on their user property. You can select the language as the user property for the multivariate campaign. This allows you to create multiple messages in the same campaign, each reaching out to users based on their language preference.

You can create up to 50 such variants in the same message. The default variant engage the users who have no value against the profile property.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/567f327-7_Multivariate_campaigns.png",
        "7 Multivariate campaigns.png",
        1345
      ],
      "border": true
    }
  ]
}
[/block]

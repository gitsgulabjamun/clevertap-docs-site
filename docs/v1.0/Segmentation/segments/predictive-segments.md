---
title: "Intent-Based Segments"
slug: "predictive-segments"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Mon Oct 15 2018 03:01:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Mar 31 2021 20:11:37 GMT+0000 (Coordinated Universal Time)"
---
# Overview

- Intent-Based Segments is a CleverTap capability that enables you to define future goals and get instant predictions on the likelihood of achieving them. 
- A goal can be defined on any CleverTap Past Behavior Segment including 'All Users'
- After creating a new goal, you can track how you are progressing towards that goal with intuitive graphs and metrics, and also optimally engage users based on how likely they are to achieve the goal.

_Example:_ For a Segment "Users living in San Francisco," you can create a goal on Dec 01 to "Sell concert tickets" by Dec 31. CleverTap provides a forecast of how many users are likely to meet the said goal.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4837f26-ps3.png",
        "ps3.png",
        632
      ],
      "border": true
    }
  ]
}
[/block]


As part of Intent-Based Segments, you can further sub-segment and engage users with intent-based micro-segments. This new segmentation splits users into three buckets based on how likely users are to achieve a goal. The three buckets are _Most Likely_, _Moderately Likely_, and _Least Likely_. 

- Most likely users are those who are closest to meeting your goal. They may not be sent an engagement to get them to convert.
- Moderately likely users are those who are fence-sitters. They may or may not convert depending on the engagement and offers sent to them
- Least likely users are those who are unlikely to convert to your goal. Sending them any campaigns may lead to increased spam and unoptimized marketing effort 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ee3a8f3-Screen_Shot_2018-10-17_at_4.23.22_PM.png",
        "Screen Shot 2018-10-17 at 4.23.22 PM.png",
        551
      ],
      "border": true
    }
  ]
}
[/block]


> 📘 Feature Available in Beta to Customers on the Enterprise Plan
> 
> Intent Based Segments is currently available in beta to customers who are on the [Enterprise plan](https://clevertap.com/pricing/). This feature will be available to Enterprise customers until November 30, 2018 with no additional charge.
> 
> Starting December 1, 2018, this will be offered as an add-on feature to customers who purchase our AI Pack. The AI Pack will include a set of new features that utilize the power of CleverTap artificial intelligence and machine learning to help you achieve your marketing goals.
> 
> Please contact us on [sales@clevertap.com](mailto:sales@clevertap.com) for more information regarding the AI pack

# Create Your First Goal and Intent Segment

## Step 1: Select a Segment

In the CleverTap dashboard, click the **Segment** tab and then click the **Segments page** button. On the Segments page, you will see a list of your existing segments. Click on the **Segment** name to navigate to the Segment details page. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bc284c3-predictive_segments_1.png",
        "predictive_segments_1.png",
        1225
      ],
      "border": true
    }
  ]
}
[/block]


Alternatively, you can create a new **Past Behavior segment** here, and use this new segment in the next steps.

> 🚧 Past Behavior Segment
> 
> This feature only works with Past Behavior segments.

## Step 2: Create Segment Goal

Click the **+ New Segment Goal** button. 

This will create a new _Segment Goal_ with a _Target Group_, which is a snapshot of users who are a part of the segment when the goal is created. The performance of the goal will be tracked for this snapshot of users.

> 📘 Note
> 
> During the time that the goal is live, the segment size may change. The goal will not reflect this updated segment of users. The goal will be based on the snapshot of users when the segment was created

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f06dadc-ps62.png",
        "ps62.png",
        534
      ],
      "border": true
    }
  ]
}
[/block]


## Step 3: Select Prediction Inputs

To generate a prediction, you have to define three things:

1. Select if you want to **minimize** OR **maximize** the set of events picked.

> 📘 When to use Minimize
> 
> Use maximize if you want to maximize your goal (for example, Maximize video watched). This can be used for your conversion goals
> 
> Use minimize if you want to minimize your goal (for example, Minimize uninstalls). This can be used for your churn goals

2. Select the length of the goal by selecting the **goal end date**. The goal expires after the goal end date.
3. Select the set of events that you want to create the goal with. CleverTap will analyze these past events, and _based_ on this analysis generate a prediction on how many users will achieve your goal. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5f97ca7-ps2c.png",
        "ps2c.png",
        801
      ],
      "border": true
    }
  ]
}
[/block]


## Step 4: Predict Outcome

Click **Predict Outcome**. Our Machine Learning algorithm provides a prediction for how many users are likely to perform the set of events in the selected timeframe.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e25a629-ps2b.png",
        "ps2b.png",
        801
      ],
      "border": true
    }
  ]
}
[/block]


## Step 5: Save & Track Goal

You can choose to save and track the goal. This will count to your Goal creation limits. When the goal is saved, you will be able to track its performance by comparing the predicted versus actual results on a daily basis.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d8b1f50-p12.png",
        "p12.png",
        801
      ],
      "border": true
    }
  ]
}
[/block]


> 📘 Goal Limits
> 
> All customers can create up to 5 goals across the account. Goal creation is open for all customer types - Free, Business and Enterprise users

## Step 6: View Goal Stats

On the _Segment Details_ page, you can see the goal stats and trends by clicking **View Details**. You can also track how any campaigns are impacting the actual results versus the prediction. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0137ad4-ps222.png",
        "ps222.png",
        632
      ],
      "border": true
    }
  ]
}
[/block]


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1a30113-predictive_segments_62.png",
        "predictive_segments_6(2).png",
        1243
      ],
      "border": true
    }
  ]
}
[/block]


## Step 7 a: Engage All Users who are a part of the goal

On the Segment Details page, click the **Engage** button.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4908cde-ps223.png",
        "ps223.png",
        632
      ],
      "border": true
    }
  ]
}
[/block]


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bcc1465-Screen_Shot_2018-10-17_at_4.27.01_PM.png",
        "Screen Shot 2018-10-17 at 4.27.01 PM.png",
        808
      ],
      "border": true
    }
  ]
}
[/block]


After completing this step, you will complete the regular process for setting up a [Journey](doc:journeys) or a [Campaign](doc:intro-to-campaigns). If you repeat Step 6 again, you can see how the journey or campaign is impacting the actual results versus the prediction  
Note: You will not be allowed to change the Who section (users who are a part of the campaign or Journey)

## Step 7 b: Create Intent Based Segments

On the Segment Details page, click the **Intent Based segments**.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/82d7f9e-Screen_Shot_2018-10-17_at_2.17.35_PM.png",
        "Screen Shot 2018-10-17 at 2.17.35 PM.png",
        575
      ],
      "border": true
    }
  ]
}
[/block]


This will allow you to create an intent based segment. It will take upto 24 hours to create the intent based segments. You can come back the next day to track and engage with the intent based segments.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f86afc7-Screen_Shot_2018-10-17_at_2.21.33_PM.png",
        "Screen Shot 2018-10-17 at 2.21.33 PM.png",
        571
      ],
      "border": true
    }
  ]
}
[/block]


The intent segment will create 3 segments of users:-

- Most Likely
- Moderately Likely
- Least Likely 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4500d5f-Screen_Shot_2018-10-17_at_2.38.41_PM.png",
        "Screen Shot 2018-10-17 at 2.38.41 PM.png",
        552
      ],
      "border": true
    }
  ]
}
[/block]


You can choose to engage any one of the above micro segment. This will open the Campaign/Journey flow.  

> 📘 Control Group
> 
> A 5% control group will be created by default to track the performance of the Campaign/Journey.

**Goal Performance**  
You can track the performance of the goal from the graph above. If a campaign/journey has been created, the performance of the test group will be compared to that of the control group. If the campaign had a positive impact, there will be an uplift

## Step 8: Track Goal Until Expiry

When the goal ends, you will see the performance of the goal via 2 stats:-

1. Actual vs. Predicted  
   If actual is above predicted (and campaigns have been run on the goal), then you have improved the forecast by acting on your goal
2. Test Group vs. Control Group  
   Based on the campaigns run, the performance of the campaign will be attributed to the difference in the conversion of the Control Group and the Test Group

# Example

The following is an example of Intent-Based Segments use case to better show the feature's benefits. 

You have an app where you sell tickets. For an upcoming concert, you want to sell tickets to a target segment of 500k users based in San Francisco. You want to maximize the number of tickets sold, but are unsure of how many tickets you will sell and need help to forecast it. If the predicted outcome is lower than your ticket sales goal, then you also will want to engage users who might buy tickets if presented with a compelling offer.

First, navigate to the CleverTap dashboard, and click the **Segments** tab where you can see a list of your existing segments. In this list, you already have a segment of 500k users based in San Francisco. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d108bd3-predictive_segment_example.png",
        "predictive_segment_example.png",
        1226
      ],
      "border": true
    }
  ]
}
[/block]


You click into the segment details for the Users from the San Francisco segment, and you are presented with the new Intent-Based Segments feature on the right-side of your screen.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f91a920-ps5.png",
        "ps5.png",
        537
      ],
      "border": true
    }
  ]
}
[/block]


Next, you define your Segment Goal by specifying an event or multiple events that are similar to your ticket sales goal. CleverTap will analyze these past events with our machine learning algorithm, and based on this analysis, generate a prediction on how many users will achieve your goal. 

In the below example, an instant prediction is that you will sell 127k tickets.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1937826-ps2b.png",
        "ps2b.png",
        801
      ],
      "border": true
    }
  ]
}
[/block]


> 📘 Historical data requirement for Forecasting
> 
> There needs to be significant historical data available to be able to make an accurate prediction. If historical data is not sufficient, CleverTap will provide a message to change the events when setting the goal

You can then track how you are progressing towards your ticket sales goal on a daily basis by comparing actual versus predicted sales. 

You can now choose to engage the users of the goal or create intent segments or archive the goal

> 📘 Intent Based Segments
> 
> Creating Intent Segments is available only to enterprise users who have opted in for the 'AI pack'. For all other customers wanting to use Intent Based Segments, please contact us on [sales@clevertap.com](mailto:sales@clevertap.com)

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1f73ed4-Screen_Shot_2018-10-17_at_1.48.16_PM.png",
        "Screen Shot 2018-10-17 at 1.48.16 PM.png",
        1228
      ],
      "border": true
    }
  ]
}
[/block]


# Concepts

## Segment Goal

A Segment Goal is the number of events for a specific user segment that you want to achieve in a selected timeframe. This could be either maximizing or minimizing those events. 

> 👍 Segment Goal Example
> 
> You probably want to maximize charged events but you most likely want to minimize app uninstall events.

## Target Group

A Target group is a snapshot of users who are a part of the segment when the goal is created. The performance of the goal will be tracked for this snapshot of users.

## Prediction

Our Machine Learning algorithm will provide a prediction for how many users are likely to perform the set of events you defined in the selected timeframe.

## Intent-Based Micro-Segments

Intent-based micro-segments are a new segmentation that splits users into three buckets based on how likely users are to achieve that goal. The three buckets are Most Likely, Moderately Likely, and Least Likely.

# Best Practices

## Prediction

- To generate a more accurate prediction when creating a Segment Goal, select events that are similar to your goal. 

> 👍 Prediction Example
> 
> If you are selling tickets, then select _Charged_ or _Add to Cart_ events. CleverTap will analyze these past events with our machine learning algorithm and based on this analysis, a prediction will be generated based on how many users will likely achieve your goal.

## Engagement

- If you are tracking under your goal, you can engage the _Moderately Likely_ micro-segment with an offer to nudge them to complete your goal.

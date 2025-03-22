---
title: "Create Past Behavior Segments"
slug: "create-past-behavior-segments"
excerpt: ""
hidden: true
metadata: 
  image: []
  robots: "index"
createdAt: "Mon Feb 05 2018 20:26:37 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Jan 07 2019 07:58:18 GMT+0000 (Coordinated Universal Time)"
---
# Overview

A segment in CleverTap is a group of users whose actions taken, actions not taken, or user profile properties match a set of criteria you’ve defined.

For example, a segment can be users who launched the app for the first time in the past 30 days. A more complex segment could be users who live in New York, were acquired via a Facebook campaign in April, transacted 3 or more times in May and June, and have not transacted in the last 2 weeks.

Once you’ve identified segments of interest, you can save and then target them with any type of messaging campaign. You can also trend segments over time to understand how a segment behaves in response to your marketing initiatives. 

The entire CleverTap dashboard can be filtered by any segment you create including any of our analytics features.

# Types of Segments

There are two types of behavioral segments in CleverTap: Past Behavior segments and Live User segments.

## Past Behavior Segments

Past Behavior segments let you group users based on what they have done in the past. 

You can group users based on a single activity (i.e. all my users who App Launched in the past 30 days) to complex combinations of actions, inactions, and user properties.

## Live User Segments

While Past Behavior segments let you evaluate users based on historic criteria, Live User segments let you track what is happening in your app right now.

When you define a set of behaviors of interest, CleverTap will monitor for these behaviors as they happen in your app, and immediately add a user to a segment the moment their behavior matches your criteria.

You can create Live User segments for a single activity (booked a movie ticket), inaction (did not buy movie ticket in a certain time), off of date/time properties of events, or website related actions such as page visit, count or referrer.

# Create Segments

To create new segments, go to Segments under the Segmentation tab on the dashboard.

![](https://files.readme.io/81389c6-1.png "1.png")

Then, click on + Create new segment on the top-right of the Segments menu.

![](https://files.readme.io/65d398d-Screenshot_2019-01-07_at_1.17.39_PM.png "Screenshot 2019-01-07 at 1.17.39 PM.png")

In the main segment creation page, you will be presented with a list of options of types of Past Behavior and Live User segments you can create. Select any one, based on the segment you would like to set up.

![](https://files.readme.io/1f8a92d-Screenshot_2019-01-07_at_1.18.04_PM.png "Screenshot 2019-01-07 at 1.18.04 PM.png")

Past Behavior segments can be based on:

- Past user actions, e.g., users who added product to cart in the past 30 days
- Past user action/inaction combination, e.g., users who added product to cart but didn’t purchase in the last 30 days
- Past user action/inaction combination along with common user properties, e.g., platinum-level users who added product to cart but didn’t purchase in the last 30 days

Live User segments can add users to the segment as soon as users qualify based upon:

- User action trigger, e.g., users who have added product to cart
- User action/inaction combination trigger, e.g., users who have added product to cart but did not purchase within 10 minutes of adding product to cart
- Date/time property of user action, e.g., users whose appointment date is 5 days from today
- Page visit, e.g., users who have visited a certain URL on your website
- Page count, e.g., users who have visited a certain number of pages on your website
- Entry via referrer, e.g., users who have visited your website via a certain external referrer URL

## Create Live User Segments

In order to create a live segment with CleverTap, simply choose any of the options underneath “Live user segments” from the main segment creation page.

For instance, in the current example, we will create an “Inaction within time” segment for which users will qualify in realtime, as soon as they add a product to cart but do not purchase the product within 10 minutes (the golden window within which most users transact on our iOS and Android app platforms).

So, we’ll select green “Inaction within time” box, and then be taken into the following page where we can set up our segment as follows.

![](https://files.readme.io/fb0f7da-Screenshot_2019-01-07_at_1.18.41_PM.png "Screenshot 2019-01-07 at 1.18.41 PM.png")

We can choose to check the “Filter this stream based on these users’ past behavior/user properties” checkbox to apply past action/inaction/common user property filters.

The next step would be to click “Save segment”, name the segment, and then see it show up in the main “Segments” menu by its name, which in this case is “Added to cart but no charge 10 mins”. 

> 👍 Segment Naming Best Practices
> 
> Convey the core meaning of the segment while keeping the name brief.

### View Live User Segment Report

The top portion of the live user segment report consists of a way to first “Show segment definition” in order to understand its underlying query. 

There are also 2 graphs: 

- One on the left-hand side showing the plot of the number of users who qualified for the segment going forward from the first complete day post-segment creation
- One on the right-hand side showing the real-time rate at which users are qualifying for the segment (vs all user activity on your app/website). 

![](https://files.readme.io/db2a76c-2.png "2.png")

The lower portion of the live user segment report consists of a list of sample users trickling into your segment in real-time on the right-hand side. 

It also shows the reachability percentages for these users within each messaging channel on the left-hand side. 

The lower-most part of the report shows you how to “do more with this segment” by either filtering relevant analytics dashboard views by this particular user segment or reaching out to this segment via relevant messaging channels.

![](https://files.readme.io/49c688d-Screenshot_2019-01-07_at_1.20.31_PM.png "Screenshot 2019-01-07 at 1.20.31 PM.png")

## Create Past Behavior Segments

In order to create a Past Behavior segment with CleverTap, choose any of the options underneath “Past behavior user segments” from the main segment creation page.

For example, we will create an “Action”-based segment where users will qualify if they have applied a payment offer at least one time in the past 30 days.

So, we’ll select the box “Action”, and then be taken into the following page where we can set up our segment as follows.

![](https://files.readme.io/8ab9c17-3.png "3.png")

We can choose to “Estimate Reach” to see the current user size of the segment.

The next step would be to click “Save segment”, name the segment, and then see it show up in the main “Segments” menu by its name, which in our case, is “Frequent Buyers”.

### Precomputed Segments

- Precomputed segments allows you to optimize your Mobile Push Campaigns for speed of delivery. Using Precomputed Segments, you can send campaigns with minimal lag so that you can reach out to your users at even faster rate.
- Any Past Behavior Segment can be made a precomputed segment.
- To make a Past Behavior Segment precomputed, go to the segment details page of the said segment and mark it as 'Precomputed'
- Push, Email, SMS, and Webhook campaigns can be created using Precomputed segments. The rest will go as regular delivery

> 📘 Note
> 
> After marking a segment as precomputed, speed of delivery increases over time. You will see the fastest delivery rates after 3 hours of marking the segment as precomputed

### View a Past Behavior Segment Report

The top portion of the past behavior user segment report consists of a way to first “Show segment definition” in order to understand its underlying query. There are graphs on the left-hand side showing the plot of the number of users who qualified for the segment going forward from the first complete day post-segment creation. The list on the right-hand side shows the sample list of users who qualified for the segment on this day.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/11e60d3-4.png",
        "4.png",
        1313
      ],
      "border": true
    }
  ]
}
[/block]


The lower portion of the live user segment report consists of reachability percentages for these users within each messaging channel. The lower-most part of the report shows you how to “do more with this segment” by either filtering relevant analytics dashboard views by this particular user segment or reaching out to this segment via relevant messaging channels.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/af21607-Screenshot_2019-01-07_at_1.22.18_PM.png",
        "Screenshot 2019-01-07 at 1.22.18 PM.png",
        557
      ],
      "border": true
    }
  ]
}
[/block]


# View Analytics Filtered by Segment

Under the “Do more with this segment” section, you will have the option to view an analytics report. This will be for the chosen segment alone and not your entire user base. 

Analysis dashboard views will have the following filter at the top to enable this.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d30f21d-5.png",
        "5.png",
        173
      ],
      "border": true
    }
  ]
}
[/block]


Realtime dashboard views such as the Today dashboard will only enable filtering by Live User segments. Analytics based on past behavior such as Mobile App, Revenue, Funnels, Cohorts, Trends, and Events will only enable filtering their stats by Past Behavior segments.

# Create Campaigns for a Chosen Segment

Under the “Do more with this segment” section, under “Reach out with”, you will have the option to create a campaign to message a specific segment.

This will immediately take you the messaging channel with your segment criteria pre-populated in the target.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a836616-Screenshot_2019-01-07_at_1.23.56_PM.png",
        "Screenshot 2019-01-07 at 1.23.56 PM.png",
        1374
      ],
      "border": true
    }
  ]
}
[/block]

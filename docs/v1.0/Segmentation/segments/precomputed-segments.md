---
title: "Precomputed Segments"
slug: "precomputed-segments"
excerpt: ""
hidden: true
metadata: 
  image: []
  robots: "index"
createdAt: "Mon Dec 17 2018 09:02:17 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri Jan 04 2019 12:32:53 GMT+0000 (Coordinated Universal Time)"
---
## Overview

Precomputed segments allows you to optimize your Mobile Push Campaigns for speed of delivery. Using Precomputed Segments, you can send campaigns with minimal lag so that you can reach out to your users at even faster rate.

## How to Create Precomputed Segment

Any Past Behavior Segment can be made a precomputed segment.  
To make a Past Behavior Segment precomputed, go to the segment details page of the said segment and mark it as 'Precomputed'

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7a09711-Screenshot_2019-01-04_at_5.20.06_PM.png",
        "Screenshot 2019-01-04 at 5.20.06 PM.png",
        1233
      ],
      "border": true
    }
  ]
}
[/block]


## Segment Limits

- As an enterprise customer, you are allowed to create up to 20 precomputed segments
- You can unmark a precomputed segment from the segment details page itself
- Once you unmark a precomputed segment, all campaigns running now and in the future will run at regular pace

> 🚧 SMS and Email Campaigns
> 
> While CleverTap ensures fast delivery of all campaign channels which uses precomputed segments, for SMS and Email campaigns, the speed of delivery is dependent on your gateway provider

## How to Precomputed Segments Work

- Precomputed segments are Past Behavior Segments which are calculated every 3 hours
- This means that when a campaign is created on the precomputed segment, the time it takes to compute the list of users who are qualified to be a part of the campaign is reduced to nearly zero
- Since this list of users is already available immediately on campaign creation, the campaign is delivered at a faster rate

> 👍 Note
> 
> Precomputed segments are computed every 3 hours(starting at 12:00 am) and available for instant delivery of your campaigns and journeys.  
> Using precomputed segments will not include people who’ve qualified for the segment in the last 3 hours i.e. since the time the segment was last precomputed

## When to use Precomputed Segments

- When sending campaigns which require you to have a competitive advantage for fast delivery, we recommend to use Precomputed segments
- Some use cases are -  
  \*\* **Breaking News**: As soon as an important news breaks, and you want to send a Push Notification to your user base, we recommend that you use precomputed segments  
  \*\* **Score Updates**: For score updates, as soon as an important event occurs in the match and you want to reach your customers with a Push Notification. you may use precomputed segments

> 📘 Note
> 
> After marking a segment as precomputed, speed of delivery increases over time. You will see the fastest delivery rates after 3 hours of marking the segment as precomputed

> 🚧 Using Precomputed Segments in Journeys
> 
> Since Journeys is an orchestration platform, Precomputed segments is not applicable when creating Journeys

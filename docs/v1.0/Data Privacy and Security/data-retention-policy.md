---
title: "Data Retention Policy_needs_update"
slug: "data-retention-policy"
excerpt: ""
hidden: true
metadata: 
  image: []
  robots: "index"
createdAt: "Wed Apr 25 2018 04:42:41 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Aug 10 2020 12:29:46 GMT+0000 (Coordinated Universal Time)"
---
# Overview

This page describes CleverTap's data retention policy (DRP) for user profiles and events. 

User profile data includes [identifiers, system properties, and custom properties](https://docs.clevertap.com/docs/user-profiles). The data retention policy for user profiles is store a current snapshot of a user profile forever. 

Event data includes [system events and custom events](https://docs.clevertap.com/docs/events). The data retention policy for events depends on both your plan type and settings you define in the CleverTap dashboard.

# Data Retention Policy by Plan Type

[block:parameters]
{
  "data": {
    "h-0": "Plan Type",
    "h-1": "User Profile DRP",
    "h-2": "Event DRP",
    "h-3": "Can Modify Event DRP",
    "0-0": "**Business Plan** ",
    "0-1": "Current snapshot stored forever.",
    "0-2": "Automatically set to the maximum DRP of 10 years for all events.  \n  \nWhen an event surpasses the DRP, the oldest event will be deleted first.",
    "0-3": "Yes. Able to update the DRP for each event type. The minimum DRP that can be set is 3 months.",
    "1-0": "**Enterprise Plan** ",
    "1-1": "Current snapshot stored forever.",
    "1-2": "Automatically set to the maximum DRP of 10 years for all events.  \n  \nWhen an event surpasses the DRP, the oldest event will be deleted first.",
    "1-3": "Yes. Able to update the DRP for each event type. The minimum DRP that can be set is 3 months."
  },
  "cols": 4,
  "rows": 2,
  "align": [
    "left",
    "left",
    "left",
    "left"
  ]
}
[/block]

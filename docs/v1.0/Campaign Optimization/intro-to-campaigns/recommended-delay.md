---
title: "Recommended Delay for Inaction Campaigns"
slug: "recommended-delay"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Sun Jul 22 2018 06:50:20 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Mar 11 2021 14:31:29 GMT+0000 (Coordinated Universal Time)"
---
# Overview

_Recommended Delay_ is a feature that recommends the best time to send a message for an Inaction campaign. 

This feature is built for Inaction campaigns, which are designed to engage users who do not do something. For example, with an Inaction campaign, you can message users who install your app (action), but do not purchase something within 2 hours (inaction). Using the Recommend Delay feature, you can let CleverTap automatically decide the best time to send a message to re-engage users who do not purchase something.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c24a751-image2.png",
        "image2.png",
        709
      ],
      "border": true
    }
  ]
}
[/block]


In this second scenario, the average time it takes a user to add an item to their cart (action 1) and then checkout (action 2) is five minutes. If the user has not completed the checkout process within five minutes of adding the item to their cart (inaction), then the likelihood that a user will checkout drops substantially. In this example, if you use the _Recommended Delay _feature we will automatically recommend that you send a notification to the user if they have not completed the checkout process after five minutes.

# How It Works

CleverTap creates this recommendation by calculating the average time users take to convert from one action to another action. 

Beyond this average time, the likelihood that a user will complete the second action drops substantially. However, if you send a message to the user at that point, you can increase the conversion rate for the second action.

# Feature Guide

## Create an Inaction Campaign

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/62977ce-campaigns_push_type_Inaction.png",
        "campaigns_push_type_Inaction.png",
        1012
      ],
      "border": true
    }
  ]
}
[/block]


## Select When to Send the Campaign

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e06f79b-image1.png",
        "image1.png",
        644
      ],
      "border": true
    }
  ]
}
[/block]


## Select the Action and Inaction 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/27cb111-image2-updated.png",
        "image2-updated.png",
        709
      ],
      "border": true
    }
  ]
}
[/block]


## Click on Find Best Delay to Enable the Recommended Delay Feature

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/86faec1-image2.png",
        "image2.png",
        709
      ],
      "border": true
    }
  ]
}
[/block]

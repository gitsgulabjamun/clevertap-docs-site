---
title: "Advanced Role: Approver"
slug: "creator-approver"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Fri Mar 16 2018 09:19:26 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri Oct 18 2019 14:03:05 GMT+0000 (Coordinated Universal Time)"
---
# Overview

Campaign Approver is a security feature that enables you to have increased control over who can send campaigns within your organization

Within your marketing team, you might have one person who is responsible for creating campaigns in CleverTap, and then have another person who reviews and approves these campaigns before they can be sent. The Approver feature enables this workflow in CleverTap by requiring approval before a campaign can be sent. Review for the Campaign can be done in the Segment, Time and campaign copy.

As part of this feature, we introduced a new system role called Approver. Users in this role have the ability to approve campaigns created by users in the Creator role. Once the Approver is enabled in your account, a Creator will not be able to send a campaign, unless it is approved.

# Enable Approver Role

This feature is a part of our Advanced Role Based Access Control. You will have access to the feature if you have opted-in for the [Corporate pack](https://clevertap.com/pricing).

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c0a4296-Approver.png",
        "Approver.png",
        1248
      ],
      "border": true
    }
  ]
}
[/block]


# Campaign Workflow with Creator Approver Enabled

After the Approver Creator feature is enabled in your account, there will be a new workflow to send campaigns.

**Step 1**  
The Creator creates a campaign in CleverTap.

**Step 2**  
The Creator requests approval to send the campaign. This sends an email to the Approver or Admin to review the campaign, and then decide either to approve or not approve the campaign. 

**Step 3**  
If the Approver or Admin approves the campaign, the campaign is sent. If the campaign is rejected, the campaign is not sent.

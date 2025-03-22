---
title: "Product Experiences Setup"
slug: "product-experiences-setup"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Tue Oct 20 2020 08:58:24 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Feb 16 2021 22:28:22 GMT+0000 (Coordinated Universal Time)"
---
Create keys and segments for your app to enable product experiences. 

# Create Keys

These are the keys that you have defined in your app code. You can map these keys from the CleverTap dashboard and control the configuration of your app. Keys can be used for Product Config, Feature Flags, and A/B Tests.

To create keys:

1. Navigate to Product Experiences >  Setup > Keys
2. Click +Key to create a new key. 

> 📘 Note
> 
> The name of the key defined here must match the name of the key defined in the app. This name cannot be changed later. You can add up to 500 keys.

3. Add the Key definition. 

Let us add some sample values:

You can now activate or deactivate the dark mode based on the Keys. The default value that the app is expecting for this key is `3`.  These values are set in your app. Let us assume that the key value 3 means activate the feature, 4 means deactivate the feature. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/eafa5c2-product_exp_keys.png",
        "product_exp_keys.png",
        2880
      ],
      "border": true
    }
  ]
}
[/block]


4. Click Save. The `dark_mode` key is now listed on the Manage Keys page. 

## Edit/Archive Keys

1. Navigate to Product Experiences >  Setup > Keys. The Keys page appears. 
2. Click the ellipsis menu to edit or archive a key. Only the default value and description can be edited after saving a key.

You can view all the archived keys by selecting the Archived Keys box at the bottom of the key's list.  If a key is used in a product config or feature flag then it cannot be archived. 

# Create Segments

The segments are the target users who will receive app changes. These segments can be used for Product Config, Feature Flags, and A/B Tests.

To define the segments:

1. Navigate to Product Experiences >  Setup > Segments
2. Click +Segment to create a new segment.
3. Name the segment.
4. Create a segment by users who performed and/or did not perform an event.  You can also create segments for user properties such a demographics, geography, and so on. For our example, create a segment of iPhone users living in New York. 
5. Save the segment. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/483d933-ProductExp_Segment_Create.png",
        "ProductExp_Segment_Create.png",
        1182
      ],
      "sizing": "100"
    }
  ]
}
[/block]


## Edit/Clone a Segment

1. Navigate to Product Experiences >  Setup > Segments. The Segments page appears. 
2. Click the ellipsis menu to edit or clone a segment. For example, you may want to edit the city and create another user segment for Miami. 

# Create Goals

> 🚧 Note
> 
> This feature is currently available in closed beta.

Goals are used to evaluate the performance of an A/B test. It is an event and when a user performs this event, it is considered as a conversion.  
Navigate to Product Experiences >  Goals. Create a goal and save it. This goal is now available for selection in Product Experiences.

![](https://files.readme.io/8726071-AB_Goals.png "AB_Goals.png")

## Archive Goals 

- Navigate to Product Experiences >  Goals.
- Click the archive icon to archive a goal. 

![](https://files.readme.io/169925e-AB_Segment_Goals_Archive.png "AB_Segment_Goals_Archive.png")

You can view all the archived Goals by selecting the show archived goals box at the bottom of the goals list.  If a goal is used in a product experience then it cannot be archived.

# Mutually exclusive A/B tests

This is a global setting that is applicable only to A/B tests.  You can choose to exclude your segment from all other experiments. It applies only to the new experiments that are created after this setting is enabled. For example, if it is set as disabled at a global level, you will have to enable it on each subsequent test. The users who qualify for this A/B test are unique and they are not shared across any other experiment. 

1. Navigate to Product Experiences > Settings > Mutually exclusive A/B tests.
2. Turn on the toggle.  These users will be included only in one A/B test at a time. 

![](https://files.readme.io/463bdd2-AB_Settings_mutually_exclusive_users.png "AB_Settings_mutually_exclusive_users.png")

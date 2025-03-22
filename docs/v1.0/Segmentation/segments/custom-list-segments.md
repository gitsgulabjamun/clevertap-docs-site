---
title: "Custom List Segments"
slug: "custom-list-segments"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Wed Apr 08 2020 19:53:14 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Apr 01 2021 02:52:46 GMT+0000 (Coordinated Universal Time)"
---
# Introduction

Custom List Segments are custom segments that you can create based on your requirements and analytics. These can be users with the required interests, demographics, and so on. You can use these segments to re-engage your users without having to apply the same conditions or filters again. 

## Examples

A custom list segment can be handy in many scenarios. Typical use cases can be any of the following and more:

- A retail business running SMS campaigns:  
  As a retail business, you may be generating user lists at your point of sale across different cities. You can upload city-based segments and run personalized campaigns to re-engage these users. 

- Engagement integrated with your segmentation engine:  
  You may have a segmentation engine or a data science engine that has created a user set to engage with a specific message. In this case, you can use custom list segments to seamlessly create segments from your custom lists and schedule engagement for them. 

- Real-time sync for engagement with your in-house segments:  
  For example, an app streaming a football match can have millions of users. However, let us assume that the target audience is 10,000 users. The next match is even more interesting and you are expecting a surge in the number of users. You have a list of 15,000 users handy that you can use to run the campaign. You create a segment on this list and run a campaign immediately.  

# Create a custom list segment

You can create a custom list segment by uploading user lists via the dashboard or an API. 

## File Format

The list of the users for your segment must follow a specific format. You can upload the profiles with identity type as GUID or CleverTap ID (g) or the identity (i). 

The format of the CSV file is as follows:

| Type | Identity                         |
| :--- | :------------------------------- |
| g    | a1e2723cba7c4518bea8ef95b036ac83 |
| i    | identity                         |

The type and identity columns are mandatory for uploading a custom list segment.  

> 📘 Note
> 
> You can only qualify the user profiles that are already available in CleverTap.

## Create from dashboard

1. Click the + Segment button. 

2. Click Custom Lists. The Create new Window appears. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c3e7478-Segments_Custom_lists_select.png",
        "Segments_Custom_lists_select.png",
        1048
      ],
      "sizing": "100",
      "border": true
    }
  ]
}
[/block]


3. Click the Upload user list button and select the CSV file. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ff7420d-Segments_Custom_lists_upload.png",
        "Segments_Custom_lists_upload.png",
        1236
      ],
      "border": true
    }
  ]
}
[/block]


4. Name the file and save it. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0f377dc-Segments_Custom_lists_Name.png",
        "Segments_Custom_lists_Name.png",
        1237
      ],
      "border": true
    }
  ]
}
[/block]


5. You will receive an email with the details after the file is processed. 

![](https://files.readme.io/772be36-Segments_Custom_list_email_successful.png "Segments_Custom_list_email_successful.png")

The uploaded segment is now available for use. 

> 📘 File size
> 
> You can upload maximum file size of 50 MB from the dashboard. The maximum file size allowed from an API upload is 5GB.

## Create from API

You can create a custom list segment from API. For more information, see  [Custom list API](https://developer.clevertap.com/docs/custom-list-endpoints).

## Replace via dashboard

You can replace a custom list segment from the dashboard. However, if the segment is currently in use for engagement through a Campaign or Journey, then you must stop the Campaign or Journey before replacing the segment. 

_To replace a segment_:

1. Click the ellipsis for segment action from the Segments dashboard. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/efc2bc5-Segments_Custom_lists_replace.png",
        "Segments_Custom_lists_replace.png",
        1222
      ],
      "border": true
    }
  ]
}
[/block]


2. Click the replace icon <img src="https://files.readme.io/f7a63da-icon_replace.png" height="30px" width="30px" >
3. Click the Re-upload user list and select the CSV file.  
   Upload the CSV file.
4. Name the file and save it. Wait for it to be processed. 
5. You will receive an email with the details after the file is processed. 

The uploaded segment is now available for use. 

## Troubleshoot Upload

You may see the following messages when trying to upload the file. 

![](https://files.readme.io/e3712c0-Segments_Custom_lists_email_reupload.png "Segments_Custom_lists_email_reupload.png")

If the file is not uploaded correctly, you may have to upload it again. 

| Segment issue         | Resolution                                                                                                                                                                                                                                                           |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| File upload failed    | The segment could not be created from the uploaded file. Fix the errors and re-upload the file.                                                                                                                                                                      |
| File re-upload failed | The segment could not be refreshed with the latest file. The segment will be available with the last successful update. Refer to the [Segment Details](https://docs.clevertap.com/docs/custom-list-segments#section-segment-details) page for the last updated file. |

> 📘 Segment processing
> 
> The custom list segment is available for use only after the process of creating or updating is complete.

## Segment details

The segment details can be viewed from the Segment dashboard. 

![](https://files.readme.io/736e185-Segments_Custom_lists_view_report.png "Segments_Custom_lists_view_report.png")

The segment details page shows all the available information for the segment such as:

- Trend - If the users have increased or decreased over time. 
- Campaigns and Journeys - The number of campaigns and Journeys currently using the custom list segment. 
- Segment size and reachability - The total number of users in the segment and their reachability across various engagement channels. 
- Sample Users - These are samples from your list. You can open any of them to check their details. 

> 📘 Tip
> 
> Hover over sample users to find the <img src="https://files.readme.io/f28fc62-icon_download.png" height="30px" width="30px" > download icon.  
> Click this button to download all the users in your segment.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/81840d5-Segments_Custom_lists_report.png",
        "Segments_Custom_lists_report.png",
        1193
      ],
      "border": true
    }
  ]
}
[/block]


# Use Custom List Segment

You can use the custom list segment from the _Who_ section when creating a campaign. All the custom list segments are listed under the Custom list segment tab. 

![](https://files.readme.io/f11a255-segments_custom_lists_WHO.png "segments_custom_lists_WHO.png")

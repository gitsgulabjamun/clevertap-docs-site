---
title: "Find People_WIP_for_Include/Exclude Segments_WIP"
slug: "find-people_clone_for_includeexclude-segments"
excerpt: ""
hidden: true
metadata: 
  image: []
  robots: "index"
createdAt: "Mon Jul 27 2020 10:37:48 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri Sep 04 2020 08:19:20 GMT+0000 (Coordinated Universal Time)"
---
# Overview

The Find People View lets you segment your users by actions taken, actions not taken, or user profile properties that match a set of criteria you’ve defined.

Go to Segments > Find people

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3574172-Segments_Find_users_search.png",
        "Segments_Find_users_search.png",
        1289
      ],
      "border": true
    }
  ]
}
[/block]


You can view detailed engagement statistics, demographic, device, and location information for those users. Inside your user segments, you can drill down into individual user profiles to see their detailed user profile and activity data.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a01df2a-Segments_Find_users_search_results.png",
        "Segments_Find_users_search_results.png",
        1276
      ],
      "border": true
    }
  ]
}
[/block]


You can also run targeted push, in-app, email, and web campaigns for these user segments from the Find People view.

## Include/Exclude Segments

You can simplify complex queries by including or excluding the existing user segments. Create segments with complex conditions once and then reuse them in different scenarios. 

You can create powerful segmentation that is valid for a variety of scenarios. 

![](https://files.readme.io/0fd3c96-Find_people_include_exclude_segments.png "Find_people_include_exclude_segments.png")

### Exclude Segments

There may be instances when you may want to exclude some users based on specific criteria. 

For example, you may want to offer discounts to all the users who have expressed interest by adding the product to cart in the past 30 days. However, you want to save your engagement dollars by excluding the power users.  
The parameters for these power users can be the following:

- Users who have charged 3 times in the past 3 months, and 
- Users who have launched the app 15 times in the past 1 month, and
- Users who rated a product 10 times in the past year

Now you can create a segment with these criteria called "Power Users" and use it every time rather than creating a complex query each time. 

You can save all these parameters in a segment called "Power users" and exclude them from the discount message. 

The following is a campaign query for an e-commerce app that excludes the "Power Users" segment.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2fb7f6a-exclude_segments_campaign.png",
        "exclude_segments_campaign.png",
        1050
      ],
      "sizing": "100",
      "border": true
    }
  ]
}
[/block]


### Include Segments

There may be instances when you may want to include some users based on specific criteria. 

Let us consider the example of a ride-hailing app. You want to nudge your users to enroll for a monthly pass as soon as they open the app. The parameters for these users can be the following:

- The users must be power users, and
- The users have booked more than 5 rides in a month, and
- They belong to select cities in the country

Now you can create a segment with these criteria called "Power Users" and using it repeatedly rather than creating a complex query each time. 

The following is a campaign query for a ride-hailing app that includes the "Power Users" segment.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f9f341a-include_segments_campaign.png",
        "include_segments_campaign.png",
        1067
      ],
      "sizing": "100",
      "border": true
    }
  ]
}
[/block]


> 📘 Note
> 
> - You can include and exclude segments in the same query. It is considered as an AND condition between the two segments.
> - The include and exclude segments are currently unavailable for bulletins and A/B Testing.
> - The segments available for including or excluding users can only be of the type [PBS](https://docs.clevertap.com/docs/segments#section-past-behavior-segments) segment. 

## Sample Profiles

Enter the segment search details and click the View details button. The sample profiles appear at the bottom of the result page. 

Click any sample user to view the user details. You can see  the following:

### **Profile Details**

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1aa23d7-Segments_Find_users_Profiles.png",
        "Segments_Find_users_Profiles.png",
        1251
      ],
      "border": true
    }
  ]
}
[/block]


### **Activity Details** 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6f6139e-Segments_Find_users_Activity.png",
        "Segments_Find_users_Activity.png",
        1254
      ],
      "border": true
    }
  ]
}
[/block]


# Video Tutorial

[block:html]
{
  "html": "<div><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/XDb6OtUnl6Q?rel=0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>\n\n<style></style>"
}
[/block]

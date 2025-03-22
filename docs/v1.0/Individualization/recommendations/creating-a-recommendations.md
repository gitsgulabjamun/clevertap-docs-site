---
title: "Create a Recommendation"
slug: "creating-a-recommendations"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Wed Feb 27 2019 08:49:38 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Mar 30 2021 23:55:13 GMT+0000 (Coordinated Universal Time)"
---
## Overview

You can create a recommendation by choosing a catalog and defining the required configurations based on which our recommendation engine will churn out results. These recommendations are served up to users automatically when you create a campaign using a recommendation.

# Create a Recommendation

To create a new recommendation, perform the following steps: 

1. From the dashboard, navigate to _Settings_ > _Engage_ > _Recommendations_.
2. Click **+ Recommendation**.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a317ff3-1_Plus_Recommendation.png",
        "1 Plus Recommendation.png",
        1401
      ],
      "border": true
    }
  ]
}
[/block]


# Select a Catalog

Select a catalog from which to generate recommendations. You can access the catalogs to which you have mapped events to.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ee58c7e-2_Select_a_Catalog.png",
        "2 Select a Catalog.png",
        875
      ],
      "border": true
    }
  ]
}
[/block]


> 📘 Unmapped Catalog
> 
> Unmapped catalogs will not be available for generating recommendations.

# Select an Event

This is the event in which CleverTap will consider similar items. Follow the steps below:

1. Select an event from which to generate recommendations. You can access the events that have been mapped to the chosen catalog. 
2. Select the relevant timeframe for which you want to generate the recommendations (e.g., create recommendations for items that have been viewed together in the last 10 days).

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d6ba848-3_Select_an_Event.png",
        "3 Select an Event.png",
        878
      ],
      "border": true
    }
  ]
}
[/block]


## Some Examples

Below are some examples:

### e-Commerce App

An e-Commerce app may want to trigger a recommendation as soon as a user adds Nike shoes to cart. 

- In this scenario, you can recommend other shoes to the user. 
- This can be either based on the shoes that the user may have viewed together or searched together in the last 30 days.
- In this case, the event to select would be _Viewed_ together or _Searched_ together.

### Video Streaming App

A video streaming app may want to trigger a recommendation once a user completes watching a trailer of a fantasy TV series. 

- In this scenario, you can recommend other shows that have been watched together with fantasy TV shows in the last 10 days. 
- In this case, the event to select would be _Watched_ together.

# Filter Recommendations

To filter recommendations, you can include or exclude certain items.

> 👍 Fashion eCommerce Example to Include Items
> 
> A fashion eCommerce could set up their filter to only recommend shoes.

To filter the items that are served up to only include certain items, perform the following steps:

1. Select the checkbox for _Filter recommendations to specific catalog items_.
2. Select _Include_.
3. Click **+ Catalog Field**.
4. Select the appropriate category fields.
5. Add more catalog fields as required.
6. Click **Create**.

![](https://files.readme.io/ac08cc8-4a_Filter_recommendations_-_include.png "4a Filter recommendations - include.png")

> 👍 Fashion eCommerce Example to Exclude Items
> 
> A fashion eCommerce could set up their filter to exclude any items rated as a C user rating from their recommendations.

To filter the items that are served up to only exclude certain items, perform the following steps:

1. Select the checkbox for _Filter recommendations to specific catalog items_.
2. Select _Exclude_.
3. Click **+ Catalog Field**.
4. Select the appropriate category fields.
5. Add more catalog fields as required.
6. Click **Create**.

![](https://files.readme.io/3fc8c73-4b_Filter_recommendations_-_exclude.png "4b Filter recommendations - exclude.png")

> 📘 Processing Time
> 
> It takes up to 24 hours for the CleverTap data science engine to publish the recommendations from the time the recommendation is generated.

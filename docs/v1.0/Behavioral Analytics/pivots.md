---
title: "Pivots"
slug: "pivots"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Fri Jan 19 2018 21:15:39 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Mar 16 2021 07:36:55 GMT+0000 (Coordinated Universal Time)"
---
## Overview

Pivots provide the capability to derive significance and insights from your user data. The pivot analysis tool summarizes your data with the help of tables and other data visualizations. When dealing with a large volume of data, this useful tool helps marketers create incisive summaries and view custom reports to glean user insights.

A pivot analysis helps answer questions, such as:

- Which categories of my products are selling best and at what time of the day?
- In which city are my sales for Nike shoes the lowest?
- How many minutes of sports content do my platinum customers consume each day of the week?

> 📘 Only Available for Enterprise Accounts
> 
> Pivots is only available for enterprise accounts as part of CleverTap's Discovery Platform.

# Getting Started with Pivots

## Pick Your Event

To pick your event:

1. Navigate to _Analytics_ > _Pivots_.
2. Select the event you want to analyze. 

This event forms the basis of your analytics that can be coupled with its properties along with all the information CleverTap has for your users.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f2319fd-Pivots_select_event.png",
        "Pivots_select_event.png",
        1189
      ],
      "border": true
    }
  ]
}
[/block]


## Select Your Segment

After you have selected the event to analyze, decide if you want to analyze this event for all your users or for a particular segment of users. This feature is useful as the behavior for users varies across segments. 

> 👍 Content Consumption Example
> 
> The content consumption for a new user segment will be very different from the consumption of people who have already consumed at least 50 hours of content.

![](https://files.readme.io/9ed3243-Pivots_segments_create.png "Pivots_segments_create.png")

## Picking the Properties to Pivot On

Select the properties to analyze, such as:

- Event properties
- User properties
- Geography
- Technographics
- App fields 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e943721-Picking_the_Properties_to_Pivot_On.png",
        "Picking the Properties to Pivot On.png",
        866
      ],
      "border": true
    }
  ]
}
[/block]


## Aggregating Your Query by Count vs. Conversion Property

You can group your data by the occurrences of an event which are the number of times this event has happened. 

If the event you are analyzing is your conversion event and your conversion property is an integer, you can group your data by the sum of this property. 

> 👍 Flight Aggregator Example
> 
> A flight aggregator can view data by the count of flight booked event or by the sum of the amount property.

## Understanding the Pivot Analysis

The pivot analysis consists of:

- Pool of available properties: This is a list of properties you selected while creating the pivot table. You can use these properties in any combination to slice and dice your data to derive insights. These properties could act as rows or columns in the tabular view and as cartesian axes in the graphical view.
- Row(s): The properties you select as rows in your tabular views.
- Column(s): The properties you select as columns in your tabular views.
- Data visualizations: You can select what visualization you want to see the data you have sliced and diced in.

# Example Analysis

For example with a video application, we can use the pivot analysis to understand its output and content consumption patterns in our platform. To do so, we have selected the event _video watched_ which is raised after someone is done watching a video.

For this pivot analysis, we select the following properties:

- Hour of the day
- Day of the week
- Video name

We also pick our measurement property as _video duration watched_ since it is critical for us to measure video performance, not just by the number of views, but also by the duration of content consumption.

Now, we explain each view and tell you what insights can be drawn for each view supported by our pivot analysis.

## Table

This is best for getting a quick overview of selected data.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6f678ed-Pivots_result_table.png",
        "Pivots_result_table.png",
        1197
      ],
      "border": true
    }
  ]
}
[/block]


## Table Heat Map

This is best for analyzing highest contributor in a given data set. 

For example, if your row is day of the week and your column is video name, this heat map tells you which video was played the most and on which day of the week it happened.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5258a1a-Pivots_heat_map.png",
        "Pivots_heat_map.png",
        1194
      ],
      "border": true
    }
  ]
}
[/block]


## Columnar Heatmap

This is best for analyzing outliers in any column. 

For example, if your row is day of the week and your column is video name, this heat map tells you which video was played the most on each day of the week.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/631d4e0-Pivots_heat_map_columnar.png",
        "Pivots_heat_map_columnar.png",
        1193
      ],
      "border": true
    }
  ]
}
[/block]


## Row-wise Heatmap

This is best for analyzing outliers in any row. 

For example, if your row is day of the week and and your column is video name, this heat map tells you on which day of the week each video has performed well. _Game of Thrones_ performs best on Sundays whereas _Friends_ works best on Saturdays.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ebb44ce-Pivots_heat_map_row.png",
        "Pivots_heat_map_row.png",
        1199
      ],
      "border": true
    }
  ]
}
[/block]


## Stacked Bar Chart

This is best best for visualizing the change in performance of one variable over time when compared to several other variables. 

For example, if your row is day of the week and your column is video name, you might see that the performance of _Game of Thrones_ peaks around Sunday/Monday. _Game of Thrones_ is a lot lower for the rest of the week as compared to the consumption of _Friends_, _Prison Break_, and _Breaking Bad_ which are all consistent across the week.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/29a3b30-Pivots_heat_map_stacked_bar.png",
        "Pivots_heat_map_stacked_bar.png",
        1192
      ],
      "border": true
    }
  ]
}
[/block]


## Bar Chart

This is best for visualizing categorical or qualitative data over time. 

For example, if your row is day of the week and your column is video name, you can see how the consumption of _Game of Thrones_ has been over the week.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/23868d6-Pivots_heat_map_bar_chart.png",
        "Pivots_heat_map_bar_chart.png",
        1198
      ],
      "border": true
    }
  ]
}
[/block]


## Line Chart

This is best for visualizing the change of variables over time. Since all lines are plotted on the same graph, this visualization helps you determine the relationship between different variables.

For example, if your row is day of the week and your column is video name, you might see that _Breaking Bad_ and _Prison Break_ follow the same trend across the week. This implies that the demand for these videos is consistent.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bcf83e5-Pivots_heat_map_line_chart.png",
        "Pivots_heat_map_line_chart.png",
        1198
      ],
      "border": true
    }
  ]
}
[/block]


## Area Chart

While similar to line charts, this is better for analyzing part to whole relationships. 

For example, if your row is day of the week and your column is show name, the area chart will not only show you the trend variation of _Game of Thrones_ over the week, but it will also show you the contribution of _Game of Thrones_ to your total video views as compared to the rest of your titles.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/49659b9-Pivots_heat_map_area_chart.png",
        "Pivots_heat_map_area_chart.png",
        1192
      ],
      "border": true
    }
  ]
}
[/block]

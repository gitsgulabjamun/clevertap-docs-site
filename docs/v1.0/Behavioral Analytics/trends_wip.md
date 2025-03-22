---
title: "Trends_WIP"
slug: "trends_wip"
excerpt: ""
hidden: true
metadata: 
  image: []
  robots: "index"
createdAt: "Wed Oct 07 2020 02:53:18 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Oct 07 2020 02:55:10 GMT+0000 (Coordinated Universal Time)"
---
# Introduction

Trends can be used to understand exactly how users are using the platform. Using the trends' functionality, the customer can display data in a number of ways using all the powerful building blocks in CleverTap such as events, event properties, user properties, and segments.

With trends, the user can do the following:

- Plot a trend of event occurrences
- Compare the trend of multiple events to reveal and understand the underlying patterns
- Compare the trend across multiple event property values of an event
- Compare the trend of events across user properties
- Summarize the trend by event properties
- Compare trends by multiple segments

# View a Trend

To set up trend analysis, select the event that you’d like to analyze. Optionally, you can restrict your analysis further to a specific property of that event.

To view a trend, perform the following steps:

1. Go to _Analytics_ > _Trends_.
2. Select an event to analyze and view a trend. You can also filter your analysis further by the event property. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2d17bb1-Trends_search_sample.png",
        "Trends_search_sample.png",
        1183
      ],
      "border": true
    }
  ]
}
[/block]


The trend results display.

![](https://files.readme.io/f537a57-Trends_Create.png "Trends_Create.png")

## Filter by Event Property

When selecting an event for analysis, it is possible to narrow the search criteria by filtering the underlying event properties. All subsequent analysis is performed on these filtered event properties. All other event properties of the selected are not considered. 

# Advanced Filtering

Advanced filters restrict your analysis to a specific segment of users. Create a segment based on any combination of past behaviors in combination with any set of user properties. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8aa228b-Trends_Advanced_Filter.png",
        "Trends_Advanced_Filter.png",
        861
      ],
      "sizing": "100",
      "border": true
    }
  ]
}
[/block]


The trend results display. 

![](https://files.readme.io/a611360-Trends_Advanced_Filter_results.png "Trends_Advanced_Filter_results.png")

> 📘 Note
> 
> Advanced filter is a general feature available for all analytics features and most campaigns. Read more in the [Segmentation guide](doc:segments).

# Add Trends

You can view trends for multiple events. For example, you want to understand the correlation between two events, such as song played and song downloaded.

To view a trend, perform the following steps:

1. Go to _Analytics_ > _Trends_.
2. Select an event to analyze and view a trend. You can also filter your analysis further by the event property. 
3. Click **+ Event ** to add an event. 

> 📘 Note
> 
> You can add up to five (5) events for analysis.

4. Click **View Trend**. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/422d59b-Trends_search_Add_Event.png",
        "Trends_search_Add_Event.png",
        1183
      ],
      "sizing": "100",
      "border": true
    }
  ]
}
[/block]


The trends for the selected events display. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ed1a737-Trends_search_Add_Event_Result.png",
        "Trends_search_Add_Event_Result.png",
        1183
      ],
      "sizing": "100",
      "border": true
    }
  ]
}
[/block]


## Split by Event Property

You can split the analysis of your event by the underlying event properties. For example, consider the event `Content Started`. This event indicates that the user started watching content. Here you can split this event by its underlying event properties such as `Primary Genre`. Now, this will split your single `Content Started` trend line into multiple trend lines, that is, each trend line displays the event property value for each of the event property. For example, `Primary_Genre` displays trend lines for values such as _Romance_, _Drama_, _Action_, and so on. 

To split a trend by event property: 

1. Go to _Analytics_ > _Trends_.
2. Select an event to analyze and view a trend. 
3. Click the **+ Split ** by the link to filter the trend by the event properties. 
4. Click **View Trend**. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/46a0978-Trends_Split_by_Event_Property.png",
        "Trends_Split_by_Event_Property.png",
        1169
      ],
      "sizing": "smart",
      "border": true
    }
  ]
}
[/block]


The trend for each event property displays. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ecf0cc0-Trends_Split_by_Event_Property_Result1.png",
        "Trends_Split_by_Event_Property_Result1.png",
        1154
      ],
      "sizing": "100",
      "border": true
    }
  ]
}
[/block]


All the split event properties are listed at the bottom. You can do the following:

- Search through the listed event properties
- Select or clear the event properties from the trend
- Sort the event properties from highest to lowest value and vice versa. 

![](https://files.readme.io/cc1caaf-Trends_Split_by_Event_Property_Result2.png "Trends_Split_by_Event_Property_Result2.png")

> 📘 Note
> 
> You can split by a maximum of three (3) event properties per event.

## Split by User Property

You can analyze your trend by the underlying user properties. For example, consider the event `Content Started`. This event indicates that the user started watching content. Here you can split this trend by its underlying user properties such as `Customer_Type`. This splits your single `Content Started` trend line into multiple trend lines; that is, each trend line references the user property value. For example, the user property `Customer_Type` is split by user property values such as _Subscribers_, _Free Users_, and so on. 

To split a trend by user property: 

1. Go to _Analytics_ > _Trends_.
2. Select an event to analyze and view a trend. 
3. Select the user property from the _Select by user property_ list.
4. Click **View Trend**. 

![](https://files.readme.io/2848b94-Trends_Split_By_User_Property.png "Trends_Split_By_User_Property.png")

The trend for each user property displays. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4590691-Trends_Split_By_User_Property_Result1.png",
        "Trends_Split_By_User_Property_Result1.png",
        1177
      ],
      "border": true
    }
  ]
}
[/block]


All the split user properties are listed at the bottom. You can do the following:

- Search through the listed user properties
- Select or clear the user properties from the trend
- Sort the user properties from highest to lowest value and vice versa. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bce9574-Trends_Split_By_User_Property_Result2.png",
        "Trends_Split_By_User_Property_Result2.png",
        1175
      ],
      "border": true
    }
  ]
}
[/block]


> 📘 Note
> 
> You can split by a maximum of two (2) user properties.

## Compare trends across segments

You can choose to compare your event trend with different segments. For example, compare the trend for the `Content Started` event across the _New York Users_ segment and the _London Users_ segment. The differences in the segment trends could reveal a difference in your users' behavior in each segment and hence result in an insight that could be invaluable. For example, you can compare the trend of content watched by users in both cities. If the trend in either of the cities is lower, you may want to check for competing content in that city. 

To compare trends across segments: 

1. Go to _Analytics_ > _Trends_.
2. Select an event to analyze and view a trend. You can also filter your analysis further by the event property. 
3. Select the _Compare to another segment _box. 
4. Select a segment from the list or create an adhoc segment. For more information on segments, see [Intro to Segments](doc:segments).
5. Click **View Trend**. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cbe0355-Trends_compare_segment.png",
        "Trends_compare_segment.png",
        1169
      ],
      "sizing": "100",
      "border": true
    }
  ]
}
[/block]


The results display. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/dde8d24-Trends_compare_segment_result.png",
        "Trends_compare_segment_result.png",
        1169
      ],
      "sizing": "100",
      "border": true
    }
  ]
}
[/block]


> 📘 Notes
> 
> - You can compare by a saved or an ad-hoc segment.
> - You can compare a maximum of five (5) segments
> - You cannot simultaneously split the trend by user property and compare the trend by segments.

# Reading the Trend

The trend has various tabs and statistics that provide the ability to read treads. 

To read a trend, perform the following steps:

1. Go to _Analytics_ > _Trends_.
2. Select an event to analyze and view a trend. 
3. Click **View Trend**. 

The trend appears with the stats at the bottom. 

## Scale

You can select the scale from the list on the top right of a trend. The trend is scaled in two ways:

- Linear - The data is scaled with an absolute count. 
- Relative - The data is scaled with relative percentages.

## Frequency

You can change the frequency of the trend on an hourly, daily, weekly, or monthly basis:

- Hourly - The trend is plotted on an hourly basis. The subsequent table also shows data points on an hourly basis. Hourly trends are only available when the date range selected is less than 30 days.
- Daily - The trend is plotted on a daily basis. The subsequent table also shows data points on a daily basis.
- Weekly - The trend is plotted on a weekly basis. The subsequent table also shows data points on a weekly basis.
- Monthly - The trend is plotted on a monthly basis. The subsequent table also shows data points on a monthly basis.

## Event count

This tab provides the ability to trend the count of events. For example, the number of content started events that occurred in the selected period.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0407fde-Trends_Stats_Event_count.png",
        "Trends_Stats_Event_count.png",
        1177
      ],
      "border": true
    }
  ]
}
[/block]


The stats available in this tab are:

- Total events: Sum of events in the selected period.
- Daily average: Total events/no. of days in the selected period.

## Unique User

This tab provides the ability to trend the number of unique users that performed the chosen events in the selected period.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/439fc6a-Trends_Stats_Unique_user.png",
        "Trends_Stats_Unique_user.png",
        1177
      ],
      "sizing": "smart",
      "border": true
    }
  ]
}
[/block]


The stats available in this tab are:

- Total users: Number of unique users in the selected period
- Daily average: Sum of daily unique users/Number of days

> 📘 Note
> 
> If the trend analysis is split by an event or user property, then this split is ignored on this tab.

## Events per user

This tab provides the ability to trend the number of events per user in the time period. 

![](https://files.readme.io/f67292c-Trends_Stats_Event_per_user.png "Trends_Stats_Event_per_user.png")

The stats available in this tab are:

- Events per user: Sum of total events/number of unique users in the period
- Daily average: Sum of daily events per user/number of days in the period

> 📘 Note
> 
> If the trend analysis is split by an event or user property, then this split is ignored on this tab.

## Active %

This tab provides the ability to trend the count of the users that have performed the selected event as a proportion of the active users. 

For example, there are  100 users who launched your app. These are your active users; however, you wish to find out the percentage of active users that actually made a purchase. Assume that a total of 40 users made a purchase; hence, 40% of your active users made an actual purchase.

### Set the Qualifying Event

Go to _Settings_ > _Schema_ > _Qualifying Event_ 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bbda530-Trends_Settings_Qualifying_Event.png",
        "Trends_Settings_Qualifying_Event.png",
        1061
      ],
      "sizing": "smart",
      "border": true
    }
  ]
}
[/block]


### View Trend and Stats

 [View](https://docs.clevertap.com/docs/trends_updated#section-view-a-trend) the trend result from the Trends page.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/191bca4-Trends_Stats_Active_percent_result.png",
        "Trends_Stats_Active_percent_result.png",
        1184
      ],
      "sizing": "100",
      "border": true
    }
  ]
}
[/block]


The stats available in this tab are:

Summary stats: 

- Active %: Unique users who performed the chosen event/total unique active users in the whole period
- Daily avg: Unique users/total unique active users calculated per day and averaged over the period.

## Properties

You can summarize the trend by an event property. This is available in the “Property” tab. For example, consider the trend for the event ‘Content Started’. It has a property called "duration" that stores the duration of the content watched. You can view the trend by "Sum of property value" or "Average of property value."

### Sum of property value

This trend displays the sum of the value of the property. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e0a6ab5-Trends_Stats_Properties_Summarize.png",
        "Trends_Stats_Properties_Summarize.png",
        1165
      ],
      "border": true
    }
  ]
}
[/block]


The stats available in this tab are:

Summary stats: 

- Total: Sum of property in the period
- Avg per user: Sum of property/number. of unique users in the period
- Daily avg: Sum of property/number of days in the period.

### Average of property value

This trend displays the average of the value of the property. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/04de555-Trends_Stats_Properties_Average.png",
        "Trends_Stats_Properties_Average.png",
        1161
      ],
      "border": true
    }
  ]
}
[/block]


The stats available in this tab are:

Summary stats: 

- Avg per user: Sum of property/number of unique users in the period
- Daily avg: Sum of property/number of events calculated per day and averaged over the period

# Custom Formula

> 🚧 Note
> 
> This feature is currently available in closed beta. In the meanwhile, you can check this feature in our demo account.

Custom formulas provide the ability to track metrics that are unique to your business. You can create these custom formulas using our event or property level functions. For example, you want to find out the popularity of a movie genre, such as "Action."  You can analyze the trend for this genre using a ratio of the watched time for action movies (A) to the watched time for all movies (B). The ratio A/B gives you the popularity of action movies compared to all movies and its trend.

You can also use formulas to track metrics that are a part of other tabs on the trends graph simultaneously. For example, you can view event count and unique users simultaneously on the same graph.

## Create Formula

1. From the CleverTap dashboard, go to _Analytics_ > _Trends_.
2. Select the event to analyze and view a trend. For example, select watched time for action movies (people watched 10 hours).
3. Select another event that denotes watched time for all movies (people watched 10 hours).

![](https://files.readme.io/a50d78e-Trends_Formula_Select_Events.png "Trends_Formula_Select_Events.png")

4. Click **View Trend**. The trend appears. 
5. Click the **Formula** tab.
6. Enter the formula. In our example, the property sum of Event A / Event B.
7. Click **Apply** to view the results. The results display the popularity of action movies over the selected time period.

![](https://files.readme.io/a9e22fa-Trends_Formula_Select_Events_Create_formula.png "Trends_Formula_Select_Events_Create_formula.png")

> 📘 Note
> 
> You can compare up to four (4) formulas together on the same chart by adding a “;” between the formulas.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/aba21bc-Trends_Formula_Factors_result.png",
        "Trends_Formula_Factors_result.png",
        1157
      ],
      "border": true
    }
  ]
}
[/block]


You can use the following functions to create your formulas:

## Event level functions

Use any of the following functions for your analysis.

- TOTALS - Count of selected event performed
- UNIQUES - Unique number of users who performed the selected event
- AVERAGE - Average number of events performed per unique users. This can also be created using: TOTALS/UNIQUES.
- ACTIVE - Proportion of users who did the selected event/ users who did the active event. To set the qualifying event, see [Set the qualifying event](https://docs.clevertap.com/docs/trends#section-set-the-qualifying-event)

> 🚧 Note
> 
> A function must always be upper case, that is, TOTALS not ToTals.

## Property level functions

Use any of the following functions for your analysis. 

- PROPSUM - Total value of the selected event property for all the events performed.
- PROPAVG -  Average value of the selected event property per occurrence of the event. This can also be created using PROPSUM/TOTALS.

> 🚧 Note
> 
> A function must always have upper case, that is, PROPSUM and not PropSum.  An event must be summarized by event property for a property level function.

## Operators

You can use the following operators to combine the functions into custom formulas that are relevant to your business.

- ()
- /
- X
- -
- -

## Formula comparison

You can compare up to four (4) formulas together on the same chart by adding a “**;**” between the formulas. For example, you want to see the Trend for Number of content consumed and the unique users who consumed the content. You can compare the formulas, such as TOTALS and UNIQUES for the same event, that is, 'Content Started'. 

Select and analyze events.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/800f264-Trends_Formula_Select_Events_parallel_formula.png",
        "Trends_Formula_Select_Events_parallel_formula.png",
        1163
      ],
      "sizing": "100",
      "border": true
    }
  ]
}
[/block]


Add up to four (4) formulas separated by a semicolon ";".

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4dbc15f-Trends_Formula_Select_Events_Create_formula_parallel.png",
        "Trends_Formula_Select_Events_Create_formula_parallel.png",
        1163
      ],
      "sizing": "100",
      "border": true
    }
  ]
}
[/block]

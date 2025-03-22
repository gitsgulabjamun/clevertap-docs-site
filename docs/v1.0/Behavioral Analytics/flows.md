---
title: "Flows"
slug: "flows"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Fri Jan 19 2018 21:15:45 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri Mar 05 2021 23:44:10 GMT+0000 (Coordinated Universal Time)"
---
# Overview

Flows provide the capability to understand the ways a user navigates through an app giving a broad view of the common paths users take as well as where they get stuck. 

Flows offer two types of analysis:

- Event flows: What users did before or after performing an event.
- Content flows: What users did before or after consuming a specific content, product, or page.

Flows let you isolate almost any user journey beginning, ending, or including specific events completed within a defined conversion timeframe, as well as filter flows by any specific segment of users.

> 📘 Only Available for Enterprise Accounts
> 
> Flows is only available for enterprise accounts as part of CleverTap's Discovery Platform.

# Event Flow Setup

To get started with events flows:

1. Navigate to the _Analytics_ tab in the CleverTap dashboard.
2. Select _Flows_ > _Event Flows_. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/35e5bbe-Flows.png",
        "Flows.png",
        1134
      ],
      "border": true
    }
  ]
}
[/block]


## Analyze Users Actions Before or After an Event

The most common type of analysis is to look at all the different paths users take after they launch your application; however, you can select any event as the starting point of a user flow. 

> 👍 Marketing Effectiveness Analysis Example
> 
> If you want insight into what your users do in your app after receiving one of your marketing push campaigns, you can select the CleverTap system event _Notification Clicked_ which gets recorded each time a user clicks on a campaign. From there, you can see all the events a user performs after clicking on a push notification giving you direct insights as to the effectiveness of your marketing activities.

> 👍 Uninstalls Analysis Example
> 
> You can analyze the types of events users perform before they uninstall your app giving you insights such as spam campaigns or a specific page view that leads to uninstall.

## Building the Event Flow

### Pick Start of Flow

When picking the start of a flow, you can:

- Select up to three events as the start of the flow. 
- Analyze what users did after or before the events you picked.

### Pick Events to Analyze

 When picking events to analyze, you can:

- Select up to 16 events to be a part of the flow.
- Select all events you want to analyze as a part of the flow you are building.
- Choose to split an event by its property.
- For an event split by property, view up to 50 properties of the event in the flow.

> 👍 Conversion Flow Analysis Example
> 
> If you are analyzing a conversion flow where the product viewed is split by property category, you can analyze which category of product your users are viewing before converting vs. which category your users view after dropping off.

### Optional End of Flow

With the optional end of the flow, you can:

- Select up to three events to end the flow with.
- End the flow when the event (or events) occurs.

### Look Ahead Window

With the look ahead window, some things to consider include:

- You can select the time window you want your flows analyzed.
- The analysis will contain only users who completed the set of events within that window.
- Shorter conversion times reduce the number of users who will be included in the output.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/31f93e4-Analytics_Flows_selection.png",
        "Analytics_Flows_selection.png",
        1151
      ],
      "sizing": "smart",
      "border": true
    }
  ]
}
[/block]


## Reading Flow Chart

The output of the flow analysis takes the form of a sunburst chart.

Each concentric circle in the chart represents successive steps in the user’s journey. At the center of the chart is the total number of users included in the analysis, such as the example below that shows 1.2 million users. 

Each outward ray in the sunburst represents a different flow that users took. Hovering over the concentric circles highlights and isolates a different ray or path through the app as well as tells you how many users this flow represents. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5a29653-Analytics_Flows_Main.png",
        "Analytics_Flows_Main.png",
        1152
      ],
      "border": true
    }
  ]
}
[/block]


### Filters

The filters include:

- _Interaction depth_ defines the complexity of flows by picking the number of steps up to a maximum of 20 steps.
- _Collapse repeated events_ simplifies the visualization of flows by collapsing any event that happens multiple times in succession into a single element of the chart. For example, if a user were to perform the same event in rapid succession with no other activity in between (_App Launch_ > _App Launch_ > _App Launch_) rather than rendering this as three successive _App Launch_ events, this option collapses these (visually) into a single instance.
- _Filter event_ removes events that you do not want to analyze in the flow. You can add them back by using the same filter.
- _Hover on step_ provides you the ability to see the percentage of users progressing from one step to the next and the total elapsed time it takes which is displayed in a table next to the chart.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/92bd038-Analytics_Flows_Filter.png",
        "Analytics_Flows_Filter.png",
        1179
      ],
      "border": true
    }
  ]
}
[/block]


# Set Up a Content Flow

To get started with content flows:

1. Navigate to the _Analytics_ tab in the CleverTap dashboard.
2. Select _Flows_ > _Content Flows_. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/dd7ec8d-Flows.png",
        "Flows.png",
        1134
      ],
      "border": true
    }
  ]
}
[/block]


## Analyze Users Actions Before or After Consuming a Content, Product, or Page

The most common type of _after_ analysis is to look at all the different videos the users watch after they watch a specific video.

The most common type of _before_ analysis is to look at all the different products the users add to their cart before they add a specific product to their cart.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9917a73-Analytics_Flows_Content_Create.png",
        "Analytics_Flows_Content_Create.png",
        1183
      ],
      "border": true
    }
  ]
}
[/block]


## Content Flow Setup

### Pick Start of Flow

When picking the start of a flow, you can:

- Select the event and the property value you want to start the flow with. 
- Analyze what users did after or before the event property value you picked.

> 👍 Examples
> 
> Some examples include: Event _Video Watched_, Property _video name_, or Value _Star Trek episode 1_.

### Optional End of Flow

With the optional end of the flow, you can:

- Select the property value you want to end the flow with.
- End the flow when the said value occurs in the flow.

> 👍 Example
> 
> An example is to end the flow on the first occurrence of _Doctor Who episode 10_.

### Look Ahead Window

With the look ahead window, some things to consider include:

- You can pick the time window you want your flows analyzed.
- The analysis only contains users who completed the set of property values within that window.
- Shorter conversion times reduce the number of users who will be included in the output.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/19496c9-Screenshot_2018-12-26_at_11.32.47_PM.png",
        "Screenshot 2018-12-26 at 11.32.47 PM.png",
        887
      ],
      "border": true
    }
  ]
}
[/block]


> 📘 Reading Before Flows
> 
> When analyzing what a user did before an event (i.e., show me the event that happened before _App Uninstall_), the flow chart is inverted. In this case, the innermost concentric circle is the last step in the user journey.
> 
> This inverted visualization better highlights the steps that happened immediately before the last event (_App Uninstall_ in this example). By looking at the inner concentric circles, you can understand the events that are in closest proximity to the ending event.

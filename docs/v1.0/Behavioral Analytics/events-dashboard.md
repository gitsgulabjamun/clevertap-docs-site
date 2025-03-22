---
title: "Events Dashboard"
slug: "events-dashboard"
excerpt: ""
hidden: true
metadata: 
  image: []
  robots: "index"
createdAt: "Fri Jun 01 2018 00:57:58 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri Jun 01 2018 01:02:49 GMT+0000 (Coordinated Universal Time)"
---
# Overview

Flows let you understand all the ways a user navigates through your app. This gives you a broad view of the common paths users take as well as where they get stuck. 

Flows provides you with three convenient modes of analysis to determine:

- What users did AFTER a starting event (such as Launching the App)?
- What users did BEFORE an ending event (such as App Uninstall)?
- How users perform a specific (selected) set of events?

With a series of advanced options, you're able to isolate virtually any user journey beginning, ending, or including specific events completed within a defined conversion timeframe or filtered by a behavioral segment of users. 

# Set Up a Flow

To use Events dashboard, go to the Analyze tab in the CleverTap Dashboard, and then select Events.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cb41835-events-1.png",
        "events-1.png",
        1255
      ],
      "border": true
    }
  ]
}
[/block]


Select the Type of Flows you’d like to analyze, which could be the paths a user follows after a selected event, before a selected event, or the paths that include a select set of events.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f215589-image3.png",
        "image3.png",
        1999
      ],
      "border": true
    }
  ]
}
[/block]


### Analyze Users Actions Before or After an Event

The most common type of analysis is to look at all the different paths users take after they launch your application. However, you can select any event as the starting point of a user Flow. 

For example, if you wanted insight into what your users did in your app after receiving one of your marketing push campaigns, you can select the CleverTap System Event, “Notification Clicked,” which gets recorded each time a users clicks on a campaign. From there, you’ll see all the events a user performed after clicking on a push notification giving you direct insights as the effectiveness of your marketing activities.

Alternatively, you can analyze what users do that lead up to a specific event by selecting the before an event option. Common examples include looking at the paths users follow up until they performed your conversion event (such as a purchase in a commerce app) or up until they uninstalled your app.

> 📘 The Flow analysis by default includes the top 6 events by their frequency of occurrence in your app as well as the event you selected, for a total of 7 events. 
> 
> We constrain the default analysis to the top recorded events to ensure you don’t get distracted by infrequently occurring events that complicate the visualization.

### Advanced Options

Using the Advanced Option you can customize the analysis to:

- Show Flows only up until a selected event. For example, you can show all the different paths users take in your app starting from App Launched up through the first time they perform the Added To Cart event.
- Show Flows that include only a specified list of events. Whereas the default analysis includes the top 6 events by frequency of occurrence and the event you selected, with this option you can constrain the analysis to only include the list of events you specify. This option is ideal for focusing down on a narrow part of your app experience.

Setting the Flow Conversion Time, let’s you configure the total elapsed time a user must complete a Flow in to be included in the output. For example, in the default setting, App Launch is the first event to initiate a user’s journey followed by the top 6 events that users perform most frequently. If a user performs any of these events within the 5 day window they are counted as part of the Flows output. Shorter conversion times reduces the number of users who will be included in the output and longer conversion times increases this number.

Collapse Repeated Steps simplifies the visualization of Flows by collapsing any event that happens multiple times in succession into a single element of the chart. For example, if a user were to perform the same event in rapid succession with no other activity in between (App Launch → App Launch → App Launch) rather than rendering this as 3 successive App Launch events, this option collapses these (visually) into a single instance.

### Analyze Only Selected Events

The other major type of Flows is where you specify only the events you want included in the analysis. For this type of Flow there are no constraints as to whether a user began or ended their journey with a certain event (such as App Launched or App Uninstalled). Rather, for this type of analysis you can specify any desired events and the output will show you all the users who performed any of these events in any order.

# Reading Flow Charts

The output of the flow analysis takes the form of a “sunburst” chart.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ac9c85d-image2.png",
        "image2.png",
        1928
      ],
      "border": true
    }
  ]
}
[/block]


**For the Flows that analyze what users did AFTER an event**  
Each concentric circle in the chart represents successive steps in the user’s journey. At the center for the chart is the total number of users included in the analysis (in the above example 1.2 million users). 

Each outward “ray” in the sunburst represents a different Flow that users took. Hovering over the concentric circles will highlight and isolate a different “ray” or path through the app as well as tell you how many users this Flow represents. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1beab10-flows2.png",
        "flows2.png",
        1236
      ],
      "border": true
    }
  ]
}
[/block]


The percentage of users progressing from one step to the next as well as the total elapsed time it takes is conveniently displayed in a table next to the chart.

Color coding delineates the different events users perform. In the first concentric circle, the blue sector represents all the user who started their journey with the App Launched event. The yellow sector represents those users who started their journey with the “Notification Clicked” event - representing that they received a push notification, clicked on it, and then progressed through a series of paths in the app.

Levels can be set with the slider below the chart. We default to a depth of 5 events, which means that all the Flows that are shown in the chart stop after users have performed 5 successive events (5 concentric circles of the chart). Increasing the number of levels will show more paths users take with a finer level of granularity.

**Note:** If you constrain a Flow using the Advanced Option to End at the first occurrence of a specified event - then you’ll typically expect that the outermost concentric circle in your Flow Chart should be that event. For example, if you choose to end the Flow at the first instance of the “Charged” event, then by definition all Flows will end with this event as represented in the outermost concentric circle of the chart. 

Oftentimes, the outermost concentric circle will include events other than the one you specified. This occurs because users may be ending their Flow on the event you specified but only after performing more events than will be displayed based on the Levels you have selected. Simply increase the number of levels for the chart until you see most or all of the Flows terminating with the specified event.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ab28f10-flows4.png",
        "flows4.png",
        1231
      ],
      "border": true
    }
  ]
}
[/block]


**For the Flows that analyze what users did BEFORE an event**  
When analyzing what a user did before an event (i.e. show me the event that happened before App Uninstall) the Flow Chart is inverted. Whereas in the previous case, the innermost concentric circle represents the first step in the user journey in this case the innermost concentric circle is the last step in the user journey.

This inverted visualization better highlights the steps that happened immediately immediately before the last event (App Uninstall in this example). Just look at the inner concentric circles to understand the events that are in closest proximity to the ending event.

# Notes

Currently in Flows, we sample your data to ensure that results load faster, so you might see a minor difference in counts when you compare these numbers to numbers in the rest of your dashboard. 

This sampling has been optimized for accuracy and your numbers will be directionally correct. Sampling kicks in if the query contains more than 100,000 events, and the sample size is 10%

> 👍 Flows are expected to move out of a beta stage and move to production shortly. Once in production, this feature will be available only for enterprise accounts. For any feedback and/or questions you can contact [support@clevertap.com](mailto:support@clevertap.com).

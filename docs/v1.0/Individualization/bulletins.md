---
title: "Bulletins"
slug: "bulletins"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Fri May 08 2020 15:31:05 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Mar 04 2021 20:05:32 GMT+0000 (Coordinated Universal Time)"
---
## Overview

Bulletins are a category of engagement campaigns that are not broadly capitalized in the mobile engagement space. Instead of an organization creating hundreds of campaigns a day for various SKUs, the process is automated in the CleverTap platform. Users can set up campaigns and dispatch bulletins for a business event with any number of properties. 

Bulletins provide the ability to send automated, scalable campaigns based on events that happen on the business side to users who are likely to be interested. When a user performs an event or does not perform an event in a certain amount of time, a message can be sent prompting action.

## User Scenarios

The following are examples of bulletin use cases:

### Example #1

A movie streaming app has a new notification for users who watch a particular movie genre on a regular basis. As an app subscriber, the customer receives a push notification regarding the new season that was just released. The business event _episode_release_ is sent to the CleverTap system via an API. A published bulletin for the business event is dispatched when the business event occurs.

### Example #2

A company creates 200 daily campaigns for their television shows. Each campaign is slightly different, and the customer does not want to come to the dashboard to spend around five minutes for every similar campaign they create. By using bulletins, they can automate the process to communicate with the interest groups with a personalized message.

### Example #3

A music streaming app sends a new notification for users as soon as a new album for an artist is released. As an app subscriber, the customer receives a push notification regarding the new album that was just released if the customer has heard, downloaded, or favorited 10 or more songs from the artist recently. The business event _album_release_ is sent to the CleverTap system via an API. A published bulletin for the business event is dispatched when the business event occurs.

## Create Business Events

Before a bulletin can be published, define a business event which is the event performed by the business (e.g., episode releases, book launch, or weekly sales). The following instructions illustrate a business event named _episode_release_ which represents a new episode being released. 

1. Select the _Bulletins_ option on the left navigation menu.
2. Click **+ Business Event**. 

![](https://files.readme.io/ba9c478-2020-05-11_08-47-08_Define_business_event.png "2020-05-11_08-47-08_Define business event.png")

3. Enter the following information:

- Business event name: This is the event performed by your business (e.g., episode releases, weekly sales).
- Business event properties: These are the other identifiers related to a business event (e.g., movie title, genre, series, language).
- Goal (optional): This is the desired outcome of the Bulletin (e.g., app launched, movie watched, series watched).
- Value of user event property: This is the value of the user event property that should match the business event property (i.e., as a user I watched Show A and Show A is the business event property of the show being released).

![](https://files.readme.io/125bf9c-2020-05-11_08-57-53_Define_event_2.png "2020-05-11_08-57-53_Define event_2.png")

4. Click **Save & Continue**. If you need to edit, click the **Edit** button to return to the previous screen.

![](https://files.readme.io/6b6bb78-2020-05-11_09-09-10_Define_event_3.png "2020-05-11_09-09-10_Define event_3.png")

## Create a Bulletin

Once a business event is defined, click the **Create Bulletin** button and define an interest segment.

![](https://files.readme.io/e696d12-1_and_4_Select_an_event_property.png "1 and 4 Select an event property.png")

1. Select a segment from the dropdown menu options (e.g., All Users or Engaged Users).
2. Select one of the event properties defined earlier. (Refer to _Create Business Events_ above.)
3. Select _User Event_ from the dropdown menu.
4. Select an event property from the dropdown menu. The value of the property needs to match the business event property.

> 🚧 String Data Type
> 
> CleverTap only supports the string data type for mapped property values.

![](https://files.readme.io/9a6bb90-1_and_4_Select_an_event_property.png "1 and 4 Select an event property.png")

5. Under the _Where_ section, select _Count_, the type of count, and enter a quantity. Also, choose the value of property to match with a business event property.

![](https://files.readme.io/d1d38a4-Bulletins_new_count.png "Bulletins new count.png")

6. Click **+ User Events** or  **+ User Properties** to add additional events or properties.
7. Click **+ Filter by** to add additional properties to the event property.

![](https://files.readme.io/6965e30-7_Filter_by_to_add_additional_properties.png "7 Filter by to add additional properties.png")

8. Click **Continue**.
9. Select a channel for the bulletin and follow the onscreen instructions for the chosen method. 

![](https://files.readme.io/6741cc4-2020-05-27_17-17-15_Select_channel.png "2020-05-27_17-17-15_Select channel.png")

The following is a sample notification:

![](https://files.readme.io/cf7899e-2020-05-11_10-57-09_Notification_example.png "2020-05-11_10-57-09_Notification example.png")

10. Apply a custom/campaign control group.
11. Specify the push notification time to live.

![](https://files.readme.io/2cee477-2020-05-11_11-37-48_control_groups.png "2020-05-11_11-37-48_control groups.png")

12. Click **Continue** to view the bulletin overview.

![](https://files.readme.io/3fedc9c-2020-05-11_11-52-53_Bulletin_overview.png "2020-05-11_11-52-53_Bulletin overview.png")

13. Select _Publish_ and name the bulletin.

![](https://files.readme.io/6896ae5-2020-05-11_11-56-55_Naming_bulletin.png "2020-05-11_11-56-55_Naming bulletin.png")

14. Click **Publish**.

![](https://files.readme.io/60b84f2-2020-05-11_11-59-47_Done.png "2020-05-11_11-59-47_Done.png")

15. Click **Ok, Got It** to finish the bulletin setup.

![](https://files.readme.io/df160a7-2020-05-11_12-05-43_Done_2.png "2020-05-11_12-05-43_Done 2.png")

## Raise Business Event API

To raise a business event, trigger the event's API as shown below by using the following link:  
<https://location.api.clevertap.com/1/targets/trigger.json>

> 📘 URLs for Your Specific Location
> 
> Use the URL based on your location:
> 
> - India: in1.api.clevertap.com
> - Singapore: sg1.api.clevertap.com
> - U.S.: us1.api.clevertap.com

```text
{
    "business_event" : "Program Released",
    "name" : "Sa Re Ga Ma episode 12",
    "properties" : {
        "program_id" : "234567",
        "language":"Hindi",
        "prev_program_id":"123457"
    },
    "c-by" : "jdoe@clevertap.com"
}
```

For more information, refer to [Bulletins API](https://developer.clevertap.com/docs/bulletins-api). 

## Monitor Bulletin Performance

CleverTap provides comprehensive monitoring for the performance of bulletins. The _Percentage of Users Converted_ graph displays the percentage of qualified users who were sent a bulletin. It also displays the users who viewed or clicked the bulletin. The graph shows the total number of technical and non-technical delivery errors.

![](https://files.readme.io/c8c4884-2020-05-18_16-23-53_stats.png "2020-05-18_16-23-53_stats.png")

The technical errors can be analyzed further via the following table:

![](https://files.readme.io/48298b6-2020-05-18_16-24-49_stats1.png "2020-05-18_16-24-49_stats1.png")

This table displays a business activity log, the dispatched bulletins, the event time of the bulletins, the total number of bulletins sent, and the person who created the bulletin.

![](https://files.readme.io/0cbd4b7-2020-05-18_16-25-46_stats2.png "2020-05-18_16-25-46_stats2.png")

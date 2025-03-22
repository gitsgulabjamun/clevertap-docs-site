---
title: "Events_callback_WIP"
slug: "events_callback_wip"
excerpt: ""
hidden: true
metadata: 
  image: []
  robots: "index"
createdAt: "Wed Jan 06 2021 12:59:36 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Jan 12 2021 11:01:09 GMT+0000 (Coordinated Universal Time)"
---
# Overview

Events track what individual actions users perform in your app or website. Some examples of events include a user launching an app, viewing a product, listening to a song, sharing a photo, making a purchase, or favoriting an item.

By tracking events in your app, you can better understand what users are doing. In CleverTap, you can analyze these events in many different ways, such as getting aggregating metrics of a specific event or measuring how a specific event type trends over time. You can also engage with your users based on these events by creating campaigns in CleverTap that are triggered by them. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/40b874a-events1.png",
        "events1.png",
        898
      ],
      "border": true
    }
  ]
}
[/block]


**Event Categories**

There are two categories of events in CleverTap: _System Events_ and _Custom Events_. 

_System Events_ are events recorded automatically after you integrate our SDK. _Custom Events_ are events you define and track with our SDK or API.

**Event Properties**

Events have details that describe the action taking place called properties. 

For example, while recording the _Product viewed_ event, you could also store event properties such as product name, category, and price. Recording event properties will help you discover insights, such as which category of products are more popular and help you segment users based on which categories or price points they have viewed.

# System Events

_System Events_ are events recorded automatically after you integrate our SDK. 

[block:parameters]
{
  "data": {
    "h-0": "Event Type",
    "h-1": "Description",
    "h-2": "How Event is Tracked",
    "0-0": "App Installed",
    "0-1": "This event is recorded when a user installs your application.",
    "0-2": "The event is raised when the user launches the app for the first time.  \n  \nThere are three cases when this event will be recorded multiple times for a single user. The first case is when a user installs your app, uninstalls it, and then reinstalls it. The second case is when a user clears your app's memory. The third case is when a user installs your app on multiple devices.",
    "1-0": "App Launched",
    "1-1": "This event is recorded every time a user launches your application.",
    "1-2": "There are two cases when this event will recorded. The first case is a fresh app launch, which is when an app is launched from a killed state. The second case is when an app is brought to the foreground after 20 minutes of inactivity in the background.",
    "2-0": "App Uninstalled",
    "2-1": "This event is recorded when a user uninstalls your application.",
    "2-2": "This event is tracked by sending silent push notifications, which is a type of notifications that is not rendered on a user’s device. We send silent push notifications to your entire install base once every 24 hours to track uninstalls. For more information, refer to [App Uninstall](https://clevertap.com/blog/track-app-uninstalls-effectively/).",
    "3-0": "UTM Visited",
    "3-1": "This event is tracked when a user clicks on a link from a marketing campaign that has a UTM parameter defined on it. This event is also tracked when a CleverTap-integrated attribution platform, such as Branch or Apsalar, sends this information to CleverTap.",
    "3-2": "The _UTM Visited_ event is recorded for your marketing campaigns from external sources, such as Google Adwords or AdRoll.",
    "4-0": "Notification Sent",
    "4-1": "This event is tracked when a campaign message is sent to a user. This event is always recorded, even if the user does not open or click on the message. This event is recorded for email, mobile push, SMS, web push, and Facebook Audience campaigns. The _Notification Sent_ event is available on the _Event_ dashboard but it is not displayed on the _User Profile_.",
    "4-2": "The event is tracked when the notification is successfully sent from CleverTap to the communication channel you select for your campaign.",
    "5-0": "Notification Viewed",
    "5-1": "This event is tracked when a user views an email, in-app notification, or a web notification sent from CleverTap.",
    "5-2": "The CleverTap SDK recognizes when a notification sent via CleverTap is viewed by a user.  \n  \n_Notification Viewed_ is available for Email, Web Push, InApp, Web Popup, and App Inbox.",
    "6-0": "Notification Clicked",
    "6-1": "This event is tracked only when a user clicks on a campaign sent via CleverTap. You can track or create a _Notification Clicked_ event for every _UTM Visited_ event that is tracked by CleverTap and not any other provider. There is no separate event storage required for the _Notification Clicked_ event because it is derived from the _UTM Visited_ event.",
    "6-2": "Recorded when a user clicks on a mobile push, in-app, email, web-popup, or web push message sent via the CleverTap dashboard or through the campaign API.  \n  \nThe Android push notifications containing deep links to third-party apps are not tracked.",
    "7-0": "Push Impressions",
    "7-1": "This event is tracked when a push notification sent from CleverTap is delivered on a user’s device. The funnels on the _Push_ campaign statistics page reflects the count for this event.",
    "7-2": "After the toggle for _Push Impressions_ is turned on/setup from settings, the CleverTap SDK starts recording an event whenever a push notification sent via CleverTap is delivered to the user’s device.",
    "8-0": "App Version Changed",
    "8-1": "This event is raised when a user’s current app version is different from the user’s previous app version.",
    "8-2": "This event is tracked when the _CT App version_ system property differs from one _App Launched_ event to another.",
    "9-0": "Notification Replied",
    "9-1": "This event is recorded when a user replies to a WhatsApp message.",
    "9-2": "This event is raised when the brand receives a reply from the user.",
    "10-0": "Reply Sent",
    "10-1": "This event is recorded when an agent (CleverTap user) replies to a message from the end user.",
    "10-2": "This event is raised against the user profile of the end user.",
    "11-0": "State Transitioned",
    "11-1": "This event is recorded for lifecycle optimizer when a user transitions from one stage to another.",
    "11-2": "This event is raised whenever a user transitions from one state to another or from unmapped to one of the states in the lifecycle optimization framework. It is meant for internal usage at CleverTap and therefore, unavailable for querying.",
    "12-0": "Session Concluded",
    "12-1": "This event is recorded to mark the end of a session. Session tracking must be enabled for the event to be tracked.",
    "12-2": "This event is raised when there is 20 minutes of inactivity after an event is raised for a user.",
    "13-0": "Geocluster Entered",
    "13-1": "This event is recorded to mark when a device enters a geofence.  \nThe event will only be applicable for customers who have the geofence feature enabled for them.",
    "13-2": "Properties:  \n1. Cluster id  \n2. Cluster name  \n3. Geofence id",
    "14-0": "Geocluster Exited",
    "14-1": "This event is recorded to mark when a device exits a geofence.  \nThe event will only be applicable for customers who have the geofence feature enabled for them.",
    "14-2": "Properties:  \n1. Cluster id  \n2. Cluster name  \n3. Geofence id",
    "15-0": "Channel Unsubscribed",
    "15-1": "This event is raised when an email is not acknowledged.",
    "15-2": "Properties:  \n1. Campaign Id - This is the ID of  \n the campaign from which user are updating subscriptions.  \nCampaign Type - Currently only Email.  \n2. Group - Group name from which the user unsubscribed/resubscribed.  \n3. Identity - The user Identity/Email address.  \n4. Variant  \n5. Type - Valid values are bounced, dropped, and spam. Email IDs which bounce, drop or marked as spam are opted out from future emails  \n6. Subscription Type - Account Level and Profile Level. Profile Level signifies that the user  who qualified for the communication is opted out. Account Level signifies that all users with the email address are opted out from future communications.  \n7. reason - Reason which was given by the email provider for the type of the error. For example : \"smtp;550 5.1.1 The email account that you tried to reach does not exist. Please try double-checking the recipient's email address for typos or unnecessary spaces.\""
  },
  "cols": 3,
  "rows": 16,
  "align": [
    "left",
    "left",
    "left"
  ]
}
[/block]


# Debug Events

- _Debug Events_ are events recorded automatically after you integrate our SDK. These events are raised at certain lifecycle stages in your integration and helps you track and manage your integration. These events are available on any profile page and _Find People_ page by adding a parameter to the end of the URL `?showDebugEvents=true`.  

[block:parameters]
{
  "data": {
    "h-0": "Event Name",
    "h-1": "Description",
    "h-2": "When is it raised",
    "0-0": "Identity Set",
    "0-1": "This _Debug_ event is raised when a new user is identified on a customer’s app or an identified user pushes another identity.",
    "0-2": "This event monitors the status and data points that are important for the identification and engagement of users. This event is for monitoring and debugging only.",
    "1-0": "Identity Reset",
    "1-1": "This _Debug_ event is raised when a profile is demerged (after demerged, a new profile for every device is created and identities are dropped) either from dashboard (click on the _Profile_ page to reset identities) or through the _Demerge Profile API_.",
    "1-2": "It monitors the reset of identities and handles unnecessary merges. This event is used for monitoring and debugging only.",
    "2-0": "Identity Error",
    "2-1": "This _Debug_ event is raised when an existing identity is associated incorrectly with another identity. The former identity is now declared as invalid for the latter's profile.",
    "2-2": "This event is for monitoring and debugging when identity merges are invalid.",
    "3-0": "Reachable By",
    "3-1": "This _Debug_ event is raised when a user becomes reachable by a communication channel, such as SMS, Email, Mobile Push, or when there are changes to the existing communication channel.",
    "3-2": "Tracked for a profile when:  \n- Push token is added/changed.  \n- Email ID is added/changed  \n- Phone number is added/changed."
  },
  "cols": 3,
  "rows": 4,
  "align": [
    "left",
    "left",
    "left"
  ]
}
[/block]


# Custom Events

_Custom Events _are events you define and track with our SDK or API. For more information, refer to the [developer documentation](https://developer.clevertap.com/v1.0/docs/concepts-events).

# Event Metadata Recorded Automatically

For every event that is recorded, CleverTap records the following standard metadata:

- Information about the user who performed the event.
- Date and time when the event was recorded.
- The number of screens viewed by the user before performing the action.
- The referring site and the source of the user visit if it was from an external source.

Additionally, CleverTap keeps the user profiles updated with the latest:

- Geographic information like their city, region, country, and latitude/longitude (if available).
- Browser, device make, or model used to access the website or app.

# System Properties

CleverTap tracks the following system properties automatically from the mobile SDK. All the system properties are prefixed by _CT_, indicating that they are provided by CleverTap. 

The following properties are tracked automatically on all events:

[block:parameters]
{
  "data": {
    "h-0": "System Property",
    "h-1": "Description",
    "0-0": "CT App version",
    "0-1": "This is the current version of your application installed on the user device.",
    "1-0": "CT Latitude",
    "1-1": "The user location identified by the latitude.",
    "2-0": "CT Longitude",
    "2-1": "The user location identified by the longitude.",
    "3-0": "CT Source",
    "3-1": "The source of the event.  \nFor example, the event may originate from a Mobile SDK or an API.  \n  \nAll possible values:  \n  _ Mobile (Mobile SDK)  \n  _ MobileWeb (Web SDK)  \n  _ Web (Web SDK)  \n  _ API  \n  _ segment  \n  _ appsflyer  \n  _ apsalar  \n  _ branch  \n  _ tune  \n  _ System (for events generated by CleverTap)"
  },
  "cols": 2,
  "rows": 4,
  "align": [
    "left",
    "left"
  ]
}
[/block]


The following properties are available on the _App Launched_ event:

[block:parameters]
{
  "data": {
    "h-0": "System Property",
    "h-1": "Description",
    "0-0": "CT App version",
    "0-1": "This is the current version of your application installed on the user device.",
    "1-0": "CT Latitude",
    "1-1": "The user location identified by the latitude.",
    "2-0": "CT Longitude",
    "2-1": "The user location identified by the longitude.",
    "3-0": "CT OS Version",
    "3-1": "The operating system of the device.  \nFor example,  1.0.0.",
    "4-0": "CT SDK Version",
    "4-1": "The CleverTap SDK version. For example, 30501.",
    "5-0": "CT Network Carrier",
    "5-1": "The network carrier of the device.  \nFor example, AT&T, Vodafone.",
    "6-0": "CT Network Type",
    "6-1": "The network type of the device.  \nFor example, 4g.",
    "7-0": "CT Connected To WiFi",
    "7-1": "Indicates if the device is connected to the Wi-FI.",
    "8-0": "CT Bluetooth Version",
    "8-1": "The Bluetooth version of the device.",
    "9-0": "CT Bluetooth Enabled",
    "9-1": "Indicates if  Bluetooth is enabled on the device.",
    "10-0": "CT Source",
    "10-1": "The source of the event.  \nFor example, the event may originate from a Mobile SDK or an API.  \n  \nAll possible values:  \n  _ Mobile (Mobile SDK)  \n  _ MobileWeb (Web SDK)  \n  _ Web (Web SDK)  \n  _ API  \n  _ segment  \n  _ appsflyer  \n  _ apsalar  \n  _ branch  \n  _ tune  \n  _ System (for events generated by CleverTap)"
  },
  "cols": 2,
  "rows": 11,
  "align": [
    "left",
    "left"
  ]
}
[/block]


> 📘 Latitude and Longitude
> 
> The system properties _latitude_ and _longitude_ are captured and sent from the SDK only if the user gives consent on your app.

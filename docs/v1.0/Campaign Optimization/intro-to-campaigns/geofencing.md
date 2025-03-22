---
title: "Geofencing"
slug: "geofencing"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Tue Sep 08 2020 01:28:33 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Mar 15 2021 14:40:33 GMT+0000 (Coordinated Universal Time)"
---
## Overview

CleverTap offers geofencing which is a GPS location-based service that customers can use to engage their audience by sending relevant messages to Android and iOS users. A geofence is a virtual geographic area, represented as latitude/longitude pairs combined with a radius, forming a circle in a specific position on a map. Geofences can vary in size and a geofence cluster can contain up to 100 geofences. 

Users can define geofences on the CleverTap dashboard and trigger campaigns in real-time as users enter and exit them around the world. Campaigns are delivered in real-time to users as they exit or enter geofences, or sent as followups hours or days later. As the users enter or exit geofences, CleverTap's location analytics create user data that can be used for re-targeting, and geofence-specific analytics can generate insight on activities or locations of interest.

# Create Geofences

To create geofences, perform the following steps:

1. From the CleverTap dashboard, select _Settings_ > _Geofences_.

![](https://files.readme.io/187896f-2020-09-01_19-28-13_Select_Geofences_from_Settings.png "2020-09-01_19-28-13_Select Geofences from Settings.png")

2. Click **+Geofence Cluster** to create a new geofence cluster.

![](https://files.readme.io/fc31f55-2020-09-01_19-33-29_Select_Unit_of_Measure.png "2020-09-01_19-33-29_Select Unit of Measure.png")

3. Select the preferred unit of measure that will be used to track location for the geofence clusters.
4. Click **Save**.
5. Click in the _Search for location_ window to select the area or business locations you want to display on the map. 

> 📘 Note
> 
> You can create up to 100 Geofences in each Cluster and can create up to 100 clusters for your app.

_Note_: Clicking on any of the search options creates a geofence with a setting pop-up open beside the circle.

![](https://files.readme.io/14c8d93-2020-09-01_19-42-59_Click_Map_to_Add_New_Geofence.png "2020-09-01_19-42-59_Click Map to Add New Geofence.png")

6. Enter the _Geofence_ name.
7. Input the field radius you want the geofence to cover.
8. Click **Add**.

![](https://files.readme.io/329ca37-2020-09-03_17-31-00_Add_New_Geofence.png "2020-09-03_17-31-00_Add New Geofence.png")

9. Click **Continue**.
10. Add geofence cluster name.
11. Select a tracking start and end. Selecting date and time displays day and time options beneath the radio buttons.

![](https://files.readme.io/19f8208-2020-09-03_17-33-08_Creating_Cluster_Name.png "2020-09-03_17-33-08_Creating Cluster Name.png")

12. Click **Activate**.

## Optional Features

When entering the details for the geofence cluster, you can select a DND window and if you select start and end time, you can also set a dwell time. The DND option prevents triggering an engagement for users who enter the geofence on specified days and times. Dwell time specifies the amount of time a user can remain inside the geofence before triggering an engagement.

![](https://files.readme.io/2b58e20-2020-09-03_18-07-51_DND_and_Dwell.png "2020-09-03_18-07-51_DND and Dwell.png")

> 📘 Add, Edit, or Delete Geofences
> 
> Repeat the steps to add more geofences in your cluster. You can have up to 100 geofences in a cluster. In addition, you can edit or delete a geofence by clicking on the location and clicking the edit or delete icon. You can also edit or delete geofences by selecting them from the list on the left.

# Use Geofence Events

CleverTap raises two system events every time a device enters or exits a geofence that can be used to run campaigns, analytics, and segmentation:

- Geocluster Entered
- Geocluster Exited

Details about the event are provided in the events documentation section [here](https://docs.clevertap.com/docs/events#section-system-events).

# Add Geofence Clusters in a Campaign

Once you have configured your geofence clusters, you can add them to a campaign by performing the following steps.

1. Select _In-action within time_ as your mobile push type. 
2. Select the campaign start and end time.
3. Click ** + Create an ad-hoc segment**.

![](https://files.readme.io/61a911a-2020-09-03_18-20-29_Select_Ad_hoc_segment.png "2020-09-03_18-20-29_Select Ad hoc segment.png")

4. From _As soon as user does_, select _Geocluster Entered_.
5. Click **+Filter **by to add geofence properties.

![](https://files.readme.io/ee7f234-2020-09-03_18-24-56_Adding_Geofence_Properties_to_Campaign.png "2020-09-03_18-24-56_Adding Geofence Properties to Campaign.png")

6. Click **Continue**.

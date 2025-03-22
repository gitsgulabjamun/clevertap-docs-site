---
title: "Viewing Journey Reports"
slug: "viewing-journey-reports"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Thu Jan 09 2020 05:26:13 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Mar 15 2021 15:48:14 GMT+0000 (Coordinated Universal Time)"
---
## Overview

You can view comprehensive reports for all Journeys. You can export these reports to analyze Journey performance with your metrics, compare performance across Journeys and understand engagement trends.

# Export Journey Reports

You can export a Journey report in a CSV file. When you choose to export a Journey report, it will be emailed to you on your registered email address. 

You can select the time period and the required Journeys from the Journeys list page. The Email report button is available on top right-hand side of the list page. 

> 📘 Note
> 
> You can email reports for up to 100 Journeys at a time from the dashboard.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b7bcc28-Journeys_report_email.png.png",
        "Journeys_report_email.png.png",
        1233
      ],
      "border": true,
      "caption": "Email Journey Report"
    }
  ]
}
[/block]


## Schedule Journey Exports

You can choose to have reports for all Journeys with the 'running' status emailed to you daily or weekly. You can choose the period and frequency from the reports section in Settings. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/57526b6-Screenshot_2020-06-10_at_1.03.23_AM.png",
        "Screenshot 2020-06-10 at 1.03.23 AM.png",
        1436
      ],
      "border": true,
      "caption": "Schedule Journey Reports"
    }
  ]
}
[/block]


# Types of Journey Reports

There are two types of Journey Reports available:

1. Journey Summary report
2. Journey Nodewise report

## Journey Summary report

This is a Journey level report. Each row in the report represents a Journey and contains information for the Journey and all the users in it.  

Journey Summary report column headers: 

| Journey Data            | User Data                          |
| :---------------------- | :--------------------------------- |
| Journey Start Time      | Qualified                          |
| Journey End time        | Entered                            |
| Journey Name            | Goal Met                           |
| Journey ID              | Goal 1 Name                        |
| Journey Entry type      | Goal 1 Conversions                 |
| Reentry Allowed         | Goal 1 Control Group Conversions   |
| Journey Status          | Goal 2 Name                        |
| Journey Created by      | Goal 2 Conversions                 |
| Journey Labels          | Goal 2 Control Group Conversions   |
| Journey Number of nodes | Goal 3 Name                        |
| Journey URL             | Goal 3 Conversions                 |
|                         | Goal 3 Control Group Conversions   |
|                         | Journey Timeout                    |
|                         | Force Exits                        |
|                         | Completed                          |
|                         | Control Group (Total)              |
|                         | System Control Group Conversions   |
|                         | Campaign Control Group Conversions |
|                         | Custom Control Group Conversions   |
|                         | Custom Control Group Name          |

## Journey Nodewise report

This is a node level report. Each row in the report represents a node in a Journey. This report has multiple rows that represent multiple nodes in a Journey. 

> 📘 Note
> 
> If a Journey has multiple Campaign OS' and Variants, they will be represented in separate rows.

This data is available for Segment and Engage nodes. The report display Journey Overview data, Node Overview data, Node user data, and campaign data.  
A Journey Node report has the following column headers: 

| Journey Overview data   | Node Overview data           | Node User Data                 | Campaign Data                           |
| :---------------------- | :--------------------------- | :----------------------------- | :-------------------------------------- |
| Journey Start Time      | Node Type                    | Moved Forward                  | Campaign Type                           |
| Journey End time        | Node ID                      | Moved Forward via Yes          | Campaign Variant                        |
| Journey Name            | Previous Node\*\*            | Moved Forward via No           | Campaign OS                             |
| Journey ID              | Delay before Node\*\*        | Moved Forward via Node Timeout | Global Campaign Limits Applied          |
| Journey Entry type      | Connector from Previous\*\*  | Journey Timeout                | Campaign Title                          |
| Re-entry Allowed        | Qualifying window            | Completed                      | Campaign Message                        |
| Journey Status          | Campaign Name / Segment Name | Goal Met                       | Total Sent                              |
| Journey Created by      | Campaign ID / Segment ID\*\* | Goal 1 Name                    | Total Viewed                            |
| Journey Labels \*\*     | Channel / Segment Type       | Goal 1 Conversions             | Total Clicked                           |
| Journey Number of Nodes | Campaign URL                 | Goal 2 Name                    | Errors                                  |
| Journey URL             |                              | Goal 2 Conversions             | Conversion Event                        |
|                         |                              | Goal 3 Name                    | Conversion Time (in minutes)            |
|                         |                              | Goal 3 Conversions             | Unique Sent within Conversion Time      |
|                         |                              |                                | Unique Viewed within Conversion Time    |
|                         |                              |                                | Unique Clicked within Conversion Time   |
|                         |                              |                                | Unique Converted within Conversion Time |
|                         |                              |                                | Influenced Conversions                  |
|                         |                              |                                | Influenced Revenue                      |
|                         |                              |                                | Amplified By Push                       |
|                         |                              |                                | Deep link URL                           |

> 📘 \*\*
> 
> Column headers with `**` can have multiple values separated by `|`

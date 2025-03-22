---
title: "Control Groups"
slug: "control-groups"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Mon Dec 17 2018 09:01:09 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Mar 15 2021 13:18:35 GMT+0000 (Coordinated Universal Time)"
---
## Overview

Marketing teams typically run a variety of campaigns and journeys to onboard, convert, and retain their users. However, it is hard to measure the efficacy of these campaigns and journeys independently. For example, was the increase in purchases today due to the reminder email we sent last night, or it could have been that those users would have bought anyways without the reminder. 

A control group is a set of users marked to be excluded from all marketing campaigns. You can measure the effectiveness of your initiatives by comparing this group with the target group of users who received your campaigns.

CleverTap allows you to measure and track the performance of your engagement efforts by comparing it to the Control Group

You can create 4 different types of Control Groups:-

1. System Control Group

- System Control Group is created on your entire user base
- You can create one System Control per account
- You can create a system control group of size between 2% to 5%

2. Custom Control Group

- Custom Control Group is created on your entire user base
- You can create up to 10 Custom Control Groups per account
- You can create a custom control group of size between 2% to 5%
- Custom Control Groups are generally created for short duration strategies  
  For example, determining engagement impact for Christmas campaigns

3. Campaign Control Group

- Campaign Control Group is created on the user base that qualifies for the campaign.
- You can create a campaign control group at the time of campaign creation. 
- You can create a campaign control group of size between 2% to 99%

4. Journey Control Group

- Journey Control Group is created on the user base that qualifies for the journey.
- You can create a journey control group at the time of journey creation. 
- You can create a journey control group of size between 2% to 99%

## Control Group Qualification

- When a Control Group is created, it is created from all the users who are a part of the application at the given time.  
  For example, if a 5% Control Group is created, then every 1 in 20 users will be a part of the Control Group.
- This selection of users who are a part of the Control Group is completely random. We do not introduce any bias for qualification
- For all new users coming to the application after creating the control group, qualification to the Control Group will be based on the size of the control group.  
  For example, if a 5% Control Group is created, every 1 in 20 new users will be a part of the Control Group

## Creating a System Control Group

**Step 1**  
You can create a system control group from _Engage_ > **Control Group**.  
Here, you can create a System Control Group

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cdfc1f4-Screenshot_2020-06-09_at_4.35.14_PM.png",
        "Screenshot 2020-06-09 at 4.35.14 PM.png",
        1001
      ],
      "border": true
    }
  ]
}
[/block]


**Step 2**  
You can choose to apply the Control Group to existing running campaigns and journeys by checking the box to _Apply to all current campaigns and journeys_.

> 🚧 Important Note
> 
> After you make this selection, you cannot change it

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1af5b41-Screenshot_2020-06-09_at_4.36.00_PM.png",
        "Screenshot 2020-06-09 at 4.36.00 PM.png",
        703
      ],
      "border": true
    }
  ]
}
[/block]


**Step 3**  
Now, you will be able to see the details of the system control group you created

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7fc7693-Screenshot_2018-12-28_at_4.01.09_PM.png",
        "Screenshot 2018-12-28 at 4.01.09 PM.png",
        763
      ],
      "border": true
    }
  ]
}
[/block]


## Creating a Custom Control Group

> 📘 Custom Control Group can be created only after you have a created a System Control Group.

**Step 1**  
When you move to _Custom Control Group _and create a new custom control group, a new group will be created for you.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e15bc24-Screenshot_2020-06-09_at_4.39.47_PM.png",
        "Screenshot 2020-06-09 at 4.39.47 PM.png",
        985
      ],
      "border": true
    }
  ]
}
[/block]


**Step 2**  
Once you click on **+ Create New**, you asked to provide a name, purpose, and control group size

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3243bbf-Screenshot_2018-12-28_at_4.13.51_PM.png",
        "Screenshot 2018-12-28 at 4.13.51 PM.png",
        458
      ],
      "border": true
    }
  ]
}
[/block]


**Step 3**  
Now, you will be able to see the details of the custom control group(s) you created  
You can create up to 10 Custom control groups

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d18233f-Screenshot_2018-12-28_at_4.10.44_PM.png",
        "Screenshot 2018-12-28 at 4.10.44 PM.png",
        1247
      ],
      "border": true
    }
  ]
}
[/block]


> 🚧 API and Clever Campaigns
> 
> Control Groups are not applicable to campaigns created via APIs  
> Control Groups are not applied to Clever Campaigns

## Campaign and Journey Creation

> ❗️ Removing System Control Group
> 
> Although CleverTap provides the option to remove the System Control Group, we recommend to only use this option for transactional messages. Removing the System Control Group will impact the campaign and journey reports

## Campaign Creation

After you have created a System and/or Custom control group, you can now use this control group in your campaigns.  
In the campaign creation workflow, when in the _Setup_ section, you are given the option to add/remove the Control Group

- The system control group is applied by default for every campaign.
- You can choose to add a Custom control group to the campaign.
- Optionally you can also add a _Campaign _control group. This control group will be applicable only to the related campaign.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/78b2456-Screenshot_2020-06-09_at_4.47.17_PM.png",
        "Screenshot 2020-06-09 at 4.47.17 PM.png",
        1122
      ],
      "border": true
    }
  ]
}
[/block]


## Journey Creation

After you have created a System and/or Custom control group, you can now use this control group in your _Journeys_.  
In the entry node of the Journey, you are given the option to add/remove the Control Group.

- The system control group is applied by default for every campaign.
- You can choose to add a _Custom_ control group to the campaign.
- Optionally you can also add a _Journey_ control group. This control group will be applicable only to the related journey.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/dc3a90d-Screenshot_2020-06-09_at_4.50.20_PM.png",
        "Screenshot 2020-06-09 at 4.50.20 PM.png",
        1066
      ],
      "border": true
    }
  ]
}
[/block]


# Reporting Stats

1. Campaign or Journey Qualification

- All users who have qualified for the campaign based on the _who_ section selected by you. 
- In Journeys, it is all the users who have qualified on the _who_ section selected by you in the entry node.
- This will include users who are a part of the Control Group qualification.

2. Control Group Qualification

- All users who have qualified for the system or custom control group

3. Control Group Qualification for the campaign

- All users who have qualified for the campaign AND were qualified to be a part of the Control Group
- There may be users who are a part of the Custom Control Group or System Control Group, but do not qualify for the campaign. These users will not be a part of the Control Group for this campaign.
- There may be users who are a part of the Control Group, but do not qualify for the campaign. These users will not be a part of the Control Group for the campaign in question.

4. Control Group Qualification for the journey

- All users who have qualified for the journey AND were qualified to be a part of the Control Group
- There may be users who are a part of the Custom Control Group or System Control Group, but do not qualify for the journey. These users will not be a part of the Control Group for this journey.

**Note**: If the _Campaign_ or _Journey_ qualifies a very small user base, there may be a condition, that no user from the qualified based is a part of the Control Group. In that case, we will not showcase the Control Group stats for that campaign.

> 🚧 Deleting Control Group
> 
> If a Control Group is deleted when campaigns and journeys are running with the Control Group, the corresponding campaign and journey report will be impacted

Once a campaign or a journey is created with a Control Group, the stats for it can be viewed on the stats page  
Here you can see -

1. Number of users in the Control Group
2. Conversions of Target Group w.r.t. Control Group
3. Revenue of Target Group w.r.t. Control Group

- Revenue is calculated as ARPU (Average Revenue Per User)  
  \*\* where ARPU = Total Revenue / number of users

# Control Group Exports

Control group users can be exported to AWS S3. The option is available via _Settings_ > _Partners_ > _Exports_ > _Activity_ log tab > _Create Export. _

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f0a224a-Control_Group_Export_Activity.png",
        "Control_Group_Export_Activity.png",
        1437
      ],
      "border": true
    }
  ]
}
[/block]


Click the **+ Create Export **button. The _Create an export_ window displays.  
You can choose to export control group users by making the following selections:

- Export Partner - AWS S3
- Choose export type - Select events (you can choose multiple values here) 
- Choose an export frequency and select the days for data export
- Choose export format (JSON, XML, CSV, Parquet) 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8290224-Control_group_export_create.png",
        "Control_group_export_create.png",
        620
      ],
      "border": true
    }
  ]
}
[/block]


While selecting events, for exporting control group, the following control groups are available:

- System Control Group
- Custom Control Group
- System Control Group (Journeys) 
- Custom & Journey Control Group (Journeys)

If a user is a part of a control group, then for each campaign, that the user qualifies for within the selected days to get data, there will be one entry present in the export. For example, if user A is part of the system control group and it qualifies for campaign ABC and campaign XYZ, then in _System Control Group_ export, we will have two entries for this user, one for each campaign. The same is applicable to all control group exports for journeys.

## System Control Group 

Export System Control Group users data in all campaigns within the selected days. 

JSON format Example - 

```json
{"ts":20200319221000,"eventName":"Control Group","profile":{"all_identities":["jamessmithi19020907-0@testwiz.com"],"platform":"iOS","name":"JamesSmith","email":"jamessmithi19020907-0@testwiz.com","push_token":"ios-19020907-0","phone":119021007089},"deviceInfo":{"make":"Apple","model":"iPhone8,1","appVersion":"App Version 4","sdkVersion":"0","osVersion":"9.1"},"controlGroupName":"System Control Group","eventProps":{"Campaign id":"1584635757","Campaign name":"ok","Campaign type":"Mobile Push - iOS"}}
```

## Custom Control Group

Export Custom Control Group users data in all campaigns within selected days. Each entry has a Control group name. 

JSON format Example - 

```json
{"ts":20200319221000,"eventName":"Control Group","profile":{"all_identities":["johnjohnsoni13120107-3@testwiz.com"],"platform":"iOS","name":"JohnJohnson","email":"johnjohnsoni13120107-3@testwiz.com","push_token":"ios-13120107-3","phone":119112607389},"deviceInfo":{"make":"Apple","model":"iPhone8,1","appVersion":"AppVersion0","sdkVersion":"0","osVersion":"9.2"},"controlGroupName":"CustomCG1","eventProps":{"Campaign id":"1584635757","Campaign name":"ok","Campaign type":"Mobile Push - iOS"}}
```

## System Control Group (Journeys) 

Export System control group users data in all Journeys within the selected days. 

JSON format Example - 

```json
{"ts":20200317193200,"eventName":"Journey Control Group","profile":{"all_identities":["jamessmithi19020907-0@testwiz.com"],"platform":"iOS","name":"JamesSmith","email":"jamessmithi19020907-0@testwiz.com","push_token":"ios-19020907-0","phone":119021007089},"deviceInfo":{"make":"Apple","model":"iPhone8,1","appVersion":"App Version 4","sdkVersion":"0","osVersion":"9.1"},"controlGroupName":"System Control Group","eventProps":{"Journey id":"171","Journey name":"PBS_All_users"}}
```

## Custom & Journey Control Group (Journeys)

Export data for Custom and Journey control group users in all Journeys within selected days. Each entry will have a Control group name. For the Journey control group, the value of this field is **Journey Control Group**.

JSON format Example (Custom control group user) - 

```json
{"ts":20200310230600,"eventName":"Journey Control Group","profile":{"identity":"123","all_identities":["123"],"platform":"iOS","name":"Kritii Agrawal","push_token":"3dbf357c5a6db427714343d52f10cbf9d4b1c3859f96423370dcd595370363b2","phone":919833108201},"deviceInfo":{"make":"Apple","model":"iPhone9,3","appVersion":"2.0.0","sdkVersion":"30401","osVersion":"Others","dpi":326,"dimensions":{"width":58,"height":103,"unit":"mm"}},"controlGroupName":"Test group A","eventProps":{"Journey id":"145","Journey name":"trigger on jn 144 step 4- Testing Event"}}
```

JSON format Example (Journey control group user) -

```json
{"ts":20200310230600,"eventName":"Journey Control Group","profile":{"identity":"123","all_identities":["123"],"platform":"iOS","name":"Aditi Agrawal","push_token":"3dbf357c5a6db427714343d52f10cbf9d4b1c3859f96423370dcd595370363b2","phone":919833108201},"deviceInfo":{"make":"Apple","model":"iPhone9,3","appVersion":"2.0.0","sdkVersion":"30401","osVersion":"Others","dpi":326,"dimensions":{"width":58,"height":103,"unit":"mm"}},"controlGroupName":"Journey Control Group","eventProps":{"Journey id":"145","Journey name":"trigger on jn 144 step 4- Testing Event"}}
```

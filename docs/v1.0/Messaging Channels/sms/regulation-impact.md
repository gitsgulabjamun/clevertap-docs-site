---
title: "Regulation Impact"
slug: "regulation-impact"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Mon Jan 25 2021 07:38:51 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Apr 13 2021 16:54:10 GMT+0000 (Coordinated Universal Time)"
---
## Overview

The Telecom Regulatory Authority of India (TRAI) requires distributed ledger technology (DLT) registration for all the service providers for bulk SMS services in India. Starting on February 1, 2021, it is mandatory to send messages to customers via a pre-approved template. For more information regarding DLT registration, refer to [SMS Regulations](doc:sms-regulations). 

# What This Means to Our Clients

This requires the following changes from your side when you create an SMS campaign on the CleverTap dashboard. 

> ❗️ Template IDs
> 
> For the SMS campaigns targeted to Indian mobile numbers and having MSG-91 as the service provider, a template ID always needs to be added. For other service providers, a template ID may or may not be required. We recommend checking with your service provider.

## Future Campaigns

Future campaigns are the campaigns that have started after February 1, 2021.

When you create campaigns after the mandated date, you must use a pre-approved template. In the campaign setup where you choose a service provider, we now provide an extra field to provide a template ID. 

![](https://files.readme.io/1a52d7c-Screenshot_2021-01-29_at_12.15.12_PM.png "Screenshot 2021-01-29 at 12.15.12 PM.png")

This field is optional because it is only required for sending SMS messages to phone numbers in India. Check that you provide a matching template ID every time you create an SMS campaign for customers in India. 

For generic service providers, you can edit the settings to additionally set up a key-value pair as shown below:

- Key: This indicates the name of the key for a template ID your service provider is expecting you to send. In the example shown below 'content_id' is the name of the key expected by the service provider.
- Value: Specify $$TemplateId. You can enter the value of the template ID at the time of the campaign creation. 

![](https://files.readme.io/d89ec0d-Screenshot_2021-01-29_at_3.21.42_PM.png "Screenshot 2021-01-29 at 3.21.42 PM.png")

For example, if the key name for a template ID is expected as content_id.

## Current Campaigns

Current campaigns are the campaigns that were started before February 1, 2021. You can provide us template IDs for all your campaigns from your SMS service provider and we will update them for you. 

### Campaigns

To receive all your running campaigns, perform the following steps:

1. From the dashboard, navigate to _Campaigns_.
2. Filter the channels by _SMS_.

![](https://files.readme.io/a7f1252-1_SMS.png "1 SMS.png")

3. Select the status as _Running_, then click **Apply**. 

![](https://files.readme.io/9be3fc5-2_Running.png "2 Running.png")

4. Click on the **Subscribe to Reports** link.

![](https://files.readme.io/f74f9eb-3_Subscribe_to_report.png "3 Subscribe to report.png")

5. Once the _Campaign Summary Emails_ window displays, enter a report name.
6. Select _Campaign overview_.
7. Click **Send Report**.

![](https://files.readme.io/35dad38-4_Fill_out_report.png "4 Fill out report.png")

You will then receive a report via email with all the running SMS campaigns and their relevant campaign IDs.  

### Journeys

To receive all your running journeys, perform the following steps:

1. From the dashboard, navigate to _Journeys_.
2. Select the status as _Running_, then click **Apply**. 

![](https://files.readme.io/b71ac3d-5_journeys_running_status_.png "5 journeys running status .png")

3. Click on the **Email report** link.

![](https://files.readme.io/a63f504-6_journeys_email_report.png "6 journeys email report.png")

4. Once the _Email report_ window displays, enter a report name.
5. Select _Nodewise_ for the report type.
6. Click **Email report**.

You will then receive a report via email that you can filter by campaign channel as SMS to get a list of all SMS campaigns with their campaign IDs.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4ba2de2-Screenshot_2021-01-26_at_10.47.59_PM.png",
        "Screenshot 2021-01-26 at 10.47.59 PM.png",
        559
      ],
      "sizing": "auto"
    }
  ]
}
[/block]


### Match IDs

After you have a list of all campaign IDs from the campaign and journey steps above, perform the following steps:

1. Match these IDs to the template IDs from the SMS service provider's dashboard.
2. Send this data to the CleverTap platform in the JSON format/JSON payload and hit our endpoint. 

#### Base URLs

Use the appropriate URL depending on your location:

- For customers on an EU stack: <https://api.clevertap.com/1/update/templateIds.json> 
- For customers on an IN stack: <https://in1.api.clevertap.com/1/update/templateIds.json>

#### HTTP POST Method 

The X-CleverTap-Account-Id and X-CleverTap-Passcode are used to authenticate the request. Please refer to the [authentication guide](doc:authentication) to view how to get their values.

The following headers are all required:

| Header                 | Description                                             | Type   | Example Value                        |
| :--------------------- | :------------------------------------------------------ | :----- | :----------------------------------- |
| X-CleverTap-Account-Id | Your CleverTap account ID.                              | String | "X-CleverTap-Account-Id: ACCOUNT_ID" |
| X-CleverTap-Passcode   | Your CleverTap account passcode.                        | String | "X-CleverTap-Passcode: PASSCODE"     |
| Content-Type           | Request content-type is always set to application/JSON. | String | "Content-Type: application/json"     |

The following is a sample JSON:

```json
[
{
"campaign_id" : 1563478922,  // campaign ID
"template_id" : "455633413", // template ID
},
{
"campaign_id" : 1563478922,  
"template _id" : "455633413"
}
]
```

Your CleverTap campaigns will now have the correct template IDs tagged to them.

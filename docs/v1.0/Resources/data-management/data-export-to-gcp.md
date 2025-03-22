---
title: "Data Export to GCP"
slug: "data-export-to-gcp"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Fri Jun 22 2018 02:18:15 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Feb 16 2021 19:41:55 GMT+0000 (Coordinated Universal Time)"
---
# Overview

The GCP Export feature enables you to bulk export your CleverTap event or profile data to a GCP bucket. You can use this feature to export your CleverTap data for analysis in BI tools or for storage in your data warehouse for analysis in the future.

> 📘 Contact your account manager at CleverTap to know more about getting this feature enabled for your account.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f364c54-Screenshot_2020-04-06_at_8.19.51_PM.png",
        "Screenshot 2020-04-06 at 8.19.51 PM.png",
        2862
      ],
      "border": true
    }
  ]
}
[/block]


This feature can be configured to export data for all events or specific type of events that you select. You also have the option to set up automatic reoccurring exports ranging from every 4 hours to every 24 hours.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ac2e5d8-Screenshot_2020-04-06_at_8.20.31_PM.png",
        "Screenshot 2020-04-06 at 8.20.31 PM.png",
        2862
      ],
      "border": true
    }
  ]
}
[/block]


# Setup Steps

## Step 1 - Create a Service Account for your Project

Login into your GCP account , select the project in which you want your CleverTap exports to reside in,  if you do not have a project create a new project.  
In left Panel select IAM and Admin -> Service Accounts and create a new Service Account linked to the selected project .  
This is the account which you will use to Authenticate and Authorise CleverTap to upload Exports to your GCP project.

1. Enter Service account name and description 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fb49ce9-Screenshot_2020-04-06_at_3.57.40_PM.png",
        "Screenshot 2020-04-06 at 3.57.40 PM.png",
        2880
      ],
      "border": true
    }
  ]
}
[/block]


2. Permissions ->  Storage Admin and continue.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b14f47c-Screenshot_2020-04-06_at_3.58.36_PM.png",
        "Screenshot 2020-04-06 at 3.58.36 PM.png",
        2880
      ],
      "border": true
    }
  ]
}
[/block]


3. Create a JSON key for the Service account .  
   Click on create key and select Key Type-> JSON and click Create .  
   JSON key will Auto download to your machine , save it as we will need the key later for uploading to CleverTap.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e5bc98b-Screenshot_2020-04-06_at_4.04.32_PM.png",
        "Screenshot 2020-04-06 at 4.04.32 PM.png",
        2880
      ],
      "border": true
    }
  ]
}
[/block]


## Step 2 - Create A Bucket

In this step, we will create a bucket which will hold the Exports from CleverTap.  
In the left panel navigate to Storage and click on Create Bucket.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8d026fe-Screenshot_2020-04-06_at_4.12.33_PM.png",
        "Screenshot 2020-04-06 at 4.12.33 PM.png",
        2280
      ],
      "border": true
    }
  ]
}
[/block]


Name your bucket and fill in the other details as per your requirements.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c696063-Screenshot_2020-04-06_at_4.14.53_PM.png",
        "Screenshot 2020-04-06 at 4.14.53 PM.png",
        2880
      ],
      "border": true
    }
  ]
}
[/block]


Once done bucket will look like in the image below .

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fd5d73b-Screenshot_2020-04-06_at_4.16.03_PM.png",
        "Screenshot 2020-04-06 at 4.16.03 PM.png",
        2880
      ],
      "border": true
    }
  ]
}
[/block]


## Step 3 - Add Your GCP Service Credentials and Bucket Details to CleverTap

In this step we will add your Service account credentials(created in Step 1) and bucket name to CleverTap .

1. Login to your CleverTap account, and navigate to [this page](https://eu1.dashboard.clevertap.com/AAA-BBB-CCC/my-exports.html). Click on the Settings -> Partner-> Exports->Google 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/59a5b14-Screenshot_2020-04-06_at_4.22.11_PM.png",
        "Screenshot 2020-04-06 at 4.22.11 PM.png",
        2754
      ],
      "border": true
    }
  ]
}
[/block]


2. Copy the contents of the downloaded Service Account Key JSON file and paste them in the Service Key.  
   Add the name of the bucket as given in the project and click on Save Credentials.  
   You will see a successful Credentials Saved message.

> 🚧 Error when saving credential
> 
> 1. Check if the bucket name is same as it is GCP. Bucket names needs to be an exact match.
> 2. Generate the Service Account key again , copy and paste new key here .

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b4b5b46-Screenshot_2020-04-06_at_4.44.59_PM.png",
        "Screenshot 2020-04-06 at 4.44.59 PM.png",
        2540
      ],
      "caption": "Service Account Key"
    }
  ]
}
[/block]


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e4bca7d-Screenshot_2020-04-06_at_4.51.32_PM.png",
        "Screenshot 2020-04-06 at 4.51.32 PM.png",
        2044
      ],
      "border": true
    }
  ]
}
[/block]


## Step 4 - Create a New Data Export

Click on the Partner Data -> Exports -> Activity Log -> Create Export 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0ebf390-Screenshot_2020-04-06_at_8.19.51_PM.png",
        "Screenshot 2020-04-06 at 8.19.51 PM.png",
        2862
      ],
      "border": true
    }
  ]
}
[/block]


When creating export there are various settings that need to be defined 

### Choose export Partner

- GCP for exporting Data to GCP

### Choose export Type

- All user events - Will export data for all events that have been defined which includes System and Custom events 
- Select Events - Will export specific events that you want to export 
- All user profiles - Will export all you user profile data

### Choose export Frequency

- One time - Single Export for the export type selected . You can export data up the last 45 days 
- Recurring - Setup a recurring export which will export all the new events/user profiles captured in the last window. You can export as frequently as every 4 hours and upto once every 24 hours 

### Choose export Format

- JSON
- XML
- CSV
- Parquet

> 🚧 Stop Recurring Profile Export to do one time Export
> 
> If there is a scheduled recurring profile export, you must stop it to run a one time profile export.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/448d753-Data_Export_AWS_settings.gif",
        "Data_Export_AWS_settings.gif",
        1280
      ],
      "border": true
    }
  ]
}
[/block]


CleverTap will now process the export. You can refresh the Activity Log page to see the current status of the export. Once the export is completed, the status for that export will say Done.  
For Recurring Exports the status will always be Pending .

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6991174-Screenshot_2020-04-06_at_8.22.31_PM.png",
        "Screenshot 2020-04-06 at 8.22.31 PM.png",
        2862
      ],
      "border": true
    }
  ]
}
[/block]


To confirm your event data was successfully exported, 

- GCP-> Go the bucket and search with the requestid for the export from the Activity log , you should be able to see the files here . 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2dd4777-Screenshot_2020-04-06_at_8.23.50_PM.png",
        "Screenshot 2020-04-06 at 8.23.50 PM.png",
        2862
      ],
      "border": true
    }
  ]
}
[/block]


# Export Format

## File Name Format

The example below shows the file name format for data exports.

- The export request id is generated when you create a request in the CleverTap dashboard.
- The timestamp is when the export was run.
- The event name is event type that is included in the file.
- For larger exports, we chunk the data across multiple files. The file index notes what file number in the file series it is. We have limited file sizes to 100 MB chunks to make them more consumable.

```text
<export request id>-<timestamp of the export run>-<event name>-<yyyymmdd>-<file index>-<database-id>.json
```

## File Data Format

## File Data Format

- Files will be split by Event Names for Event Exports , each file will all event data for the given period for the Event 

## JSON

The first line of the file contains the event name. After the first line, each line is JSON describing the timestamp, object id, and event properties.

```json
{
	"profile": {
		"identity": "dqsndckfk234"
	},
	"ts": 20171109000015,
	"eventProps": {
		"ct_connected_to_wifi": "false",
		"ct_bluetooth_version": "ble",
		"ct_bluetooth_enabled": "false",
		"ct_sdk_version": 30107,
		"ct_latitude": -6.1975594,
		"ct_longitude": 106.52913,
		"ct_os_version": "5.1.1",
		"ct_app_version": "2.30.1",
		"ct_network_carrier": "3",
		"ct_network_type": "4G"
	}
}
```

## CSV

CSV files will be comma delimited and will have each events in separate rows .

![](https://files.readme.io/fdc7b42-CSV.png "CSV.png")

## XML

Will have the timeStamp , eventName followed by  eventProperties.

```text
<Event>
    <ts>20200220130735</ts>
    <eventName>Export Custom Event</eventName>
    <profile>
        <all_identities>exportProfile+81@clevertap.com</all_identities>
        <platform>Web</platform>
        <email>exportProfile+81@clevertap.com</email>
    </profile>
    <deviceInfo>
        <browser>Others</browser>
    </deviceInfo>
    <eventProps>
        <entry>
            <key>CT Source</key>
            <value>API</value>
        </entry>
        <entry>
            <key>Category</key>
            <value>Mens Watch</value>
        </entry>
        <entry>
            <key>Product name</key>
            <value>Casio Chronograph Watch</value>
        </entry>
        <entry>
            <key>Price</key>
            <value>59.99</value>
        </entry>
        <entry>
            <key>Currency</key>
            <value>USD</value>
        </entry>
    </eventProps>
</Event>
```

## Parquet

Will have timestamp ,eventName and eventProperties for each event 

> 📘 Parquet File Format
> 
> Parquet, an open source file format for Hadoop. Parquet stores nested data structures in a flat columnar format

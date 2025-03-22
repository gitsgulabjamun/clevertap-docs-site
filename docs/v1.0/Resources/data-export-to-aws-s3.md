---
title: "Data Export to AWS S3"
slug: "data-export-to-aws-s3"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Sun Feb 23 2020 19:07:51 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Sat Mar 06 2021 01:32:07 GMT+0000 (Coordinated Universal Time)"
---
# Overview

The data export feature provides the capability to bulk export your CleverTap event data to your AWS S3 bucket. You can use this for analysis in BI tools or for storage in your data warehouse for analysis in the future.

> 📘 Feature Part of the CleverTap Corporate Pack
> 
> This capability is a part of the CleverTap corporate pack. Contact your sales account manager to have it activated for you.

# Initiate an Export

To initiate an export:

1. Navigate to _Settings_ > _Partners_ > _Exports_.
2. Click **+ Create Export**.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/82460f3-2020-11-12_09-13-32_Data_Export.png",
        "2020-11-12_09-13-32_Data Export.png",
        1316
      ],
      "sizing": "100",
      "border": true
    }
  ]
}
[/block]


This feature can be configured to export data for all events or specific events you select. 

3. If required, set up automatic recurring exports ranging from every four hours to every 24 hours.
4. Click **Create export**.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/288d4f7-2020-11-12_09-15-19_Create_Export.png",
        "2020-11-12_09-15-19_Create Export.png",
        382
      ],
      "sizing": "smart",
      "border": true
    }
  ]
}
[/block]


# Setup Steps

## Create an AWS S3 Bucket

Depending on your CleverTap account settings, we host your data in EU, US, SG, or IN. 

Once you create an account in the same region as your CleverTap data hosting region, the next step is to create your S3 bucket in that same region. 

> 👍 Region Example
> 
> If your CleverTap account uses AWS EU (Ireland), then you will have to create an S3 bucket in the AWS EU (Ireland) region.

1. Log in to your AWS account, then search for _S3_ in the AWS services box. 
2. Click **S3** in the search results. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f30c5a0-s3-1.png",
        "s3-1.png",
        891
      ],
      "border": true
    }
  ]
}
[/block]


3. Click on the **+ Create bucket** button.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/84ecd10-s3-2.png",
        "s3-2.png",
        521
      ],
      "border": true
    }
  ]
}
[/block]


4. Enter a bucket name, region, and other settings you may need to configure. 

5. Complete your setup by selecting your logging, versioning, and encryption preferences. For this integration, you do not need to make any modifications to the default settings; however, you should check your internal organization's policies to see if you need to modify any of these settings. 

6. Click **Next**.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0aeb412-s3-3.png",
        "s3-3.png",
        691
      ],
      "border": true
    }
  ]
}
[/block]


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f59cf7a-s3-4.png",
        "s3-4.png",
        694
      ],
      "border": true
    }
  ]
}
[/block]


6. On this page, you can keep the default settings. Again, make sure to check your internal organization's policies to see if you need to modify any of these settings. 

7. Click **Next**.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1af0fea-s3-5.png",
        "s3-5.png",
        684
      ],
      "border": true
    }
  ]
}
[/block]


8. Click on the **Create bucket** button.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f57101b-s3-6.png",
        "s3-6.png",
        690
      ],
      "border": true
    }
  ]
}
[/block]


The bucket you just created should now show up in your S3 console. Note the name of your new bucket since you will need it for the next step below.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/928170d-s3-7.png",
        "s3-7.png",
        1010
      ],
      "border": true
    }
  ]
}
[/block]


## Create an API Key for Your S3 Bucket

This step demonstrates how to create an AWS API key that has write access to the bucket we created in the previous step above. CleverTap uses this API key to export data to your S3 bucket.

1. Click on your account name on the top right of the AWS console.

2. Click **My Security Credentials**.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/43b4fc0-s3-8.png",
        "s3-8.png",
        195
      ],
      "border": true
    }
  ]
}
[/block]


3. Click **Users**, then click the **Add user** button.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ba3022e-s3-11.png",
        "s3-11.png",
        856
      ],
      "border": true
    }
  ]
}
[/block]


4. Enter a name for the new user and check the _Programmatic access_ checkbox.
5. Click **Next**.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4805d5b-s3-12.png",
        "s3-12.png",
        899
      ],
      "border": true
    }
  ]
}
[/block]


6. Click **Add user to group**, then click **Create group**.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ffe427d-s3-13a.png",
        "s3-13a.png",
        1238
      ],
      "border": true
    }
  ]
}
[/block]


7. Enter a _Group name_, then click **Create policy**.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5624220-s3-13b.png",
        "s3-13b.png",
        1116
      ],
      "border": true
    }
  ]
}
[/block]


8. Click on the **JSON** tab.

![](https://files.readme.io/81bbc55-s3-13c.png "s3-13c.png")

9. Paste the JSON below in the box. Replace "clevertap-example" with the name of the S3 bucket you created in the previous step above. 

The permissions defined in this policy will allow CleverTap to get information about your bucket and upload files to it. 

> 📘 AWS API Access Policies
> 
> For more information about AWS API access policies, please review [this post](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_s3_rw-bucket-console.html) from the AWS Blog.

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:ListBucket"
            ],
            "Resource": [
                "arn:aws:s3:::clevertap-example"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "s3:PutObject"
            ],
            "Resource": [
                "arn:aws:s3:::clevertap-example/*"
            ]
        }
    ]
}
```

10. Click the **Review policy** button. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/09bcba9-s3-policy-1.png",
        "s3-policy-1.png",
        1206
      ],
      "border": true
    }
  ]
}
[/block]


11. Enter a name. Then, click **Create policy**.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/dda70d4-s3-policy-2.png",
        "s3-policy-2.png",
        1109
      ],
      "border": true
    }
  ]
}
[/block]


12. Go back to the _Group_ page. Search for the policy you just created, assign it to the new group by selecting the checkbox next to it.
13. Click **Create group**.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/07297ba-s3-policy-3.png",
        "s3-policy-3.png",
        999
      ],
      "border": true
    }
  ]
}
[/block]


14. Now, add the user to the group. Then, click the **Next Review** button.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/95dbeec-s3-13h.png",
        "s3-13h.png",
        1255
      ],
      "border": true
    }
  ]
}
[/block]


15. Click **Create user**. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2516f4c-s3-13i.png",
        "s3-13i.png",
        1232
      ],
      "border": true
    }
  ]
}
[/block]


On the next page, you will be shown your _Access key ID_ and the _Secret access key_. 

These credentials will allow CleverTap to upload files to your S3 bucket. Note these values since you will use them in the next step below.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/71c1e9e-s3-13j.png",
        "s3-13j.png",
        1235
      ],
      "border": true
    }
  ]
}
[/block]


## Add Your S3 Bucket Details to CleverTap

To add your S3 bucket details to Clevertap, perform the following steps:

1. Log in to your CleverTap account.
2. Navigate to _Settings_ > _Partners_ > _Exports_. 
3. Click on the **AWS Amazon** icon.
4. Enter your bucket name from the _Create an AWS S3 Bucket_ section above. 
5. Enter your _Access key ID_ and the _Secret access key_ from the _Create an API Key for Your S3 Bucket_ section.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e2c9da0-S3_Bucket_Details_2.png",
        "S3 Bucket Details 2.png",
        1034
      ],
      "border": true
    }
  ]
}
[/block]


## Create a New Data Export

To create a new data export, perform the following steps:

1. Navigate to _Settings_ > _Partners_ > _Exports_ > _Activity Log_.
2. Click **+ Create Export**. 

![](https://files.readme.io/151f66e-S3_Bucket_Details_3.png "S3 Bucket Details 3.png")

When you create an export, you must define various settings:

### Choose Export Partner

- AWS for exporting data to AWS.

### Choose Export Type

- All user events: This exports data for all events that have been defined which include _System_ and _Custom_ events. 
- Select events: This exports specific events you want to export. 
- All user profiles: This exports all your user profile data.

### Choose Export Frequency

- One time: Single export for the export type selected. You can export data up to the last 45 days. 
- Recurring: Setup a recurring export which exports all the new events/user profiles captured in the last window. You can export as frequently as every 4 hours and up to once every 24 hours. 

### Choose Export Format

- JSON
- XML
- CSV
- Parquet

If there is a scheduled recurring profile export, you must stop it to run a one-time profile export.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b1aed72-Data_Export_to_AWS_S3_-_Choose_Export.png",
        "Data Export to AWS S3 - Choose Export.png",
        634
      ],
      "border": true
    }
  ]
}
[/block]


CleverTap will now process the export. You can refresh the _Activity Log_ page to see the current status of the export. 

Once the export is completed, the status for that export will say _Done_. For recurring exports, the status will be in _Pending_.

![](https://files.readme.io/8ea72b5-S3_Bucket_Details_3.png "S3 Bucket Details 3.png")

To confirm your event data was successfully exported:

1. Log in to your AWS account and navigate to the S3 console. You should see some files uploaded to your S3 bucket as shown in the screenshot below.

2. Copy the request ID from the activity log and search with that in S3. You should see your respective file there. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4127993-s3-data.png",
        "s3-data.png",
        594
      ],
      "border": true
    }
  ]
}
[/block]


# Export Format

Below is a list of the various export formats.

## File Name Format

The example below shows the file name format for data exports:

- The export request ID is generated when you create a request in the CleverTap dashboard.
- The timestamp is when the export was run.
- The event name is an event type that is included in the file.
- For larger exports, we chunk the data across multiple files. The file index notes what file number in the file series it is. We have limited file sizes to 100 MB chunks to make them more consumable.

```text
<export request id>-<timestamp of the export run>-<event name>-<yyyymmdd>-<file index>-<database-id>.json
```

## File Data Format

Files are split by event names for event exports and each file will have all event data for the given period for the event.

## JSON

The first line of the file contains the event name. After the first line, each line in JSON describes the timestamp, object id, and event properties.

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

CSV files are comma-delimited and have each event in separate rows.

![](https://files.readme.io/aa71f9f-Screenshot_2020-02-28_at_12.53.22_PM.png "Screenshot 2020-02-28 at 12.53.22 PM.png")

## XML

XML have the timeStamp, eventName, followed by eventProperties.

```typescript
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

Parquet have timestamp, eventName, and eventProperties for each event. 

> 📘 Parquet File Format
> 
> Parquet is an open source file format for Hadoop. Parquet stores nested data structures in a flat columnar format.

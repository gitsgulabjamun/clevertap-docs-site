---
title: "API Campaigns"
slug: "api-campaigns"
excerpt: ""
hidden: true
metadata: 
  image: []
  robots: "index"
createdAt: "Fri Mar 22 2019 11:22:05 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri Mar 22 2019 11:22:44 GMT+0000 (Coordinated Universal Time)"
---
## Overview

Customers can create API campaigns from the dashboard by using the 'API Campaign' under campaign type  
This allows you to create API based campaigns using a campaign id as the input to the API

Once the campaign is created, you can view the stats of the campaign via the dashboard

## Creating an API campaign

**Step 1: **Select the channel you want to create the campaign for. You can create message API campaigns for all channels except Facebook and Google remarketing channels

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/755590b-Screenshot_2019-03-22_at_3.00.16_PM.png",
        "Screenshot 2019-03-22 at 3.00.16 PM.png",
        1103
      ],
      "border": true
    }
  ]
}
[/block]


**Step 2: ** Select the 'API Campaign' type from the 'campaign type

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6b8983a-Screenshot_2019-03-22_at_3.01.44_PM.png",
        "Screenshot 2019-03-22 at 3.01.44 PM.png",
        892
      ],
      "border": true
    }
  ]
}
[/block]


**Step 3: ** Give a name to the campaign

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/70e8daa-Screenshot_2019-03-22_at_4.27.16_PM.png",
        "Screenshot 2019-03-22 at 4.27.16 PM.png",
        524
      ],
      "border": true
    }
  ]
}
[/block]


**Step 4: ** You will get the campaign id. Copy this campaign id for using in the API

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b66728f-Screenshot_2019-03-22_at_4.27.56_PM.png",
        "Screenshot 2019-03-22 at 4.27.56 PM.png",
        520
      ],
      "border": true
    }
  ]
}
[/block]


**Step 5: **  Use the campaign id in the Message Identity API. Check our [dev docs here](https://developer.clevertap.com/docs/create-campaign-api#section-create-campaign-api-target-users-by-their-identities) for more details

```text Message Identity API
{
    "to": {
        "Identity": [],
        "objectId": [
            "-fb4e33e76476409c9541bb102e655bee"
        ]
    },
    "respect_frequency_caps": false,
    "campaign_id": 1000000043, //this is where you add the campaign id
    "content": {
        "title": "Test",
        "body": "Test",
        "platform_specific": {
            "ios": {
                "deep_link": "",
                "sound_file": "",
                "category": "",
                "badge_count": 0,
                "key": "",
                "mediaType": "image",
                "mediaUrl": "https://image.com/image.jpg"
            },
            "android": {
                "background_image": "https://image.com/image.jpg",
                "default_sound": false,
                "deep_link": "",
                "large_icon": "",
                "key": "",
                "wzrk_cid": ""
            }
        }
    }
}
```

**Step 6: **  Once the campaign is sent, check the stats by searching for the campaign id

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0dc36e2-Screenshot_2019-03-22_at_4.50.26_PM.png",
        "Screenshot 2019-03-22 at 4.50.26 PM.png",
        1358
      ],
      "border": true
    }
  ]
}
[/block]

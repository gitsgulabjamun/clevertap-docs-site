---
title: "Google AdWords Remarketing"
slug: "google-adwords-remarketing"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Mon Jun 04 2018 06:32:39 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Feb 16 2021 20:02:43 GMT+0000 (Coordinated Universal Time)"
---
# Overview

If you integrate your Google AdWords and CleverTap accounts, you will be able to segment your users in CleverTap, and automatically upload those users to Audience lists in your Google AdWords account. 

This integration will enable you to easily run remarketing campaigns where you show ads to specific segments of your users across Google Search Network, YouTube, and Gmail.

# Step 1: Get Your AdWords Customer ID

- Login to your [Google AdWords account](https://adwords.google.com/home/).
- Navigate to the settings section and copy the Customer ID listed under account information. For more help on finding your Adwords Customer ID, please see [this page](https://support.google.com/adwords/express/answer/6083253).

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/29fc1a6-image2.png",
        "image2.png",
        215
      ],
      "border": true
    }
  ]
}
[/block]


# Step 2: CleverTap Dashboard Steps

- Login to the [CleverTap Dashboard](https://dashboard.clevertap.com/) and navigate to the Settings page. 
- Click on Channels->Remarketing. 
- Paste the Customer ID that you copied in step 2 and then click Connect.
- Press Allow when prompted by Google to give access to CleverTap.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7fd9585-05246b6-Screenshot_2020-04-27_at_9.55.00_AM.png",
        "05246b6-Screenshot_2020-04-27_at_9.55.00_AM.png",
        2376
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
        "https://files.readme.io/c77deed-campaign3.png",
        "campaign3.png",
        568
      ],
      "border": true
    }
  ]
}
[/block]


> 🚧 Verify Credentials
> 
> If you have multiple CleverTap accounts, make sure that you are using the correct one. Similarly, if you have multiple AdWords accounts, please verify it is the correct one.

# Step 3: Create a New Campaign for AdWords Remarketing

When you create create a new campaign in CleverTap, you can select Google AdWords as the channel of communication.

Click on the Campaigns page, click on + Campaign, and then click the Adwords button.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5eb84f0-6d4ced6-campaign1.png",
        "6d4ced6-campaign1.png",
        1042
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
        "https://files.readme.io/6141265-Campaigns_Channels.png",
        "Campaigns_Channels.png",
        1375
      ],
      "sizing": "100",
      "border": true
    }
  ]
}
[/block]


After you select the segment of users you want to target, you can either add the selected segment to an existing Audience list from your Google AdWords account or you can create a new one.  

Once you create this campaign in CleverTap, Google will update the audience list within 48 hours. You can then add these audience lists to your ad groups in AdWords and start serving them ads. 

# Additional Notes about Adwords Remarketing

- Since it takes up to 48 hours for an Audience list to be populated with members, you will most likely see an "In Progress" status within the AdWords UI when you update an audience list.
- Email addresses must be associated with a Google account.
- Only @gmail.com addresses can be used for targeting in Gmail.
- For privacy purposes, the user list size will show as zero until the list has at least 1,000 members. After that, the size will be rounded to the two most significant digits.
- Google matches the email/phone according to the process [mentioned here](https://support.google.com/adwords/answer/7474263). This means the number of people uploaded may be less than the number of people actually shown on your AdWords account.

# AdWords Help Center Links

- [Customer Match](https://support.google.com/adwordspolicy/answer/6299717)
- [Customer Matching Process](https://support.google.com/adwords/answer/7474263)
- [Fix Customer Match Issues with List Upload](https://support.google.com/adwords/answer/7474166)

---
title: "Web Pop-up"
slug: "web-pop-ups"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Fri Jan 19 2018 21:14:28 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Apr 01 2021 00:23:31 GMT+0000 (Coordinated Universal Time)"
---
# Overview

Web notifications are pop-up messages that can be displayed on desktop or mobile websites.

CleverTap web notifications get displayed in two ways:

- In a footer of your site; available for desktop and mobile websites.
- Before the user exits your website, known as exit intent web pop-ups; only available for desktop.

> 🚧 Prerequisite
> 
> The prerequisite to set up web pop-up campaigns is to integrate your website with the CleverTap JavaScript plugin. For more information, refer to [Web](https://developer.clevertap.com/docs/web) in the developer documentation.

# Web Pop-up

Web pop-ups provide the capability to send quick alerts, offers, or even how-to tidbits to your users using our built-in web pop-up builder or your own custom HTML templates. The _Web Pop-up_ feature makes it easy to set up web pop-up campaigns for all your users or specific user segments. 

These segments can be created on the basis of a user doing an action on one of your webpages, a user visiting one of your specific webpages, a user visiting your website via an external ad referral, or even based on the number of your webpages a user has visited so far. 

Once a campaign has been sent, you can view detailed reports on how many messages were sent, how many users converted as a result, and more.

# Web Exit Intent

CleverTap’s web exit intent pop-ups help with encouraging subscriptions or gathering information from users before they leave your website. CleverTap’s rich segmentation offers the ability to display time-sensitive, relevant, and personalized web pop-up campaigns on a large scale. 

# Web Pop-up Campaign Creation

This section shows how to create a web pop-up campaign from start to finish.

## Create a New Campaign

To start creating a web pop-up campaign:

1. Navigate to _Campaigns_. 
2. Click on the **+Campaign** button.
3. Select _Web Pop-up_ under the _Desktop / Mobile web channels_ section. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7639943-Screenshot_2020-06-10_at_11.05.20_AM.png",
        "Screenshot 2020-06-10 at 11.05.20 AM.png",
        2780
      ],
      "border": true
    }
  ]
}
[/block]


### Select the Campaign Type

To select the campaign type, use the following to make your selection:

Live campaigns can be set up as follows:

- Single action: User does an action on one of your webpages.
- Page visit: User visits one of your specific webpage URLs.
- Page referral: User visits your website via an external ad referral URL. 
- Page count: Number of your webpages a user has visited so far in their session.

![](https://files.readme.io/954d3a2-Screenshot_2020-06-10_at_11.09.33_AM.png "Screenshot 2020-06-10 at 11.09.33 AM.png")

## Define the When

Set up the _When_ to schedule the campaign start and end.

If it is a limited-time incentive, you might want to end the web pop-up at a particular end date and time. On the other hand, if it is always relevant, you can specify that the campaign to never end; however, if you change your mind later, you can always stop the campaign by clicking on the _Stop campaign_ icon next to the campaign on the main web pop-up _Campaigns_ page. 

In addition, you can even specify a minor delay so that the web pop-up is displayed a few minutes after the user does the trigger action for the campaign to give them time to apply the payment offer. You can also set campaign frequency by specifying any specific days of the week and times of the day you would like for it to display. 

Finally, you can specify how often users receive the campaign: Bypass global campaign limits by checking the _Exclude from campaign limits_ radio button or choose the appropriate cadence on how often to send your campaign.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/388cdda-New_Define_the_When.png",
        "New Define the When.png",
        615
      ],
      "border": true
    }
  ]
}
[/block]


> 📘 Recurring Day
> 
> If you specify a recurring day for a campaign, such as the 7th of each month, then the campaign will start for the specified day and ignore the creation date. This is a precaution to avoid sending a campaign unintentionally on a prior date.

## Define the Who

Next, indicate the target audience for your web pop-up campaign. 

You can target your web pop-up campaign to a new user segment by clicking on **Create an ad-hoc segment** or use a previously saved user segment from the list of pre-saved segments shown in the table as shown below. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2608a16-New_Define_the_Who_Overview.png",
        "New Define the Who Overview.png",
        1371
      ],
      "border": true
    }
  ]
}
[/block]


If you choose to create an ad-hoc segment, you can now select a type of segment on which to base your web pop-up campaign. 

> ❗️ Source Event Property
> 
> The CleverTap source event property is not supported for web pop-up and mobile in-app campaigns.

For instance, you can choose to create a live _Single action_ campaign that will target users as soon as they apply a payment offer on your desktop or mobile website.

You can also check the following checkboxes:

- Limit to users who do this event for the first time
- Filter on past user behavior and common properties

![](https://files.readme.io/712cb1f-New_Define_the_When_Filter.png "New Define the When Filter.png")

## Define the What

Now, set up the web pop-up campaign content in the _What_ section.

You can use the built-in editor to type your message title and body or use our custom HTML editor to paste your own custom HTML templates. 

With our built-in web pop-up campaign creator, you can customize the look of your web pop-up: 

1. Choose a web pop-up from one of the following layouts: _Box_, _Banner_, or _Interstitial_. 
2. Specify whether to show on: _Desktop_, _Tablet_, or _Mobile_.
3. Select a pop-up background color, text color, and pop-up position.
4. Specify a pop-up icon by choosing from our default icon images or provide your own publicly-hosted icon URL.
5. Use the checkmark boxes to select the look with rounded corners and whether to show a close icon.

> 🚧 Default on HTML Width
> 
> For custom HTML, specify the maximum width at 100%. CleverTap defaults the HTML width to 80% if not specified.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/09c19ea-image5.png",
        "image5.png",
        788
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
        "https://files.readme.io/956fb36-image12.png",
        "image12.png",
        281
      ],
      "border": true
    }
  ]
}
[/block]


For web exit intent pop-ups, you can specify a button with text. Upon a web pop-up click, you can either do nothing, open a link, or invoke a JavaScript function.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/58514cc-Define_the_What_exit_web_intent.png",
        "Define the What exit web intent.png",
        698
      ],
      "border": true
    }
  ]
}
[/block]


The web pop-up message shown below can be personalized for every user based on a specific user property. For more information, refer to [User Profiles](https://docs.clevertap.com/docs/user-profiles).

1. To invoke the personalization menu, type “@” in the title or the message field.

Emojis can be included in your web pop-up messages, such as in a regular text. You can use the CleverTap emoji picker or copy-paste emojis from an Emoji keyboard online.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2aaf38a-image1.png",
        "image1.png",
        388
      ],
      "border": true
    }
  ]
}
[/block]


## Test and Schedule Campaign

Once the setup is complete, you can preview your notification in a sample webpage.

1. Click on **Preview notification**.
2. After testing, when you are satisfied with the appearance of your campaign, click **Continue** to view your campaign summary. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e67c8e9-Define_the_What_-_Preview_notification.png",
        "Define the What - Preview notification.png",
        679
      ],
      "border": true
    }
  ]
}
[/block]


3. Click **Schedule notification**.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fa9c9f2-Define_the_What_-_Schedule.png",
        "Define the What - Schedule.png",
        626
      ],
      "border": true
    }
  ]
}
[/block]


# Define a Custom Callback

Using the following custom callback functions, you can control the look, feel, and location of your web pop-up.

You need to explicitly call `clevertap.raiseNotificationViewed();` and `clevertap.raiseNotificationClicked();` to ensure that notification views and clicks are tracked on CleverTap.

To define the callback and raise the clicked and viewed events, you need to add the following snippet to the JavaScript embed code comprising your CleverTap web integration:

```javascript
clevertap.notificationCallback = function(msg){
      // Raise the notification viewed and clicked events in the callback
      clevertap.raiseNotificationViewed();
      console.log(JSON.stringify(msg));// Your custom rendering implementation here
      var $button = jQuery("<button></button>");// Element on whose click you want to raise the notification clicked event
      $button.click(function(){
         clevertap.raiseNotificationClicked();
      });
};
```

The message will be in the following format:

```json
{
    "msgContent": {
        "title": "hello title!",
        "description": “hello message!"
    },
    "msgId": "1439796272_20160219",
    "kv": {
        "key1":"value1",
        "key2":"value2"
    }
}
```

msgId contains the campaign ID and the date-stamp so that you can programmatically decide whether to display the notification. kv contains the custom key value pairs.

# Viewing Web Pop-up Campaign Stats

Once the campaign has been sent, you can view its stats from the dashboard by clicking on **Campaigns**, then selecting the campaign of interest to view its total impressions, clicks, conversions, and revenue from conversions (if applicable).

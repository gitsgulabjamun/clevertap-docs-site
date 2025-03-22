---
title: "FAQs_new_updates_WIP"
slug: "faqs_clone"
excerpt: ""
hidden: true
metadata: 
  image: []
  robots: "index"
createdAt: "Tue May 19 2020 13:12:06 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Mar 22 2021 16:41:56 GMT+0000 (Coordinated Universal Time)"
---
# Push Notification Errors in Android

## Invalid FCM API Key

An invalid FCM API key error is displayed when the FCM API key in the CleverTap dashboard is incorrect. You will not be able to send any notifications until the FCM API key is added to your settings.

Follow the steps below to update the FCM API key:

1. Navigate to _Settings_ > _Engage_ > _Mobile Push_. 
2. Update the valid FCM API key as it is displayed in your Firebase project. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fbb0429-FAQ_FCM_Credentials.png",
        "FAQ_FCM_Credentials.png",
        972
      ],
      "sizing": "100",
      "border": true
    }
  ]
}
[/block]


For more information, refer to [Find Your FCM Sender ID & FCM Server API Key](https://developer.clevertap.com/docs/find-your-fcm-sender-id-fcm-server-api-key).

## FCM Token Invalid

The FCM token is not linked to any device that has your app. Since the token is not a valid one, notifications will not be delivered. Check the format of the FCM project number and registration token you pass on to CleverTap.

For more information, refer to [Troubleshooting Push Notifications](https://developer.clevertap.com/docs/troubleshooting-push-notifications).

## FCM Error

This is a Firebase (Android) error. The FCM error is not part of the standard published list and is sometimes incorrectly identified as an Android bug.

## FCM Not Registered

Most likely, the users have uninstalled the app from their device. One of the common non-technical errors is _Undelivered due to App Uninstall_ in campaign reports. This error occurs when the users uninstall your app while you are trying to reach them via a push notification.

The _FCM Not Registered_ error occurs in two scenarios:

- When the users have uninstalled your app and you are trying to schedule a push notification to them.
- When users have cleared the device cache memory, which in turn removes the token from the device.

## FCM Mismatch Sender ID

An FCM sender ID mismatch occurs when the sender ID entered in the CleverTap dashboard under _Push Notification_ settings does not match with the sender ID in the FCM project for your app created on Firebase.

There are three places where these sender ID/server keys have to be matched. You must match the sender ID/server keys at the following three locations:

- App-level which registers token with the said FCM sender ID mentioned.
- In the CleverTap dashboard.
- FCM project.

If you have checked the sender ID for mismatch and the error still persists, check the following: 

- Does the app build and the CleverTap account contain mismatched sender IDs?
- Do you have multiple Firebase projects?
- Do you have multiple Platform IDs if your app is using two Firebase projects?

# Push Notification Errors in iOS

 \##APNS Device Token Does Not Match The Specified Topic 

_Apple Push Notification_ service (APNs) returns this when the device token does not match the specified topic.

In the context of CleverTap, you get this error when you try to send the notification with a wrong certificate. Check that you are using a production certificate for the production environment to avoid unsatisfactory configurations.

Check the provisioning profile used to deploy the app and send the device token to the CleverTap dashboard. To avoid this error, the _App Bundle ID_ of the provisioning profile and the CleverTap push certificate (p12 certificate) must match.

## APNS Unregistered

The _Push_ notification delivery to the target has failed as the device token is inactive for the specified topic. Since the device token is not valid/inactive, nothing can be done that will deliver the notification unless the user installs the app again.

## APNS Topic Disallowed

The topic is currently the bundle identifier of the target application on an iOS device. The _APNS Topic Disallowed_ error appears when you specify the incorrect _App Bundle ID_ in the _Account Settings_. 

For more information, refer to [Registering Your App with APNs](https://developer.apple.com/documentation/usernotifications/registering_your_app_with_apns) in the Apple documentation.

To resolve this error, check the value of the _App Bundle ID_ and _APNs push mode_ you have configured in the CleverTap Dashboard under _Push Settings_.

## APNS Temporarily Blacklisted

You are temporarily blacklisted from sending push notifications to the device which can be due to sending bad tokens. The push notification will not be delivered for some duration.

## APNS Failed Delivery 

The notification to the device sent from CleverTap failed to deliver due to either of the following reasons:

- The app was uninstalled and the token is no longer valid.
- You have sent too many back-to-back notifications very quickly to the same device.

If the user has uninstalled the app, not much can be done to deliver the notification.

For more information, refer to [Handling Notification Responses from APNs](https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/handling_notification_responses_from_apns) in the Apple documentation.

## APNs Bad Device Token

The push notification delivery to the target device has failed due to an invalid token. The APNs bad device token error occurs when there is a mismatch between the APNs push mode on your app and the CleverTap dashboard. 

For example, you have set the APNs push mode in your app to _development_ stage and in the CleverTap dashboard, you have set up to _production_ stage. 

To check your CleverTap dashboard APNs push mode, navigate to _Settings_ > _Engage_ > _Mobile Push_ > _iOS_.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4110924-New_final_Push_Notification_iOS_API_Key.png",
        "New final Push Notification iOS API Key.png",
        939
      ],
      "border": true
    }
  ]
}
[/block]


# Campaign Errors

## SMS Errors

An SMS error is a common campaign error that occurs while scheduling the SMS campaign. The SMS error appears if the SMS service provider’s endpoint is unavailable. It is applicable to generic integrations and MSG91 (SMS provider).

The SMS error shows the following message: 

"Error java.net.SocketTimeoutException: Read timed out for message." It is referred to as the "SocketTimeoutException" error.

An SMS error displays when CleverTap sends the SMS payload to the SMS provider’s endpoint, but it does not get an acknowledgment within 15 seconds. 

You can view the errors within the campaign reports under the _Error_ section. The SMS error appears under the _Technical Errors_ category.

> 📘 Note
> 
> The issue generally means a socket timeout exception. Sometimes, it can also mean a connection request exception.

For other integrated vendors, we have the following equivalent errors: 

- Exotel server error
- Twilio server error
- Gupshup server error
- Netcore service error
- Nexmo SMS error

## Web Push Unsubscribed

The error "BrowserUnsubscribed" appears after your app users unsubscribe themselves for web push notifications from Chrome browser settings. 

When you try to engage these unsubscribed users through web push, the "BrowserUnsubscribed" error appears.

## Enabling Push Impressions

To enable _Push impressions_, follow the steps below:

1. Go to _Settings_ > _Schema_ > _Events_.
2. Search for _Push Impressions_, then click on the vertical ellipsis.

![](https://files.readme.io/ebf8ae7-Push_Impression_event_FAQ.png "Push Impression event FAQ.png")

3. Click on **Setup push impressions**.
4. Click on **Save** to enable the option.

## Daily Limit Exceeded

While creating a recurring push campaign, you can set the daily limit. For example, you can set a daily send limit to 10,000 per day after which you get a _Daily limit Exceeded_ error. You can also set an overall cap limit to 1,00,000 users after which the campaign will stop.

You would generally set a daily limit in a triggered campaign where you are using a live segment. These campaigns are triggered based on an event and therefore, you would want a daily limit for your campaigns. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7583368-New_final_Campaigns_per_day.png",
        "New final Campaigns per day.png",
        1385
      ],
      "border": true
    }
  ]
}
[/block]


You can set the campaign limits within the _Who_ section while creating the campaign.

## Per Run Limit Exceeded

The _Per Run Limit_ is a limit enforced on the number of users that are sent in one campaign run. For example, you can set a maximum segment limit to 100000 users and the campaign stops running after the set limit for each run.

You see the _Per Run Limit Exceeded_ error when the campaign stops running after the number of qualified users exceeds the set limit. 

You would generally set a per run limit for past behavior and custom list segments. This is because the campaign is sent to all the qualified users based on their past actions. Therefore, you would want a per run limit for these campaigns.  

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4906675-New_final_Campaigns_per_run.png",
        "New final Campaigns_per_run.png",
        1388
      ],
      "sizing": "100",
      "border": true
    }
  ]
}
[/block]


You can set this maximum segment size from the _Who_ section while creating the campaign.

## Q. Why is the reachability for my campaigns so low?

When you create a segment, you can view the reachability of this segment across all channels such as, _Web Push_, _Mobile Push_, _SMS_, _Email_, and _Audiences_. This helps you to check the reachability of your campaigns even before you create them.  

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/742acc4-segment_rechability.gif",
        "segment_rechability.gif",
        1438
      ],
      "border": true
    }
  ]
}
[/block]


![](https://files.readme.io/2d7f417-New_final_Segment_Reachability.png "New final Segment Reachability.png")

Some of the reasons that may affect your _Mobile Push_ reachability include:

- Token Not Present: One of the key reasons for low reachability is because the push token is not available in the user profile.
- User Unsubscribe: The user may have unsubscribed from your app and does not want to receive push notifications. 
- Token Not Generated: The token did not generate on the first app launch.
- App Uninstall: User has uninstalled the app.

## Q. How does the _User DND Set_ error occur?

The _User DND Set_ error occurs when you qualify users for a campaign even though they have unsubscribed on the target device. This error informs you that these users have been passed into the error bucket. 

## Q. What is the _Frequency Caps Exceed_ error? 

The _Global Frequency_ feature restricts the maximum number of messages you can schedule each day for your user and across different channels.

Go to _Settings_ > _Setup_ > _Campaign limits_ to cap the frequency for various channels. 

From this page, you can define the number of messages you want to send to each user in X number of days. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fc18f57-New_final_Previous_Campaigns_global_frequency.png",
        "New final Previous Campaigns_global_frequency.png",
        945
      ],
      "sizing": "100",
      "border": true
    }
  ]
}
[/block]


You can also specify the _Dwell time_ which is the gap you want to keep between two messages, and _Throttle_ which controls the flow of your messages. 

For more information on dwell time, refer to [Dwell Time Between Messages](https://docs.clevertap.com/docs/messaging-frequency-caps#section-dwell-time-between-messages).

For more information on throttling, refer to [Throttle](https://docs.clevertap.com/docs/messaging-frequency-caps#section-throttle).

Now when you create a campaign and you want to disable the _Global frequency limit_, clear the _Global Campaign Limit_ option under the _Who_ section. The _Global Campaign Limit_ is enabled by default.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/17c411a-New_final_Campaigns_global_campaign_limits.png",
        "New final Campaigns_global_campaign_limits.png",
        1377
      ],
      "border": true
    }
  ]
}
[/block]


# Dashboard Errors

 \##Q. How can I upload a CSV file from the dashboard?

You can bulk upload user profiles using the CSV Upload feature. You can also use this feature to add or update information for existing user profiles.

Follow the steps below to upload the CSV file in your CleverTap dashboard:

1. Login to your CleverTap account, and then click the _Settings_ button.
2. Click on the **CSV Uploads** button.
3. Click the **Import new profiles from CSV** button.
4. Select the CSV file from your computer, and then click the **Upload** button.
5. Enter a name for the upload.

Your CSV upload is processed in near real-time. After the uploaded CSV is processed, the status for that upload is changed to _completed_.

For more information on CSV upload, refer to [CSV Upload](doc:csv-upload).

## Q. How can I delete the events data from the dashboard without discarding events?

You can simply reset the DRP for each event. All the event data beyond the selected date range is discarded. 

For example, if you set the DRP of an event to 12 months, we will store the data for the past 12 months. All the data prior to the 12 months are deleted. You can optimize your container and avoid flooding it with too much data.  

Follow these steps to adjust the DRP for each event:

1. Go to _Settings_ > _Schema_ > _Events_.
2. Click on the vertical ellipsis of the event for which you want to adjust/reduce the DRP.
3. Click **Set DRP**.
4. Choose the storage time accordingly.
5. Click **Save**.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a23f436-New_final_Settings_DRP_Limit.png",
        "New final Settings_DRP_Limit.png",
        1163
      ],
      "border": true
    }
  ]
}
[/block]


> ❗️ Note
> 
> Analyze your data before reducing the DRP. Only remove the data that will not affect your campaigns. The maximum reduction in data DRP is up to three months.

# Events and User Profiles

## Q. How can I export data from CleverTap?

You can export the data from CleverTap using one of the three methods below:

- S3 Export (AWS) -  You can export your event and profile data in the AWS S3 bucket using CleverTap Data Exports. For more information on using our data export, refer to [Data Export to AWS S3](doc:data-export-to-aws-s3).

- Export via API - You can export your events and user data with our APIs. For more information, refer to [API Overview](https://developer.clevertap.com/docs/api-overview).

- Find people - You can download the profile data directly from the CleverTap dashboard through the _Find People_ page with the following steps:

1. Navigate to _Segments_ > _Find People_.
2. Define the criteria that you want to export, then click **View Details**.
3. Click on the download icon below _Total users_ to initiate the export.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e0b238d-Final_new_FAQs_Events_and_Profiles_Export_data.png",
        "Final new FAQs_Events_and_Profiles_Export_data.png",
        1167
      ],
      "border": true
    }
  ]
}
[/block]


# Webhooks

## Q. What is a _Webhook Dispatched Failed_ error?

The _Webhook Dispatched Failed_ error occurs when CleverTap server does not receive a "200 OK" response. A "200 OK" response is an acknowledgment from the REST API server that the API request was received successfully. 

An error can occur in either of the three scenarios:

- When CleverTap sends the payload to your endpoint and we do not receive a "200 OK" response after retrying 3 times after a wait of 15 seconds. 
- When CleverTap sends the payload and your endpoint health is down.
- When you may receive the payload at your endpoint but not send a "200 OK" response to CleverTap server within the timeout frame of 1 second. CleverTap displays a _Webhook Dispatched Failed_ error in this case.

As a best practice, we recommend to queue the payload at your end and provide us a "200 OK" in response.

# Identity

## Q. How does Clevertap calculate unique users from the dashboard?

CleverTap identifies and calculates users via multiple steps.

### Creation of a Profile

A user profile is created when a user installs an app and the CleverTap SDK is initialized. 

For example, a user installs the app in device 1 and an anonymous profile A is created. After the user logs in to the app, all the user data is updated to the user's profile, and the profile is now marked as identified.

### Merging of Profiles

If the user installs the app on another device, that is device 2, then another anonymous profile is created, say Profile B.

For example, when the user logs in from device 2, then the profile B is then merged with Profile A.  
All the events from device 2 after the user login are now pushed to Profile A.

### Profiles After Merging

When we run a query on the dashboard for any pre-login event, the exact number of events are displayed; however, CleverTap still counts both profiles. This means the count of users for the same event will be 2 (Profile A and Profile B). 

We determine all the possibilities and perform a best-case scenario to show all the events for the same user, which is Profile A. The anonymous profile is displayed in grey color. 

The events before login are not mapped again to the profile A. They are maintained on the anonymous profile.

## Q. What is a _Duplicate Platform ID_ error?

The _Duplicate Platform ID_ error occurs in one of the following scenarios:

- When a single token is assigned to multiple profiles and both the profiles qualify for the campaign. CleverTap sends the notification to the profile that qualifies first, and the other profile is marked as a _Duplicate Platform ID_.
- When the same mobile number is assigned to multiple profiles and they qualify in your campaign. Only one profile receives the notification, and the other profiles are marked as a _Duplicate Platform ID_.

# Settings

## Q. What is CleverTap DRP?

The CleverTap DRP stands for data retention policy which is the duration for which you want to store your data with CleverTap. The CleverTap DRP is only applicable for events and user profile data. 

The data retention policy for user profile includes identifiers, system properties, and custom properties. The data retention policy for user profiles can store a current snapshot of a user profile forever. 

However, the data retention policy for events includes system and custom events. The data retention policy for events depends on both the customer plan type and the setting defined in the CleverTap dashboard.

If you want to check the DRP of all the events and user properties related to your account, navigate to _Events and User Properties_ under the _Settings_ section. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/083ef3f-settings_event_storage_DRP.png",
        "settings_event_storage_DRP.png",
        1435
      ],
      "border": true
    }
  ]
}
[/block]


DRP works on the concept of a rolling window and the default DRP is set to two months. For example, if DRP was set on January 1, 2000, then the data will be available until March 1, 2000. After this March date, the data will be dropped and will not be available.

Refer to the following table to understand DRP by different plan type:

[block:parameters]
{
  "data": {
    "h-0": "Plan Type",
    "h-1": "User Profile DRP",
    "h-2": "Event DRP",
    "h-3": "Can Modify Event DRP",
    "0-0": "Free Plan",
    "0-1": "Current Snapshot Stored Forever",
    "0-2": "60 days for all events. This account has a limitation of 100M events. If the 100M max event limit is hit before the 60 day DRP, events will be deleted starting with the oldest event first.",
    "0-3": "No",
    "1-0": "Business Plan",
    "1-1": "Current Snapshot Stored Forever",
    "1-2": "Automatically set to the maximum DRP of 10 years for all events.  \nWhen an event surpasses the DRP, the oldest event is be deleted first.",
    "1-3": "Yes, you can update the DRP for each event type. The minimum DRP that can be set is 3 months.",
    "2-0": "Enterprise Plan",
    "2-1": "Current Snapshot Stored Forever",
    "2-2": "Automatically set to the maximum DRP of 10 years for all events.  \nWhen an event surpasses the DRP, the oldest event is be deleted first.",
    "2-3": "Yes, you can update the DRP for each event type. The minimum DRP that can be set is 3 months."
  },
  "cols": 4,
  "rows": 3,
  "align": [
    "left",
    "left",
    "left",
    "left"
  ]
}
[/block]


# CSV Uploads

CSV uploads - identity passed as _Identity_.

Uploading your historical user data via CSV is quick and simple. However, note the following key pointers before uploading your user data via CSV: 

- The identity field must be defined as _identity_ with a lowercase _i_ and not _Identity_.
- The _identity_ field is a mandatory column. 
- Check that your CSV complies with the CSV standards, otherwise the upload will be denied.
- You can download the sample CSV file for a quick check from the _Settings_ section under _CSV uploads_.

Below is a sample CSV:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/61b074a-Identity_CSV_Uploads.png",
        "Identity_CSV_Uploads.png",
        1298
      ],
      "border": true
    }
  ]
}
[/block]


## New FAQs

# Email

## Q. How do I find IPs to send out emails, webhooks, SMS, and push notifications?

You can find the IPs for your region such as, _In_, _Sg_, and _Eu_ under _Settings_ > _Integration_ > _Push Notification_. The IPs are only visible under _Push Notifications_; however, these are the same IPs used for all the engagement channels. The IPs in the _Integration_ setup of the new dashboard is visible under _Settings_ > _Engage_> _Channels_ > _Mobile Push_ > _FCM credentials_. Click on **FCM credentials** to expand it and you can see the IPs on the right.

## Q. How do you handle unsubscribe and bounce for callbacks, such as Mandrill or SendGrid?

CleverTap must receive notification for any email that is classified as bounced,  rejected, or user unsubscribed. We do not attempt any further deliveries to mailboxes. 

For more information, refer to [Sendgrid Bounces, Rejections, and Unsubscriptions](https://docs.clevertap.com/docs/sendgrid#section-step-2-bounces-rejections-and-unsubscriptions) and [Mandril Bounces, Rejections, and Unsubscriptions](https://docs.clevertap.com/docs/mandrill#section-step-2-bounces-rejections-and-unsubscriptions).

A service provider tracks any user unsubscribes using the unsubscription link in your email. The service provider then sends this information to CleverTap through the callback URL. 

The communication preference for users is marked as false (MSG_Email=False).  
The hard bounce and unsubscribed users both fall under unsubscription. Follow the steps below to find the number of users who have unsubscribed via email:

1. Go to _Segments_ > _Find People_. 
2. From the _Display_ common properties, select _Reachability_ > _Unsubscribed_ > _Yes_.

## Q. How do you annotate an email?

Email annotations in the _Promotions_ tab bring email messages to life with images, deals, expiration dates, and more. The email annotation can be performed in the drag-and-drop email editor and also in the custom HTML email editor.

Use the <meta> tag in the drag-and-drop editor to annotate an email.  Below is the sample code that can be used in the HTML block of the drag-and-drop editor:

```html
<p>
<div itemscope itemtype="http://schema.org/Organization">

<meta itemprop="logo" content="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png" />

</div>

<div itemscope itemtype="http://schema.org/DiscountOffer">

<meta itemprop="description" content="40% off" />

<meta itemprop="discountCode" content="DISCOUNTCODE" />

<meta itemprop="availabilityStarts" content="2020-03-20T08:00:00-07:00" />

<meta itemprop="availabilityEnds" content="2020-03-21T23:59:59-07:00" />

</div>

<div itemscope itemtype="http://schema.org/PromotionCard">

<meta itemprop="image" content="https://gmail-ads-markup-test.sandbox.google.com/sample.png" />

</div> This is metadata in HTML block of drag and drop editor</p>
```

For custom HTML implementation, refer to [Get started: How to annotate your email](https://developers.google.com/gmail/promotab/overview) in the Google documentation. The _Promotions_ tab capability works in custom HTML with both inline microdata and the script tag.

When you test this feature, be aware of the following:

- Check that the target audience email addresses are not GSuite emails.
- The availability start date must be far off from the end date. If the values of the start date and end date are closer to the current date, then the mail is most likely to appear in the _Top Picks_ of the _Promotions_ tab.

## Q. How do you add custom fonts in email?

You need the CleverTap custom HTML builder for your email campaigns.

You can add custom fonts to emails by adding a link tag to the header of your email HTML. It means the font must be hosted somewhere on the internet. Below is an example:

```html
<html>
<head>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css" />
</head>
<body>
<h1 style="font-family:'Roboto'">Test text</h1>
</body>
</html>
```

Custom fonts may not be supported by all email clients. If you are adding a custom font to emails, you may also want to specify fallback fonts. This ensures the latter font is picked up if the first font is unavailable. 

Below is an example:

```html
<h1 style="font-family: Lato, 'Lucida Grande', Tahoma, Sans-Serif;">Welcome</h1>
```

## Q. What does the _Do not stack on mobile devices_ mean?  

Do not stack on mobile devices alerts you it will disable the resizing and repositioning of the content per the device screen width. 

**With Stacking on Mobile**

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8ed477f-campaigns_email_Stack_images.png",
        "campaigns_email_Stack_images.png",
        1080
      ],
      "sizing": "100",
      "border": true
    }
  ]
}
[/block]


**Without Stacking on Mobile**

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/de9274d-campaigns_email_Not_Stack_images.png",
        "campaigns_email_Not_Stack_images.png",
        1080
      ],
      "sizing": "100",
      "border": true
    }
  ]
}
[/block]


## Q. How do you add a GIF file in an email?

You can add a GIF file using the content field image or custom HTML by following the steps below:

1. Select the _New Email with drag and drop_ template. 
2. From the _Content_ tab, click **Image**. 
3. Drag and drop the image icon in the email body. 
4. Click **Browse**.

![](https://files.readme.io/5f1ef5d-New_final_GIF_file_Browse.png "New final GIF file Browse.png")

4. Click **Upload** and select your GIF file.
5. In the _File manager_, find your GIF file and click **Insert**.

![](https://files.readme.io/75a7d1b-New_file_GIF_file_Upload.png "New file GIF file Upload.png")

> 📘 Note
> 
> - Images/GIFs must be less than 5 MB. However, we recommend the media must be less than 1 MB for optimal results. The media may not load in user's inbox because all your users may not have a high-speed internet connection.
> - The media formats supported are JPEG, GIF, and MP4.

## Q. How do I send a test email notification?

To send a test email notification from the _What_ section in the email campaign, navigate to _Sender details_ >  _More_ > _Send test email_. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f7cf154-campaigns_email_test_mail.png",
        "campaigns_email_test_mail.png",
        1443
      ],
      "border": true
    }
  ]
}
[/block]


## Q. Can I integrate an email provider that is not listed in documents?

Yes. You can use Generic SMTP to integrate any email provider of your choice. For more information, see [Generic SMTP](https://docs.clevertap.com/docs/generic-smtp).

# Push Notifications

## Q. Why does the image not render in push notifications for Android?

The image rendering in a push notification is determined by three factors:

1. Image size - There is no size limit as long as there is a stable internet connection; however, if there is an unstable internet connection, the chance of failure when downloading images is higher, therefore smaller size images are recommended. 
2. User's internet connection - The push is only rendered with the title and message if it is unable to download the image within around 10 seconds. 
3. CDN (Content Delivery Network) throughput - Check that your CDN for hosting the images is scalable. This is because the OS downloads the image every time a push is sent to a user. For example, if your user base is 5 million users, then you must be able to scale the CDN to support push notifications for this user base. 

## Q. Why does the image not render in push notifications for iOS?

To render the image push notification for iOS, you must enable the rich media notification in iOS. You can enable _Rich Push Notifications_ by using a notification service extension. This is a separate and distinct binary embedded in your app bundle. 

To enable the notification service extension, refer to [UNNotificationServiceExtension](https://developer.apple.com/documentation/usernotifications/unnotificationserviceextension) in the Apple documentation.

## Q. Why am I receiving blank push notifications? 

This may happen if you are custom handling/custom rendering the push notifications and enabled the uninstall tracking. You need to check for the following:

- The push notifications are not handled by CleverTap SDK and the handling is performed through your custom code. This custom code must read the payload defined by CleverTap and fetch the _Title_, _Message_, and other parameters using the keys mentioned in the payload.

- If the custom code is unable to understand the payload defined by CleverTap, then the push notifications are displayed without a message.

- Below is a sample payload for Android that can help to identify the keys and their respective values  for custom push rendering:

```json
{
wzrk_acct_id=CleverTap_Account_ID, 
custom key=custom value, //custom key values (optional)
wzrk_acts=[
{"l":"Action button 1",
"dl":"deep link for action button 1",
"id":"action id of the action button 1","
ico":"Icon resource identifier for action button 1"}
], 
nm=the message of the push, //Message text
nt=title of the push, //Title text
pr=max, 
ico=large icon url, 
wzrk_pivot=wzrk_default, 
wzrk_sound=Custom sound file name, 
wzrk_cid=123456, //Notificaiton channel id 
wzrk_nms=Summary text field, // Summary text
wzrk_rnv=true, 
wzrk_ttl=1586148291, //Time to live in epoch
wzrk_push_amp=false, 
wzrk_bc=badge icon, 
wzrk_bi=2, 
wzrk_bp=image URL, 
wzrk_ck=collapse notification, //Collapse key
wzrk_dl=deep link url here, 
wzrk_dt=FIREBASE, 
wzrk_id=0_0, 
wzrk_pn=true, 
wzrk_st=subtitle //Subtitle text
}
```

- Also, CleverTap sends a silent push notification (blank push) to track _App Uninstalls_ if _Uninstall_ tracking is enabled on the CleverTap dashboard. If you are custom handling the push notifications, you are parsing the payload by yourself and rendering the notifications on the device using your own method, you must check for the `nm` or `nt` tags. These tags in the payload of the push hold the title and message of the push notification. If these tags are empty, then the push must not be rendered. The code must identify the silent push notification and the normal push notification.

- If the above is not implemented, then the users will get blank push notifications around midnight when the _App Uninstall_ sweep runs on CleverTap.

## Q. Why are push impressions not raised?

Check that the push impression event is enabled with the following steps:

1. Go to _Settings_ > _Schema_ > _Events_.
2. Search for _Push Impressions_, then click on the vertical ellipsis.

![](https://files.readme.io/ebf8ae7-Push_Impression_event_FAQ.png "Push Impression event FAQ.png")

3. Click on **Setup push impressions**.
4. Click on **Save** to enable the option.

Check the SDK version used for Android and iOS. The _Push Impression_ event feature is available from 3.5.1 SDK version for Android and for iOS, it is v3.7.1.

For iOS, you must also implement an API in your app. For more information, refer to [Rich Push Notifications](https://developer.clevertap.com/docs/rich-push-notifications). For Android, once your app is on SDK v3.5.1+, the push impression statistics will start showing for qualified users on a push notification campaign because the feature is already enabled in your event settings.

For more information, refer to [Custom Android Push Notifications Handling](https://developer.clevertap.com/docs/android#section-custom-android-push-notifications-handling).

## Q. What is the format of the payload of the push notification for Android?

Below is an example payload for Android: 

```json
{
  "wzrk_acct_id": "CleverTap_Account_ID",
  "custom key": "custom value",
  "wzrk_acts": [
    {
      "l": "Action button 1",
      "dl": "deep link for action button 1",
      "id": "action id of the action button 1",
      "ico": "Icon resource identifier for action button 1"
    }
  ],
  "nm": "the message of the push",
  "nt": "title of the push",
  "pr": "max",
  "ico": "large icon url",
  "wzrk_pivot": "wzrk_default",
  "wzrk_sound": "Custom sound file name",
  "wzrk_cid": "Notification Channel ID",
  "wzrk_nms": "Summary text field",
  "wzrk_rnv": true,
  "wzrk_ttl": 1586148291,
  "wzrk_push_amp": false,
  "wzrk_bc": 1,
  "wzrk_bi": "badge_icon",
  "wzrk_bp": "image URL",
  "wzrk_ck": "collapse notification",
  "wzrk_dl": "deep link url here",
  "wzrk_dt": "FIREBASE",
  "wzrk_id": "0_0",
  "wzrk_pn": true,
  "wzrk_st": "subtitle"
}
```

The above payload is received as bundle data and JSON is only for representation purposes.

Below are the keys for the push notification:

| Key           | Description                                                                                                     |
| :------------ | :-------------------------------------------------------------------------------------------------------------- |
| wzrk_acct_id  | CleverTap account ID                                                                                            |
| custom key    | Any custom key the user can add                                                                                 |
| wzrk_acts     | Action button payload                                                                                           |
| nm            | Notification message                                                                                            |
| nt            | Notification title                                                                                              |
| ico           | Icon resource identifier for an action button                                                                   |
| wzrk_pivot    | Variant A or B of A/B campaign                                                                                  |
| wzrk_cid      | Notification channel ID                                                                                         |
| wzrk_nms      | Summary text                                                                                                    |
| wzrk_rnv      | A flag to raise notification viewed event. If present and not empty, it will raise a notification viewed event. |
| wzrk_ttl      | Time to live (TTL)                                                                                              |
| wzrk_push_amp | Push amp                                                                                                        |
| wzrk_bc       | Badge count                                                                                                     |
| wzrk_bi       | Badge icon                                                                                                      |
| wzrk_bp       | Image URL                                                                                                       |
| wzrk_ck       | Collapse key                                                                                                    |
| wzrk_dl       | Deep link URL                                                                                                   |
| wzrk_dt       | Service used to send the message (e.g. FIREBASE)                                                                |
| wzrk_id       | Campaign ID                                                                                                     |
| wzrk_pn       | Push notification. If present, this notification is sent from CleverTap.                                        |
| wzrk_st       | Subtitle                                                                                                        |
| wzrk_pid      | Refers to Campaign ID with the date of the campaign creation.                                                   |

## Q. What is the format of the payload of the push notification for iOS?

Below is an example payload for iOS: 

```json
[CleverTap]: Handling notification: {
  "W$dt" = APPLE;
  "W$id" = "1591036839_20200601";
  "W$pivot" = "wzrk_default";
  "W$rnv" = 1;
  aps =   {
    alert =     {
      body = Testing;
      title = Campaign;
    };
    "mutable-content" = 1;
    sound = default;
  };
  "ct_mediaType" = image;
  "ct_mediaUrl" = "https://formpicture.com/photo.png";
  "wzrk_acct_id" = "TEST-Z48-Z75-785Z";
  "wzrk_dl" = "https://www.google.com";
}
```

Below are the keys for the push notification:

| Key             | Description                             |
| :-------------- | :-------------------------------------- |
| W$dt            | Notification service                    |
| W$id            | Campaign ID_date                        |
| W$pivot         | Variant                                 |
| W$rnv           | Raises notification viewed              |
| body            | Notification message                    |
| title           | Notification title                      |
| mutable-content | Value is 1 if enabled and 0 if disabled |
| sound           | Notification sound (default is OS)      |
| ct_mediaType    | Type of media                           |
| ct_mediaUrl     | Media link                              |
| wzrk_acct_id    | Account ID                              |
| wzrk_dl         | Deeplink URL                            |

## Q. How do you add a small icon in the push notification? 

Sometimes, the small icon may not appear in the notification even if you add the small icon in the Android manifest file. 

To set a custom notification icon (only for the small icon), add the following metadata entry in your AndroidManifest.xml:

```xml
<meta-data
    android:name="CLEVERTAP_NOTIFICATION_ICON"
    android:value="ic_stat_red_star"/> <!-- name of your file in the drawable directory without the file extension. -->
```

If the small icon still does not appear, check the following in your Android project: 

- Your app must have a small icon file in your drawable resources.
- You are using a PNG file and not a JPEG file for the small icon. 
- The background in your icon file is transparent. 
- The small icon image must be monochrome without alpha channels (RGB colors) and with 60-70% opacity such as, white pixels on a transparent backdrop.

For more information, refer to [Set the Small Notification Icon](https://developer.clevertap.com/docs/android#section-set-the-small-notification-icon) and [Create App Icons with Image Asset Studio](https://developer.android.com/studio/write/image-asset-studio) in the Android documentation.

## Q. What is an _Action ID_ in Android? 

For Android push notifications, you can add up to three action buttons. You can define the title, deep-link, and the action ID of each button. 

The application uses the value of the action ID to identify the button that was clicked.

The default behavior (i.e., when closing the notification is handled using CleverTap SDK) for clicking on the action button is that the user is directed to the deep link or application and the notification is dismissed automatically.

You can handle the closing of the notification yourself at the code level and only then, your app can get the action ID values. Based on the action ID value of the action button clicked, you can perform any operations as per your requirement.

For more information on Android, refer to [Action Buttons](https://developer.clevertap.com/docs/android#section-action-buttons).

For iOS:  
You must implement a category for iOS. You can enter the name of the category while creating the campaign. Each category must be registered with the app. Each such category is associated with actions the user can perform when a notification of rich media type is delivered. Each category can have up to four actions associated with it, although the number of actions actually displayed depends on the type of notification delivered. This enables users to take multiple actions for the notification. For example, a single media push notification can have two buttons such as, _Buy Now_ and _Save for Later_.

For more information on iOS, refer to [Advanced iOS Push Notifications](https://developer.clevertap.com/docs/ios#section-advanced-ios-push-notifications).

## Q. Why do I receive the same message body twice in a push notification?

If you are custom handling your push notifications and using CleverTapAPI.createNotification() and your own function (for example: `sendNotification()`) for displaying notifications in the custom message listener service, then the message may be sent twice. Remove the `sendNotification()` method and use the `CleverTapAPI.createNotification()` method only. The `CleverTapAPI.createNotification()` method creates a notification that is handled via CleverTap.

> 🚧 Note
> 
> If you want to display the notification using your own function, then remove the call to the CleverTap SDK for displaying the notification. This ensures that multiple calls are not made to display a push.

## Q. Why do my _Notification Clicked_ and _Viewed event_ rates show as zero?

Check if you are [custom handling](https://developer.clevertap.com/docs/android#section-custom-android-push-notifications-handling) push notifications. Follow the steps below for custom handling:

1. Enable the event toggle from _Settings_ > _Events and User properties_ > _Push Impressions_ (Only for SDK version 3.5.1 and above).

2. Add the following line of code after you render the notification: 

```text
CleverTapAPI.getDefaultInstance(this).pushNotificationViewedEvent(extras);
```

3. For _Notification Clicked_, add the following line under intent: 

```text
CleverTapAPI.getDefaultInstance(application).pushNotificationClickedEvent(activity.getIntent().getExtras());
```

> 📘 Note
> 
> The increase in container usage is directly proportional to the _Notification Sent_ event after this feature is turned on.

## Q. Why do push notifications with images truncate the text in the message?

This is an expected behavior because Android truncates message text with image. The rendered image shares the space leaving less space available for the message text. There is no fixed character limit for the message text. This depends on the device used to view the push notification. If the user device has a small screen resolution, then the message text is cropped after a few words. However, a user may see all the characters on a big-screen resolution.

When creating notifications, bear in mind big text and a big image.

If you want to see the full text (big text) or you want to add the text in multiple lines, then do either of the following:

- Send the notification without an image (big image).
- Custom handle the push notification at your end to support both such as, big text and a big image.

## Q. Why do Android users receive two notifications from the same campaign after integrating Xiaomi Push services?

For a greater chance of delivery success, we send a push notification through both Xiaomi Cloud Push and Firebase Cloud Messaging (FCM) push services. If a message is delivered and rendered through one of these push services, the notification from the other cloud service is suppressed by the CleverTap SDK.

If you are custom rendering the push notifications, then push notifications are being rendered by your custom code, you will have to implement the suppression mechanism at your end.

The mechanism should check if a push notification has already been rendered for the campaign and suppress the payload from another push service. This ensures the user receives only one push notification for a given campaign.

## Q. Why is my push notification campaign running slowly?

If you feel that the push campaigns are executing slowly, then it could be due to either of the following reasons:

- Personalized messages - If personalization is used in the message, then the push notifications will not be sent in batches containing multiple users because the content of the push is different for each user. The push request for each user is made separately and this increases the time to process.

- Throttle - The push campaign can execute slowly as it adheres to the throttle limit that is set for push notifications in the _Campaign Limits_ under _Account Settings_. The throttle limit specified from the dashboard during the campaign creation is considered throughout the lifetime of the campaign. Throttle for existing campaigns is not updated when the global throttle is updated. The new throttle is considered only for the new campaigns.

## Q. What is the recommended image dimension in push notifications with a CTA?

The recommended aspect ratio is 16:9 and the minimum recommended size is 533.33 X 300 pixels. The supported file types are PNG, JPG, and JPEG and the maximum size is 40 kb.

You can adjust the dimensions accordingly. You can also refer to the following link to calculate the aspect ratio: <https://calculateaspectratio.com>.

## Q. Where can I update Xiaomi/Huawei credentials?

After you have an app secret and package name, you must update it on the CleverTap dashboard using the following steps:

1. Click **Settings** from the dashboard.
2. Click **Channels** > **Mobile push**. The push notification setup page displays.
3. Click **Huawei** or **Xiaomi** push notifications and add App secret and package name/App ID.

![](https://files.readme.io/5e6c6f1-New_final_Previous_Campaigns_mobile_push_settings_xiaomi_huwaei.png "New final Previous Campaigns_mobile_push_settings_xiaomi_huwaei.png")

## Q. Will my users get a push notification immediately after their inactive device becomes active?

If the user device is inactive (no Internet or switched off) and the user turns it on again within the time to live (TTL), then the push notification is delivered.

## Q. How can I have a small icon instead of a white square box on the top left screen?

The small icon must be set at the code level in the manifest file. The small icon must be alpha. You can create the icon using the Image Asset Studio tool included in the Android Studio.

For more information, refer to [Set the Small Notification Icon](https://developer.clevertap.com/docs/android#section-set-the-small-notification-icon).

## Q. How can I redirect the users to MWeb when they click the push notification?

To redirect users to MWeb, you can add the URL of the page as a deep link when creating a campaign. The users are redirected to the page specified in the deep link. For example, <https://clevertap.com/>.

## Q. How do you resolve the popup for installing the HMS core app on non-Huawei devices?

This popup appears on non-Huawei devices after implementing Huawei push notifications. To avoid this popup, check for HMS class on all devices and trigger the push registration service only if `HMSclass` is available on the device. For more information, refer to [Preferentially Using HMS for Determination](https://developer.huawei.com/consumer/en/doc/development/Tools-Guides/push-conversion-0000001050060304#EN-US_TOPIC_0000001050060304__section330733914368) in the Huawei documentation. 

## Q. Why do I see 0% push notifications for Xiaomi and 100% for Firebase (FCM)?

The Xiaomi/Baidu/Huawei push notifications may show 0% on campaign stats if all the notifications are delivered through FCM. For a greater chance of delivery success, CleverTap sends a push notification through the Xiaomi/Baidu/Huawei Push and Firebase Cloud Messaging (FCM) push services. If a message is delivered through any one of these push services, then the notification from the other cloud services is suppressed. There is no priority that is defined for the messaging service and there are no changes to the current flow of FCM. This ensures the user receives the push notification only once.

Services that are not integrated are shown as _N/A_. 

## Q. How can I send multiple notifications from the same campaign?

If you select _Send campaign every time the user qualifies_ when creating a campaign, then the user receives multiple notifications from the same campaign.

# Android

## Q. How do I enable the debug mode?

You can enable the CleverTap debug logs by placing the following code in the `onCreate` method in your Java file, such as: 

```java
CleverTapAPI.setDebugLevel(CleverTapAPI.LogLevel.DEBUG); //Set Log level to DEBUG log warnings or other important messages

CleverTapAPI.setDebugLevel(199); //This numerical value in brackets can be anything greater than 5.
```

For more information, refer to [Android Debugging](https://developer.clevertap.com/docs/android#section-debugging). 

## Q. How can I add lifecycle callbacks?

If you have a custom application class, call the `ActivityLifecycleCallback.register(this);` method before the `super.onCreate()` method in your class. 

For more information, refer to [Initialize the CleverTap SDK](https://developer.clevertap.com/docs/android-quickstart-guide#section-step-4-initialize-the-clever-tap-sdk).

## Q. How can I update the location?

CleverTap records two types of geographical information, such as:

![](https://files.readme.io/986d84b-Location_record.png "Location_record.png")

- Unkown -  The city-level information which is tracked by CleverTap using reverse IP methodology to map the user's location, based on the device IP. This information is updated on every _App Launch_. 
- Lat/Long - The latitude and longitude information you pass to CleverTap. The circle you gave selected on the map fetches users based on this latitude and longitude that you pass to Clevertap.

To get the users' city, region, and country on every app launch, allow the CleverTap SDK to collect user locations (which we then collect by reverse-IP lookup via our third-party location provider, MaxMind). 

> 📘 Note
> 
> MaxMind has an accuracy of 70% in India.

Below is how you can enable the location tracking:

- [Device Network Information Reporting in Android](https://developer.clevertap.com/docs/sdk-changes-for-gdpr-compliance#section-device-network-information-reporting-in-android)

```java
cleverTap.enableDeviceNetworkInfoReporting(true);
```

- [Device Network Information Reporting in iOS](https://developer.clevertap.com/docs/sdk-changes-for-gdpr-compliance#section-device-network-information-reporting-in-i-os) 

```objectivec
[[CleverTap sharedInstance]enableDeviceNetworkInfoReporting:YES];
```
```swift
CleverTap.sharedInstance().enableDeviceNetworkInfoReporting(true)
```

## Q. Can I send push notifications from both Firebase and CleverTap in my app?

Yes.  You can mention your own listener service that is implemented In the AndroidManifest.xml file. You can then choose to render the notification either from CleverTap or your own service.  
For more information, refer to [Custom Android Push Notifications Handling](https://developer.clevertap.com/docs/android#section-custom-android-push-notifications-handling).

## Q. Why does CleverTap not capture the device token on the first app launch?

CleverTap may not receive the push token on the first app launch because of the following reasons:

- Not using CleverTap’s token listener service -  Check that your custom token listener sends out a token to CleverTap immediately. The tokens are fetched on every app launch. Since the token is not generated at the first app launch, it is not available when the CleverTap SDK checks for it. The CleverTap SDK then fetches the token from cache on the second app launch. This is a fail-safe in the CleverTap SDK that fetches the token and sends it to CleverTap with the _App Launched_ event.   

Use the following code to enable sending tokens to CleverTap as soon as they are received by your listener. 

```java
CleverTapAPI.getDefaultInstance(this).pushFcmRegistrationId(token,true);
```

- Using Firebase 18 or above -  When you upgrade your Firebase messaging dependency version to 18.0 or greater, you must implement a single service for both Token and Message Listener services to get the token on the first app launch. There is no need to implement separate FCMMessageListenerService and FCMTokenListenerService to get the token on the first app launch.

For more information, refer to [Use FCM Version 18.0.0 and Above](https://developer.clevertap.com/docs/using-fcm-version-1800-and-above).

## Q. What is the correct format for sending a date-time value in Android? 

The date-time values must be passed in the correct format to be considered as date-time value. Pass the property value in either of the following formats for Android:

- new java.util.Date()
- “$D_EPOCH”

# iOS

## Q. Is there an action ID for iOS similar to Android?

The iOS equivalent for action ID is _category_. You can add the name of the category while creating a campaign. Each category must be registered with the app. This category is associated with actions that the user can perform when a notification of rich media type is delivered. Each category can have up to four actions associated with it. The actual number of actions actually displayed for the category depends on the type of notification delivered. Users can perform multiple actions for the notification. For example, a single media push notification can have two buttons such as, _Buy Now_ and _Save for Later_.

For more information, refer to [Advanced iOS Push Notifications](https://developer.clevertap.com/docs/ios#section-advanced-ios-push-notifications).

## Q. Why does the word, _modified_, appear in the title for iOS push notifications?

The word _modified_ displays in push notifications if you enable the advanced option in a campaign. Implement the _Rich Push_ notifications in a future update to address this issue. If you are not using _Rich Push_, then uncheck the advanced option you have selected in the campaign.

## Q. What is the correct format for sending a date-time value in iOS? 

The date-time values must be passed in the correct format to be considered as date-time value. Pass the property value in either of the following formats for iOS: 

- [NSDate date]
- “$D_EPOCH”

## Q. How do I disable IDFA tracking in iOS?

To disable the IDFA tracking, follow the steps below:

1. Check that you have not added the `CleverTapUseIFA` flag in the info.plist file.
2. Remove the _AdSupport_ framework from your build if you have added it in your linked libraries.
3. When submitting your app to the app store, you are asked if your app supports IDFA. Select _No_.

# Web

## Q. Why am I not able to make CleverTap API requests from my website (CORS)?

CleverTap follows the Cross-Origin Resource Sharing (CORS) standard. To adhere to this standard, all the [CleverTap API](https://developer.clevertap.com/docs/api-overview) calls must be made from the server-side.

## Q. What is the correct format for sending a date-time value from the website?

If you want to raise a date-time value for a property from the website, then check that the value is either of the following:

1. JavaScript’s new Date() method

2. “$D_EpochValue”

The values are considered as strings if they are not passed in the proper format.

# In-app

## Q. How do you analyze the CTA button for in-app campaigns?

The data for a number of clicks on each CTA button is available under the _Analytics_ section in the dashboard. 

Follow the steps below:

1. In _Events_, query for the _Notification Clicked_ event filtered by the campaign ID, then in the result, go to _Trend & Properties_.
2. Scroll down to the _Event property_ table and select the event property as "wzrk_c2a" from the dropdown to see a distribution of clicks across the various buttons on that respective email campaign.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fbcfb49-New_final_CTA_Button_Analysis_2.png",
        "New final CTA_Button_Analysis 2.png",
        1163
      ],
      "border": true
    }
  ]
}
[/block]


## Q. Why does the in-app notification give an error FCM payload too large? 

The test in-app is sent within a push notification. The limit for push notification payload as defined by FCM is 4KB, beyond which the notification is not sent.  If the in-app notification has a large HTML code or a heavy size, it shows an error and the test in-app is not sent. 

However, this does not apply to a live campaign because there are no push notifications.  To resolve this error, you can first schedule a live campaign with this HTML for internal users. 

## Q. Why does the in-app campaign not render an API event?

The in-app works for SDK events, such as events raised from the device. There can be delays in the APIs and by design, the in-app is meant to be sent in real-time to the user. Therefore, the in-apps need to be triggered by a mobile SDK event.

## Q. How can one close the in-app notification on the click of a button?

The workaround is to create a button and add the reference of that button to a dummy hyperlink. This closes the in-app notification because the link does not exist, so there is no redirection.

Here is a sample link: wzrk://thisisadummylink

## Q. How do I exclude in-app from the Android activity?

If your application has a splash screen (e.g., logo screen or loading page) displayed on app launch, then the In-App triggered on _App Launch_ would be attempted to be displayed on this screen. As soon as this screen is dismissed, the In-App will be dismissed too.

In such cases, the splash screen must be excluded. Mention the _Activities_ on which you do not want In-App notifications to show in the android:value of the metadata tag in the AndroidManifest.xml file.

```xml
<meta-data
    android:name="CLEVERTAP_INAPP_EXCLUDE"
    android:value="YourSplashActivity1, YourSplashActivity2" />
```

For more information, refer to [In-App Notifications](https://developer.clevertap.com/docs/android#section-in-app-notifications).

## Q. Why do I receive a CleverTap push notification even after sending a test in-app?

An in-app test is always sent like push notification. The entry action (event) does not matter. When you click the _send a test notification_ option, this message, "Touch this notification to open your app and view your view your notification" is sent out as a push notification. When this notification is clicked, the app opens and displays your in-app notification. This is applicable only to a test notification. The live campaign will schedule as usual and show the in-app after a user qualifies (performing the entry event).

## Q. Why can I not see the videos on _Interstitial_ in-app notifications?

The video must meet the following requirements:

- The video must be in MP4 format.
- The video size must be lower than 50MB.
- The dependencies which are required to include audio/video in the in-app notification are included.

Add the following dependencies below in your application’s build.gradle file: 

```groovy
Dependencies {

 implementation 'com.google.android.exoplayer:exoplayer:2.8.4'

 implementation 'com.google.android.exoplayer:exoplayer-hls:2.8.4'

implementation 'com.google.android.exoplayer:exoplayer-ui:2.8.4'}
```

## Q. How do I close an in-app notification automatically after a specific duration?

You can use the set `timeout` function in custom HTML to dismiss the in-app. 

Below is a sample code:

```html
<!DOCTYPE html >
<html id="myClass">
<head>
    <title></title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
</head>
<body style="background: white">
<h1>Test</h1>
<!-- <button style="visibility: hidden;" id = "theSubmitButton" onclick="window.location.href='wzrk://this_leads_to_nowhere'">Click me</button>  -->

<p><button id="theSubmitButton" onclick="window.location.href='wzrk://exit'" style="visibility: hidden;">Click me</button></p>

<p id="demo"> </p>
<script>
   setTimeout(function myFunction() {
       document.getElementById('theSubmitButton').click();
   }, 1000); // Change time for whatever miliseconds required.
   </script></body>
</html>
```

## Q. How do I analyze the CTA button for in-app campaigns?

To view the data for a number of clicks on each CTA button, go to _Analytics_ > _Events_ from the dashboard. Then, follow the steps below:

1. Select the _Notification Clicked_ event and filter it by the campaign ID.  
   Click the **View Details** button. The event details page displays.
2. Click the **Trend & Properties** tab.
3. Scroll down to the _Event property_ table and select the event property as "wzrk_c2a" from the list. 
4. A distribution of clicks across the various buttons on that respective in-app popup campaign displays.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ddcf857-CTA_Wzrk_property.png",
        "CTA_Wzrk_property.png",
        1439
      ],
      "border": true
    }
  ]
}
[/block]


## Q. My in-app shows 0 views even after qualifying multiple users. What could be going wrong?

The in-app notifications require SDK version 3.5.1 and above. The warm-up time for campaign is three to five minutes. Check the following before scheduling an in-app campaign: 

- In-apps require the app to be open and the event must be fired from the mobile SDK. Hence, the in-app campaigns do not work on an event that is triggered via API. 
- There cannot be multiple in-apps running on the same event. The in-app that was created first is displayed, and the other events show 0 views.

## Q. Why does the in-app notification disappear from the user's device in a few seconds?

The in-app notification is dismissed if you display it over the splash/logo screen because the in-app is automatically dismissed when the underlying splash screen is dismissed. Exclude the splash screen to avoid displaying an in-app. 

Add the following meta-data in the AndroidManifest.xml to exclude the splash screen from your in-app notification:

```xml
{code}
<meta-data
android:name="CLEVERTAP_INAPP_EXCLUDE"
android:value="YourSplashActivity1, YourSplashActivity2" />
{code}
```

Add the activities to exclude from in-app notifications in the `android:value` row of the metadata tag.

## Q. Does the in-app message support GIF files?

The CleverTap SDK version 3.3.0 and above supports GIF within the interstitial in-app messages. You also send GIF files in in-app campaigns using a custom HTML.

For more information, refer to [Template Aspect Ratio and Image Size Guide](https://docs.clevertap.com/docs/inapp-campaigns#section-template-aspect-ratio-and-image-size-guide).

## Q. What happens when I run multiple in-app campaigns simultaneously? Do they stack up over one another? 

You can run multiple in-app campaigns at the same time but on different events. If you try to run multiple in-app campaigns on the same event, then the in-app message from the first campaign is rendered. All other subsequent in-app messages from other campaigns are ignored. 

## Q. Can I handle the URL at the client side for in-app campaigns?

This is supported for CleverTap Android SDK version 3.6.1 and above and CleverTap iOS SDK version 3.7.1 and above. It works for the following templates:

- Cover
- Interstitial 
- Half-interstitial
- Header
- Footer

You can add the key-value pair for a button-click in the _What_ section of the campaign creation screen:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ffcc8ae-In-app_client_side.png",
        "In-app_client_side.png",
        656
      ],
      "sizing": "80",
      "border": true
    }
  ]
}
[/block]


You must implement the button-click callback in your [iOS](https://developer.clevertap.com/docs/ios#section-in-app-notification-button-on-click-callbacks) and [Android](https://developer.clevertap.com/docs/android#section-in-app-notifications) apps where you can get these key-value pairs.

## Q. How do I add a Google form in an in-app notification?

You can create surveys inside an in-app campaign using the Clevertap custom HTML feature. You can add the embed HTML code provided by a Google form when you click on a button. 

Below is a sample code:

```html
<html>
<head>
	<title></title>
</head>
<body>
<p><iframe frameborder="0" height="700px" marginheight="0" marginwidth="0" src="https://docs.google.com/forms/d/e/1FAIpQLSeVoF3S7pRJxXvkFLJW_fqRHqtq-ZdLi5HQcQxDRF0ZGqCWfA/viewform?embedded=true" style="padding-top: 25px; max-height: 100%" width="100%">Loading…</iframe></p>
</body>
</html>
```

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d12600e-In-app_embed_html.png",
        "In-app_embed_html.png",
        601
      ],
      "sizing": "smart"
    }
  ]
}
[/block]


The CleverTap SDK supports embedding Javascript code inside custom in-apps. You can write your own HTML code and use it in an in-app.

## Q. How do you add custom fonts in in-app campaigns?

You can use custom fonts in a regular HTML page by importing it in the head tag of the HTML code and then using it in the CSS.

`<head> tag of HTML`

```html
<link href='[PLACE SOURCE URL FOR FONT HERE]' rel='stylesheet' type='text/css'>
  <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Roboto&display=swap" rel="stylesheet">
```

`CSS` 

```css
.sample-class { 
  font-family: '[Name of font]', arial, serif; 
}
font-family: 'Oswald', sans-serif;
```

> 📘 Note
> 
> You must select custom HTML to use your custom font in the in-app campaign.

# SMS

## Q. What is a _Profile not reachable_ error?

The error _Profile not reachable_ occurs whenever the qualified device is not reachable via the selected communication channel. 

Some examples include:

- SMS - The profile does not have a phone number or the user has unsubscribed from SMS communication.
- Push - Device token is not present during the time of the campaign.
- Emails - The user has unsubscribed or the e-mail communication flag has been set to false.  
  The reachability of the user can be checked by checking the communication preferences under the user's profile.

## Q. What is a _Duplicate Profile for the channel_ error?

This error indicates two different profiles have the same credentials such as, phone number, push token, and email (based on the communication channel). The engagement is sent to the first profile and this error is raised for the second profile.

## Q. What is the character limit for SMS?

The limit for a standard SMS is 140- 160 characters after which the remainder of the message is sent as a new SMS.

## Q. Why do some emojis and characters not display in my SMS body?

To resolve this issue, check that your service provider supports sending special characters/emojis in an SMS.

## Q. What are IP addresses that must be whitelisted for sending out the SMS?

You can get the list of IPs from the following setting in the CleverTap dashboard:

1. Go to CleverTap account settings > _Integration_ > _Push Notification_.
2. Whitelist all the listed IPs to send out SMS messages:

- 34.249.27.35
- 34.250.139.131
- 52.209.30.153
- 54.72.72.185

# App Inbox

## Q. When is the _App Inbox_ sent to the user in case of the _Live Segment_ and _Past Behavior_ segment? 

The _App Inbox for Past Behaviour Segment_ is sent on the qualified user's device as soon as the user launches the application. The _App Inbox_ message for _Live User Segment_ is sent as soon as the user performs the event. 

## Q. Can events triggered by API or Web be used to send the _App Inbox_ campaign?

_App Inbox_ requires the user to be present on the application. Therefore, _App Inbox_ campaigns do not work on an event that is triggered via API or web. Additionally, events from an API may not be real-time and hence the campaign is not triggered. 

## Q. Why is there is an option to add a channel ID when sending a test app inbox message, but not while sending messages from a campaign?

A channel ID is not required for sending app inbox notifications. However,  it is required for a test app inbox notification because it is rendered as a push notification on the user's device. It is mandatory to have a channel ID for sending push notifications on Android devices for versions 8 and above.

## Q. Why is the push notification rendered immediately for _Push+App Inbox_ campaigns but not for _App Inbox_ notification?

For app inbox campaigns, once you create the campaign, you must wait for campaign warmup time (5-10 minutes) and then launch the app to get the messages.

The app inbox is not rendered even if you launch the app within the campaign warmup time and you will not be able to receive the same App Inbox further.

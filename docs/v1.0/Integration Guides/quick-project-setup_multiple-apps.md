---
title: "Quick Project Setup with multiple apps"
slug: "quick-project-setup_multiple-apps"
excerpt: ""
hidden: true
metadata: 
  description: "This page must be available only to users who have access to this link."
  image: []
  robots: "index"
createdAt: "Wed Nov 18 2020 12:23:57 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Nov 30 2020 09:11:34 GMT+0000 (Coordinated Universal Time)"
---
Create a project quickly after you log on to CleverTap. You can choose from the following platforms:

- [Android](https://docs.clevertap.com/docs/quick-project-setup#section-setup-your-android-app)
- [iOS](https://docs.clevertap.com/docs/quick-project-setup#section-setup-your-i-os-app)
- [Website](https://docs.clevertap.com/docs/quick-project-setup#section-setup-your-website)
- [API](https://docs.clevertap.com/docs/quick-project-setup#section-setup-api)

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bfe1a41-Online_Signup_project_create.png",
        "Online_Signup_project_create.png",
        578
      ],
      "sizing": "80",
      "border": true
    }
  ]
}
[/block]


You can choose the platform for your app. Select "Native" for native Android and iOS apps. You can also select other hybrid platforms for iOS and Android such as:

- [Cordova](https://developer.clevertap.com/docs/cordova)
- [Unity](https://developer.clevertap.com/docs/unity)
- [Xamarin](https://developer.clevertap.com/docs/xamarin)
- [React Native](https://developer.clevertap.com/docs/react-native)
- [Flutter](https://developer.clevertap.com/docs/flutter-sdk)

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/08183f3-Online_Signup_Account_Integration.png",
        "Online_Signup_Account_Integration.png",
        1189
      ],
      "border": true
    }
  ]
}
[/block]


## Setup App

You can set up the integration for your app from Settings > Project. Alternatively, you can simply select the list from the dashboard top menu click Create New Project.

# Setup your Android app

Follow the steps to set up your Android app.

1. Enter the PlayStore URL for your app. 
2. Integrate the CleverTap SDK. For more information, see [SDK](https://developer.clevertap.com/docs/android-quickstart-guide#section-step-1-install-sdk)

```json
dependencies {
    implementation 'com.clevertap.android:clevertap-android-sdk:3.8.0'
    implementation 'com.google.firebase:firebase-messaging:17.3.3'
    implementation 'com.google.android.gms:play-services-base:16.0.1'
    implementation 'com.android.support:support-v4:28.0.0'
    //Mandatory for CleverTap Android SDK v3.6.4 and above add the following -
    implementation 'com.android.installreferrer:installreferrer:1.0'
    }
// at the end of the build.gradle file
apply plugin: 'com.google.gms.google-services'
```

3. Implement CleverTap dependencies. 

Add the following snippet within the tags in the AndroidManifest.xml file. For more information, see  [Android Manifest XML](https://developer.clevertap.com/docs/android-quickstart-guide#section-step-2-add-your-clever-tap-credentials-in-android-manifest-xml)

```xml
<application
    android:label="@string/app_name"
    android:icon="@drawable/ic_launcher"
    android:name="com.clevertap.android.sdk.Application">
```

Add the following snippet to the same manifest file to allow the CleverTap SDK to access the Internet.

```xml
<!-- Required to allow the app to send events and user profile information ->
<uses-permission android:name="android.permission.INTERNET"/>
<!--Recommended so that CleverTap knows when to attempt a network call -->
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
```

 Add the following snippet to the same file to allow the CleverTap SDK to access the Internet.

```xml
CleverTapAPI clevertapDefaultInstance = CleverTapAPI.getDefaultInstance(getApplicationContext());
```

4. Set up Firebase Cloud Messaging (FCM) to send push notifications using CleverTap.  
   Register the services inside the <application></application> tags of the Android manifest file.

For more information, see [Using FCM version 18.00 and above](https://developer.clevertap.com/docs/using-fcm-version-1800-and-above). 

```xml
<service
    android:name="com.clevertap.android.sdk.FcmTokenListenerService">
    <intent-filter>
        <action android:name="com.google.firebase.INSTANCE_ID_EVENT"/>
    </intent-filter>
</service>

<service
    android:name="com.clevertap.android.sdk.FcmMessageListenerService">
    <intent-filter>
        <action android:name="com.google.firebase.MESSAGING_EVENT"/>
    </intent-filter>
</service>
```

5a.  Setup a notification channel.  You must set a notification channel to send push notification for Android version O and above. For more information, see [Notification Channel](https://developer.clevertap.com/docs/android#section-push-notifications-for-android-o) 

Add the following snippet in the onCreate() method of the application’s MainActivity class to create Android notification channels.

```java
CleverTapAPI cleverTapAPI = CleverTapAPI.getDefaultInstance(getApplicationContext());
cleverTapAPI.createNotificationChannel(getApplicationContext(),"YourChannelId","Your Channel Name","Your Channel Description",NotificationManager.IMPORTANCE_MAX,true);
```

5b. Complete setup. Check that the events and engagement channels are working.

To complete push notification integration and enable advanced settings, go to [mobile push channel](https://developer.clevertap.com/docs/android#section-push-notifications).

6. Test your integration.

To start sending custom events to CleverTap using the Android SDK, call the `pushEvent( )` method with the custom event name you want to track.

Use the following to test [events](https://developer.clevertap.com/docs/android-quickstart-guide#section-step-7-track-custom-events) and [user profiles](https://developer.clevertap.com/docs/android-quickstart-guide#section-step-6-add-information-to-a-user-profile):

```java Test events
cleverTapAPI.pushEvent("Test Event");
```
```java Test user profiles
// Do not call onUserLogin directly in the onCreate() lifecycle method
HashMap<String, Object> profileUpdate = new HashMap<String, Object>();
profileUpdate.put("Name", "Jack Montana");    // String
profileUpdate.put("Identity", 61026032);      // String or number
profileUpdate.put("Email", "jack@gmail.com"); // Email address of the user
profileUpdate.put("Phone", "+14155551234");   // Phone (with the country code, starting with +)
profileUpdate.put("Gender", "M");             // Can be either M or F
profileUpdate.put("DOB", new Date());         // Date of Birth. Set the Date object to the appropriate value first
cleverTapAPI.onUserLogin(profileUpdate);
```

# Setup your iOS app

Follow the steps to set up your iOS app.

1. Enter the AppStore URL for your app. This step is optional.
2. Install the CleverTap SDK.  
   To start integration, install CocoaPods. To integrate the app manually, see [manual integration](https://developer.clevertap.com/docs/ios-quickstart-guide#section-option-b-manual-install). Add the following snippet above in the Podfile and run the Pod install command to begin the installation of the CleverTap SDK.

```text
pod "CleverTap-iOS-SDK"
```

3. Integrate SDK. For more information, see [SDK Integration](https://developer.clevertap.com/docs/ios-quickstart-guide#section-step-4-sdk-integration)  
   Import the CleverTap SDK to the AppDelegate.swift file. Now add `[CleverTap autoIntegrate]` within the application: `didFinishLaunchingWithOptions`: method.This allows the CleverTap class used to track app launches, to receive in-app notifications, and enable deep link tracking.

```text
func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject:AnyObject]?) -> Bool {
    ...
    CleverTap.autoIntegrate()
    ...
}
```

4. Set up push notifications  
   To integrate iOS push notifications and enable advanced settings, go to [mobile push channel setup](https://developer.clevertap.com/docs/ios#section-push-notifications).

5. Test your integration  
   Paste the snippet in the viewDidLoad class to start testing events and user profiles:

```text Test Events
CleverTap.sharedInstance()?.recordEvent("Product viewed")
```
```text Test user profiles
let profile: Dictionary<String, AnyObject> = [
    //Update pre-defined profile properties
    "Name": "Jack Montana",
    "Email": "jack.montana@gmail.com",
    //Update custom profile properties
    "Plan type": "Silver",
    "Favorite Food": "Pizza"
]

CleverTap.sharedInstance()?.onUserLogin(profile);
```

# Add Multiple Apps

You can now have multiple apps under a single project. This allows you to use data across apps. For example, if a project has multiple apps, say gaming, media streaming, and music, then you can analyze the consolidated data for all apps in a single view.

To add an app, follow the steps:

1. Click Settings > Project. The Project page appears. 
2. Click the App tab. 
3. Click the + Add App button to add an app. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/45b478d-Multiple_apps_add.png",
        "Multiple_apps_add.png",
        751
      ],
      "sizing": "80",
      "border": true
    }
  ]
}
[/block]


4. Add the required details and click the Add App button. The App ID is a combination of the app name and the account ID. 

5. Integrate your app with CleverTap. For more information, see [Set up App](https://docs.clevertap.com/docs/quick-project-setup#section-setup-app).

The events raised for any of the apps will be received with the app name. For example, app_launched_gaming. This allows you to identify the app of origin for the system or custom event. You can now select the app from the app list during campaign creation. 

You can select multiple apps for sending an App Inbox message. 

You can use multiple apps with the following engagement channels:

## Integrating with App

1. Use the AppID available under Settings->Project->Apps as the Account ID when integrating your app with the CleverTap SDK.
2. This will ensure that all events coming from the App and uniquely identifiable and can be attributed to the App.  
   [Add Image and link to quick start guides]

For more information on integrating your app see:

- [Android Quickstart Guide](https://developer.clevertap.com/docs/android-quickstart-guide)
- [iOS Quickstart Guide](https://developer.clevertap.com/docs/ios-quickstart-guide)

# Channels

Once you have added the apps, profiles have been created and events have started flowing into CleverTap you can start using Campaigns to send engagement to your users  
##Mobile push

Push notifications are brief messages you can send to your mobile app users. You can send the following campaigns:

- [Past Behavior Campaigns](https://docs.clevertap.com/docs/quick-project-setup_multiple-apps#section-past-behaviour-campaigns)
- [Live Campaigns](https://docs.clevertap.com/docs/quick-project-setup_multiple-apps#section-live-campaigns)

For more information on push campaigns see, [Mobile Push Notifications](https://docs.clevertap.com/docs/push).

### Past Behaviour campaigns

1. Under the who section you can select your targeting criteria for users you want to send out the push to. Ensure that you use the Event Property "CT App Name" = "Your App" to identify and target users basis events in the respective app.
2. You should select the App you want to send this Push Campaign to under "Select An App"
3. Schedule your notification and the campaign will be sent to the target user.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9524445-Campaigns_Who.png",
        "Campaigns_Who.png",
        1241
      ],
      "sizing": "80",
      "border": true
    }
  ]
}
[/block]


### Live Campaigns

1. Under the who section you can select you targeting criteria for users you want to send out the push to. Ensure that you use the Event Property "CT App Name" = "Your App" to identify and target users basis events from respective app.
2. You should select the App you want to send this Push Campaign to under "Select An App"
3. Schedule your notification and the campaign will sent to the target user.

![](https://files.readme.io/e2cef47-Screenshot_2020-11-24_at_11.04.19_AM.png "Screenshot 2020-11-24 at 11.04.19 AM.png")

## Mobile In-App

You can send  In-App messages with Images, GIFs, video, and audio.

1. Under the Who section the Apps you add as targeting criteria for the event are the apps the InApp is eligible for delivery.
2. Once CleverTap receives the Target Event from any of the apps in the criteria the In-app that has been scheduled will be sent to the App the Target Event was received from.
3. If you use the "Limit to users who do this Event for the First Time" option, CleverTap will restrict the delivery to only the first App+Event that matches the targeting criteria only. InApp will be only delivered once.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6670969-Campaigns_Who_Mobile_inapp.png",
        "Campaigns_Who_Mobile_inapp.png",
        1010
      ],
      "border": true
    }
  ]
}
[/block]


For more information, see [In-App Message](doc:inapp-campaigns).  
##SMS  
SMS notifications are brief text messages you can send to your app or website users even when they are outside of your app.

1. You can select the targeting criteria based on the Event + "CT App Name" filter.
2. SMS will be sent to mobile number on the profile if the targeting criteria is met.

![](https://files.readme.io/d968a7a-Campaigns_Who_SMS.png "Campaigns_Who_SMS.png")

For more information on SMS messages, see [SMS](doc:sms).  
##App Inbox  
App Inbox is a messaging channel that lets you deliver rich, individually customized content to your customers. You can send the following campaigns:

- [Past Behavior Campaigns](https://docs.clevertap.com/docs/quick-project-setup_multiple-apps#section-past-behaviour-campaigns)
- [Live Campaigns](https://docs.clevertap.com/docs/quick-project-setup_multiple-apps#section-live-campaigns)

For more information see, [App Inbox](doc:app-inbox).

### Past Behaviour Campaigns

1. Similar to Push Campaign. You can define the targeting criteria under the Who section.
2. Select the app to which the App Inbox message should be delivered.
3. When the targeting criteria are met, the App Inbox campaign is delivered to the target app.

![](https://files.readme.io/5aafa3e-Campaigns_Who_app_inbox.png "Campaigns_Who_app_inbox.png")

### Live Action Campaigns

1. Under the Who section the Apps you add as targeting criteria for the event are the apps the App Inbox message is eligible for delivery.
2. Once CleverTap receives the Target Event from any of apps in the targeting criteria the App Inbox message that has been scheduled will be sent to the App the Target Event was received from.
3. If you use the "Limit to users who do this Event for the First Time" option, CleverTap will restrict the delivery to only the first App+Event that matches the targeting criteria only. InApp will be only delivered once.

![](https://files.readme.io/df3ff67-Screenshot_2020-11-24_at_11.06.15_AM.png "Screenshot 2020-11-24 at 11.06.15 AM.png")

## Native Display

1. Works similar to inApps and App Inbox. You can define your targeting criteria and include "CT App Name" to target events from specific apps.
2. Native Display will be delivered to any of the apps added in the targeting criteria from which the event is received.
3. If you select "Limit to Users who do this event for the First Time" , Native Display campaign will only be delivered to the first App from which event is received that matches the targeting criteria

![](https://files.readme.io/77cab4f-Campaigns_Who_Native_display.png "Campaigns_Who_Native_display.png")

For more information, see [Native Display](doc:native-display).  
##Email

1. Under the Who section you can define your targeting criteria using behavior and Events(with property CT App Name) to send email based on the criteria.
2. Email will be send on the email linked to qualified user profiles

![](https://files.readme.io/6f8c6af-Campaigns_Who_Email.png "Campaigns_Who_Email.png")

For more information, see [Email](doc:email).

## API

API's only support Past behaviour campaigns.

### Mobile Push and App inbox

1. To create a campaign via API in the payload the only new parameter that you need to add is  the "App Name" to which the push notification must be sent.

```json
{
    "name": "UAT API",
    "send_to_all_devices": false,
    "estimate_only": false,
    "target_mode":"push",
    "where": {
    	"event_name": "Added To Cart",
        "from": 20201101,
        "to": 20201120 
    },
    "app_name": "US edit",
    "respect_frequency_caps": false,
    "content": {
        "title": "api",
        "body": "How are you doing today?",
        "platform_specific": {
            "android": {
            	"wzrk_cid": "BRTesting"
            }
        },
        "sender_name":"clevertap"
    },
    "devices": [
        "android"
    ],
    "when": "now"
}
```

# Journeys

1. No Support for push campaigns in journeys.
2. Can support live campaigns for inapp,,email,sms and native display

# Setup your Website

1. Add Website URL  
   Enter the Website URL for your project.

2. Integrate website  
   Paste the snippet in the <head></head> section of your website.

```javascript
<script type="text/javascript">
    var clevertap = {event:[], profile:[], account:[], onUserLogin:[], notifications:[], privacy:[]};
 // replace with the CLEVERTAP_ACCOUNT_ID with the actual ACCOUNT ID value from your Dashboard -> Settings page
clevertap.account.push({"id": "CLEVERTAP_ACCOUNT_ID"});
clevertap.privacy.push({optOut: false}); //set the flag to true, if the user of the device opts out of sharing their data
clevertap.privacy.push({useIP: false}); //set the flag to true, if the user agrees to share their IP data
(function () {
        var wzrk = document.createElement('script');
        wzrk.type = 'text/javascript';
        wzrk.async = true;
        wzrk.src = ('https:' == document.location.protocol ? 'https://d2r1yp2w7bby2u.cloudfront.net' : 'http://static.clevertap.com') + '/js/a.js?v=0';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wzrk, s);
})();
</script>
```

3. Set up push notifications  
   To integrate and enable web push notifications, go to [web push channel setup] \(<https://developer.clevertap.com/docs/web#section-web-push>).

4. Test integration  
   Paste the following snippet in your browser’s console to start testing.

```text Test events
clevertap.event.push(“Event Name”);
```
```text Test user profiles
clevertap.profile.push({
"Site": {
    "Name": "Jack Montana", // User's name
    "Email": “jackmontana@example.com”
    }
});
```

# Setup API

Set up your API to use events and user profiles. For more information on setting up API, see the [API Quickstart Guide](https://developer.clevertap.com/docs/api-quickstart-guide)

1. Upload to the API endpoint:  
   <https://api.clevertap.com/1/upload>

> 📘 Note
> 
> Use the URL based on your location:
> 
> - India - in1.api.clevertap.com
> - Singapore - sg1.api.clevertap.com
> - U.S - us1.api.clevertap.com

2. Use the JSON payload for events and user profiles.

```json Event Sample Payload
{
    "d": [
        {
            "FBID": "34322423",
            "ts": 1468308340, // time when the event occurred in UNIX epoch value in seconds
            "type": "event",
            "evtName": "Product viewed",
            "evtData": {
                "Product name": "Casio Chronograph Watch",
                "Category": "Mens Watch",
                "Price": 59.99,
                "Currency": "USD"
            }
        },
        {
            "identity": "jack@gmail.com",
            "ts": 1468208340,
            "type": "event",
            "evtName": "Charged",
            "evtData": {
                "Amount": 300,
                "Currency": "USD",
                "Payment mode": "Credit Card",
                "Delivery By": "$D_1468322268",
                "Items": [
                    {
                        "Category": "books",
                        "Book name": "The millionaire next door",
                        "Quantity": 1
                    },
                    {
                        "Category": "books",
                        "Book name": "Achieving inner zen",
                        "Quantity": 4
                    }
                ]
            }
        }
    ]
}
```
```json User Profiles Sample Payload
{
    "d": [
    {
    "identity": "1189549",
    "ts": 1468308340,
    "type": "profile",
    "profileData": {
        "Name": "Jack Montana",
        "Name": {"$delete" : 1}, //this will delete the value of name
        "Email": "jack@gmail.com",
        "Phone": "+14155551234",
        "Gender": "M",
        "Gender": {"$delete" : 1}, //this will delete the value of gender
        "MSG-sms": false,
        "MSG-whatsapp": true,
        "MSG-dndPhone": true,
        "DOB": "$D_1487576752",
        "Customer Type": "Platinum",
        "Custom Multi Value":{"$remove":["shoes","bags"]}, // To remove Multi Value properties
        "Custom Multi Value":{"$add":["shoes","bags"]},  //To add Multi Value properties
        "My Number 1": {"$incr" : 10}, //To increment integer data
        "My Number 2": {"$decr" : 30} //To decrement integer data
            }
        }
    ]
}
//$delete applicable only to name and gender fields
```

3. Test integration  
   Send API request with payload to test integration.

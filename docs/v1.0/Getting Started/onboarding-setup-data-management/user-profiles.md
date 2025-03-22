---
title: "User Profiles"
slug: "user-profiles"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Mon Feb 05 2018 20:55:48 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Sat Feb 27 2021 01:35:22 GMT+0000 (Coordinated Universal Time)"
---
# Overview

After integrating our SDK, the platform creates a user profile for each person who launches your app or visits your website.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fb9b378-1_User_Profile.png",
        "1 User Profile.png",
        1423
      ],
      "border": true
    }
  ]
}
[/block]


A CleverTap user profile has a set of default fields, such as email, phone number, and language. You can also extend the default user profile by adding custom fields that are specific to your business. 

> 👍 Custom Profile Field Example
> 
> If you offer a subscription service in your app, you can create a custom profile field to track what type of plan the user purchased.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/908f59f-2_User_properties.png",
        "2 User properties.png",
        685
      ],
      "border": true
    }
  ]
}
[/block]


The benefit of adding more information to a CleverTap user profile means the ability to:

- Create a user segment for people who have a specific profile property you have defined, then build a campaign to engage with that segment. 
- Personalize your campaign messaging with information. 
- [Personalize your app](https://developer.clevertap.com/docs/app-personalization) based on information from that person's CleverTap user profile.

# User Profile Data Model

A CleverTap user profile consists of three parts:

- Identifiers: Each user profile is given a unique CleverTap ID. You can also add other identifiers to recognize the user including email, phone number, Facebook ID, or your own custom identifier.
- Properties: This is information stored about the user such as age, gender, device, and location. You can also extend the default user profile by adding custom fields that are specific to your business. 
- Events: This is a log of actions taken by a user in your app such as a product viewed, a video watched, or an item added to cart.

## User Profile Types

The CleverTap user profile type changes automatically depending on the information set in them. A user profile can only belong to one type.

- Anonymous: Anonymous profiles do not yet contain uniquely identifiable information about the user.
- Addressable: Addressable user profiles are reachable either via email or push notifications.
- Customer: When you record a purchase via the _Charged_ event, that user will be marked as a _Customer_.

### User Scenarios for Anonymous Profiles

When tracking anonymous profiles, CleverTap tries to retain guest events as much as possible. The following scenarios explain how anonymous profiles are logged in the system. 

**Scenario 1**  
Anonymous user X performs event A from desktop A > Logs in > Performs event B.

**Scenario 2**  
The same user now uses a separate browser and performs event A anonymously > Logs in (as the same user) > Performs event B. Event B will be mapped to this user X. 

In scenario 2, all the events done before the user identifies themselves are mapped to an anonymous profile. All events post login is mapped to user X and is visible on the profile. As a best-case scenario, the platform shows all the events on the same user X except that any events done in an anonymous mode are shown in gray; these grayed-out events will not be considered for analytics or segmentation. The events before the login event will not be remapped to user X because they are done in an anonymous mode.

Since the user has performed the events anonymously, we consider this user as a different user, even though, this is mapped to an already existing identified profile. 

# Updating a User Profile

You can update a user profile in two ways:

- Add information to a user profile [through our SDKs](https://developer.clevertap.com/docs/clevertap-sdks).
- Add information to a user profile through our [server-side APIs](https://developer.clevertap.com/docs/user-profile-object).

# System User Properties

System user properties are user properties that are derived from the user information that is received from your application after you integrate our SDK. 

**Age**:  If the `birthday` or `DOB`is available as a profile property, CleverTap automatically calculates the age for the user profile. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/722dc07-Test_user_Segments.png",
        "Test_user_Segments.png",
        1188
      ],
      "border": true
    }
  ]
}
[/block]


You can now create and target segments based on user age, such as all users between 25 to 30 years.

![](https://files.readme.io/63927fe-Screenshot_2019-10-22_at_6.26.26_PM.png "Screenshot 2019-10-22 at 6.26.26 PM.png")

# Find People

To look at a specific user's profile in the CleverTap dashboard: 

1. Navigate to the _Segment_ tab.
2. Click **Find People**. 
3. In the _By identity_ box, search for a user by an identifier, such as email or a custom identifier you define. If you declare that _Phone_ is your identity, you can also search by phone.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/34d7843-3_By_identity_search_box.png",
        "3 By identity search box.png",
        1407
      ],
      "border": true
    }
  ]
}
[/block]


4. On the _Find People_ page, you can also search for users who match a specific set of criteria. This criteria can include actions taken, actions not taken, and profile properties.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/22df28a-4_Full_Search.png",
        "4 Full Search.png",
        1455
      ],
      "border": true
    }
  ]
}
[/block]

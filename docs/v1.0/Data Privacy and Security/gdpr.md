---
title: "General Data Protection Regulation (GDPR)"
slug: "gdpr"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Thu May 03 2018 06:33:11 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Mar 02 2021 14:55:08 GMT+0000 (Coordinated Universal Time)"
---
# Introduction

The GDPR enforcement puts the control of personal data, collected by businesses, in the hands of the individuals it belongs to, protecting the rights of EU residents.

The regulation delineates individuals’ rights to [access, rectify, and restrict](https://gdpr-info.eu/chapter-3/) the processing of personal data, among other key provisions, and aims to unify privacy and security laws for all organizations operating within the EU.

In the context of this user document, we will be focused on how to implement the different rights once invoked by the Data Subjects.

# Nomenclature

- Data Subject: End Users
- Data Controller: CleverTap Customers
- Data Processor: CleverTap

# Contractual Obligations

### 1. [Data Processing Agreement](https://clevertap.com/data-processing-agreement/) (DPA)

All customers of CleverTap have to sign the DPA. To account for this, on login for the first time, each user will have to go through our ToS, Privacy Policy, and DPA and accept the same.

### 2. [Updated Terms of Service](https://clevertap.com/terms-service/)

### 3. [Updated Privacy Policy](https://clevertap.com/privacy-policy/)

## Data Subject Rights

## Right to Erase

### 1. What is it?

This right allows end users to delete all information about them from CleverTap servers.

> 📘 Note
> 
> CleverTap deletes all backups within 60 days of customer deleting the data

### 2. CleverTap Implementation

a. API _/delete/profiles.json_

- Data Controllers can use this Rest API to delete all data of the mentioned profiles from the CleverTap servers by calling one of the 2 unique profile identifiers: 
  - List of identities
  - List of GUIDs

```text http\://eu1.wzrkt.com/1/delete/profiles.json
{
    "guid":"df2e224d90874887b4d61153ef3a2508"
}

OR

{
    "identity":"john.doe@johndoe.com"
}
```

b. Dashboard Delete

- Data Controllers can navigate to the profile page of the users whose profile has to be deleted.
- On calling the delete button, the entire profile page will be unavailable for use and ALL profile and event information will be removed from our servers within 24 hours of calling this function.

c. IMPORTANT NOTE  
When Profile of a user is Deleted, if the data subject also wants that their future data is also not captured, Data Controllers have to ensure that the Data Suppress flag (on the device) is set to enable on all devices owned by the said user. If this is not done, we will delete all data of the said user, BUT as soon as the same user logs in, we will create a new profile for the user and start capturing their data again

### 3. Access Control

Only Admin users have the right to erase user information.

### 4. Implications

a. Customer will have to stop sending Future data of the profile thus suppressed

- Once the user hits delete for a profile, all data coming from any device associated to the user will also have to be stopped. Hence, if the delete function is called, the data controller will have to set the optout flag to enable state (check right to suppress).

b. Unreachable on Marketing Channels

- Since the data of the user is deleted, there is no way to reach out to the user on marketing communication channels. Data controllers will have to opt the users out of ALL marketing channels.

c. Dashboard Implications

- You will not be able to view the profile page of the said user post delete.
- You cannot roll back erase, once called. There is no way to get the information back, once delete function is invoked.
- The delete happens immediately and cannot be rolled back. The actual delete of the profile will happen within 24 hours from across all our systems.
- Funnels, cohorts, pivots and other analytics will be impacted as the numbers may show some data inconsistency for a small period due to data deletion.
- Users cannot download the profile information of the said user from anywhere on the dashboard.

### 5. Default state

Profile will be erased only on explicitly calling it via API or dashboard delete.

## Right to Modify/Rectify

### 1. What is it

This right allows users to modify/rectify any profile data stored about them

### 2. CleverTap Implementation

a. API	  
CleverTap has provided this API which allows Data Controllers to upload profile information of their users. Hence, if a Data Subject requests for a profile change, the Data controller can upload the profile data of the user via the API  
b. csv Profile upload  
Under the settings section of your dashboard, we allow users to upload user profiles via a csv file.You will find it under Settings -> Manage -> My Uploads

### 3. Access Control

All non members have the right to csv upload

### 4. Implication

The old profile information will be overridden with the new profile for the given user identifier. If the user identifier is not found, a new profile will be created

### 5. Default State

Profile will be modified only on explicitly calling it via API

## Right to Access

### 1. What is it

This right allows users to access data which has been captured about them by the Data Processors

### 2. CleverTap Implementation

a. Dashboard Download  
This allows Data Controllers to download data about their specific users as a csv file  
b. API Download  
This API allows users download data about specific users via identities and/or guids

### 3. Access Control

All non member users can download profile informations.  
All users with the key, can use the API download method

### 4. Implication

Download will download the latest profile of the said user

### 5. Default State

Profile will be downloaded on explicitly calling the download function

## Right to Data Suppress (Opt Out)

### 1. What is it?

This right allows users to opt out of sharing any data with Data Processors.

### 2. CleverTap Implementation

a. New SDK version

- We have released an update to the SDK which will allow you to hook a optout flag to the CTA on your app.
- If the optout flag is set to disable, we will continue collecting data of the said user from the said device.
- If the optout flag is set to enable, our SDK will stop sending any data from the said device onto our servers. Data is blocked at the SDK level itself.

b. Multiple Devices

- If the same user logs in from another device, the Data Controller will have to validate the optout flag of user and set the flag accordingly.
- **Example**
  - User A has 2 devices, a1, a2.
  - By default, optout is set to disable on both devices.
  - A opts out of a1. In this case, optout will be set to enable on a1. The SDK will prevent any data from a1 to reach CleverTap servers going forward.
  - At this time, the Data Controller should set optout to enable for all devices associated to A. If this is not done, when the user logs in through a2, data will flow into CleverTap servers through a2 (which is in violation to GDPR).

c. Multiple Profiles on the Same Device

- If there are multiple users logging in to the same device where one of the profiles has set the optout flag to enable, CleverTap will suppress data coming from that device for that profile - refer onUserLogin on our developer docs.
- **Example**
  - There are 2 users A and B who share the same device a1.
  - By default, optout is set to disable on a1.
  - A logs in to a1 and opts out of a1. In this case, optout will be set to true on a1. The SDK will prevent any data from a1 to reach CleverTap servers going forward.
  - A logs out of a1.
  - B logs in to a1 via ‘onUserLogin’ method, then CleverTap sets the optout to disable by default for B. 
  - If login of B into a1 is handled by the app/data controller, CleverTap will continue suppressing the data coming from a1. Data Controller should reset the flag optout to disable when B logs in through the same device. If this is not done, B’s data will also be suppressed although B has not opted out of sharing data.

### 3. Access Control

If the SDK has been updated and the updated version app is being used by a user, all end users have this right to suppress.

### 4. Implication

a. The profile page of the user who has opted out will be stale and will not have the latest events performed by the user.  
b. We will auto filter out all these users from all segment calculations and engagement (including, but not limited to estimate reach, etc.).  
c. All analytics data like funnels, flows, cohorts, etc. will not contain these users’ data.  
d. Campaigns will not be sent to these users (even though they qualify) as the data is stale.  
e. To validate the state of the optout, we will provide the flag as a profile variable on the profile page of each user.

### 5. Default state

a. By default, we will continue collecting profile and event data unless the SDK explicitly raises the flag.  
b. Default state: optout _:disable_ i.e. we will collect data from the device by default (to be compliant with GDPR, we recommend that users set this flag to enable by default which ensure no collection of data unless explicit permission provided by end users).



## Opt In

a. If the user who has opted out, chooses to opt back in, all data will be appended to the same profile if identified as an existing user.

b. The user will be treated as the same user (we will not create a new profile for the user).

## Right to Marketing Opt Out

### 1. What is it

GDPR provides the right to the user to opt out of marketing communication.

### 2. CleverTap Implementation

a. Push opt out

- Our SDK has a flag ‘MSG-push’ which if set to disable, will ensure that push notifications are blocked for the specific device.
- Our SDK has a flag ‘MSG-push-all’ which if set to disable, will ensure that push notifications are blocked for ALL devices tagged to the said user.

b. SMS opt out

- Our SDK has a flag ‘MSG-sms’ which if set to disable, will ensure that no sms is received by the phone number associated to the logged in device.

c. Email opt out

- Our SDK has a flag ‘MSG-email’ which if set to disable, will ensure that no email is received by the email id associated to the logged in device.

### 3. Access Control

If the SDK has been updated and the updated app is being used by a user, all end users have this right to opt out of Marketing.

### 4. Implication

a. If the data controller wants users to be opted out of marketing communication across ALL channels, all the above flags need to be explicitly moved to disable state for the said profile.

b. Data Controllers need to be cognizant of sending transactional communication to the users who have opted out of marketing.

### 5. Default state

a. By default, we will continue marketing communication to said users, unless the SDK explicitly raises the flag.

b. Default state: enable i.e. we will send marketing messages by default.

## Privacy by Design

## Network Data

### 1. What is it?

Part of the privacy by design notion of GDPR.

### 2. CleverTap Implementation

a. We have made an SDK release to allow Data controllers the capability to set 'enableDeviceNetworkInfoReporting' on individual devices.

b. When the user launches app, the following data points WILL NOT be auto collected:

- Android: Bluetooth, Wifi, Radio
- iOS: Wifi, Radio

### 3. Implications

a. If the 'enableDeviceNetworkInfoReporting' is set to disabled, CleverTap will not be able to determine the location of the users based on their IP information.

b. This may affect sending out geo targeted campaigns.

c. This may affect your ability to perform geo based analytics.

d. The profile page of the user will not contain location information.

e. If you are using our ‘setLocation’ method, we recommend that you enable 'enableDeviceNetworkInfoReporting'.

### 4. Access Control

If the SDK has been updated and the updated app is being used by a user, we will not collect network data for that user by default.

### 5. Default State

enabledevicenetworkinfo’: _disable_ i.e. we will not collect network data by default.

## ADID

### 1. What is it?

Part of the privacy by design notion of GDPR.

### 2. CleverTap Implementation

a. We have made an SDK release to allow Data controllers the capability to set Advertisement Identifiers (ADID): 'CLEVERTAP_USE_GOOGLE_AD_ID' (for Android) and ‘CleverTapUseIFA’ (for iOS).

b. If ADID is set to 0, when the user launches app, CleverTap will NOT use the Advertising Id to generate unique CleverTap id for the said user.

c. If ADID is set to 1, when the user launches app, CleverTap will use the Advertising Id to generate unique CleverTap id for the said user.

### 3. Implications

Data Controllers WILL NOT be able to search for specific profiles using the ADID. You will have to use the CleverTap generate unique identity to search for the said user.

### 4. Access Control

If the SDK has been updated and the updated version of the app is being used by any new user, no ADID will be shared with CleverTap for those user.

### 5. Default State

ADID: _disabled_ i.e we will not collect ADID by default.

## FAQs

## How are profiles created on CleverTap -

1. CleverTap's SDK picks up the Google ADID for every Android device and the IDFA for every iOS device, in order to create the CleverTap ID. 

2. In case the SDK is able to successfully able to pick up the ADID and IDFA respectively, the format of the CleverTap ID is as follows -

_Android_ \_\_g(ADID stripped of hyphens)  
_iOS_ -g(IDFA stripped of hyphens)

3. The CleverTap ID is used to identify distinct devices.

4. Later, when the end user provides his/her identity by logging in/registering, CleverTap will assign this identity to the previously anonymous profile.

## What is GDPR?

1. General Data Protection Regulation (GDPR) came into regulation in May 2018 - primarily to give more rights and power to the citizens of EU to control their personal data and information they share with businesses they deal with. Here is a detailed documentation on GDPR - <https://docs.clevertap.com/docs/gdpr>.

2. To elaborate a little more - in the current situation users of your app are the data subject, your app/business is the data controller while CleverTap acts as a data processor.

3. As a data processor - our SDK captures only two data points about the user - 

a) Advertising ID of the device - In case of Android, CleverTap's SDK captures the Google ADID and in case of iOS, the SDK captures the IDFA. We use this to create a hashed CleverTap ID in order to identify devices.  
b) Location - Based on the latest app launch of the user, using a reverse IP lookup powered by Maxmind, CleverTap is able to capture the city level location of the user.

Since May 2018(SDK v3.1.9 and above), our SDK's are GDPR compliant, and we do not track the above two data points, unless explicitly enabled. Note that all our SDK's from 3.1.9 and above are GDPR compliant.

## How could this impact my user profiles on CleverTap?

1. In case the user has uninstalled and installed the app again, and if the SDK is not picking up the ADID and IDFA, then there is no way for the SDK to identify the device as the same device. Hence, for every uninstall and re-install scenario - CleverTap ends up creating a new profile altogether.

2. App install attribution could potentially not work as expected in case your attribution provider received the ADID, but CleverTap doesn't. You wouldn't be able to carry out an analysis or segment basis the install source of the user. You will have to ensure if you have CleverTap GDPR compliant, then even your attribution partner is GDPR compliant

## Is GDPR applicable to me?

Under the GDPR, it is the location of the individual whose personal data is being processed that determines whether the concerned firm should comply. This means that the GDPR will apply to all organizations, whether within the EU or outside of it, that offer their product or service to individuals in the EU when their data is being collected. In addition, it is also recommended under the GDPR that your marketing communications be on a default opt out. 

That said, your legal/compliance teams will be in a better position to answer if your app/business falls under the purview of GDPR regulations.

## GDPR doesn't apply to me. What next?

If GDPR doesn't apply to you, then life continues as usual - with regards to profile creation. You can simply allow CleverTap to track the ADID and location, as per the documentation here - <https://developer.clevertap.com/docs/sdk-changes-for-gdpr-compliance>

## GDPR applies to me. What next?

What your legal/compliance team needs to find out is if the allowing CleverTap to track the above two data points (ADID & Location) is included in the purview of your GDPR compliance. If not, you can allow CleverTap to track these, as per the documentation here - <https://developer.clevertap.com/docs/sdk-changes-for-gdpr-compliance>

However, if your app needs to be completely GDPR compliant, then you can disable the tracking by following the steps mentioned in the doc.

## What hygiene checks do I need to do?

Once you move to a GDPR compliant SDK, you can perform some quick hygiene checks to ensure profiles are being created as per the GDPR norms applicable to you - 

a) In case you need to be GDPR compliant, your CleverTap ID's wouldn't start from **g or -g.  
b) In case you do not need to be GDPR compliant, your CleverTap ID's would continue to start from '**g' or '-g.'  
c) In case you need to be GDPR compliant, but your legal team says that ADID can be tracked by CleverTap's SDK, your CleverTap ID's would continue to start from \_\_g or -g.

---
title: "Platform Considerations"
slug: "platform-considerations"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Fri Oct 18 2019 12:46:05 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Apr 09 2020 13:16:21 GMT+0000 (Coordinated Universal Time)"
---
# Operating System(OS)

The CleverTap SDK supports the following OS:

- Android 4.0 (Ice Cream Sandwich) and above 
- iOS 8.0 and above

# Users

## User profiles

### General 

- A User Profile can have a maximum number of 256 custom attribute keys.
- User Profile attribute keys must be of type String and attribute values can be scalar values, i.e. String, Boolean, Integer, Float or a Date object or multi-values (returned as a JSONArray or NSArray/Array).
- Attribute key names are limited to 120 characters in length. 
- Scalar attribute values are limited to 512 characters in length. It means that the key values can have a maximum length of 512 characters. For example, the name of the product, such as **red shoe**.

### Multi-value Properties

- Multi-values property must have unique values for the corresponding attribute key. For example, The attribute key 'Shirt Color' can have the following unique values. 
  1. Red Shirt
  2. Blue Shirt
  3. Green Shirt
- Multi-value property values must be Strings and are limited to 100 items. Excess items will be removed on a FIFO (first-in, first-out) basis. For example, the key 'Shirt Type'  can have the following values:

1. Shirt 1
2. Shirt 2 
3. Shirt 3…upto
4. Shirt 100

- Multi-value property values are limited to 512 characters in length.
- When setting a multi-value property, any existing value is overwritten.
- When adding items to a multi-value property via an API, the API looks for a match. If the property does not exist, a new property with the specified name is created.  If the property is a single value property with a scalar value, the property is promoted to a multi-value property. The current property value is then converted to a string and the new values are added to the values list. For example, the profile for John has the Language property with property value as “English”. You pass new values such as "Spanish" and "German" to the Language property. Now, the Language property will include all values, that is, English, Spanish, and German.
- When removing items from a multi-value property via an API, it checks if the property contains a scalar value. If the property contains a scalar value, it is promoted from a single value property to a multi-value property before the value is removed. If the multi-value property becomes empty after removing the values, then the property is also removed (for the specified profile). For example, the profile for Jane has the Language property with property value as “English”. You remove English from the Language property. Now, the Language property is removed from Jane’s profile.

### Prohibited Characters

The following characters are prohibited in key names:  
percent (%), greater than sign (>), less than sign (\<), exclamation point (!), pipe (|), ampersand (&), dot(.), colon( : ), semi-colon(;), dollar sign($), single quote('), double quote("), backslash( \\ ), and hash(#).

For example, you cannot have a key named “$erialNo>Fifty”.

## Upload User Profiles API

- Calls to the Upload User Profiles API endpoint are synchronous. We recommend making individual calls, waiting for our response, and then make another request. 
- Concurrent requests to this API are limited to 3 per account. Requests that exceed the limit will return a 429 HTTP response code.

# Events

## General Constraints

- The maximum number of User Event types per app is 512. While the number may appear limited at first, you can use it with properties and record substantial User Event data. The volume of events submitted per account across those User Event types is practically unlimited.
- For each User Event that is recorded, the maximum number of Event Properties is limited to 256.
- The ‘Charged’ Event supports up to 256 Items values.
- Event property keys must be of type String and property values must be Scalar values, that is, String, Boolean, Integer, Float, or a Date object.
- Prohibited characters for Event names are: percent (%), greater than sign (>), less than sign (\<), exclamation point (!), pipe (|), ampersand (&), dot(.), colon( : ), semi-colon(;), dollar sign($), single quote('), double quote("), and backslash( \\ ).
- User Event keys are limited to 120 characters in length.
- User Event property values are limited to 512 characters in length.

## Upload Events API

- Notification Sent, Notification Viewed, Notification Clicked, Notification Delivered, Notification Replied, UTM Visited, App Launched, App Uninstalled, App Version Changed, and Stayed, Reply Sent, Experiment Rendered, Reachable By, Identity Reset, Identity Set, and Identity Error are system event names that are available by default and used across the system. These are reserved event names that cannot be used for custom events.
- Prohibited characters in event and property names include percent (%), greater than sign (>), less than sign (\<), exclamation point (!), pipe (|), ampersand (&), dot(.),colon( : ), semi-colon(;), dollar sign($), single quote('), double quote("), and backslash( \\ ).
- Calls to the  Upload Events API endpoint are synchronous. We recommend making individual calls, waiting for our response, and then make another request.
- Concurrent requests to the  Upload Events API are limited to 3 per account. Requests that exceed the limit will return a 429 HTTP response code.

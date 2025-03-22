---
title: "Schema"
slug: "schema"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Thu Jul 09 2020 12:52:33 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Mar 09 2021 18:00:37 GMT+0000 (Coordinated Universal Time)"
---
# Overview

Schema is a framework to maintain your data, organize, and structure it. It enforces rules to maintain data integrity so that you can avoid data quality issues later. Schema standardizes your data before you even begin using it. Since bad data leads to a big cost in effort and money, you can save a lot of manual effort on tracking your data in the long run.

A schema table stores event and user properties in a pre-defined order to preserve data sanity. It ensures better output because it enforces standardization of the incoming data and avoids duplication or corruption of data. Better input leads to better output in your campaigns and journeys. It also provides more accurate insights in your data analytics.

# Events

You can see your events under _Settings_ > _Schema Events_. On this page, you can view all the events you are working with, along with editing or discarding to searching and filtering them.

The _Events_ schema has four parts: 

- [Custom events](https://docs.clevertap.com/docs/schema#section-custom-events) 
- [System events](https://docs.clevertap.com/docs/schema#section-system-events)
- [Conversion event](https://docs.clevertap.com/docs/schema#section-conversion-event) 
- [Qualifying event](https://docs.clevertap.com/docs/schema#section-qualifying-event) 

# Custom Events

Custom events are events that you can define, edit, remove, and so on. These are your app events that you can fully control. 

1. Navigate to _Settings_ > _Schema_ > _Events_. 
2. Click the **Custom events** tab. 

If you have already defined your events, they are all present on this tab. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5352807-Custom_Events_dashboard.png",
        "Custom Events dashboard.png",
        1207
      ],
      "border": true
    }
  ]
}
[/block]


[block:parameters]
{
  "data": {
    "h-0": "Event Detail",
    "h-1": "Description",
    "0-0": "Event name",
    "0-1": "The name of the event as it is displayed on the dashboard.",
    "1-0": "Type",
    "1-1": "There are two types:  \n  _ Defined: Events that are part of your schema definition.  \n  _ Undefined: Events that are not defined in the schema but passed to CleverTap.",
    "2-0": "Status",
    "2-1": "An event can have any of the following statuses:  \n  \n  _ Active: An event that has been passed to CleverTap.  \n  _ Inactive: An event which has not yet been passed to CleverTap.  \n  \\* Discarded: An event for which all past data has been dropped. Any future data that is passed for the event with the same name will also be dropped.",
    "3-0": "DRP",
    "3-1": "Data retention policy defines the length of time that the data is retained.",
    "4-0": "This month",
    "4-1": "The number of occurrences of the event in the current month.",
    "5-0": "Last month",
    "5-1": "The number of occurrences of the event in the previous month.",
    "6-0": "Count",
    "6-1": "A count can be an event, event property, or a user property update.",
    "7-0": "Properties",
    "7-1": "Attributes that provide additional context around the event. For more information, refer to [Event Property](https://docs.clevertap.com/docs/schema#section-event-property)."
  },
  "cols": 2,
  "rows": 8,
  "align": [
    "left",
    "left"
  ]
}
[/block]


## Add Event

You can add an event from the _Custom events_ tab. 

1. Navigate to _Settings_ > _Schema Events_ > _Custom events_.
2. Click the **+Event** button to add an event. 
3. Add the event name. This name must be unique in the schema.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/003a632-Add_Custom_Event.png",
        "Add Custom Event.png",
        1205
      ],
      "border": true
    }
  ]
}
[/block]


For more information, refer to [Event Property](https://docs.clevertap.com/docs/schema#section-event-property).

## Edit Event

The name cannot be changed after the event is published.

1. Click the edit icon on the event row. 
2. Edit the event name.
3. Click the checkmark. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/55c4aad-Edit_Custom_Event.png",
        "Edit Custom Event.png",
        1209
      ],
      "border": true
    }
  ]
}
[/block]


## Set Data Retention Policy 

The data retention policy (DRP) retains an event for the specified time period before it is automatically discarded. Your subscription plan will decide the default DRP limit. This limit can be changed later. You can set the DRP to a minimum of 3 months and a maximum of 10 years. 

1. Click the ellipsis on the event row and click **Set DRP**. 
2. Select _Custom_, then set the slider to your specific time limit. 

> 📘 CleverTap for Startups Limit
> 
> The default DRP for CleverTap for Startups users is one year and this cannot be changed.

3. Click **Save**. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9f54ebf-Set_Set_Data_Retention_Policy.png",
        "Set Set Data Retention Policy.png",
        1151
      ],
      "border": true
    }
  ]
}
[/block]


## Remove Event

You must be careful before removing an event. If you ever need to remove an event from the schema, you can remove it from the event row on the _Events_ page. You can only remove an inactive event from your schema; however, the effects are minimal because the event is not active. This action does not drop another event coming in with the same name. 

1. Click the ellipsis menu on the event row.
2. Click **Remove**. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/de2729e-Remove_Custom_Event.png",
        "Remove Custom Event.png",
        1215
      ],
      "border": true
    }
  ]
}
[/block]


After an event is removed:

- The entire event row is removed from the schema.
- If an event comes in with the same name, it is considered as an undefined event.

## Discard Event

You can discard an active event from the schema. You can still see the event row in the schema; however, it will be marked as discarded.  

> ❗️ Caution When Discarding an Event
> 
> You can only discard an active event. Exercise extreme caution when discarding an event because this action cannot be undone. This action has an impact on your schema because it purges all data for the discarded event. It also drops any future incoming event with the same name.

1. Click the ellipsis menu on the event row.
2. Click **Discard**. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f7f15ad-Discard_Custom_Event.png",
        "Discard Custom Event.png",
        1212
      ],
      "border": true
    }
  ]
}
[/block]


## Define Event

The events that are passed to CleverTap but not defined are marked as an undefined event. You can define these events from the event row. Defining an event marks it as a recognized event in the schema and therefore, when the event is received, this will not cause any error.

1. Click the ellipsis menu on the event row. 
2. Select _Define Event_ and a new window displays.
3. Click **Define & Save**. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/94b4bba-Define_Custom_Event.png",
        "Define Custom Event.png",
        1212
      ],
      "border": true
    }
  ]
}
[/block]


## Publish Schema/Events 

To publish the events, perform the following:

1. Check that you have all the required events. 
2. Click the **Publish Events** button. 

All the new events flowing in will be validated against the new rules set. You will get a confirmation email.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a26e42d-Publish_Schema-Events.png",
        "Publish Schema-Events.png",
        1228
      ],
      "sizing": "100",
      "border": true
    }
  ]
}
[/block]


# Handle Undefined Data

You can handle all the undefined events simultaneously. 

1. Click the ellipsis menu on the right of _+Event_.
2. Select _Handle undefined data_.  The _Undefined data settings_ page displays.
3. Make your selections, then click **Save**. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4639b02-Handle_Undefined_Data.png",
        "Handle Undefined Data.png",
        1187
      ],
      "border": true
    }
  ]
}
[/block]


If an undefined event occurs:

- Allow event: The event is allowed to start recording data, even if it has not been defined in the schema.  
- Drop event: If the event is not defined in the schema, then it is dropped.

> ❗️ Caution
> 
> Exercise this option with caution. This is a powerful option to keep your data clean, but you will lose any unexpected data. This action cannot be undone.

If an undefined event property occurs:  
This option is only applicable to defined events that have undefined event properties. 

- Drop event: The event is dropped along with the event property.

> ❗️ Caution
> 
> Exercise this option with caution. If a defined event records an undefined event property, then the entire event is dropped. This is a powerful option to keep your data clean, but you could drop an existing event if it starts receiving an undefined property.

- Drop event property: Only the event property is dropped but the event is allowed.
- Allow event property: The event property is allowed to start recording data. 

> 📘 Error Note
> 
> An error is reported for all actions. A _drop_ will have a higher severity and _allow_ will have a lower severity. For more information, refer to [Error Stream](https://docs.clevertap.com/docs/error-stream).

# Event Property

This section shows how to manage your event properties.

1. Navigate to _Settings_ > _Schema_ > _Events_. 
2. Click the **Custom events** tab. All the events are listed on this page. 
3. Click any of the properties on the event row to see the property details. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1c8b40b-Schema_Custom_Event_Property_Main.png",
        "Schema_Custom_Event_Property_Main.png",
        1192
      ],
      "border": true
    }
  ]
}
[/block]


[block:parameters]
{
  "data": {
    "h-0": "Property Detail",
    "h-1": "Description",
    "0-0": "Property name",
    "0-1": "The name of the property.",
    "1-0": "Type",
    "1-1": "The type of property:  \n  _ Defined: Properties that you have added to the schema.  \n  _ Undefined: Properties that you have not added to the schema and are currently receiving data.",
    "2-0": "Status",
    "2-1": "An event property can have any of the following statuses:  \n  \n  _ Active: An event property that has been passed to CleverTap.  \n  _ Inactive: An event property which has not yet been passed to CleverTap.  \n  \\* Discarded: An event property for which all past data has been dropped. Any future data that is passed for this user property with the same name will also be dropped.",
    "3-0": "Required",
    "3-1": "This defines whether a property is mandatory for the event.  \n  _ Yes: The property is mandatory. The event is dropped if it is received without the event property.  \n_Note_: Exercise this option with caution. If an event is received without the required property, then the entire event is dropped. This is a powerful option to keep your data clean, but you could drop an existing event if it starts receiving an undefined property.  \n  \n  _ No: The property is optional. The event is allowed even if it is received without the event property.",
    "4-0": "Data type",
    "4-1": "This defines the data type of the event property:  \n  _ String  \n  _ Integer  \n  _ Float  \n  _ Boolean  \n  _ Mixed  \n  _ List",
    "5-0": "Data type fallback",
    "5-1": "The fallback action if the event property is not in the defined format:  \n_ Drop event: This drops the incoming event if the data type does not match.  \n_Note_: Exercise extreme caution when dropping an event. This action cannot be undone. This action has an impact on your schema because it purges all data for the dropped event. It also drops any future incoming event with the same name.  \n_ Drop event property: This drops the incoming event property if the data type does not match.  \n_Note_: Exercise extreme caution when dropping an event property. This action cannot be undone. This action has an impact on your schema because it purges all data for the dropped event property. It also drops any future incoming event property with the same name.  \n_ Allow property: This allows the property even if the data type does not match.  \n  \nAn error is reported for all actions. A _drop_ will have a higher severity and _allow\\* will have a lower severity. For more information, refer to [Error Stream](https://docs.clevertap.com/docs/error-stream).",
    "6-0": "Created on",
    "6-1": "The date when the user property was created.",
    "7-0": "Description",
    "7-1": "The description of the event property. You can set the description from the ellipsis menu on the event property row."
  },
  "cols": 2,
  "rows": 8,
  "align": [
    "left",
    "left"
  ]
}
[/block]


## Add Event Property

To add an event property: 

1. Click the **+Property** button from the _Custom events_ tab, then click **Add new**.
2. Enter a property name and choose the appropriate property details.
3. Click the checkmark. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4060473-New_Schema_custom_event_add_new_property.png",
        "New_Schema_custom_event_add_new_property.png",
        1155
      ],
      "border": true
    }
  ]
}
[/block]


## Edit Event Property

You can edit any column, however, you can only edit names for unpublished event properties. 

1. Click the edit icon on the property row from the _Custom events_ tab. 
2. Edit the property name and any other appropriate property details.
3. Click the checkmark. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5378185-Schema_Custom_Event_edit_property.png",
        "Schema_Custom_Event_edit_property.png",
        1179
      ],
      "border": true
    }
  ]
}
[/block]


## Remove Event Property

You can remove an unpublished event property. 

1. Click the ellipsis icon on the property row from the _Custom events_ tab. 
2. Click **Remove**.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/324e6f1-Remove_Custom_Event.png",
        "Remove Custom Event.png",
        1215
      ],
      "border": true
    }
  ]
}
[/block]


After an event property is removed:

- The entire event property row is removed from the schema.
- If an event property comes in with the same name, it is considered as an undefined event property.

## Discard Event Property

You can discard a published event property from the schema. You can still see the event property row in the schema; however, it will be marked as discarded. 

1. Click the ellipsis icon on the property row from the _Custom events_ tab. 
2. Click **Discard** and a new window displays.
3. Click **Discard** again.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a0dd4c3-Discard_Event_Property.png",
        "Discard_Event_Property.png",
        1210
      ],
      "border": true
    }
  ]
}
[/block]


> ❗️ Caution When Discarding an Event Property
> 
> Exercise extreme caution when discarding an event property. This action cannot be undone. This action has an impact on your schema because it purges all data for the discarded event property. It also drops any future incoming event property with the same name.

# User Properties

This section shows how to manage your user properties.

1. Navigate to _Settings_ > _Schema_ > _User Properties_.  All the user properties are listed on this page.
2. Click any of the properties on the user property row to see the property details.

From this page, you can also search and filter properties.

![](https://files.readme.io/e55f895-Schema_User_Property_Main.png "Schema_User_Property_Main.png")

[block:parameters]
{
  "data": {
    "h-0": "Property Detail",
    "h-1": "Description",
    "0-0": "Property name",
    "0-1": "The name of the user property.",
    "1-0": "Type",
    "1-1": "The type of property:  \n  \n  _ Defined: Properties that you have added to the schema.  \n  _ Undefined: Properties that you have not added to the schema and are currently receiving data.",
    "2-0": "Status",
    "2-1": "A user property can have any of the following statuses:  \n  \n  _ Active: A user property that has been passed to CleverTap.  \n  _ Inactive: A user property which has not yet been passed to CleverTap.  \n  \\* Discarded: A user property for which all past data has been dropped. Any future data that is passed for this user property with the same name will also be dropped.",
    "3-0": "Data type",
    "3-1": "This defines the data type of the user property:  \n  \n  _ String  \n  _ Integer  \n  _ Float  \n  _ Boolean  \n  _ Mixed  \n  _ List",
    "4-0": "Data type fallback",
    "4-1": "This includes:  \n_ Drop user property: This drops the incoming property if the data type does not match.  \n_Note_: Exercise extreme caution when dropping a user property. This action cannot be undone. This action has an impact on your schema because it purges all data for the discarded user property. It also drops any future incoming user property with the same name.  \n_ Allow property: This allows the property even if the data type does not match.  \nAn error is reported for all actions. A _drop_ will have a higher severity and _allow_ will have a lower severity. For more information, refer to [Error Stream](https://docs.clevertap.com/docs/error-stream).",
    "5-0": "Created on",
    "5-1": "The date when the user property was created."
  },
  "cols": 2,
  "rows": 6,
  "align": [
    "left",
    "left"
  ]
}
[/block]


## Add User Property

To add a user property from this page: 

1. Click the **+Property** button.
2. Enter a property name and choose a data type.
3. Click the checkmark.

![](https://files.readme.io/fc5ba43-Add_User_Property.png "Add User Property.png")

## Edit User Property

You can edit any column, however, you can only edit names for unpublished user properties. To edit a property, click the edit icon on the property row.

1. Click the edit icon on the property row.
2. Edit the property name and the data type.
3. Click the checkmark.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7b3b286-Schema_edit_property_User.png",
        "Schema_edit_property_User.png",
        1186
      ],
      "border": true
    }
  ]
}
[/block]


## Remove User Property

You can remove an unpublished property.

1. Click the ellipsis icon on the property row.
2. Click **Remove**.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9ca9e6e-Schema_User_remove_property.png",
        "Schema_User_remove_property.png",
        1184
      ],
      "border": true
    }
  ]
}
[/block]


After a user property is removed:

- The entire user property row is removed from the schema.
- If a user property comes in with the same name, it is considered as an undefined user property.

## Discard User Property

You can discard a published user property from the schema. You can still see the property row in the schema, however, it will be marked as discarded.

1. Click the ellipsis icon on the property row.
2. Click **Discard** and a new window displays.
3. Click **Discard** again.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8cf001a-Discard_User_Property.png",
        "Discard User Property.png",
        1165
      ],
      "border": true
    }
  ]
}
[/block]


> ❗️ Caution When Discarding a User Property
> 
> Exercise extreme caution when discarding a user property. This action cannot be undone. This action has an impact on your schema because it purges data for the discarded user property. It also drops any future incoming user property with the same name.

# System Events

System events are tracked automatically. You can only change the DRP for these events and can choose to allow CleverTap to record the push impression event.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/49f2153-System_events.png",
        "System events.png",
        1204
      ],
      "border": true
    }
  ]
}
[/block]


# Conversion Event

The conversion event helps track conversion. 

To set a conversion event:

1. Navigate to _Settings_ > _Schema_ > _Events_. 
2. Click the **Conversion event** tab. 

To track revenue, set the user conversion event and revenue property. This property must be a numeric value. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5dde3be-Conversion_Event_2.png",
        "Conversion Event 2.png",
        1166
      ],
      "border": true
    }
  ]
}
[/block]


# Qualifying Event

To set a qualifying event:

1. Navigate to _Settings_ > _Schema_ > _Events_. 
2. Click the **Qualifying event** tab. 

This is the event that qualifies users as active if they have performed the event at least once in the defined time period.

Right now, the qualifying event is used in the [active %](https://docs.clevertap.com/docs/trends#section-active) tab on the _Trends_ page.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3d426f9-Qualifying_Event.png",
        "Qualifying Event.png",
        1168
      ],
      "border": true
    }
  ]
}
[/block]


# Download Schema Data from Dashboard

You can download the data for all events and user profiles either from the CleverTap dashboard or via an API. 

## Event Data

To download event data from the CleverTap dashboard in CSV format:

1. Navigate to _Settings_ > _Schema_ > _Events_. You can download event data either from the _System events_ tab or the _Custom event_ tab. 
2. Click the **Download as CSV** button, then the _Download CSV file_ window displays. 
3. Select to download _Events_ or _Events with properties_.
4. Click **Download**.

![](https://files.readme.io/356924c-System_events.png "System events.png")

## User Profile data

To download all event data from the CleverTap dashboard in CSV format:

1. Navigate to _Settings_ > _Schema_ > _User Properties_.
2. Click the **Download as CSV** button.

![](https://files.readme.io/656910a-User_Profile_data.png "User Profile data.png")

## Download with API

To download event data or user profile data with API, refer to the following:

- Use the [Events Schema API](https://developer.clevertap.com/docs/get-schema#section-get-events-schema-api) to download event data.
- Use the [User Properties Schema API](https://developer.clevertap.com/docs/get-schema#section-get-user-properties-schema-api) to download user profile data.

# Considerations

There are some specific validations when creating events and properties. For more information, refer to [Platform Considerations](doc:platform-considerations).

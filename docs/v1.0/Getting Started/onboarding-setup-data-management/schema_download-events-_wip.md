---
title: "Schema_download events _WIP"
slug: "schema_download-events-_wip"
excerpt: ""
hidden: true
metadata: 
  image: []
  robots: "index"
createdAt: "Thu Dec 03 2020 14:21:51 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Dec 03 2020 15:06:36 GMT+0000 (Coordinated Universal Time)"
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

Go to _Settings_ > _Schema_ > _Events_. Click the **Custom events** tab. 

Custom events are events that you can define, edit, remove, and so on. These are your app events that you can fully control. 

If you have already defined your events, they are all present on this tab. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b80e1b8-Schema_Custom_Event_tab_main.png",
        "Schema_Custom_Event_tab_main.png",
        1182
      ],
      "border": true
    }
  ]
}
[/block]


[block:parameters]
{
  "data": {
    "h-0": "Event detail",
    "h-1": "Description",
    "0-0": "Event name",
    "0-1": "The name of the event as it is displayed on the dashboard.",
    "1-0": "Type",
    "1-1": "These are of two types:  \n  _ Defined - Events that are part of your schema definition.  \n  _ Undefined - Events that are not defined in the schema but passed to CleverTap.",
    "2-0": "Status",
    "2-1": "An event can have any of the following statuses:  \n  \n  _ Active - An event that has been passed to CleverTap.  \n  _ Inactive - An event which has not yet been passed to CleverTap.  \n  \\* Discarded - An event for which all past data has been dropped. Any future data that is passed for the event with the same name will also be dropped.",
    "3-0": "DRP",
    "3-1": "Data retention policy defines the length of time that the data is retained.",
    "4-0": "This month",
    "4-1": "The number of occurrences of the event in the current month.",
    "5-0": "Last month",
    "5-1": "The number of occurrences of the event in the previous month.",
    "6-0": "Data Points",
    "6-1": "A data point can be an event, event property, or a user property update.",
    "7-0": "Properties",
    "7-1": "Attributes that provide additional context around the event. For more information, see [Event Property](https://docs.clevertap.com/docs/schema#section-event-property)."
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

To add an event,  go to _Settings_ > _Schema Events_ > _Custom events_.

Click the **+Event** button to add an event. Add the event name. This name must be unique in the schema.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/62b6153-Schema_Custom_Event_tab_main.png",
        "Schema_Custom_Event_tab_main.png",
        1182
      ],
      "border": true
    }
  ]
}
[/block]


For more information, see [Event Property](https://docs.clevertap.com/docs/schema#section-event-property).

## Edit Event

The name cannot be changed after the event is published.

To edit an event, click the edit icon on the event row. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3fa0b42-Schema_Custom_Event_edit.png",
        "Schema_Custom_Event_edit.png",
        1196
      ],
      "border": true
    }
  ]
}
[/block]


## Set Data Retention Policy 

The data retention policy (DRP) retains an event for the specified time period before it is automatically discarded. Your subscription plan will decide the default DRP limit. This limit can be changed later. You can set the DRP to a minimum of 3 months and a maximum of 10 years. 

To set the DRP for an event, click the ellipsis menu on the event row and set the DRP. 

1. To set the DRP, click the ellipsis on the event row and select **Set DRP**. 
2. Select _Custom_, then set the slider to your specific time limit. 
3. Click **Save**. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/182357c-Schema_Event_Set_DRP.png",
        "Schema_Event_Set_DRP.png",
        1197
      ],
      "border": true
    }
  ]
}
[/block]


## Remove Event

You must be careful before removing an event. If you ever need to remove an event from the schema, you can remove it from the event row on the _Events_ page. You can only remove an inactive event from your schema. However, the effects are minimal because the event is not active. This action does not drop another event coming in with the same name. 

To remove an event,  click the ellipsis menu on the event row and select **Remove**. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/299ea33-Schema_Custom_Event_remove.gif",
        "Schema_Custom_Event_remove.gif",
        1190
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

You can discard an active event from the schema. You can still see the event row in the schema. However, it will be marked as discarded.  

> ❗️ Note
> 
> You can only discard an active event. Exercise extreme caution when discarding an event. This action cannot be undone. This action has an impact on your schema because it purges all data for the discarded event. It also drops any future incoming event with the same name.

To discard an event,  click the ellipsis menu on the event row and select **Discard**. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f54134a-Schema_Custom_Event_discard.png",
        "Schema_Custom_Event_discard.png",
        1185
      ],
      "border": true
    }
  ]
}
[/block]


## Define Event

The events that are passed to CleverTap but not defined are marked as an undefined event. You can define these events from the event row. Defining an event marks it as a recognized event in the schema and therefore, when the event is received, this will not cause any error.

To define an event, click the ellipsis menu on the event row and select _Define Event_. Click **Define & Save**. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2e440ef-Schema_Event_Define.png",
        "Schema_Event_Define.png",
        1195
      ],
      "border": true
    }
  ]
}
[/block]


## Publish Schema/Events 

Check that you have all the required events. You can then publish the events by clicking the **Publish Events** button. All the new events flowing in will be validated against the new rules set.  
You will get a confirmation email.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/16f841b-Schema_Custom_Event_tab_Publish_events.png",
        "Schema_Custom_Event_tab_Publish_events.png",
        1172
      ],
      "sizing": "100",
      "border": true
    }
  ]
}
[/block]


# Handle Undefined Data

You can handle all the undefined events simultaneously. To handle all undefined data, click the ellipsis menu on the _Events_ page row, then select _Handle undefined data_.  The _Undefined data settings_ page will be displayed. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0fe398c-Schema_custom_event_handle_undefined_all.png",
        "Schema_custom_event_handle_undefined_all.png",
        1191
      ],
      "border": true
    }
  ]
}
[/block]


If an undefined event occurs:

- Allow event - The event is allowed to start recording data, even if it has not been defined in the schema.  
- Drop event - If the event is not defined in the schema, then it is dropped.

> ❗️ Note
> 
> Exercise this option with caution. This is a powerful option to keep your data clean, but you will lose any unexpected data. This action cannot be undone.

If an undefined event property occurs:  
This option is only applicable to defined events that have undefined event properties. 

- Drop event - The event is dropped along with the event property.

> ❗️ Note
> 
> Exercise this option with caution. If a defined event records an undefined event property, then the entire event is dropped. This is a powerful option to keep your data clean, but you could drop an existing event if it starts receiving an undefined property.

- Drop event property - Only the event property is dropped but the event is allowed.
- Allow event property - The event property is allowed to start recording data. 

> 📘 Note
> 
> An error is reported for all actions. A drop will have a higher severity and allow will have a lower severity. For more information, see [Error Stream](https://docs.clevertap.com/docs/error-stream).

# Event Property

Go to _Settings_ > _Schema_ > _Events_. Click the **Custom events** tab. All the events are listed on this page. Click any of the properties on the event row to see the property details. 

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
    "0-1": "The name of the property",
    "1-0": "Type",
    "1-1": "The type of property:  \n  _ Defined -  Properties that you have added to the schema.  \n  _ Undefined - Properties that you have not added to the schema and are currently receiving data.",
    "2-0": "Description",
    "2-1": "The description of the event property. You can set the description from the ellipsis menu on the event property row.",
    "3-0": "Required",
    "3-1": "Defines whether a property is mandatory for the event.  \n  _ Yes - The property is mandatory. The event is dropped if it is received without the event property.  \n_Note_: Exercise this option with caution. If an event is received without the required property, then the entire event is dropped. This is a powerful option to keep your data clean, but you could drop an existing event if it starts receiving an undefined property.  \n  \n  _ No - The property is optional. The event is allowed even if it is received without the event property.",
    "4-0": "Data type",
    "4-1": "Defines the data type of the event property.  \n  \n  _ String  \n  _ Integer  \n  _ Float  \n  _ Boolean  \n  _ Mixed  \n  _ List",
    "5-0": "Data type fallback",
    "5-1": "The fallback action if the event property is not in the defined format.  \n_ Drop event - Drops the incoming event if the data type does not match.  \nExercise extreme caution when dropping an event. This action cannot be undone. This action has an impact on your schema because it purges all data for the dropped event. It also drops any future incoming event with the same name.  \n_ Drop event property - Drops the incoming event property if the data type does not match.  \nExercise extreme caution when dropping an event property. This action cannot be undone. This action has an impact on your schema because it purges all data for the dropped event property. It also drops any future incoming event property with the same name.  \n\\* Allow property - Allows the property even if the data type does not match.  \n  \nAn error is reported for all actions. A drop will have a higher severity and allow will have a lower severity. For more information, see [Error Stream](https://docs.clevertap.com/docs/error-stream)."
  },
  "cols": 2,
  "rows": 6,
  "align": [
    "left",
    "left"
  ]
}
[/block]


## Add Event Property

To add a property, click the **+Property** button from the _Custom events_ tab. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/76f753e-Schema_custom_event_add_new_property.gif",
        "Schema_custom_event_add_new_property.gif",
        1198
      ],
      "border": true
    }
  ]
}
[/block]


## Edit Event Property

You can edit any column. However, you can edit names only for unpublished event properties. To edit a property, click the edit icon on the property row from the _Custom events_ tab. 

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

You can remove an unpublished event property. To remove a property, click the ellipsis icon on the property row from the _Custom events_ tab. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fb7a752-Schema_Custom_Event_remove_property.png",
        "Schema_Custom_Event_remove_property.png",
        1198
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

You can discard a published event property from the schema. You can still see the event property row in the schema. However, it will be marked as discarded.  

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/dc986b7-Schema_Custom_Event_Property_discard.png",
        "Schema_Custom_Event_Property_discard.png",
        1197
      ],
      "border": true
    }
  ]
}
[/block]


> ❗️ Note
> 
> Exercise extreme caution when discarding an event property. This action cannot be undone. This action has an impact on your schema because it purges all data for the discarded event property. It also drops any future incoming event property with the same name.

# User Properties

Go to _Settings_ > _Schema_ > _User Properties_.  All the user properties are listed on this page and you can also add a property from this page.

All the user properties you are working with are displayed on this page. You can edit or discard properties from this page. You can search and filter properties from this page.

![](https://files.readme.io/e55f895-Schema_User_Property_Main.png "Schema_User_Property_Main.png")

[block:parameters]
{
  "data": {
    "h-0": "Property Detail",
    "h-1": "Description",
    "0-0": "Property name",
    "0-1": "The name of the user property.",
    "1-0": "Type",
    "1-1": "The type of property:  \n  \n  _ Defined - Properties that you have added to the schema.  \n  _ Undefined - Properties that you have not added to the schema and are currently receiving data.",
    "2-0": "Status",
    "2-1": "A user property can have any of the following statuses:  \n  \n  _ Active - A user property that has been passed to CleverTap.  \n  _ Inactive - A user property which has not yet been passed to CleverTap.  \n  \\* Discarded - A user property for which all past data has been dropped. Any future data that is passed for this user property with the same name will also be dropped.",
    "3-0": "Data type",
    "3-1": "Defines the data type of the user property.  \n  \n  _ String  \n  _ Integer  \n  _ Float  \n  _ Boolean  \n  _ Mixed  \n  _ List",
    "4-0": "Data type fallback",
    "4-1": "_ Drop user property - Drops the incoming property if the data type does not match.  \n_Note_: Exercise extreme caution when dropping a user property. This action cannot be undone. This action has an impact on your schema because it purges all data for the discarded user property. It also drops any future incoming user property with the same name.  \n_ Allow property - Allows the property even if the data type does not match.  \nAn error is reported for all actions. A drop will have a higher severity and allow will have a lower severity. For more information, see [Error Stream](https://docs.clevertap.com/docs/error-stream).",
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


## Edit User Property

You can edit any column. However, you can edit names only for unpublished user properties. To edit a property, click the edit icon on the property row.

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

You can remove an unpublished property. To remove a property, click the ellipsis icon on the property row from the _User properties_ page.

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

You can discard a published user property from the schema. You can still see the property row in the schema. However, it will be marked as discarded.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6817bc4-Schema_User_Property_discard.png",
        "Schema_User_Property_discard.png",
        1187
      ],
      "border": true
    }
  ]
}
[/block]


> ❗️ Note
> 
> Exercise extreme caution when discarding a user property. This action cannot be undone. This action has an impact on your schema because it purges data for the discarded user property. It also drops any future incoming user property with the same name.

# System Events

System events are tracked automatically. You can only change the DRP for these events. You can choose to allow CleverTap to record the push impression event.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b489df7-Schema_Main.png",
        "Schema_Main.png",
        1185
      ],
      "border": true
    }
  ]
}
[/block]


# Conversion Event

To set a conversion event, go to _Settings_ > _Schema_ > _Events_. Click the **Conversion event** tab.  
The conversion event helps you to track conversion. To track revenue, set the user conversion event and revenue property. This property must be a numeric value. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cc3edc1-Schema_Conversion_event.png",
        "Schema_Conversion_event.png",
        1194
      ],
      "border": true
    }
  ]
}
[/block]


# Qualifying Event

To set a qualifying event, go to _Settings_ > _Schema_ > _Events_. Click the **Qualifying event** tab. This is the event that qualifies users as active if they have performed the event at least once in the defined time period.

Currently, the qualifying event is used in the [Active %](https://docs.clevertap.com/docs/trends#section-active) tab on the _Trends_ page.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/99c9985-Schema_Qualifying_event.png",
        "Schema_Qualifying_event.png",
        1195
      ],
      "border": true
    }
  ]
}
[/block]


# Download Schema data

You can download the data for all events and user profiles either from the CleverTap dashboard or via an API. 

## Download from dashboard

## Event data

You can download event data from the CleverTap dashboard in CSV format.

1. Click Settings > Schema > Events. The Schema/Events page appears. You can download event data either from the System events tab or the Custom event tab. 
2. Click the Download as CSV button. The Download CSV file window appears. 
3. Select to download events or events with properties.

![](https://files.readme.io/3897ef2-Schema_download_system_events.png "Schema_download_system_events.png")

## User Profile data

You can download all event data from the CleverTap dashboard in CSV format.

1. Click Settings > Schema > User properties. The Schema/Events page appears. 
2. Click the Download as CSV button.

![](https://files.readme.io/43134ef-Schema_download_user_properties.png "Schema_download_user_properties.png")

## Download with API

1. Use the Events API to download Event data.
2. Use the Profile user API to download user profile data.

# Considerations

There are some specific validations when creating events and properties. For more information, see [Platform Considerations](doc:platform-considerations).

---
title: "Catalog Send-Time Personalization"
slug: "catalog-personalization"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Mon Sep 14 2020 09:56:43 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Feb 22 2021 23:33:45 GMT+0000 (Coordinated Universal Time)"
---
## Overview

Catalog send-time personalization provides the ability to personalize messages with external data pulled from an uploaded catalog at the time a campaign is sent. Automatically include dynamic information directly in a message such as product price, product category, available inventory levels, and more. 

> 👍 E-commerce App Example
> 
> A user adds a laptop to the cart, then exits. By providing additional details in the engagement message such as the image, size, latest price, and specifications of the laptop, the user can be nudged to purchase the item. Using catalog send-time personalization helps keep users engaged in a meaningful way.

After you have uploaded the catalog, you can start using it in a campaign. For more information, refer to [Catalog](https://docs.clevertap.com/docs/catalog).

# Event Property

Follow the steps below to personalize a catalog by event property:

1. Create a [campaign](doc:intro-to-campaigns).

2. Click the **Personalization Setup** link to select a catalog. Once the personalization setup window displays, you can map the required catalog columns to event properties and user properties. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0fddae4-Catalog_personalization_setup_new.png",
        "Catalog_personalization_setup_new.png",
        1387
      ],
      "border": true
    }
  ]
}
[/block]


3. Click the **Catalog Send-Time** tab and select the required catalog from the list. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ec5d255-Catalog_personalization_select_catalog_new.png",
        "Catalog_personalization_select_catalog_new.png",
        727
      ],
      "sizing": "80"
    }
  ]
}
[/block]


4. Select the event. You can personalize your message based on the property values of this event. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f852b40-catalog_personalization_select_event.png",
        "catalog_personalization_select_event.png",
        719
      ],
      "sizing": "80",
      "border": true
    }
  ]
}
[/block]


> 📘 Recent Occurrence
> 
> The most recent occurrence of the event is used to select the relevant item from the catalog. If the campaign is a triggered campaign, then the event that triggered the campaign is considered.

5. Select the event property to map to the catalog column. This mapping is important to identify the catalog column that matches the event property. For example, we map _Product Name_, such as a laptop (from the _Viewed_ event) to the _Name_ column in the catalog. 

Repeat this step to map more properties. 

> 📘 Map Multiple Properties
> 
> If required, map multiple properties. Every addition to the mapping is treated as an _and_ condition. For example, map the name, the color, and the brand to personalize the message for the user.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/08aa75d-catalog_personalization_select_catalog_property.png",
        "catalog_personalization_select_catalog_property.png",
        719
      ],
      "sizing": "80",
      "border": true
    }
  ]
}
[/block]


6. Click **Save** to set up the personalization. 

7. Use [liquid tags](doc:liquid-tags) to create a personalized message for your target audience. 

In this example, the syntaxes for using different catalog columns are shown below:

```liquid Liquid Tag
{{ Catalog.["Sample Catalog"].Name | default: "Laptop" }}
{{ Catalog.["Sample Catalog"].Amount | default: "0" }}
```

![](https://files.readme.io/3069384-catalog_personalization_liquid_message.png "catalog_personalization_liquid_message.png")

You can now use the latest amount for the last added to cart item, such as the laptop. 

# User Property 

Follow the steps below to personalize a catalog by user property:

1. Create a [campaign](doc:intro-to-campaigns).
2. Click the **Personalization Setup** link to select a catalog. Once the personalization setup window displays, you can map the required catalog columns to event properties and user properties. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b776884-Catalog_personalization_setup_new.png",
        "Catalog_personalization_setup_new.png",
        1387
      ],
      "border": true
    }
  ]
}
[/block]


3. Click the **Catalog Send-Time** tab and select the required catalog from the list. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/792a568-Catalog_personalization_select_catalog_new.png",
        "Catalog_personalization_select_catalog_new.png",
        727
      ],
      "sizing": "80"
    }
  ]
}
[/block]


4. Select the user property to map to the catalog column. For example, you can recommend the top restaurant in New York with rich details about the restaurant from the catalog to a user with the user property _City_ set as New York. 

> 📘 Note
> 
> If required, map multiple properties. Every addition to the mapping is treated as an _and_ condition. For example, map the city, the top-rated restaurants, and the Chinese restaurants to personalize the message for the user.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c2cea0e-catalog_personalization_map_user_property.png",
        "catalog_personalization_map_user_property.png",
        727
      ],
      "sizing": "80",
      "border": true
    }
  ]
}
[/block]


5. Click **Save** to set up the personalization. 
6. Use [liquid tags](doc:liquid-tags) to create a personalized message for your target audience. 

In this example, the syntax for using a catalog column is shown below:

```liquid Liquid Tag
{{ Catalog.Sample_Catalog.["City Restaurants"] | default:"New York Top Restaurant" }}
```

![](https://files.readme.io/cc955ed-catalog_personalization_liquid_message_User_property.png "catalog_personalization_liquid_message_User_property.png")

> 📘 Map Multiple Properties
> 
> Create personalization by combining catalog send-time personalization with [constant event property](https://docs.clevertap.com/docs/constant-property#section-advanced-constant-property-with-catalog-personalization).

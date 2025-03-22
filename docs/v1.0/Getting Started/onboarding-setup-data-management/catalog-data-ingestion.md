---
title: "Catalog Data Ingestion"
slug: "catalog-data-ingestion"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Fri Aug 28 2020 10:41:42 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Feb 22 2021 21:18:39 GMT+0000 (Coordinated Universal Time)"
---
## Overview

Catalog data ingestion provides the ability to add more information from a catalog as event properties to an existing event which means you can still receive additional information without updating the app version on the user's device. 

> 👍 Example
> 
> When a user adds an item to cart, the product catalog information (e.g., product rating, category, and SKU) can be stored as event properties. These new event properties can be used like any other event property.

# Upload a Catalog

A product catalog lists all items and the information relevant to them. You must upload the catalog in the specified format, so this information can be available in your app. For more information, refer to [Create a New Catalog](https://docs.clevertap.com/docs/catalog#section-create-a-new-catalog).

# Map a Catalog

Map the event to the catalog fields. For more information, refer to [Map Catalog Columns](https://docs.clevertap.com/docs/catalog#section-map-catalog-columns).

> 👍 Example
> 
> a user performs an event _Added to cart_ for a product with a product name called _Nike shoe_. In order to fetch additional information for this product from the catalog, you must indicate that this event property called _product name_ is the same as the _Name_ column in the catalog.

# Add Columns from a Catalog

Add the required columns from a catalog to the event in the [schema](doc:schema) using the following steps:

1. Navigate to _Settings_ > _Schema_ > _Events_ > _Custom events_.
2. Click the desired event properties.
3. Click the **+Property** button and select _Add from catalog_. The _Add properties_ window displays. 

![](https://files.readme.io/8e7d3f1-Catalog_schema_upload_from_catalog.png "Catalog_schema_upload_from_catalog.png")

4. Select the catalog from the list.
5. Select the columns in the list to add as event properties. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/47dbe37-Catalog_map_property.png",
        "Catalog_map_property.png",
        562
      ],
      "border": true
    }
  ]
}
[/block]


6. Click the **Add** button. 

> 📘 Map Columns in the Schema
> 
> If the catalog is not mapped already, you can still import the columns; however, you will be asked to map the columns in the schema before you can start using them.

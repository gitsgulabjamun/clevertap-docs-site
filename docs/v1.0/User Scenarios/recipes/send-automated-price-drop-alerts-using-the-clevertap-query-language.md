---
title: "Send Automated Price Drop Alerts using the CleverTap Query Language"
slug: "send-automated-price-drop-alerts-using-the-clevertap-query-language"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Fri Jan 19 2018 21:18:05 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Sat Feb 27 2021 01:53:58 GMT+0000 (Coordinated Universal Time)"
---
As a e-commerce application, you want to notify customers when the price of an item they might be interested in has come down.

To send a notification to users who have seen a particular product but haven't purchased it, informing those users that the price has dropped. Achieve all of this in an automated fashion using CleverTap APIs.

Note: This recipe has been created assuming that your application is sending in events to CleverTap that track when a user views a product along with its details and when people purchase products, or transact.

# Step 1: Identify a Price Change in Your System

As a developer/product manager/marketer, you need to ensure that you have a system that is intimated when the price of a particular product drops. 

It will help you have the following information in that system - The product name, the category it belongs too, old price, new price, link to the product page in your app/web and link to the product image.

# Step 2: Creating a Business Logic to Trigger the Campaign

You need to create the logic around which this campaign should run, which are the rules that will make this campaign tick. 

> 👍 Price Alert Example
> 
> The price of Red Nike Shoes has dropped from $75 to $50. You now want to notify any users who saw those Red Nikes in the past 30 days, and have not bought those Red Nike Shoes and to people who have seen other Nike shoes in the past 30 days and have not bought shoes.

# Step 3: Send the Campaign using the CleverTap Create Campaign API

Using the [Create Campaign API](https://clevertap-developer-docs.readme.io/v1.0/docs/create-campaign-api), you can query CleverTap for the folks who match your business logic and send them a notification. You can repeat this process for any/all products.

---
title: "Gupshup"
slug: "gupshup"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Thu Jun 25 2020 15:46:12 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Oct 13 2020 06:19:57 GMT+0000 (Coordinated Universal Time)"
---
# Overview

CleverTap supports customers sending and receiving WhatsApp messages using Gupshup as their provider. Once a provider is selected the user needs to create a template before creating a WhatsApp campaign.

## Select Gupshup Provider

Perform the following steps to select Gupshup as the messaging provider for WhatsApp.

1. From the CleverTap dashboard, navigate to _Settings_ and click on **Channels**.
2. Select _WhatsApp_.

![](https://files.readme.io/496ab50-2020-06-25_09-04-14_Add_provider.png "2020-06-25_09-04-14_Add provider.png")

3. Click _+Providers\*\* then select _Gushup\* from the dropdown menu. Nexmo is the provider default.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/14ce97c-2020-06-25_09-12-35_Provider_credentials.png",
        "2020-06-25_09-12-35_Provider credentials.png",
        429
      ],
      "sizing": "80"
    }
  ]
}
[/block]


4. Enter the following credentials:

- Nickname: Enter the nickname for these set of credentials.
- Inbound message callback URL: This is a non-editable field.
- Delivery reports callback URL: This is a non-editable field.
- Notification account user ID: Enter the notification account user ID.
- Notification account password: Enter the notification account password.
- Two-way account user ID: Enter the two-way account user ID.
- Two-way account password: Enter the two-way account password.
- App name:  Enter the App name from the Gupshup dashboard.
- Mobile Number: Enter either a Gupshup phone number or a shortcode. You can enter phone numbers or shortcodes listed under the Gupshup dashboard > Numbers > Your Numbers.
- Facebook URL: Enter the Facebook URL from the Gupshup dashboard.

> 📘 Non-Editable Fields
> 
> The inbound message callback URL and delivery reports callback URL are non-editable fields. These values must be set up in your Gupshup account to allow CleverTap to receive inbound messages from end-users and delivery reports for messages sent through Gupshup.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cf55c41-2020-06-25_09-12-35_Provider_credentials1.png",
        "2020-06-25_09-12-35_Provider credentials1.png",
        704
      ],
      "sizing": "80"
    }
  ]
}
[/block]


> 📘 Auto Reply Checkbox
> 
> Select the checkbox if you want to set auto-replies for users who are not tracked in CleverTap.

5. Click **Save**.

![](https://files.readme.io/4fbb7a9-2020-06-26_16-05-32_Saving_credentials.png "2020-06-26_16-05-32_Saving credentials.png")

## Select Template

Once you have selected Gupshup as the provider, create a template for the campaign.

1. Select the _Templates_ option, and click **+Template**.

![](https://files.readme.io/4e41af4-2020-06-25_10-21-57_Select_Templates.png "2020-06-25_10-21-57_Select Templates.png")

2. Enter the template namespace.
3. Enter the template massage.
4. Select an attachment type from the dropdown menu.

![](https://files.readme.io/a26d185-2020-06-25_10-25-38_Name_and_save_template.png "2020-06-25_10-25-38_Name and save template.png")

> 📘 Namespace format
> 
> Namespace is combination of your Account name in capital and template name on Gupshup dashboard. for example if you account is ABC and the template name for a verified template on Gupshup is welcome_message, then namespace would be **ABC:welcome_message**

5. Click **Save**.

## Create Campaign

To create a WhatsApp campaign using Gupshup as the provider, refer to <https://docs.clevertap.com/docs/whatsapp#section-creating-a-whatsapp-campaign> for detailed instructions.

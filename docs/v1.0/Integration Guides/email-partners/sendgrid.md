---
title: "SendGrid"
slug: "sendgrid"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Fri Jan 19 2018 21:19:45 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Feb 16 2021 19:59:37 GMT+0000 (Coordinated Universal Time)"
---
CleverTap supports sending emails through SendGrid. 

# Step 1: Integrate SendGrid with CleverTap

- In the dashboard, navigate to Settings > Engage > Channels > Email. 
- Click the + Provider button. The Provider credentials page appears. 
- Select SendGrid from the provider list.
- Provide a nickname for your integration. 
- Enter the SendGrid API key. For more information on generating the key, see [Creating an API key in SendGrid](https://sendgrid.com/docs/ui/account-and-settings/api-keys/#creating-an-api-key). 

> 🚧 Note
> 
> SendGrid will discontinue the username and password on 9th December 2020. The only identifier available will be the API key.
> 
> Please reach out to your SendGrid Account Executive or SendGrid Support for any clarifications.

- From Address – This value is used as the sender email address. Most people will not open an email unless they recognize the sender.
- Reply Address - This value is used as the reply address. You can receive replies to this address.
- Save your settings.
- Finally, click Send a test email and fill in your details to test the configuration details you entered. Has it arrived in your inbox? If not, see the troubleshooting steps below.

> 🚧 Note
> 
> If you are using SendGrid credentials with SMTP integration, then enter **apikey** as username and \<API_KEY_VALUE> as password.

# Step 2: Bounces, Rejections, Unsubscriptions, and Spam

When an email is classified as bounced, rejected, or when a user unsubscribes, or it is marked as spam, CleverTap needs to be notified so that no further deliveries to that mailbox are attempted. This is considered a good practice and helps improve your sender reputation. Good sender reputation virtually guarantees better delivery rates.

To enable support for these, follow the steps:

- Navigate to Settings > Mail Settings and enable Event Notification.
- Navigate to Settings from within Event Notification.
- In the HTTP Post URL input box, add the Callback URL, as shown in the image below.
- Check the following from the Select Options menu – Dropped, Bounced, Unsubscribed From, and  Marked as Spam.
- Save your settings.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c7c968d-Email_Sendgrid_Settings.png",
        "Email_Sendgrid_Settings.png",
        669
      ],
      "border": true
    }
  ]
}
[/block]


**Notes**

- When an email bounces, drops or unsubscribes, CleverTap will mark the user’s email address as inactive.
- The count of email bounces is shown on the email report screen.

# Step 3: Troubleshooting

Check your SPAM folder to see if the message has been classified as SPAM by your email provider.

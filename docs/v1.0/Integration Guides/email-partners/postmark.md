---
title: "Postmark"
slug: "postmark"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Fri Jan 19 2018 21:19:37 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Feb 16 2021 19:58:55 GMT+0000 (Coordinated Universal Time)"
---
CleverTap supports sending emails through Postmark.

# Step 1: Integrating Postmark with CleverTap

- In the dashboard, navigate to Settings and click on Integrate Email.
- Select Postmark.
- Host value should be smtp.postmarkapp.com.
- Port value should be 587.
- Postmark API key value is your Postmark API key.
- From Address – this value is used as the sender email address. Most people will not open an email unless they recognize the sender.
- Save your settings.
- Finally, click Send a test email and fill in your details to test the configuration details you entered. Has it arrived in your inbox? If not, see troubleshooting steps below.

# Step 2: Bounces, Rejections, and Unsubscriptions

When an email is classified as bounced, rejected or when a user unsubscribes, CleverTap needs to be notified so that no further deliveries to that mailbox are attempted. This is considered a good practice and helps improve your sender reputation. Good sender reputation virtually guarantees better delivery rates.

To enable bounce handling, please follow Postmark guide. You’ll need to specify a CleverTap callback URL in your Postmark account settings page.

To enable support for bounce processing, follow the steps below:

- Navigate to Your Server → Settings → Outbound.
- As shown in the image below, in the Bounce Webhook input box, add the Callback URL as shown in your CleverTap Email Settings page.
- Save your settings.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2ea0382-webhooks1.png",
        "webhooks1.png",
        1808
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

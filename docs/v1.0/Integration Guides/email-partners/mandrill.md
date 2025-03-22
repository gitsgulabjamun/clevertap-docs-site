---
title: "Mandrill"
slug: "mandrill"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Fri Jan 19 2018 21:19:29 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Feb 16 2021 19:57:50 GMT+0000 (Coordinated Universal Time)"
---
CleverTap supports sending emails through Mandrill.

# Step 1: Integrating Mandrill into CleverTap

- In the dashboard, navigate to Settings and click on Integrate Email.
- Select Mandrill.
- In the Host text box, fill the host value as smtp.mandrillapp.com.
- In the Port text box, fill Port value as 587.
- Fill in the Username value as your Mandrill username.
- API Key value is any valid Mandrill API key.
- From Address – this value is used as the sender email address. Most people will not open an email unless they recognize the sender.
- Save your settings.
- Finally, click Send a test email and fill in your details to test the configuration details you entered. Has it arrived in your inbox? If not, see troubleshooting steps below. 

# Step 2: Bounces, Rejections, Spam, and Unsubscriptions

When an email is classified as bounced, rejected or when a user unsubscribes or marks as spam, CleverTap must be notified so that no further deliveries to that mailbox are attempted. This is considered a good practice and helps improve your sender reputation. Good sender reputation virtually guarantees better delivery rates.

- In the dashboard, navigate to Settings > Webhooks.
- Click on the Add a Webhook link.
- As shown in the image below, check the following: Message is Bounced , Message is Rejected, Message Recipient Unsubscribes and Message is Soft-Bounced.
- In the Post to URL input box, add the Callback URL as shown in your CleverTap Email Settings page.
- Save your settings.
- In Post to URL section, paste the call back URL you'll get from CleverTap Settings -> Email settings page

![](https://files.readme.io/c2dc8ef-Email_Mandrill_settings.png "Email_Mandrill_settings.png")

- In Dashboard, navigate to Settings → Sending defaults.
- As shown in the image below, check the following: Add Unsubscribe Footer

![](https://files.readme.io/39ea47c-mandril.png "mandril.png")

# Step 3: Troubleshooting

- Check whether Mandrill API key used is not restricted by IP address.
- Make sure that your Mandrill API key is active.
- Check your SPAM folder to see if the message has been classified as SPAM by your email provider.

---
title: "Amazon Simple Email Service"
slug: "amazon-simple-email-service"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Fri Jan 19 2018 21:19:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Feb 16 2021 19:57:07 GMT+0000 (Coordinated Universal Time)"
---
CleverTap supports sending emails through _Amazon SES_. 

# Integrating Amazon SES with CleverTap

To integrate Amazon SES with CleverTap, follow the steps below:

1. In the dashboard, navigate to _Settings_ and click on **Integrate Email**.
2. Select _Amazon SES_.
3. Navigate to _Server Name_ and _Port_ values should be grabbed from your _Amazon SES_ > _Dashboard_ > _SMTP Settings_.
4. _Username_ and _Password_ values should match your SMTP credentials from _Amazon SES_. These are not your AWS account credentials.
5. _From Address_ should have one of the values from _Amazon SES_ > _Dashboard_ > _Verified Senders_ > _Email addresses list_. Most people will not open an email unless they recognize the sender.
6. Save your settings.
7. Click **Send a test email** and fill in your details to test the configuration details you entered. Has it arrived in your inbox? If not, refer to the troubleshooting steps below.

# Enabling Bounce and Complaint Processing

When an email is classified as bounced, CleverTap needs to be notified so that no further deliveries to that mailbox are attempted. This is considered a good practice and helps improve your sender reputation.

To enable support for bounce processing, follow the steps below:

1. Navigate to _Amazon SNS_.
2. Create a _Topic_.
3. Select the _Topic_ and navigate to _Actions_ > _Subscribe to Topic_.
4. Select _HTTPS_ as the _Protocol_.
5. As the _Endpoint_ value, add the _Callback URL_ as shown in your CleverTap _Email_ page.

![](https://files.readme.io/b7d933a-Callback_URL_v1_CLEVER-4714.png "Callback_URL_v1_CLEVER-4714.png")

6. Save your settings by clicking on **Create Subscription**.
7. Navigate to _Amazon SES_.
8. Select the _Email Address_ you had previously added to the CleverTap Dashboard.
9. Click on _View Details_.
10. Click on _Notifications_ > _Edit Configuration_.

![](https://files.readme.io/e5ae062-AWS_Domains_Notifications__v1_-_CLEVER-4714.png "AWS Domains_Notifications__v1_-_CLEVER-4714.png")

11. Under _SNS Topic Configuration_, select the topics you created earlier such as _Bounces_, _Complaints_, and _Deliveries_ by clicking on the **Include original headers** checkboxes.

![](https://files.readme.io/cc1da78-Edit_Notification_Configuration.png "Edit Notification Configuration.png")

12. Save the configuration.

# Handling Unsubscribe Requests

To handle unsubscribed requests from users, refer to the steps in [Handling Unsubscribes](doc:handling-unsubscribes).

# Troubleshooting

The following explains some troubleshooting scenarios: 

- Sandbox mode: If you’re getting an _Invalid Credentials_ message when saving your settings, it could be that your _Amazon SES_ account is a sandboxed one. You need a valid production-ready _Amazon SES_ account to save your credentials. 
- Spam: Check your _Spam_ folder to see if the message has been classified as _Spam_ by your email provider.
- Email rendering: If your email does not render properly, check the subject line for newline characters or too many additional spaces. _Amazon SES_ email converts data from UTF-8 format to a 7-bit ASCII format before sending it out. The next line characters or additional spaces may interfere with this conversion.

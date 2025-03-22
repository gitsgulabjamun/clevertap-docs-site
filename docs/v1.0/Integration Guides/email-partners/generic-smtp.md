---
title: "Generic SMTP"
slug: "generic-smtp"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Fri Jan 19 2018 21:19:20 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Mar 22 2021 10:35:22 GMT+0000 (Coordinated Universal Time)"
---
While we highly recommend using a reputable email service provider like Amazon SES, Postmark, or SendGrid, you can also integrate your own SMTP gateway to send emails.

# Step 1: CleverTap Dashboard Settings

- In the dashboard, navigate to Settings and click on Integrate Email.
- Select SMTP.
- In the Host text box, fill your publicly accessible IP address or hostname of your SMTP server.
- In the Port text box, fill in your SMTP port.
- Username and Password values should your SMTP credentials needed to connect to the service.
- From Address – this value is used as the sender email address. Most people will not open an email unless they recognize the sender.
- Save your settings.
- Finally, click Send a test email. Has it arrived in your inbox? If not, see troubleshooting steps below.

# Step 2: Understanding Bounces

When an email is rejected by a recipient’s email server, it’s called a bounce. 

There are two kinds of bounces: 

- Soft Bounces: Soft bounces typically indicate a temporary delivery issue to an address. Some reasons for a soft bounce could be that the recipient’s mailbox is full, or the Mail Server is down. Soft bounces are included in the campaign reports; the users are not marked as unsubscribed.
- Hard Bounces: A hard bounce indicates a permanent reason an email cannot be delivered. Hard bounces are included in the campaign reports; the users are marked as unsubscribed. 

# Step 3: Processing Bounces

To process bounced email messages, you’ll need to make an HTTP request to the callback URL specified in Dashboard → Settings → Integration → Email → Setup provider tab → Nickname.

The request should be of type HTTP POST with the payload in the following format.

```json
// if you're not sure of the time of the bounce, just set it to the current epoch

[
    {
        "event": "softbounce",
        "data": [
            {
                "e": "email1@emailprovider.com",  // email id that soft bounced
                "ts": 1435322805                  // time of the bounce
            },
            {
                "e": "email2@emailprovider2.com", // email id that soft bounced
                "ts": 1435322805                  // time of the bounce
            }
        ]
    },
    {
        "event": "hardbounce",
        "data": [
            {
                "e": "email3@emailprovider.com",   // email id that hard bounced
                "ts": 1435322805
            }
        ]
    }
]
```

# Step 4. Processing Unsubscriptions

To handle unsubscription requests from users, you can follow the steps mentioned [here](doc:handling-unsubscribes).

To share unsubscription data from custom pages directly, you’ll need to make an HTTP request to the callback URL specified in Dashboard → Settings → Connectors tab → Email section. The request should be of type HTTP POST with the payload in the following format.

```json
// if you're not sure of the time of the unsubscribe, just set it to the current epoch

[
    {
        "event": "unsubscribe",
        "data": [
            {
                "e": "email1@emailprovider.com",  // email id of the user
                "ts": 1504632929                  // time of the unsubscribe
            },
            {
                "e": "email2@emailprovider2.com", // email id of the user
                "ts": 1500630929                  // time of the unsubscribe
            }
        ]
    }
]
```

# Step 5: Troubleshooting

- Since you’re using your own SMTP gateway, some email providers like Gmail, Yahoo might not deliver the email in your inbox.
- Check if you have correctly set up DKIM and SPF.
- Check if your [IP](https://hosting.review/web-hosting-glossary/#11)/domain is blacklisted by Spamhaus.

> 🚧 The unsubscription link will not work for test emails sent from the notification creation page.

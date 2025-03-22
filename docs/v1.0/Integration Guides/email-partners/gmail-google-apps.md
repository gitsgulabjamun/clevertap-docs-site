---
title: "Gmail/Google Apps"
slug: "gmail-google-apps"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Fri Jan 19 2018 21:19:09 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri Feb 09 2018 02:04:30 GMT+0000 (Coordinated Universal Time)"
---
If you want to use your existing Gmail or Google Apps account to send out emails, you can do so using the SMTP integration.

# Step 1: Gmail Settings

- You’ll require to generate an App password with Google.
- Activate 2-Step Verification process.
- Visit the App passwords page.
- Follow the steps here to set it up and save the password you generate.

# Step 2: Integrating Gmail with CleverTap

- In the dashboard, navigate to Settings and click on Integrate Email.
- Select SMTPS.
- In the Host text box, fill in smtp.gmail.com.
- In the Port text box, fill in 465.
- Username and Password values should your email address and the App password that you generated.
- From Address – this value is used as the sender email address.
- Save your settings.
- Finally, click Send a test email.

# Step 3: Understanding Bounces

When an email is rejected by a recipient’s email server, it’s called a bounce. 

There are two kinds of bounces:

- Soft Bounces : Soft bounces typically indicate a temporary delivery issue to an address. Some reasons for a soft bounce could be that the recipient’s mailbox is full, or the Mail Server is down. Soft bounces are included in the campaign reports; the users are not marked as unsubscribed.
- Hard Bounces : A hard bounce indicates a permanent reason an email cannot be delivered. Hard bounces are included in the campaign reports; the users are marked as unsubscribed. 

# Step 4: Processing Bounces

To process bounced email messages, you’ll need to make an HTTP request to the callback URL specified in Dashboard → Settings → Connectors tab → Email section. 

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

# Step 5: Handling Unsubscriptions

To handle unsubscription requests from users, you can follow the steps mentioned [here](doc:handling-unsubscribes).

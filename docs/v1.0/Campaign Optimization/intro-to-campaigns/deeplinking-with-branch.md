---
title: "Deeplinking with Branch"
slug: "deeplinking-with-branch"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Thu Jul 02 2020 05:40:32 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Mar 15 2021 14:36:12 GMT+0000 (Coordinated Universal Time)"
---
We have improved our deep linking integration with Branch for email. Marketers can now directly route users to the app from an email, bypassing the web browser.  
This ensures a seamless user experience and reduces dropoffs as users are redirected to the app or an app store

# Who will the integration work for ?

This integration will work only for clients who have a Branch and Sendgrid account.

# Steps for integration

1. App must have the Branch SDK.
2. CNAME the sendgrid domain to Branch. [https://help.branch.io/using-branch/docs/universal-email-integration-guide](universal-email-integration-guide).

# Steps to use deeplinks

1. Check that you send emails using the Sendgrid account that has been CNAMED to Branch.
2. Check you add `universal = "true"` parameter at the end of your deeplinks , this converts the deeplink into a universal link.

```text
<p><a href="http://cdn.branch.io/branchster-angular/?body_index=4&color_index=2&face_index=1&monster=true&monster_name=DLE_Deep_link" universal="true">Deep_Link</a></p>
```

# What elements from the Email editor can be used for sending deeplinks ?

1. You can use the HTML and Custom HTML(Dynamic Content) elements available in the drag and drop editor to form and embed deeplinks in your email.
2. Check that you test the email once before you deploy the campaign to ensure deeplinks are working as expected.

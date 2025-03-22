---
title: "Send Automated Reminders"
slug: "sending-automated-reminders"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Fri Jan 19 2018 21:16:38 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Jan 07 2021 19:08:45 GMT+0000 (Coordinated Universal Time)"
---
In CleverTap, there are 2 types of reminders: one-time reminders and recurring reminders.

Aim: A user should receive an automated reminder before an event that might interest her.

Skills required: Well versed with CleverTap server APIs and confident with the client side SDK

Steps:

\-- One time reminder

Example: a simple reminder before a particular show or an event. Example: Remind me 25 minutes before the Manchester United vs. Arsenal match this Saturday.

You need to send an event to CleverTap, one of the properties of said event needs to be a date/time property value

Set up a live user segment campaign that triggers, before the date/time property

Link to the segment in your account - <https://dashboard.clevertap.com/x/segments/date-time.html6>

\-- Recurring reminder

Example: a reminder that triggers before every show or event. Example: Remind me 25 mins before every EPL match

Telling CleverTap which shows or events the user is setting an alarm for:  
Everytime the user subscribes to a show, or an event in your app, you will update a profile variable against that user. The variable will read something like "Current Subscriptions" -- SUBs ID 1, SUBs ID2 etc.

Setting an event against people whenever a new episode releases:  
Every Time a new episode comes out in your arsenal of titles, you will query CleverTap to ask for the people who are currently subscribed to said title.  
API to download profiels - <https://support.clevertap.com/docs/api/working-with-user-profiles.html#download-user-profiles3>

Then you will upload an event against those people. A sample event would be of the type  
API to upload events - <https://support.clevertap.com/docs/api/working-with-events.html#upload-events5>

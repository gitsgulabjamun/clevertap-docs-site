---
title: "Journeys_Clone"
slug: "journeys_clone"
excerpt: ""
hidden: true
metadata: 
  image: []
  robots: "index"
createdAt: "Wed Aug 19 2020 00:54:31 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri Sep 04 2020 18:28:33 GMT+0000 (Coordinated Universal Time)"
---
## Overview

# Overview

Journeys is a visual campaign builder that lets you create omnichannel messaging experiences for your users. Journeys are ideal for engaging users across the lifecycle of your app. 

## Use Cases

Journeys provide the following functionality:

- Build User Onboarding Journeys that engage users over several days or weeks and on different channels as you educate them about your service.
- Build Promotional Journeys to entice your users to transact at different points of time.
- Long-running re-engagement campaigns to pull users back into your service if they begin to slip away.

Journeys is available on your CleverTap dashboard. Click on the _Journeys_ link in the left nav bar in your CleverTap dashboard. Once on the page, you can click on the _create_ icon to create your first journey.

> 👍 Journeys are only available to customers who are on the [Essentials plan](https://clevertap.com/pricing/).

# Journey Components

A journey is a combination of _Segment_ nodes and _Engagement_ nodes. You can connect _Segment_ nodes and engagement nodes to each other to create powerful automation.

Types of _Segment_ nodes

[block:parameters]
{
  "data": {
    "h-0": "Segment Node",
    "h-1": "What it does",
    "h-2": "Description",
    "0-0": "Action",
    "0-1": "As soon as the user performs an action, the user enters this node.",
    "0-2": "Qualification to this node occurs as soon as the user performs the said event.",
    "1-0": "Inaction",
    "1-1": "Segment users who did the 1st event, but did not do the 2nd event within a specified time interval.",
    "1-2": "E.g. Qualify users who added to cart, but did not purchase within 5 mins.",
    "2-0": "Past Behavior",
    "2-1": "Segment users who performed and did not perform a set of events in the past n days.",
    "2-2": "E.g. Users who did Video Watched AND did not do Subscription Paid in the Last 30 days.",
    "3-0": "Date Time",
    "3-1": "Segment users based on a date time property value like flight time, etc.",
    "3-2": "E.g. Users who have their flight after 2 hours.",
    "4-0": "Journey Trigger",
    "4-1": "You can use this node in the entry criteria only.  \nA user is qualified on this node when the same user is qualified for the corresponding node in another Journey, from where the current Journey is triggered.",
    "4-2": "E.g. Journey 1 has a Push message node. You want to move all users who were sent the push into another Journey. Journey trigger allows you to do this.",
    "5-0": "Page Visit",
    "5-1": "Segment users as soon as they visit a specific page.",
    "5-2": "Web based segment.",
    "6-0": "Referrer Entry",
    "6-1": "Segment users based on a referring website or campaign.",
    "6-2": "Web based segment.",
    "7-0": "Page Count",
    "7-1": "Segment users based on the number of pages visited by them.",
    "7-2": "Web based segment.",
    "8-0": "Custom list",
    "8-1": "You can use this node in the entry criteria only.  You can upload custom lists of users for engage in the Journey.",
    "8-2": "Custom segment. For example, users from your Retail Point of Sale (POS)."
  },
  "cols": 3,
  "rows": 9,
  "align": [
    "left",
    "left",
    "left"
  ]
}
[/block]


# Building Your First Journey

## Step 1: Define the Entry Criteria

When you start building your journey, you need to define your “entry criteria”, this is the condition, which when met, users will enter and be a part of the journey. The entry criteria of a journey is essentially the segment of users you want to target.

The various types of segments you can use are:

- Live User segments: These segments qualify people as soon as they meet your specified criteria
- Past Behavior segments: In this type of _Entry Criteria_, users who match your specified entry criteria will qualify once every twenty-four hours.

Live user segments are further bifurcated as follows: 

- Action: In this type of _Entry Criteria_, users will enter your journey, as soon as they perform an event. Example: Enter people into your Journey, as soon as they install your application.
- Inaction: Users enter your Journey, as soon as they don’t do something in the future. Example: If someone adds an item to their cart, but don’t transact within 15 minutes.
- Property Date-time segments: Qualify a user relative to a specific date and time in a property.
- Page visit: Users will qualify as soon as they reach a web page that matches your specifications.
- Refer entry: When users come to your website from a certain referrer. For example, Facebook or Twitter will be qualified for your journey.
- Page count: As soon as the user sees the specified number of pages, they will be a part of your journey.

> 📘 Journey Scheduler
> 
> We support One time, Multiple date, and recurring Journeys. For monthly payment reminders, you can schedule a journey to start on the 1st of every month.

## Step 2: Select a Journey Timeout

Journeys are sequences of campaigns. At each stage of a journey, you can choose to further segment your audience as well as deliver campaigns across multiple channels.

While creating Journeys, you can choose to specify a _Journey Timeout_, this will be the maximum amount of time a user will spend in a Journey. Once this window is completed for a user, they will be exited from the journey, no matter which stage they are at.

> 🚧 Once a user has exited the journey, the user is free to re-qualify, if you have allowed re-entry in your setup.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0dfbbd2-Journeys_Timeout.png",
        "Journeys_Timeout.png",
        715
      ],
      "border": true
    }
  ]
}
[/block]


**Allow Users to Re-Enter a Journey**  
By default, a user qualifies for a journey only once; however, you can allow users who have exited from a journey to re-enter it should they meet the entry criteria at a later date.

Once a user is a part of a journey, the only way they can re-qualify is if they exit the journey, either by matching one of the specified goals or by being forced out of the journey and subsequently meeting the specifications of the entry criteria.

Refer to the following example:

![](https://files.readme.io/d00fca9-Journeys_Allow_users_reentery.png "Journeys_Allow_users_reentery.png")

When a user makes a purchase they enter into the journey. After a 20 minute wait time, qualifying users receive a Push Notification with a discount promotion code.

If the journey was set-up with the default behavior (users cannot re-enter the journey) then after they purchase and receive the push notification they exit from the journey. If a user makes another purchase subsequent to the initial purchase they will not receive another promotional push notification since this journey does not allow for re-entry.

If, however, your intent is to allow users to receive a new promotional discount after each subsequent purchase, you’d select the option to allow a user to re-enter as follows.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bd74cac-Journeys_Re-enter_Users.png",
        "Journeys_Re-enter_Users.png",
        656
      ],
      "border": true
    }
  ]
}
[/block]


## Step 3: Define the Journey

**Connect Segment & Engage Blocks**  
Once you have defined a segment of users, you can choose to communicate with the segment by dragging and dropping a channel of communication from the palette on the right-hand side. This communication could go to users who match the segment criteria specified by you, or to the rest of the users i.e., the users who don’t match your segment criteria.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7a32f70-Journeys_Connect_Segment_Engage_Blocks.png",
        "Journeys_Connect_Segment_Engage_Blocks.png",
        1051
      ],
      "border": true
    }
  ]
}
[/block]


**Connect Engage & Segment Blocks**  
After a user receives a message, you can add a segment after that to ensure that only users who meet the criteria specified by you are taken further in the journey. 

Example: After users receive a push notification, wait for 1 day, check if users have transacted, for the people that have transacted, send them down path A, and for those who haven’t send them down path B.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/37b12e3-Journey_Connect_Engage_Segment_Blocks.png",
        "Journey_Connect_Engage_Segment_Blocks.png",
        973
      ],
      "border": true
    }
  ]
}
[/block]


**Connect Engage & Engage Blocks**  
After a user receives a message, you can follow it up immediately, or with a delay with another message on a channel of communication of your choosing. 

Example: After a user receives a push notification, you can wait for three days, and send another push notification.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ee6bb98-Journeys_Connect_Engage_Engage_Blocks.png",
        "Journeys_Connect_Engage_Engage_Blocks.png",
        905
      ],
      "border": true
    }
  ]
}
[/block]


**Connect Segment & Segment Blocks**  
After a user has been segmented, you can follow it up with another segment to further refine your journey. 

Example: If someone has not transacted in the last 30 days, send users who qualify for this segment down path A and if one of these users adds an item to their cart, and doesn’t buy within 15 minutes, send them down a specific path.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/430bb85-Journeys_Connect_Segment_Segment_Blocks.png",
        "Journeys_Connect_Segment_Segment_Blocks.png",
        999
      ],
      "border": true
    }
  ]
}
[/block]


> 🚧 Note
> 
> You can apply campaign limits in a journey; however, global throttling is not supported in Journeys.

### User Flow Management

Your users perform one action in a journey and then move on to the next action; however, there may be instances when they do not move forward in the journey. 

#### **Users waiting at Segment node**

There may be users waiting at the _Segment_ node. For example, there may be users who added a product to the cart and did not buy it. They may have changed their decision or maybe they simply forgot about it. These users are waiting in the journey until they perform the next action. You must be able to nudge them to perform the next action and continue the journey. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/662237f-Journeys_Segment_Waiting_Users_Blink.png",
        "Journeys_Segment_Waiting_Users_Blink.png",
        456
      ],
      "border": true,
      "caption": "Segment node"
    }
  ]
}
[/block]


You can send these users on a different path or exit them from the journey completely. 

To send them on a different path, set the qualifying period, and then send them to the following node to continue their journey. 

 \#####**Step 1 - Set the qualifying window**  
Click the hexagon on the _Segment_ node to set the qualifying window for the users. 

> 🚧 The qualifying window must be set up in combination with the drawing of the _Node Timeout_ connector. The users will not move if the _Node Timeout _is not connected to another node.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6ae12e0-Journeys_Segment_timeout.gif",
        "Journeys_Segment_timeout.gif",
        1226
      ],
      "border": true,
      "caption": "Node timeout"
    }
  ]
}
[/block]


##### **Step 2 - Connect to another node** 

Connect the _Node Timeout_ connector to another node. After the qualifying window is complete, the user automatically moves on to the next node through this timeout connector. For understanding the node timeout evaluation schedule, please refer to the advanced section below. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6e3878f-Journey_Connect_Node_timeout.gif",
        "Journey_Connect_Node_timeout.gif",
        1238
      ],
      "border": true,
      "caption": "Connect Node"
    }
  ]
}
[/block]


> 📘 Note
> 
> The yellow indicator on your segment node is a reminder that you may need to plan for Waiting users on this node in the Journey.

#### **Users waiting at Engage node**

There may be another instance where the users have received a message but they may still wait for action. If the users do not click the message, then they are waiting for the next action.  It means that when you created the journey, the node following the _Engage_ node is connected with a _Viewed_ or _Clicked_ connector. When you draw a  _Viewed_ or _Clicked_ connector, a phantom node with a node timeout appears automatically. You can set the qualifying window from this phantom node. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7d174d7-Journeys_pseudo_node.gif",
        "Journeys_pseudo_node.gif",
        1238
      ],
      "border": true,
      "caption": "Phantom Node"
    }
  ]
}
[/block]


#### **Force exit Users**

You can use the \*_Force exit_ operator node to create an exit for users in the journey. For example,  if you want the users to exit and re-enter the current journey you can set up this node.  Drag the _Force exit_ node from the_ Operator Node_ pane and connect it to the _Segment_ node.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2335591-Journey_Segment_timeout_Force_exit.gif",
        "Journey_Segment_timeout_Force_exit.gif",
        1240
      ],
      "border": true,
      "caption": "Force exit"
    }
  ]
}
[/block]


#### **Auto Align & Space**

An elaborate journey may contain multiple overlapping nodes and connections. The _Auto Align & Space_ button helps you add clarity to the Journey canvas. 

Click the **Auto Align & Space **button on the upper right corner of the Journey canvas. 

The _Auto Align & Space_ button automatically rearranges and spaces your nodes so that all the stats are visible clearly. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/73d6fc1-Journeys_rearrange.gif",
        "Journeys_rearrange.gif",
        1228
      ],
      "border": true
    }
  ]
}
[/block]


> 🚧 The nodes on the Nodes Stats tab are arranged automatically so that all the stats are visible clearly.

## Step 4: Add Goals to Your Journey

Goals are behaviors that you want users to perform. On completing a goal, users are exited from the Journey. You can drag and drop any segment from the right-hand side palette and add it as a goal for your Journey. A Journey can support up to three goals, if a user completes any one of the goals, they will be exited from the journey.

**Common Examples of Goals**

- Action based goals: In this goal, users will exit your Journey as soon as they perform a goal, in real-time. Example: Exit people as soon as they perform the “Charged” event, where “item” is “Red Nike Shoes”
- Past behavior goals: Past behavior goals, like segments, are evaluated once every twenty-four hours, at 12:00 am. Once the goal is evaluated, users who meet this goal will not be a part of the Journey from that day onwards. Example: Exit people if they have spent at least $300 in the last week. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/49a8f33-journey8.png",
        "journey8.png",
        746
      ],
      "border": true
    }
  ]
}
[/block]


## Step 5: Save Journey

We have now successfully built a journey.

Now that we have built a journey, save it. You can save a journey in draft mode so that you can make more changes at a later date or time.  All edits are possible to the journey at this stage. 

Click the **Save** button. 

## Step 6: Publish Journeys

When you are ready to publish your journey and all the edits are complete, your journey can go live. Open the journey and click **Publish**.  You can view the [Journey Statistics](doc:viewing-statistics) page to check the status of your journey.

> 🚧 Editing a Journey
> 
> You can edit only the _What_ section in an engagement node after you publish a journey.

# Advanced Topics

## Stop/Pause Journeys

You can _Stop_ or _Pause_ a published journey either from within the journey (top right corner) or from the _Journeys_ listing page.

- _Pause_ temporarily halts the qualification of new users in the journey. You can use the same button to resume. Users in a journey continue traveling through the journey or receiving messages. You can bulk pause or bulk resume paused journeys from the journey listing page.
- Stop completely halts the journey. A stopped journey cannot be restarted. It stops the qualification of new users, any user movement within the journey, and sending out any campaigns. You can bulk stop Journeys from the journey listing page.

## Past Behavior Segments & Journey Qualification

- If your entry criteria is a _Past Behavior_ segment, users will be qualified for your journey at the start time specified.
- If you have added a _Past Behavior_ segment along your journey that segment will be evaluated once a day at 12:00 a.m. (in the timezone of your account).
- If you have added a _Past Behavior _segment as a goal that segment will be evaluated once a day at 12:00 a.m. (in the timezone of your account).
- Node timeout Evaluation - Node timeout evaluation happens every 1 hour at 1 p.m., 2 p.m., 3 p.m., and so on, where start time depends on the account. Here is an example:

<!---->

- User A reaches a node 4 at 2:30 p.m. with node time out of 1 hour. Her window is over at 3:30 p.m. After this, even if the user performs the action, she will not move via the _Yes_ path as the user is marked for node timeout. At 4 p.m. user, A will timeout. 
- User B reaches a node 4 at 3:30 p.m. with node timeout of 1 hour. Her window will get over at 4:30 PM after which even if the user performs the action, she will not move via the _Yes_ path as user is marked for node timeout. At 4 p.m. user B will NOT move out. At 5 p.m. (i.e., the next evaluation run), the user will move via node timeout.
  - If you have added a _Past Behaviour_ segment in the middle of the journey and have drawn node timeout path with a qualifying window set less than 24 hours value, all users might move via node timeout path as PBS is only evaluated every 24 hours.

## Set Do Not Disturb (DND) for Journeys

CleverTap provides an option for setting the “Do Not Disturb” hours for notification delivery while creating a journey. The DND feature manages message delivery via engaging nodes in journeys so that campaigns are only sent after the DND period or discarded.  If users send time-specific messages via journeys where they send notifications to registered users who requested a specific active time and a specific inactive time, notifications will only be sent during the active time. 

To set DND for Push, SMS, Email & Web Push journeys, perform the following steps:

1. On the entry node of a journey, you will see the checkbox for DND.

![](https://files.readme.io/dc6ec56-2020-08-17_16-06-04_Edit_Journey_Criteria.png "2020-08-17_16-06-04_Edit Journey Criteria.png")

2. Click the **Do Not Disturb (DND)** checkbox.
3. Select the days and input the times you do not want to send campaign notifications. If you want to use the same time inactive period for each day, click the Copy Time To All link.

![](https://files.readme.io/3506690-2020-08-17_16-10-55_Select_DND.png "2020-08-17_16-10-55_Select DND.png")

> 📘 DND Conflict Hours
> 
> If you schedule a message node to send out delivery during the scheduled DND hours, you will receive an error message. This error message appears at the publish of the journey.

![](https://files.readme.io/7ff47d7-2020-08-17_16-14-20_DND_hours_Conflict.png "2020-08-17_16-14-20_DND hours Conflict.png")

## Set Campaign Frequency for Journeys

Campaign frequency provides the ability to define when the messages should be delivered. If a user qualifies outside this window, the message is discarded.

To set campaign frequency for In-app, Web pop-up, or Exit intent nodes in journeys, perform the following steps: 

1. Select _In-app_ and click on the node to edit it.

![](https://files.readme.io/0c61f4c-2020-08-17_16-22-32_Online_Journeys.png "2020-08-17_16-22-32_Online Journeys.png")

2. Click the **Set frequency** checkbox.

![](https://files.readme.io/ec08b02-2020-08-17_16-25-56_Journey_set_frequency.png "2020-08-17_16-25-56_Journey_set frequency.png")

3. Select the days and input the times you do not want to send campaign notifications. If you want to use the same time inactive period for each day, click the **Copy Time To All** link.

![](https://files.readme.io/6d4ba30-2020-08-17_16-30-44_Set_DND_Dates.png "2020-08-17_16-30-44_Set DND Dates.png")

4. Click **Continue**.

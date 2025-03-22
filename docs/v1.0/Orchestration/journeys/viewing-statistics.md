---
title: "Viewing Journey Stats"
slug: "viewing-statistics"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Fri Nov 15 2019 07:54:26 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Mar 15 2021 15:45:10 GMT+0000 (Coordinated Universal Time)"
---
# Concepts

You will need to know some key terms to understand the Journey stats.

- **Goal Met:** If a goal is set in the Journey builder, these are all users who met the goal. 
- ** Journey Timeout:** If a Journey timeout is set in the Journey builder (entry criteria), these are all the users who timed out.
- ** Node Timeout:**  The qualifying window that is set for the node, after which the users will move on to the next node via Node timeout connector.
- **Completed:** If a goal is not set in the Journey builder, these are all the users who successfully reached the last node of the Journey.

# Overview

Click _Engage_ > _Journeys_ from the left side menu. The _Journey List _page appears. Search for a journey and then click to open a Journey.  The _Journey Canvas_ has three tabs:

1. Build - Shows your Journey components and connections

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/03a1fad-Journeys_tab_build.png",
        "Journeys_tab_build.png",
        1376
      ],
      "border": true,
      "caption": "Build Journey"
    }
  ]
}
[/block]


2. Node Stats - Shows stats for each node

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c175c06-Journeys_Tab_Node_Stats.png",
        "Journeys_Tab_Node_Stats.png",
        1378
      ],
      "border": true,
      "caption": "Node stats"
    }
  ]
}
[/block]


3. Journey Stats - Shows stats for the Journey

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6141b6b-Journeys_Tab_Journey_Stats.png",
        "Journeys_Tab_Journey_Stats.png",
        1379
      ],
      "border": true,
      "caption": "Journey Stats"
    }
  ]
}
[/block]


# Node Stats

The Node Stats tab shows you the stats for each node. You can account for all users who entered the Journey and their current state.

Click the **Node Stats** tab. Select the _date range_ from the calendar. The following shows how to check the statistics for each of the node types:

## Entry Node

This is the first node in the Journey. There can be only one _Entry_ node.  An _Entry_ node can only be a _Segment_ node. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f7aca14-Journeys_node_Entry.png",
        "Journeys_node_Entry.png",
        317
      ],
      "sizing": "smart",
      "caption": "Entry node"
    }
  ]
}
[/block]


[block:parameters]
{
  "data": {
    "h-0": "Stat",
    "h-1": "Description",
    "0-0": "Qualified",
    "0-1": "The total number of users who qualified for the journey. This stat is available only on the entry node.",
    "1-0": "Entered Journey",
    "1-1": "The users who have entered a Journey via node connectors, such as Yes or No.",
    "2-0": "Control Group",
    "2-1": "The number of users who were marked for the control group.  \n  \nA control group is a set of users who do not receive any marketing campaigns. You can measure the effectiveness of your initiatives by comparing this group with the target group of users who received your campaigns."
  },
  "cols": 2,
  "rows": 3,
  "align": [
    "left",
    "left"
  ]
}
[/block]


## Segment Nodes

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5a1ed63-Journeys_node_Segment.png",
        "Journeys_node_Segment.png",
        316
      ],
      "caption": "Segment node"
    }
  ]
}
[/block]


[block:parameters]
{
  "data": {
    "h-0": "Stat",
    "h-1": "Description",
    "0-0": "Entered Node",
    "0-1": "The total number of users who entered the node. It includes the sum of all the users from Moved forward, Waiting users, Goal Met, and Journey timeout.",
    "1-0": "Moved forward",
    "1-1": "The users who have moved forward via node connectors, such as Yes, No, or Node Timeout.",
    "2-0": "Waiting users",
    "2-1": "The users waiting at a node to qualify. The users may wait for either of the 2 reasons:  \n1. Delay from a previous node  \n2. Waiting to perform an action",
    "3-0": "Goal Met",
    "3-1": "These are the users who have performed the intended goal, such as viewing a movie or purchasing a product.",
    "4-0": "Journey timeout exits",
    "4-1": "These are the users who exited the Journey after the time duration set for the Journey, that is, Journey Timeout is complete."
  },
  "cols": 2,
  "rows": 5,
  "align": [
    "left",
    "left"
  ]
}
[/block]


## Engage Nodes

Simply put, _Engage_ nodes are campaigns. You can see the stats of each campaign from the _Node Stats_ tab. Click the **Engage** node from the _Nodes Stats_ tab to see the campaign statistics. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e443e68-Journeys_nodes_Engage.png",
        "Journeys_nodes_Engage.png",
        315
      ],
      "caption": "Engage node"
    }
  ]
}
[/block]


[block:parameters]
{
  "data": {
    "h-0": "Stat",
    "h-1": "Description",
    "0-0": "Entered Node",
    "0-1": "The total number of users who entered the node. It includes the sum of all the users from Moved forward, Waiting users, Goal Met, and Journey timeout.",
    "1-0": "Moved Forward",
    "1-1": "The users who have moved forward via node connectors, such as Sent, Viewed, Clicked, Failed, and Unreachable.",
    "2-0": "Waiting users",
    "2-1": "These users may wait for either of the 2 reasons:  \n1.  Before Node: Delay from a previous node  \n2. At Node: The outcome for these users is not defined. For example, if the 'Failed' connector is not connected, the users in this state will be counted in ‘At node.’",
    "3-0": "Goal Met",
    "3-1": "These are the users who have performed the intended goal, such as viewing a movie or purchasing a product.",
    "4-0": "Journey timeout exits",
    "4-1": "These are the users who exited the Journey after the time duration set for the Journey, that is, Journey Timeout is complete."
  },
  "cols": 2,
  "rows": 5,
  "align": [
    "left",
    "left"
  ]
}
[/block]


> 📘 Campaign Reports
> 
> You can view the [Campaign Reports](doc:campaign-reports) from the Engage node. Click the **Engage** node to open the campaign report.

## Force Exit Node

This node stat shows only the number of force exits.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/200599b-Journeys_node_Force_exit.png",
        "Journeys_node_Force_exit.png",
        310
      ],
      "caption": "Force exit node"
    }
  ]
}
[/block]


## Frequently asked questions

Q. Why do my users not qualify?  
A. If the entry node is an action node, but the events are coming from an API, then the users associated with these events do not qualify.

Q. What are last nodes?  
A. These are the nodes that do not have an output path. These nodes are present in Journeys without goals. 

Q. What happens to my users if my Journey does not have a goal?  
A. If you do not set a goal, the users from the last node exit the Journey. Their Journey is considered complete when they reach the last node. 

Q. Where can I see the users who are waiting because of delay or sleep defined between two nodes?  
A. You will see them on the following node under 'Waiting users'. 

Q. Why is the number of users on nodes not matching or adding up?  
A. The count of the users depends on the selected date range. If the original date range of the Journey does not match with the date range in your search, then the numbers will differ from the original. 

Q. How do I verify the number of users entering a specific node?  
A. The number of users moving forward from a node will always match the number of users who are entering the following nodes.

Q. Why my stats at last node are not matching?  
A. In the journeys created before Dec 27, 2019, You might see a mismatch of user counts or a drop in users. This is because earlier we used to have a dummy wait step post last node, where users will move and wait for goal to be met. In the new journeys (created post Dec 27, 2019), the dummy step no longer exists and this mismatch should not happen. 

Q. What is this intermediate stat on node stat?  
A. If you draw the same connector, such as 'Yes',  multiple times from a node and connect it to multiple Segment nodes, the users will move after the first action.  The stats for these Waiting users are displayed as an intermediate node on the connector.  

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e0d470f-Journeys_multiple_Yes_Build.png",
        "Journeys_multiple_Yes_Build.png",
        785
      ],
      "border": true,
      "caption": "Intermediate node - Build"
    }
  ]
}
[/block]


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/960c1b8-Journeys_Multile_Yes_Node_stats.png",
        "Journeys_Multile_Yes_Node_stats.png",
        1080
      ],
      "border": true,
      "caption": "Intermediate node - Stats"
    }
  ]
}
[/block]


Q. How will I see the stats for the Phantom node?  
A.  A Phantom node appears only when a _Viewed_ or _Clicked_ connector is drawn from an Engage node. The originating node will display the Sent count and the Phantom node will display the Clicked or Viewed count. For more information on Phantom nodes, see [Users waiting at Engage nodes](https://docs.clevertap.com/docs/journeys#section-users-waiting-at-segment-node).

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/af5a2ea-Journeys_Pseudo_Node.png",
        "Journeys_Pseudo_Node.png",
        1162
      ],
      "caption": "Phantom node - Build"
    }
  ]
}
[/block]


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8fac40f-Journeys_Pseudo_Node_Stats.png",
        "Journeys_Pseudo_Node_Stats.png",
        839
      ],
      "caption": "Phantom node - Stats"
    }
  ]
}
[/block]


# Journey Stats

Click the **Journey Stats** tab. The _Journey Stats_ page appears.  Select the _date range_ from the calendar to display the Journey stats.

The _Journey Stats_ tab shows you the combined statistics for the entire Journey. All data except the user in Journey count that is displayed on the upper right corner of the _Journey Stats_ tab, are based on the selected date range.

The main stats are displayed at the top section that relates to the main stages of the users Journey. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b68d6bb-Journey_Goal_Hero_stats.png",
        "Journey_Goal_Hero_stats.png",
        1345
      ],
      "border": true,
      "caption": "Journey stats - main"
    }
  ]
}
[/block]


The _Goal conversion _section displays the performance of the journey. You can see your influenced conversions here.  It also shows a comparison with the control group's performance. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8f1e196-Journeys_Stats_Goal.png",
        "Journeys_Stats_Goal.png",
        1880
      ],
      "border": true,
      "caption": "Journey stats - goal conversion"
    }
  ]
}
[/block]


The trend section provides powerful insights about the Journey, such as:

- The users who entered the Journey
- The users who exited the Journey
- The users who met the specified goal
- The users who were timed out of the Journey on a daily, weekly or monthly basis

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/74da704-Journeys_Stats_Trends.png",
        "Journeys_Stats_Trends.png",
        1348
      ],
      "border": true,
      "caption": "Journey stats - trends"
    }
  ]
}
[/block]

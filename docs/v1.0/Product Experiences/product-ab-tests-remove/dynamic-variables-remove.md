---
title: "Dynamic Variables_Remove"
slug: "dynamic-variables-remove"
excerpt: ""
hidden: true
metadata: 
  image: []
  robots: "index"
createdAt: "Mon Aug 26 2019 10:25:06 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Nov 25 2020 16:03:16 GMT+0000 (Coordinated Universal Time)"
---
The dynamic variable is a mode of A/B testing that is based on the user defining the flow of experience on their app based on variable values. These values can be modified directly from the CleverTap dashboard. 

## Getting started with Dynamic variables - on the app's code

To make dynamic variables work, use the following steps:

1. Define the dynamic variables inside your app. For more information, see [how to define variables in the app](https://developer.clevertap.com/docs/ab-tests).  
   CleverTap communicates with your app via the SDK and updates the values that you have set in the CleverTap dashboard.
2. Based on the values of the variables, you can test different user experiences on your app and see what converts better. 

## Getting started with Dynamic variables - on CleverTap dashboard

Select Dynamic variables from the menu on the left navigation. Set goals and select target segments, and create variants. After you click on the Create Variant, you will be asked to connect a device.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cc6bcb2-Screenshot_2019-11-08_at_7.57.52_PM.png",
        "Screenshot 2019-11-08 at 7.57.52 PM.png",
        676
      ],
      "border": true,
      "caption": "Waiting for the connection"
    }
  ]
}
[/block]


### Connect to the device

Check that your app is opened on your mobile phone. You will be asked to make gestures with your phone to connect your device with the CleverTap dashboard. Follow the instructions on the screen.

After you perform the gesture, your device is displayed on the dialog box.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c1308e5-Screenshot_2019-11-08_at_8.01.32_PM.png",
        "Screenshot 2019-11-08 at 8.01.32 PM.png",
        673
      ],
      "caption": "Connected device"
    }
  ]
}
[/block]


Connecting the device helps if you do not know the name of the variable that you have defined in the app.  
Click the device from the dialog box to select it and you can then define variables.

![](https://files.readme.io/b52a279-Screenshot_2019-11-08_at_8.09.05_PM.png "Screenshot 2019-11-08 at 8.09.05 PM.png")

Click on the "+Variables" button. All the defined variables are listed.  

![](https://files.readme.io/3250a5e-Screenshot_2019-11-08_at_8.12.31_PM.png "Screenshot 2019-11-08 at 8.12.31 PM.png")

You can select multiple variables to edit their values from the dashboard.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/253503d-Screenshot_2019-11-08_at_8.15.30_PM.png",
        "Screenshot 2019-11-08 at 8.15.30 PM.png",
        770
      ],
      "caption": "Editing and assigning custom values to variables inside the app"
    }
  ]
}
[/block]


## Connect manually

If you already know the names of variables you can choose the manual connection. The manual connection does not require a device connection. 

![](https://files.readme.io/aa5642f-Screenshot_2019-11-08_at_8.00.37_PM.png "Screenshot 2019-11-08 at 8.00.37 PM.png")

Then enter the name of the variable and select its data type.

![](https://files.readme.io/143b15f-Screenshot_2019-11-08_at_8.18.26_PM.png "Screenshot 2019-11-08 at 8.18.26 PM.png")

That's it! You have now created different variants with Dynamic Variables for A/B testing.

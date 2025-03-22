---
title: "Image Specifications"
slug: "image-specifications"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Wed May 06 2020 23:49:20 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Apr 15 2021 22:58:51 GMT+0000 (Coordinated Universal Time)"
---
# Overview 

These are CleverTap recommendations to help you render your messages correctly. While we specify image sizes on the application window, these are recommendations for each channel to help your image find a sweet spot. 

> 📘 Content Tip
> 
> The content must always be center-heavy. If not, some devices may crop the images from the edges. The file size is available on the user interface.

# Push Notifications

The supported file types are PNG, JPG, and GIF (only iOS).

## Android Push Notifications 

For Android, use the following guidelines:

- Aspect ratio: 2:1
- Maximum size: 40 KB
- Supported types: PNG, JPG, and JPEG

## iOS Push Notifications 

For iOS push notifications, use the following guidelines:

| Orientation | Aspect Ratio |
| :---------- | :----------- |
| Landscape   | 16:9         |
| Portrait    | 1:1          |

### Media File Sizes

The following media file sizes are supported by iOS: 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c91b4e2-Screenshot_2020-06-23_at_8.16.22_PM.png",
        "Screenshot 2020-06-23 at 8.16.22 PM.png",
        792
      ],
      "sizing": "100"
    }
  ]
}
[/block]


## In-App

For in-app, use the following guidelines:

| File Type                     | Maximum Size |
| :---------------------------- | :----------- |
| Image                         | 500 KB       |
| Audio (only for Interstitial) | 5 MB         |
| Video (only for Interstitial) | 50 MB        |

The supported file formats are JPG, JPEG, PNG, GIF, MP3, and MP4. PNGs convert to JPEG using selected background colors.

### Covers

For covers, the aspect ratio is 2:1.

#### Android

For Android covers, use the following guidelines:

| Device Screen           | Crop Factor               |
| :---------------------- | :------------------------ |
| Android XXXHDPI         | 307px from top and bottom |
| Android HDPI and XXHDPI | 470px from top and bottom |
| Android - XHDPI         | 563px from top and bottom |

The following shows the Android devices' crop factor.

![](https://files.readme.io/9cd213a-Image_Size_InApp_Cover_Android.png "Image_Size_InApp_Cover_Android.png")

 \####iPhone  
For iPhone covers, use the following guidelines:

| Device Screen      | Crop Factor               |
| :----------------- | :------------------------ |
| iPhone X and above | None                      |
| iPhone 5 to 8      | 316px from top and bottom |
| iPhone 4s          | 632px from top and bottom |

The following shows the iPhone devices' crop factor.

![](https://files.readme.io/7818723-Image_Size_InApp_Cover_iOS.png "Image_Size_InApp_Cover_iOS.png")

#### iPad Cover

For iPad covers, use the following guidelines:

- Aspect ratio: 1:1.3
- Crop factor: None

### Interstitial

The supported file types are video, audio, and GIF.

#### Image

The image aspect ratio is 1:1.7812.

![](https://files.readme.io/d271eb4-Image_Size_InApp_Interstitial.png "Image_Size_InApp_Interstitial.png")

#### iPad Interstitial

The aspect ratio is 1:1.26.

#### Image with Content

For an image with content, use the following guidelines:

- Aspect ratio: 16:9
- Supported file formats: JPG, JPEG, PNG, GIF, MP3, MP4

PNGs convert to JPEG using selected background colors.

| File Type | Maximum  Size |
| :-------- | :------------ |
| Image     | 500 KB        |
| Audio     | 5 MB          |
| Video     | 50 MB         |

### Half Interstitial 

This section covers specifications for half interstitials options.

#### Image

For an image, use the following guidelines:

| Image and Position | Aspect Ratio |
| :----------------- | :----------- |
| Image              | 1:1.3513     |
| Header             | 1:1          |
| Footer             | 1:1          |

##### iPad

For iPad, the aspect ratio is 1:1.35.

#### Custom HTML

This depends on your custom template. 

### App Inbox

For app inbox, the supported file formats are JPG, JPEG, PNG, GIF, MP3, and MP4.

More aspect ratios include:

| Orientation | Aspect Ratio |
| :---------- | :----------- |
| Portrait    | 1:1          |
| Landscape   | 16:9         |

| File Type | Maximum Size |
| :-------- | :----------- |
| Image     | 500 KB       |
| Audio     | 5 MB         |
| Video     | 50 MB        |

## Web Push

For web push, the aspect ratio is 2:1. 

### Supported Browsers

We support the following browsers:

- Chrome 
- Firefox
- Safari 

## Web Pop-up/Exit Intent

For web pop-up and exit intent, use the following guidelines:

- Aspect ratio: 1.12:1 
- Maximum height: 400px 

The aspect ratio remains constant. While the image width is 80% of the overall container, the width adjusts automatically.

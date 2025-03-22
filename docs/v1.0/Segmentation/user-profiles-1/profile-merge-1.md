---
title: "Profile Merge"
slug: "profile-merge-1"
excerpt: ""
hidden: true
metadata: 
  image: []
  robots: "index"
createdAt: "Thu Aug 29 2019 09:39:29 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Aug 29 2019 09:41:18 GMT+0000 (Coordinated Universal Time)"
---
CleverTap creates one profile for a user across all of their devices. This ensures that when you look at a user profile in CleverTap, its a wholistic view of a user, including all of their behaviour, across devices.

Profiles in CleverTap merge under 2 scenarios:

- **When the same person is identified on multiple devices.** In this case, if CleverTap gets the same identity on different devices. The profiles of these users will be merged.
- **When multiple people are identified on the same device. **If you push multiple identities on the same device, without using the OnUserLogin API, CleverTap will merge profiles for all of these users. If you would like to avoid this merge, you have to ensure that when you are identifying users (i.e. users are logging in, you call the OnUserLogin API).  
  Orphan Profiles

Even though CleverTap tries to ensure that if the same user, if logged in from multiple devices get merged, there may be cases when they do not.  
In this case, the unidentified profile will be treated as an orphan profile  
\*\* We do not delete the profile or the events performed by the profile

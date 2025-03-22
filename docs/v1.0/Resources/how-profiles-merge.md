---
title: "How Profiles Merge"
slug: "how-profiles-merge"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Tue Feb 13 2018 03:15:56 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Nov 26 2019 10:27:45 GMT+0000 (Coordinated Universal Time)"
---
CleverTap creates a profile for a user across all of their devices. This ensures that when you look at a user profile in CleverTap, its a holistic view of a user, including all of their behavior, across devices.

Profiles in CleverTap merge in two scenarios:

- **When the same person is identified on multiple devices.** In this case, if CleverTap gets the same identity on different devices. The profiles of these users will be merged.
- **When multiple people are identified on the same device.** If you push multiple identities on the same device, without using the OnUserLogin API, CleverTap will merge profiles for all of these users. If you would like to avoid this merge, you have to ensure that when you are identifying users (that is, users are logging in, you call the OnUserLogin API).

Orphan Profiles

- Even though CleverTap tries to merge the profiles for a user who logs from multiple devices, there may be cases when they do not merge. In this case, the unidentified profile will be treated as an orphan profile.
- We do not delete the orphan profile or the events performed by this profile.

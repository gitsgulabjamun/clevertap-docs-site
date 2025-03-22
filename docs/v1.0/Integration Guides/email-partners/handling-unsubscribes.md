---
title: "Handling Unsubscribes"
slug: "handling-unsubscribes"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Sat Feb 03 2018 00:02:54 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Jan 21 2021 06:44:22 GMT+0000 (Coordinated Universal Time)"
---
If you are using Amazon SES or your own SMTP gateway, you will have to follow these steps to enable your users to unsubscribe from your email notifications:

1. Download this email unsubscription HTML template file from our [Email Unsubscribe](http://static.clevertap.com/docs/email-unsubscribe.html) page. You can edit and brand this template file if required. 

The following is the Javascript code to be embedded on your page:

```html
<div> 
        <h4>I want to unsubscribe from future emails</h4>
        <input type="text" id="email" readonly="readonly" />
        <br/><br/>
        <button onclick="unsubscribe()">Unsubscribe me</button><br/><br/>
        <!-- button onclick="resubscribe()">Resubscribe</button -->
    </div>


   <script> //Javascript
// Should be true only if your server is url encoding the URL on unsubscribe landing page
    var isReEncode = false
    // on  page load, fetch the email id of the user.
    window.onload = function() {
        $WZRK_WR.getEmail(isReEncode);
    };
    // will be called after the email id of the user has been fetched
    function wzrk_email_fetched(emailStr) {
        document.getElementById("email").value = emailStr;
    }
    // will be called after the subscription preferences for the user have been updated
    function wzrk_email_subscription(status) {
        //status 0 : unsubscribed, status 1 : subscribed
        // todo - you can show a success message to the user from here
        var statusLabel = 'subscribed';
        if (status == 0) {
            statusLabel = 'unsubscribed';
        }
        alert("You've been " + statusLabel);
    }
    // call this function to unsubscribe the user
    function unsubscribe(isReEncode) {
        $WZRK_WR.unSubEmail(isReEncode);
    }
    // call this function to resubscribe the user
    function resubscribe(isReEncode) {
        $WZRK_WR.subEmail(isReEncode);
    }
</script>
```

## Subscription Groups

```html
<div>    
    <h4>I want to unsubscribe from future emails
    </h4>        
    <input type="text" id="email" /> 
    <br/><br/>
    <!-- Displaying unsubscribe groups in the below div once loaded -->
    <div id="unsubscribe-groups" style="display: none"></div>
    <!-- Unsubscribe groups buttont. User will click here and it should call `changeSubscriptionGroups`
        method to send the request to CleverTap. -->
    <button onclick="changeSubscriptionGroups()">Update Subscription Groups</button>    
 </div>  
 <script> 
   window.onload = function() {
        var isReEncode = false //Should be true only if your server is url encoding the URL on unsubscribe landing page     
        var withGroups = true  // Should be true if the unsubscribe groups should be displayed on the landing page.
        $WZRK_WR.getEmail(false, withGroups);
    };
    // will be called after the email id of the user has been fetched
    function wzrk_email_fetched(emailStr, profile) {
        document.getElementById("email").value = emailStr;
        if(!profile || !profile.groups || profile.groups.length === 0) {
            console.log("did not recv groups in callback");
        }
        var subscriptionGroups = profile.groups; // will be recvd only if withGroups passed true above
        $WZRK_WR.setSubscriptionGroups(subscriptionGroups); // Can also be set here and can be retrieved by calling `$WZRK_WR.getSubscriptionGroups` method
         $WZRK_WR.setUpdatedCategoryLong(profile);
        displayGroups()
    }
  function displayGroups() {
    //   Fetching groups
      var subscriptionGroups = $WZRK_WR.getSubscriptionGroups();
    //  Rendering groups in above html div
      var addList = document.getElementById('unsubscribe-groups');
            addList.style.display = 'block';
            for(var i = 0; i < subscriptionGroups.length; i++) {
                var obj = subscriptionGroups[i];
                var checkBox = document.createElement("INPUT");
                var isUnsubscribed = obj.isUnsubscribed
                checkBox.setAttribute("type", "checkbox");
                if(isUnsubscribed){
                    checkBox.setAttribute("checked", true);
                }
                checkBox.setAttribute("name", obj.name)
                checkBox.setAttribute("id", obj.name)
                checkBox.setAttribute("class", "ct-unsub-group-input-item");
                var label = document.createElement("LABEL");
                label.setAttribute("for", obj.name)
                label.innerHTML = "Unsubscribe to " + obj.name 
                addList.appendChild(label);
                addList.appendChild(checkBox);
                addList.append(document.createElement('br'));
            }
  }
// This function is used to send groups updation request. User can directly call
// `$WZRK_WR.changeSubscriptionGroups(isReencode, updatedGroups)` by passing updated groups in format specified.
   function changeSubscriptionGroups(){
    let unsubcribeGroups = [];
        var elements = document.getElementsByClassName(
            "ct-unsub-group-input-item");
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            if(element.name) {
                var data = {name: element.name, isUnsubscribed: element.checked}
                unsubcribeGroups.push(data)
            }
        }
        $WZRK_WR.changeSubscriptionGroups(false, unsubcribeGroups);
     } 
    // will be called after the subscription preferences for the user have been updated
    function wzrk_email_subscription(status) {
        //status 0 : unsubscribed, status 1 : subscribed
        // todo - you can show a success message to the user from here
        var statusLabel = 'subscribed';
        if (status == 0) {
            statusLabel = 'unsubscribed';
        }
        alert("You've been " + statusLabel);
    }
 </script>
```

Unsubscribe groups are handled in the format as shown below where "name" is for the name of the group and "isUnsubscribed" is for subscription status of the group.

```html
{
var groupsExample = [
{name: "group1", isUnsubscribed: false}, 
{name: "group2", isUnsubscribed: true}
]
}
```

Ensure that the original JavaScript functions are retained.

1. Host that file at a publicly-accessible server. The extension of the file could be anything, including PHP if you want to incorporate some of your backend logic.
2. Integrate the CleverTap JavaScript (JS) embed code, which is optimized for integration on both desktop and mobile web sites. Replace CLEVERTAP_ACCOUNT_ID with your actual Account ID in the JS. 

```javascript
// Copy and paste the below code snippet inside the <head></head> section of your website

<script type="text/javascript">
     var clevertap = {event:[], profile:[], account:[], onUserLogin:[], notifications:[]};
 // replace with the CLEVERTAP_ACCOUNT_ID with the actual ACCOUNT ID value from your Dashboard -> Settings page
 clevertap.account.push({"id": "CLEVERTAP_ACCOUNT_ID"});
 (function () {
		 var wzrk = document.createElement('script');
		 wzrk.type = 'text/javascript';
		 wzrk.async = true;
		 wzrk.src = ('https:' == document.location.protocol ? 'https://d2r1yp2w7bby2u.cloudfront.net' : 'http://static.clevertap.com') + '/js/a.js';
		 var s = document.getElementsByTagName('script')[0];
		 s.parentNode.insertBefore(wzrk, s);
  })();
</script>
```

3. Go to the CleverTap Dashboard > _Settings_ > _Amazon SES/Generic SMTP_. Now, only fill in the URL of the unsubscribe page with no parameters, such as <http://foobar.com/unsubscribe.html>.
4. When you are composing the email in the body, put the unsubscribe link as shown below. CleverTap replaces _|UNSUBSCRIBE|_ with the actual URL of the unsubscribe page at the time of sending out the email.

```html
<a href="*|UNSUBSCRIBE|*">Unsubscribe</a>
```

# Understanding the Unsubscription Flow

1. When an email notification campaign is sent out, CleverTap will automatically replace the _|UNSUBSCRIBE|_ link in the body of the email with the location of your page.
2. When a user clicks on the unsubscribe link in your email, the user will be taken to the unsubscribe page. 
3. After the body loads, call the $WZRK_WR.getEmail() method, which calls the wzrk_email_fetched(emailStr) method on that page when the email is fetched from the server.
4. Call the unsubscribe() method when the user confirms they want to unsubscribe.
5. You can call the resubscribe() method when the user wants to resubscribe to the email (this is only valid if the user first unsubscribed and is still on that page from the earlier link).

# Troubleshooting

1. The unsubscription link will not work for test emails sent from the notification creation page.
2. Make sure that when a user lands on the unsubscription page, the URL has these parameters:

- e: This contains some metadata about the user.
- wzrk_ex: This is a CleverTap internal parameter.

3. The subscription is in effect at the account level. It means all the users linked to the email address are unsubscribed.

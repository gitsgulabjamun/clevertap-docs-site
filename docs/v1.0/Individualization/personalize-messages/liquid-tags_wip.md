---
title: "Liquid Tags_WIP"
slug: "liquid-tags_wip"
excerpt: ""
hidden: true
metadata: 
  image: []
  robots: "index"
createdAt: "Mon Mar 08 2021 18:15:39 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Mar 08 2021 18:15:39 GMT+0000 (Coordinated Universal Time)"
---
Liquid tags offer tremendous flexibility and personalization for your messages. You can create a 'write once use multiple times' message and add multiple variations to it. You can use Liquid tags with the following engagement channels:

- Email
- Mobile Push
- SMS
- Webhooks

Here is a simple example of personalization with a liquid tag: 

```liquid Liquid Tag
{% if Profile.PREFERED_LANGUAGE == "Spanish" %} 
Hola!
{% elsif Profile.PREFERED_LANGUAGE == "English" %}
Hello!
{% endif %}
```

If the user's preferred language is Spanish, the greeting will appear in Spanish.  

```text Output - Liquid Tag
Hola!
```

If the user's preferred language is English, the greeting will appear in English.  

```text Output - Liquid Tag
Hello!
```

# Getting Started

You can personalize your messages for [Events](doc:events) and [User Profiles](doc:user-profiles). For example, a user whose language is English (Profile property), or someone who has purchased (Event property) a new shirt.

Let us create a Liquid tag in an email campaign. To create a tag, select the "New email with rich media" template when you create an [email campaign](https://docs.clevertap.com/docs/email#section-email-campaign-creation-steps). You can use Liquid Tags within this template. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/75cd8d0-Campaigns_Email_Liquid_Tags_Template.png",
        "Campaigns_Email_Liquid_Tags_Template.png",
        1440
      ],
      "border": true,
      "caption": "Select a media template"
    }
  ]
}
[/block]


The Liquid Tags work within the email editor. However, you can also combine the power of HTML with Liquid Tags.  You can paste your HTML code directly in the HTML editor by clicking the Source button and then personalize it with Liquid Tags. For more information, see [Liquid Tags with HTML](https://docs.clevertap.com/docs/liquid-tags#section-liquid-tags-with-htmll) 

The liquid terms are adapted from [shopify's documentation](https://shopify.github.io/liquid/basics/introduction/) to  CleverTap. We support only the terms identified in our documentation for a seamless experience.

# Using Tags

You can start creating your message by declaring tags in the campaign editor. You can declare the tags in the following ways: 

- For creating message conditions - Conditional tags can help you vary the message for each condition. For example, if your users make a purchase, then send them a coupon with an additional discount for their next purchase. You can create a conditional tag by enclosing the condition within curly braces and a % sign. Start by entering `{%` in the email editor. The closing tag is completed automatically. The syntax for these tags is: `{% if %} {% endif %}`
- For displaying output from a variable - Output tags display the output of a variable. For example, if customer_type is a variable, display all the types of customers such as Platinum, Gold,  and Silver. Start by entering `{{` in the email editor. The closing tag is completed automatically. The syntax for these tags is: `{{customer_type}}`

You can use any of the Profile and Event properties within tags. Just enter `Profile.` or `Event.` in the editor and we will list all the corresponding properties automatically. 

> 📘 Note
> 
> When selecting properties, the "P" in profile and the "E" in Events must be capitalized and followed with a period ".". Profile properties are available for all segments. Liquid tags for Event properties are only available for live user segments. The "@" personalization is supported only outside the tags.

## Conditional Tags

You can use conditional tags for creating simple or complex conditional statements.  For example, If condition A, then send message 1, else send message 2, else-if message 3. If we were to express this in tags, we can use the user's preferred language as an example. 

Following are the conditional tags:

- if
- else
- else-if
- unless
- switch case
- for
- break
- continue
- abort
- limit
- reversed
- offset
- tablerow

### If

```text If Tag
{% if Profile.PREFERED_LANGUAGE  == "French"%} 

Bon Jour !

{% endif %}
```

### Else/Elseif

You can send messages conditionally to each recipient. 

```liquid Else/Elseif Tag
{% if Profile.PREFERED_LANGUAGE  == "French"%} 

Bon Jour !

{% elsif  Profile.PREFERED_LANGUAGE  == "Spanish"%} 

Hola!

{% else %}

Hello!

{% endif %}
```

If the user's preferred language is French, the greeting will appear in French.  If the user's preferred language is Spanish the greeting will appear in Spanish. However, if the preferred language is anything other than French and Spanish, then the greeting will appear in English. 

```text Output - Else/Elseif
Hello!
```

### Unless

You can use this tag if a condition is not true. For example, if a user's language is "not" French, then greet with "Hello" in English. 

```liquid Unless Tag
{% unless Profile.PREFERED_LANGUAGE  == "French"%} 

Hello!

{% endunless %}
```

The message display will be as follows:

```text Output - Unless
Hello!
```

### Switch case 

You can switch a statement when a variable changes in value.  The `when` statements define the various conditions.  
For example, you have three types of customers, namely "Gold", "Silver" and everyone else. They are represented by the profile property "customer_type".  You can change the displayed message based on the type of customers. 

```liquid Switch case Tag
{% case Profile.customer_type %}
  {% when "Gold" %}
     You are eligible for free lounge access!
  {% when "Silver" %}
     You are eligible for lounge access at only 50% of the cost!
  {% else %}
     Upgrade your membership now for free lounge access!
{% endcase %}
```

```text Output - Switch case
Upgrade your membership now for free lounge access!
```

### for

You can repeat execution in liquid script with the for a loop.

```liquid for Tag
{% for item in hiking.items %}
  {{ item.names }}
{% endfor %}
```

```text Output - For Tag
flashlight  backpack boots
```

### break

You can stop execution in the liquid script by adding break in a loop.

```liquid Break - Tag
{% for i in (1..10) %}
  {% if i == 7 %}
    {% break %}
  {% else %}
    {{ i }}
  {% endif %}
{% endfor %}
```

```text Output - Break
1 2 3 4 5 6
```

### continue

You can skip the current iteration in a loop with the continue tag.

```liquid continue - Tag
{% for i in (1..10) %}
  {% if i == 7 %}
    {% continue %}
  {% else %}
    {{ i }}
  {% endif %}
{% endfor %}
```

```text output - continue
1 2 3 4 5 6   8 9 10
```

## abort

This is a CleverTap Tag within Liquid. You can abort sending a message with the abort tag. If a condition is not fulfilled for a user, it is displayed in the campaign reports as `LiquidLogicAborted`.

```liquid abort - Tag
{% if Event.price > 100%}
Thank you for your purchase. Here is a coupon code for you. 
COUPON
{% else %}
{% abort %}
{% endif %}
```

```text output - abort
Thank you for your purchase. Here is a coupon code for you. 
COUPON
```

### limit

You can specify the limit the for loop with this tag. 

```liquid limit - Tag
<!-- if array = [1,2,3,4,5,6] -->
{% for item in array limit:2 %}
  {{ item }}
{% endfor %}
```

```text output - limit
1 2
```

### reversed

You can reverse the order of the loop with this tag. Pay special attention to the spelling.

```liquid reversed - Tag
<!-- if array = [1,2,3,4,5,6] -->
{% for item in array reversed %}
  {{ item }}
{% endfor %}
```

```text output - reversed
6 5 4 3 2 1
```

### offset

You can begin the loop at a specified index.

```liquid offset - Tag
<!-- if array = [1,2,3,4,5,6] -->
{% for item in array offset:2 %}
  {{ item }}
{% endfor %}
```

```text output - offset
3 4 5 6
```

### tablerow

You can generate an HTML table with this tag. It must be wrapped in opening `<table>` and closing `</table>` HTML tags. 

```liquid tablerow - Tag
<table>
{% tablerow product in collection.products %}
  {{ product.title }}
{% endtablerow %}
</table>
```

```text output - Tag
<table>
  <tr class="row1">
    <td class="col1">
      Cool Shirt
    </td>
    <td class="col2">
      Alien Poster
    </td>
    <td class="col3">
      Batman Poster
    </td>
    <td class="col4">
      Bullseye Shirt
    </td>
    <td class="col5">
      Another Classic Vinyl
    </td>
    <td class="col6">
      Awesome Jeans
    </td>
  </tr>
</table>
```

## Variable Tags

### Assign

You can use the `assign` tag to assign value to a variable. The value of this variable can change based on the defined condition or a range. You can then reuse this variable across your message. 

For example, you want to greet a user in French. You create a variable called `LANG`. Now, you can use this variable for all available languages. If the value of the `LANG` variable is French, the greeting is "Bonjour!". The greeting is "Hello!" for all other languages. 

```liquid Assign Variable Tag
{% assign LANG = PROFILE.PREFERED_LANGUAGE %}
{% if LANG == "FRENCH" %}
Bonjour!
{% else %}
Hello!
{% endif %}
```

## Theme Tags

### Raw 

You can use the raw tag to display characters used by the tag syntax. 

```liquid Raw Tag
{% raw %}{{ 5 | plus: 6 }}{% endraw %} equals 11.
```

```text Output - raw
{{ 5 | plus: 6 }} equals 11.
```

### Comment

You can comment on your code with this tag. It can be notes or description that you want to add to make your code more understandable. 

```liquid Comment Tag
{% if Profile.PREFERED_LANGUAGE  == "French"%} 

{% comment %} This condition is fulfilled only if the value is 
French {% endcomment %}

Bonjour !

{% endif %}
```

```text Output - Comment
Bonjour!
```

## Operators

You can use the following operators to evaluate conditions in your tags. 

| Operator      | Description                                            |
| :------------ | :----------------------------------------------------- |
| **==**        | equals                                                 |
| **!=**        | does not equal                                         |
| **>**         | greater than                                           |
| **\<**        | less than                                              |
| **>=**        | greater than or equal to                               |
| **\<=**       | less than or equal to                                  |
| **or**        | logical or. Choose between condition 1 or condition 2. |
| **and**       | logical and. Choose conditions 1 and condition 2       |
| **contains**  | check for a string within a string                     |

# Liquid Tags with HTML

This section applies only to the email channel. 

You can combine your HTML code with Liquid Tags to create beautiful and personalized messages for your users.  

Here is how to do it in three steps: 

1. Click the Source button on the email editor to open the HTML editor. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1cbbd27-Campaign_Email_HTML_editor.png",
        "Campaign_Email_HTML_editor.png",
        1437
      ],
      "border": true
    }
  ]
}
[/block]


2. Paste your HTML code. 
3. Click the Source button again to open the email editor.  You will see the HTML output. The Liquid Tags work only with the default email editor. 
4. Add your Liquid Tags. 

![](https://files.readme.io/695cc49-campaigns_email_liquid_editor_example.png "campaigns_email_liquid_editor_example.png")

# Linked Content and Liquid Tags in Drag and Drop Editor

Linked Content and Liquid tags are available for the drag-and-drop email editor. This functionality allows customers to design emails and personalize them using dynamic content when they create an [email campaign](https://docs.clevertap.com/docs/email#section-email-campaign-creation-steps).

Perform the following steps to personalize drag and drop editor templates with liquid tags.

1. Select a template.

![](https://files.readme.io/e404d9c-2020-07-28_18-55-48_Select_template.png "2020-07-28_18-55-48_Select template.png")

2. Click on a _Row_ item in _Preview_.

![](https://files.readme.io/b461f6b-2020-07-28_19-19-33_Select_row_item.png "2020-07-28_19-19-33_Select row item.png")

3. Select **Add display content** in the right pane.

![](https://files.readme.io/e695382-2020-07-28_19-15-27_Content_editor.png "2020-07-28_19-15-27 Content editor.png")

4. Add the liquid script inside the personalized text box.

![](https://files.readme.io/7850f33-2020-07-28_19-25-41_add_personalized_message..png "2020-07-28_19-25-41_add personalized message..png")

5. Click **Save**.

---
title: Font ascender’s cut off for custom fonts on ios7
author: judohippo
type: post
date: 2015-03-20T17:06:44+00:00
excerpt: |
  |
url: /2015/03/20/font-ascenders-cut-off-for-custom-fonts-on-ios7/
categories:
  - ObjectiveC

---
Just look at that title. What a stupid bug.

Anyways, in one of the apps I work on we were seeing on ios7 that a custom bold font was clipping the ascenders on all uppercase characters. After some googling I found that it was an ios bug.  I luckily found a nicer way to correct the issue than having to increase the height of each textfield by 6 pixels and offsetting it&#8217;s ypos.

This [post][1] describes using the OSX Font Tool to pull the measurements from the font and allow you to edit them. So by setting the lineGap to 0 (the ios bug is that lineGap is ignored :/ ) and adding that amount to ascender you can fix the problem. I haven&#8217;t had design sign off on this yet so I&#8217;m not sure if it&#8217;s perfect but it works and looks pretty good to me

&nbsp;

::MARCH 31st EDIT::

So the artist and I looked at the font change and it doesn&#8217;t work for our needs. Yes, it fixes the issue, but our text is not not in the right position and since only one field if effected we chose to just increase the height of the field and change its offset.

 [1]: http://mbauman.net/geek/2009/03/15/minor-truetype-font-editing-on-a-mac/
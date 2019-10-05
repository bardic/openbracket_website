---
title: StalkCoin
author: judohippo
type: post
date: 2013-12-20T13:35:01+00:00
excerpt: |
  |
url: /2013/12/20/stalk_coin/
categories:
  - Uncategorized

---
Lately I&#8217;ve been doing a lot of Objective-C development for mobile and also took interest in AltCoins (BitCoin, LiteCoin, etc). After google&#8217;ing around for about 15 seconds I couldn&#8217;t find a menu ticker to show me the current prices of the coins I&#8217;m interested in.

So I said screw it and made one.  This was my first attempt at making a native desktop app.

If you&#8217;ve ever have done mobile ObjectiveC dev, there is very little difference. The biggest difference is the change in class prefix; UI on iOS, NS on OSX.

Other then that, it&#8217;s business as usual. Installed my libs through cocoapods, and  using xibs for layouts/popups.

The most interesting challenge I&#8217;ve encountered so far is not directly related to the app, but a language oddity. Coming from AS3 and C#, I use a lot of events. Events in ObjC, Notifications, are not nice. At least this is what my reading has told me. They message all living objects which can be heavy. StalkCoin though is not a large app, but I don&#8217;t like the idea of using them.

An alternative is to use delegates or blocks.  And I use this approach a lot in my other apps, but it still doesn&#8217;t sit right with me. What I really want is something like as3-signals.  Or C#Messenger. Perhaps I should bite the bullet and port one of this libraries to ObjectiveC.

Any who, it&#8217;s available for download now! You can grab it from the here: <http://www.openbracket.ca/stalkcoin/>

As I work on it I&#8217;ll delve more into what I like/dislike and whatever else is interesting.
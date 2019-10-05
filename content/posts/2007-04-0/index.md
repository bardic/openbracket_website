---
title: Ticks/Timed Events/Crons etc
author: judohippo
type: post
date: 2007-04-03T12:09:25+00:00
excerpt: |
  |
url: /2007/04/03/tickstimed-eventscrons-etc/
categories:
  - browser based
  - game development
  - internet
  - PBBG
  - scripting
  - web game

---
This post is going to be sweet and simple. When you design a game, say you want to give a player 5 more energy every 15 minutes or that you want to give them a &#8216;tick&#8217;, turn, round whatever every 3 minutes.

Well for this you would use a cron job. A cron job is pretty simple. You simply need to write a script that is constantly checking the time and running it against a equation or database or something. After you have the script written, this is the trickiest part: Ensuring that your server supports crons. It will state somewhere in the describe whether they are supported. Most web hosts don&#8217;t support them and that is why you need a server.

Anyways, what the cron on the server does is allow you to set how you want your script ran. So I can set it to run every minute, every 5 minutes or every 10 minutes.

And here&#8217;s a tip*

* When getting a server and you need say 5 crons and the server you&#8217;re looking at say it only supports one, don&#8217;t worry! What you do is turn you crons into functions and put them all in one script that runs, say every minute. This way you still have all your crons running without managing 3 or 4 or even 5 separately.

Now, I have a question for all the scripters out there: What other ways do you have for doing ticks/events, whatever? I would be interested in seeing what other ways a cron can be simulated/done.
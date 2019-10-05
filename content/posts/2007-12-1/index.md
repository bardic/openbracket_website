---
title: The ‘tick’
author: judohippo
type: post
date: 2007-12-14T02:51:09+00:00
excerpt: |
  |
url: /2007/12/13/the-tick/
categories:
  - browser based
  - game design
  - game development
  - internet
  - MySQL
  - PBBG
  - PHP
  - scripting
  - web game

---
This has been a rather popular post and seems to be a big question and topic of debate among developers. I, for one was confused about how to appoarch this when I first <a href="http://webgamedev.wordpress.com/2007/04/03/tickstimed-eventscrons-etc/" target="_blank" rel="noopener noreferrer">posted</a> about it. But after reading comments made by people smarter than me, and learning more about databasing and scripting I feel I am ready to touch the submit again. Some of this will sound very similar to comments made in my original post on the topic mainly because I feel those people had the right idea.

You may call it a cron job, a timed event, or something totally different. I prefer the term tick. I like it because I think of it has an internal clock where each tick of the clock is defined by the creator of the game. So a tick may be a minute or an hour. But the subject of the this post isn&#8217;t exactly about what a tick is, but more so how a tick works.

Let&#8217;s start with an example. Every 20 minutes I want to give the player 10 more energy. If I were to use a cron job, every 20 minutes the server would grind to a halt pretty much as the cron ran through ever users entry updating their energy field. There is also the possibility of using AJAX. When some people hear this they think using a javascript timer that updates the database every few seconds&#8230; That&#8217;s a worse idea than the cron job for bring your server running into a wall.  You could use AJAX to update the players data every 5-10 minutes or so. But I think this is still a a rather inefficient  way of updating the data since it only works while the player in online.

The method I am adopting is the last click. This style of &#8216;faking&#8217; a cron is from what I can tell the most efficient on the server, will cut back on lag, and can handle server down time in a method of your choosing.  The gist of it is that every time a player perform an action in game, it will store the a timestamp of that event. Then on the next click you compare the difference between the store timestamp and the current timestamp and perform the according game functions based on the time past.

&#8220;But what if I interact with another character?&#8221;

Thanks for asking. Say I go to attack a player that has been offline for 5 hours. As soon as I view that player in a way that is more than their name,  it will update their data (you will likely want to use a different method when looking at score lists or ranking so you don&#8217;t have 200 people updating every 15 seconds). You may think this method would be difficult on the server, but with a <a href="http://en.wikipedia.org/wiki/Database_normalization" target="_blank" rel="noopener noreferrer">properly designed database</a> (at least <a href="http://en.wikipedia.org/wiki/Second_normal_form" target="_blank" rel="noopener noreferrer">2nd normal form</a>) and some well written script, this method will allow for your game to be very scalable. In other words, you could have 2,000 or 40,000 members without the need of rewriting all your crons or updating servers every few months.

&#8220;But who would I manage a searching or score lists?&#8221;

Say you update the top 100 players in several fields every 20 minutes and the search tables every 5. All you would need to do is simply create a small table containing the last updates timestamp. You compare the two, if it fails to equal for than your set interval, ignore it. You just saved yourself updating all those users unnecessarily. A different method may suit you and your design better, you be you the general idea of it.

The last click way of doing this does take longer to be designed and built but in the end this will pay off. Instead of updating 5,000 members in a row all at once you now update 5 every few minutes. You are performing more updates but the requirements on your side won&#8217;t be as near as depending, eliminating lag before it occurs.

I hope that was all was clear and addressed some of the questions I have been receiving.

Oh, and by the way; if you disagree with me, please share your method. I write in the blog not just because I want the attention ( 😛 ) but also because I want to help the community grow and develop. So please, share your thoughts and comments&#8230; unless they are negative. Then you keep those ^^
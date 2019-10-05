---
title: Strategy Game Idea
author: judohippo
type: post
date: 2009-02-09T12:04:09+00:00
excerpt: |
  |
url: /2009/02/09/strategy-game-idea/
categories:
  - PBBG

---
Hello all. It&#8217;s been a while. Hope ya&#8217;ll didn&#8217;t forget about me or thought I was dead. Just been busy&#8230; And outta idea&#8217;s. But I&#8217;m hoping that will change as I try to design two more games, one which I want to explore in this post.

So, in my usual style, I&#8217;m just gonna start typing and we&#8217;ll see what I end up with. I have a vague idea in my head of what I want to achieve. And oh, I almost forgot. I think this is the first time I&#8217;m actually going to delve into a game I am going to design. So all criticism is welcome and just note, this doesn&#8217;t technically fall under a PBBG.

Let&#8217;s take a look at the tech that I first want to use to make this game. For interface, I will be using <a href="http://en.wikipedia.org/wiki/Adobe_Integrated_Runtime" target="_blank" rel="noopener noreferrer">AIR</a>. There are a few reasons I want to use this:

  1. I&#8217;m an as3 developer by day and I need more experience in Flex and AIR.
  2. I want this to be a game that constantly at your finger tips. You don&#8217;t need to go to a site or check your email. It will always just be a click away.
  3. I think it will be cool

For the server I&#8217;m torn. I&#8217;m looking at <a href="http://www.osflash.org/red5" target="_blank" rel="noopener noreferrer">Red5 </a>or <a href="http://www.electro-server.com/" target="_blank" rel="noopener noreferrer">Electroserver</a>. I&#8217;m torn because I don&#8217;t know if the open source Red5 can do what it is I am looking to do when I know the very expensive Electroserver can (I have used ES in the past).

And for the back end stuff I&#8217;ll be using PHP/MySQL.

There&#8217;s the tech I know to use. Let&#8217;s see an overview of the game I want to make before I go into mopre depth of some features.

I want a game that is similar in strategy to that of chess. In chess it all comes down to strategy. You and you&#8217;re oppoent are equally matched. You know exactly what you and they can do. You know all their pieces. The only &#8216;x-factor&#8217; is how far ahead you can see. When I think about it, this is very very similar to a table top miniatures game. You have a number of units you can pick from to build your army, each piece costs an amount, positions are key to victory, and there&#8217;s no luck. Unless you consider you&#8217;re opponent not being to think ahead as far as you luck.

So, lets get into details.The background doesn&#8217;t matter, and since I don&#8217;t have one, let&#8217;s say I&#8217;m going for world war 2.

To start a game, you create one using the tool, and you can pick how many points each person can spend on units, how long each player can take to make a turn, whether the game is public/private, the map and how many players can take part. Once you create a game, or you are joining one, you need to select your army. Each unit you have you will know all of it&#8217;s details. It&#8217;s hit percent, it&#8217;s damage, the abilities (if any), how position affects it, etc. And all units will have the same base values  as units of the same type. So my infantry has the same base stats as my opponents. Now, I&#8217;m debated on commander bonuses, but we will discuss that later.

If you have ever played <a href="http://en.wikipedia.org/wiki/Diplomacy_(game)" target="_blank" rel="noopener noreferrer">diplomacy </a>(the board game), the turn structure will feel very similar. The idea is though is that each player makes their turn simultaneously. So, when the game creator makes the game, they pick how long a turn phase will be. During that phase you can change your turn movement sheet as much as you want. But you must commit it when you finish or you won&#8217;t make any moves. But this way, there is no advantage for second player. Both players are unaware of where their opponent will move or how they will react. If you are playing on a larger map with more than two people you will be able to communicate with that player and possibly work out an agreement, since ranks will be based on scores and game achievements.

Making a move will be similar to other table tops. Each unit will have a speed, dictating how far it can move in a turn. Performing certain actions will limit this number, such as sneak, or snipe or grenade.

Combat will be similar to <a href="http://en.wikipedia.org/wiki/Axis_&_Allies_Miniatures" target="_blank" rel="noopener noreferrer">A&A miniatures</a> for those that have played it. Damage isn&#8217;t deal to a unit until both units have applied their actions. So if we you attack the enemy, your enemy returns attack before the damage is actually applied. This means it is possible for both units in an encounter to die.

And because combat will be such an important part of this, after movement turns are complete and the units that are now engaged and  have enough action points left to perform combat maneuvers will be able to do so. These numbers will all be available to the players.  Example; You&#8217;re tank has 20 action points (ap) and 1 movement point(mp) costs 2 ap, and one combat point (cp) is 3 ap, moving more than 8 squares would leave this unit unable to attack or defend come end of turn combat engagement.

As you can start to see, planning is crucial to this game. This may be a turn off for a lot of people but games are a labour of love for me.

What, you asked, would happen if a sniper engaged a infantry from max range. Well in this case, since the infantry&#8217;s range is not long enough to engage the sniper, the sniper is the only unit that performs combat.

What if, you ask again, I tell my sniper to engage a unit which then moves out of range. In this case, combat would not occur. Since combat occurs at the end of the movement phase, it&#8217;s imperative that the unit you wish to engage is still within range. This makes it risky for long range units. Risk moving up when the enemy will move forward and may possibly engage to ensure the combat, or hold back and hope to succeed.

At the end of combat, all units that have received lethal damage are removed and units that have received damage are  displayed to show the penalties they have received for taking damage.

Then it all occurs again, movement, engagement, and damage until the game&#8217;s goal is met. This goal may be to hold an area for a number of rounds or to eliminate a percentage of the enemies army, or maybe the first to gain a certain number of points.

The point system will be a large part of the game since there will be a public ladder and clan ladders that are visible to all players. Points will be gain from playing obviously, but how many points gained will change depending on the match type, turn lengths, number of players, number of units destroyed, etc. Points will be lost for losing a round and the number of units lost.

Thar ladder will hopefully promote more play as players try to achieve the top ranks or just to do better than their friends.

And of course, badges and shareable links will exist. I also want to make a system to replay a battle after it has been finished so you can send your friends a link showing them how bad you kicked someone&#8217;s ass or to maybe study what you did wrong in a battle and try to improve your skills.

Overall, it&#8217;s a fairly large project, but you guys now have a basic gist of what I&#8217;m trying to get at I hope.
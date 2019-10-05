---
title: Lantern Combat and Party System
author: judohippo
type: post
date: 2010-04-16T02:36:47+00:00
excerpt: |
  |
url: /2010/04/15/lantern-combat-and-party-system/
categories:
  - browser based
  - game design
  - game development
  - PBBG
  - Studies
  - web game

---
The time has come, the walrus said, to speak of many things: of swords and clubs and player groups, of adventures and rings&#8230; Ah to hell with it. Let&#8217;s talk about how to create a party system for pbbg&#8217;s that doesn&#8217;t require players to be online, but is still interactive and fun, and killing things!

The thought of a party system is by no means a new idea. The challenge arises when you try to apply the principle to an environment where players won&#8217;t be online when actions concerning them will be occurring. What I mean is that if a party of six players are on a quest, there&#8217;s a good chance a when one player logs on, everyone else is offline. What will this player be able to do if they are a member of a party? Can they move the party? Will they be able to move around themselves but remain a member of the party? If so, will their gains be party gains?  And then we have party combat; Will the leader direct each member or will combat pause until each member can log in and take a turn. Or maybe it would be better to allow players to create a rule set that will manage their character in battle for them.

**Party Formation**

With the party we have a few options to look at as mentioned above. First up is each player in the party has the ability to move the party. With a party of six where each player has the power to more the party this, I think, would quickly dissolve into players arguing and fighting amongst each other about how movement and combat should be handled. In a game where movement and actions will likely be limited to a tick, this outcome could actually ruin the game for some players.  You also don&#8217;t have the same clear definition of roles that can bring a lot of fun to party play.

How about party members being able to control themselves and their actions instead of being dictated by the party? This approach solves the what do players do when they are online and the combat because they are in full control. The issue is though is this is no longer party play. You are now playing the game on your own but yet remain in a &#8216;party&#8217; of other individual players.  A thought that would give this style more of party play and still resolve several issues with combat is to not allow the members of the party to move more than 10 or so tiles away from each other.  Then if you make combat turn based, a player could engage an enemy and instead of fleeing stop playing until another member of the party or two and come and attack the enemy as well. I like this idea. It give players the option to still explore the world, combat and train while party members are not online but still gives the sense and benefits of a party.

The final concept I have for this is to have a leader that is the only one that can move the party. This means that when a player that isn&#8217;t leader logs in there would need to be something they could logical do while in a party adventuring. And I can&#8217;t think of anything. A player could log in and train or study, but that isn&#8217;t really that fun in contrast to the leader where when they log in they have the power to move the party, enter battle and make all the quest decisions.  While this limits player interactivity, combat and general fun&#8230; Actually, that&#8217;s pretty much all it does.

**Combat**

This issue is tightly related to the type of party system that is in play, and I can think of three possible (read as not necessarily good) ideas for this. Let&#8217;s start with the idea for combat and party system that I am leaning too; Turn based combat with players able to control themselves and move about the area the party is in.  This approach would allow for players to decide how to enter combat. If an enemy is spotted five tiles over, the group may decide it&#8217;s best for the tank to engage first and then have the other members join the fray. The enemies combat would also be turn based. The only point that is nagging me here is how would the enemy operate. Would they only respond when they have been &#8216;activated&#8217; &#8211; attacked, tile entered? If so what happens when the tank attacks, the enemy strikes back, and then the archer 3 tiles away attacks? Does the enemy attack the tank or would it start to move towards the archer? Or maybe even move towards someone else that is in the area. Or flee. And what if the enemy is attacked simultaneously? Or if the archer attacks and then runs? Should the aggro stay active for a few turns and every time the archer moves, he calls the enemy to runs it&#8217;s AI script and decide an action?

Keep in mind I only came up with this idea as I am writing this post, so this is what I think I would do with only a few moment of thought. I would have each player that engages an enemy active it for a number of rounds, even after combat. This means if the player tries to flee, it may be chased. But what this system also implies is that the enemy when it is engaged/activated/whatever it will run it&#8217;s AI script and determine course of action around it. This means and could be really interesting, is that if a player that has attacked an enemy and decided to wait for help could still be killed when help arrives and triggers the enemy to make a move. My only concern is that this would lead to a player dying without knowing what happened. If all six members of a party attack an enemy at once and the enemies AI tells it to kick the crap out of the guy beside me six times before that player has a chance to refresh the page, they will refresh dead. This though would lead to party tactics and communication which I strongly support.

Another option for the party being control as a whole either by a leader or each member in the party is the concept of a combat rule set. What I mean is that a player will have a screen where they will see a list of options and how they would want their player to react to each own when they entered combat. For a system like this to work in my mind the players would need to receive rather detailed reports about the battle so they can tweak their rule set. And while this would be interesting, the party formation still limits much of the players actions and in the end rather boring (I think) way to do it. Not only can you not move yourself, your combat consists of conditional statements.

In the end for me, I think allowing the players to explore a limited area around their fellow members and creating some form of activated AI system seems like the best solution for me.  What do you think?

PS

For those who are unfamiliar with how I write posts like this, I literally come into it with the topic and almost no other thoughts on the topic.
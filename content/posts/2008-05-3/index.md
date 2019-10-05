---
title: Framework for PBBGs? – DB Planning
author: judohippo
type: post
date: 2008-05-30T16:23:37+00:00
excerpt: |
  |
url: /2008/05/30/framework-for-pbbgs-db-planning/
categories:
  - browser based
  - game design
  - game development
  - MySQL
  - PBBG
  - PHP
  - scripting
  - web game

---
Good day all.
  
I don&#8217;t know if I mentioned it here, but I am looking into creating a framework for PBBGs using PHP. This is not only to help myself create games but to make it easier others to start to create their own games.

What the first problem you think of when you think of making a framework for games? For me it was databases. We all approach these differently, and will want different info to be stored. After a bit of thinking, the easiest way to do something like this would be to put objects of data into the database and have your code know the schema of the info.
  
Doing some searching it seems Google beat me to the punch with this idea.

<http://en.wikipedia.org/wiki/BigTable>

So this gives me the impression its plausible to do what I&#8217;m thinking, but is it really efficient? Can it be done is such as way so that each call isn&#8217;t grabbing ALL the info related to a player. The goal would be to return a query then to deserialize it. And not to perform string manipulations on it during the query.

Let me give an example of the problem of having all of ones data in a single object.
  
You have 5 stats, experiences, weapons, armour, magic, a guild, quests, inventory, gold, friends, mail, an attack history&#8230;

I think you start to get the point. That&#8217;s a large amount of info when you only want your players names and id. I can think of a number of problems for using a large scale solution like bigtable, but is there a way to keep a similar structure on a smaller scale?

To make descent framework for games, the DB needs to be incredibly flexible and this is the only thing that comes to mind when I try to think of a solution.

So for you all DB guru&#8217;s out there, what are your thoughts? Can it be done? I will try to put more thought into it over the weekend.

Also, does anyone know of any good database stress testing tools?
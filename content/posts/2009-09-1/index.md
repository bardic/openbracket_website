---
title: Creating an items table
author: judohippo
type: post
date: 2009-09-19T18:42:22+00:00
excerpt: |
  |
url: /2009/09/19/creating-an-items-table/
syntaxhighlighter_encoded:
  - 1
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
Today I tried to do a little work on my game but I got stuck on a table which I have been pondering about for a little while now but today it stopped me so I need to address it.

In the game I am working on, players will have items, and will be able to use these items on themselves or others. And these items must be able to have an equation that manipulates the users and the effected players stats. This equation should be able to manipulate multiple stats of each player. I will eventually want to add splash damage but let&#8217;s start out easy.

So, you have the user who we will call player 1 (p1) and the player that is going to be effected by this item; let&#8217;s call them player 2 (p2).

Based on this idea I have been able to think of two solutions, one which I ditched almost immediately . But I don&#8217;t know if the general idea behind this one is any good. So take a look and let me know what you think.

<span style="background-color: #ffffff; ">Items table</span>

  * id &#8211; 1
  * name &#8211; bardic&#8217;s staff of unimaginable penetration
  * equation &#8211; eq{target:10*(**p1.str**+**p1.dex**) / **p2.def**-50<span style="background-color: #ffffff;">}</span>
  * <span style="background-color: #ffffff;">target &#8211; 0 // 0 = enemy , 1 = allies, 2 = all</span>

As you can see, I am storing the equation in a JSON like object and would simply do a search on the search and replace the bold variables with player 1&#8217;s and player 2&#8242; actually stats.  This method I think would allow me to easily keep the equation dynamic and clean.

Now lets look at something like area effects (splash damage, group shields) and how I would go about store such an equation in the table. This example has 3 equations in the equation object but only would be be used at most. I would either use target and others or all but I put all three is just for example.

  * equation &#8211; **eq**{**target**:10*(p1.str+p1.dex) / p2.def-50, **others**:10*(p1.str+p1.dex) / p2.def-20, **all**: 10*(p1.str+p1.dex) / p2.def-20}

With this setup I can have multiple equations and multiple stats in either set up. I did have an option 2 which was to bust out all the stats into their own tables but the more I thought about it in comparison to this it just seemed clunky and overly complex for something that shouldn&#8217;t be that crazy.

Now, to prove to myself that I could actually do this I wrote some a simple script to do such a thing. Right now the script is messier than it needs to be but I wrote it kinda quick just to prove that I can do that I&#8217;m talking about here. I will eventually clean it up when I have some time.

But the gist of the script is it hide&#8217;s the p1.stats and replaces them with actual numbers. This would naturally all come from a database but for the example I just have everything there.

I&#8217;d like to apologize in advanced for the lack of formating. I&#8217;ve tried three different highlighters and they break things worse than how they appear here. So till I find a better&#8230; sorry >.<

<code style="white-space: nowrap;">&lt;code>&lt;span style="color: #000000;">&lt;span style="color: #0000bb;">$eq &lt;/span>&lt;span style="color: #007700;">= &lt;/span>&lt;span style="color: #0000bb;">10&lt;/span>&lt;span style="color: #007700;">*&lt;/span>&lt;span style="color: #0000bb;">5 &lt;/span>&lt;span style="color: #007700;">/ &lt;/span>&lt;span style="color: #0000bb;">p1&lt;/span>&lt;span style="color: #007700;">.&lt;/span>&lt;span style="color: #0000bb;">str &lt;/span>&lt;span style="color: #007700;">+ &lt;/span>&lt;span style="color: #0000bb;">p1&lt;/span>&lt;span style="color: #007700;">.&lt;/span>&lt;span style="color: #0000bb;">dex &lt;/span>&lt;span style="color: #007700;">/ &lt;/span>&lt;span style="color: #0000bb;">p1&lt;/span>&lt;span style="color: #007700;">.&lt;/span>&lt;span style="color: #0000bb;">chr&lt;/span>&lt;span style="color: #007700;">;&lt;/p>
&lt;p>&lt;/span>&lt;span style="color: #0000bb;">replaceHoldersWithVals&lt;/span>&lt;span style="color: #007700;">(&lt;/span>&lt;span style="color: #0000bb;">createStatArr&lt;/span>&lt;span style="color: #007700;">(&lt;/span>&lt;span style="color: #0000bb;">getHolders&lt;/span>&lt;span style="color: #007700;">(&lt;/span>&lt;span style="color: #0000bb;">$eq&lt;/span>&lt;span style="color: #007700;">)),&lt;/span>&lt;span style="color: #0000bb;">$eq&lt;/span>&lt;span style="color: #007700;">);&lt;/p>
&lt;p>function &lt;/span>&lt;span style="color: #0000bb;">getHolders&lt;/span>&lt;span style="color: #007700;">(&lt;/span>&lt;span style="color: #0000bb;">$str&lt;/span>&lt;span style="color: #007700;">)&lt;br />
{&lt;br />
&lt;/span>&lt;span style="color: #0000bb;">$statArr &lt;/span>&lt;span style="color: #007700;">= array();&lt;br />
&lt;/span>&lt;span style="color: #0000bb;">$pos &lt;/span>&lt;span style="color: #007700;">= &lt;/span>&lt;span style="color: #0000bb;">0&lt;/span>&lt;span style="color: #007700;">;&lt;br />
&lt;/span>&lt;span style="color: #0000bb;">$i &lt;/span>&lt;span style="color: #007700;">= &lt;/span>&lt;span style="color: #0000bb;">0&lt;/span>&lt;span style="color: #007700;">;&lt;br />
&lt;/span>&lt;span style="color: #0000bb;">$len &lt;/span>&lt;span style="color: #007700;">= &lt;/span>&lt;span style="color: #0000bb;">strlen&lt;/span>&lt;span style="color: #007700;">(&lt;/span>&lt;span style="color: #0000bb;">$str&lt;/span>&lt;span style="color: #007700;">);&lt;br />
while(&lt;/span>&lt;span style="color: #0000bb;">$i &lt;/span>&lt;span style="color: #007700;">!= &lt;/span>&lt;span style="color: #0000bb;">strlen&lt;/span>&lt;span style="color: #007700;">(&lt;/span>&lt;span style="color: #0000bb;">$str&lt;/span>&lt;span style="color: #007700;">))&lt;br />
{&lt;br />
if(&lt;/span>&lt;span style="color: #0000bb;">stripos&lt;/span>&lt;span style="color: #007700;">(&lt;/span>&lt;span style="color: #0000bb;">$str&lt;/span>&lt;span style="color: #007700;">,&lt;/span>&lt;span style="color: #dd0000;">"p1"&lt;/span>&lt;span style="color: #007700;">,&lt;/span>&lt;span style="color: #0000bb;">$pos&lt;/span>&lt;span style="color: #007700;">))&lt;br />
{&lt;br />
&lt;/span>&lt;span style="color: #0000bb;">$pos &lt;/span>&lt;span style="color: #007700;">= &lt;/span>&lt;span style="color: #0000bb;">stripos&lt;/span>&lt;span style="color: #007700;">(&lt;/span>&lt;span style="color: #0000bb;">$str&lt;/span>&lt;span style="color: #007700;">,&lt;/span>&lt;span style="color: #dd0000;">"p1"&lt;/span>&lt;span style="color: #007700;">,&lt;/span>&lt;span style="color: #0000bb;">$pos&lt;/span>&lt;span style="color: #007700;">);&lt;br />
&lt;/span>&lt;span style="color: #0000bb;">array_push&lt;/span>&lt;span style="color: #007700;">(&lt;/span>&lt;span style="color: #0000bb;">$statArr&lt;/span>&lt;span style="color: #007700;">,&lt;/span>&lt;span style="color: #0000bb;">substr&lt;/span>&lt;span style="color: #007700;">(&lt;/span>&lt;span style="color: #0000bb;">$str&lt;/span>&lt;span style="color: #007700;">,&lt;/span>&lt;span style="color: #0000bb;">$pos&lt;/span>&lt;span style="color: #007700;">+&lt;/span>&lt;span style="color: #0000bb;">3&lt;/span>&lt;span style="color: #007700;">,&lt;/span>&lt;span style="color: #0000bb;">3&lt;/span>&lt;span style="color: #007700;">));&lt;br />
&lt;/span>&lt;span style="color: #0000bb;">$pos &lt;/span>&lt;span style="color: #007700;">+= &lt;/span>&lt;span style="color: #0000bb;">6&lt;/span>&lt;span style="color: #007700;">;&lt;br />
}else{&lt;br />
&lt;/span>&lt;span style="color: #0000bb;">$i &lt;/span>&lt;span style="color: #007700;">= &lt;/span>&lt;span style="color: #0000bb;">$len&lt;/span>&lt;span style="color: #007700;">;&lt;br />
}&lt;br />
}&lt;br />
return &lt;/span>&lt;span style="color: #0000bb;">$statArr&lt;/span>&lt;span style="color: #007700;">;&lt;br />
}&lt;/p>
&lt;p>function &lt;/span>&lt;span style="color: #0000bb;">createStatArr&lt;/span>&lt;span style="color: #007700;">(&lt;/span>&lt;span style="color: #0000bb;">$statArr&lt;/span>&lt;span style="color: #007700;">)&lt;br />
{&lt;br />
for(&lt;/span>&lt;span style="color: #0000bb;">$i &lt;/span>&lt;span style="color: #007700;">= &lt;/span>&lt;span style="color: #0000bb;">0&lt;/span>&lt;span style="color: #007700;">; &lt;/span>&lt;span style="color: #0000bb;">$i &lt;/span>&lt;span style="color: #007700;">&lt; &lt;/span>&lt;span style="color: #0000bb;">count&lt;/span>&lt;span style="color: #007700;">(&lt;/span>&lt;span style="color: #0000bb;">$statArr&lt;/span>&lt;span style="color: #007700;">);&lt;/span>&lt;span style="color: #0000bb;">$i&lt;/span>&lt;span style="color: #007700;">++)&lt;br />
{&lt;br />
switch(&lt;/span>&lt;span style="color: #0000bb;">$statArr&lt;/span>&lt;span style="color: #007700;">[&lt;/span>&lt;span style="color: #0000bb;">$i&lt;/span>&lt;span style="color: #007700;">])&lt;br />
{&lt;br />
case &lt;/span>&lt;span style="color: #dd0000;">"str"&lt;/span>&lt;span style="color: #007700;">:&lt;br />
{&lt;br />
&lt;/span>&lt;span style="color: #0000bb;">$statArr&lt;/span>&lt;span style="color: #007700;">[&lt;/span>&lt;span style="color: #0000bb;">$i&lt;/span>&lt;span style="color: #007700;">] = array(&lt;/span>&lt;span style="color: #dd0000;">"str"&lt;/span>&lt;span style="color: #007700;">=&gt;&lt;/span>&lt;span style="color: #0000bb;">10&lt;/span>&lt;span style="color: #007700;">);&lt;br />
break;&lt;br />
}&lt;br />
case &lt;/span>&lt;span style="color: #dd0000;">"dex"&lt;/span>&lt;span style="color: #007700;">:&lt;br />
{&lt;br />
&lt;/span>&lt;span style="color: #0000bb;">$statArr&lt;/span>&lt;span style="color: #007700;">[&lt;/span>&lt;span style="color: #0000bb;">$i&lt;/span>&lt;span style="color: #007700;">] = array(&lt;/span>&lt;span style="color: #dd0000;">"dex"&lt;/span>&lt;span style="color: #007700;">=&gt;&lt;/span>&lt;span style="color: #0000bb;">7&lt;/span>&lt;span style="color: #007700;">);&lt;br />
break;&lt;br />
}&lt;br />
case &lt;/span>&lt;span style="color: #dd0000;">"chr"&lt;/span>&lt;span style="color: #007700;">:&lt;br />
{&lt;br />
&lt;/span>&lt;span style="color: #0000bb;">$statArr&lt;/span>&lt;span style="color: #007700;">[&lt;/span>&lt;span style="color: #0000bb;">$i&lt;/span>&lt;span style="color: #007700;">] = array(&lt;/span>&lt;span style="color: #dd0000;">"chr"&lt;/span>&lt;span style="color: #007700;">=&gt;&lt;/span>&lt;span style="color: #0000bb;">2&lt;/span>&lt;span style="color: #007700;">);&lt;br />
break;&lt;br />
}&lt;br />
}&lt;br />
}&lt;/p>
&lt;p>return &lt;/span>&lt;span style="color: #0000bb;">$statArr&lt;/span>&lt;span style="color: #007700;">;&lt;br />
}&lt;/p>
&lt;p>function &lt;/span>&lt;span style="color: #0000bb;">replaceHoldersWithVals&lt;/span>&lt;span style="color: #007700;">(&lt;/span>&lt;span style="color: #0000bb;">$statArr&lt;/span>&lt;span style="color: #007700;">, &lt;/span>&lt;span style="color: #0000bb;">$str&lt;/span>&lt;span style="color: #007700;">)&lt;br />
{&lt;br />
&lt;/span>&lt;span style="color: #0000bb;">$pos &lt;/span>&lt;span style="color: #007700;">= &lt;/span>&lt;span style="color: #0000bb;">0&lt;/span>&lt;span style="color: #007700;">;&lt;br />
&lt;/span>&lt;span style="color: #0000bb;">$len &lt;/span>&lt;span style="color: #007700;">= &lt;/span>&lt;span style="color: #0000bb;">strlen&lt;/span>&lt;span style="color: #007700;">(&lt;/span>&lt;span style="color: #0000bb;">$str&lt;/span>&lt;span style="color: #007700;">);&lt;br />
for(&lt;/span>&lt;span style="color: #0000bb;">$i &lt;/span>&lt;span style="color: #007700;">= &lt;/span>&lt;span style="color: #0000bb;">0&lt;/span>&lt;span style="color: #007700;">; &lt;/span>&lt;span style="color: #0000bb;">$i &lt;/span>&lt;span style="color: #007700;">&lt; &lt;/span>&lt;span style="color: #0000bb;">count&lt;/span>&lt;span style="color: #007700;">(&lt;/span>&lt;span style="color: #0000bb;">$statArr&lt;/span>&lt;span style="color: #007700;">);&lt;/span>&lt;span style="color: #0000bb;">$i&lt;/span>&lt;span style="color: #007700;">++)&lt;br />
{&lt;br />
&lt;/span>&lt;span style="color: #0000bb;">$str &lt;/span>&lt;span style="color: #007700;">= &lt;/span>&lt;span style="color: #0000bb;">str_ireplace&lt;/span>&lt;span style="color: #007700;">(&lt;/span>&lt;span style="color: #dd0000;">"p1."&lt;/span>&lt;span style="color: #007700;">.&lt;/span>&lt;span style="color: #0000bb;">key&lt;/span>&lt;span style="color: #007700;">(&lt;/span>&lt;span style="color: #0000bb;">$statArr&lt;/span>&lt;span style="color: #007700;">[&lt;/span>&lt;span style="color: #0000bb;">$i&lt;/span>&lt;span style="color: #007700;">]),&lt;/span>&lt;span style="color: #0000bb;">$statArr&lt;/span>&lt;span style="color: #007700;">[&lt;/span>&lt;span style="color: #0000bb;">$i&lt;/span>&lt;span style="color: #007700;">][&lt;/span>&lt;span style="color: #0000bb;">key&lt;/span>&lt;span style="color: #007700;">(&lt;/span>&lt;span style="color: #0000bb;">$statArr&lt;/span>&lt;span style="color: #007700;">[&lt;/span>&lt;span style="color: #0000bb;">$i&lt;/span>&lt;span style="color: #007700;">])],&lt;/span>&lt;span style="color: #0000bb;">$str&lt;/span>&lt;span style="color: #007700;">);&lt;br />
}&lt;br />
eval(&lt;/span>&lt;span style="color: #dd0000;">"\$e = $str;"&lt;/span>&lt;span style="color: #007700;">);&lt;br />
echo &lt;/span>&lt;span style="color: #0000bb;">$e&lt;/span>&lt;span style="color: #007700;">;&lt;br />
}&lt;/span>&lt;/span></code></code>
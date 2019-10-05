---
title: red5 + wamp
author: judohippo
type: post
date: 2009-06-02T15:28:27+00:00
excerpt: |
  |
url: /2009/06/02/red5-wamp/
categories:
  - PBBG

---
Well this gave me a bit of a run around, but I have finally (I think) got it all sorted out : red5 running on windows through wamp. This isn&#8217;t really that big of a feat but it&#8217;s the first time I&#8217;ve done something like it and I&#8217;d like to explain step by step how to get it working since none of the guides I read held your hand through the whole set up.  So I will ^^

If you don&#8217;t know what Red5 is here&#8217;s a snippet from [Wikipedia][1] that explains the basic idea:

> Red5 is considered as a free alternate to [Adobe Flash Media Server][2], and supports many of the same feature sets. It has a few additional feature sets such as the ability to intercept live streams, and the ability to easily plug in other [Java][3] libraries such as [Hibernate][4].

So, my first attempt was to use tomcat, but that didn&#8217;t work so so well, and since I have a wamp server already running I figured it would be best to use that. After some googling  I found other people that had already done this, on the  Red5 mailing list , [here][5].

Pretty much I&#8217;m just gonna copy their nine steps and add my additional comments since their way works, it&#8217;s just a little vague though.

1) Install [wamp][6]
  
2) Create a directory named &#8220;red5-server&#8221; into C:\wamp\www
  
3) Download and install [TortoiseSVN][7]
  
4) right-click on C:\wamp\www\red5-server folder and click SVNCheckout
  
5) enter  the url from which red5-server will be downloaded : http://red5.googlecode.com/svn/java/server/trunk
  
6) download [ant][8] from the apache software foundation (manage dependencies for compilation)
  
7) Extract ant to a folder where ever you want. Just remember it&#8217;s path since you will need to add it to your system variables later. I put it at : C:\apache-ant-1.7.1
  
8 )Download the [JDK 6][9] and install
  
9) Add ant and javac.exe to your system&#8217;s Path variable (right click on my computer &#8211; > Advanced &#8211; > Enviroment Variables &#8211; > Find variable Path in System Variables and edit. You need to add the path to the javac.exe which is in your JDK installation (default on xp for me : C:\Program Files\Java\jdk1.6.0_14\bin) and the bat files for ant (C:\apache-ant-1.7.1\bin) . Make sure that each variable is separated by a semi colon or it won&#8217;t work.)
  
10) open a shell on C:\wamp\www\red5-server
  
11) just type ant server &#8211; if ant is not found your system variables are set up wrong. If during building it says that it can&#8217;t find tools.jar where it expected the easiest solution is to find where the tools.jar file is on your pc and copy it to where the ant expects it. If at the end of the build it says it can&#8217;t find javac.exe, you either installed the wrong version of java or your system vars are set up wrong.
  
12) You can install samples demo via the administration console http://localhost/RED5-server/webapps/installer/index.html

And there ya go -Red5 through your wamp installation.

For those wondering what the hell this has to do with PBBGs, really not a whole lot. lol. But for those that are interested in using flash or something else that can communicate with a media server for their game (chat, real time player interaction, and so on) I hope this helps and costs you&#8217;re project costs considerably 😉

 [1]: http://en.wikipedia.org/wiki/Red5
 [2]: http://en.wikipedia.org/wiki/Adobe_Flash_Media_Server "Adobe Flash Media Server"
 [3]: http://en.wikipedia.org/wiki/Java_%28programming_language%29 "Java (programming language)"
 [4]: http://en.wikipedia.org/wiki/Hibernate_%28Java%29 "Hibernate (Java)"
 [5]: http://www.pubbs.net/osflash/200904/54509/
 [6]: http://www.wampserver.com/en/
 [7]: http://tortoisesvn.tigris.org/
 [8]: http://ant.apache.org/
 [9]: http://java.sun.com/javase/downloads/index.jsp
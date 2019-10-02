---
title: Goodbye Wordpress, hello Gatsby
author: judohippo
type: post
date: 2019-09-30T19:55:16+00:00
excerpt: |
  |
url: good-wordpress-hello-gatsby
categories:
  - game development
  - phaser
tags:
  - game development
  - phaser

---

I like tech. There's just something exciting about trying new things and breaking everything followed up by hacking it all back together again. 

And in that spirit I said goodbye to Wordpress and hello to [gatsby][1]. Check out the site. Its pretty damn cool stuff. But my goal with this post isn't to sell gatsby on you. If you're familiar with it you probably want to try it. 

This post is about getting my damn posts out of wordpress and into a readable format for gatsby.

It's not like the blog had very many posts, ~70. But I'll be damned if I'm going to do that work copying and modifying when there are scripts that need to get me close. 

And sure enough there is; [wordpress-to-hugo-exporter][2]. As you can see by the name, it's not exactly what we wanted but from what I can tell it's pretty bloody close.  Let's explore. 

wordpress-to-hugo-exporter seems simple enough. Install plugin, click export. Dope. 

First gotcha: Your host needs to allow you to edit the php.ini to allow for the zip module to be loaded. 

Round 2; export all data for wordpress, get a local install running on wamp, import there, install wordpress-to-hugo-exporter, modify php.ini and Bob's your uncle. 

Here's ome data that is crazy close to being what we need. The only real issue for my setup was that the files just weren't right on disk.

That sounds like a bash script to me.

```javascript
#!/bin/bash
FILES=/posts/*

for f in $FILES
do
    echo "Processing $f file..."
    # take action on each file. $f store current file name
    
    foldername = ${f:0:9}
    mkdir foldername
    mv f ./foldername/index.md
done
```

Place this along your wordpress-to-hugo-exporter results which should be in a folder called posts and give it a run. It should generate a folder for each post by extracting the datestamp from the posts name and then move it into it and renaming it index. 

There you have it. How I managed to ditch wordpress.




[1]:https://www.gatsbyjs.org/
[2]:https://github.com/SchumacherFM/wordpress-to-hugo-exporter
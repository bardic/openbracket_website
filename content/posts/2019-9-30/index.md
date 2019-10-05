---
title: Goodbye Wordpress, hello Gatsby
author: judohippo
type: post
date: 2019-5-04T19:55:16+00:00
excerpt: |
  |
url: good-wordpress-hello-gatsby
categories:
  - web dev
  - gatsby
  - wordpress
tags:
  - web dev
  - gatsby
  - wordpress
---

I like tech. There’s just something exciting about seeking new concepts, breaking everything and hacking it all back together again. 

And in that spirit I said adieu to WordPress and hello to [Gatsby][1]. Check out the site, it’s damn cool stuff. But my intention with this post isn’t to sell Gatsby on you as if you’re familiar with it, you presumably want to try it. 

This article instead is about getting my damn posts out of WordPress and into a readable form for Gatsby.

It’s not like my blog had very many posts. Maybe 70. But I’ll be damned if I will do the work of copying and modifying my existing posts when I’m certain there’s a tool to do it for me. 

And sure enough there is; [wordpress-to-hugo-exporter][2]. As you can see by the name, it’s not exactly what we wanted but from what I can tell it’s pretty bloody close. Let’s explore. 

wordpress-to-hugo-exporter seems simple enough. Install plugin, click export. Dope. 

And gotcha; Your host needs to allow you to edit the php.ini to enable for the zip module to be loaded. 

Instead, let’s export all our WordPress posts using the default exporter, get a local install running on Wamp, import there, install wordpress-to-hugo-exporter, change php.ini and Bob’s your uncle. 

Now we have some data that is crazy close to being what we need. The only real issue for my setup was that the files weren’t organized correctly on disk.

That sounds like a bash script to me.

```bash
#!/bin/bash
for f in ./posts/*.md;do
    IFS=’/’ read -r -a array <<< “$f”
    FNAME=${array[2]}
    CLEANNAME=${FNAME:0:9}
    mkdir “./posts/$CLEANNAME”
    mv $f “./posts/$CLEANNAME/index.md”
done

```

Place this alongside your folder contained the wordpress-to-hugo-exporter results and give it a run. It should generate a folder for each post by extracting the date-stamp from the posts file name and then move the file into the folder and renaming the file index.md. 

There you have it. How I ditched WordPress.




[1]:https://www.gatsbyjs.org/
[2]:https://github.com/SchumacherFM/wordpress-to-hugo-exporter
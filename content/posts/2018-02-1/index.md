---
title: Image pinch zoom and swipe in Unity
author: judohippo
type: post
date: 2018-02-18T00:20:17+00:00
excerpt: |
  |
url: /2018/02/18/image-pinch-zoom-and-swipe-in-unity/
categories:
  - app development
  - unity

---
Currently, I am working on a glorified slideshow for an app that I am rebuilding in Unity. After very little effort on my part, I was unable to find a slideshow framework I liked or a plugin that handled input the way I wanted.

So I just made it the way I wanted it to behave. It&#8217;s pretty straightforward. The only thing of interest in that I am using MouseDown for the swipe vs GetTouch for the pinch. This was so I could test the swipe in the editor. If I used GetTouch instead I wouldn&#8217;t need the Invoke function for blocking swipes during a pinch.

https://gist.github.com/bardic/50441be8ff78772ccff04bef6a904632

&nbsp;
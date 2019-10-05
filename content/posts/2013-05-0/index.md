---
title: NME error – Missing super constructor call
author: judohippo
type: post
date: 2013-05-08T12:37:16+00:00
excerpt: |
  |
url: /2013/05/08/nme-error-missing-super-constructor-call/
categories:
  - haxe

---
So since my memory sucks and I likely will forget this one, I&#8217;m going to put it here. It&#8217;s an easy enough fix and a stupid error on my part but it took me a good 30 minutes to figure it out.

On compile after creating an empty project I received this error

> Source/Main.hx:15: lines 15-35 : Missing super constructor call

The solution is to add super() to your new function for your class.
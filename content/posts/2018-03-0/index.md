---
title: Unity missing custom initializers
author: judohippo
type: post
date: 2018-03-09T19:40:20+00:00
excerpt: |
  |
url: /2018/03/09/unity-missing-custom-initializers/
categories:
  - unity

---
One of the things I miss the most coming from Objective-C to Unity is the lack of custom initializers. Luckily-ish there is a way to kind of do this:

```javascript
public class Meow()
{
    public int x
    public string name
}

new Meow{x = 10, name = "cat"}
```
---
title: Grouping signals in StrangeIoC
author: judohippo
type: post
date: 2015-04-01T11:20:59+00:00
excerpt: |
  |
url: /2015/04/01/grouping-signals-in-strangeioc/
categories:
  - unity

---
Recently I have started relearning Unity3d and because I very much enjoy DI and IoC I&#8217;m also relearning StrangeIoC. Since I&#8217;ve last looked at Strange, Signals have been added. This makes me very happy being an old AS3 dev that <3&#8217;d Robotlegs and AS3Signals.

Anywho, one &#8220;problem&#8221; with signals, that existed in flash as well, is that each signal is a class. The idea of making a 5 line class for each signal I want to dispatch irks me. My solution is an ugly one but I liked it when doing flash and so far like it here as well.

[csharp]
  
namespace ca.openbracket.signals{
  
    public class StartSignal:Signal{}
  
    public class TestSignal:Signal{}
  
}
  
[/csharp]

What I like about this approach is that I can group my related signals into a single file and see them all.  The two big drawbacks are searching for a signal can be difficult if you aren&#8217;t accustomed to this and you don&#8217;t get more granulated version control details.

Is this worth it? I have no idea. But it makes me happy.
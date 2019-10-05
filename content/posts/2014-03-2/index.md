---
title: Getting started with HaxeFlixel
author: judohippo
type: post
date: 2014-03-21T11:25:40+00:00
excerpt: |
  |
url: /2014/03/21/getting-started-with-haxeflixel/
categories:
  - development
  - game development
  - haxe

---
With Haxe gaining so much popularity, flash work declining and my want to make 2d games with a language I&#8217;m already fairly familiar with that I can publish to multiple platforms, I&#8217;ve decided that Haxe is the right move. With that decision I had to pick a game engine and it was really between Flambe or HaxeFlixel.

Since I don&#8217;t care about a html5 target and I feel slightly more comfortable in the HaxeFlixel API, I have decided to use it.

Getting started is actually pretty easy but there were a few points that tripped me up slightly. The official documentation for installation is actually spot on. Check it out [here][1].

Once installed, you need some more of editor/IDE. Since I&#8217;m developing on a Mac, I have pretty limited options. Since the IntelliJ plugin is wonky at best, I&#8217;ve gone with Sublime Text.  When setting up Sublime I was easily able to set up the plugin following the [instructions][2] but could not for the life of me get it to actually get it to highlight or code complete.

The issue was the instructions I was following didn&#8217;t point out the need to set up some path variables.  The easiest way to do this is to add these variables to your .bashrc

In your home directory (~/) run nano .bashrc . If you have this file it&#8217;ll open it, if not it will create it. Then add this:

`export haxe_path="/usr/bin/haxe"<br />
export HAXE_LIBRARY_PATH="/usr/local/lib/haxe/std:."`

Exit and save.

Once you have all your libs set up for HaxeFlixel you want to add a symlink to the subl command in Sublime. This will allow HaxeFlixel to open the project for you when creating new projects.  There are official instructions on this but it didn&#8217;t work for me.  My path was slightly different :

`ln -s /Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl /usr/bin/subl`

And that there covers the initial setup issues I encountered. I&#8217;ll likely post more findings as I learn more of HaxeFlixel. I actually never used Flixel before, but have several years of Flash development behind so most of my findings will likely be differences from Flash to Haxe .

 [1]: http://haxeflixel.com/documentation/getting-started/
 [2]: https://github.com/clemos/haxe-sublime-bundle
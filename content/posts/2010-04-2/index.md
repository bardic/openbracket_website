---
title: Windows + VirtualBox + Ubuntu + nodejs = hooray!
author: judohippo
type: post
date: 2010-04-30T00:08:49+00:00
excerpt: |
  |
url: /2010/04/29/windows-virtualbox-ubuntu-nodejs-hooray/
categories:
  - browser based
  - game development
  - nodejs
  - PBBG
  - web game

---
As I&#8217;m sure some of my readers (all four of you) may know because of the IRC room, I&#8217;ve lately been trying to get nodejs running on a virtual machine (ubuntu since nodejs doesn&#8217;t like windows and I don&#8217;t want to virtualize osx) that is accessible from my host (windows) so I can use it for Lantern. Well I had a few minutes tonight to sit down and do some reading and I figured it out, hence the post so I don&#8217;t forget.

I&#8217;ll go right from step one in case anyone else is trying to do this with no prior knowledge 😉 I should also mention if you&#8217;re on *nix you don&#8217;t need to do this.

  * Get <a href="http://www.virtualbox.org/" target="_blank" rel="noopener noreferrer">virtualbox </a>
  * Get <a href="http://www.ubuntu.com/" target="_blank" rel="noopener noreferrer">Ubuntu</a> (or whatever distro tickles your fancy)
  * Install a vm of ubuntu
  * Download <a href="http://nodejs.org/" target="_blank" rel="noopener noreferrer">nodejs </a>on vm
  * Config/Make/Install &#8211; I had to install g++ and cmake to get it to build properly
  * (The tricky part) On your host (windows) navigate to your virtualbox installation via command &#8211; something like this : C:\Program Files\Sun\VirtualBox\
  * Run these commands :

VBoxManage.exe setextradata &#8220;ubuntu2&#8221; &#8220;VBoxInternal/Devices/pcnet/0/LUN#0/Config/guestssh/Protocol&#8221; TCP
  
VBoxManage.exe setextradata &#8220;ubuntu2&#8221; &#8220;VBoxInternal/Devices/pcnet/0/LUN#0/Config/guestssh/GuestPort&#8221; 8000
  
VBoxManage.exe setextradata &#8220;ubuntu2&#8221; &#8220;VBoxInternal/Devices/pcnet/0/LUN#0/Config/guestssh/HostPort&#8221; 8000

  * Launch your vm, start node js and on your host in a browser go to localhost:8000- HOORAY!

So here&#8217;s what I know about the commands what you need to edit to make it work

  * Instead of &#8220;ubuntu2&#8221; use the name of your vm.
  * the guestssh isn&#8217;t important. Just a name use to group the settings. Call it whatever you want.
  * Guest and Host ports are the port you want to access on your vm.
  * If you change you&#8217;re installation at all from the default you&#8217;ll have to figure out the other changers yourself here : <a href="http://www.virtualbox.org/manual/ch06.html#natforward" target="_self" rel="noopener noreferrer">http://www.virtualbox.org/manual/ch06.html#natforward</a>

Good luck ^^
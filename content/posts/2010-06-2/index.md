---
title: SSH’ing into Ubuntu on Virtualbox from Windows to maintain my sanity
author: judohippo
type: post
date: 2010-06-20T13:49:31+00:00
excerpt: |
  |
url: /2010/06/20/sshing-into-ubuntu-on-virtualbox-from-windows-to-maintain-my-sanity/
categories:
  - PBBG

---
As my work on Lantern begins to leave testing tech and basic tests, my work flow quickly became shit where I was either developing code on windows and then having to move it to a shared folder or a usb, or attempting to develop on my virtual machine, which is far from fun. Luckily for me I work with people much smarter than me and one of them suggested ssh&#8217;ing into my virtual machine and using sftp to kept my files synced.

And this actually works really well for me and was fairly simple to set up, so here ya go:

  1. Check out this <a href="http://openbracket.ca/2010/04/29/windows-virtualbox-ubuntu-nodejs-hooray/" target="_blank" rel="noopener noreferrer">post </a>I already wrote on how to forward a port on your VM for the host to hit.
  2. Download [Cygwin][1].
  3. Start SSH on your server &#8211; Google around that. Will depend on your distro
  4. Open Cygwin and run this : ssh username@ipaddress
  5. Using <a href="http://filezilla-project.org/" target="_blank" rel="noopener noreferrer">Filezilla</a>, you can SFTP into your VM using the same username/password you used in Cygwin.

And there ya go. Sanity maintained.

 [1]: http://www.cygwin.com/
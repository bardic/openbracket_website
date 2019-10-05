---
title: Git ‘cherry-pick’ individual file
author: judohippo
type: post
date: 2015-04-15T13:23:10+00:00
excerpt: |
  |
url: /2015/04/15/git-cherry-pick-individual-file/
categories:
  - development

---
Today the situation came up where I wanted the latest of a file in another branch. But only that file. Didn&#8217;t want to merge and reject so that get&#8217;s rid of cherrypick and merge as options.

Luckily there is a way to do this just using the checkout command.

[code]git checkout feature/meow Source/Cat.cs[/code]

&nbsp;

Sauce :[ http://jasonrudolph.com/blog/2009/02/25/git-tip-how-to-merge-specific-files-from-another-branch/][1]

 [1]: http://jasonrudolph.com/blog/2009/02/25/git-tip-how-to-merge-specific-files-from-another-branch/
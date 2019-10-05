---
title: JSONFX and Unity
author: judohippo
type: post
date: 2012-04-25T11:51:56+00:00
excerpt: |
  |
url: /2012/04/25/jsonfx-and-unity/
categories:
  - unity
tags:
  - unity

---
Hey all. It&#8217;s been fucking ages since my last post, but maybe this time I&#8217;ll be able to keep this sucker going. But to hell with excuses and whatnot. On to the point!

Recently I have been working with unity to build some games at work and decided to take a crack at a 2d game for myself. One of the first things I&#8217;ve decided to do is work on the quest engine for the game. Since this is going to be a single player game I&#8217;m storing my quests in a local file. I initially tried to store this data in XML until I discovered how awful XML is in C#. I then moved over to storing my quests in JSON. After some googling I came across <a href="http://jsonfx.net/" target="_blank" rel="noopener noreferrer">JsonFX</a> and went with it since it will also work on mobile.

Looking at the examples it seem pretty straight forward so off I went. And after a little trial and error I got it at least loading and parsing the json into my unity project finally!

[csharp]using UnityEngine;
  
using System.Collections;
  
using System.Xml;
  
using System.Xml.Serialization;
  
using System.IO;
  
using System.Text;
  
using JsonFx.Json;

public class FetchQuest{
	  
public string name;
	  
public int questId;
  
}

public class StoryQuest{
	  
public string name;
	  
public int npcId;
  
}

public class Quest2{
	  
public FetchQuest[] fetchquests;
	  
public StoryQuest[] storyquests;
  
}

public class QuestManager : MonoBehaviour {
	  
void Start () {
		  
StreamReader r = File.OpenText(Application.dataPath+"/quest.json");
	      
string _info = r.ReadToEnd();
	      
r.Close();
		  
print(_info);
		  
var search = JsonReader.Deserialize<Quest2>(_info);
		  
print(search.fetchquests[0].name);
	  
}
  
}

[/csharp]
  
[text]
  
{
  
"fetchquests":
	  
[{"name":"test", "questId":1},
	  
{"name":"test", "questId":1}]
  
,"storyquests":
	  
[{"name":"story 1", "npcId":1},
	  
{"name":"story 2", "npcId":2}]
  
}
  
[/text]

And thats loading and deserializing! This makes me happy. A thing to note and this is what caught me, is that it looks up the class variables by name, so case matters! Remember this!</pre>
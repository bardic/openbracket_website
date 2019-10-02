---
title: Fastlane build numbers for Unity
author: judohippo
type: post
date: 2018-02-24T02:11:41+00:00
excerpt: |
  |
url: /2018/02/24/fastlane-build-numbers-for-unity/
categories:
  - app development
  - game development
  - unity

---
Recently on a project, I came across a problem where the Fastlane [Unity action][1] I am using was blowing away the info.plist of the generated xcode project despite the Unity project being marked as &#8220;Append&#8221; instead of &#8220;Replace&#8221;.

The reason this is a problem is we wanted each build to be uploaded to hockey app with a unique build number. Fastlane has plugins to handle this but it depends on the info.plist not being destroyed.

So there&#8217;s a simple hack to fix this. Use a small ruby function in the fastlane file to write your version to a file and update each time the file is ran.

Here&#8217;s a snippet:

```ruby
build_num = 1
filename = "build_number"
if File.exist?(filename)
File.open(filename) { |f|
    build_num = f.read.to_i + 1
}
end
File.open(filename, "w") { |f|
    f.write(build_num)
}
```

When you want to get your version number you simply just :

```javascript
file = File.open("build_number", "r")
build_num = file.read
file.close
```

And Bob's your uncle.

 [1]: https://gist.github.com/dddnuts/522302dc0b787896ebd103542372f9c1#file-unity-rb
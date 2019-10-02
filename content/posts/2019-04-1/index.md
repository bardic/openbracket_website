---
title: Phaser es6/webpack + PhaserInput
author: judohippo
type: post
date: 2019-04-19T19:55:16+00:00
excerpt: |
  |
url: /2019/04/19/phaser-es6-webpack-phaserinput/
categories:
  - game development
  - phaser
tags:
  - game development
  - phaser

---
Lately I've been trying to work a little bit more with Phaser in my free time since we use it a work a bit.

Luckily for me, [Leandro Cabrera][1] has created a [boilerplate project][2] which allows me to write and structure phaser games in a sane way. 

Also luckily for me, [Azerion][3] maintains a plugin for a feature that I feel should just be part of Phaser&#8217;s core, [text input][4]. 

Unluckily for me, these two code bases do not like play together out of the box. 

After a bit of googling around I found several posts where people were encountering the same problems as me but none of the solutions worked.

Luckily a few posts provided a starting point and I was finally able to get them to play together.

Firstly in our webpack.config.js we need to make some edits to our module rules and alias objects 

```javascript
module: {
    rules: [
      { test: /\.js$/, use: ['babel-loader'], include: path.join(__dirname, 'src') },
      { test: /pixi\.js/, use: ['expose-loader?PIXI'] },
      { test: /phaser-split\.js$/, use: ['expose-loader?Phaser'] },
      { test: /p2\.js/, use: ['expose-loader?p2'] },
      { test: /phaser\-input\.js$/, use: "exports-loader?PhaserInput=PhaserInput"}
    ]
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  resolve: {
    alias
      'phaser': phaser,
      'pixi': pixi,
      'p2': p2,
      "phaser-input": path.join(
        __dirname,
        "/node_modules/@azerion/phaser-input/build/phaser-input.js"
      )
    }
  }
  ```

Then in our Boot state (or where ever, I just like plugin initialization there), we can import the class like this :

```javascript
import PhaserInput from'phaser-input'
```

And finally in our init we add the plugin to Phaser

```javascript
this.game.plugins.add(PhaserInput.PhaserInput.Plugin);
```

The double PhaserInput when adding the plugin in more than a little annoying but at the moment I&#8217;m just happy to have these two necessary code bases working together

 [1]: https://github.com/lean
 [2]: https://github.com/lean/phaser-es6-webpack
 [3]: https://github.com/azerion
 [4]: https://github.com/azerion/phaser-input
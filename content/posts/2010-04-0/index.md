---
title: Mongo + wamp
author: judohippo
type: post
date: 2010-04-08T23:57:16+00:00
excerpt: |
  |
url: /2010/04/08/mongo-wamp/
categories:
  - PBBG

---
Before I forget I just want to scribble down how I got mongo running at home. It’s actually really simple.

  1. Download [wamp][1] and get that up and running.
  2. Download the [mongo driver][2] from here. Grab the version that matches your version of php
  3. Extract the mongo driver to C:\wamp\bin\php\php5.3.0\ext
  4. Edit the php.ini and add extension=php_mongo.dll
  5. Download [mongo][3]
  6. Extract it to C:\data\db
  7. Open cmd and run the mongod.exe in bin
  8. Start wamp.

Done.

And here’s a quick test to check if it works.

<?php
  
$m = new Mongo(); // connect
  
$db = $m->foo;
  
$collection = $db->test;

$doc = array( &#8220;name&#8221; => &#8220;MongoDB&#8221;,
  
&#8220;type&#8221; => &#8220;database&#8221;,
  
&#8220;count&#8221; => 1,
  
&#8220;info&#8221; => (object)array( &#8220;x&#8221; => 203,
  
&#8220;y&#8221; => 102),
  
&#8220;versions&#8221; => array(&#8220;0.9.7&#8221;, &#8220;0.9.8&#8221;, &#8220;0.9.9&#8221;)
  
);

$collection2 = $m->foo->test;
  
$collection2->insert( $doc );

$obj = $collection->findOne();
  
var_dump( $obj );
  
?>

 [1]: http://www.wampserver.com/en/
 [2]: http://github.com/mongodb/mongo-php-driver/downloads
 [3]: http://www.mongodb.org/display/DOCS/Downloads
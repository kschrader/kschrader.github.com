--- 
wordpress_id: 1191
layout: post
title: Running Merb on Edge
date: 2008-08-17 14:29:00 -04:00
wordpress_url: urn:uuid:{a.guid}
---
<p>The easiest way to run Merb from edge:</p>

<pre>
$ sudo gem install sake
$ sake -i http://github.com/wycats/merb-more/tree/master%2Ftools%2Fmerb-dev.rake?raw=true
$ sake merb:clone
$ sake merb:install:all
</pre>

<p>This will install the edge versions of all of the merb gems.</p>

<p>To keep things up to date, navigate to the directory that you ran the commands in and do:</p>

<pre>
$ sake merb:update
$ sake merb:install:all
</pre>

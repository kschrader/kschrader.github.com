--- 
wordpress_id: 1186
layout: page
type: text
title: Don't Forget to Clear Out Your Rails Session Data
date: 2008-07-01  
wordpress_url: urn:uuid:{a.guid}
---
<p>For the last year or so, this blog has been running slow, <em>slow</em>, <strong>slow</strong>.</p>

<p>From time to time, I tried to figure out what was going on, but I figured that Typo upgrades were just causing things to slow down and use more and more memory.</p>

<p>Until tonight.</p>

<p>Tonight I did a database dump and it came to 44 MB. </p>

<p>There is no way I have 44 MB of content in this blog.  </p>

<p>So I had a look at the dump and realized that I had close to 100000 sessions in the sessions table, and that there was a table for Sitealizer plugin that's no longer part of typo.</p>

<p>So after a drop of the Sitealizer table and a</p>

<pre>rake db:sessions:clear</pre>

<p>Typo is now using 20% of the memory it was using before, running much, much faster, and the database dump comes to a slim 476 KB in size.</p>

<p>So this is my reminder to myself (and everyone else) to be sure to clear out your sessions table from time to time.</p>

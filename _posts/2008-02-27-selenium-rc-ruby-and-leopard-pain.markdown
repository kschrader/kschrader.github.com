--- 
wordpress_id: 1169
layout: post
title: Selenium RC, Ruby, and Leopard == Pain
date: 2008-02-27 17:17:00 -05:00
wordpress_url: urn:uuid:{a.guid}
---
<p>At <a href="http://www.collaborativedrug.com">CDD</a> we use Selenium RC and spec_selenium to run our acceptance tests.  Selenium is a slow way to test in general, but lately for us it's become excruciatingly painful.</p>

<p>For some some unknown reason under Leopard, our tests would seem to randomly slow to a crawl.  Tests that usually take 4 seconds to run would suddenly be taking 170+ seconds.  </p>

<p>Even worse, this would persist across reboots, and then suddenly go away while we were trying to diagnose the problem.</p>

<p>It was at the point this morning where we were using DTrace to try to figure out what was going on.</p>

<p>Luckily, it doesn't seem to have anything to do with our code, and it looks like I've solved it (or at least worked around it) for now.  </p>

<p>Selenium RC communicates over network sockets. It appears that Ruby network communication performance under Leopard is, in a word, <a href="http://www.ruby-forum.com/topic/138634">terrible</a>.</p>

<p>This problem can be most easily seen when doing a 'gem update' and then waiting forever while the metadata updates.</p>

<p>There seems to be a problem with DNS resolution somewhere in the chain that pops up intermittently.</p>

<p>For now, our workaround is:</p>

<ol>
<li>Turn off IPv6</li>
<li>Use OpenDNS for lookups.</li>
</ol>

<p>as suggested by the Ruby Forum thread linked above.  That seems to fix things on all of our machines here.</p>

<p>I would file a bug report for this, but I'm not sure if this is a Ruby thing or an OS X thing. If anyone can shed some further light on this issue it would be appreciated.</p>

--- 
wordpress_id: 1178
layout: post
title: Apple OS Upgrades Need Decent Release Notes (Ruby Broken in 10.5.3)
date: 2008-05-28 17:26:00 -04:00
wordpress_url: urn:uuid:{a.guid}
---
<p>I've been dead in the water all day here because Apple changed something in the underlying Socket/Networking implementation in Mac OS X 10.5.3 and now Ruby doesn't correctly handle sockets.  I've been looking at it, but haven't figured it out so far.</p>

<p>My thread on ruby-talk is here <a href="http://www.ruby-forum.com/topic/154556">http://www.ruby-forum.com/topic/154556</a> if anyone wants to weigh in on it.</p>

<p>I'm assuming something has to be patched into getaddrinfo.c in the ruby distribution, but my C is more than a little rusty, so it's slow moving for now.</p>

<p>Really, how hard is it release a document along with an OS upgrade explaining the low level changes made. Isn't that what we have the Apple Developer Connection for?</p>

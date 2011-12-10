--- 
wordpress_id: 1167
layout: post
title: The Power of Git, Part 2
date: 2008-02-19 22:57:00 -05:00
wordpress_url: urn:uuid:{a.guid}
---
<p>My friend Jay wrote <a href="http://blog.jayfields.com/2008/02/using-patch-as-subversion-stash.html">a blog post</a> today that says that you can use 'svn patch' as poor man's replacement for git-stash.  Fair enough, I've heard of places that use patch as full-on replacement for source control and integration as well. :-)</p>

<p><img src="http://farm3.static.flickr.com/2007/2279225750_82f8f11981_m.jpg" alt="Patch Trader"/> </p>

<p>First of all, I want to point out that we still use Subversion as our main <a href="http://utsl.gen.nz/talks/git-svn/intro.html#sux">code ghetto</a> at work.  </p>

<p>Git <a href="http://utsl.gen.nz/talks/git-svn/intro.html" title="An introduction to git-svn for Subversion/SVK users and deserters">fully supports</a> updating from svn and pushing changes back, so even if you have to use Subversion at work, you don't have to use it on your local machine.</p>

<p>The difference is that I have our entire history of source code commits on my machine in not even twice the space than it takes for my Subversion checkout (969M vs 578M).  I also can do fast local branching and checkins, without worrying about being connected to the network.</p>

<p>Here's a real example of how we used git today at work that I never would have done with Subversion.  </p>

<p>I started working on a feature yesterday on my laptop that is going to take a few days to finish.  When I got to work today I decided to pair with my coworker Krishna to continue working on it.</p>

<p>In the pre-git world we would have had to either huddle around my laptop, check in the broken code to Subversion to check it out on our other machine, or do a patch of just the changes related to that feature and transfer it to and apply it on the pairing machine.</p>

<p>Not today though. Today I just fired up git-daemon on my machine and did a 'git pull' of the feature branch onto the pairing machine. At the end of the day I just did a 'git push' back to my machine to get all of the changes we made today back so that I could continue working on it tonight.</p>

<p>Even better than that though, I can <em>not</em> continue working on it tonight. </p>

<p>Git makes branching and merging so fast and easy that I can rewind all of the changes that I've made to the code base to support that feature, fix a showstopper bug, check that change into the subversion repo, and then merge the feature branch back on top without even worrying about it.</p>

<p>Git is starting to change the way that I do development.  I can finally use branches the way that I've always wanted to. I can finally have several features in development at once on different branches, because it's so easy to switch and merge between them.</p>

<p>Even if you're stuck with Subversion as your backbone, you can still grow outside of it.</p>

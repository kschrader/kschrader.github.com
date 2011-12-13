--- 
wordpress_id: 1166
layout: page
type: text
title: "The Power of Git: git-stash"
date: 2008-02-18  
wordpress_url: urn:uuid:{a.guid}
---
<p>I converted my Subversion repository at work to a git repository recently, and today I had my first real "aha" moment.</p>

<p>I was working on a feature this morning when I realized that some code I checked in about an hour before had broken the build. In the old Subversion world, I would have needed to keep track of what I was changing to fix the bug, and then make sure to just check that in to ensure that none of my half-finished new feature got into the trunk.</p>

<p>Not anymore.  Today I just did a:</p>

<blockquote>
    <p>git-stash</p>
</blockquote>

<p>and it stashed away all of my changes in a temporary branch.  Then I fixed the build, checked in my fix out main Subversion repo (using git-svn), and did a:</p>

<blockquote>
    <p>git-stash apply</p>
</blockquote>

<p>to unroll my earlier changes back on top of the now fixed code. It's not the world's biggest saving of time, but it's one less thing that I needed to think about during development, and using git I'm seeing more and more little things that are starting to add up to a big change in the way I'm doing development.</p>

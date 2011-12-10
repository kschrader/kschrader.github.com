--- 
wordpress_id: 1094
layout: page
type: text
title: "Ruby on Rails: Out of the Box Improvements"
date: 2007-05-08 21:26:00 -04:00
wordpress_url: urn:uuid:{a.guid}
---
<p>I've written several Rails apps that are in production use, and I love working in Ruby on Rails as my daily development platform, but let's face it, it has a bunch of problems.  Just because the Rails team did a lot of things right doesn't mean that there aren't a bunch of things that can be improved right out of the box.  Here are the first couple of things that I would do if I was starting a new Rails Project tomorrow:</p>

<ol>
<li><p>Install <a href="http://haml.hamptoncatlin.com/">HAML</a>.  I can't stress enough how much better your life will be if you use HAML instead of rhtml.  Imagine DRY templates, less view code, and perfectly formatted XHTML every time.  Imagine the sky opening up and angels coming down and lifting you up to templating heaven (it's next to dog heaven).  That's what HAML gives you.  We've solved the problem of looking at ugly HTML with embedded code a <a href="http://velocity.apache.org/">hundred</a> <a href="http://www.seaside.st/Documentation/GeneratingHTML/">times</a> now, so why do we keep going back to it?  Don't subject yourself to that sort of pain again!  Install HAML and don't look back.</p></li>
<li><p>Dump the integrated testing framework and install <a href="http://rspec.rubyforge.org/">RSpec</a>.  It's great that Rails has a testing framework integrated with it, but it has a number of problems.  It confuses well known testing terms such as functional tests, there's no way to test views separately from controllers, etc.  RSpec blows it away.  Not only does it give you all of the advantages of doing <a href="http://behaviour-driven.org/">Behavior Driven Development</a>, it fixes the a bunch of the inherent problems with the Rails testing framework.  No longer are controller tests called functional tests and model tests called unit tests.  Now you just have model and controller specs.  It also allows you to group your use of fixtures into different contexts for for different sets of tests, although you shouldn't really have to use fixtures much anymore because of RSpec's great built in mocking support.  Overall it's a big step up from the built-in testing framework.</p></li>
</ol>

<p>Just doing those two things will make your development faster by making your code easier to understand and by cleaning up a lot of the rough edges of the Rails framework. At this point I can't imagine going back to the standard Rails way of doing things.</p>

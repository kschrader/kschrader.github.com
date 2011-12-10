--- 
wordpress_id: 1165
layout: post
title: "Cells: Bringing Components Back Into Rails"
date: 2008-02-13 03:37:00 -05:00
wordpress_url: urn:uuid:{a.guid}
---
<p>Whenever I get I get tired of dealing with all of the disconnected layers of Rails, I think about how I should really write a decent component architecture that works well on top of it.  Luckily, someone has already done it for me.  </p>

<p><img src="http://cells.rubyforge.org/RailsCells_files/cells_logo.jpg" alt="Cells"/></p>

<p>From the <a href="http://cells.rubyforge.org/">Cells homepage</a>:</p>

<blockquote>
    <p>Cells brings the benefits of component-oriented development to the Ruby on Rails web application platform, without the performance problems that had been associated with Rails' own, deprecated, component subsystem.</p>
</blockquote>

<p>Each Cell is like a little lightweight controller (with associated views) that you can embed anywhere in your app.  I've been playing with it tonight, and while it's not on the level of say, <a href="http://www.seaside.st/">Seaside</a>, it seems like a fairly good baseline for building a more component oriented system for your apps.</p>

<p>I know from a <a href="http://groups.google.com/group/ruby-component-web-frameworks/">mailing list</a> that I'm on that some people are kicking around taking this and building a stateful component framework with real object binding underneath. That would really take Ruby web frameworks to the next level. (And be a ton of work to get right, I'm sure. :-) )</p>

<p>Hopefully that project will get started soon.  I'm extremely interested in watching and helping it develop.</p>

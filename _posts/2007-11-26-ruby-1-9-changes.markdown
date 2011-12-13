--- 
wordpress_id: 1152
layout: page
type: text
title: Ruby 1.9 Changes
date: 2007-11-26  
wordpress_url: urn:uuid:{a.guid}
---
<p>I was playing with Ruby 1.9 a bit over the holiday weekend and I found the <a href="http://eigenclass.org/hiki.rb?Changes+in+Ruby+1.9">eigenclass Changes in Ruby 1.9</a> page to be an invaluable reference to the changes we'll all be dealing with soon.</p>

<p>Some highlights:</p>

<ul>
<li>Ruby 1.9 is significantly faster than Ruby 1.8.6, at least  for the toy programs that I wrote with it.</li>
<li><code>send()</code> no longer works to send to private methods.  You need to use <code>send!()</code> instead.</li>
<li><p>Symbol #to_proc now allows you to do </p>

<p><code>%w[a b c].map(&amp;:capitalize)  # =&gt;  ["A", "B", "C"]</code></p></li>
</ul>

<p>Check out the link above for more.  It looks like December is going to be a fun month for Rubyists.</p>

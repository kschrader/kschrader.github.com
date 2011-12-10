--- 
wordpress_id: 1194
layout: post
title: GitHub Takes the Pain Out Of Sharing Your Code
date: 2008-12-11 01:07:00 -05:00
wordpress_url: urn:uuid:{a.guid}
---
<p>A long time ago, I did a more than a little bit of <a href="http://people.apache.org/~kschrader/">open source work</a>. Unfortunately, I always found the process of being a part of an open source project to be a pain.</p>

<p>The process usually went something like this:</p>

<ul>
<li>Fix a bug in the code.</li>
<li>Post patches to the dev list.</li>
<li>Bug people to get your patches accepted and committed.</li>
<li>By the time they are accepted, someone else has committed something that breaks them.</li>
<li>Wash, rinse, repeat</li>
</ul>

<p>Once you do this enough times, you get commit rights and you don't have to deal with the process anymore.</p>

<p>I've never enjoyed it. Far too much overhead and bullshit.<sup><a href="#fn1-2008-12-11">1</a></sup></p>

<p>So for the last (more than a) couple of years I've taken to forking code when I needed to and then never bothering to give the patches that I wrote back to the maintainers.</p>

<p>Clearly not the best situation, but it worked for me.</p>

<p><a href="http://www.github.com">GitHub</a> changes all of that.</p>

<p>On GitHub, I can fork anyone's code, patch it, push my changes back, send a pull request, and then not worry about it.  </p>

<p>I can share my code with no overhead.</p>

<p>Example: I fixed a bug in the <a href="http://github.com/kschrader/merb_cucumber/tree/master">merb cucumber bindings</a> last week. I pushed my changes to GitHub and sent a pull request to the maintainer. My changes haven't been pulled into the main tree yet, but I don't really care.</p>

<p>One look at the <a href="http://github.com/david/merb_cucumber/network">GitHub merb cucumber network graph</a> should show any prospective users of the library that development has happened on my tree beyond that of the original tree.  Hopefully they'll take the time to look at it and use the most up-to-date code.</p>

<p>Either way, I don't have to worry about it anymore.</p>

<p>Also, I love that <a href="http://www.github.com">GitHub</a> lets me share my half finished projects. </p>

<p>I recently posted a partially done <a href="http://github.com/kschrader/gutenberg/tree/master">Merb based blog called Gutenberg</a> on GitHub.</p>

<p>Will I ever finish it?  Who knows. </p>

<p>At the very least it's a simple Merb example project for people to learn from, and I already know people who have looked at it to learn more about how Merb works. That already makes it worthwhile to me.</p>

<p>Again, no overhead. </p>

<p>Just push code onto GitHub and it's live to the world. </p>

<p>No pain. No overhead. Just code.</p>

<hr/>

<ol>
<li id="fn1-2008-12-11">
As an aside, I really like commit policies like <a href="http://rubini.us/contribute/">one that Rubinius has</a>, namely, "anyone who submits a patch for some part of the Rubinius project and has the patch accepted will be given commit rights to the mainline repository." We need more projects with commit policies like that.
</li>
</ol>

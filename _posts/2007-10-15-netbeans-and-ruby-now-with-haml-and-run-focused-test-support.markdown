--- 
wordpress_id: 1146
layout: page
type: text
title: Ruby NetBeans, Now With Haml and Better Rspec Support
date: 2007-10-15  
wordpress_url: urn:uuid:{a.guid}
---
<p>Ever since I started writing Ruby code I've used Textmate as my editor.  Recently, however, I've found myself using Netbeans more and more, to the point where I usually have Netbeans and Textmate open next to one another.  Netbeans' refactoring support, ability to jump to method definitions, and ability to autocomplete code is just too good to ignore.</p>

<p>However, a couple of features have kept me from switching to Netbeans full time, namely its lack of Haml support and the fact that it couldn't run a focused Rspec example.</p>

<p>Well lo and behold, I just checked the <a href="http://wiki.netbeans.org/wiki/view/RubyRecentChanges">Netbeans Ruby Recent Changes page</a> and found the following:</p>

<ul>
<li>October 12
<ul>
<li>Lots of bug fixes</li>
<li>RSpec module (not part of 6.0 but available in the continuous builds on deadlock)
<ul>
<li>TextMate RSpec snippets</li>
<li>"Run Focused Test" action which runs test under the caret. Locate the action in the Keybinding options (see the "Other" category) and bind to something convenient.</li>
<li>"Debug Focused Test", which starts the debugger on the test under the caret. </li>
</ul></li>
<li>Preliminary support for HAML and SASS - see announcement </li>
</ul></li>
</ul>

<p>They solved both of my issues on the same day!</p>

<p>I did have to install the Haml plugin from <a href="http://mediacast.sun.com/details.jsp?id=3759">here</a>, but it looks like I no longer have a compelling reason not to switch to NetBeans fulltime.</p>

<p>And the obligatory screenshot:</p>

<p><img src="http://farm3.static.flickr.com/2192/1578264725_7c53b1026e.jpg" alt="Haml in NetBeans" title="Haml in NetBeans"/></p>

<p>Awesome!</p>

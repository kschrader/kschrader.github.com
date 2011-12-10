--- 
wordpress_id: 1162
layout: post
title: Rails App Without Tests = Guaranteed Fail
date: 2008-02-07 01:15:00 -05:00
wordpress_url: urn:uuid:{a.guid}
---
<p>My friend Jay <a href="http://blog.jayfields.com/2008/02/ruby-did-tdd-make-ruby-viable-option.html">wrote a few days</a> ago:</p>

<blockquote>
    <p>I bet of you looked at the majority of Rails applications you would find empty test folders (or only the generated tests, which are never run). I'm quite sure that's true because I expect the conferences to attract the best of the Ruby developers, and several of the people I talk to at those conferences "simply don't have time" to write tests.</p>
</blockquote>

<p>These people are idiots.  Either that, or they don't have any sort of complexity in their apps and they're writing them in a far too simplistic and elementary way.</p>

<p>Quite often, doing a little meta-programming magic in Ruby can make you massively more productive and, in my experience, the only way to find the side effects of doing a lot of meta-programming is to have a comprehensive test suite. As this magic-level in your app increases, <a href="http://kurt.karmalab.org/articles/2008/01/22/kurts-law-of-ruby-complexity">the number of side-effects of that magic will also inevitably increase</a>. </p>

<p>Eventually, you <em>will</em> get burned by something if you're not ready for it.</p>

<p>Tests are your flame-proof suit in this case.  They're not going to protect you against everything, but most of the time they do a damn good job of keeping you alive.</p>

<p>DHH <a href="http://www.37signals.com/svn/posts/838-ask-37signals-how-do-you-document-code">wrote the other day</a>:</p>

<blockquote>
    <p>We try to do a fairly good job at keeping our test suites current and exhaustive as well. Basecamp has a 1:1.2 ratio of test code (thanks to the persistence of Jamis!), Highrise has a ratio of 1:0.8 (bad me!).</p>
</blockquote>

<p>At <a href="http://www.collaborativedrug.com">CDD</a>, our current code to test ratio is 1:4.2.</p>

<p>Overtested? Undoubtedly.  </p>

<p>However,  we don't want to ever have to go in and fix the damage after someone tries to import 1,000,000 molecules to our system and something goes wrong. The repair work can take days in some cases, so we err on the side of caution.</p>

<p>I'll wrap this up with the following three easy points:</p>

<ol>
<li>If you're writing a Rails app, write tests for it.</li>
<li>If someone who works for you "simply doesn't have the time" to write tests, fire them.</li>
<li>If a consultant tries to give a Rails app without a test suite, fire them (and don't pay them, if at all possible, what they've given you is pretty much worthless, and is going to be a nightmare to maintain).</li>
</ol>

--- 
wordpress_id: 1150
layout: page
type: text
title: Using Selenium for Navigation and Hpricot for Validation in your Webapp
date: 2007-11-21  
wordpress_url: urn:uuid:{a.guid}
---
<p>Selenium is a great tool.  We have a bunch of Selenium tests that run with every one of our builds.  Unfortunately, they contain a bunch of XPath in them to verify elements, and the XPath engine in IE6, to put things lightly, is a piece of garbage.  It takes a huge amount of time to verify an element in a page.</p>

<p>As an example, here is the amount of time that our Selenium test run used to take on Firefox:</p>

<blockquote>
    <p><code>Finished in 506.108548 seconds</code></p>
</blockquote>

<p>And here's how long it took on IE:</p>

<blockquote>
    <p><code>Finished in 4567.47592 seconds</code></p>
</blockquote>

<p>That's 1 hour and 16 minutes to the same set of tests that it takes less than 9 minutes to run in Firefox.  Clearly this is unacceptable, and, from watching the tests run, it's clear that the IE XPath engine is to blame.</p>

<p>We decided to attack this problem by using Hpricot to verify the elements in a page instead of the built in XPath engine.  This allows us to use Selenium for navigation between pages in our site and Hpricot to do the verification.</p>

<p>It's simple enough to grab the HTML from the page at any point during a Selenium test by using</p>

<blockquote>
    <p><code>@browser.get_html_source</code></p>
</blockquote>

<p>(as long as you're using Ruby Selenium Driver) and then you can do all of the verification that you want on it, in far less time.  Plus, the number of changes that you have to make to your Specs/Tests are minimal.  As an example,</p>

<blockquote>
    <p><code>readouts_table = table('id=readouts')
         readouts_table.cell(0,0).should contain_text("Molecule")</code></p>
</blockquote>

<p>in our old code became</p>

<blockquote>
    <p><code>doc = Hpricot(@browser.get_html_source)
      readouts_table = doc/"//table[@id='readouts']"
      readouts_table/"thead/tr[1]".should == "Molecule"</code>   </p>
</blockquote>

<p>in our updated code.  </p>

<p>As always though, the proof is in the pudding.  I've updated 2 out of 19 of our specs, and our time on Firefox has dropped to:</p>

<blockquote>
    <p><code>Finished in 488.753052 seconds</code></p>
</blockquote>

<p>But more importantly, out IE run time is now:</p>

<blockquote>
    <p><code>Finished in 3171.07507 seconds</code></p>
</blockquote>

<p>That's a 24 minute difference already and we can already fit in a couple of extra CI builds a day because of that.</p>

<p>We're planning on adopting this strategy for all of our Selenium tests moving forward.  Selenium will be used only for navigation, and Hpricot will be used for verifying the page content.  I strongly suggest that you consider it instead of using the built in verification.</p>

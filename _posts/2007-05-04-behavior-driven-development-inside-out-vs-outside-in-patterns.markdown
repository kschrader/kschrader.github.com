--- 
wordpress_id: 1070
layout: page
type: text
title: "Behavior Driven Development: Inside-Out vs Outside-In Pattern"
date: 2007-05-04  
wordpress_url: urn:uuid:{a.guid}
---
<p>Recently at work we've been having a bit of an argument over the proper way to structure a spec while doing Behavior Driven Development.</p>

<p>I'm going to illustrate a couple of patterns that have emerged using the simple example of a sword that should tell you if it is sharp or not, depending on whether it is new or used.</p>

<p>One camp at my <a href="http://www.collaborativedrug.com">current job</a>, likes to use what I'm calling the Inside-Out Pattern for writing specs.  This group likes to start with the method name and then define behavior for it.  An example of this is shown here (in <a href="http://rspec.rubyforge.org/">RSpec</a> syntax):</p>

<div class="CodeRay"><pre><span class="CodeRay">describe <span class="s"><span class="dl">&quot;</span><span class="k">sharp?</span><span class="dl">&quot;</span></span> <span class="r">do</span>
  it <span class="s"><span class="dl">&quot;</span><span class="k">should tell you if it is sharp or not</span><span class="dl">&quot;</span></span> <span class="r">do</span>
    <span class="co">Sword</span>.new(<span class="sy">:status</span> =&gt; <span class="s"><span class="dl">'</span><span class="k">new</span><span class="dl">'</span></span>).sharp?.should == <span class="pc">true</span>
    <span class="co">Sword</span>.new(<span class="sy">:status</span> =&gt; <span class="s"><span class="dl">'</span><span class="k">used</span><span class="dl">'</span></span>).sharp?.should == <span class="pc">false</span>
  <span class="r">end</span>
<span class="r">end</span>  </span></pre></div>

<p>Their argument for this pattern is that all of the code for that method stays in one place, so it's easy to see if you've covered everything in that method.</p>

<p>The argument against this is that your specs are harder to understand and you can't really do real TDD with this method of development.</p>

<p>The other camp likes to use what I'm calling the Outside-In Pattern. This pattern describes the possible states of the object first, and then describes what the object should do in each state:</p>

<div class="CodeRay"><pre><span class="CodeRay">describe <span class="s"><span class="dl">&quot;</span><span class="k">A new sword</span><span class="dl">&quot;</span></span> <span class="r">do</span>
  before(<span class="sy">:each</span>) <span class="r">do</span>
    <span class="iv">@sword</span> = <span class="co">Sword</span>.new(<span class="sy">:status</span> =&gt; <span class="s"><span class="dl">'</span><span class="k">new</span><span class="dl">'</span></span>)
  <span class="r">end</span>

  it <span class="s"><span class="dl">&quot;</span><span class="k">should tell us that it is sharp</span><span class="dl">&quot;</span></span> <span class="r">do</span>
    <span class="iv">@sword</span>.sharp?.should == <span class="pc">true</span>
  <span class="r">end</span>
<span class="r">end</span>

describe <span class="s"><span class="dl">&quot;</span><span class="k">A used sword</span><span class="dl">&quot;</span></span> <span class="r">do</span>
  before(<span class="sy">:each</span>) <span class="r">do</span>
    <span class="iv">@sword</span> = <span class="co">Sword</span>.new(<span class="sy">:status</span> =&gt; <span class="s"><span class="dl">'</span><span class="k">used</span><span class="dl">'</span></span>)
  <span class="r">end</span>

  it <span class="s"><span class="dl">&quot;</span><span class="k">should tell us that it is not sharp</span><span class="dl">&quot;</span></span> <span class="r">do</span>
    <span class="iv">@sword</span>.sharp?.should == <span class="pc">false</span>
  <span class="r">end</span>
<span class="r">end</span></span></pre></div>

<p>The argument for this pattern is that it is more descriptive of what the object should do and it helps with TDD.</p>

<p>The argument this is that you get too many descriptions in your spec, and they can get hard to read.  Also, the behavior for a single method in a class is spread around the multiple descriptions, so it becomes harder to make sure that all of the behavior of your method is covered.</p>

<p>Most of the specs that we've written so far seem to skew towards one or the other of these options, but there's no consensus on which of them is better yet, so I figured I'd throw it out there and see if anyone has experience one way or the other and which one has worked better.</p>

<p>Please let me know in the comments.</p>

<p>(And yes, before anyone asks, I'm firmly in one of the camps, and yes, I purposely didn't reveal which one here.  I'll be talking more about it in a later post.)</p>

<p><strong>Update:</strong> My coworker Dustin <a href="http://www.codebehind.org/2007/5/4/introducing-change">points out</a> another way of doing specs that rests firmly in the middle of these two views.</p>

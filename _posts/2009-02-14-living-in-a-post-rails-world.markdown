--- 
wordpress_id: 1197
layout: post
title: Living In A Post Rails World
date: 2009-02-14 03:50:00 -05:00
wordpress_url: urn:uuid:{a.guid}
---
<blockquote>
    <p>The hardest thing to see is what is in front of your eyes. -Goethe</p>
</blockquote>

<p>It's been about 6 or 7 months since I've done any Rails work. </p>

<p>I'm in a post-Rails world.</p>

<p>After working in Rails for 3 years, I was burnt out. I took some time off to try to learn the finer points of marketing and running a business, and then attempted to start a new business just before the market cratered. Not a great idea.</p>

<p>Now I'm back writing code all day and it's great. My days now consist of coming up with test cases to solve problems and then solving them. </p>

<p>Something is different though. </p>

<p>I used to write a ton of test cases in the context of my Rails apps.</p>

<p>Now I write high level test cases and then write code and pick and choose technologies to solve them.</p>

<p>I feel like this is a natural progression for those of us that practice TDD. </p>

<p>Take one more step back, use something at an even higher level to write tests (I'm using some Cucumber and some rSpec), and then implement a bunch of little apps to make what you want to happen, happen.</p>

<p>It keeps things simple, and keeps the problem from growing too large.</p>

<p>In my current project I've got a cluster of Nanite agents up and running with a couple of Merb apps talking to them on the front end. It's something that I never could have done if I was trapped inside of the Rails box.</p>

<p>Hell, it's probably something that I never even would have thought of.</p>

<p>I think that the Ruby world is eventually going to end up in a model like this, writing small simple apps that all talk to each other, and can be replaced or upgraded at any time.</p>

<p>By writing a lot of tiny apps, I've been able to solve problems now in days that used to take weeks or months.</p>

<p>Plus I'm not getting locked in to anything. If I want to replace my Merb app with a Sinatra app next month, it's not a huge project. If I want to swap in some code running on the Maglev Alpha that I'm playing with or deploy some components written in Clojure, I can do that too, without being intimately tied to anything.</p>

<p>All of my hard/long running logic is well tested, encapsulated, and most likely running in little agents on the wire.</p>

<p>I guess what I'm saying is that if you've been writing Rails code for a long time, perhaps now is a good time to step outside of the rules that Rails imposes upon you and look at things from a different angle.</p>

<p>You might find it refreshing and helpful.</p>

<p>I certainly did.</p>

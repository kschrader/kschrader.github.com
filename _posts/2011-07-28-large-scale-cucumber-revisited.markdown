--- 
wordpress_id: 1292
layout: post
title: Large-Scale Cucumber Revisited
date: 2011-07-28 00:54:30 -04:00
wordpress_url: http://kurt.karmalab.org/?p=1292
---
At Intent Media we've been using <a href="http://cukes.info/">Cucumber</a> for 2.5 years to drive a large portion of our testing (on top of RSpec and JUnit). We're finally getting around to upgrading to the newest version (from version 0.4.4, which is, to put it lightly, a bit rusty), so I'm going to throw out some anecdotes about our experiences using it, which will hopefully help others avoid some of the problems we've had.

First a few facts about our test suite:
<ul>
	<li>We currently have over 15000 Cucumber steps that run for each build (we use TeamCity for CI, which counts the number of steps, not the number of scenarios, which is kind of annoying, to tell you the truth)</li>
	<li>We distribute our build over 3 machines using tags instead of a custom tool. Every scenario that goes in gets tagged with @agent1, @agent2, or @agent3 to indicate which build machine to run on. Hacky? Yes. Implemented in a couple of days with no problems? Also yes.</li>
	<li>It currently takes over an hour to run a complete integration build. This is too long, and we'll probably distribute the build out to more agents soon.</li>
</ul>
Some lessons learned:
<ul>
	<li>One of our original goals was to get our Product Managers involved in writing and vetting test cases. That didn't happen with us, and I now think that it would be very hard to get it to happen anywhere. Even though we have very well written stories with an annotated list of deliverables, the mental hurdle of going from the the story, to finding the scenarios related to it, to verifying them all just seems too high. Our PMs just want to grab the newest builds, go through whatever mental model they have to test the feature, and then move onto the next thing. Perhaps if we had made it part of the process from the very beginning to somehow tie the scenarios back to the stories, then this might have worked, but I think we missed our opportunity here.</li>
	<li>Following on from above, you should figure out a way to tie your scenarios back to the their related stories. One of the first things that our new QA person did was to push the team to always add a comment to completed stories with the names of the related scenarios. This saves her the time that it would take to figure out what's relavent to testing each story. If you're not doing this in some way, you should be.</li>
	<li>We made a decision early on to test everything from the outside in (no fixtured data, etc). At first this worked really well for us, because it gave us a lot of confidence that all of our screens were extremely well tested. Unfortunately, it now adds a ton of time to our test runs by running through the same set of screens hundreds of times. We've started discussions about how to fixture in this data after some of the steps have run to completion, but we still need to get around to making it happen. (As an example, a step like 'And I create a new admin user with email address "example@example.com"' could hypothetically run for every scenario in the system.) Doing it all through the UI is just a time sink at this point. What we'd like to do is run the step through the UI once, and then set a flag and fixture in the data after that.</li>
	<li>If you are making large scale use of Cucumber and you aren't using IntelliJ/Rubymine then you should be. Its Cucumber support is top notch, and will make your life significantly easier.</li>
	<li>All of that said, Cucumber has been vital in allowing us to release on a daily basis. Unlike some other startups, if we screw up a release we start losing a large amount of money pretty much immediately. We have an automated deploy process, but the cucumber suite has given us the confidence to know that anytime we push our newest green build everything is going to work.</li>
</ul>
So there you go, a few things off of the top of my head. If you have any other good anecdotes about Cucumber please add them in the comments, I'd be interested in seeing what other problems people have run into.

For more random development anecdotes, you should follow me on Twitter <a href="http://twitter.com/kurt">here</a>.

--- 
wordpress_id: 1228
layout: page
type: text
title: Driving Large Scale, Multi-Language Development With Cucumber
date: 2010-01-06
wordpress_url: http://kurt.karmalab.org/?p=1228
---
I've been working at <a href="http://www.intentmedia.com">Intent Media</a> for a while now and I'm just getting some time to come up for air to talk about what we've been doing while building our software platform.

This will be the first in a series of articles about what I've learned over the last year.

For a little background, our engineering team is currently 9 people strong (in a 20 person company). When I joined the company to help build the team, there wasn't a line of code written and I was the only technical member of the staff.

Over the last 9 months we've built what I consider one of the finest pieces of software that I've ever worked on. It's scalable, it uses the right languages for the right jobs, and it does exactly what it needs to do.

It's also remarkably bug free.

I credit a large part of that (on the tools and good decisions side, that is; I credit most of it to our team) to <a href="http://cukes.info/">Cucumber</a>.

One of the first decisions we made (after writing a unit test and our first bit of code) was to write our first Cucumber test. One of the things that I learned while working at <a href="http://www.collaborativedrug.com/">Collaborative Drug Discovery</a> was the importance of automated functional tests.

I, for one, will never do another project without them.

At Intent Media we use Cucumber to drive <a href="http://celerity.rubyforge.org/">Celerity</a> across our entire software stack. Currently, this consists of 3 Java applications and a Rails application that interact with MySQL and a HDFS data store. Every single time we check in new code we build the entire stack in <a href="http://www.jetbrains.com/teamcity/">TeamCity</a> and run our entire suite of functional tests against it.

As of today, I'm currently greeted with this on our TeamCity server:

<a href="http://kurt.karmalab.org/wp-content/uploads/2010/01/FirefoxScreenSnapz025.jpg"><img class="aligncenter size-full wp-image-1230" title="FirefoxScreenSnapz025" src="http://kurt.karmalab.org/wp-content/uploads/2010/01/FirefoxScreenSnapz025.jpg" alt="Integration Build" width="239" height="63" /></a>

Each of those "Tests passed" is a step in a Cucumber scenario. For example:
<blockquote>Given I login as "admin@intentmedia.com"</blockquote>
Over the last 9 months we've slowly built up a library of steps that encapsulate everything that we need to do with our apps so far. We've also found that we've gotten a huge amount of reuse out of our existing steps as we've grown the app. So far, there haven't been any scenarios that we couldn't tackle in an automated manner.

This suite of tests gives us the best safety net I've ever had on a project to try large refactorings. In fact, we often do refactorings across the data model that affect several pieces of software in the stack, often in unexpected ways. Cucumber (along with our unit tests) lets us immediately surface any problems in both our applications themselves and the communication between the apps.

If you haven't checked out <a href="http://cukes.info/">Cucumber</a> yet, you owe it to yourself to do so. It's one of those life-changing pieces of software that's amazingly simple to get started with, but quickly becomes one of the most important tools in your toolbox.

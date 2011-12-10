--- 
wordpress_id: 1143
layout: page
type: text
title: Tiresome, Tedious Bullshit (on Rails)
date: 2007-07-25 01:29:00 -04:00
wordpress_url: urn:uuid:{a.guid}
---
<p>In his post <a href="http://gilesbowkett.blogspot.com/2007/07/business-advantage-of-rails.html">The Business Advantage of Rails</a>, Giles Bowkett writes:</p>

<blockquote>
    <p>What makes programmers happy? Elegant systems which make them productive and take tiresome, tedious bullshit out of their daily lives. </p>

    <p>People who get tiresome, tedious bullshit out of their way forever are great people to work with. Conversely, tolerating tiresome, tedious bullshit without ever fixing it is absolutely not a character trait you want your hiring process to be biased in favor of.</p>
</blockquote>

<p>which sounds like a good idea, except that a lot of programming on a real application, no matter if you do it in Ruby, or Visual C, or COBOL, ends up being a lot of tiresome, tedious bullshit.  </p>

<p>Which brings me to something that I've been thinking a lot about lately.  At <a href="http://www.collaborativedrug.com">CDD</a> we have a pretty complex Rails app, (as one of the consultants that we're working with said, "I've worked on a dozen Rails apps, and this is about 4 times bigger and more complex than any of them") and as our application gets bigger and bigger I'm starting to see more and more complexity and problems crop up.  I feel like we're walking up the same old curve to all of the standard problems you run into when programming a webapp in any language (object model too big to be easily understood, code is getting less and less cohesive, etc).  It may have taken a little longer to get there, but I'm pretty sure that we're going to end up in the same place.</p>

<p>Which leads me to another problem.  The easiest solution to a lot of these problems, in my experience, has always been to refactor the code.  That's what I always ended up doing with Java apps of this size back in the day.  Unfortunantly, the state of Ruby refactoring tools, and I'm putting this as nicely as I possibly can, sucks.  Even something as simple renaming a class tends to be far more painful than it needs to be.</p>

<p>So the big question now is, have we (and perhaps we're the first team to do this, as I haven't heard much about it from others) finally hit the point where the cost of maintaining our code in Ruby is higher than the savings by writing it in Ruby in the first place?  I'm not willing to answer yes to that question yet, but I am starting to see more and more places that have me pining for for the good old days of IntelliJ, with all of the great things it does to make your life easier.  It's easy to forget about the amount of tiresome, tedious bullshit that great tools can help us avoid, at least until you start running into that same old bullshit.</p>

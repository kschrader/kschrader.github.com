--- 
wordpress_id: 1184
layout: page
type: text
title: Django Testing Framework == Fail
date: 2008-06-27 12:20:00 -04:00
wordpress_url: urn:uuid:{a.guid}
---
<p>I was reading on a plane recently, and was about halfway through the <a href="http://www.amazon.com/Definitive-Guide-Django-Development-Right/dp/1590597257/ref=pd_bbs_sr_1?ie=UTF8&amp;s=books&amp;qid=1214594704&amp;sr=8-1">Django book</a>, when I realized that I hadn't seen anything about how to test my application yet. I tend to be a <a href="http://kurt.karmalab.org/articles/2008/02/07/rails-app-without-tests-guaranteed-fail">test first developer</a> and use lots of mocks to play with things, especially at the beginning of a project, so I flipped to the index, turned to the test page, and saw the following:</p>

<blockquote>
    <p>Testing was still under development when this book was being written, so to learn more you’ll need to read the documentation online at http://www.djangoproject.com/documentation/0.96/testing/</p>
</blockquote>

<p>Not a whole lot of help when you're on a plane.</p>

<p>Still, I was willing to give them the benefit of the doubt.  Maybe they could create a bolt-on testing framework that would really be something.  </p>

<p>Unfortunately, it's just <a href="http://www.djangoproject.com/documentation/testing/">not very good</a>.</p>

<p>Perhaps I'm spoiled by Rails and Rspec, but to me, the Django testing framework feels like something that they put in place just because someone told them that they needed a testing framework. It's not an integral part of the system.</p>

<p>Let's look at their test types.  </p>

<p>First of all we have doctests.  These emulate the output of the Python interactive interpreter exactly inside of your test code.  All this does is to encourage the bad practice of writing some code, firing up your your interpreter, running a few cases, and then cutting and pasting the results into a file.  There's no need to think through all of the cases or what you're really doing here.  It's just an after the fact, feel-good, safety check.</p>

<p>Second, we have Unit tests.  Not the most sophisticated testing framework in the world, but these look like a better choice, very much like any sort of xUnit tests.</p>

<p>The biggest problem I have with these, and the Django testing framework in general, is that the tests don't look to be compulsory. Why, in this day and age, don't we make the generation of a test automatic, and make the user decide to remove it if they really, really don't want to test, not the other way around?</p>

<p>Testing as an afterthought inevitably leads to poorly tested code. </p>

<p>I certainly hope that, as Django continues to grow and mature, testing take a more central role in the future.</p>

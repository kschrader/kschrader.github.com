--- 
layout: page
type: text
title: Building a Data Science Team at a Startup - An Engineering Perspective
date: 2012-01-30
---
A few random observations from spending the last few years building a data science team at a startup, from the perspective of an engineering manager:

## You have no idea what your data science team is going to do. 

You're just going to know that you have some data and some problems, and that you don't really know how to solve them. Of course, that leads into:

## The way that you're thinking about the problem is probably wrong. 

Your data scientists are going to need to come in and really blow you away. In the canonical ["building data science teams"](http://radar.oreilly.com/2011/09/building-data-science-teams.html) article by DJ Patil he talks about giving people 90 days from when they come in the door to "knock the socks off" of the company. I think that's a good benchmark. If a data scientist hasn't made you think about your data or your problems in a new way by then they probably aren't ever going to.

## A data science team needs a different sort of support structure than a normal engineering team. 

A data science team seems to end up having people from a much more diverse set of backgrounds than a normal engineering team does, and because of that you're going to need to figure out how to fit the data science team into your organization. One thing that we've eventually come around to is to throw our normal engineering practices out of the window and to start working towards having the data science team work with whatever tools they need in order to move as quickly as possible in their own way.

## You're going to need to figure out how to get stuff into production. 

Data scientists are going to end up building things that need to be translated into production code, usually to save resources ("in order to generate this model, I need 20 machines for a week, and it needs to be done every day"). One thing that we're working on is building out the interface between engineering team and our data team in order to make it more and more seamless. Hopefully soon we'll be constantly rotating an engineer (or several engineers) on the data team in order to help do this.

## Having data scientists around will make you better at thinking about your problem set

Data scientists tend to come from a number of different backgrounds (math, statistics, music, etc) that you don't normally have on an engineering team. Supporting them and interacting with them on a daily basis forces you to think about things differently and should help you build things in a more sensible way to target a larger audience within the company.

## Everyone in the company is going to want to understand what (and how) the data science team is doing

Just like we've worked over the years to keep technical business people focused on the "what" of what we need to build, you need to work on keeping every one without a math background away from the data science team. Trying to explain some of the hard math that's going on to the entire company isn't a productive use of time.

## The toolset that exists for jumpstarting a data science team is still immature

The tools for doing big data analysis are still pretty immature and difficult to set up. There are many companies working to solve this problem right now (although most of them focusing on big companies, not startups) but it's a bit overwhelming figuring out where to even get started with some of this stuff.
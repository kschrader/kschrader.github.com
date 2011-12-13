--- 
wordpress_id: 1192
layout: page
type: text
title: Datamapper (or Just Say No to Active Record)
date: 2008-10-09  
wordpress_url: urn:uuid:{a.guid}
---
I was having a conversation with a friend the other day who said something along the lines of "lately at work, we've pretty much just been rewriting Active Record to make it not suck as much".

I was thinking about it, and I've never really heard anyone say anything good about Active Record.  It's slow, it uses a ton of memory, it's not thread-safe, etc.

Luckily, the community is starting to tackle those problems with a couple of new projects aimed at doing a better job of OR mapping.

The one that I've used the most, and that we're building the software for my new company on, is <a href="http://datamapper.org/">Datamapper</a>.

The development philosophy behind Datamapper tries to keep everything as fast and as lightweight as possible.  It does this by being as lazy as possible in what it loads to keep memory usage down, and by breaking out as much functionality as possible into plugins, so that you only need to include what you're really using in your application.

In my stress tests here using my new application, I've seen significant speed increases across the board compared to ActiveRecord. (I'm writing a Merb app, and it's relatively easy to switch back and forth between the two of them at this early stage in development.)

Datamapper also has most of the <a href="http://datamapper.org/docs/dm_more/index.html">major ActiveRecord plugins</a> ported to it (as well as a CouchDB adaptor that we're using for some of our models).

If you're starting a new Ruby web application, I strongly suggest checking it out instead of just settling for the default choice of Active Record.

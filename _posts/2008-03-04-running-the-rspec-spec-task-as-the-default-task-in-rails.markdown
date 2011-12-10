--- 
wordpress_id: 1170
layout: post
title: Running the Rspec spec task as the default task in Rails
date: 2008-03-04 15:54:00 -05:00
wordpress_url: urn:uuid:{a.guid}
---
<p>Whenever I start a new Rails project, one of the first things I do is install Rspec and delete the Rails default test directory.  Even with that directory missing, however, Rails continues to waste my time by trying to run its various testing tasks.</p>

<p>To make it stop, just add the following:</p>

<pre>Rake::Task[:default].prerequisites.clear
task :default => :spec</pre>

<p>to the bottom of the Rakefile in the root application directory. </p>

<p>Obviously, if you want to have a default task other than spec, just change the right side of the second line to whatever task you want it to run.</p>

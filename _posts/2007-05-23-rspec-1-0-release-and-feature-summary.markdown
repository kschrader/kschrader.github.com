--- 
wordpress_id: 1141
layout: page
type: text
title: RSpec 1.0 Release and Feature Summary
date: 2007-05-23  
wordpress_url: urn:uuid:{a.guid}
---
<p><a href="http://rspec.rubyforge.org/">RSpec 1.0</a> was quietly released last weekend, after a flurry of activity from <a href="http://blog.aslakhellesoy.com/">Aslak</a> and <a href="http://blog.davidchelimsky.net/">David</a>, who were hiding at a little table last Saturday during Railsconf finishing it up.  Since it didn't get the blogosphere loving that I thought it should have, here are some of the important changes: </p>

<ul>
<li>The API is now considered stable, which is huge news for those of us that have been suffering through upgrades for a while now.</li>
<li><p>You can now include examples that are not implemented by not providing a block to the example.  These examples then show up in yellow in your spec report.  For instance:</p>

<blockquote>
    <p><code>it 'should tell us it is sharp'</code></p>
</blockquote>

<p>will produce:</p>

<blockquote>
    <p><img src="http://farm1.static.flickr.com/213/511783724_ec134c62ea_o.gif" alt="Spec image" title="Spec image"/></p>
</blockquote>

<p>when run.  Much handier than a TODO comment, right?  It allows you to do a lot of thinking about how your object should act beforehand, and then implement it piece by piece.</p></li>
<li><p>A <code>spec:rcov</code> task was added to the Rails rake tasks that will automatically produce a code coverage report from your specs.</p></li>
<li><p>Numerous other bug fixes and small changes.  See the changelog <a href="http://rspec.rubyforge.org/changes.html">here</a>.</p></li>
</ul>

<p>If you haven't checked out RSpec yet, you don't have any more excuses not to.  You can <a href="http://rspec.rubyforge.org/documentation/rails/install.html">install it into your Rails app right now</a> and start writing specs without changing anything else.  You can even throw it away and go back to the normal Rails testing framework anytime that you want to, although I doubt that you will.</p>

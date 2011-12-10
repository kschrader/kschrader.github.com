--- 
wordpress_id: 1155
layout: page
type: text
title: Automatically Measuring Your Code Coverage Using Selenium (or Watir) and Rcov
date: 2008-01-16 17:24:00 -05:00
wordpress_url: urn:uuid:{a.guid}
---
<p>My coworker Krishna, inspired by Giles Bowkett's post <a href="http://gilesbowkett.blogspot.com/2007/10/use-rcov-with-selenium-watir-or-just-in.html">Rails Debugger: Use RCov With Selenium, Watir, Or Just In Real Life</a>, whipped up a little rake task that automates the process of checking code coverage using your Selenium tests:</p>

<pre>
desc "Measure coverage of selenium specs"
task :coverage do
  FileUtils.rm_rf "selenium_coverage"
  mongrel_pid = fork { exec("rcov script/server -o selenium_coverage --rails -- -e test -p 4000") }
  sleep(6) # wait for mongrel to start

  begin # selenium will call "exit 1" if there are failures
    Rake::Task["selenium:spec"].invoke
  rescue SystemExit; end

  Process.kill("INT", mongrel_pid) # triggers generation of rcov report
  Process.wait
  system("open selenium_coverage/index.html") if PLATFORM['darwin']
end
</pre>

<p>While we don't agree that this task, in any way, shape, or form, constitutes a debugger, it has been useful in showing us areas of our code base that our Selenium test cases aren't hitting. </p>

<p>This should work for just about anyone that has a rake task to run their Selenium (or Watir, or other in-browser testing tool) tests. Just replace 'selenium:spec' in the block above with whatever task you use to run your in browser functional tests and have at it.</p>

--- 
wordpress_id: 1175
layout: post
title: Monkey Patching Core Functionality == BAD, BAD, BAD
date: 2008-04-24 18:29:00 -04:00
wordpress_url: urn:uuid:{a.guid}
---
<p>Yesterday, I finally got around to upgrading HAML in our Rails app to the newest stable version and the first thing that happened was that 20 completely unrelated specs broke.</p>

<p>Why, you may ask?</p>

<p>A monkey got into our code, that's why.</p>

<p>You see, Ruby allows you to redefine any method of any class on the fly (monkey patching) and it turns out that the old version of HAML had the following code in it:</p>

<pre>
  unless String.methods.include? 'old_comp'
  class String # :nodoc
    alias_method :old_comp, :<=>

    def <=>(other)
      if other.is_a? NilClass
        -1
      else
        old_comp(other)
      end
    end
  end

  class NilClass # :nodoc:
    include Comparable

    def <=>(other)
      other.nil? ? 0 : 1
    end
  end
end
</pre>

<p>This, in turn, snuck into our codebase in all sorts of little unexpected places.  In one instance a test was comparing sorted Arrays of nils and returning true.  Not good.</p>

<p>Luckily, in all of our cases this ended up being more of an irritant than anything else, but I can easily imagine any number of ways in which relying on the assumed behavior of these methods could have broken our app in any number of subtle and terrible ways.</p>

<p>So I'm only going to say this once:</p>

<p><strong>Don't modify core Ruby functionality in your plugins or Rubygems.</strong> </p>

<p><strong>You will break your users' codebase.</strong></p>

<p><strong>If you do modify core functionality you deserve to be slapped around by those around you.</strong></p>

--- 
wordpress_id: 1176
layout: page
type: text
title: Ruby is a Playground, PHP is a Factory
date: 2008-05-21 13:17:00 -04:00
wordpress_url: urn:uuid:{a.guid}
---
<p>While reading yet another article on why <a href="http://www.codinghorror.com/blog/archives/001119.html">PHP Sucks (today's witty twist, "but It Doesn't Matter")</a> I realized yet another reason that I'm glad to be programming in Ruby.</p>

<p>Ruby, to me, is like a big open playground, while languages like PHP remind me of big industrial factories.  I don't think that any of us would argue that industrial factories are more efficient for most things, but they also suck the creativity and life out of the people working in them. </p>

<p>For instance, why would you ever want to write code like this:</p>

<pre>
class DescribeNewBowlingGame extends PHPSpec_Context
{
    private $_bowling = null;
    public function before()
    {
        $this->_bowling = new Bowling;
    }

    public function itShouldScore0ForGutterGame()
    {
        for ($i=1; $i<=20; $i++) {
            $this->_bowling->hit(0); // someone is really bad at bowling!
        }       $this->spec($this->_bowling->score)->should->equal(0);
    }

}
</pre>

<p>when instead you can write this:</p>

<pre>
describe Bowling do
  before(:each) do
    @bowling = Bowling.new
  end

  it "should score 0 for gutter game" do
    20.times { @bowling.hit(0) }
    @bowling.score.should == 0
  end
end
</pre>

<p>You wouldn't. The first case is, at best, a bastard representation of the second case.</p>

<p>Of course, being out on the playground means that people get hit in the face with a ball once in a while, and everything isn't as neatly laid out for you as it is in a factory, but you also have the option to be creative, and not just do things like everyone else does.</p>

<p>And, sure, the playground is far more full of assholes than the factory, but these assholes are also more creative and entertaining to work with than people who just put widgets in place in a factory. </p>

<p>Plus the playground has that weird kid in the corner who's doing something totally crazy, but that just might be a genius, and if you get enough of these kids together, you're going to produce something that's much cooler and more creative than anything that gets built in a factory.</p>

<p>So you can talk all you want about big boring websites being written in PHP (or Java, etc).</p>

<p>As for me, I'll keep working in a language that encourages people to be creative.</p>

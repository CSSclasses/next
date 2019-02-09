---
layout: post
title: "HTML Boilerplate"
category: html
---

### HTML Boilerplate
There is some basic structure you don't need to spend too much time on that is always there. Let's handle this in a very quick walkthrough (code, line-by-line comments):



{% highlight HTML %}
<!DOCTYPE html>
<!--This is a doctype. Every HTML file should have one.
Basically you only need this one nowadays, as this means HTML5 (what you're learning here)
for modern browsers but old browsers still pick up that your file is some kind of HTML.-->
<html>
<!-- Here the HTML starts, so we put an opening <html> tag here. -->
  <head>
<!-- Inside the <head> we can put some meta information… -->
    <meta charset="UTF-8">
    <title>Our Page Title</title>
<!-- … like charset and title. -->
  </head>
<!-- And we close our <head> element and open the <body>, where the actual content goes. -->
  <body>
    <h1>Hello world!</h1>
  </body>
</html>
<!-- And in the end we close the <body> and <html> tag. -->
{% endhighlight %}

And there we are, this is our first valid HTML file! Here it is again, so you can neatly copy&paste it:



{% highlight HTML %}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Our Page Title</title>
  </head>
  <body>
    <h1>Hello world!</h1>
    <!-- put all the content here! -->
  </body>
</html>
{% endhighlight %}

Are you looking for a place to put your CSS? Don't rush, we will come to that. At the moment, we are looking at HTML only. If you know what you are doing, you can skip over to the <a href="#start-with-inline-styles">CSS</a> part.

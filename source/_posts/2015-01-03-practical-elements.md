---
layout: post
title: "(Practical) Elements"
category: html
---

#### Headings (h1-h6)

There is a hierarchy of heading elements that you can use for headlines. They start with h1 and end with h6.



{% highlight HTML %}
<h1>heading 1</h1>
<h2>heading 2</h2>
<h3>heading 3</h3>
<h4>heading 4</h4>
<h5>heading 5</h5>
<h6>heading 6</h6>
{% endhighlight %}

#### Paragraph
This is the perfect tag if you want to markup text. Even this text is wrapped in a p.



{% highlight HTML %}
<p>Some text</p>
{% endhighlight %}

#### Strong, em, break
These are some inline Elements that you can nest inside a paragraph. Strong and emphasis give some meaning to pieces of text, while break forces a
linebreak.



{% highlight HTML %}
<strong>Strong</strong> and <em>emphasis</em>,
<br>break
{% endhighlight %}

#### Images
The image tag is special as it is self-closing, it has no closing tag (like the break tag). It also has a special attribute the src which carries the path to the actual image. The alt attribute is a placeholder, if for some reason the image does not load.



{% highlight HTML %}
<img src="https://placehold.it/664x442" alt="placeholder image">
{% endhighlight %}
<img src="https://placehold.it/664x442" alt="placeholder image">

#### Links
Links take the user to another page. The tag is simply an a which stands for anchor. It comes with the href (hyper reference) attribute, that tells the browser where to go to. You can also add a title attribute that shows once the user hovers over it.



{% highlight HTML %}
<a href="http://cssconf.eu" title="CSSconf EU">CSSconfEU</a>
{% endhighlight %}

#### Div
The div element is an element that does not have any special meaning or special styling. It’s perfect for grouping other elements together and assigning them a class or an id.



{% highlight HTML %}
<div>I do nothing special</div>
{% endhighlight %}

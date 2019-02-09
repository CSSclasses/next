---
layout: post
title: "(Practical) Elements"
category: html
---

In this section, we have listed some of the most common HTML elements. They are sorted by block-level and inline elements (see [Page flow](pageflow.html) for what this means.).

## Block level elements

### Headings (h1-h6)
Headings are used for the headlines of a section of your page. There is a hierarchy of heading elements that you can use for headlines. They start with `h1` and end with `h6`, with `h1` meaning it is the most important headline on your page.

{% highlight HTML %}
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
{% endhighlight %}

### Paragraph
This is the perfect tag if you want to markup longer texts which you would typically describe as a paragraph.

{% highlight HTML %}
<p>Some text.</p>
{% endhighlight %}

### Lists
Lists can be unordered (also known as bullet list) or ordered (aka numbered lists). Each item in a list receives the tag `li`. The whole list is wrapped with either a `ul` (unordered) tag or an `ol` (ordered) tag.

{% highlight HTML %}
<ul>
  <li>Unordered item 1</li>
  <li>Unordered item 2</li>
  <li>Unordered item 3</li>
</ul>

<ol>
  <li>Ordered item 1</li>
  <li>Ordered item 2</li>
  <li>Ordered item 3</li>
</ol>
{% endhighlight %}

### Div
The "div" element is an element that does not have any special meaning or default styling. It’s perfect for grouping other elements together and assigning them a class or an id.

{% highlight HTML %}
<div>I do nothing special.</div>
{% endhighlight %}

## Inline level elements

### Links
Links take the user to another page. The tag is an `a` which stands for "anchor". It comes with the `href` (hyper reference) attribute, that tells the browser where to go to. You can also add a title attribute that shows once the user hovers over it.

{% highlight HTML %}
<a href="http://cssconf.eu" title="CSSconf EU">CSSconfEU</a>
{% endhighlight %}

### Strong, em, break
These are some inline Elements that you can nest inside a paragraph. "Strong" and "emphasis" give some meaning to pieces of text, while "break" forces a
linebreak.

{% highlight HTML %}
<strong>Strong</strong> and <em>emphasis</em>,
<br>break
{% endhighlight %}

### Span
The "span" element is the inline level equivalent of the `div` tag. It does not have any special meaning or default styling. It’s perfect when you want to style a certain part of your text, but this part has no particular semantic meaning.

{% highlight HTML %}
<h1>Headline with a <span class="highlighted">highlighted part</span></h1>
{% endhighlight %}

## Somewhat inbetween elements

### Images
The image tag is special as it is self-closing, it has no closing tag (like the break tag). It also has a special attribute the src which carries the path to the actual image. The alt attribute is a placeholder, if for some reason the image does not load.

{% highlight HTML %}
<img src="https://placehold.it/664x442" alt="placeholder image">
{% endhighlight %}
<img src="https://placehold.it/664x442" alt="placeholder image">

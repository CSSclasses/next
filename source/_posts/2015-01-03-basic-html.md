---
layout: post
title: "Basic HTML"
category: html
---

## Basic HTML
* [Elements and Tags](#elements-and-tags)
* [Pageflow](#pageflow)

### Elements and Tags
Elements and Tags are the building blocks of HTML.

Elements are what makes up a HTML document. You can put elements inside of other elements. An element can include three things: a tag, attributes, and content.

A Tag is the thing that indicates an element’s purpose. For example, the `<p>` tag indicates a paragraph of text is in that element, and the `<li>` represents a ‘list item’. You’ll notice they’re always surrounded by angle brackets. Opening and Closing tags mark the beginning and end of an element and wrap its content, like so:

{% highlight HTML %}
<p>This is a paragraph.</p>
{% endhighlight %}

You can see the closing tag includes a `/` before its name; otherwise it would be another opening tag!

Always double-check that you’ve closed all your elements; otherwise, a browser can and will get mixed up trying to understand your HTML document.

Lastly, having elements inside of each other (“nesting”) looks just like this:



{% highlight HTML %}
<p>This is a sentence, with an <em>em</em> element ("emphasize") inside of it.</p>
{% endhighlight %}

or this:



{% highlight HTML %}
<div id="main-container">
  <h1>The h1 tag indicates the primary header of the document.</h1>
  <p>Some text.</p>
</div>
{% endhighlight %}

In the above example, you can see our first case of an attribute. It starts with a lowercase name, and then is almost always followed by an = and a ‘value’ that’s surrounded in double quotes, "like this". An element can have many attributes, in which case you separate them by spaces, as you’ll see soon. Attributes give information about an element in particular.

### Pageflow
In most circumstances "normal flow" is the way that elements are laid out on a web page. Every element in HTML is inside a rectangular box. Shown on the picture below.

<figure>
  <img src="{{site.baseurl}}/assets/images/pageflow.png" alt="Screenshot of the CSSclasses GitHub page with elements highlighted with black borders.">
  <figcaption>
    <p>Every element on the page highlighted.</p>
  </figcaption>
</figure>

In our example, each of these boxes are one of two different types: **inline boxes** or **block boxes**. So what exactly does this mean? Let’s start with block boxes.

**Block boxes** are stacked vertically one after the other in the order they’ve been written in the HTML file, and they usually occupy the whole width of the page. They normally start in the upper left corner and go down to the bottom.

Here is a simple example. Don’t get confused by the additional CSS. It’s just there for the purpose of making the boxes visible.

<p data-height="765" data-theme-id="dark" data-slug-hash="PjqpyM" data-default-tab="result" data-user="CSSclasses" data-embed-version="2" data-pen-title="CSSclasses Block Boxes" class="codepen">See the Pen <a href="https://codepen.io/team/CSSclasses/pen/PjqpyM/">CSSclasses Block Boxes</a> by CSSclasses (<a href="https://codepen.io/CSSclasses">@CSSclasses</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

**Inline Boxes** work a bit differently. These boxes will also start at the upper left corner, but will arrange themselves horizontally.

Here’s an example of that as well.

<p data-height="256" data-theme-id="dark" data-slug-hash="Pjqmvm" data-default-tab="result" data-user="CSSclasses" data-embed-version="2" data-pen-title="CSSclasses inline box" class="codepen">See the Pen <a href="https://codepen.io/team/CSSclasses/pen/Pjqmvm/">CSSclasses inline box</a> by CSSclasses (<a href="https://codepen.io/CSSclasses">@CSSclasses</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

So HTML elements are by default either **block boxes** or **inline boxes** (of course, there are exceptions to this rule, but we don’t have to worry about that for now). For example, `div` is a block element, and so are headings like `h1` or `h2`. `span` or `strong` on the other hand are **inline elements**. Here are lists for the different elements:

* <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements" target="_blank">Block-level elements</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elemente" target="_blank">Inline elements</a>

For now just keep in mind, that every box has some sort of display value.

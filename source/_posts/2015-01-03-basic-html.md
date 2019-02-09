---
layout: post
title: "Basic HTML"
category: html
---

HTML is short for "Hypertext Markup Language". It's a language to annotate (or markup) any content so it can be displayed on an electronic device. Hypertext refers to those displayed texts (or documents) which are linked to each other by hyperlinks.

This somewhat abstract definition describes the most fundamental part of any website. Almost every website you see in a browser uses HTML to display its content. How the HTML is created by a developer might differ. But in the end, content needs to be annotated to be displayed correctly.

Let's start by looking at the language HTML.

* [Elements and Tags](#elements-and-tags)
* [Pageflow](#pageflow)
* [How to start?](#how-to-start)

## Elements and Tags
Elements and Tags are the building blocks of HTML. Let's look at a few examples:

{% highlight HTML %}
<h1>Learning Materials</h1>
<p class="paragraph">This is a sentence inside a paragraph.</p>
<a href="about.html">This is a link</a>
{% endhighlight %}

Elements are what makes up an HTML document. An element can include three things: a tag, attributes, and content.

In the example above,
* **Tags** are `<h1></h1>` (used for a headline), `<p></p>` (for a paragraph) and `<a></a>` (a link to another page).
* **Attributes** are `class` or `href`. They provide all kinds of additional information to the browser.
* **Content** is everything inside the tags. This will actually be displayed in the browser.

### Tags
A Tag is the thing that indicates an element’s purpose. For example, the `<p>` tag indicates a paragraph of text is in that element, and the `<li>` represents a ‘list item’.

You’ll notice, tags are always surrounded by angle brackets. Opening and Closing tags mark the beginning and end of an element and wrap its content, like so:

{% highlight HTML %}
<p>This is a paragraph.</p>
{% endhighlight %}

You can see the closing tag includes a `/` before its name; otherwise it would be another opening tag. This means: Always double-check that you’ve closed all your elements; otherwise, a browser can and will get mixed up trying to understand your HTML document.

Luckily, editors such as Atom or VS Code can help us here. If you start typing the name of a tag, you will see a little popup around your cursor. This offers suitable elements and the editor takes care of writing the opening and closing tags. Try it out by starting to type an "a". With the keyboard keys `arrow-up ▲` and `arrow-down ▼`, you can choose the desired tag.

You can also put elements inside of other elements. This is called "nesting elements".

{% highlight HTML %}
<p>This is a sentence, with an <em>em</em> element ("emphasize") inside of it.</p>
{% endhighlight %}

or this:

{% highlight HTML %}
<div id="first" class="main-container">
  <h1>The h1 tag indicates the primary header of the document.</h1>
  <p class="teaser">Some text <a href="other-page.html">with a link</a>.</p>
</div>
{% endhighlight %}

## Attributes
In the above example, you can see more attributes, e.g. `id="first"`. They start with a lowercase name, and are then almost always followed by an = and a "value" that’s surrounded in double quotes, "like this".

An element can have many attributes, in which case you separate them by spaces. Attributes give information about an element in particular.

## How to start?
In the beginning, the amount of tags and when to use them can be a bit overwhelming. We've put together a list of [practical elements](practical-elements). 

---
layout: post
title:  "First Steps"
category: basics
---

## The Basics
In this section, we'll cover the very start of creating a webpage. Every website on the internet is HTML documents in its core. So we start by creating and editing our first HTML file.

* [How to create an HTML file](#how-to-create-a-file-called-indexhtml)
* [How to open it in the browser](#how-to-open-indexhtml-in-your-browser)
* [Edit, Save and Refresh workflow](#edit-save-and-refresh-workflow)

### How to create a file called index.html
Open your text editor and create a new file. If you don't have a text editor yet, we've got some tips in the section on "Tools" (TODO: Write article and link it here).

In your text editor (e.g. Atom or VS Code), click the `File` menu and then click `New File`.

<figure>
  <img src="{{site.baseurl}}/assets/images/new-file.png" alt="Image of Sublime Text's file menu - New file selected.">
  <figcaption>
    <p>Click the "File" menu and then click "New File".</p>
  </figcaption>
</figure>

Now, type "Hello World!" or any other sentence you always wanted to read in your favorite browser.

<figure>
  <img src="{{site.baseurl}}/assets/images/hello-world.png" alt="Image of Sublime Text with open file - Text: Hello World!.">
  <figcaption>
    <p>Now type "Hello World!" or any other sentence.</p>
  </figcaption>
</figure>

Click `File -> Save as…` and navigate to a folder you know how to find on your computer. It could be a good idea for now to create a folder on your desktop or in your home folder called "cssclasses" and save your file in it.

As a filename, choose "index.html" and click `Save`.

If you're used to text editing programs such as LibreOffice or MS Word, there's one little difference when saving a file: You always have to type the file extension yourself. In our case, the file extension is `.html`. Other examples are `.css`, `.png` or `.exe`. The file extension tells the operating system the type of the file and is the characters after the last dot in the filename.

<figure>
  <img src="{{site.baseurl}}/assets/images/save-as.png" alt="OS X Save as file dialog window.">
  <figcaption>
    <p>Now click File -> Save as…</p>
  </figcaption>
</figure>

### How to open index.html in your browser
So now you have an HTML file. To open it in your browser, use Windows Explorer, your Linux file manager or Finder on Mac and find your index.html file where you just saved it. By double-clicking it, your system’s default browser should open this file and show your sentence on the screen. Hooray!

### Edit, Save and Refresh workflow
Leave this browser window open and go back to your text editor.

Edit your index.html by wrapping your first sentence with an HTML `h1` tag to make it a headline:
```
<h1>Hello World!</h1>
```

Click "File -> Save" again (or use the keyboard shortcut ctrl+s (on Windows and Linux) / cmd+s (on Mac)). Now go back to your browser. No change showing? You’ll have to click the "Refresh" button (or use the shortcut: ctrl+r / cmd+r) in your browser to see the change. All there? Great!

This will be the standard workflow from now on: edit > save > refresh.

Now let’s make this a real website.

# next
The next version of CSSclasses’ website - continuously in draft mode (as of December 2018).
The website is built using [Jekyll](https://jekyllrb.com/).

## what?!?!
One dark November evening, Bastian and Katrin sat together wondering how we could enhance the material section of our website. And while having a look into the current website's code we realized: Quite a bit of the setup is outdated (hi Bower), some not really necessary, barriers are quite high for external contributors, let alone people who only just started web development, the material section is not really scalable. Quite a few things came together. 
Now, we don't want to be those folks who overthrow all and start everything from scratch. Yet, here we are… 

We have a few goals and ideas:
- Better readability/usability of the materials. Hence, we want to start with a skeleton that puts the (scalable) material section into the center of attention.
- Split existing material content into several pages or sections by using post cetagories (such as the basics, the html, the css). The nodeschool website has been an inspiration here. 
- Add challenges and resources to each chapter as they fit. 
- We can add more category sections. e.g. tooling/needed software or how to publish a website. 
- Have a low-barrier setup for external contributors. This means as little as possible software for the setup.
- As our whole existence is based on the belief that CSS is a simple and low-barrier entry language, why not do as much as possible with (vanilla) CSS. 
- Reuse layouts and css from the current website while not constraining ourselves (whatever that will mean exactly, pragmatism might rule).
- Replace screenshots with editor-agnostic images. 

## Work log
Initial setup (Dec 3, 2018)
- Copy all posts as is.
- Copy svg and images as is into assets folder.
- Copy data directory from the current website as is
- Copy favicons as is into to assets/favicons subfolder.
- Copy all layouts and includes as is. Boil down layouts to default, page and post.
- Copy sass files as is for now. Use jekyll's built-in sass work flow.
- Missing: all other pages than index.html. 
- Rework: Materials now is a list page. Categories for the loop can be found in `_config.yml` as well as in the posts.

# Setup

## Requirements

1. Ruby: Ensure you're running ruby 2.3.3. Newer version might have trouble running jekyll.
2. Bundler: You can test if you have bundler installed by typing (or copy&paste) this command into your terminal: `bundler -v`. If it says "command not found", you need to install bundler with this command:`gem install bundler`.
3. Git

## Set up for maintainers
1. Clone the repo: `git clone git@github.com:CSSclasses/next.git`
2. Change into the repo directory: `cd next`
2. Run `bundle install` to install dependencies (in case of command not found,
  install bundler using `gem install bundler`)
4. Run `bundle exec jekyll serve` to run Jekyll
5. Open <http://localhost:4000/> to see generated site

## Setup for contributors
The CSSclasses website is built using Jekyll. In order to set up and run the site locally for development, you'll need the requirements (Ruby, Bundler, git - see above), create a GitHub account, and fork this repo. 

You can read about forking a repo and cloning your fork [in the GitHub docs](https://help.github.com/articles/fork-a-repo/). When forking, you might be asked where you want to fork the repository to; select your own Github profile.

Once you cloned the repo to your local computer and configured the snychronization, run these commands:
1. Run `bundle install` to install all required packages
2. Run `bundle exec jekyll serve` to run Jekyll
3. Open <http://localhost:4000/> to see the generated site
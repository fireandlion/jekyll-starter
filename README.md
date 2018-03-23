# A starter template for a Jekyll site

This is a vanilla template for creating a website with Jekyll. We use it at Fire and Lion (http://fireandlion.com). It's always a work in progress.

## Usage

This site is built with [Jekyll](http://jekyllrb.com). Follow the installation and running instructions for Jekyll to install and run it locally.

### Images

This site uses variously sized versions of images for different devices. To generate these, place the original, high-res versions of your images in `_source/images`, then from the Terminal or Command Prompt, in the project root (`jekyll-starter`, or whatever you're rename that directory to for your project), run `gulp`.

Of course, for this to work you must first install [gulp](https://gulpjs.com/) and run `npm install` from the Terminal or Command Prompt, in the project root.

### Build for live

From the terminal (and assuming you've already run `bundle install` at least once in the repo), run

```
bundle exec jekyll serve --baseurl=""
```

Test, and if all's well, copy the HTML from your `_site` folder to the `public_html` folder (or equivalent) of the live webserver.

## Editing

### Main site pages

The site's main pages (index or home page, about, contact) are markdown files in the project root.

### Collections

This template doesn't (yet) contain any collections, since collections are very project-specific. On Fire and Lion's [main website](https://fireandlion.com), we use a `portfolio` collection for our portfolio.

### Data and settings

You can use the `_data` directory to store data and settings for your site. This template includes a basic `settings.yml` file. There you set the site's name, description, default image, canonical URL and Google Analytics Code.

### Posts

This template does not include posts, since the need for those depends on your project. On Fire and Lion's [main website](https://fireandlion.com), we use a `thinking` directory for our posts.

There, to create a new Thinking piece (aka a post), we add a markdown file to `thinking/_posts`. The file name must include the date of the post at the beginning in `YYYY-MM-DD` format, like `2017-05-15-i-love-you-indesign-but.md`.

In the file, we include at least a `title`, `excerpt` and `author` in the YAML frontmatter, like this:

```
---
title: "I love you, InDesign, but it's time to let you go"
excerpt: "I love you, InDesign, but it’s time to let you go. We just can’t be together in a multi-format world."
author: Arthur Attwell
---
```

We can also include an `image` in the frontmatter, as for portfolio posts.

#### Captions

To create a caption for an image, insert a markdown image inline in a paragraph, and give the paragraph the class `image-with-caption`, like this:

```
![Great Expectations]({{ site.baseurl }}/images/great-expectations.jpg)
The cover of Great Expectations
{:.image-with-caption}
```

#### Gallery

To create a gallery of images that tiles on the page, add all the images one after the other, each on a new line. Then add a `{:.gallery}` tag on the last line after the images.

```
![The Park]({{site.baseurl}}/images/the-park.jpg)
![Ties that Bind]({{site.baseurl}}/images/ties-that-bind.jpg)
![We, the People]({{site.baseurl}}/images/we-the-people.jpg)
{:.gallery}
```

By default, a gallery fits three images in a row on a large screen. To get two, larger images per row, use `{:.gallery-larger}` instead of `{:.gallery}`.

### Drafts

You can keep unfinished drafts of posts in `_drafts`.

### Includes

The template includes a few includes that we use often. Some of these are included by default in `_layouts/default.html`. If you know your way around Jekyll, you'll know how to remove or edit these.

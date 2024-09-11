---
title: "Dynamic favicons according to color mode"
description: "Learn to make your website's favicon dynamic according to the color mode" 
pubDate: "2024-09-10"
updatedDate: "2024-09-10"
heroImage: "/images/blog/hero/dynamic-color-mode-favicons.jpg"
author: "Adonys"
lang: "en"
---

There are two types of users, those of the light mode and those of the dark mode. Practically all browsers support both color modes, but this has a problem and that the favicon of your website may not look well in one of the two modes. In this article I will teach you how to have a dynamic favicon according to the color mode of your browser.

![Meme of a person with a lamp light in the face, representing the filling of using light mode](/images/blog/light-mode-meme.jpg)

It is quite simple, without JavaScript or third-party libraries. You just need two versions of your favicon, one for light mode and one for dark mode.

To do this, you will have to add the following `link` tags in the `head` of your HTML:

```html
<link rel="icon" type="image/svg+xml" href="./favicon-light.svg" />
<link rel="icon" type="image/svg+xml" href="./favicon-dark.svg" media="(prefers-color-scheme: dark)" />

```

**Note:** the order is important. If you do it the other way around, the light favicon will always be displayed, even if the user's color mode is dark.

You can change both the `type` and the `href` according to the format and location of your favicons.

This is posible thanks to the `media` property that allows you to apply conditional styles according to a media query. In this case, it is applying the dark favicon when the user's color preference is dark.

**Why the light icon does not have the media query?**

With the second `link` it is overwriting the first `link` and if the media query is not valid, the second `link` will not be applied, so it will continue showing the light favicon. Therefore we could say that the first `link` is the default favicon.

The `light` media query could also be used for the light favicon, but it is not necessary since if the media query of the second `link` is not met, the first `link` will be applied.

## Other uses of the `media` attribute

This attribute has many uses, practically any CSS query can be applied.

The use case that I find most interesting is that of screen sizes and widths, since you can make certain styles or resources load according to the screen size. This is very useful when we have different styles for large and small screens.

**In example:**

```html
<link rel="stylesheet" type="text/css" href="./common.css" />
<link rel="stylesheet" type="text/css" href="./mobile.css" media="screen and (max-width: 425px)" />
<link rel="stylesheet" type="text/css" href="./tablet.css" media="screen and (min-width: 426px) and (max-width: 768px)" />
<link rel="stylesheet" type="text/css" href="./desktop.css" media="screen and (min-width: 769px)" />

```

On this way, the `common.css` file will be loaded on all screens, `mobile.css` on screens smaller than 425px, `tablet.css` on screens between 426px and 768px and `desktop.css` on screens larger than 769px

Even you could have a style file for printing:

```html
<link rel="stylesheet" type="text/css" href="./print.css" media="print" />

```

The bright side of this is that only the necessary styles will be loaded for the user's screen size or when the query is met, which improves performance.

## Tags that support the `media` attribute

- `link`
- `style`
- `source`
- `a`
- `area`

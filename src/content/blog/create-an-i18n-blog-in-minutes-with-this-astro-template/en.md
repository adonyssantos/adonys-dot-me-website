---
title: "Create an internationalized blog in minutes with this Astro template"
description: "Deploy your blog with internationalization (i18n) support in minutes using Astro and Cloudflare Pages for free. Additionally, it offers essential features like SEO optimization, an RSS feed, and a high Lighthouse score, ensuring your blog is both performant and accessible."
pubDate: "2024-08-13"
updatedDate: "2024-08-17"
heroImage: "/images/blog/hero/create-an-i18n-blog-in-minutes-with-this-astro-template.jpg"
author: "Adonys"
lang: "en"
---

In this article, I will show you how to create a blog with internationalization (like this one) in minutes using Astro and deploy it with Cloudflare Pages for free. This blog supports English, Spanish, and French by default, but you can add more languages.

## Features

- Internationalization (i18n) support.
- RSS feed (with i18n support).
- Sitemap.
- Markdown support.
- SEO optimized.
- Lighthouse score 100.

## Prerequisites

- GitHub account.
- Cloudflare account.
- Node.js 18.x or later.
- Git.

## Setup and deploy

To set up and deploy your blog follow these 6 steps:

1. Create a new repo using the [astro-blog-i18n-starter](https://github.com/rebecamurillo/astro-blog-i18n-starter). Click on the "Use this template" button, add the new repository name, and click on "Create repository".
2. Log in to the [Cloudflare dashboard](https://dash.cloudflare.com/) and select your account.
3. In Account Home, select **Workers & Pages > Pages > Connect to Git**.
4. Select the repository you created in step 1 and click on "Begin setup". If this is your first time using Cloudflare Pages, you may need to connect your GitHub account.
5. In this step, you can configure the build setting. For this template, you can use the default settings.
6. Click on "Save and Deploy".

Once the deployment is done, you can access to your blog using an URL that ends with `.pages.dev`. Keep in mind that the first deployment can take a few minutes and if you join to the website URL you will see a `DNS address could not be found. Diagnosing the problem` error. This is normal, you just need to wait a few minutes and refresh the page.

## Custom domain (optional but recommended)

To add a custom domain to your blog, you need to have a purchased domain. (In this article, I will not explain how to buy a domain, but I recommend using Namecheap or much better, Cloudflare Registrar) and follow these steps:

1. In the [Cloudflare dashboard](https://dash.cloudflare.com/), select your account.
2. On the "Website" tab, click on "Add domain".
3. In this case we will use the free plan, so scroll down, select the free plan, and click on "Continue".
4. Change the nameservers of your domain to the Cloudflare nameservers. You can do this where you bought the domain (I.e. Namecheap, Cloudflare Registrar or any other domain provider).
5. To validate if Cloudflare was configured correctly with your domain, go to **Websites** and you should see the domain status as "Active". If you see a "Pending Nameserver Update", I recommend double-checking the nameserver's configuration.
6. Now, come back to the [Cloudflare dashboard](https://dash.cloudflare.com/) and select your account.
7. Select **Worker & Pages** and then your project name (if you did not change the default name, it will be the same as the repository name).
8. Select the "Custom domains" tab and click on "Setup a custom domain".
9. Write your domain or subdomain, click on "Continue", and then click on "Activate DNS".

<!-- TODO: maybe, add instructions about how to redirect from `@` to `wwww` -->
I recommend adding two domains, one with `www` and another without it. This is because some users will write the `www` and others will not.

```plaintext
CNAME www   adonys-dot-me-website.pages.dev
CNAME @     adonys-dot-me-website.pages.dev
```

After adding the custom domains, you need to wait up to 24 hours to see the changes. Although, normally, the changes are seen in a few minutes.

If you have any issues, you can check the [Cloudflare documentation](https://developers.cloudflare.com/pages/configuration/custom-domains/) for more information.

## Modifying the template

- First, I recommend modifying the `site.config.mjs`  file to add your site URL. Change the `https://example.com` by your Cloudflare pages URL or custom domain.
- Also, you can handle the translations modifying the `src/i18n/ui.ts` file.
- Edit the site header items in `src/components/Header.astro`.
- Add your name to the footer in `src/components/Footer.astro`.
- Remove the demo posts in the `src/content/blog/` folder.

## Adding new posts

To add a new post, you need to create a new folder inside the `src/content/blog/` folder. The folder name will be the post slug. Inside the folder, you need to create a `en.md` file with the post content in English and a `es.md` file with the post content in Spanish, and `fr.md` file with the post content in French. You can add more languages if you want.

On the head of each Markdown file, you need to add the following metadata:

```markdown
---
title: ""
description: ""
pubDate: ""
heroImage: ""
author: ""
lang: ""
---

Your post content here...

```

## Why I am using Cloudflare Pages instead of Vercel?

I think that this is a good question, and it is enough to write a new article about it. But in summary, I am using Cloudflare Pages because, for me, the Cloudflare CDN and Vercel Hosting do not work well together, some static files like images are not loading.

I have been using Vercel for a long time, but I have been having some issues to use the Cloudflare CDN with Vercel. So I decided to use all the Cloudflare ecosystem for this blog, so that I stopped having issues with the images and other static files.

Now I am using my `adonys.me` domain from Namecheap with the Hosting, CDN, and SSL from Cloudflare. I am very happy with the performance and the free tier that Cloudflare offers.

Maybe there is a way to use Vercel with Cloudflare CDN, but for me, using Cloudflare Page was a faster solution.

## Credits

The template [astro-blog-i18n-starter](https://github.com/rebecamurillo/astro-blog-i18n-starter) was created by Rebeca Murillo. In fact, I have contributed to the project.

I am using that template for this site, but I have made some modifications that you can see on my [GitHub repository](https://github.com/adonyssantos/adonys-dot-me-website). I recommend reading my first article [About this blog](/en/blog/about-this-blog) to know more about the changes I made.

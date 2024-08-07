---
title: 'Internationalized dates without libraries'
description: "It is very common to work rendering dates in different languages, and there are many libraries to do this, but in my blog I implemented a simple internationalized date without libraries, using a JavaScript method that is available in all modern browsers."
pubDate: 'Aug 7 2024'
heroImage: '/images/blog/hero/internationalized-dates-without-libraries.jpg'
author: 'Adonys'
lang: 'en'
---

It is very common to work rendering dates in different languages, and there are many libraries to do this, but in my blog I implemented a simple internationalized date without libraries, using a JavaScript method called `toLocaleDateString` that is available in all modern browsers.

![Can I Use screenshot with 96.65% of global support](/images/blog/caniuse-toLocaleDateString.png)

The amazing thing about that, is that you can use it on any framework or library. For example, in my blog, I am using Astro and the code looks like this:

```astro
---
type Props = {
 lang: string;
 date: Date;
};

const { lang, date } = Astro.props;
---

<time datetime={date.toISOString()}>
 {
  date.toLocaleDateString(lang, {
   year: "numeric",
   month: "long",
   day: "numeric",
  })
 }
</time>

```

In this case, I am creating a component that receives the language and the date as props, and then I am using the `toLocaleDateString` method to render the date on my preferred format.

Also, It is recommended to use semantic HTML, so in this case, I am using the `time` tag to wrap the date and passing the `datetime` attribute with the ISO string of the date to make it accessible for screen readers. Although the tag name is `time`, it also works for dates or a combination of date and time.

**And voilà! We have an internationalized date without libraries:**

![Internationalized dates without libraries](/images/blog/formatted-dates.png)

The same logic can be implemented in any framework or library.

**React:**

```jsx
interface FormattedDateProps {
  lang: string;
  date: Date;
}

const FormattedDate = ({ lang, date }: FormattedDateProps) => (
  <time dateTime={date.toISOString()}>
    {date.toLocaleDateString(lang, {
      year: "numeric",
      month: "long",
      day: "numeric",
    })}
  </time>
);

```

**Vue:**

```vue
<template>
  <time :datetime="date.toISOString()">
    {{
      date.toLocaleDateString(lang, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    }}
  </time>
</template>

<script>
export default {
  props: {
    lang: String,
    date: Date,
  },
};
</script>

```

**Angular:**

```typescript
import { Component, Input } from "@angular/core";

@Component({
    selector: "app-formatted-date",
    template: `
        <time [datetime]="date.toISOString()">
            {{ date.toLocaleDateString(lang, {
                year: "numeric",
                month: "long",
                day: "numeric",
            }) }}
        </time>
    `,
})

export class FormattedDateComponent {
    @Input() lang: string;
    @Input() date: Date;
}

```

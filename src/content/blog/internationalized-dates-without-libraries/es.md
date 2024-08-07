---
title: 'Fechas internacionalizadas sin bibliotecas'
description: "It is very common to work rendering dates in different languages, and there are many libraries to do this, but in my blog I implemented a simple internationalized date without libraries, using a JavaScript method that is available in all modern browsers."
description-es: "Es muy común renderizar fechar en diferentes idiomas y hay muchas bibliotecas para esto, pero en mi blog he implementado fechas internacionalizadas de manera simple y sin bibliotecas, usando un método de JavaScript que está disponible en todos los navegadores modernos."
pubDate: 'Aug 7 2024'
heroImage: '/images/blog/hero/internationalized-dates-without-libraries.jpg'
author: 'Adonys'
lang: 'es'
---

Es muy común renderizar fechar en diferentes idiomas y hay muchas bibliotecas para esto, pero en mi blog he implementado fechas internacionalizadas de manera simple y sin bibliotecas, usando un método de JavaScript que se llama `toLocaleDateString` y está disponible en todos los navegadores modernos.

![Captura de Can I con 96.65% de soporte global](/images/blog/caniuse-toLocaleDateString.png)

Lo bueno de esto es que puedes usarlo en cualquier framework o biblioteca. Por ejemplo, en mi blog, estoy usando Astro y el código se ve así:

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

En este caso, estoy creando un componente que recibe el idioma y la fecha por las props y luego estoy usando `toLocaleDateString` para renderizar la fecha un formato de preferencia.

Además, es recomendable utilizar HTML semántico, en este caso estoy usando la etiqueta `time` para envolver la fecha y pasandole el atributo `datetime` con la fecha en formato ISO para hacerla accesible para lectores de pantalla. También es posible usar la etiqueta `time` para fechas o combinaciones de fecha y hora.

**¡Y listo! Tenemos fechas internacionalizadas sin bibliotecas:**

![Fecha internacionalizadas sin bibliotecas](/images/blog/formatted-dates.png)

La misma lógica puede ser implementada en cualquier framework o biblioteca.

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

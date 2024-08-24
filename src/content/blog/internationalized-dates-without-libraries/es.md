---
title: "Fechas internacionalizadas sin bibliotecas"
description: "Es muy común renderizar fechar en diferentes idiomas y hay muchas bibliotecas para esto, pero en mi blog he implementado fechas internacionalizadas de manera simple y sin bibliotecas, usando un método de JavaScript que está disponible en todos los navegadores modernos."
pubDate: "2024-08-07"
updatedDate: "2024-08-23"
heroImage: "/images/blog/hero/internationalized-dates-without-libraries.jpg"
author: "Adonys"
lang: "es"
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

<!-- TODOSTART: translate this to english -->
El metodo `toLocaleDateString` se puede viene incluido en el objeto `Date` y recibe dos argumentos que son:

1. `locales`: Un string en formato BCP 47 que representa el idioma o idiomas que se quieren usar. El formato BCP 47 es una forma estandarizada de representar idiomas y regiones. Por ejemplo, "es" para español, "en" para inglés, "es-DO" para español de República Dominicana, "en-CA" para inglés de Canadá, etc.
2. `options`: Un objeto con opciones para formatear la fecha. Este objeto puede tener varias propiedades, algunas de ellas son:
   - `year`: Puede ser "numeric", "2-digit".
   - `month`: Puede ser "numeric", "2-digit", "long", "short", "narrow".
   - `day`: Puede ser "numeric", "2-digit".
   - `hour`: Puede ser "numeric", "2-digit".
   - `minute`: Puede ser "numeric", "2-digit".
   - `second`: Puede ser "numeric", "2-digit".
   - `weekday`: Puede ser "long", "short", "narrow".
   - `hour12`: Puede ser `true` o `false` y mostrara el formato de 12 horas si es `true` y de 24 horas si es `false`.
   - `timeZone`: Puede ser "UTC", valores entre "-23" y "+23", o cualquier otra zona horaria basada en [IANA](https://www.iana.org/time-zones).

`numeric` muestra el número, `2-digit` muestra el número con dos dígitos, `long` muestra el nombre completo, `short` muestra el nombre corto y `narrow` muestra el nombre aún más corto que `short`.

Te recomiendo ir experimentando con las opciones para ver cómo se ven los diferentes formatos y además investigar más sobre otras propiedades que puedes usar en el objeto `options`. De hecho, si estas usando VSCode, tendrás autocompletado para las propiedades del objeto `options`. Y si estas usando TypeScript puedes usar la interfaz `Intl.DateTimeFormatOptions` para tener autocompletado y validación de tipos.

Ambos argumentos son opcionales, si no se pasa el argumento `locales`, se usará el idioma y region del navegador. Si no se pasa el argumento `options`, se usará el formato por defecto del navegador.
<!-- TODOEND: translate this to english -->

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

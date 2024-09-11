---
title: "Favicons dinámicos según el modo de color"
description: "Aprende a tener un favicon dinámico según el modo de color de tu navegador."
pubDate: "2024-09-07"
updatedDate: "2024-09-10"
heroImage: "/images/blog/hero/dynamic-color-mode-favicons.jpg"
author: "Adonys"
lang: "es"
---

Existen dos tipos de usuarios, los del modo claro y los del modo oscuro. Practicamente todos los navegadores soportan ambos modos de color, pero esto tiene un problema y es que el favicon de tu sitio web no se vea bien en uno de los dos modos. En este artículo te enseñaré a tener un favicon dinámico según el modo de color de tu navegador.

![Meme de una persona con una luz de una lampara en la cara, representando la sensación de usar el modo claro](/images/blog/light-mode-meme-es.jpg)

Es bastante simple, sin necesidad de JavaScript o librerías de terceros. Solo necesitas dos versiones de tu favicon, una para el modo claro y otra para el modo oscuro.

Para hacer esto, tendrás que agregar la siguientes etiquetas `link` en el `head` de tu HTML:

```html
<link rel="icon" type="image/svg+xml" href="./favicon-light.svg" />
<link rel="icon" type="image/svg+xml" href="./favicon-dark.svg" media="(prefers-color-scheme: dark)" />

```

**Nota:** el orden es importante. Si lo haces al revés, el favicon claro siempre se mostrará, incluso si el modo de color del usuario es oscuro.

Puedes cambiar tanto el `type` como el `href` según el formato y la ubicación de tus favicons.

Esto es posible gracias a la propiedad `media` que permite aplicar estilos condicionales según una media query. En este caso, estamos aplicando el favicon oscuro cuando la preferencia de color del usuario es oscura.

**Por qué al icono claro no le ponemos la media query?**

Con el segundo `link` estamos sobreescribiendo el primer `link` y si la media query no se cumple, no se aplicará el segundo `link` por lo que seguirá mostrando el favicon claro. Por lo tanto podríamos decir que el primer `link` es el favicon por defecto.

Se podría también usar la media query `light` para el favicon claro, pero no es necesario ya que si no se cumple la media query del segundo `link`, se aplicará el primer `link`.

## Otros usos del atributo `media`

Este atributo tiene muchos usos, practicamente se puede aplicar cualquier query de CSS.

El caso de uso que me parece más interesante es el de los screen sizes and widths, ya que puedes hacer que carguen ciertos estilos o recursos según el tamaño de la pantalla. Esto es muy útil cunado tenemos estilos diferentes para pantallas grandes y pequeñas.

**Por ejemplo:**

```html
<link rel="stylesheet" type="text/css" href="./common.css" />
<link rel="stylesheet" type="text/css" href="./mobile.css" media="screen and (max-width: 425px)" />
<link rel="stylesheet" type="text/css" href="./tablet.css" media="screen and (min-width: 426px) and (max-width: 768px)" />
<link rel="stylesheet" type="text/css" href="./desktop.css" media="screen and (min-width: 769px)" />

```

De esta forma, se cargara el archivo `common.css` en todas las pantallas, `mobile.css` en pantallas menores a 425px, `tablet.css` en pantallas entre 426px y 768px y `desktop.css` en pantallas mayores a 769px.

Incluso podrías tener un archivo de estilos para impresión:

```html
<link rel="stylesheet" type="text/css" href="./print.css" media="print" />

```

Lo bueno de esto es que solo se cargaran los estilos necesarios para el tamaño de pantalla del usuario o cuando se cumpla la query, lo que mejora el rendimiento.

## Etiquetas que soportan el atributo `media`

- `link`
- `style`
- `source`
- `a`
- `area`

---
title: "Crea un blog internacionalizado en minutos con esta plantilla de Astro"
description: "Despliega tu blog con soporte de internacionalización (i18n) en minutos usando Astro y Cloudflare Pages de forma gratuita. Además, incluye características esenciales como optimización SEO, un feed RRSS y un puntaje de Lighthouse alto, asegurando tanto el rendimiento como la accesibilidad de tu blog." 
pubDate: "2024-08-17"
updatedDate: "2024-08-17"
heroImage: "/images/blog/hero/create-an-i18n-blog-in-minutes-with-this-astro-template.jpg"
author: "Adonys"
lang: "es"
---

En este articulo, te mostraré como crear un blog con internacionalización (como este) en pocos minutos, usando Astro y deplegarlo con Cloudflare Pages de forma gratuita. Este blog soporta inglés, español y francés por defecto, pero puedes añadir más idiomas.

## Características

- Soporte para internacionalización (i18n).
- Feed RRSS (con soporte para i18n).
- Sitemap.
- Soporte para markdown.
- Optimizado para SEO.
- Puntaje de 100 en Lighthouse.

## Pre-requisitos

- Cuenta de GitHub.
- Cuenta de Cloudflare.
- Node.js 18.x o superior.
- Git.

## Configuración y despliegue

Para configurar y desplegar tu blog sigue estos 6 pasos:

1. Crea un nuevo repositorio usando la [astro-blog-i18n-starter](https://github.com/rebecamurillo/astro-blog-i18n-starter). Haz clic en el botón "Use this template", añade el nombre del nuevo repositorio y haz clic en "Create repository".
2. Inicia sesión en el [dashboard de Cloudflare](https://dash.cloudflare.com/) y selecciona tu cuenta.
3. En el inicio de la cuenta, selecciona **Workers & Pages > Pages > Create a project**.
4. Seleccione el repositorio que creaste en el paso 1 y haga clic en "Begin setup". Si es la primera vez que usas Cloudflare Pages, es posible que necesites conectar tu cuenta de GitHub.
5. En este paso, puedes configurar la compilación. Para esta plantilla, puedes usar la configuración por defecto.
6. Clic en "Save and Deploy".

Una vez el despliegue este hecho, puedes acceder a tu blog usando una URL que termina en `.pages.dev`. Ten en cuenta que el primer despliegue puede tomar unos minutos y si accedes a la URL del sitio verás un error `DNS address could not be found. Diagnosing the problem`. Esto es normal, solo necesitas esperar unos minutos y actualizar la página.

## Dominio personalizado (opcional pero recomendado)

Para agregar un dominio a tu blog, necesitas tener un dominio comprado. (En este artículo, no explicaré cómo comprar un dominio, pero recomiendo usar Namecheap o mucho mejor, Cloudflare Registrar) y seguir estos pasos:

1. En el [dashboard de Cloudflare](https://dash.cloudflare.com/), selecciona tu cuenta.
2. En la pestaña "Website", haz clic en "Add domain".
3. En este caso usaremos el plan gratuito, así que desplázate hacia abajo, selecciona el plan gratuito y haz clic en "Continue".
4. Cambia los nameservers de tu dominio a los nameservers de Cloudflare. Puedes hacer esto donde compraste el dominio (I.e. Namecheap, Cloudflare Registrar u otro proveedor de dominios).
5. Para validar si Cloudflare se configuró correctamente con tu dominio, ve a **Websites** y deberías ver el estado del dominio como "Active". Si ves un "Pending Nameserver Update", te recomiendo verificar la configuración de los nameservers.
6. Ahora, vuelve al [dashboard de Cloudflare](https://dash.cloudflare.com/) y selecciona tu cuenta.
7. Selecciona **Worker & Pages** y luego el nombre de tu proyecto (si no cambiaste el nombre predeterminado, será el mismo que el nombre del repositorio).
8. Selecciona la pestaña "Custom domains" y haz clic en "Setup a custom domain".
9. Escribe tu dominio o subdominio, haz clic en "Continue" y luego haz clic en "Activate DNS".

<!-- TODO: maybe, add instructions about how to redirect from `@` to `wwww` -->
Te recomiendo agregar dos dominios, uno con `www` y otro sin él. Esto se debe a que algunos usuarios escribirán el `www` y otros no.

```plaintext
CNAME www   adonys-dot-me-website.pages.dev
CNAME @     adonys-dot-me-website.pages.dev
```

Despues de añadir los dominios personalizados, necesitas esperar hasta 24 horas para ver los cambios. Aunque, normalmente, los cambios se ven en unos minutos.

Si tienes cualquier problema, puedes revisar la [documentación de Cloudflare](https://developers.cloudflare.com/pages/configuration/custom-domains/) para más información.

## Modificando la plantilla

- Primero, recomiendo modificar el archivo `site.config.mjs` para añadir la URL de tu sitio. Cambia el `https://example.com` por tu URL de Cloudflare Pages o dominio personalizado.
- Además, puedes manejar las traducciones modificando el archivo `src/i18n/ui.ts`.
- Edita los elementos del encabezado del sitio en `src/components/Header.astro`.
- Añade tu nombre al pie de página en `src/components/Footer.astro`.
- Borra lost posts de ejemplo en `src/content/blog/`.

## Agregando un nuevo post

Para añadir un nuevo articulo, necesitar crear una nueva carpeta dentro de la carpeta `src/content/blog/`. El nombre de la carpeta será el slug del post. Dentro de la carpeta, necesitas crear un archivo `en.md` con el contenido del post en inglés y un archivo `es.md` con el contenido del post en español, y un archivo `fr.md` con el contenido del post en francés. Puedes añadir más idiomas si quieres.

En la cabecera de cada archivo Markdown, necesitas añadir los siguientes metadatos:

```markdown
---
title: ""
description: ""
pubDate: ""
heroImage: ""
author: ""
lang: ""
---

El contenido del artículo aquí...

```

## ¿Por qué uso Cloudflare Pages en lugar de Vercel?

Pienso que esa es una buena pregunta, y es suficiente para escribir un nuevo artículo sobre ello. Pero en resumen, estoy usando Cloudflare Pages por que el CDN de Cloudflare y el Hosting de Vercel no me funcionan bien juntos, algunos archivos estáticos como las imágenes no se cargan.

He estado usando Vercel por mucho tiempo, pero he estado teniendo problemas para usar el CDN de Cloudflare con Vercel. Así que decidí usar todo el ecosistema de Cloudflare para este blog, para que dejara de tener problemas con las imágenes y otros archivos estáticos.

Ahora estoy usando mi dominio `adonys.me` de Namecheap con el Hosting, CDN y SSL de Cloudflare. Estoy muy contento con el rendimiento y el plan gratuito que ofrece Cloudflare.

Quizás haya una forma de usar Vercel con Cloudflare CDN, pero para mí, usar Cloudflare Pages fue una solución más rápida.

## Créditos

La plantilla [astro-blog-i18n-starter](https://github.com/rebecamurillo/astro-blog-i18n-starter) fue creada por Rebeca Murillo. De hecho, he contribuido al proyecto.

Estoy usando esa plantilla para este sitio, pero he hecho algunas modificaciones que puedes ver en mi [repositorio de GitHub](https://github.com/adonyssantos/adonys-dot-me-website). Te recomiendo leer mi primer artículo [Sobre este blog](/blog/about-this-blog) para saber más sobre los cambios que hice.

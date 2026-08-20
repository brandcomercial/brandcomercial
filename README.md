# Brandcomercial Spotz — Sitio Web

Sitio web corporativo para **Brandcomercial Spotz**, empresa especializada en soluciones gráficas, impresión de gran formato e instalación profesional.

> **Slogan:** Conectando marcas

---

## 🚀 Tecnologías

- **[Astro](https://astro.build/)** — Framework estático ultra-rápido (cero JS por defecto).
- **TypeScript** — Tipado para configuración y componentes.
- **CSS puro** — Variables, Flexbox, Grid, Mobile-First, tipografía fluida con `clamp()`.
- **[Lucide Astro](https://lucide.dev/)** — Íconos genéricos (menú, contacto, etc.).
- **[Simple Icons](https://simpleicons.org/)** — Íconos oficiales de marcas (redes sociales, WhatsApp).

---

## 📦 Instalación y ejecución

### Requisitos
- [Node.js](https://nodejs.org/) v18+ (probado con v24).
- npm v9+ (viene con Node).

### Pasos

```bash
# 1. Instalar dependencias
npm install

# 2. Arrancar servidor de desarrollo
npm run dev

# 3. Abrir en el navegador
# http://localhost:4321/
```

### Comandos útiles

| Comando | ¿Qué hace? |
|---|---|
| `npm run dev` | Servidor local con recarga automática |
| `npm run build` | Genera la versión de producción en `dist/` |
| `npm run preview` | Previsualiza la versión de producción |

---

## 📁 Estructura del proyecto

```
brandcomercial/
├── public/                  # Archivos estáticos (favicon, etc.)
├── src/
│   ├── assets/              # Imágenes optimizadas por Astro (logos)
│   │   ├── logo-brandcomercial.svg
│   │   └── logo-brandcomercial-white.svg
│   ├── components/          # Componentes reutilizables
│   │   ├── Header.astro     # Navegación sticky
│   │   └── Footer.astro     # Pie de página (4 columnas)
│   ├── config/
│   │   └── site.ts          # ⭐ CONFIGURACIÓN CENTRAL (editar aquí)
│   ├── layouts/
│   │   └── BaseLayout.astro # Plantilla maestra (head + header + footer)
│   ├── pages/               # Cada archivo = una página web
│   │   └── index.astro      # Página principal
│   └── styles/
│       └── global.css       # Variables, reset, tipografía base
├── astro.config.mjs         # Configuración de Astro
├── package.json             # Dependencias y scripts
└── README.md                # Este archivo
```

---

## 🎯 Guía de mantenimiento: ¿Dónde cambio cada cosa?

### ✏️ Datos del sitio (menú, contacto, redes)
**Archivo:** `src/config/site.ts`

Este es el **único lugar** donde debes editar textos, links y datos. Los componentes se actualizan solos.

```typescript
// Cambiar menú de navegación
navigation: [
  { label: "Inicio", href: "/", id: "inicio", icon: "home" },
  // ...
]

// Cambiar contacto
contact: {
  phone: "+51 977 938 339",
  email: "ventas@brandcomercial.com.pe",
  // ...
}

// Cambiar redes sociales
social: {
  tiktok: "https://tiktok.com/@usuario",
  // ...
}
```

### 🎨 Colores de marca
**Archivo:** `src/styles/global.css` (sección `:root`)

```css
:root {
  --color-primary: #0A192F;    /* Azul noche */
  --color-secondary: #FF6B35;  /* Naranja */
}
```

### 🔤 Tipografías
**Archivo:** `src/layouts/BaseLayout.astro` (link de Google Fonts) + `src/styles/global.css` (variables `--font-*`).

Fuentes actuales:
- **Display (títulos grandes):** Bebas Neue
- **Headings (subtítulos, nav):** Montserrat
- **Body (párrafos):** Roboto

### 🖼️ Logo
**Archivos:** `src/assets/logo-brandcomercial.svg` y `logo-brandcomercial-white.svg`

- Reemplaza los archivos manteniendo los mismos nombres.
- El logo azul se muestra al inicio; el blanco al hacer scroll y en el footer.

### 🔘 Íconos del menú
**Archivo:** `src/config/site.ts` (campo `icon` de cada link).

Íconos disponibles: `home`, `users`, `wrench`, `package`, `image`, `mail`, `folder-open`, `headset`.

> Para añadir un ícono nuevo de Lucide:
> 1. Importarlo en `Header.astro`: `import { Star } from 'lucide-astro';`
> 2. Añadirlo al `iconMap`: `'star': Star`
> 3. Usarlo en `site.ts`: `icon: "star"`
>
> Lista completa: https://lucide.dev/icons/

### 📱 Íconos de redes sociales
Usan **simple-icons** (íconos oficiales de marcas). Se mapean en `Footer.astro` (`socialIconMap`).

Lista completa: https://simpleicons.org/

---

## 🌐 Responsive (Mobile-First)

El sitio está diseñado **móvil primero**. Breakpoints:

| Breakpoint | Ancho | Dispositivo |
|---|---|---|
| `sm` | ≥ 480px | Móviles grandes |
| `md` | ≥ 768px | Tablets |
| `lg` | ≥ 1024px | Laptops / menú desktop |
| `xl` | ≥ 1280px | Monitores |
| `2xl` | ≥ 1536px | Monitores grandes |
| `3xl` | ≥ 1920px | TVs / 4K |

Comportamiento del menú:
- **< 1024px:** Menú hamburguesa.
- **768px – 1023px:** Menú ocupa 50% del ancho.
- **< 768px:** Menú ocupa 100% (pantalla completa).
- **≥ 1024px:** Navegación horizontal completa.

---

## 🔀 Control de versiones con Git

### Flujo básico

```bash
# Guardar cambios
git add .
git commit -m "descripcion del cambio"

# Ver historial
git log --oneline

# Subir a GitHub
git push
```

### Convención de mensajes

| Prefijo | Uso | Ejemplo |
|---|---|---|
| `feat:` | Nueva funcionalidad | `feat: header con scroll invertido` |
| `fix:` | Corrección de bug | `fix: logo no cargaba en mobile` |
| `style:` | Cambios visuales (CSS) | `style: ajustar padding del footer` |
| `docs:` | Documentación | `docs: actualizar README` |
| `refactor:` | Reorganizar código | `refactor: centralizar config en site.ts` |

---

## 🚢 Despliegue a producción

El sitio se despliega como **HTML estático** (ultra-rápido, hosting gratis).

### Opción recomendada: Vercel o Netlify

1. Sube el proyecto a un repositorio de GitHub.
2. Conecta el repo en [Vercel](https://vercel.com/) o [Netlify](https://netlify.com/).
3. Configura:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Cada `git push` publica automáticamente.

### Opción manual

```bash
npm run build
```
Sube el contenido de la carpeta `dist/` a cualquier hosting estático.

---

## 📝 Páginas planificadas

| Página | Archivo | Estado |
|---|---|---|
| Inicio | `src/pages/index.astro` | 🚧 En progreso |
| Nosotros | `src/pages/nosotros.astro` | ⬜ Pendiente |
| Servicios | `src/pages/servicios.astro` | ⬜ Pendiente |
| Productos | `src/pages/productos.astro` | ⬜ Pendiente |
| Proyectos | `src/pages/proyectos.astro` | ⬜ Pendiente |
| Contacto | `src/pages/contacto.astro` | ⬜ Pendiente |
| Blog | `src/pages/blog/` | ⬜ Pendiente |

---

## 👤 Autor: Brandcomercial spotz

Proyecto desarrollado como práctica profesional con Astro, siguiendo buenas prácticas de semántica HTML, CSS Mobile-First y arquitectura de componentes.

SemVer
Version de desarrollo:
fase de lanzamiento: en construccion, estructura base.
version: v0.1.0
-------------------------


---

## 🎬 Componente: HeroSlider (Carrusel del Home)

**Archivo:** `src/components/home/HeroSlider.astro`

### ¿Qué hace?
Carrusel principal del Home con 3 slides, auto-avance cada 6s, crossfade elegante y animaciones escalonadas.

### Características
- ✅ Crossfade suave entre slides
- ✅ Animación de entrada: texto con difuminado, imagen desde la derecha
- ✅ Auto-avance cada 6s + pausa al pasar el mouse
- ✅ Controles: flechas, dots alargados, swipe táctil
- ✅ Responsive: imágenes solo en desktop (≥1024px)
- ✅ Loop infinito sin rebobinado visible
- ✅ Accesible: ARIA roles, foco visible con teclado

### ¿Cómo cambiar los slides?
**Archivo:** `src/config/site.ts` → sección `heroSlides`

```typescript
heroSlides: [
  {
    eyebrow: "Texto pequeño arriba",
    title: "Título grande del slide",
    text: "Descripción breve",
    cta: "Texto del botón",
    url: "/pagina-destino",
    theme: "slide--print",  // slide--print | slide--install | slide--brand
    image: "/hero-print.png"  // Imagen en public/
  },
  // ... más slides
]

---

## 🃏 Componente: Benefits (Tarjetas de beneficios)

**Archivo:** `src/components/home/Benefits.astro`

### ¿Qué hace?
4 tarjetas horizontales que se superponen ligeramente al Hero (desktop/tablet) y quedan debajo en móvil.

### Características
- ✅ Diseño horizontal: ícono a la izquierda, texto a la derecha
- ✅ Hover con inversión de colores (blanco → azul noche)
- ✅ Responsive: 1 col móvil → 2 col tablet → 4 col desktop
- ✅ Superposición controlada por breakpoint (-60px desktop, -40px tablet, sin superposición móvil)

### ¿Cómo cambiar los beneficios?
**Archivo:** `src/config/site.ts` → sección `benefits`

```typescript
benefits: [
  {
    icon: "badge-check",   // Nombre del ícono Lucide
    title: "Título de la tarjeta",
    text: "Descripción breve"
  },
  // ... más tarjetas
]

---

## 🧩 Arquitectura de componentes reutilizables

### Estructura

### Principio aplicado: Separación de responsabilidades

| Componente | Responsabilidad única | Reutilizable para |
|---|---|---|
| `Carousel.astro` | Mecanismo de deslizar (track, indicadores, autoplay, swipe) | Cualquier carrusel |
| `SolutionCard.astro` | Diseño visual de la tarjeta | Cualquier contenedor |
| `Solutions.astro` | Componer la sección (header + carrusel + tarjetas) | — (específico del Home) |
| `scrollReveal.ts` | Animar elementos al entrar en viewport | Todas las secciones |

### Usar el Carousel en otra página

```astro
---
import Carousel from '../components/ui/Carousel.astro';
import ProductCard from '../components/cards/ProductCard.astro';
---

<Carousel id="products" itemsPerView={{ mobile: 1, tablet: 2, desktop: 4 }} autoplay={5000}>
  {products.map((p, i) => <ProductCard product={p} index={i} />)}
</Carousel>


---

## 🏷️ PASO: Tag v0.4.0 + Push a GitHub

```bash
git tag -a v0.4.0 -m "Arquitectura reutilizable: Carousel genérico + SolutionCard + scrollReveal"
git push
git push --tags


---

## 🛍️ CatalogShowcase (Home)

Slider promocional + 2 cards de producto, estilo e-commerce responsive.

### Sistema de alturas determinísticas

| Breakpoint | Slider | Cards | Layout |
|---|---|---|---|
| <480px | 240px | 170px | Apilado |
| 480-767px | 260px | 180px | Apilado |
| 768-960px | 300px | 190px | Cards lado a lado |
| 961-1279px | 340px | 160px | Fila 65/35 |
| 1280-1439px | 400px | 190px | Fila 65/35 |
| ≥1440px | 440px | 210px | Fila 65/35 |

> 🔑 **Regla de proporción:** `2 × card + gap = slider`. En desktop las alturas se calculan matemáticamente para que la grid nunca se rompa.

### Cómo ajustar alturas

Edita las variables en `CatalogShowcase.astro`:

```css
.catalog { --slider-h: 240px; --card-h: 170px; }

---

## 👥 AboutHome + SocialOrbit

### AboutHome (Home, después de Benefits)

- Sección de alto completo (`min-height: 100svh`).
- Coreografía secuencial calculada en build time (los delays se ajustan solos si editas el texto en `site.ts`):
  - **Desktop:** eyebrow → title+image → órbita (fade) → text → stats → cta
  - **Móvil:** eyebrow → title → text → stats → cta → image → órbita
- Texto y stats animados **palabra por palabra** (stagger 0.04s).
- Botón brochure con descarga directa (atributo `download`, archivo same-origin en `public/`).

### SocialOrbit (`src/components/ui/SocialOrbit.astro` — reutilizable)

- Anillo que rota 360° infinito (20s); los iconos **contra-rotan** para verse siempre derechos.
- Se pausa al hover en cualquier parte del componente.
- Cada logo es un link a la red social (nueva pestaña, `rel="noopener"`).
- Redes configuradas en `site.ts → socials`.

---

## 🔢 Guía de commits y versiones

### Tipos de commit (Conventional Commits)

| Tipo | Se usa cuando... | Ejemplo del proyecto |
|---|---|---|
| `feat` | Creas una funcionalidad nueva | `feat: CatalogShowcase...` |
| `fix` | Corriges un bug | `fix: alineación de stats` |
| `refactor` | Reestructuras sin cambiar lo visible | `refactor: Carousel genérico` |
| `docs` | Solo documentación | `docs: README` |

### Tags de versión (vMAJOR.MINOR.PATCH)

| Parte | Cuándo sube | Ejemplo |
|---|---|---|
| **MAJOR** (1.0.0) | Sitio completo en producción | Aún no |
| **MINOR** (v0.X.0) | Cada sección/funcionalidad completa | v0.8.0 → v0.9.0 |
| **PATCH** (v0.9.1) | Arreglos pequeños sin funcionalidad nueva | Si corriges un bug puntual |


--------------------------------
## 📏 Sistema de breakpoints oficiales

| Rango | Dispositivo | Uso típico |
|---|---|---|
| <480px | Móvil pequeño | Contenido apilado, tipografía reducida |
| 480-767px | Móvil grande | Cards lado a lado si aplica |
| 768-960px | Tablet | Layouts híbridos |
| 961-1279px | Laptop pequeña | Layout desktop compacto |
| 1280-1439px | Desktop | Layout completo |
| ≥1440px | Desktop grande | Máxima escala |

### Reglas de oro (responsive seguro)

1. **Alturas determinísticas:** usar variables CSS por breakpoint (`--slider-h`, `--card-h`, `--cta-h`).
2. **Proporción garantizada:** en layouts de fila, `2 × card + gap = slider`.
3. **Imágenes controladas:** `max-width: 100%` + `max-height: 100%` + `object-fit: contain` + `overflow: hidden` en el contenedor.
4. **Tipografía fluida:** `clamp(mín, preferido, máx)`.
5. **Nunca valores fijos sin límite:** evitar `width: 300px` puro; usar `min(100%, 300px)`.
6. **Grid para layouts 2D, Flex para alineación 1D.**
7. **Accesibilidad:** respetar `prefers-reduced-motion` en toda animación.

### Estructura de imágenes (regla permanente)

Toda imagen nueva va a `public/<sección>/<nombre-descriptivo>.ext`:
-------------------------------------
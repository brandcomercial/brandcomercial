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
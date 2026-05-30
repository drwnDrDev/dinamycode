# Diseño: Sub-páginas Servicios y Productos — DinamyCode

**Fecha:** 2026-04-16  
**Proyecto:** dinamycode.com  
**Stack:** HTML estático + Tailwind CSS + CSS custom (sin build tool)

---

## Objetivo

Ampliar el sitio con dos sub-páginas dedicadas para mejorar SEO y ampliar la información de oferta, incluyendo nuevos servicios de IA. Cada página hereda el mismo nav, footer y sistema de diseño del home.

---

## Estructura de archivos

```
dogfood/
├── index.html               ← home (modificado: nav actualizado)
├── servicios/
│   └── index.html           ← nueva
├── productos/
│   └── index.html           ← nueva
```

---

## Cambios al `index.html` existente

- Agregar links `/servicios/` y `/productos/` al nav (desktop).
- Las tarjetas de servicio con "Conocer más →" apuntan a `/servicios/`.
- Sin cambios de contenido en el resto del home.

---

## Página `/servicios/`

### Hero
- Fondo oscuro (`bg-ink`), compacto (no full-screen).
- Headline: `NUESTROS SERVICIOS`
- Subtítulo breve sobre la propuesta de valor.

### Grid de servicios
- 6 tarjetas, grid 2×3 desktop / 1 columna mobile.
- Misma estética `svc-card` del home, con contenido ampliado.
- Cada tarjeta: ícono + número, título, descripción (3-4 líneas), lista de 3-4 bullets, CTA WhatsApp.

### Agrupación visual (2 bloques con label)

**— SERVICIOS DIGITALES —**
1. Diseño Web
2. Desarrollo de Apps
3. Crecimiento Digital

**— INTELIGENCIA ARTIFICIAL —**
4. Chatbots / Asistentes con IA
5. Automatización de Procesos
6. Agentes Autónomos

### CTA final
- Banda roja idéntica a la del home.

### SEO
- `<title>`: "Servicios de Diseño Web, Apps e IA en Bogotá | DinamyCode"
- `<meta description>`: descripción de los 6 servicios.
- `<link rel="canonical">`: `https://dinamycode.com/servicios/`
- JSON-LD: `ItemList` con los 6 servicios.

---

## Página `/productos/`

### Hero intro
- Sección compacta oscura.
- Headline: `NUESTROS PRODUCTOS`
- Subtítulo: soluciones SaaS construidas por DinamyCode.

### Secciones de productos (una por producto, altura generosa)

Formato alternado desktop (texto ↔ imagen), vertical en mobile.

| # | Producto | Categoría | Fondo |
|---|----------|-----------|-------|
| 1 | Asambli | SaaS · Propiedad Horizontal | `bg-ink` |
| 2 | Lisapp | SaaS · Laboratorios Clínicos | `bg-paper` |
| 3 | FotoAleph | SaaS · Gestión de Eventos | `bg-ink-2` |

Cada sección incluye:
- Tag de categoría
- Nombre con `font-display` como headline grande
- Descripción 4-5 líneas
- 3-4 bullets de features clave
- CTA "Más información →" a WhatsApp
- Imagen/mockup del producto (placeholder si no existe)
- Layout espejo alternado: Asambli (texto izq, img der), Lisapp (img izq, texto der), FotoAleph (texto izq, img der)

### CTA final
- Banda roja idéntica a la del home.

### SEO
- `<title>`: "Productos SaaS — Asambli, Lisapp, FotoAleph | DinamyCode"
- `<meta description>`: descripción de los 3 productos.
- `<link rel="canonical">`: `https://dinamycode.com/productos/`
- JSON-LD: `ItemList` con los 3 productos como `SoftwareApplication`.

---

## Nav (compartido)

- Links actuales: `/#servicios`, `/#clientes`, `/#proceso`, `/#nosotros` (con `#` → `/#` en sub-páginas).
- Links nuevos: `/servicios/` y `/productos/`.
- Logo apunta a `/` en todas las páginas.
- Botón "Hablemos" mantiene WhatsApp.

---

## Footer (compartido)

- Sección "Navegación" agrega links a `/servicios/` y `/productos/`.
- Sin otros cambios.

---

## Decisiones técnicas

- **Enfoque A (HTML duplicado):** nav y footer se copian en cada archivo. Justificado para 3 páginas con stack HTML puro.
- **Rutas relativas:** usar rutas absolutas (`/css/`, `/js/`, `/img/`) para que funcionen desde sub-directorios.
- **Sin precios:** solo descripción + CTA.
- **CTA:** todos apuntan a `https://wa.me/573181252775`.

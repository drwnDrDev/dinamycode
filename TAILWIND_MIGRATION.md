# Tailwind local instalado

## Estado actual
- `tailwindcss` y `@tailwindcss/cli` quedaron instalados como dependencias de desarrollo.
- El proyecto ya compila Tailwind desde [`css/tailwind.css`](d:/dinamycode/dinamycode/css/tailwind.css).
- `index.html` ya carga [`css/tailwind.min.css`](d:/dinamycode/dinamycode/css/tailwind.min.css) en lugar del CDN.

## Comandos utiles
```bash
npm run build:tailwind
npm run dev:tailwind
```

## Archivos clave
- [`package.json`](d:/dinamycode/dinamycode/package.json)
- [`css/tailwind.css`](d:/dinamycode/dinamycode/css/tailwind.css)
- [`css/tailwind.min.css`](d:/dinamycode/dinamycode/css/tailwind.min.css)
- [`css/styles.min.css`](d:/dinamycode/dinamycode/css/styles.min.css)
- [`index.html`](d:/dinamycode/dinamycode/index.html)

## Notas
- La configuracion de colores y tipografias se definio usando `@theme`, que es el enfoque moderno de Tailwind 4.
- Si agregas nuevas clases en HTML o JS, vuelve a ejecutar `npm run build:tailwind`.
- Para desarrollo continuo, usa `npm run dev:tailwind` y Tailwind recompilara en cada cambio.

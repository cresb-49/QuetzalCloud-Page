# QuetzalCloud Consulting

Sitio institucional y propuesta académica de transformación digital para Financiera FINCA Honduras. Está construido con Nuxt 4, Vue 3, TypeScript y `@nuxt/content`; todo el contenido editorial vive en Markdown.

## Requisitos

- Node.js 20 o superior.
- pnpm 10 o superior.

## Instalación

```bash
pnpm install
```

## Desarrollo

```bash
pnpm dev
```

El sitio estará disponible en `http://localhost:3000`.

## Comprobaciones

```bash
pnpm typecheck
pnpm build
```

No hay pruebas automatizadas ni lint configurados todavía. La compilación de producción valida el renderizado SSR y la generación del bundle.

## Estructura

- `app/pages/`: rutas institucionales y capítulos de la propuesta.
- `app/components/`: marca, layout, tarjetas, estados y navegación reutilizable.
- `app/assets/css/main.css`: tokens visuales, responsive y accesibilidad.
- `content/empresa/`: identidad, servicios y quiénes somos.
- `content/propuesta/`: capítulos editoriales de FINCA con metadatos de estado y orden.
- `content.config.ts`: colecciones y validación del contenido Markdown.
- `public/`: favicon y recursos públicos.

## Completar capítulos

Edita el archivo correspondiente dentro de `content/propuesta/`:

1. `02-infraestructura-actual.md`: inventario y análisis técnico.
2. `03-servicios-demanda.md`: servicios, usuarios y métricas de demanda.
3. `04-solucion-cloud.md`: arquitectura, integraciones y seguridad.
4. `05-costos-planificacion.md`: costos, fases, responsables y cronograma.
5. `06-ventajas-limitantes.md`: beneficios, condiciones, limitaciones y conclusiones.

Conserva el frontmatter (`title`, `description`, `order`, `status` y `updatedAt`). Usa `completo`, `en-progreso` o `pendiente` como estados válidos. El contenido de contacto permanece pendiente hasta que el equipo defina los datos oficiales.

## Producción

```bash
pnpm build
pnpm preview
```

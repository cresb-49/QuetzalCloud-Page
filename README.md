# QuetzalCloud Consulting

Sitio institucional y propuesta académica de transformación digital para Financiera FINCA Honduras. Está construido con Nuxt 4, Vue 3, TypeScript, `@nuxt/content` y Tailwind CSS; todo el contenido editorial vive en Markdown.

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
pnpm format:check
pnpm build
```

No hay pruebas automatizadas ni lint configurados todavía. Prettier valida el formato del código y la compilación de producción valida el renderizado SSR y la generación del bundle.

## Formato

Formatea todos los archivos del proyecto con:

```bash
pnpm format
```

Comprueba el formato sin modificar archivos con:

```bash
pnpm format:check
```

## Estructura

- `app/pages/`: rutas institucionales y capítulos de la propuesta.
- `app/components/`: marca, layout, tarjetas, estados y navegación reutilizable.
- `app/assets/css/main.css`: capa de componentes y tokens visuales construida con Tailwind mediante `@apply`.
- `app/assets/css/tailwind.css`: entrada de Tailwind CSS.
- `content/empresa/`: identidad, servicios y quiénes somos.
- `content/propuesta/`: los tres capítulos editoriales publicados de FINCA con metadatos de estado y orden.
- `content.config.ts`: colecciones y validación del contenido Markdown.
- `tailwind.config.ts`: tokens reutilizables de color, tipografía y bordes.
- `public/`: favicon y recursos públicos.

## Completar capítulos

Edita el archivo correspondiente dentro de `content/propuesta/`:

1. `01-contexto-actual.md`: identidad, contexto, problema y necesidades.
2. `04-solucion-cloud.md`: arquitectura, integraciones y seguridad.
3. `06-ventajas-limitantes.md`: beneficios, condiciones, limitaciones y conclusiones.

Conserva el frontmatter (`title`, `description`, `order` y `updatedAt`). El contenido de contacto permanece pendiente hasta que el equipo defina los datos oficiales.

## Producción

```bash
pnpm build
pnpm preview
```

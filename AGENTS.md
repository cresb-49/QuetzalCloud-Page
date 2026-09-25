# AGENTS.md - QuetzalCloud Consulting

## 1. Propósito del proyecto

Este repositorio contiene el sitio web académico de **QuetzalCloud Consulting**, una empresa tecnológica enfocada en transformación digital, computación en la nube y modernización de sistemas empresariales.

El sitio debe cumplir dos objetivos:

1. Presentar la identidad, servicios y propuesta de valor de QuetzalCloud Consulting.
2. Publicar de forma ordenada el proyecto de transformación digital preparado para **Financiera FINCA Honduras**, dejando listas las secciones que todavía serán completadas por el equipo.

El idioma principal de toda la interfaz y el contenido es **español**.

## 2. Fuente de verdad del contenido

- El archivo `seccion_1_empresa_y_contexto_actual.md` contiene el contenido aprobado de la sección 1.
- No se debe cambiar el significado de ese documento ni inventar cifras, certificaciones, clientes, alianzas, testimonios o resultados.
- Se permiten correcciones menores de ortografía o adaptación del texto para tarjetas, encabezados y resúmenes, siempre que se conserve el sentido original.
- Para esta versión se autoriza publicar los siguientes datos de contacto de demostración proporcionados por el equipo: sitio web `quetzalcloud.vercel.app`, correo `contacto@quetzalcloudconsulting.com`, teléfono `+502 5555-0101`, ubicación Ciudad de Guatemala, Guatemala y horario de lunes a viernes, de 8:00 a 17:00 horas. No añadir otros datos de contacto.
- Los documentos `borrador_actividad_microservicios.md` y `propuesta_individual_microservicios.md` solo deben usarse si su información es pertinente y no contradice el proyecto FINCA.
- Cuando exista una contradicción entre archivos, detenerse y señalarla antes de decidir qué dato publicar.

## 3. Stack técnico

- Nuxt 4.
- Vue 3 con Composition API.
- TypeScript en modo estricto.
- Componentes con `<script setup lang="ts">`.
- `@nuxt/content` para que el contenido académico y la propuesta puedan mantenerse en Markdown.
- CSS propio con variables de diseño. Evitar añadir una biblioteca visual grande sin necesidad.
- Renderizado compatible con SSR y generación estática.
- Administrador de paquetes: respetar el archivo de bloqueo existente; si todavía no existe, usar `pnpm`.

Antes de añadir una dependencia, comprobar si Nuxt, Vue, CSS o una utilidad ya instalada resuelven el problema. Mantener el proyecto pequeño y fácil de ejecutar.

## 4. Estructura esperada

Seguir la estructura actual de Nuxt 4:

```text
app/
  assets/css/
  components/
    brand/
    layout/
    sections/
    ui/
  composables/
  layouts/
  pages/
    index.vue
    nosotros.vue
    servicios.vue
    contacto.vue
    propuesta/
      index.vue
      contexto.vue
      solucion-cloud.vue
      ventajas-limitaciones.vue
  app.vue
content/
  empresa/
  propuesta/
public/
nuxt.config.ts
content.config.ts
```

La estructura puede ajustarse cuando Nuxt o `@nuxt/content` lo requieran, pero debe mantenerse una separación clara entre componentes, páginas y contenido.

## 5. Arquitectura del contenido

No colocar párrafos extensos directamente dentro de los componentes Vue. Guardar el contenido editorial en `content/` y utilizar los componentes para presentación e interacción.

Crear, como mínimo, los siguientes contenidos:

```text
content/empresa/identidad.md
content/empresa/servicios.md
content/empresa/quienes-somos.md
content/propuesta/01-contexto-actual.md
content/propuesta/02-infraestructura-actual.md
content/propuesta/03-servicios-demanda.md
content/propuesta/04-solucion-cloud.md
content/propuesta/05-costos-planificacion.md
content/propuesta/06-ventajas-limitantes.md
```

Los documentos publicados de la propuesta utilizan únicamente estos metadatos:

```yaml
---
title: "Infraestructura actual"
description: "Análisis técnico de la operación actual de FINCA."
order: 2
updatedAt: "YYYY-MM-DD"
---
```

No añadir campos de estado al frontmatter ni mostrar estados en la interfaz. Las secciones que todavía no tengan información deben verse intencionalmente preparadas, no rotas ni llenas de texto ficticio.

## 6. Contenido obligatorio de QuetzalCloud

### Nombre y presentación

- Nombre: **QuetzalCloud Consulting**.
- Eslogan: **Tecnología que conecta, transforma y crece contigo.**
- Descripción: empresa tecnológica especializada en transformación digital, computación en la nube y modernización de sistemas empresariales. Ayuda a las organizaciones a operar de manera más eficiente, segura y escalable.

### Misión

Diseñar e implementar soluciones tecnológicas seguras, accesibles y escalables que permitan a las organizaciones modernizar sus procesos, mejorar la experiencia de sus clientes y aprovechar de forma eficiente la tecnología disponible.

### Visión

Ser una empresa tecnológica de referencia en Centroamérica para la transformación digital de organizaciones de servicios, reconocida por ofrecer soluciones confiables, innovadoras y alineadas con las necesidades reales de cada cliente.

### Valores

- Integridad.
- Seguridad.
- Innovación.
- Compromiso.
- Calidad.
- Inclusión.

### Objetivo general

Apoyar a las organizaciones en la evaluación, planificación y ejecución de proyectos de transformación digital mediante arquitecturas en la nube que reduzcan las limitaciones operativas y mejoren la prestación de servicios.

### Servicios

- Consultoría de infraestructura en la nube.
- Diseño de arquitecturas robustas.
- Migración y modernización de sistemas.
- Desarrollo de canales digitales.
- Seguridad y gestión de acceso.
- Análisis de datos.
- Continuidad del negocio y recuperación ante desastres.
- Capacitación y soporte técnico.

### Quiénes somos

Presentar a QuetzalCloud como un equipo multidisciplinario de consultores en tecnología, infraestructura, desarrollo de software, bases de datos y seguridad informática. Explicar que el trabajo parte del análisis de procesos, usuarios, sistemas y restricciones, y que las soluciones buscan una transición gradual, segura y sostenible.

## 7. Contenido obligatorio del caso FINCA

La página de contexto debe presentar, sin alterar las cifras:

- FINCA Honduras es una institución financiera no bancaria autorizada para recibir depósitos y regulada por la CNBS.
- Su enfoque es atender a emprendedores y personas de bajos ingresos.
- Inició su transformación en entidad financiera en 2007 y abrió su primera sucursal en Choluteca en junio de 2008.
- El caso indica una sede central en Tegucigalpa, catorce sucursales y casi 35,000 clientes.
- Ofrece banca comunal tradicional, crédito grupal solidario, crédito individual, cuentas de ahorro, depósitos a plazo fijo y seguros.
- El grupo de ingresos más numeroso contiene 16,814 clientes con ingresos anuales entre L 0.01 y L 165,482.06.
- Su sitio actual es principalmente informativo y el chat es atendido por un grupo limitado de empleados.
- No existe un portal transaccional de autoservicio para consultar saldos, movimientos y otras operaciones.
- Se registran aproximadamente 32,045 consultas mensuales de saldos y movimientos de clientes individuales; se estima que el 95 % puede automatizarse.

### Problema que debe comunicar el sitio

La demanda creciente supera la capacidad de atención manual. Esto provoca sobrecarga del personal, dependencia de agencias y horarios, tiempos de respuesta mayores, acceso limitado fuera de las ciudades y subutilización de los datos existentes.

### Necesidades que debe comunicar el sitio

- Portal web.
- Automatización de operaciones frecuentes.
- Integración con los sistemas existentes, incluido ODA.
- Escalabilidad y alta disponibilidad.
- Seguridad, privacidad y resguardo de información.
- Mejora de la atención al cliente.
- Accesibilidad en dispositivos móviles.
- Implementación gradual.
- Aprovechamiento del Internet dedicado.
- Cumplimiento regulatorio.

## 8. Organización de la propuesta

El área **Propuesta para FINCA** debe ofrecer una navegación visible y consistente entre tres secciones:

1. Empresa y contexto actual.
2. Propuesta de solución cloud.
3. Ventajas y conclusiones.

Cada sección debe permitir agregar texto, tablas, métricas, diagramas, imágenes y referencias. Usar componentes reutilizables como:

- `SectionHeader`.
- `MetricCard`.
- `ServiceCard`.
- `ValueCard`.
- `ContentNavigation`.
- `CalloutBox`.
- `DataTable`.
- `ArchitectureDiagram` o un contenedor equivalente para futuros diagramas.

La propuesta cloud ya está publicada en `content/propuesta/04-solucion-cloud.md`. Presentar sus servicios de forma funcional, sin exponer endpoints, métodos HTTP, parámetros, tokens ni otros detalles internos de API. No inventar costos o cronogramas que no hayan sido proporcionados por el equipo.

Los diagramas de la solución se mantienen como recursos públicos en `public/image4.png` y `public/image5.png`. Toda imagen informativa nueva debe incluir texto alternativo.

## 9. Diseño visual

La identidad debe transmitir tecnología, confianza, cercanía regional y seguridad financiera.

### Paleta sugerida

- Verde quetzal oscuro: `#0B3D2E`.
- Verde principal: `#087F5B`.
- Verde claro: `#DFF5EA`.
- Azul nube: `#2F6FED`.
- Fondo claro: `#F7FAF9`.
- Texto principal: `#14231D`.
- Texto secundario: `#52615B`.
- Blanco: `#FFFFFF`.

Definir estos valores como variables CSS semánticas; no repetir colores hexadecimales en cada componente.

### Reglas visuales

- Diseño profesional, moderno y sobrio.
- Evitar una apariencia genérica de plantilla.
- Usar espacio en blanco, jerarquía tipográfica clara y tarjetas discretas.
- La página de inicio debe tener un hero con el nombre, eslogan, descripción breve y llamadas a la acción hacia Servicios y Propuesta FINCA.
- Incorporar motivos visuales sutiles inspirados en nube, conectividad y el quetzal, sin depender de imágenes externas.
- Si no existe logotipo, crear una marca tipográfica simple o un símbolo CSS/SVG original. No copiar marcas existentes.
- Animaciones breves y respetuosas de `prefers-reduced-motion`.
- No usar carruseles automáticos, fondos recargados ni animaciones que dificulten la lectura.

## 10. Navegación y experiencia

La navegación principal debe incluir:

- Inicio.
- Nosotros.
- Servicios.
- Propuesta FINCA.
- Contacto.

Requisitos:

- Encabezado adaptable con menú móvil accesible.
- Indicación visual de la ruta activa.
- Pie de página con marca, navegación secundaria y aviso de proyecto académico.
- Enlaces de salto al contenido.
- Breadcrumbs dentro de la propuesta.
- Navegación anterior/siguiente entre secciones.
- Estados de foco visibles y navegación completa mediante teclado.

## 11. Calidad, accesibilidad y SEO

- Usar HTML semántico: `header`, `nav`, `main`, `section`, `article`, `aside` y `footer` según corresponda.
- Mantener un solo `h1` por página y una jerarquía correcta de encabezados.
- Cumplir como mínimo WCAG 2.1 AA en contraste, teclado y nombres accesibles.
- Todas las imágenes informativas deben tener texto alternativo.
- No usar texto dentro de imágenes para contenido esencial.
- Añadir títulos, descripciones, Open Graph básico, favicon, `robots.txt` y `sitemap` cuando corresponda.
- Evitar saltos de diseño y recursos pesados.
- No exponer secretos ni colocar credenciales en el cliente.
- No afirmar que el portal implementa operaciones bancarias reales: este sitio presenta una propuesta académica.

## 12. Convenciones de código

- Componentes en PascalCase.
- Composables con prefijo `use`.
- Variables y funciones en camelCase.
- Tipos explícitos para estructuras compartidas.
- Evitar `any`; justificarlo si es imprescindible.
- Mantener componentes pequeños y con una responsabilidad clara.
- Extraer contenido repetido y datos estructurados.
- No duplicar navegación, metadatos ni listas entre páginas.
- No editar archivos generados dentro de `.nuxt/` o `.output/`.
- No silenciar errores de TypeScript, lint o compilación para terminar más rápido.

## 13. Verificación obligatoria

Antes de declarar terminado un cambio:

1. Instalar las dependencias necesarias.
2. Ejecutar la comprobación de tipos.
3. Ejecutar lint si está configurado.
4. Ejecutar las pruebas disponibles.
5. Ejecutar la compilación de producción.
6. Revisar las rutas principales en escritorio y móvil.
7. Confirmar que no existen enlaces rotos, errores de consola ni contenido inventado.
8. Confirmar que la sección de contacto sigue claramente pendiente si el equipo no ha proporcionado datos.

Si algún comando no puede ejecutarse, informar exactamente cuál y por qué.

## 14. Criterios de aceptación iniciales

La primera versión se considera completa cuando:

- El proyecto Nuxt se ejecuta y compila sin errores.
- La identidad completa de QuetzalCloud está publicada.
- La información aprobada del contexto FINCA está publicada.
  - Las rutas principales y las tres secciones publicadas funcionan.
  - Las secciones pendientes muestran una estructura útil para agregar contenido.
- La interfaz es adaptable, accesible y coherente.
- El contenido está separado de la presentación y puede editarse desde Markdown.
- Existe un README con instalación, desarrollo, compilación y forma de agregar nuevos contenidos.

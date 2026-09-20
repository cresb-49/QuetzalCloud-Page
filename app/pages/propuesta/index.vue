<script setup lang="ts">
useSeoMeta({ title: 'Propuesta FINCA · QuetzalCloud', description: 'Proyecto académico de transformación digital para Financiera FINCA Honduras.' })
const chapters = [{ number: '01', title: 'Empresa y contexto actual', description: 'Identidad de QuetzalCloud, contexto de FINCA, problema y necesidades.', to: '/propuesta/contexto', status: 'completo' as const }, { number: '02', title: 'Infraestructura actual', description: 'Inventario, dependencias y hallazgos técnicos.', to: '/propuesta/infraestructura', status: 'pendiente' as const }, { number: '03', title: 'Análisis de servicios y demanda', description: 'Servicios, usuarios, volúmenes y prioridades.', to: '/propuesta/demanda', status: 'pendiente' as const }, { number: '04', title: 'Propuesta de solución cloud', description: 'Arquitectura, integraciones y estrategia de implementación.', to: '/propuesta/solucion-cloud', status: 'pendiente' as const }, { number: '05', title: 'Costos y planificación', description: 'Fases, recursos, entregables y estimaciones.', to: '/propuesta/costos-planificacion', status: 'pendiente' as const }, { number: '06', title: 'Ventajas, limitaciones y conclusiones', description: 'Beneficios, condiciones de éxito y recomendaciones.', to: '/propuesta/ventajas-limitaciones', status: 'pendiente' as const }]
</script>

<template><div><section class="page-intro"><div class="container"><SectionHeader eyebrow="Proyecto académico · FINCA Honduras" title="Una transformación pensada desde el contexto." description="Esta propuesta organiza el análisis y las fases necesarias para acercar servicios financieros digitales a más personas." /></div></section><section class="section"><div class="container"><div class="proposal-layout"><ProposalNav /><div><div class="section-header"><p class="eyebrow">Seis capítulos</p><h2>Un camino claro para seguir construyendo.</h2><p>Cada capítulo está preparado para incorporar texto, tablas, métricas, diagramas, imágenes y referencias a medida que avance el equipo.</p></div><div class="chapter-list"><NuxtLink v-for="chapter in chapters" :key="chapter.to" :to="chapter.to" class="chapter-card"><span class="chapter-index">{{ chapter.number }}</span><div><h3>{{ chapter.title }}</h3><p>{{ chapter.description }}</p></div><div class="chapter-meta"><StatusBadge :status="chapter.status" /><span aria-hidden="true">↗</span></div></NuxtLink></div></div></div></div></section></div></template>

<style scoped>
.chapter-list { display: grid; gap: 12px; }
.chapter-card { display: grid; grid-template-columns: 55px 1fr auto; gap: 20px; align-items: center; padding: 24px; border: 1px solid var(--color-line); background: var(--color-white); border-radius: 14px; transition: transform .2s ease, border-color .2s ease; }
.chapter-card:hover { border-color: var(--color-primary); transform: translateX(4px); }
.chapter-index { color: var(--color-primary); font-family: 'Manrope'; font-size: 1.4rem; }
.chapter-card h3 { margin: 0 0 6px; }
.chapter-card p { margin: 0; font-size: .88rem; }
.chapter-meta { display: flex; align-items: center; gap: 16px; }.chapter-meta > span:last-child { color: var(--color-primary); font-size: 1.3rem; }
@media (max-width: 600px) { .chapter-card { grid-template-columns: 40px 1fr; }.chapter-meta { grid-column: 2; }.chapter-card { padding: 18px; } }
</style>

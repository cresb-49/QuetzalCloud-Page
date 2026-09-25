<script setup lang="ts">
useSeoMeta({
  title: 'Propuesta FINCA · QuetzalCloud',
  description: 'Proyecto académico de transformación digital para Financiera FINCA Honduras.'
})
const chapters = [
  {
    number: '01',
    title: 'Contexto de la organización',
    description: 'Identidad de QuetzalCloud, contexto de FINCA, problema y necesidades.',
    to: '/propuesta/contexto'
  },
  {
    number: '02',
    title: 'Propuesta de solución cloud',
    description: 'Arquitectura, integraciones y estrategia de implementación.',
    to: '/propuesta/solucion-cloud'
  },
  {
    number: '03',
    title: 'Ventajas, limitaciones y conclusiones',
    description: 'Beneficios, condiciones de éxito y recomendaciones.',
    to: '/propuesta/ventajas-limitaciones'
  }
]
</script>

<template>
  <div>
    <section class="page-intro">
      <div class="container">
        <SectionHeader
          eyebrow="Proyecto académico · FINCA Honduras"
          title="Una transformación pensada desde el contexto."
          description="Esta propuesta organiza el análisis y las fases necesarias para acercar servicios financieros digitales a más personas."
        />
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="proposal-layout">
          <ProposalNav />
          <div>
            <div class="section-header">
              <p class="eyebrow">Propuesta FINCA</p>
              <h2>Un camino claro para seguir construyendo.</h2>
              <p>
                La propuesta está preparada para incorporar texto, tablas, métricas, diagramas,
                imágenes y referencias a medida que avance el equipo.
              </p>
            </div>
            <div class="chapter-list">
              <NuxtLink
                v-for="chapter in chapters"
                :key="chapter.to"
                :to="chapter.to"
                class="chapter-card"
                ><span class="chapter-index">{{ chapter.number }}</span>
                <div>
                  <h3>{{ chapter.title }}</h3>
                  <p>{{ chapter.description }}</p>
                </div>
                <div class="chapter-meta"><span aria-hidden="true">↗</span></div></NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

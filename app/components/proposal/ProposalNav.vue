<script setup lang="ts">
const route = useRoute()
const chapters = [
  { number: '01', title: 'Empresa y contexto actual', to: '/propuesta/contexto' },
  { number: '02', title: 'Infraestructura actual', to: '/propuesta/infraestructura' },
  { number: '03', title: 'Servicios y demanda', to: '/propuesta/demanda' },
  { number: '04', title: 'Solución cloud', to: '/propuesta/solucion-cloud' },
  { number: '05', title: 'Costos y planificación', to: '/propuesta/costos-planificacion' },
  { number: '06', title: 'Ventajas y conclusiones', to: '/propuesta/ventajas-limitaciones' }
]
</script>

<template>
  <nav class="proposal-nav" aria-label="Capítulos de la propuesta">
    <p class="footer-label">Contenido de la propuesta</p>
    <NuxtLink v-for="chapter in chapters" :key="chapter.to" :to="chapter.to" :class="{ active: route.path === chapter.to }">
      <span>{{ chapter.number }}</span>{{ chapter.title }}<b aria-hidden="true">↗</b>
    </NuxtLink>
  </nav>
</template>

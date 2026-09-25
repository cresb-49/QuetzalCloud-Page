<script setup lang="ts">
const route = useRoute()
const chapters = [
  { number: '01', title: 'Contexto de la organizacion', to: '/propuesta/contexto' },
  { number: '02', title: 'Solución cloud', to: '/propuesta/solucion-cloud' },
  { number: '03', title: 'Ventajas y conclusiones', to: '/propuesta/ventajas-limitaciones' }
]
</script>

<template>
  <nav class="proposal-nav" aria-label="Secciones de la propuesta">
    <p class="footer-label">Contenido de la propuesta</p>
    <NuxtLink
      v-for="chapter in chapters"
      :key="chapter.to"
      :to="chapter.to"
      :class="{ active: route.path === chapter.to }"
    >
      <span>{{ chapter.number }}</span
      >{{ chapter.title }}<b aria-hidden="true">↗</b>
    </NuxtLink>
  </nav>
</template>

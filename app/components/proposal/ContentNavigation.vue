<script setup lang="ts">
defineProps<{ previous?: { title: string; to: string }; next?: { title: string; to: string } }>()
</script>

<template>
  <nav class="content-navigation" aria-label="Navegación entre capítulos">
    <NuxtLink v-if="previous" :to="previous.to" class="chapter-link previous"
      ><span>← Anterior</span><strong>{{ previous.title }}</strong></NuxtLink
    >
    <span v-else />
    <NuxtLink v-if="next" :to="next.to" class="chapter-link next"
      ><span>Siguiente →</span><strong>{{ next.title }}</strong></NuxtLink
    >
  </nav>
</template>

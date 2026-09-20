<script setup lang="ts">
const previous = { title: 'Contexto de la organización', to: '/propuesta/contexto' }
const next = { title: 'Ventajas y conclusiones', to: '/propuesta/ventajas-limitaciones' }
</script>
<template>
  <ProposalChapter source="/propuesta/04-solucion-cloud" :previous="previous" :next="next" />
</template>

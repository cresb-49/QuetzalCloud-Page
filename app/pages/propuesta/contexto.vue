<script setup lang="ts">
const previous = undefined
const next = { title: 'Solución cloud', to: '/propuesta/solucion-cloud' }
</script>
<template>
  <ProposalChapter source="/propuesta/01-contexto-actual" :previous="previous" :next="next" />
</template>

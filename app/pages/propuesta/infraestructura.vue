<script setup lang="ts">
const previous = { title: 'Empresa y contexto actual', to: '/propuesta/contexto' }
const next = { title: 'Servicios y demanda', to: '/propuesta/demanda' }
</script>
<template><ProposalChapter source="/propuesta/02-infraestructura-actual" :previous="previous" :next="next" /></template>

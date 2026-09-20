<script setup lang="ts">
const props = defineProps<{ status: 'completo' | 'en-progreso' | 'pendiente' }>()
const labels = { completo: 'Completo', 'en-progreso': 'En progreso', pendiente: 'Pendiente' }
</script>

<template><span class="status-badge" :class="`status-${props.status}`"><i />{{ labels[props.status] }}</span></template>

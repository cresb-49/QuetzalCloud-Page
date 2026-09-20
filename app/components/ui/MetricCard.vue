<script setup lang="ts">
defineProps<{
  value: string
  label: string
  detail?: string
}>()
</script>

<template><article class="metric-card"><strong>{{ value }}</strong><span>{{ label }}</span><small v-if="detail">{{ detail }}</small></article></template>

<script setup lang="ts">
defineProps<{
  number: string
  title: string
  text: string
}>()
</script>

<template><article class="service-card"><span class="service-number">{{ number }}</span><h3>{{ title }}</h3><p>{{ text }}</p><span class="card-arrow" aria-hidden="true">↗</span></article></template>

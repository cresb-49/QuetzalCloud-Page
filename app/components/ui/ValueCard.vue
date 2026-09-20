<script setup lang="ts">
defineProps<{
  title: string
  text: string
}>()
</script>

<template>
  <article class="value-card">
    <span class="value-dot" aria-hidden="true" />
    <h3>{{ title }}</h3>
    <p>{{ text }}</p>
  </article>
</template>

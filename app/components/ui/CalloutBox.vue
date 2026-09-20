<script setup lang="ts">
defineProps<{
  title: string
  tone?: 'green' | 'blue'
}>()
</script>

<template>
  <aside class="callout-box" :class="`callout-${tone || 'green'}`">
    <span class="callout-icon" aria-hidden="true">✦</span>
    <div>
      <h3>{{ title }}</h3>
      <p><slot /></p>
    </div>
  </aside>
</template>

<script setup lang="ts">
const props = defineProps<{ source: string; previous?: { title: string; to: string }; next?: { title: string; to: string } }>()
const { data: page } = await useAsyncData(`proposal-${props.source}`, () => queryCollection('propuesta').path(props.source).first())

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Capítulo no encontrado' })
}

useSeoMeta({
  title: () => `${page.value?.title || 'Propuesta'} · QuetzalCloud`,
  description: () => page.value?.description || 'Propuesta académica para FINCA Honduras.'
})
</script>

<template>
  <section class="section">
    <div class="container proposal-layout">
      <ProposalNav />
      <article v-if="page" class="proposal-content">
        <nav class="breadcrumb" aria-label="Migas de pan"><NuxtLink to="/">Inicio</NuxtLink><span>/</span><NuxtLink to="/propuesta">Propuesta FINCA</NuxtLink><span>/</span><span aria-current="page">{{ page.title }}</span></nav>
        <header class="chapter-heading">
          <div><p class="eyebrow">Capítulo {{ String(page.order).padStart(2, '0') }}</p><h1>{{ page.title }}</h1><p>{{ page.description }}</p></div>
          <StatusBadge :status="page.status" />
        </header>
        <div class="prose"><ContentRenderer :value="page" /></div>
        <ContentNavigation :previous="previous" :next="next" />
      </article>
    </div>
  </section>
</template>

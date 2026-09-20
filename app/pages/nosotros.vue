<script setup lang="ts">
const { data: identity } = await useAsyncData('identity', () => queryCollection('empresa').path('/empresa/identidad').first())
const { data: people } = await useAsyncData('people', () => queryCollection('empresa').path('/empresa/quienes-somos').first())
useSeoMeta({ title: 'Nosotros · QuetzalCloud', description: 'Conoce la misión, visión y forma de trabajar de QuetzalCloud Consulting.' })
const values = [{ title: 'Integridad', text: 'Actuar con transparencia y responsabilidad en el manejo de información y recursos.' }, { title: 'Seguridad', text: 'Proteger la confidencialidad, integridad y disponibilidad de los datos.' }, { title: 'Innovación', text: 'Aplicar tecnologías modernas para resolver problemas concretos.' }, { title: 'Compromiso', text: 'Acompañar al cliente durante todas las etapas del proyecto.' }, { title: 'Calidad', text: 'Entregar soluciones estables, documentadas y medibles.' }, { title: 'Inclusión', text: 'Promover tecnología accesible que amplíe el alcance de los servicios.' }]
</script>

<template>
  <div><section class="page-intro"><div class="container"><SectionHeader eyebrow="Quiénes somos" title="Experiencia técnica con una mirada cercana." description="Somos un equipo multidisciplinario que convierte necesidades operativas en proyectos realizables." /></div></section><section class="section"><div class="container split"><div><p class="eyebrow">Nuestro propósito</p><h2>La transformación comienza entendiendo el contexto.</h2></div><div class="prose"><ContentRenderer v-if="people" :value="people" /><ContentRenderer v-if="identity" :value="identity" /></div></div></section><section class="section section-tinted"><div class="container"><div class="section-header"><p class="eyebrow">Lo que nos guía</p><h2>Valores que se convierten en decisiones.</h2></div><div class="value-grid"><ValueCard v-for="value in values" :key="value.title" v-bind="value" /></div></div></section></div>
</template>

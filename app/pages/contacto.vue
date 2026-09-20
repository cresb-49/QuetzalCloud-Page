<script setup lang="ts">
const { data: contact } = await useAsyncData('contact', () =>
  queryCollection('empresa').path('/empresa/contacto').first()
)

useSeoMeta({
  title: 'Contacto · QuetzalCloud',
  description: 'Canales de contacto de QuetzalCloud Consulting.'
})
</script>

<template>
  <section class="section">
    <div class="container">
      <SectionHeader
        eyebrow="Contacto"
        title="Hablemos de tu próximo avance."
        description="Encuentra los canales oficiales de QuetzalCloud Consulting."
      />
      <div class="contact-card">
        <ContentRenderer v-if="contact" class="contact-prose prose" :value="contact" />
      </div>
    </div>
  </section>
</template>

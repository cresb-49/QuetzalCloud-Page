<script setup lang="ts">
const { data: content } = await useAsyncData('services', () =>
  queryCollection('empresa').path('/empresa/servicios').first()
)
useSeoMeta({
  title: 'Servicios · QuetzalCloud',
  description: 'Servicios de nube, arquitectura, modernización, seguridad, datos y soporte técnico.'
})
const services = [
  {
    title: 'Consultoría de infraestructura en la nube',
    text: 'Evaluación y selección de servicios cloud según las necesidades técnicas, operativas y financieras.',
    number: '01'
  },
  {
    title: 'Diseño de arquitecturas robustas',
    text: 'Soluciones escalables, disponibles y seguras para aplicaciones y sistemas de información.',
    number: '02'
  },
  {
    title: 'Migración y modernización de sistemas',
    text: 'Planes para integrar sistemas locales con plataformas modernas y mantener la continuidad.',
    number: '03'
  },
  {
    title: 'Desarrollo de canales digitales',
    text: 'Canales digitales para consultar información, realizar operaciones autorizadas e integrar sistemas.',
    number: '04'
  },
  {
    title: 'Seguridad y gestión de acceso',
    text: 'Autenticación, autorización, cifrado, auditoría y protección de datos sensibles.',
    number: '05'
  },
  {
    title: 'Análisis de datos',
    text: 'Estudio de usuarios y transacciones para identificar automatización sostenible.',
    number: '06'
  },
  {
    title: 'Continuidad y recuperación',
    text: 'Respaldos, redundancia y procedimientos de recuperación de servicios.',
    number: '07'
  },
  {
    title: 'Capacitación y soporte técnico',
    text: 'Formación, documentación y acompañamiento posterior a la implementación.',
    number: '08'
  }
]
</script>

<template>
  <div>
    <section class="page-intro">
      <div class="container">
        <SectionHeader
          eyebrow="Servicios"
          title="Capacidades para modernizar con confianza."
          description="Acompañamos la evaluación, planificación y ejecución de proyectos de transformación digital."
        />
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="card-grid">
          <ServiceCard v-for="service in services" :key="service.number" v-bind="service" />
        </div>
        <div class="sr-only"><ContentRenderer v-if="content" :value="content" /></div>
      </div>
    </section>
  </div>
</template>

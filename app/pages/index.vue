<script setup lang="ts">
useSeoMeta({
  title: 'QuetzalCloud Consulting',
  description: 'Tecnología que conecta, transforma y crece contigo.',
  ogTitle: 'QuetzalCloud Consulting',
  ogDescription: 'Transformación digital, nube y modernización de sistemas empresariales.'
})
</script>

<template>
  <div>
    <section class="hero">
      <div class="container hero-grid">
        <div>
          <p class="eyebrow">Transformación digital · Centroamérica</p>
          <h1>Tecnología que <em>conecta,</em> transforma y crece contigo.</h1>
          <p class="hero-lead">
            Ayudamos a las organizaciones a operar de manera más eficiente, segura y escalable a
            través de la nube y la modernización de sus sistemas.
          </p>
          <div class="button-row">
            <NuxtLink class="button button-primary" to="/servicios"
              >Conoce nuestros servicios <span>↗</span></NuxtLink
            ><NuxtLink class="button button-secondary" to="/propuesta"
              >Ver propuesta FINCA</NuxtLink
            >
          </div>
        </div>
        <div class="hero-visual" aria-hidden="true">
          <div class="visual-cloud" />
          <div class="visual-line" />
          <div class="hero-orbit" />
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container split">
        <h2>Soluciones con propósito, construidas para avanzar.</h2>
        <div>
          <p>
            La tecnología debe resolver problemas concretos. Combinamos análisis, experiencia
            técnica y acompañamiento para convertir necesidades operativas en proyectos realizables.
          </p>
          <NuxtLink class="text-link" to="/nosotros"
            >Conoce nuestra forma de trabajar <span>→</span></NuxtLink
          >
        </div>
      </div>
    </section>
    <section class="section section-tinted">
      <div class="container">
        <div class="section-header">
          <p class="eyebrow">Cómo ayudamos</p>
          <h2>Capacidades para cada etapa del cambio.</h2>
        </div>
        <div class="card-grid">
          <ServiceCard
            number="01"
            title="Nube e infraestructura"
            text="Evaluación, diseño y modernización de plataformas seguras y escalables."
          /><ServiceCard
            number="02"
            title="Canales digitales"
            text="Experiencias digitales que acercan los servicios a las personas."
          /><ServiceCard
            number="03"
            title="Seguridad y continuidad"
            text="Controles, respaldo y recuperación para operar con confianza."
          />
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container callout-box callout-green">
        <span class="callout-icon" aria-hidden="true">✦</span>
        <div>
          <h3>Una propuesta de transformación para Financiera FINCA Honduras.</h3>
          <p>
            Explora el contexto aprobado y la estructura preparada para los siguientes capítulos del
            proyecto.
          </p>
          <NuxtLink class="text-link" to="/propuesta"
            >Explorar la propuesta <span>→</span></NuxtLink
          >
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.text-link {
  display: inline-flex;
  gap: 10px;
  margin-top: 16px;
  color: var(--color-primary);
  font-weight: 700;
}
.text-link span {
  transition: transform 0.2s ease;
}
.text-link:hover span {
  transform: translateX(4px);
}
</style>

<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <BrandLockup />
        <p class="footer-copy">Tecnología que conecta, transforma y crece contigo.</p>
      </div>
      <div>
        <p class="footer-label">Explora</p>
        <nav class="footer-links" aria-label="Navegación secundaria">
          <NuxtLink to="/nosotros">Nosotros</NuxtLink>
          <NuxtLink to="/servicios">Servicios</NuxtLink>
          <NuxtLink to="/propuesta">Propuesta FINCA</NuxtLink>
          <NuxtLink to="/contacto">Contacto</NuxtLink>
        </nav>
      </div>
      <div class="footer-note">
        <p><strong>Proyecto académico</strong></p>
        <p>La propuesta para FINCA se presenta con fines académicos y no constituye un portal bancario operativo.</p>
      </div>
    </div>
    <div class="container footer-bottom"><span>© {{ new Date().getFullYear() }} QuetzalCloud Consulting</span><span>Honduras · Centroamérica</span></div>
  </footer>
</template>

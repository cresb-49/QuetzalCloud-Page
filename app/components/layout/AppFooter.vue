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
    </div>
    <div class="container footer-bottom">
      <span>© {{ new Date().getFullYear() }} QuetzalCloud Consulting</span
      ><span>Guatemala · Centroamérica</span>
    </div>
  </footer>
</template>

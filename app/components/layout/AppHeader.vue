<script setup lang="ts">
const isOpen = ref(false)
const route = useRoute()

const links = [
  { label: 'Inicio', to: '/' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Propuesta FINCA', to: '/propuesta' },
  { label: 'Contacto', to: '/contacto' }
]

const isActive = (to: string) => (to === '/' ? route.path === '/' : route.path.startsWith(to))
const closeMenu = () => {
  isOpen.value = false
}
</script>

<template>
  <header class="site-header">
    <div class="container header-inner">
      <BrandLockup />
      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="isOpen"
        aria-controls="main-navigation"
        @click="isOpen = !isOpen"
      >
        <span class="sr-only">{{ isOpen ? 'Cerrar menú' : 'Abrir menú' }}</span>
        <span class="menu-icon" aria-hidden="true"><i /><i /></span>
      </button>
      <nav
        id="main-navigation"
        class="main-navigation"
        :class="{ 'is-open': isOpen }"
        aria-label="Navegación principal"
      >
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          :class="{ active: isActive(link.to) }"
          :aria-current="isActive(link.to) ? 'page' : undefined"
          @click="closeMenu"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

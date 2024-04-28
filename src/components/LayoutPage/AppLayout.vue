<template >
  <div class="d-flex flex-column w-full bg-main">
    <Navbar />
  <main>
    <slot />
  </main>

  <Footer />

  </div>
  
 
</template>

<script setup>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
</script>

<style scoped>

.bg-main{
  background-color: var(--primary-background);
}
</style>
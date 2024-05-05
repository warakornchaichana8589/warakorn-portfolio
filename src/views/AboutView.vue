<template>
  <AppLayout>
    <div class="container p-5 mx-auto">
      <h1>About Page</h1>
    </div>
    
  </AppLayout>
</template>
<script setup>
import AppLayout from '@/components/LayoutPage/AppLayout.vue'
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

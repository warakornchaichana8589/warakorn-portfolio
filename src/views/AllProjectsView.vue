<template>
  <AppLayout>
    <div class="container p-5 mx-auto">
      <h1>ALL PROJECTS</h1>
      <div class="w-full h-full">
        <div class="mockup-window border border-base-300">
          <div class="flex justify-center px-4 py-10 border-t border-base-300">
    
            <img :src="'@/assets/images/'+capturedImage" alt="Webpage Screenshot" />
         
          </div>
        </div>
      </div>
      <div class="join">
        <button class="join-item btn">1</button>
        <button class="join-item btn btn-active">2</button>
        <button class="join-item btn">3</button>
        <button class="join-item btn">4</button>
      </div>
    </div>
  </AppLayout>
</template>

<script setup>
import AppLayout from "../components/LayoutPage/AppLayout.vue";

const capturedImage = 'solace.png';
</script>

<template>
  <AppLayout>
    <div class="container p-5 mx-auto">
      <h1 class="h1 text-2xl font-bold mb-3">ALL PROJECTS</h1>
      <div class="w-full h-full grid grid-cols-3 gap-4">
        <RouterLink class="hover:backdrop-saturate-50" v-for="(item, index) in 6" :key="index">
          <div class="mockup-window border border-base-300 hover:bg-gray-100">
          <div class="flex justify-center px-2 py-2 border-t border-base-300 ">
            <img src="@/assets/images/solace.png" alt="Webpage Screenshot" />
          </div>
        </div>
        </RouterLink>
        
      </div>
      <div class="w-full flex justify-center mt-10 mb-5">
        <div class="join">
        <button class="join-item btn">1</button>
        <button class="join-item btn btn-active">2</button>
        <button class="join-item btn">3</button>
        <button class="join-item btn">4</button>
      </div>
      </div>
    
    </div>
  </AppLayout>
</template>

<script setup>
import AppLayout from "../components/LayoutPage/AppLayout.vue";

</script>

<template>
  <AppLayout>
    <div class="container p-5 mx-auto">
      <h1>ALL PROJECTS</h1>
      <div class="w-full h-full grid grid-cols-3 gap-4">
        <RouterLink class="hover:backdrop-saturate-50" v-for="(item, index) in 6" :key="index">
          <div class="mockup-window border border-base-300">
          <div class="flex justify-center px-2 py-2 border-t border-base-300 ">
            <img src="@/assets/images/solace.png" alt="Webpage Screenshot" />
          </div>
        </div>
        </RouterLink>
        
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

</script>

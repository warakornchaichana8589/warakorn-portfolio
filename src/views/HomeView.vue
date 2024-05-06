

<template>
  <AppLayout>
    <div class="container p-5 mx-auto">
      <h1>HOME PAGE</h1>
      <button @click="showAlert">Show Alert</button>
    <button @click="hideAlert">Hide Alert</button>
    </div>
  </AppLayout>
</template>
<script setup>
import AppLayout from "@/components/LayoutPage/AppLayout.vue";
import { useAlertStore } from '@/stores/Action'
const alertStore = useAlertStore();
const showAlert = () => {
  alertStore.showAlert();
};
const hideAlert = () => {
  alertStore.hideAlert();
};



</script>
 
<template>
  <AppLayout>
    <div class="container p-5 mx-auto">
      <h1 class="h1 text-2xl font-bold mb-3">Add Project</h1>
    </div>

    <form class="max-w-sm mx-auto">
      <div class="mb-5">
        <label
          for="name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Name</label
        >
        <input
          type="text"
          id="name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Jhon"
          required
          v-model="Form.name"
        />
      </div>
      <div class="mb-5">
        <label
          for="image_url"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >IMAGE URL</label
        >
        <input
          type="text"
          id="image_url"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          v-model="Form.image_url"
        />
      </div>
      <div class="mb-5">
        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >LINK PROJECT</label
        >
        <input
          type="text"
          id="message"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          v-model="Form.link_project"
        />
      </div>

      <div class="mb-5">
        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >MESSAGE</label
        >
        <input
          type="text"
          id="message"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          v-model="Form.message"
        />
      </div>

      <button
        type="button"
        @click="addUser"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        SEND
      </button>
    </form>
  </AppLayout>
</template>
  <script setup>
import { onMounted, ref } from 'vue';
import AppLayout from "@/components/LayoutPage/AppLayout.vue";
import { useRouter } from "vue-router";
import { useDatabaseStore } from "../stores/Firebase";

import { auth } from '@/firebase';
const router = useRouter();
const store = useDatabaseStore();

onMounted(() => {
  const unsubscribe = auth.onAuthStateChanged((user) => {
    if (!user) {
      router.replace('/login');
      alert("You don't have permission");
    }
  });
})

const Form = ref({
  name: "",
  image_url: "",
  message: "",
  link_project: "",
});
const addUser = async () => {
  const userData = {
    name: Form.value.name,
    image_url: Form.value.image_url,
    message: Form.value.message,
    link_project: Form.value.link_project,
  };
  await store.addUser(userData, router);
};
</script>

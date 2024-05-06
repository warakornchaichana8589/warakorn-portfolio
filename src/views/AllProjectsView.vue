<template>
  <AppLayout>
    <div class="container p-5 mx-auto w-full">
      <h1 class="h1 text-2xl font-bold mb-3">ALL PROJECTS</h1>
      <div class="w-full flex justify-end my-3">
        <RouterLink
          class="btn btn-primary px-8 font-bold hover:text-green-200"
          to="/add-user"
        >
          +ADD PROJECT
        </RouterLink>
      </div>
      <div class="w-full h-full grid grid-cols-3 gap-4">
        <div
          class="hover:backdrop-saturate-50"
          v-for="(item, index) in data"
          :key="index"
          
        >
          <div
            class="mockup-window border border-base-300 hover:bg-gray-100 h-full"
          >
            <div
              class="flex justify-center flex-col px-2 py-2 border-t border-base-300 items-center gap-2 h-full"
            >
              <p>{{ item.name }}</p>
              <a :href="item.link_project">
                <img
                v-if="item.image_url"
                :src="item.image_url"
                alt="Webpage Screenshot"
                class="h-full"
              />
              <span v-else>ไม่มีรูปภาพ</span>
            </a>
             

              <button @click="deleteUsers(item.id)" class="btn mx-auto">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-center mt-10 mb-5">
        <div class="join">
          <button class="join-item btn">1</button>
          <button class="join-item btn btn-active">2</button>
          <button class="join-item btn">3</button>
          <button class="join-item btn">4</button>
          <button class="join-item btn">5</button>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
<script setup>
import AppLayout from "@/components/LayoutPage/AppLayout.vue";
import { ref, onMounted } from "vue";
import { useDatabaseStore } from "../stores/Firebase";

const store = useDatabaseStore();
const data = ref([]);

onMounted(async () => {
  await store.fetchData();
  data.value = store.items;
});

const deleteUsers = async (userId) => {
  await store.deleteUser(userId);
  await store.fetchData();
  data.value = store.items;
};
const addUser = async (userId) => {
  await store.addUser(userId);
  await store.fetchData();
  data.value = store.items;
};
</script>

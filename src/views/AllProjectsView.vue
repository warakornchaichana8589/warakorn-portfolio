<template>
  <AppLayout>
    <div class="container p-5 mx-auto w-full">
      <h1 class="h1 text-2xl font-bold mb-3">ALL PROJECTS</h1>
      <div class="w-full flex justify-end my-3">
        <RouterLink
          class="btn btn-primary px-8 font-bold hover:text-green-200"
          to="/add-user"
          >
          +ADD IMAGE
          </RouterLink
        >
      </div>
      <div class="w-full h-full grid grid-cols-3 gap-4">
        <RouterLink
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
              <img
                v-if="item.image_url"
                :src="item.image_url"
                alt="Webpage Screenshot"
                class="h-full"
              />
              <span v-else>ไม่มีรูปภาพ</span>

              <button @click="deleteUsers(item.id)" class="btn mx-auto">
                Delete
              </button>
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
const test = {
  name: "warakorn",
  image_url:
    "https://cdn.gencraft.com/prod/user/bfcc246e-6ddc-49e7-a372-12d8d1cc11ae/c2d8dcff-5f43-4a0b-847f-a075e50c1e51/image/image0_0.jpg?Expires=1722679133&Signature=V9BnvrQnPU~~MT64JnwSsGipMWNZkLfgwMhIfrsA3KASonCidCzWWdOALoKejyF9IZ8Vf47wueathI3PdX1147xovJwjMKpw1pos5arlQO~pozNafC8LuJ-EGBPGIFZxCAfJMEVPaDx-3NH8aGEEbjWH8KKq7Ewhj4wqpfEgStJIEg2Hh84jcSSS-p9mnYvH4tz7qlHrVtGKDopIjzskbJ0Cl1A2BKfk-SNmIWbU-afVkgc9G1Dy-dOvxbxKTs4R4uWBrPth5Et9OCJwNUXk~QKPx9f-UdYDCjku-6EEZVGAO~Enhc~dJqHPhx4giQ-eTGun86EFN-PaRGM-pucgOg__&Key-Pair-Id=K3RDDB1TZ8BHT8",
};
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
<template>
  <AppLayout>
    <div class="container p-5 mx-auto w-full">
      <h1 class="h1 text-2xl font-bold mb-3">ALL PROJECTS</h1>
      <button class="btn btn-primary" @click="addUser(test)">add</button>
      <div class="w-full h-full grid grid-cols-3 gap-4">
        <RouterLink
          class="hover:backdrop-saturate-50"
          v-for="(item, index) in data"
          :key="index"
        >
          <div class="mockup-window border border-base-300 hover:bg-gray-100">
            <div class="flex justify-center px-2 py-2 border-t border-base-300 items-end gap-2">
              <img v-if="item.image_url" :src="item.image_url" alt="Webpage Screenshot" />
              <span v-else>ไม่มีรูปภาพ</span>
              <button @click="deleteUsers(item.id)" class="btn mb-0">Delete</button>
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
import { ref, onMounted,computed } from 'vue';
import { useDatabaseStore } from '../stores/Firebase';

const { deleteUser, addUser, fetchData, items } = useDatabaseStore();
const test = {
  name: 'test2',
  image_url:'https://programming.in.th/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcode.f745f06c.webp&w=828&q=75'
}
const data = ref([])
onMounted(()=>{
  fetchData()
  data.value =  items
})
fetchData()
const deleteUsers = async (userId) =>{
 await deleteUser(userId)
  fetchData()
}
</script>

<template>
   <button type="button" class="btn btn-danger" @click="logOut" >Logout</button>
</template>

<script setup>
import { useDatabaseStore } from '../stores/Firebase'
const store = useDatabaseStore();

const logOut = async () => {
  const log_out = await store.userLogout();
}
</script>

<style  scoped>

</style>
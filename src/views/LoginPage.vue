

<template>
  <AppLayout>
    <div class="container p-5 mx-auto">
      <h1 class="h1 text-2xl font-bold mb-3">Login</h1>
    </div>

    <form class="max-w-sm mx-auto" ref="myForm">
      <div class="mb-5">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Email</label
        >
        <input
          type="text"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Jhon@g.com"
          v-model="login.email"
        />
      </div>
      <div class="mb-5 relative">
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Password</label
        >
        <div class="relative">
          <input
            :type="typePassword"
            id="password"
            class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            v-model="login.password"
          />
          <div
            @click="toggle_hidden_password"
            class="-ml-10 cursor-pointer absolute right-2 top-1/4"
          >
            <IconEye v-if="!hidden_password" />
            <IconEyeSlash v-else />
          </div>
        </div>
      </div>

      <button
        type="button"
        @click="loginUser"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Login
      </button>
    </form>
  </AppLayout>
</template>
    <script setup>
import AppLayout from "@/components/LayoutPage/AppLayout.vue";
import { useRouter } from "vue-router";
import { useDatabaseStore } from "../stores/Firebase";
import IconEye from "@/components/icons/IconEye.vue";
import IconEyeSlash from "@/components/icons/IconEyeSlash.vue";
import { useAlertStore } from "@/stores/Action";
import { auth } from '@/firebase';
import { ref, onMounted } from "vue";

onMounted(() => {
  const unsubscribe = auth.onAuthStateChanged((user) => {
    if (user) {
      router.replace('/');
    }
  });
})



const alertStore = useAlertStore();
const hidden_password = ref(true);
const toggle_hidden_password = () => {
  hidden_password.value = !hidden_password.value;
  typePassword.value = hidden_password.value ? "password" : "text";
};
const typePassword = ref("password");
const router = useRouter();
const store = useDatabaseStore();
const login = ref({
  email: "",
  password: "",
});

const loginUser = async () => {
  alertStore.showAlert();
  if (login.value.email.trim() && login.value.password.trim() !== "") {
    const sendLogin = await store.userLogin(
      login.value.email,
      login.value.password
    );
    if (sendLogin.status === "ok") {
      alertStore.hideAlert();
      router.push("/add-user");
    } else {
      alertStore.hideAlert();
    }
  } else {
    alertStore.hideAlert();
  }
};
</script>
     
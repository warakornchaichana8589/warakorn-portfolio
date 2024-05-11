

<template>
  <AppLayout>
    <div class="w-full h-full flex justify-center items-center">
      <div class="w-full sm:w-1/2 zoomIn p-5">
        <div class="container p-5 mx-auto">
          <h1 class="h1 text-2xl font-bold mb-3 text-center">Login</h1>
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
          <div class="w-full flex justify-end">
            <button
              type="button"
              @click="loginUser"
              class="button2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
            >
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </div>
  </AppLayout>
</template>
    <script setup>
import AppLayout from "@/components/LayoutPage/AppLayout.vue";
import { useRouter } from "vue-router";
import { useDatabaseStore } from "../stores/Firebase";
import IconEye from "@/components/icons/IconEye.vue";
import IconEyeSlash from "@/components/icons/IconEyeSlash.vue";
import { useAlertStore } from "@/stores/Action";
import { auth } from "@/firebase";
import { ref, onMounted } from "vue";

onMounted(() => {
  const unsubscribe = auth.onAuthStateChanged((user) => {
    if (user) {
      router.replace("/");
    }
  });
});

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

<style  scoped>
 .button2 {
  display: inline-block;
  transition: all 0.2s ease-in;
  position: relative;
  overflow: hidden;
  z-index: 1;
  color: #090909;
  padding: 0.7em 1.7em;
  cursor: pointer;
  font-size: 18px;
  border-radius: 0.5em;
  background: #e8e8e8;
  border: 1px solid #e8e8e8;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
}

.button2:active {
  color: #666;
  box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
}

.button2:before {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%) scaleY(1) scaleX(1.25);
  top: 100%;
  width: 140%;
  height: 180%;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  display: block;
  transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
  z-index: -1;
}

.button2:after {
  content: "";
  position: absolute;
  left: 55%;
  transform: translateX(-50%) scaleY(1) scaleX(1.45);
  top: 180%;
  width: 160%;
  height: 190%;
  background-color: #009087;
  border-radius: 50%;
  display: block;
  transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
  z-index: -1;
}

.button2:hover {
  color: #ffffff;
  border: 1px solid #009087;
}

.button2:hover:before {
  top: -35%;
  background-color: #009087;
  transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}

.button2:hover:after {
  top: -45%;
  background-color: #009087;
  transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}

</style>
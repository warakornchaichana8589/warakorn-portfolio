<template>
  <div class="drawer">
    <input
      id="my-drawer"
      type="checkbox"
      class="drawer-toggle"
      v-model="checkedToggle"
    />
    <div class="drawer-content">
      <!-- Page content here -->
      <div class="w-auto flex mr-auto h-full flex-col sm:flex-row">
        <div
          @click="toggleChecked"
          class="sm:bg-[#0000009f] bg-transparent flex sm:justify-center items-center justify-end h-auto w-auto fixed top-0 sm:h-screen sm:fixed sm:top-0 sm:left-0 z-10"
        >
          <label
            for="my-drawer"
            class="bg-[#00000000] cursor-pointer p-4 relative z-30"
            @click="toggleChecked"
          >
            <svg
              class="w-8 h-8 sm:text-white dark:text-white text-dark"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </label>
        </div>
        <div
          class="w-full h-full flex items-center justify-center fixed bg-slate-900/[.9] z-10"
          v-show="alertStore.showAlertState"
        >
          <div
            class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-white motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
            role="status"
          ></div>
        </div>
        <RouterView />
      </div>
    </div>
    <div class="drawer-side">
      <label
        for="my-drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <ul
        class="menu p-4 w-80 min-h-full text-base-content bg-[#F6F6F6] relative z-30"
      >
        <!-- Sidebar content here -->
        <RouterLink to="/" class="logo">
          <img
            class="w-20 mx-auto"
            src="@/assets/images/logo-main.png"
            alt=""
          />
        </RouterLink>
        <Loguot v-if="btn_login_logout" />
        <RouterLink v-else to="/login" class="btn btn-danger">Login</RouterLink>
        <li>
          <RouterLink
            to="/"
            class="w-full hover:text-orange-400"
            @click="toggleChecked"
            >Home</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/about"
            class="w-full hover:text-orange-400"
            @click="toggleChecked"
            >ABOUT US</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/all-projects"
            class="w-full hover:text-orange-400"
            @click="toggleChecked"
            >ALL PROJECTS</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/contact"
            class="w-full hover:text-orange-400"
            @click="toggleChecked"
            >CONTACT</RouterLink
          >
        </li>
        <footer class="footer footer-center p-10 flex flex-col mt-auto">
          <nav>
            <div class="grid grid-flow-col gap-4">
              <a
                href="tel:0938209899"
                class="rounded-full hover:bg-[#dddddd3b] p-3"
              >
                <svg
                  class="w-7 h-7 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                class="rounded-full hover:bg-[#dddddd3b] p-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="fill-current"
                >
                  <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                  ></path>
                </svg>
              </a>
            </div>
          </nav>
          <aside>
            <p class="text-cener">Copyright © 2024 - All right reserved</p>
          </aside>
        </footer>
      </ul>
    </div>
  </div>
</template>

<script setup>
import Loguot from "./components/Loguot.vue";
import { onMounted, ref } from "vue";
import { auth } from "@/firebase";
import { useAlertStore } from "./stores/Action";
const alertStore = useAlertStore();
const btn_login_logout = ref(null);
const checkedToggle = ref(false);

function toggleChecked() {
  checkedToggle.value = !checkedToggle.value;
}
onMounted(() => {
  const unsubscribe = auth.onAuthStateChanged((user) => {
    if (!user) {
      btn_login_logout.value = false;
    } else {
      btn_login_logout.value = true;
    }
  });
});

window.addEventListener("load", function () {
  alertStore.hideAlert();
});
</script>

<style scoped>
.bg-main {
  background-color: var(--primary-background);
}
.router-link-active.logo {
  background-color: unset !important;
}
.router-link-active {
  background-color: var(--fallback-bc, oklch(var(--bc) / 0.1));
}
</style>
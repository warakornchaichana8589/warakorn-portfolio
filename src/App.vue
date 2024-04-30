<template>
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content here -->

      <div class="w-auto flex mr-auto h-full">
        <div
          class="bg-[#0000009f] flex justify-center items-center h-screen fixed top-0 left-0"
        >
          <label
            for="my-drawer"
            class="bg-[#00000000] hover:bg-[#00000015] cursor-pointer p-4"
          >
            <svg
              class="w-8 h-8 text-white dark:text-white"
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

        <RouterView />
      </div>
    </div>
    <div class="drawer-side">
      <label
        for="my-drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
        ref="closeSidebar"
      ></label>
      <ul
        class="menu p-4 w-80 min-h-full bg-base-200 text-base-content bg-[#F6F6F6] relative"
      >
        <!-- Sidebar content here -->
        <RouterLink to="/" class="logo">
          <img
            class="w-20 mx-auto"
            src="@/assets/images/logo-main.png"
            alt=""
          />
        </RouterLink>
        <li>
          <RouterLink
            to="/"
            class="w-full hover:text-orange-400"
            @click="togglerLink"
            >Home</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/about"
            class="w-full hover:text-orange-400"
            @click="togglerLink"
            >ABOUT US</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/all-projects"
            class="w-full hover:text-orange-400"
            @click="togglerLink"
            >ALL PROJECTS</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/contact"
            class="w-full hover:text-orange-400"
            @click="togglerLink"
            >CONTACT</RouterLink
          >
        </li>
        <footer
            class="footer footer-center p-10 flex flex-col mt-auto"
          >
          <nav>
              <div class="grid grid-flow-col gap-4">
                <a
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="fill-current"
                  >
                    <path
                      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                    ></path></svg>
                  </a>
                <a
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="fill-current"
                  >
                    <path
                      d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                    ></path></svg>
                  </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="fill-current"
                  >
                    <path
                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                    ></path></svg>
                  </a>
              </div>
            </nav>
            <aside>
              <p class="font-bold text-cener">
                ACME Industries Ltd. <br />Providing reliable tech since 1992
              </p>
              <p class="text-cener">Copyright © 2024 - All right reserved</p>
            </aside>
          
          </footer>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const closeSidebar = ref(null);
const togglerLink = () => {
  closeSidebar.value.click();
};
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
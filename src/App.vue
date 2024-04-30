<template>
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content here -->

      <div class="w-auto flex mr-auto h-screen">
        <div class="bg-[#0000009f] flex justify-center items-center absolute left-0 h-screen">
          <label for="my-drawer" class="bg-[#00000000] hover:bg-[#00000015] cursor-pointer p-4">
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
        <li><RouterLink to="/" class="w-full hover:text-orange-400">Home</RouterLink></li>
        <li><RouterLink to="/about" class="w-full hover:text-orange-400">ABOUT US</RouterLink></li>
        <li><RouterLink to="/all-projects" class="w-full hover:text-orange-400">ALL PROJECTS</RouterLink></li>
        <li><RouterLink to="/contact" class="w-full hover:text-orange-400">CONTACT</RouterLink></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.bg-main {
  background-color: var(--primary-background);
}
.router-link-active.logo{
  background-color:unset !important;
}
.router-link-active{
  background-color: var(--fallback-bc, oklch(var(--bc) / 0.1));
}
</style>
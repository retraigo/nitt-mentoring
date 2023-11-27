<template>
    <footer class="bg-nitMaroon-650 w-full p-2 flex items-center justify-center">
        <div v-if="userStore.loggedIn" class="mx-auto text-white">Logged in as <span class="italic">{{ userStore.username }}</span></div>
        <div v-else class="mx-auto text-white text-xs">Developed and maintained by the Department of <span class="italic">Computer Science and Engineering</span> </div>
    </footer>
</template>
<script setup lang="ts">
const userStore = useUserStore()
</script>
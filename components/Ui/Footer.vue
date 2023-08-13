<template>
    <footer class="bg-nitMaroon-650 w-full p-2 flex justify-center">
        <div v-if="userStore.loggedIn" class="mx-auto text-white">Logged in as <span class="italic">{{ userStore.username }}</span></div>
    </footer>
</template>
<script setup lang="ts">
const userStore = useUserStore()
</script>
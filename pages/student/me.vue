<template>
    <div>
        <InfoMentee v-if="mentee" :mentee="mentee" />
    </div>
</template>
<script setup lang="ts">
definePageMeta({
    middleware: "level0"
})

const user = await useUserStore()

const mentee = user.level === 0 ? user.student : false

if (!mentee) navigateTo("/login")

</script>
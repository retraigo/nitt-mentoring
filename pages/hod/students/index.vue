<template>
    <ListMentee v-if="mentees" :mentees="mentees" />
</template>

<script setup lang="ts">
definePageMeta({
    title: "All Students",
    middleware: [
        "level1"
    ]
})
const mentees = await useSudoMentee()
</script>
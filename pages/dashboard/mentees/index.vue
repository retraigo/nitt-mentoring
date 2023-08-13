<template>
    <ListMentee v-if="mentees" :mentees="mentees" />
</template>

<script setup lang="ts">
definePageMeta({
    middleware: [
        "level1"
    ]
})
const mentees = await useMentee()
</script>
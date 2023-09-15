<template>
    <div class="flex flex-col gap-4">
        <h1 class="text-2xl uppercase font-bold">Your Mentees</h1>
        <ListMentee v-if="mentees" :mentees="mentees" />
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: [
        "level1"
    ]
})
const mentees = await useMentee()
</script>
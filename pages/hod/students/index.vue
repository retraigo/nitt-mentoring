<template>
    <div class="flex flex-col gap-4">
        <h1 class="text-2xl uppercase font-bold">All Students</h1>
        <ListMentee v-if="mentees" :mentees="mentees" />
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    title: "All Students",
    middleware: [
        "level1"
    ]
})
const faculties = await useUsers()

const mentees = (await useSudoMentee()).map(mentee => ({ ...mentee, mentor: faculties.find(faculty => faculty.id === mentee.mentor_id) || { username: "Not Assigned" } }))
</script>
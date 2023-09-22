<template>
    <div>
        <InfoMentee v-if = "mentee" :mentee="mentee" />
    </div>
</template>
<script setup lang="ts">
definePageMeta({
    middleware: "level0"
})

const mentee = await useMe()

</script>
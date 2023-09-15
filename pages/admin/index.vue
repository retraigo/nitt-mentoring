<template>
    <div class="p-2 flex flex-col items-center w-full mt-12">
        <div
            class="p-4 flex flex-col items-center gap-4 bg-nitMaroon-100 border-stone-400 border-b border-r shadow-xl rounded-xl max-w-3xl w-full">
            <div class="flex flex-col items-center gap-2">
                <h2 class="w-full text-start">
                    Welcome, {{ userStore.username }} (admin)!
                </h2>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const userStore = useUserStore()

definePageMeta({
    middleware: [
        "level3"
    ]
})
</script>
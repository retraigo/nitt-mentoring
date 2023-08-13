<template>
    <div class="flex flex-col gap-8 w-full">
        <h1 class="text-2xl font-bold uppercase">{{ mentor.username }}</h1>
        <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="grid grid-cols-2 max-w-xs">
                <span class="uppercase font-bold">Type</span>
                <span class="font-semibold">{{ mentor.level === 1 ? `Faculty` : `Head` }}</span>
            </div>
            <div class="grid grid-cols-2 max-w-xs">
                <span class="uppercase font-bold">ID</span>
                <span class="font-semibold">{{ mentor.id }}</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { User } from '@/utils/types.js';
const { mentor } = defineProps<{
    mentor: User
}>()
</script>
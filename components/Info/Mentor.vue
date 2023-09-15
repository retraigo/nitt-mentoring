<template>
    <div class="flex flex-col gap-8 w-full">
        <h1 class="text-2xl font-bold uppercase">{{ mentor.username }}</h1>
        <div class="grid grid-cols-1">
            <div class="grid grid-cols-2 max-w-xs">
                <span class="uppercase font-bold">Type</span>
                <span class="font-semibold">{{ mentor.level === 1 ? `Faculty` : `Head` }}</span>
            </div>
            <div class="grid grid-cols-2 max-w-xs">
                <span class="uppercase font-bold">ID</span>
                <span class="font-semibold">{{ mentor.id }}</span>
            </div>
            <div class="grid grid-cols-2 max-w-xs">
                <span class="uppercase font-bold">Mentees</span>
                <span class="font-semibold">{{ mentor.menteeCount }}</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { User } from '@/types/types.js';
const { mentor } = defineProps<{
    mentor: User & { menteeCount: number }
}>()
</script>
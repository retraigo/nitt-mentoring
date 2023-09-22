<template>
    <div class="flex flex-col gap-8 w-full">
        <h1 class="text-2xl font-bold uppercase">{{ mentee.name }}</h1>
        <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="grid grid-cols-2 max-w-xs">
                <span class="uppercase font-bold">Batch</span>
                <span class="font-semibold">{{ mentee.batch }}</span>
            </div>
            <div class="grid grid-cols-2 max-w-xs">
                <span class="uppercase font-bold">Reg #</span>
                <span class="font-semibold">{{ mentee.register_number }}</span>
            </div>
            <div class="grid grid-cols-2 max-w-xs">
                <span class="uppercase font-bold">Year</span>
                <span class="font-semibold">{{ mentee.year }}</span>
            </div>
            <div class="grid grid-cols-2 max-w-xs">
                <span class="uppercase font-bold">Section</span>
                <span class="font-semibold">{{ mentee.section }}</span>
            </div>
            <div class="grid grid-cols-2 max-w-xs">
                <span class="uppercase font-bold">Mentor</span>
                <span class="font-semibold">{{ mentee.mentor?.name || 'NA' }}</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { PartialStudent, Student, User } from '@/types/types.js';
const { mentee } = defineProps<{
    mentee: PartialStudent
}>()
</script>
<template>
    <div class="p-2 flex flex-col items-center w-full mt-12">
        <div
            class="p-4 flex flex-col items-center gap-4 bg-nitMaroon-100 border-stone-400 border-b border-r shadow-xl rounded-xl max-w-3xl w-full">
            <div class="flex flex-col items-center gap-2">
                <label htmlFor="year_field" class="w-full text-start">
                    Welcome, {{ userStore.username }}!
                </label>
                <select id="year_field" placeholder="Academic Year" v-model="academicYear"
                    class="p-2 w-full lg:w-96 rounded-md shadow-md">
                    <option value="NONE" selected>Academic Year</option>
                    <option value="2022T2023">2022-2023</option>
                    <option value="2023T2024">2023-2024</option>
                </select>
            </div>
            <NuxtLink :to="`/dashboard/mentees?year=${academicYear}`" :disabled="academicYear === `NONE`"
                class="rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 bg-nitMaroon-600 text-white py-2 px-8">
                Go
            </NuxtLink>
        </div>
    </div>
</template>
<script setup lang="ts">
const academicYear = ref("NONE")
const userStore = useUserStore()
definePageMeta({
    middleware: [
        "level1"
    ]
})
</script>
<template>
    <div class="lg:px-4 mx-auto w-full flex flex-col gap-4 items-start lg:items-center">
        <div class="flex flex-row items-center justify-start lg:justify-end w-full gap-4">
            <div class="flex flex-col items-end gap-4">
                <button class="bg-nitMaroon-600 text-white rounded-md p-2" @click="_ => expandFilter = !expandFilter">Filter
                    {{ expandFilter ? `-` : `+` }}</button>
                <div
                    :class="`${expandFilter ? `max-h-[90rem]` : `max-h-0`} flex flex-col lg:flex-row gap-2 overflow-y-hidden transition-all duration-500 ease-in-out`">
                    <input type="text" id="search_field" v-model="batch"
                        class="w-48 lg:w-72 p-2 rounded-md border-nitMaroon-600 border bg-nitMaroon-50"
                        placeholder="Batch" />
                    <input type="text" id="search_field" v-model="classSection"
                        class="w-48 lg:w-72 p-2 rounded-md border-nitMaroon-600 border bg-nitMaroon-50"
                        placeholder="Section" />
                    <input type="text" id="search_field" v-model="search"
                        class="w-48 lg:w-72 p-2 rounded-md border-nitMaroon-600 border bg-nitMaroon-50"
                        placeholder="Name / #Reg No." />
                </div>
            </div>
        </div>
        <table class="table-auto border-collapse w-full max-w-sm lg:max-w-full">
            <thead class="bg-nitMaroon-600 text-white text-xs lg:text-base">
                <th>Reg #</th>
                <th>Name</th>
                <th>Year & Section</th>
                <th v-if="mentees[0]?.mentor">Mentor</th>
                <th>Meetings</th>
            </thead>
            <tbody>
                <tr v-for="mentee in computedMentees" :key="mentee.register_number"
                    class="text-xs lg:text-base text-center odd:bg-nitMaroon-100 even:bg-zinc-100 border-t border-nitMaroon-100 border-spacing-y-2">
                    <td>{{ mentee.register_number }}</td>
                    <td>{{ mentee.name }}</td>
                    <td>{{ mentee.year }} - {{ mentee.section }}</td>
                    <td v-if="mentee.mentor">{{ mentee.mentor.name }}</td>
                    <td>
                        <NuxtLink :to="`/dashboard/mentees/${mentee.register_number}`"> <span class="sr-only">Check Meeting
                                Details</span>
                            <svg class="block w-5 h-5 stroke-2 stroke-rose-700 mx-auto" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                <path class="transition-all duration-500 transform ease-in-out" stroke-linecap="round"
                                    stroke-linejoin="round" :d="`${AllIcons.userplus}`" />
                            </svg>
                        </NuxtLink>
                    </td>
                </tr>
            </tbody>
        </table>
        <div v-if="!computedMentees.length">No mentees found</div>
    </div>
</template>

<script setup lang="ts">
import type { PartialStudent, Faculty, User } from "@/types/types.js"
const { mentees } = defineProps<{ mentees: (PartialStudent)[] }>()

const computedMentees = computed(() => {
    return !expandFilter.value ? mentees :
        mentees.filter(x => {
            return (
                (search.value.startsWith("#") ? x.register_number.startsWith(search.value.slice(1)) : x.name.toLowerCase().includes(search.value.toLowerCase())) &&
                (batch.value ? x.batch === Number(batch.value) : true) &&
                (classSection.value ? x.section === classSection.value : true)
            )
        })
})

const search = ref("")
const batch = ref("")
const classSection = ref("")
const expandFilter = ref(false)
</script>
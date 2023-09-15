<template>
    <div class="p-2 flex flex-col items-center w-full mt-12">
        <h1 class="text-2xl uppercase font-bold w-full text-left">All Faculty</h1>
        <div class="p-4 flex flex-col items-center gap-4 w-full">
            <div class="flex flex-col items-center gap-2 w-full">
                <div class="flex flex-row items-center justify-start lg:justify-end w-full gap-4">
                    <div class="flex flex-col items-end gap-4">
                        <button class="bg-nitMaroon-600 text-white rounded-md p-2"
                            @click="_ => expandFilter = !expandFilter">Filter
                            {{ expandFilter ? `-` : `+` }}</button>
                        <div
                            :class="`${expandFilter ? `max-h-[90rem]` : `max-h-0`} flex flex-col lg:flex-row gap-2 overflow-y-hidden transition-all duration-500 ease-in-out`">
                            <input type="text" id="search_field" v-model="search"
                                class="w-48 lg:w-72 p-2 rounded-md border-nitMaroon-600 border bg-nitMaroon-50"
                                placeholder="Name" />
                        </div>
                    </div>
                </div>
                <table v-if="mentors" class="table-auto border-collapse w-full max-w-full">
                    <thead class="bg-nitMaroon-600 text-white text-xs lg:text-base">
                        <th>Type</th>
                        <th>Name</th>
                        <th>Mentees</th>
                    </thead>
                    <tbody>
                        <tr v-for="mentor in computedmentors" :key="mentor.username"
                            class="text-xs lg:text-base text-center odd:bg-nitMaroon-100 even:bg-zinc-100 border-t border-nitMaroon-100 border-spacing-y-2">
                            <td>{{ mentor.level === 1 ? `Faculty` : `Head` }}</td>
                            <td>{{ mentor.username }}</td>
                            <td>
                                <NuxtLink :to="`/hod/faculty/${mentor.id}`"> <span class="sr-only">Check Meeting
                                        Details</span>
                                    <svg class="block w-5 h-5 stroke-2 stroke-rose-700 mx-auto"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        aria-hidden="true">
                                        <path class="transition-all duration-500 transform ease-in-out"
                                            stroke-linecap="round" stroke-linejoin="round" :d="`${AllIcons.userplus}`" />
                                    </svg>
                                </NuxtLink>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </div>
</template>
<script setup lang="ts">
definePageMeta({
    middleware: [
        "level2"
    ]
})
const useStore = useUserStore()
const mentors = await useUsers();

const computedmentors = computed(() => {
    return !expandFilter.value ? mentors :
        mentors.filter(x => {
            return (
                (search.value.startsWith("#") ? String(x.id).startsWith(search.value.slice(1)) : x.username.toLowerCase().includes(search.value.toLowerCase()))
            )
        })
})

const search = ref("")
const expandFilter = ref(false)
</script>
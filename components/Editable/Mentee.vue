<template>
    <div :class="`p-2 flex flex-col items-stretch`">
        <div class="p-2 rounded-xl items-center flex justify-between bg-nitMaroon-100">
            <div class="flex items-center gap-8">
                <div class="flex flex-col items-stretch gap-2">
                    <span class="text-xs uppercase">Allow Editing</span>
                    <MiscSwitch :turned-on="mentee.enable_edit_profile" />
                </div>
                <div class="text-xl font-semibold">{{ mentee.name }} #{{ mentee.register_number }}</div>
            </div>
            <button @click="toggleDrop">
                <svg class="h-8 w-8 stroke-nitMaroon-600 stroke-2" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 30 24" aria-hidden="true">
                    <path class="transition-all duration-500 transform ease-in-out" stroke-linecap="round"
                        stroke-linejoin="round" :d="editOpen
                            ? `M 18 15 L 12 9 L 6 15` : `M 6 9 L 12 15 L 18 9`" />
                </svg>
            </button>
        </div>
        <div
            :class="`${editOpen ? `max-h-[100rem]` : `max-h-[0rem]`} overflow-y-hidden transition-all duration-500 ease-in-out bg-nitMaroon-100/50 flex flex-col space-y-4`">
            <div class="p-2">
                <a :href="`/dashboard/mentees/${mentee.register_number}`" class="flex items-center gap-2 max-w-xs mx-auto">
                    <span class="text-rose-700">Check Meeting
                        Details</span>
                    <svg class="block w-5 h-5 stroke-2 stroke-rose-700 mx-auto" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <path class="transition-all duration-500 transform ease-in-out" stroke-linecap="round"
                            stroke-linejoin="round" :d="`${AllIcons.userplus}`" />
                    </svg>
                </a>
            </div>
            <div class="p-2">
                <h2 class="mt-4 text-2xl font-bold uppercase mx-auto text-center">Basic Info</h2>
                <form class="flex flex-col items-center gap-4 mt-5 max-w-3xl mx-auto" @submit="e => updateBasic(e)">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full">
                        <div class="grid grid-cols-2 items-center max-w-xs">
                            <label for="student_batch">Batch</label>
                            <input type="number" name="student_batch" id="student_batch" class="font-semibold p-2 w-48"
                                :value="mentee.batch" />
                        </div>
                        <div class="grid grid-cols-2 items-center max-w-xs">
                            <label for="student_year">Year</label>
                            <input type="number" name="student_year" id="student_year" class="font-semibold p-2 w-48"
                                :value="mentee.year" />
                        </div>
                        <div class="grid grid-cols-2 items-center max-w-xs">
                            <label for="student_section">Section</label>
                            <input type="text" name="student_section" id="student_section" class="font-semibold p-2 w-48"
                                :value="mentee.section" />
                        </div>
                    </div>
                    <MiscMessage
                        :class="`${basicMessage.text ? `opacity-100` : `opacity-0`} transition duration-500 ease-in-out w-full lg:w-96`"
                        :type="basicMessage.type">
                        {{ basicMessage.text }}</MiscMessage>
                    <button type="submit"
                        class="rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 bg-nitMaroon-600 text-white py-2 px-8">
                        Edit Basic Info
                    </button>
                </form>
                <hr class="mt-4 border-1 border-nitMaroon-600 max-w-6xl mx-auto" />
                <h2 class="mt-4 text-2xl font-bold uppercase mx-auto text-center">Achievements / Special Info</h2>
                <form class="flex flex-col items-center gap-4 pt-8" @submit="e => updateSpecial(e)">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div v-for="field in specialFields" :key="field" class="flex flex-col items-center gap-2">
                            <label :htmlFor="field" class="w-full text-start">
                                {{ field.split("_").map(x => x.slice(0, 1).toUpperCase() + x.slice(1)).join(" ") }}
                            </label>
                            <textarea :name="field" :id="field" :value="mentee.achievements[field]"
                                class="p-2 w-full lg:w-96 rounded-md shadow-md" />
                        </div>
                    </div>
                    <MiscMessage
                        :class="`${specialMessage.text ? `opacity-100` : `opacity-0`} transition duration-500 ease-in-out w-full lg:w-96`"
                        :type="specialMessage.type">
                        {{ specialMessage.text }}</MiscMessage>
                    <button type="submit"
                        class="rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 bg-nitMaroon-600 text-white py-2 px-8">
                        Edit Special Info
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { Student } from "@/types/types.js"
const { mentee } = defineProps<{ mentee: Student }>()
const editOpen = ref(false)

const specialMessage = ref({ type: "error", text: "" })
const basicMessage = ref({ type: "error", text: "" })

const toggleDrop = () => editOpen.value = !editOpen.value

const updateSpecial = async (e: Event) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form as HTMLFormElement);
    const creds: Student["achievements"] = {};
    for (const key of specialFields) {
        creds[key] = formData.get(key) as string || ""
    }
    const auth = useCookie<string>("nitt_token");
    if (!auth.value) return false;
    await useFetch<{ token: string }>(`/api/mentees/update/${mentee.register_number}/special`, {
        method: "PATCH", body: JSON.stringify(creds),
        headers: { "Authorization": `Bearer ${auth.value}` },
        onResponse({ request, response, options }) {
            specialMessage.value.type = "success"
            specialMessage.value.text = "Updated details."
        },
        onResponseError({ request, response, options }) {
            specialMessage.value.type = "error"
            switch (response.status) {
                case 400:
                    // this won't happen
                    specialMessage.value.text = "Missing Fields."
                case 401:
                    specialMessage.value.text = "You aren't supposed to be here."
                    break;
                default:
                    specialMessage.value.text = "An unknown error occurred";
                    break;
            }
        }
    })
};

const updateBasic = async (e: Event) => {
    e.preventDefault();
    basicMessage.value.type = "warning"
    basicMessage.value.text = "Not implemented."
};
</script>
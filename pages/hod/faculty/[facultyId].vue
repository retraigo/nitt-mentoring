<template>
    <div class="flex flex-col gap-2">
        <InfoMentor v-if="faculty" :mentor="{ ...faculty, menteeCount: faculty.mentees.length }" />
        <div class="flex flex-row items-center justify-start lg:justify-end w-full gap-4">
            <div class="flex flex-col items-end gap-4">
                <button class="bg-nitMaroon-600 text-white rounded-md p-2" @click="_ => expandFilter = !expandFilter">Filter
                    {{ expandFilter ? `-` : `+` }}</button>
                <div
                    :class="`${expandFilter ? `max-h-[90rem]` : `max-h-0`} flex flex-col lg:flex-row gap-2 overflow-y-hidden transition-all duration-500 ease-in-out`">
                    <input type="text" id="search_field" v-model="year"
                        class="w-48 lg:w-72 p-2 rounded-md border-nitMaroon-600 border bg-nitMaroon-50"
                        placeholder="Year" />
                    <input type="text" id="search_field" v-model="classSection"
                        class="w-48 lg:w-72 p-2 rounded-md border-nitMaroon-600 border bg-nitMaroon-50"
                        placeholder="Section" />
                    <input type="text" id="search_field" v-model="search"
                        class="w-48 lg:w-72 p-2 rounded-md border-nitMaroon-600 border bg-nitMaroon-50"
                        placeholder="Name / #Reg No." />
                </div>
            </div>
        </div>
        <MiscMessage :class="`${message.text ? `opacity-100` : `opacity-0`} transition duration-500 ease-in-out`"
            :type="message.type">
            {{ message.text }}</MiscMessage>
        <table class="table-auto border-collapse w-full max-w-sm lg:max-w-full">
            <thead class="bg-nitMaroon-600 text-white text-xs lg:text-base">
                <th>Assigned</th>
                <th>Reg #</th>
                <th>Name</th>
                <th>Year</th>
                <th>Section</th>
            </thead>
            <tbody>
                <tr v-for="mentee in computedMentees" :key="mentee.regno"
                    class="text-xs lg:text-base text-center odd:bg-nitMaroon-100 even:bg-zinc-100 border-t border-nitMaroon-100 border-spacing-y-2">
                    <td><input type="checkbox" :checked="mentee.mentor_id === Number(facultyId)"
                            :disabled="Boolean(mentee.mentor_id && (mentee.mentor_id !== Number(facultyId)))"
                            @change="e => updateMentor(e, mentee.regno)" /></td>
                    <td>{{ mentee.regno }}</td>
                    <td>{{ mentee.name }}</td>
                    <td>{{ mentee.year }}</td>
                    <td>{{ mentee.section }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: [
        "level2"
    ]
})

const auth = useCookie<string>("nitt_token")
const route = useRoute()
const router = useRouter()
const facultyId = route.params.facultyId;
const faculty = await useSudoUser(Number(facultyId))
const mentees = await useSudoMentee()
if (!faculty) nextTick(() => router.go(-1))
else mentees.sort((a, b) => a.mentor_id === faculty.id && b.mentor_id !== faculty.id ? -1 : a.mentor_id !== faculty.id && b.mentor_id === faculty.id ? 1 : 0)

const timeOut = ref<NodeJS.Timeout | undefined>(undefined)
const updateMentor = async (e: Event, regno: string) => {
    const box = e.currentTarget as HTMLInputElement;
    const mentor_id = box.checked ? Number(facultyId) : -1
    await useFetch<{ token: string }>(`/api/mentees/${regno}`, {
        method: "PATCH", body: JSON.stringify({ mentor_id }),
        headers: { "Authorization": `Bearer ${auth.value}` },
        onResponse({ request, response, options }) {
            message.value.type = "success"
            message.value.text = `Mentor for ${regno} changed to ${mentor_id === -1 ? `None` : (faculty?.username || mentor_id)}!`
            clearTimeout(timeOut.value)
            timeOut.value = setTimeout(() => message.value.text = "", 3000)
        },
        onResponseError({ request, response, options }) {
            box.checked = !box.checked;
            message.value.type = "error"
            message.value.text = `Unable to change mentor for ${regno}!`
        }
    })
}


const computedMentees = computed(() => {
    return !expandFilter.value ? mentees :
        mentees.filter(x => {
            return (
                (search.value.startsWith("#") ? x.regno.startsWith(search.value.slice(1)) : x.name.toLowerCase().includes(search.value.toLowerCase())) &&
                (year.value ? x.year === Number(year.value) : true) &&
                (classSection.value ? x.section === classSection.value : true)
            )
        })
})

const search = ref("")
const year = ref("")
const classSection = ref("")
const expandFilter = ref(false)

const message = ref({ text: "", type: 'success' })
</script>
<template>
    <div class="flex flex-col gap-2">
        <InfoMentor v-if="faculty" :mentor="{ ...faculty, menteeCount: faculty.mentees.length }" />
        <div class="flex flex-row items-center justify-start lg:justify-end w-full gap-4">
            <div class="flex flex-col items-end gap-4">
                <div class="flex flex-row items-center gap-4">
                    <button class="bg-green-600 text-white rounded-md p-2" @click="pushChanges">Commit Changes</button>
                    <button class="bg-nitMaroon-600 text-white rounded-md p-2"
                        @click="_ => expandFilter = !expandFilter">Filter
                        {{ expandFilter ? `-` : `+` }}</button>
                </div>
                <div
                    :class="`${expandFilter ? `max-h-[90rem]` : `max-h-0`} flex flex-col lg:flex-row gap-2 overflow-y-hidden transition-all duration-500 ease-in-out`">
                    <input type="text" id="search_field" v-model="batch"
                        class="w-48 lg:w-72 p-2 rounded-md border-nitMaroon-600 border bg-nitMaroon-50"
                        placeholder="Batch" />
                    <input type="text" id="search_field" v-model="classSection"
                        class="w-48 lg:w-72 p-2 rounded-md border-nitMaroon-600 border bg-nitMaroon-50"
                        placeholder="Section" />
                        <input type="text" id="search_field" v-model="name"
                        class="w-48 lg:w-72 p-2 rounded-md border-nitMaroon-600 border bg-nitMaroon-50"
                        placeholder="Name" />
                        <input type="text" id="search_field" v-model="regNo"
                        class="w-48 lg:w-72 p-2 rounded-md border-nitMaroon-600 border bg-nitMaroon-50"
                        placeholder="Reg No" />
                </div>
            </div>
        </div>
        <MiscMessage :class="`${message.text ? `opacity-100` : `opacity-0`} transition duration-500 ease-in-out`"
            :type="message.type">
            {{ message.text }}</MiscMessage>
        <table class="table-auto border-collapse w-full max-w-sm lg:max-w-full">
            <thead class="bg-nitMaroon-600 text-white text-xs lg:text-base">
                <th>Assigned</th>
                <th>Meetings Details</th>
                <th>Reg #</th>
                <th>Name</th>
                <th>Year</th>
                <th>Section</th>
                <th>Mentor</th>
            </thead>
            <tbody>
                <tr v-for="mentee in computedMentees" :key="mentee.register_number"
                    class="text-xs lg:text-base text-center odd:bg-nitMaroon-100 even:bg-zinc-100 border-t border-nitMaroon-100 border-spacing-y-2">
                    <td><input type="checkbox" :checked="mentee.mentor_id === Number(facultyId)"
                            :disabled="Boolean(mentee.mentor_id && mentee.mentor_id !== -1 && (mentee.mentor_id !== Number(facultyId)))"
                            @change="e => updateMentor(e, mentee.register_number)" /></td>
                    <td class=" font-bold"><a :href = "`/dashboard/mentees/${mentee.register_number}/meetings`">click here</a></td>
                    <td>{{ mentee.register_number }}</td>
                    <td>{{ mentee.name }}</td>
                    <td>{{ mentee.year }}</td>
                    <td>{{ mentee.section }}</td>
                    <td>{{ mentee.mentor?.name }}</td>
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
const faculty = await useFaculty(Number(facultyId))

const mentees = (await useSudoMentee()).map(mentee => ({ ...mentee, mentor: mentee.mentor || { name: "Not Assigned" } }))
if (!faculty) nextTick(() => router.go(-1))
else mentees.sort((a, b) => a.mentor_id === faculty.id && b.mentor_id !== faculty.id ? -1 : a.mentor_id !== faculty.id && b.mentor_id === faculty.id ? 1 : 0)

const menteeMap = new Map<string, number>();

mentees.forEach(mentee => menteeMap.set(mentee.register_number, mentee.mentor_id || -1));

const updateMentor = async (e: Event, regno: string) => {
    const box = e.currentTarget as HTMLInputElement;
    const mentor_id = box.checked ? Number(facultyId) : -1
    menteeMap.set(regno, mentor_id);
}

const pushChanges = async () => {
    let successes = 0;
    for await (const [mtee, mtor] of menteeMap.entries()) {
        if (mtor !== mentees.find(x => x.register_number === mtee)?.mentor_id) {
            await useFetch<{ token: string }>(`/api/mentees/${mtee}`, {
                method: "PATCH", body: JSON.stringify({ mentor_id: mtor }),
                headers: { "Authorization": `Bearer ${auth.value}` },
                onResponse({ request, response, options }) {
                    successes += 1;
                },
                onResponseError({ request, response, options }) {
                    message.value.type = "error"
                    message.value.text = `Unable to change mentor for ${mtee}!`
                    successes -= 1;
                }
            })
        }
    }
    message.value.type = "success"
    message.value.text = `Mentor for ${successes} students changed!`
    setTimeout(() => router.go(0), 3000)
}

const computedMentees = computed(() => {
    return !expandFilter.value ? mentees :
        mentees.filter(x => {
            return (
                (batch.value ? x.batch.toString().startsWith(batch.value) : true) &&
                (classSection.value ? x.section === classSection.value.toUpperCase() : true)&&
                (name.value ? x.name.toLowerCase().includes(name.value.toLowerCase()):true) &&
                (regNo.value ? x.register_number.startsWith(regNo.value):true)
            )
        })
})


const name=ref("")
const batch=ref("")
const regNo=ref("")
const classSection = ref("")
const expandFilter = ref(false)

const message = ref({ text: "", type: 'success' })
</script>
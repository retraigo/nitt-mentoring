<template>
    <div class="flex flex-col gap-4">
        <InfoMentee v-if="mentee" :mentee="mentee" />
        <form v-if="mentee" @submit="addMeeting"
            class="flex flex-col lg:mx-auto lg:items-center gap-2 p-2 rounded-md bg-zinc-200 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-6xl shadow-md w-full">
            <h1 class="text-2xl font-bold uppercase">New Meeting</h1>
            <input type="date" name="date_field" :max="new Date().toISOString().split(`T`)[0]"
                class="p-2 rounded-md w-48 lg:w-72" />
            <h2 class="text-xl font-bold">Discussion:</h2>
            <textarea name="discussion_field" class="p-2 rounded-md w-48 lg:w-72" />
            <button type="submit" class="bg-nitMaroon-600 text-white rounded-md p-2 w-12">Add</button>
        </form>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: [
        "level1"
    ]
})
const route = useRoute()
const router = useRouter()
const regNo = route.params.regno;
const mentee = await useMentee(regNo as string)
if (!mentee) nextTick(() => router.go(-1))
const auth = useCookie<string>("nitt_token");

const addMeeting = async (e: Event) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form as HTMLFormElement);
   
    const creds = {
        date: formData.get("date_field"),
        discussion: formData.get("discussion_field"),
        mentee_id: regNo,
    };
    await useFetch<{ token: string }>(`/api/meetings/new`, {
        method: "POST", body: JSON.stringify(creds),
        headers: { "Authorization": `Bearer ${auth.value}` },
        onResponse({ request, response, options }) {
            navigateTo(`/dashboard/mentees/${regNo}/meetings`)
        },
        onResponseError({ request, response, options }) {
            alert("An error occurred");
            console.error(response);
            

        }
    })
}
</script>
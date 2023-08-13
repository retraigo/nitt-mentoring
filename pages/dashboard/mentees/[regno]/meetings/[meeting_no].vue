<template>
    <div class="flex flex-col gap-2">
        <InfoMentee v-if="meeting" :mentee="meeting.mentee" />
        <div v-if="meeting"
            class="flex flex-col gap-2 p-2 rounded-md bg-zinc-200 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-6xl shadow-md w-full">
            <h1 class="text-2xl font-bold uppercase">Meeting #{{ meetingNo }}</h1>
            <span class="text-sm">{{ meeting ? new Date(meeting.date).toISOString().split("T")[0] : `Never happened`
            }}</span>
            <h2 class="text-xl font-bold">Discussion:</h2>
            <div>{{ meeting.discussion }}</div>
        </div>
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
const meetingNo = route.params.meeting_no;
const meeting = await useMeeting(Number(meetingNo))
if (!meeting) nextTick(() => router.go(-1))
</script>
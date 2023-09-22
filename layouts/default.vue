<template>
    <div class="tracking-wide flex flex-col items-center h-screen">
        <section class="flex w-full">
            <UiHeader />

            <main class="ml-[4rem] flex flex-col flex-grow h-[95vh] overflow-y-auto">
                <section class="w-full flex flex-row items-center p-4">
                    <div class="flex flex-row items-center gap-2">
                        <img src="/nitt_logo_min.webp" class="w-20 h-20" />
                        <h1 class="text-lg lg:text-2xl font-bold">National Institute of Technology Tiruchirappalli</h1>
                    </div>
                </section>
                <section class="px-4">
                    <slot />
                </section>

            </main>
        </section>
        <UiFooter class="flex-grow" />
    </div>
</template>
<script setup lang="ts">
const route = useRoute()
useHead({
    title: `${route.meta.title || `Mentoring`}`
})
</script>
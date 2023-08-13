<template>
    <div class="tracking-wide flex flex-col items-center">
        <section class="flex-grow flex w-full overflow-x-hidden lg:overflow-x-auto">
            <UiHeader />

            <main class="relative left-[4rem] lg:static flex flex-col flex-grow">
                <section class="w-full flex flex-row items-center p-4">
                    <div class="flex flex-row items-center gap-2">
                        <img src="/nitt_logo_min.webp" class="w-14 h-14" />
                        <h1 class="text-lg lg:text-2xl font-bold">National Institute of Technology</h1>
                    </div>
                </section>
                <section class="flex-grow px-4">
                    <slot />
                </section>
                <UiFooter />
            </main>
        </section>
    </div>
</template>
<template>
    <div class="p-2 flex flex-col items-center w-full mt-12">
        <div
            class="p-4 flex flex-col items-center gap-4 bg-nitMaroon-100 border-stone-400 border-b border-r shadow-xl rounded-xl max-w-3xl w-full">
            <h1 class="text-2xl font-bold">NITT Mentoring Portal</h1>
            <form class="flex flex-col items-center gap-4 pt-8" @submit="e => handleSubmit(e)">
                <div class="flex flex-col items-center gap-2">
                    <label htmlFor="username_field" class="w-full text-start">
                        Username
                    </label>
                    <input name="username" id="username_field" type="text" placeholder="JohnDoe"
                        class="p-2 w-full lg:w-96 rounded-md shadow-md" />
                </div>
                <div class="flex flex-col items-center gap-2">
                    <label htmlFor="password_field" class="w-full text-start">
                        Password
                    </label>
                    <input name="password" id="password_field" type="password" placeholder="Password"
                        class="p-2 w-full lg:w-96 rounded-md shadow-md" />
                </div>
                <div class="flex w-full justify-end">
                    <a href="javascript:alert(`Not Implemented`)"
                        class="text-sm text-nitMaroon-500 font-semibold hover:underline">
                        Forgot Password?
                    </a>
                </div>
                <button type="submit"
                    class="rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 bg-nitMaroon-600 text-white py-2 px-8">
                    Log In
                </button>
            </form>
            <hr class="border border-stone-400 w-full lg:w-96" />
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute();

const token = useCookie<string>("nitt_token")

// If the user was redirected via middleware
let redirect = route.query.redirect as string;
// Else
if (!redirect) redirect = "/dashboard"

const handleSubmit = async (e: Event) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form as HTMLFormElement);
    const creds = {
        username: formData.get("username"),
        password: formData.get("password"),
    };
    await useFetch<{ token: string }>(`/api/users/me`, {
        method: "POST", body: JSON.stringify(creds),
        onResponse({ request, response, options }) {
            // Set localStorage value and redirect to where they were
            token.value = response._data.token
            navigateTo(redirect)
        },
        onResponseError({ request, response, options }) {
            alert("An error occurred")
        }
    })
};
</script>
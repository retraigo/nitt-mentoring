import type { User } from "@/types/types.js";

export async function useUser() {
  const auth = useCookie<string>("nitt_token");
  if (!auth.value) return false;

  const user = await $fetch<User>(`/api/users/me`, {
    method: "GET",
    headers: { "Authorization": `Bearer ${auth.value}` },
  });
  return user;
}

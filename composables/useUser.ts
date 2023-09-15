import type { Mentee, User } from "@/types/types.js";

export async function useUser() {
  const auth = useCookie<string>("nitt_token");
  if (!auth.value) return false;

  const user = await $fetch<User>(`/api/users/me`, {
    method: "GET",
    headers: { "Authorization": `Bearer ${auth.value}` },
  });
  return user;
}

export async function useSudoUser(id: number) {
  const auth = useCookie<string>("nitt_token");
  if (!auth.value) return false;

  const user = await $fetch<User & { mentees: Mentee[] }>(`/api/users/${id}`, {
    method: "GET",
    headers: { "Authorization": `Bearer ${auth.value}` },
  });
  return user;
}

export async function useUsers() {
  const auth = useCookie<string>("nitt_token");
  if (!auth.value) return [] as User[];

  try {
    const users = await $fetch<User[]>(`/api/users/all`, {
      method: "GET",
      headers: { "Authorization": `Bearer ${auth.value}` },
    });
    return users;
  } catch (e) {
    return [] as User[];
  }
}

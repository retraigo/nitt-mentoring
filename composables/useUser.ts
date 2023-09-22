import type { Faculty, FacultyInfo, User } from "@/types/types.js";

export async function useUser() {
  const auth = useCookie<string>("nitt_token");
  if (!auth.value) return false;

  const user = await $fetch<User>(`/api/users/me`, {
    method: "GET",
    headers: { "Authorization": `Bearer ${auth.value}` },
  });
  return user;
}

export async function useFaculty(id?: number): Promise<Faculty | false> {
  const auth = useCookie<string>("nitt_token");
  if (!auth.value) return false;
  if (id) {
    const user = await $fetch<Faculty>(`/api/faculty/${id}`, {
      method: "GET",
      headers: { "Authorization": `Bearer ${auth.value}` },
    });
    return user;
  } else {
    const user = await $fetch<Faculty>(`/api/faculty/me`, {
      method: "GET",
      headers: { "Authorization": `Bearer ${auth.value}` },
    });
    return user;
  }
}

export async function useAllFaculty(): Promise<FacultyInfo[]> {
  const auth = useCookie<string>("nitt_token");
  if (!auth.value) return [] as FacultyInfo[];

  try {
    const users = await $fetch<FacultyInfo[]>(`/api/faculty/dept`, {
      method: "GET",
      headers: { "Authorization": `Bearer ${auth.value}` },
    });
    console.log(users);
    return users;
  } catch (e) {
    return [] as FacultyInfo[];
  }
}

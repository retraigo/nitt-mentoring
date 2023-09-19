import type { Student } from "@/types/types.js";

export async function useMentee(): Promise<Student[]>;
export async function useMentee(
  regno: string,
): Promise<Student | false>;
export async function useMentee(regno?: string) {
  const auth = useCookie<string>("nitt_token");
  if (!auth.value) return false;
  if (regno) {
    try {
      const user = await $fetch<Student>(
        `/api/mentees/${regno}`,
        {
          method: "GET",
          headers: { "Authorization": `Bearer ${auth.value}` },
        },
      );
      return user;
    } catch (e) {
      return false;
    }
  } else {
    const users = await $fetch<Student[]>(`/api/mentees/me`, {
      method: "GET",
      headers: { "Authorization": `Bearer ${auth.value}` },
    });
    return users;
  }
}

export async function useSudoMentee(): Promise<Student[]>;
export async function useSudoMentee(
  regno: string,
): Promise<Student | false>;
export async function useSudoMentee(regno?: string) {
  const auth = useCookie<string>("nitt_token");
  if (!auth.value) return false;
  if (regno) {
    try {
      const user = await $fetch<Student>(
        `/api/mentees/${regno}`,
        {
          method: "GET",
          headers: { "Authorization": `Bearer ${auth.value}` },
        },
      );
      return user;
    } catch (e) {
      return false;
    }
  } else {
    const users = await $fetch<Student[]>(`/api/mentees/all`, {
      method: "GET",
      headers: { "Authorization": `Bearer ${auth.value}` },
    });
    return users;
  }
}

import type { Meeting, Mentee, User } from "@/types/types.js";

export async function useMentee(): Promise<Mentee[]>;
export async function useMentee(
  regno: string,
): Promise<(Mentee & { meetings: Meeting[], mentor: User | null }) | false>;
export async function useMentee(regno?: string) {
  const auth = useCookie<string>("nitt_token");
  if (!auth.value) return false;
  if (regno) {
    try {
      const user = await $fetch<Mentee & { meetings: Meeting[] }>(
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
    const users = await $fetch<Mentee[]>(`/api/mentees/me`, {
      method: "GET",
      headers: { "Authorization": `Bearer ${auth.value}` },
    });
    return users;
  }
}

export async function useSudoMentee(): Promise<Mentee[]>;
export async function useSudoMentee(
  regno: string,
): Promise<(Mentee & { meetings: Meeting[], mentor: User | null }) | false>;
export async function useSudoMentee(regno?: string) {
  const auth = useCookie<string>("nitt_token");
  if (!auth.value) return false;
  if (regno) {
    try {
      const user = await $fetch<Mentee & { meetings: Meeting[], mentor: User | null }>(
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
    const users = await $fetch<Mentee[]>(`/api/mentees/all`, {
      method: "GET",
      headers: { "Authorization": `Bearer ${auth.value}` },
    });
    return users;
  }
}

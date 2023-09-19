import type { Meeting } from "@/types/types.js";

export async function useMeeting(id: number) {
  const auth = useCookie<string>("nitt_token");
  if (!auth.value) return false;
  const meeting = await $fetch<Meeting>(
    `/api/meetings/${id}`,
    {
      method: "GET",
      headers: { "Authorization": `Bearer ${auth.value}` },
    },
  );
  return meeting;
}

import type { Department } from "@/types/types.js";

export async function useDept(): Promise<Department[]> {
  const auth = useCookie<string>("nitt_token");
  if (!auth.value) return [];
  const dept = await $fetch<Department[]>(
    `/api/dept`,
    {
      method: "GET",
      headers: { "Authorization": `Bearer ${auth.value}` },
    },
  );
  return dept || [];
}

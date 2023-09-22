import { defineStore } from "pinia";
import { User } from "types/types";

export const useUserStore = defineStore("userInfo", {
  state: () => {
    return {
      username: "",
      loggedIn: false,
      department: 0,
      id: 0,
      level: -1,
      faculty: false,
      student: false,
    } as User & { loggedIn: boolean };
  },
  actions: {
    signOut() {
      this.loggedIn = false;
    },
  },
});

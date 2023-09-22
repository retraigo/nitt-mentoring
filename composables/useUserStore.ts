import { defineStore } from "pinia";

export const useUserStore = defineStore("userInfo", {
  state: () => {
    return {
      username: "",
      loggedIn: false,
      department: 0,
      id: 0,
      level: -1,
    };
  },
  actions: {
    signOut() {
      this.loggedIn = false;
    },
  },
});

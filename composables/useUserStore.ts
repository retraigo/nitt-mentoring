import { defineStore } from "pinia";

export const useUserStore = defineStore("userInfo", {
  state: () => {
    return {
      username: "",
      loggedIn: false,
      id: 0,
      level: 0,
    };
  },
});

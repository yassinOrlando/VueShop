import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    isLoggedIn: false,
    username: "",
    token: "",
  }),
  getters: {
    getUsername: (state) => state.user.username,
    getUserToken: (state) => state.user.token,
  },
  actions: {
    setUser(username, token) {
      this.username = username;
      this.token = token;
      this.isLoggedIn = true;
    },
    logout() {
      this.username = "";
      this.token = "";
      this.isLoggedIn = false;
    },
  },
});

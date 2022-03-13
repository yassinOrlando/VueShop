import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    isLoggedIn: false,
    username: "",
    userId: 0,
    token: "",
  }),
  getters: {
    getUsername: (state) => state.username,
    getUserToken: (state) => state.token,
  },
  actions: {
    setUser(username, token, id) {
      this.username = username;
      this.token = token;
      this.userId = id;
      this.isLoggedIn = true;
    },
    logout() {
      let res = confirm("Are you sure you want to log out?");

      if (res) {
        this.username = "";
        this.token = "";
        this.isLoggedIn = false;
        this.userId = 0;
      }
    },
  },
});

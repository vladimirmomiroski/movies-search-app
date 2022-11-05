import { defineStore } from "pinia";

export const useAuthenticationStore = defineStore("Authentication", {
  state: () => ({
    loginMode: true
  }),

  actions: {
    signInHandler() {
        this.loginMode = true
    },
    signUpHandler() {
        this.loginMode = false
    }
  },
});
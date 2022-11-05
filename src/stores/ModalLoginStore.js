import { defineStore } from "pinia";

export const useModalLogin = defineStore("modalLogin", {
  state: () => ({
    modalOpen: false
  }),

  actions: {
    modalOpenHandler() {
        this.modalOpen = true
    },
    modalCloseHandler() {
        this.modalClose = false
    }
  },
});

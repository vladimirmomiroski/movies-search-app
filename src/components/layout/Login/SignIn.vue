<template>
    <div class="d-flex flex-column align-items-center">
  <form class="sign-in pt-4">
    <div class="d-flex flex-column w-100 mb-2">
      <label class="sign-in-label mb-1" for="username">Username: </label>
      <input class="sign-in-input" id="username" type="text" v-model="username" />
    </div>
    <div class="d-flex flex-column w-100">
    <label class="sign-in-label mb-1" for="password">Password: </label>
    <input class="sign-in-input" id="password" type="password" v-model="password" />
</div>
 <LoginButton text="Sign In" />
  </form>
</div>
</template>

<script>
import { ref } from "@vue/reactivity";
import LoginButton from "../../UI/loginButton/LoginButton.vue";
export default {
  components: {
  LoginButton
  },
  data() {
    const username = ref("");
    const password = ref("");

    return { username, password };
  },
};
</script>

<style>
.sign-in {
  width: 80%;
}

.sign-in-input {
  border:none;
  outline: none;
  background-color: var(--color-gray);
  padding:0.4rem;
  border-radius:0.1rem;
}

.sign-in-label {
  font-size: 0.9rem;
  color: var(--color-gray);
}
</style>

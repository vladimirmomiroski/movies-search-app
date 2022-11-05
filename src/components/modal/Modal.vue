<template>
  <Teleport to="#modals">
    <div class="backdrop">
      <div class="custom-modal rounded">
        <div class="text-center d-flex border-bottom">
          <div @click="AuthenticationStore.signInHandler" class="login-box w-50 py-4" :class="[AuthenticationStore.loginMode ? 'active-mode' : '']">Sign In</div>
          <div @click="AuthenticationStore.signUpHandler" class="login-box w-50 py-4" :class="[!AuthenticationStore.loginMode ? 'active-mode' : '']">Sign Up</div>
        </div>
        <SignIn />
      </div>
    </div>
  </Teleport>
</template>

<script>
import SignIn from "../layout/Login/SignIn.vue";
import { useAuthenticationStore } from "../../stores/AuthenticationStore";

export default {
  components: {
    SignIn,
  },
  setup() {


    const AuthenticationStore = useAuthenticationStore();


    return { AuthenticationStore };
  },
};
</script>

<style>
.active-mode {
  background-color: var(--color-light-dark);
}

.login-box {
  font-size: 1.1rem;
  color: var(--color-light);
}

.backdrop {
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(59, 59, 59, 0.5);
  z-index: 3;
}

.custom-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--color-dark);
  border: 3px solid var(--color-blue);
  width: 30%;
}
</style>

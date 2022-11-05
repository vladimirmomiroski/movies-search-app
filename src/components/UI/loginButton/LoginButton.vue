<template>
  <button class="login-button w-100 my-4">{{ text }}</button>
</template>

<script>
export default {
props: {
    text: String
}
}
</script>

<style>
.login-button {
    border:none;
    padding:0.4rem 0;
    background-color: var(--color-light-blue);
    color: var(--color-dark);
    font-weight: 500;
}

.login-button:hover {
    transition: .2s ease-in-out;
    background-color: var(--color-blue);
    color: var(--color-light);
}
</style>
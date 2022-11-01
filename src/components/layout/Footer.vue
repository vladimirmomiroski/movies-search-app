<template>
  <footer class="footer py-4">
    <div class="container">
      <span class="text-light footer-text">Copyright &#169; moovi - {{ year }}</span>
    </div>
  </footer>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import { ref } from "vue";
export default {
  data() {
    const year = ref("");

    onMounted(() => {
      year.value = new Date().getFullYear();
    });
    return { year };
  },
};
</script>

<style>
.footer {
  background-color: var(--color-dark);
  border-top: 1px solid var(--color-gray);
}

.footer-text {
  font-size:0.9rem;
}
</style>

<template>
  <div>
    <Navbar />
    <Modal v-if="modalLogin.modalOpen" />
    <RouterView />

    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/layout/Navbar.vue";
import Footer from "./components/layout/Footer.vue";
import Modal from "./components/modal/Modal.vue";
import { useMoviesStore } from "./stores/MoviesStore";
import { useModalLogin } from "./stores/ModalLoginStore";
import { onMounted } from "vue";

export default {
  components: {
    Navbar,
    Footer,
    Modal,
  },
  setup() {
    const moviesStore = useMoviesStore();
    const modalLogin = useModalLogin();

    onMounted(() => {
      moviesStore.fetchMoviesData(
        "https://imdb-api.com/en/API/Top250Movies/k_bt7tjaxj"
      );
    });
    return { modalLogin };
  },
};
</script>

<template>
    <div class="container movie-details-page">
      <div class="row">
        <div class="col-6">comments section</div>
        <div class="col-6" v-if="movieCard">
          <h2>{{ movieCard.title }}</h2>
        </div>
      </div>
    </div>
</template>

<script>
import { ref, watchEffect } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { useMoviesStore } from "../../stores/MoviesStore";
export default {
  setup() {
    const moviesStore = useMoviesStore();
    const route = useRoute();

    const movieCard = ref(null);

    watchEffect(() => {
      const { id } = route.params;
      const card = moviesStore.movies.find((movie) => movie.id === id);
      movieCard.value = card;
      console.log(movieCard.value);

      console.log("card loaded");
    }, moviesStore);

    return { movieCard };
  },
};
</script>

<style>
.movie-details-page {
  min-height:calc(100vh - 154.31px);
}
</style>

<template>
  <main class="main-container py-5">
    <div class="container mt-5">
      <h4 class="">{{ moviesStore.getMoviesLength }} Movies were found!</h4>
    </div>
    <div class="container mx-auto py-5 movie-list">
      <MovieDetails v-for="movie in moviesStore.movies" :key="movie.id" :movie="movie" />
    </div>
  </main>
</template>

<script>
import MovieDetails from '../components/layout/movieCard/MovieCard.vue'

import { useMoviesStore } from "../stores/MoviesStore";
export default {
  components: {
MovieDetails
  },
  setup() {
    const moviesStore = useMoviesStore();

    return { moviesStore };
  },
};
</script>

<style>
.main-container {
  background-color: var(--color-dark);
  color: var(--color-light);
}

.movie-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 3rem;
}

</style>

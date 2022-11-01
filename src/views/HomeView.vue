<template>
  <main class="main-container">
    <h3>{{ moviesStore.getMoviesLength}}</h3>
    <div class="container mx-auto py-5 movie-list">
      <div v-for="{ image, title, year, id } in moviesStore.movies" :key="id">
        <div class="d-flex flex-column">
          <img
            :src="image"
            class="movie-image rounded"
            alt="Movie image"
          />
          <p class="m-0 mt-1 movie-title">{{ title }}</p>
          <span class="movie-year">{{year}}</span>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { onMounted } from "@vue/runtime-core";

import { useMoviesStore } from "../stores/MoviesStore";
export default {
  setup() {
    const moviesStore = useMoviesStore();

    onMounted(() => {
      moviesStore.fetchMoviesData(
        "https://imdb-api.com/en/API/Top250Movies/k_bt7tjaxj"
      );
    });

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

.movie-image {
  width:100%;
  object-fit: cover;
  border: 0.3rem solid var(--color-light);
  cursor: pointer;
}

.movie-image:hover {
  transition: .2s ease-in-out;
  border-color: var(--color-light-blue);
  opacity: 40%;
}

.movie-title {
  font-size:0.9rem;
}

.movie-year {
  color: var(--color-gray);
  font-size: 0.9rem;
}
</style>

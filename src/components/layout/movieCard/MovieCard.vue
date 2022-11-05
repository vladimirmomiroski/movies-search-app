<template>
  <div class="d-flex flex-column" @click="handleMovieClick(movie.id)">
    <img :src="movie.image" class="movie-image rounded" alt="Movie image" />
    <p class="m-0 mt-1 movie-title">{{ movie.title }}</p>
    <span class="movie-year">{{ movie.year }}</span>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  props: {
    movie: Object,
  },
  setup() {
    const router = useRouter();
    const handleMovieClick = (id) => {
      router.push({
        path: 'movie-details/' + id
      });
    };

    return { handleMovieClick };
  },
};
</script>

<style>
.movie-image {
  width: 100%;
  object-fit: cover;
  border: 0.3rem solid var(--color-light);
  cursor: pointer;
}

.movie-image:hover {
  transition: 0.2s ease-in-out;
  border-color: var(--color-light-blue);
  opacity: 40%;
}

.movie-title {
  font-size: 0.9rem;
}

.movie-year {
  color: var(--color-gray);
  font-size: 0.9rem;
}
</style>

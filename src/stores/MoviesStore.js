import { defineStore } from "pinia";
import axios from "axios";

export const useMoviesStore = defineStore("moviesStore", {
  state: () => ({
    movies: [],
    loading: false,
  }),

  actions: {
    fetchMoviesData(url) {
      this.loading = true;
     axios.get(url).then((res) => {
        this.loading = false;
        this.movies = res.data.items
      }); 
    },
  },
  getters: {
    getMoviesLength() {
      return this.movies.length;
    }
      
  },
});

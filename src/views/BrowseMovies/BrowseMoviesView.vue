<template>
  <div class="browse-movies-container">
  <Search/>
  <div class="container">
    <h2>browse movies</h2>
  </div>
</div>
</template>

<script>

import Search from '../../components/layout/search/Search.vue'
export default {
  components: {
    Search
  }
}
</script>
<style>
@media (min-width: 1024px) {
  .browse-movies-container {
    min-height: calc(100vh - 154.31px);
    background-color: var(--color-light-dark)
  }
    
}
</style>

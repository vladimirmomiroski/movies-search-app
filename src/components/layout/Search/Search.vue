<template>
  <section class="py-4 search-section">
    <div class="container">
        <h1 class="title mb-3">Search term:</h1>
        <div>
            <input class="py-2 px-3 rounded custom-input" type="text" placeholder="Search for a movie...">
        </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.search-section {
  background-color: var(--color-dark);
}

.custom-input {
    border:none;
    background-color: var(--color-light-dark);
    color: var(--color-dark);
    outline: none;
}

.custom-input::placeholder {
    font-size:0.9rem;
}

.title {
    font-size: 1rem;
    color: var(--color-gray);
}
</style>

<template>
  <section class="py-5 search-section">
    <div class="container">
      <h1 class="title">Search term:</h1>
      <div class="d-flex justify-content-between align-items-start">
        <input
          class="py-2 px-3 rounded custom-input w-100"
          type="text"
          placeholder="Search movie..."
        />
        <button class="custom-button rounded ms-4">Search</button>
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
  border: none;
  background-color: var(--color-light-dark);
  color: var(--color-gray);
  outline: none;
}

.custom-button {
  border:none;
  padding: 0.5rem 1.3rem;
  background-color: var(--color-light-blue);
  color: var(--color-dark);
  font-weight: 500;
}

.custom-button:hover {
  transition: .2s ease-in-out;
  background-color: var(--color-blue);
  color: var(--color-light);
}

.custom-input::placeholder {
  font-size: 0.9rem;
}

.title {
  font-size: 1rem;
  color: var(--color-gray);
}
</style>

<template>
  <nav class="py-3 custom-navbar">
    <div class="container d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center">
        <h2 class="title-logo">moovi</h2>
      </div>
      <div>
        <router-link class="text-decoration-none links" to="/"
          >Home</router-link
        >
        <router-link class="ms-3 text-decoration-none links" to="/about"
          >About</router-link
        >
      </div>
    </div>
  </nav>
</template>

<style>
.custom-navbar {
  background-color: var(--color-light-dark);
  border-bottom: 1px solid var(--color-gray);
}

.title-logo {
  font-weight: 700;
  font-style: italic;
  font-size: 1.9rem;
  color: var(--color-blue);
  transform: rotate(1deg);
}

.links {
  font-weight: 700;
  color: var(--color-light);
}
</style>

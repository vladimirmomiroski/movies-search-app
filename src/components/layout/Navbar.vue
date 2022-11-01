<template>
  <nav class="py-3 custom-navbar w-100">
    <div class="container d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center">
        <h2 class="title-logo">moovi</h2>
      </div>
      <div class="d-flex align-items-center">
        <div>
          <router-link
            class="text-decoration-none links"
            class-active="router-link-active"
            to="/"
            >Home</router-link
          >
          <router-link
            class="active ms-4 text-decoration-none links"
            to="/browse-movies"
            >Browse Movies</router-link
          >
        </div>
        <p class="m-0 ms-3 login px-3">Login</p>
      </div>
    </div>
  </nav>
</template>

<style>
.router-link-active {
  color: yellow;
}

.custom-navbar {
  background-color: var(--color-light-dark);
  border-bottom: 1px solid var(--color-gray);
  position: fixed;
  top: 0;
}

.title-logo {
  font-weight: 700;
  font-style: italic;
  font-size: 2.1rem;
  color: var(--color-blue);
  transform: rotate(1deg);
}

.links {
  font-weight: 500;
  color: var(--color-light-blue);
}

.links:hover {
  transition: .2s ease-in-out;
  color: var(--color-light);
}

.login {
color: var(--color-light);
border-left:2px solid var(--color-light);
cursor: pointer;
font-weight:700;
letter-spacing: 0.02rem;
}

.login:hover {
  transition: .2s ease-in-out;
  color: var(--color-light-blue);
 border-color: var(--color-light-blue);
}

</style>

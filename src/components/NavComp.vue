<template>
  <nav class="navbar navbar-expand-lg bg-primary">
    <div class="container text-light justify-content-between">
      <router-link to="/" class="navbar-brand text-light fw-bold">Eco-web</router-link>
      <button
        class="navbar-toggler bg-light"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto nav-dark">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page">
              <a class="text-light text-center nav-link active fs-5">Empreinte écologique</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/empreinte" class="nav-link"
              ><a class="text-light text-center nav-link fs-5">Informations</a>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>

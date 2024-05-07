<template>
  <nav class="navbar navbar-expand-lg bg-success">
    <div class="container justify-content-around">
      <router-link to="/" class="navbar-brand text-light fw-bold">Eco-web</router-link>
      <router-link to="/" class="nav-link active" aria-current="page">
        <a class="text-black nav-link active fs-5">Empreinte écologique</a>
      </router-link>

      <router-link to="/empreinte" class="nav-link"
        ><a class="text-black nav-link fs-5">Informations</a>
      </router-link>
    </div>
  </nav>
</template>

<style scoped>
.nav-link {
  color: rgb(23, 19, 19);
  font-size: 1em;
  background-color: rgba(229, 223, 223, 0.246);
  padding: 0.5em;
  border-radius: 50%;
  margin: 0.1em;
}
.navbar {
  padding: 0.2em 1rem;
}
</style>

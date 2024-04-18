<template>
  <nav class="navbar navbar-expand-lg bg-success">
    <div class="container justify-content-around">
      <a class="navbar-brand">GREEN-IT</a>
      <router-link to="/" class="nav-link active" aria-current="page">
        <a class="nav-link active">Projet</a>
      </router-link>

      <router-link to="/empreinte" class="nav-link"><a class="nav-link">Empreinte</a> </router-link>

      <router-link to="/maturite" class="nav-link"
        ><a class="nav-link">Maturité éco-conception</a>
      </router-link>

      <router-link to="/about" class="nav-link"><a class="nav-link">Participants</a> </router-link>
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

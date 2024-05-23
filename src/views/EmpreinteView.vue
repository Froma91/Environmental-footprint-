import { h } from 'vue';
<template>
  <div class="container py-4">
    <div class="bg-primary text-white text-center p-3 rounded">
      <h1 class="text-light">Empreinte Écologique des Sites Internet</h1>
    </div>

    <div class="col-lg-12">
      <div class="bg-light p-3 rounded mb-3 section">
        <h2>Impact des Utilisateurs et des Terminaux</h2>
        <p>
          Les utilisateurs accèdent aux sites internet à travers divers terminaux comme les
          ordinateurs, les téléphones portables et les tablettes. Chaque terminal consomme de
          l'énergie et contribue à l'empreinte écologique, en particulier en raison des matériaux
          utilisés et de l'énergie nécessaire à leur production et à leur fonctionnement.
        </p>
        <img
          src="/src/assets/images/terminaux.png"
          alt="Impact des utilisateurs et des terminaux"
          class="img-infographic"
        />
        <!--sources-->
        <p class="text-muted">
          Source:
          <a href="https://openai.com/index/dall-e-2/">DALL-E d'OpenAI</a>
        </p>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-lg-12">
        <div class="bg-light p-3 rounded mb-3 section">
          <h2>Consommation Énergétique des Data Centers</h2>
          <p>
            Les centres de données, qui hébergent les sites internet, consomment une grande quantité
            d'électricité, principalement pour alimenter les serveurs et refroidir les équipements.
          </p>
          <img
            src="https://www.sciencesetavenir.fr/redaction/infographies/JPG/negawatt_it.jpg"
            alt="Consommation énergétique des data centers"
            class="img-infographic"
          />
        </div>
      </div>

      <div class="col-lg-12">
        <div class="bg-light p-3 rounded mb-3 section">
          <h2>Optimisation des Ressources Web</h2>
          <p>
            La minimisation des ressources nécessaires pour charger les sites web (comme les images
            optimisées, le code minimaliste) peut réduire significativement l'empreinte énergétique.
          </p>
          <img
            src="https://business-antidote.com/static/uploads/2016/03/10-points-optimisation-technique-contenu-site-internet.jpg"
            alt="Optimisation des ressources web"
            class="img-infographic"
          />
        </div>
      </div>

      <div class="col-lg-12">
        <div class="bg-light p-3 rounded mb-3 section">
          <h2>Énergies Renouvelables</h2>
          <p>
            L'adoption d'énergies renouvelables par les hébergeurs web est cruciale pour diminuer
            l'impact environnemental des sites internet.
          </p>
          <img
            src="https://cdn.hellowatt.fr/media/uploads/zinnia/2019/12/02/energies-renouvelables-graphiques.png"
            alt="Utilisation d'énergies renouvelables"
            class="img-infographic"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  font-family: 'Arial', sans-serif;
  color: #333;
}

.bg-primary {
  background-color: #39d206 !important;
}

.section {
  border: 1px solid #ddd;
  margin-top: 20px;
  padding: 15px;
  border-radius: 8px;
  background-color: white;
}

.section h2 {
  color: #007bff;
}

.section p {
  font-size: 16px;
  line-height: 1.5;
}

.img-infographic {
  width: 100%;
  height: auto;
  display: block;
  margin-top: 10px;
  border-radius: 8px;
}
</style>

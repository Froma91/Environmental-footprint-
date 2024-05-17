<template>
  <div class="infographic container mt-5 mb-5 p-5 bg-light rounded shadow text-dark text-center">
    <h1>Impact écologique</h1>
    <div class="section" id="temperature-rise">
      <h2>Augmentation des Températures</h2>
      <p>
        Les températures mondiales ont augmenté de <strong>1.5°C</strong> depuis l'ère
        pré-industrielle.
      </p>
      <div class="row p-0 col-md-5 order-md-1 my-3 mx-auto">
        <img
          src="https://www.liberation.fr/resizer/BKeOcDgV2klzN42S4GA285V5tnU=/1600x0/filters:format(png):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/liberation/72MSVYFNQBBGHAXTUVUIGOADVA.png"
          alt="Graphique des températures"
          style="width: 500px; height: 500px"
        />
      </div>
      <p>
        <a
          href="https://www.ecologie.gouv.fr/hausse-temperature-globale-sest-encore-accentuee-selon-dernier-rapport-du-giec"
          >Source: GIEC</a
        >
      </p>
    </div>
    <div class="section" id="sea-level-rise">
      <h2>Montée des Eaux</h2>
      <p>Le niveau de la mer a augmenté de <strong>18cm</strong> depuis 2019.</p>
      <div class="row p-0 col-md-5 order-md-1 my-3 mx-auto">
        <img
          src="https://static1.mclcm.net/iod/images/v2/69/photo/328476/630x354_100_300_000000x30x0.jpg?ts=20190926151650"
          alt="Graphique de la montée des eaux"
        />
      </div>
      <p>
        <a
          href="https://www.letemps.ch/sciences/environnement/banquise-dete-larctique-deuxieme-plus-bas-niveau-jamais-observe"
          >Source: La chaien météo</a
        >
      </p>
    </div>
    <div class="section" id="ice-melt">
      <h2>Fusion des Glaces</h2>
      <ul
        class="text-start p-0 col-md-5 order-md-1 my-3 mx-auto fs-5 list-unstyled text-dark text-center text-md-start"
      >
        <li>La banquise arctique a perdu <strong>12.8%</strong> de sa superficie en 40 ans.</li>
        <li>
          La calotte glaciaire du Groenland a perdu <strong>3.8%</strong> de sa masse en 10 ans.
        </li>
        <li>
          La calotte glaciaire de l'Antarctique a perdu <strong>2.5%</strong> de sa masse en 10 ans.
        </li>
        <li>Les glaciers de montagne ont perdu <strong>28%</strong> de leur masse en 40 ans.</li>
        <li>Les glaciers de l'Himalaya ont perdu <strong>15%</strong> de leur masse en 40 ans.</li>
        <li>Les glaciers des Andes ont perdu <strong>30%</strong> de leur masse en 40 ans.</li>
      </ul>
      <img src="/src/assets/images/imageGlacier.png" alt="Graphique de la fusion des glaces" />
      <p>
        <a
          href="https://www.letemps.ch/sciences/environnement/banquise-dete-larctique-deuxieme-plus-bas-niveau-jamais-observe"
          >Source: Le Temps</a
        >
      </p>
    </div>
  </div>
</template>

<style scoped>
.infographic {
  font-family: 'Arial', sans-serif;
  color: #333;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
}

.infographic h1 {
  color: #007bff;
  text-align: center;
}

.section {
  border: 1px solid #ddd;
  margin-top: 20px;
  padding: 15px;
  border-radius: 8px;
  background-color: white;
}

.section h2 {
  color: #555;
}

.section p {
  font-size: 16px;
  line-height: 1.5;
}

.img {
  width: 1000px;
  height: 500px;
  display: block;
  margin-top: 10px;
  border-radius: 8px;
}
</style>

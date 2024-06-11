<template>
  <div class="container-fluid p-0 m-0 bg-light text-dark" style="font-family: 'Arial', sans-serif">
    <div class="row">
      <img
        class="img-fluid p-0 text-center rounded mx-auto d-block"
        src="/src/assets/images/Conception.png"
        alt="Cycle de vie d'un site Internet"
        style="filter: brightness(0.9); max-width: 93%; height: auto"
      />
    </div>

    <div class="container my-4">
      <div class="row">
        <div class="col-md-12">
          <h2 class="fw-bold text-center my-3">Le fonctionnement d'une recherche Internet</h2>
          <p>
            Lorsque vous effectuez une recherche sur internet, une série d'opérations complexes se
            produit presque instantanément pour vous fournir des résultats pertinents. Voici les
            étapes principales du fonctionnement d'une recherche sur internet :
          </p>
          <ul>
            <li>
              <strong>Saisie de la requête :</strong> Vous saisissez une requête dans la barre de
              recherche de votre navigateur.
            </li>
            <li>
              <strong>Envoi de la requête :</strong> Votre navigateur envoie la requête à un moteur
              de recherche, qui va chercher les résultats les plus pertinents.
            </li>
            <li>
              <strong>Traitement de la requête :</strong> Le moteur de recherche analyse la requête
              et la compare à une immense base de données pour trouver les résultats les plus
              pertinents.
            </li>
            <li>
              <strong>Affichage des résultats :</strong> Le moteur de recherche affiche les
              résultats les plus pertinents en fonction de votre requête.
            </li>
            <li>
              <strong>Navigation sur les résultats :</strong> Vous pouvez cliquer sur les résultats
              pour accéder aux pages web correspondantes.
            </li>
          </ul>
          <img
            class="img-fluid p-3"
            src="/src/assets/images/fonctionnementRechercheInternet.png"
            alt="Fonctionnement d'un moteur de recherche"
            style="max-width: 100%; height: auto"
          />
          <p>
            <a href="https://www.schoolmouv.fr/cours/un-monde-de-reseaux/fiche-de-cours"
              >Source: SchoolMouv</a
            >
          </p>
        </div>
      </div>

      <h2 class="fw-bold text-center p-3">Empreinte environnementale d'un site Internet</h2>
      <!-- Trois columnes de texte au-dessous de carousel -->
      <div class="row text-center">
        <div class="col-lg-4">
          <img class="img-cercle" src="/src/assets/images/rts.png" alt="logo_rts" />

          <h2>Le coût écologique du clic</h2>
          <p>Reportage de la RTS</p>
          <p>
            <a
              class="btn btn-secondary"
              href="https://www.rts.ch/emissions/abe/2020/video/tout-numerique-le-cout-ecologique-du-clic-26744868.html"
              target="_blank"
              >Voir plus &raquo;</a
            >
          </p>
        </div>
        <div class="col-lg-4">
          <img
            class="img-cercle"
            src="https://www.agence-web.green/wp-content/uploads/eco-friendly-web-design-illustration.webp"
            alt="logo_ecoconception"
          />
          <h2>Éco-concenption</h2>
          <p>Dévéloppement des sites web responsables</p>
          <p>
            <a
              class="btn btn-secondary"
              href="https://collectif.greenit.fr/ecoconception-web/115-bonnes-pratiques-eco-conception_web.html"
              target="_blank"
              >Voir plus &raquo;</a
            >
          </p>
        </div>
        <div class="col-lg-4">
          <img
            class="img-cercle"
            src="https://leclaireur.fnac.com/wp-content/uploads/2022/07/livres-1200.jpg"
            alt="logo_litterature"
          />
          <h2>Littérature</h2>
          <p>Ouvrages d'actualité</p>
          <p>
            <a
              class="btn btn-secondary"
              href="https://www.greenit.fr/environmental-footprint-of-the-digital-world/"
              target="_blank"
              >Voir plus &raquo;</a
            >
          </p>
        </div>
        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7">
            <h3 class="featurette-heading">
              Une étude menée par le Groupe d'experts intergouvernemental sur l'évolution du climat
              (GIEC) explore les facteurs déterminants pour limiter le réchauffement climatique à
              <span class="badge rounded-pill bg-danger">1,5 °C.</span>
            </h3>
            <p class="lead">
              Une réflexion approfondie doit être consacrée aux différents éléments qui influencent
              la « viabilité » des stratégies ou des choix d'adaptation et d'atténuation au sein de
              chaque cadre qui, exécutés simultanément, limiteraient la hausse des températures
              mondiales à 1,5 °C dans le domaine de la croissance durable.
            </p>
            <a href="https://www.ipcc.ch/">source: IPCC</a>
          </div>
          <div class="row p-0 col-md-5 order-md-1 my-3">
            <img
              id="img1"
              class="img-fluid mx-auto d-block"
              alt="image_impact"
              src="/src/assets/images/img_impact.png"
              style="filter: brightness(0.9); max-width: 400px; max-height: 300px"
            />
          </div>
        </div>
        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h3 class="featurette-heading">
              Une étude de "THE SHIFT PROJECT" montre que le numérique est responsable de
              <span class="badge rounded-pill bg-warning text-dark">4 %</span> des émissions de gaz
              à effet de serre mondiales.
            </h3>
            <p class="lead">
              Les technologies numériques forment un réseau mondial : divers appareils tels que les
              smartphones, les ordinateurs et les tablettes sont interconnectés via diverses
              infrastructures réseau, notamment des câbles terrestres et sous-marins, des antennes
              de réseaux mobiles et des fibres optiques. Ces appareils communiquent en échangeant
              des données stockées et traitées dans des centres de données, qui peuvent être
              considérés comme le cœur de ce système complexe. Il est important de noter que tous
              les composants de ce système nécessitent de l'énergie non seulement pendant leur
              fonctionnement (phase d'utilisation) mais également pendant le processus de
              production, qui implique l'extraction des matières premières, la fabrication
              industrielle et le transport vers les utilisateurs finaux, consommant ainsi
              d'importantes ressources biotiques et abiotiques.
            </p>
            <a href="https://www.ipcc.ch/">source: IPCC</a>
          </div>
          <div class="row p-0 col-md-5 order-md-1 my-3">
            <img
              class="rounded mx-auto d-block"
              alt="image2"
              id="img1"
              src="/src/assets/images/img2.png"
              style="filter: brightness(0.9); max-width: 450; max-height: 350px"
            />
          </div>
        </div>
        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7">
            <h3 class="featurette-heading">
              Les <span class="badge rounded-pill bg-success">9 limites planétaires</span> sont des
              seuils de tolérance pour neuf processus planétaires qui régulent la stabilité et la
              résilience de la Terre.
            </h3>
            <p class="lead">
              Ces processus sont : le changement climatique, l'intégrité de la biosphère,
              l'acidification des océans, l'utilisation de l'eau douce, la perturbation du cycle
              biogéochimique de l'azote et du phosphore, l'altération de l'utilisation des terres,
              la perte de biodiversité, l'aérosol atmosphérique et la pollution chimique. Ces
              limites planétaires sont des indicateurs clés pour évaluer l'état de santé de la
              planète et pour identifier les domaines où des actions urgentes sont nécessaires pour
              éviter des changements irréversibles et potentiellement catastrophiques.
            </p>
            <a href="https://fr.wikipedia.org/wiki/Limites_plan%C3%A9taires">source: wikipedia</a>
          </div>
          <div class="row p-0 col-md-5 order-md-1 my-3">
            <img
              id="img1"
              class="mx-auto d-block"
              alt="image4"
              src="/src/assets/images/limites_planetaires.png"
              style="filter: brightness(0.9); max-width: 450px; max-height: 350px"
            />
          </div>
        </div>
        <hr class="featurette-divider" />
        <div class="row p-3">
          <div class="col-md-7 order-md-2">
            <h3 class="featurette-heading">
              Voici quelques outils en ligne pour obtenir une estimation de l'empreinte carbone de
              votre site internet :
            </h3>
            <p class="lead">
              Ce site internet propose une série de pages web qui permettent d'estimer l'empreinte
              carbone, mais il est recommandé de les utiliser avec précaution, car les méthodologies
              employées ne sont pas toujours clairement expliquées.
            </p>
            <a href="https://dodonut.com/blog/digital-carbon-footprint-tools/">source: dodonut</a>
          </div>
          <div class="row p-0 col-md-5 order-md-1 my-5">
            <img
              class="mx-auto d-block"
              alt="eco_label"
              id="eco_label"
              src="/src/assets/images/eco_label.png"
              style="filter: brightness(0.9); max-width: 510px; max-height: 150px"
            />
          </div>
        </div>
        <hr class="featurette-divider" />
        <div class="row-fluid text-center">
          <div class="col bg-light py-3 order-md-2 text-center">
            <img
              class="img-cercle"
              src="/src/assets/images/photo_cv_2024.jpg"
              style="max-width: 150px; max-height: 150px"
            />
            <h2 class="margin">Fredy Rodriguez</h2>
            <p class="margin">Etudiant en informatique de gestion</p>
            <p class="margin">
              <a
                class="btn btn-secondary"
                href="https://www.linkedin.com/in/fredy-rodriguez-1a736a132/"
                target="_blank"
                >Voir plus &raquo;</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.img-fluid {
  max-width: 100%;
  height: auto;
}
.img-cercle {
  border-radius: 50%; /* Makes the image round */
  width: 140px;
  height: 140px;
}
</style>

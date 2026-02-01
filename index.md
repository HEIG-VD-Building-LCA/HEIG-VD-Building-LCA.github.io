<style>
.tool-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.tool-card {
  border: 1px solid #e1e4e8;
  border-radius: 8px;
  padding: 20px;
  background: #fff;
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
}

.tool-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.status-badge {
  font-size: 0.7rem;
  font-weight: bold;
  padding: 3px 8px;
  border-radius: 12px;
  text-transform: uppercase;
  float: right;
}

.stable { background: #d4edda; color: #155724; }
.beta { background: #fff3cd; color: #856404; }
.research { background: #d1ecf1; color: #0c5460; }

.card-links {
  margin-top: 20px;
  display: flex;
  gap: 10px;
}

.btn-github, .btn-demo {
  text-decoration: none;
  font-size: 0.9rem;
  padding: 6px 12px;
  border-radius: 4px;
  border: 1px solid #333;
}

.btn-github { background: #24292e; color: #fff; }
.btn-demo { background: #fff; color: #24292e; }
</style>

---
title: Comment décarboner les bâtiments neufs et existants ?
feature_image: "https://picsum.photos/1300/400?image=989"
feature_text: |
  ## Écobilan des bâtiments et de l'énergie | HEIG-VD
  Outils _open-source_, données, résultats de recherche, formation
excerpt: "Portail de ressources de l'Institut des Énergies (HEIG-VD). Nous développons des solutions _open-source_ pour faciliter la décarbonation et l'optimisation environnementale des bâtiments en Suisse Romande (SIA, KBOB)"
---
Portail de ressources de l'[Institut des Énergies](https://heig-vd.ch/recherche/instituts/ie) ([HEIG-VD](https://heig-vd.ch/)). Nous développons des solutions _open-source_ en écobilan et analyse de cycle de vie (ACV) pour faciliter la décarbonation et l'optimisation environnementale des bâtiments en Suisse Romande en accord avec les normes SIA 2032, 390/1 et les données KBOB.

# Outils et données
### Énergie en exploitation des bâtiments
##### [EcoDynElec](https://huggingface.co/spaces/Building-Energy-LCA-HEIG-VD/EcoDynElec)
_ACV dynamique_, _réseau électrique_

Connaître les impacts carbone de l'électricité consommée en Suisse (mais aussi en France, Allemagne, Italie, Autriche), heure par heure depuis 2016.


# Résultats de recherche
##### Reuse-LCA (OFEN 2021-2025)
_réemploi_, _circularité_, _cas d'études_
- [Rapport du projet sur Aramis](https://www.aramis.admin.ch/Texte/?ProjectID=48238)
- [Visualisation Web des résultats de bâtiment](https://heig-vd-building-lca.github.io/Reuse-LCA)


<div class="tool-grid">

  <div class="tool-card">
    <div class="status-badge stable">Stable</div>
    <h3>Calculateur ACV-SIA</h3>
    <p>Outil d'estimation rapide de l'énergie grise et du carbone selon la norme SIA 2032.</p>
    <div class="card-links">
      <a href="#" class="btn-github">GitHub</a>
      <a href="#" class="btn-demo">Démo</a>
    </div>
  </div>

  <div class="tool-card">
    <div class="status-badge beta">Beta</div>
    <h3>Physique-Bâti-Tool</h3>
    <p>Scripts Python pour la simulation thermique dynamique et l'analyse de sensibilité.</p>
    <div class="card-links">
      <a href="#" class="btn-github">GitHub</a>
    </div>
  </div>

  <div class="tool-card">
    <div class="status-badge research">Recherche</div>
    <h3>Data-KBOB-Viewer</h3>
    <p>Visualisation interactive des données environnementales KBOB pour les matériaux.</p>
    <div class="card-links">
      <a href="#" class="btn-github">GitHub</a>
      <a href="#" class="btn-demo">App</a>
    </div>
  </div>

</div>

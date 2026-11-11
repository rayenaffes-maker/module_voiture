// Modèle Voiture
// Champs : id, nom, couleur, nbrChevaux

class Voiture {
  constructor(id, nom, couleur, nbrChevaux) {
    this.id = id;
    this.nom = nom;
    this.couleur = couleur;
    this.nbrChevaux = nbrChevaux;
  }
}

module.exports = Voiture;

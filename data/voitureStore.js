// Stockage en mémoire des voitures (remplaçable par une vraie base de données)
const Voiture = require('../models/voiture');

let voitures = [
  new Voiture(1, 'Clio', 'Rouge', 90),
  new Voiture(2, 'Golf', 'Noir', 110)
];

let nextId = 3;

const voitureStore = {
  // Retourne toutes les voitures
  findAll() {
    return voitures;
  },

  // Retourne une voiture par son id (ou undefined si introuvable)
  findById(id) {
    return voitures.find((v) => v.id === id);
  },

  // Ajoute une nouvelle voiture et la retourne
  create({ nom, couleur, nbrChevaux }) {
    const voiture = new Voiture(nextId++, nom, couleur, nbrChevaux);
    voitures.push(voiture);
    return voiture;
  }
};

module.exports = voitureStore;

// Routes (end points) du module Voiture
const express = require('express');
const router = express.Router();
const voitureStore = require('../data/voitureStore');

// 1) Ajouter : POST /api/voitures
// Body JSON attendu : { "nom": "...", "couleur": "...", "nbrChevaux": 123 }
router.post('/', (req, res) => {
  const { nom, couleur, nbrChevaux } = req.body || {};

  if (!nom || !couleur || nbrChevaux === undefined) {
    return res.status(400).json({
      message: 'Les champs nom, couleur et nbrChevaux sont obligatoires.'
    });
  }

  const voiture = voitureStore.create({
    nom,
    couleur,
    nbrChevaux: Number(nbrChevaux)
  });

  return res.status(201).json(voiture);
});

// 2) ALL : GET /api/voitures
// Retourne toutes les voitures avec tous leurs champs (y compris l'id)
router.get('/', (req, res) => {
  return res.status(200).json(voitureStore.findAll());
});

// 3) By ID : GET /api/voitures/:id
// Retourne tout le module (voiture) correspondant à l'id
router.get('/:id', (req, res) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({ message: "L'id doit être un nombre." });
  }

  const voiture = voitureStore.findById(id);

  if (!voiture) {
    return res.status(404).json({ message: `Aucune voiture avec l'id ${id}.` });
  }

  return res.status(200).json(voiture);
});

module.exports = router;

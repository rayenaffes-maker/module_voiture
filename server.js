// Point d'entrée de l'application Node.js / Express
require('dotenv').config(); // Charge les variables du fichier .env
const express = require('express');
const voitureRoutes = require('./routes/voitureRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour lire le JSON du body
app.use(express.json());

// Route d'accueil
app.get('/', (req, res) => {
  res.json({
    message: 'API Module Voiture',
    endpoints: {
      ajouter: 'POST /api/voitures',
      all: 'GET /api/voitures',
      byId: 'GET /api/voitures/:id'
    }
  });
});

// Montage des routes du module voiture
app.use('/api/voitures', voitureRoutes);

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

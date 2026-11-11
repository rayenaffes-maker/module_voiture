# Module Voiture - API REST (Node.js / Express)

API de gestion des voitures. Chaque voiture (module) possède : **id**, **nom**, **couleur**, **nbrChevaux**.

## Installation

```bash
npm install
```

## Démarrage

```bash
npm start
# ou en mode développement (rechargement auto)
npm run dev
```

Le serveur démarre sur `http://localhost:3000`.

## Les 3 APIs

### 1. Ajouter — `POST /api/voitures`

Body (JSON) :

```json
{
  "nom": "Megane",
  "couleur": "Bleu",
  "nbrChevaux": 130
}
```

Réponse `201` : la voiture créée avec son `id`.

### 2. ALL — `GET /api/voitures`

Retourne toutes les voitures avec tous leurs champs.

### 3. By ID — `GET /api/voitures/:id`

Retourne la voiture complète (tout le module) correspondant à l'id.
Réponse `404` si l'id n'existe pas.

## Exemples (curl)

```bash
# Ajouter
curl -X POST http://localhost:3000/api/voitures -H "Content-Type: application/json" -d "{\"nom\":\"Megane\",\"couleur\":\"Bleu\",\"nbrChevaux\":130}"

# All
curl http://localhost:3000/api/voitures

# By id
curl http://localhost:3000/api/voitures/1
```

## Structure du projet

```
module_voiture/
├── server.js                # Point d'entrée Express
├── package.json
├── models/
│   └── voiture.js           # Modèle Voiture
├── data/
│   └── voitureStore.js      # Stockage en mémoire
└── routes/
    └── voitureRoutes.js     # Les 3 end points
```

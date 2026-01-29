# DentaFlow - README

> Application DevOps/Sécurisée pour la gestion des patients et modèles 3D dentaires

---

## Démarrage rapide

### 1️ - Cloner le projet

```bash
git clone https://github.com/DentaFlow-Groupes/dentaflow-devops.git

cd dentaflow-devops
```

### 2️ - Configuration de l’environnement

```bash
cp .env.example .env # Éditer .env avec vos valeurs
```

### 3️ - Installation et lancement


```bash
npm install
```

```bash
cd docker
 docker compose --env-file ../.env up --build
```

### 4️ - Accéder à l'application

| Service    | URL                                                              |
| ---------- | ---------------------------------------------------------------- |
| API        | [http://localhost:3000](http://localhost:3000)                   |
| DOC        | [http://localhost:3000/api-docs](http://localhost:3000/api-docs) |
| BDD        | localhost:5432                                                   |

---

## 📁 Structure du projet

```bash
dentaflow/
│
├── .github/
│   └── workflows/
│   │   └── ci-cd.yml
│   └── dependabot.yml
├── docker/
│   ├── Dockerfile
│   └── docker-compose.yml
├── docs/
│   ├── swagger.json
│   └── swagger-definition.js
├── logs/
│   └── .gitkeep
├── src/
│   ├── api/
│   │   ├── routes/
│   │   │    └── health.js
│   │   └── server.js
│   ├── models/
│   └── services/
├── tests/
│   ├── unit/
│   │   └── example.test.js
│   └── integration/
├── .env.example
├── .eslintrc.json
├── .gitignore
├── checklist.sh
├── .eslint.config.mjs
├── .jest.config.js
├── package.json
├── package-lock.json
├── sonar-project.properties
└── README.md
```


## 🧪 Qualité & Tests
### Lancer les tests
Avant de lancer les tests à l'intérieur du container,
vous devez modifier la valeur de la variable NODE_ENV
dans votre fichier .env pour mettre en mode NODE_ENV=test.

Une fois ceci fait, vous devez rebuild le conteneur pour pouvoir lancer les tests
à l'intérieur.
```bash
npm test
```

### Lancer ESLint

```bash
npm run lint
```

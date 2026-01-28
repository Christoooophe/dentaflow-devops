# DentaFlow - README

> Application DevOps/Sécurisée pour la gestion des patients et modèles 3D dentaires

---

## Démarrage rapide

### 1️ - Cloner le projet

```bash
git clone https://github.com/Christoooophe/dentaflow-devops.git

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
docker-compose up -d
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
├── src/
│   ├── api/
│   │   ├── routes/
│   │   └── server.js
│   ├── models/
│   └── services/
│
├── tests/
│   ├── unit/
│   └── integration/
│
├── docs/
│   └── swagger-definition.js
│
├── docker/
├── logs/
│
├── .github/workflows/
│   └── ci-cd.yml
│
├── .env.example
├── Dockerfile
├── docker-compose.yml
├── package.json
├── sonar-project.properties
└── README.md
```


## 🧪 Qualité & Tests
a
### Lancer les tests

```bash
npm test
```

### Lancer ESLint

```bash
npm run lint
```

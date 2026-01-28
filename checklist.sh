#!/bin/bash

echo "=== VALIDATION DU PROJET DENTAFLOW ==="

echo "1. Structure de fichiers"
ls -la

echo "2. Docker opérationnel"
cd ./docker
docker-compose ps
cd ..

echo "3. Tests passants"
npm test

echo "4. Linter actif"
npm run lint

echo "5. Pipeline CI/CD"
echo "Vérifiez : https://github.com/votre-username/dentaflow-devops/actions"

echo "6. Documentation"
echo "Générez : npm run docs"
ls -la docs/

echo "7. SonarCloud"
echo "Vérifiez : https://sonarcloud.io/project/overview?id=votre-username_dentaflow-devops"

echo ""
echo "FÉLICITATIONS ! Le projet DentaFlow est initialisé avec DevOps."


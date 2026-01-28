FROM node:24-alpine

WORKDIR /app

# Installation des dépendances
COPY package*.json ./
RUN npm ci --omit=dev

# Copie du code
COPY . .
# Exposition du port
EXPOSE 3000
# Commande de démarrage
CMD ["npm", "start"]

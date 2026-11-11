# Todo-App – Déploiement Bare-Metal et Docker

## Présentation

Todo-App est une application web de gestion de tâches.
Ce projet consiste à comparer deux méthodes de déploiement :
- Le déploiement Bare-Metal sur Ubuntu.
- Le déploiement avec Docker et Docker Compose.

## Technologies utilisées

- Frontend : HTML5, CSS3, JavaScript
- Backend : Node.js, Express.js
- Base de données : PostgreSQL
- Serveur Web : Nginx
- Conteneurisation : Docker, Docker Compose
- Système : Ubuntu Linux

## Architecture

L'application est composée de trois éléments :

1. Frontend : interface utilisateur.
2. Backend : traitement des requêtes API.
3. PostgreSQL : stockage des tâches.

## Prérequis

- Docker
- Docker Compose
- Git

## Installation et lancement avec Docker

### 1. Récupérer le projet

```bash
git clone https://github.com/GoldenBoy242/todo-app-bare-metal-docker.git
cd todo-app-bare-metal-docker


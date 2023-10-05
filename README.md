![Screenshot](https://img.shields.io/badge/python-v3.10-blue?logo=python&logoColor=yellow)
![Screenshot](https://img.shields.io/badge/render--blue?logo=render&logoColor=yellow)
![Screenshot](https://img.shields.io/badge/betterstack--blue)
![Screenshot](https://img.shields.io/badge/circleci--blue?logo=circleci&logoColor=yellow)
![Screenshot](https://img.shields.io/badge/coveralls--blue?logo=coveralls&logoColor=yellow)
[![Coverage Status](https://coveralls.io/repos/github/memphis-tools/oc_projet13_orange_country_lettings/badge.svg?branch=fonctionnalite/circleci_ci_cd)](https://coveralls.io/github/memphis-tools/oc_projet13_orange_country_lettings?branch=fonctionnalite/circleci_ci_cd)
![Screenshot](https://img.shields.io/badge/readthedocs--blue?logo=readthedocs&logoColor=yellow)
[![Documentation Status](https://readthedocs.org/projects/oc-projet13-orange-country-lettings/badge/?version=latest)](https://oc-projet13-orange-country-lettings.readthedocs.io/fr/latest/?badge=latest)

# [OpenClassRoom](https://openclassrooms.com/) - Parcours développeur Python
![Screenshot](oc_parcours_dev_python.png)

## Résumé

Site web d'Orange County Lettings

![Orange Country Lettings](orange_country_lettings.png)

---

**Last update: 2023/10/05**

## Développement local

### Prérequis

- Connexion internet
- Compte GitHub avec accès en lecture à ce repository
- Compte Betterstack avec un API token valide (concerne la collecte de log)
- Compte Coveralls avec un API token valide (concerne les tests, la mise à jour du taux couverture)
- Compte DockerHub pour déposer une image (nécessaire seulement si vous souhaitez déposer les images sur un dépôt Docker)
- Compte Render avec le Blueprint connecté au dépôt Github (nécessaire seulement pour déployer sur cloud, voir section Déploiement)
- Git CLI
- SQLite3 CLI
- Interpréteur Python, version 3.6 ou supérieure

Dans le reste de la documentation sur le développement local, il est supposé que la commande `python` de votre OS shell exécute l'interpréteur Python ci-dessus (à moins qu'un environnement virtuel ne soit activé).

### macOS / Linux

#### Cloner le repository

- `cd /path/to/put/project/in`
- `git clone https://github.com/memphis-tools/oc_projet13_orange_country_lettings.git`

#### Créer l'environnement virtuel

- `cd /path/to/Python-OC-Lettings-FR`
- `python -m venv venv`
- `apt-get install python3-venv` (Si l'étape précédente comporte des erreurs avec un paquet non trouvé sur Ubuntu)
- Activer l'environnement `source venv/bin/activate`
- Confirmer que la commande `python` exécute l'interpréteur Python dans l'environnement virtuel
`which python`
- Confirmer que la version de l'interpréteur Python est la version 3.6 ou supérieure `python --version`
- Confirmer que la commande `pip` exécute l'exécutable pip dans l'environnement virtuel, `which pip`
- Pour désactiver l'environnement, `deactivate`

#### Mettre à jour les variables d'environnement

On met à jour le PATH pour la seule exécution en locale.

- `cd /path/to/Python-OC-Lettings-FR`

Créer un fichier ".envrc" avec les variables suivantes (à adapter avec vos identifiants):

    export BETTERSTACK_SOURCE_TOKEN='SuperTokenFromBetterStack'
    export COVERALLS_REPO_TOKEN=SuperTokenFromCoveralls
    export SECRET_KEY='MakeYourOwnSecretKey'
    export DJANGO_ALLOWED_HOSTS='localhost,127.0.0.1'
    export DEBUG=0
    export DOCKER_HUB_USER='YourDockerHubUser'
    export DOCKER_HUB_PASSWORD='YourDockerHubPassword'

NB: les 2 exports DOCKER_HUB_* sont optionnels. Nécessaires que pour publier ses propres images locales vers un dépôt Docker. Voir section 'Déploiement'.

Ajouter les variables au PATH courant:

  `source .envrc`

Noter que le logger est déclaré dans le fichier "logtail_handler.py".

#### Exécuter le site, en local, sans Docker

- `cd /path/to/Python-OC-Lettings-FR`
- `source venv/bin/activate`
- `pip install --requirement ./oc_projet13/requirements.txt`
- `python manage.py runserver`
- Aller sur `http://localhost:8000` dans un navigateur.
- Confirmer que le site fonctionne et qu'il est possible de naviguer (vous devriez voir plusieurs profils et locations).

#### Exécuter le site, en local, avec Docker

Vous devez avoir installé "docker" (ou podman) et "docker-compose".

On va exécuter un script format BASH. Sur Windows il faudra adapter, jouer les seules commandes nécessaires.

- `cd /path/to/Python-OC-Lettings-FR`

Pour une première exécution:
- `./docker-compose-deployment.sh build`

Dans le cas où vous avez déjà les images en local et l'application initialisée:
- `./docker-compose-deployment.sh run`

Pour arrêter les conteneurs:
- `./docker-compose-deployment.sh down`

Remarque: noter que vous pouvez télécharger les 2 images publiques suivantes (usage de podman ou docker selon les versions d'OS):

- `podman pull docker.io/memphistools/public_repo:oc_projet13_orange_country_lettings_web`

- `podman pull docker.io/memphistools/public_repo:oc_projet13_orange_country_lettings_nginx`

#### Linting

- `cd oc_projet13_orange_country_lettings/`
- `source venv/bin/activate`
- `cd oc_projet13_orange_country_lettings/oc_projet13/`
- `flake8`

#### Tests unitaires

- `cd oc_projet13_orange_country_lettings/`
- `source venv/b-in/activate`
- `python -m coverage run -m pytest ./oc_projet13`

#### Base de données

- `cd oc_projet13_orange_country_lettings/`
- `source venv/b-in/activate`
- `cd oc_projet13_orange_country_lettings/oc_projet13/`
- Ouvrir une session shell `sqlite3`
- Se connecter à la base de données `.open oc-lettings-site.sqlite3`
- Afficher les tables dans la base de données `.tables`
- Afficher les colonnes dans le tableau des profils, `pragma table_info(Python-OC-Lettings-FR_profile);`
- Lancer une requête sur la table des profils, `select user_id, favorite_city from
  Python-OC-Lettings-FR_profile where favorite_city like 'B%';`
- `.quit` pour quitter

#### Panel d'administration

- Aller sur l'url suivante (dans le cas d'un test en local): `http://localhost:8000/admin`
- Connectez-vous avec l'utilisateur `admin`, mot de passe `Abc1234!`

### Windows

Utilisation de PowerShell, comme ci-dessus sauf :

- Pour activer l'environnement virtuel, `.\venv\Scripts\Activate.ps1`
- Remplacer `which <my-command>` par `(Get-Command <my-command>).Path`

---

## Déploiement

Cette section évoque le déploiement des images Docker et ou de l'application en ligne chez un cloud provider.

Les prérequis rejoignent ceux de la section "Développement local".

### Conteneurisation de l'application

L'arborescence du projet est adaptée à une conteneurisation basique de Docker, "dans un contexte similaire à celui présenté"".

2 services supplémentaires sont introduits: Gunicorn et Nginx.

Gunicorn va servir le contenu délivré par l'application Python (Django en l'occurence). Gunicorn et le code applicatif formeront 1 service global.

Nginx servira de reverse proxy 'au service' de Gunicorn, en servant tout fichier statique: images, css, js etc.

On aura 2 conteneurs Docker, 1 pour chaque service. Ils sont orchestrés par "docker-compose (Compose)": on ne lance pas l'un sans l'autre.

Un fichier "docker-compose.dev.yml" est celui utilisé lors des phases de "build"

Un second fichier "docker-compose.prod.yml" est celui utilisé lors des phsases "d'exécution".

Un script unique permet de déployer l'application sur Docker, soit localement, soit sur cloud: docker-compose-deployment.sh.

### Déploiement images Docker, sur DockerHub

On utilisera le dépôt Docker générique: https://hub.docker.com/

![Screenshot](https://github.com/memphis-tools/oc_projet13_orange_country_lettings/blob/development/illustrations/oc_projet13_dokerhub.png)

Afin de simplifier les illustrations tout comme l'usage des commandes en local, vous aurez créer un fichier ".envrc" tel que déclaré plus haut.

Vous aurez ajouté à votre PATH courant les variables déclarées dans le fichier ".envrc".

On va exécuter un script format BASH. Sur Windows il faudra adapter, jouer les seules commandes nécessaires.

- `cd /path/to/Python-OC-Lettings-FR`
- `./docker-compose-deployment.sh build`
- `./docker-compose-deployment.sh down`
- `./docker-compose-deployment.sh publish`

### Construction d'un pipeline de test, de build et de publication

En tant que développeur vous travaillerez à partir du dépôt clôné.

Pour vérifier et/ou publier les actions effectuées une automatisation est mise en place via Circleci: https://circleci.com/

Il s'agit d'un processus qui va réaliser des actions déclarées dans un fichier et format préconvenu: .circleci/config.yml.

Les actions consistent à effectuer les tests à la place du développeur, à contrôler le "lint", à effectuer le build et publication des images Docker.

Toute mise à jour de branche autre que master provoque génération d'un pipeline sans build:
- test, lint.

**Toute mise à jour de la seule branche master provoque génération d'un pipeline avec build:
- test, lint, build (avec mise à jour image sur DockerHub). redéploiement de l'application sur Render.

**Illustration pipeline de dev:**
![Screenshot](https://github.com/memphis-tools/oc_projet13_orange_country_lettings/blob/development/illustrations/circleci_pipeline_prod.png)

**Illustration Actions Github correspondantes:**
![Screenshot](https://github.com/memphis-tools/oc_projet13_orange_country_lettings/blob/development/illustrations/oc_projet13_dev_github_actions.png)

**Noter que le job test du pipeline rafraichit le taux de couverture de "coverage" via Coveralls**: https://coveralls.io
![Screenshot](https://github.com/memphis-tools/oc_projet13_orange_country_lettings/blob/development/illustrations/coveralls_prod.png)

**Remarquer enfin que la documentation est mise à jour automatiquement.**
![Screenshot](https://github.com/memphis-tools/oc_projet13_orange_country_lettings/blob/development/illustrations/read_the_doc_hook.png)

### Déploiement application en ligne

Le choix a été fait de déployer sous forme d'application le projet, sur la plateforme Render: https://render.com/.

**Tout commit de la seule branche "master"** aura pour effet de redéployer l'application.

Pour information, seul Render fait l'appel de commande suivant pour le build du projet (vous n'aurez pas l'usage de l'argument pour du dev local):
- `./docker-compose-deployment.sh cloud`

Voir en wiki des informations supplémentaires pour le déploiement surRender: [WIKI RENDER](https://github.com/memphis-tools/oc_projet13_orange_country_lettings/wiki/oc_projet13_orange_country_lettings-sur-Render)

Par le biais d'un webhook exécuté depuis le pipeline en dernière étape, l'application est re-publiée sur Render.
![Screenshot](https://github.com/memphis-tools/oc_projet13_orange_country_lettings/blob/development/illustrations/render_webhook.png)

### Exploitation de logs

Le choix a été fait de collecter les logs sur Betterstack: https://betterstack.com/.

**Toute saisie d'URL incorrecte sera, par exemple, loguée:**
![Screenshot](https://github.com/memphis-tools/oc_projet13_orange_country_lettings/blob/development/illustrations/oc_projet13_error500.png)

![Screenshot](https://github.com/memphis-tools/oc_projet13_orange_country_lettings/blob/development/illustrations/oc_projet13_grafana.png)

---

## ReadThedocs

La documentation de l'application est servie et actualisée sur ReadTheDocs: https://oc-projet13-orange-country-lettings.readthedocs.io/fr/latest/
![Screenshot](https://github.com/memphis-tools/oc_projet13_orange_country_lettings/blob/development/illustrations/read_the_docs.png)
---

## Consulter l'application en ligne

Noter que sans activité, et du fait d'une souscription sans engagement, les applications peuvent être mises à l'arrêt par l'équipe Render.

De même les temps de chargement peuvent être anormalement long comparé à des sites en production.

Si le site est en ligne, vous pourrez le consulter: https://oc-projet13-o83m.onrender.com/

⛩️

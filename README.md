![Screenshot](https://img.shields.io/badge/python-v3.10-blue?logo=python&logoColor=yellow)
![Screenshot](https://img.shields.io/badge/render--blue?logo=render&logoColor=yellow)
![Screenshot](https://img.shields.io/badge/betterstack--blue)
![Screenshot](https://img.shields.io/badge/circleci--blue?logo=circleci&logoColor=yellow)
[![Coverage Status](https://coveralls.io/repos/github/memphis-tools/oc_projet13_orange_country_lettings/badge.svg?branch=fonctionnalite/circleci_ci_cd)](https://coveralls.io/github/memphis-tools/oc_projet13_orange_country_lettings?branch=fonctionnalite/circleci_ci_cd)

# [OpenClassRoom](https://openclassrooms.com/) - Parcours développeur Python
![Screenshot](oc_parcours_dev_python.png)

## Résumé

Site web d'Orange County Lettings

![Orange Country Lettings](orange_country_lettings.png)

## Développement cloud

⛩️ (en cours)

## Développement local

### Prérequis

- Compte GitHub avec accès en lecture à ce repository
- Compte DockerHub pour déposer une image
- Compte Betterstack avec un API token valide (concerne la collecte de log)
- Compte Coveralls avec un API token valide (concerne les tests, la mise à jour du taux couverture)
- Compte Render avec le Blueprint connecté au dépôt github et un Env group.
- Git CLI
- SQLite3 CLI
- Interpréteur Python, version 3.6 ou supérieure

Dans le reste de la documentation sur le développement local, il est supposé que la commande `python` de votre OS shell exécute l'interpréteur Python ci-dessus (à moins qu'un environnement virtuel ne soit activé).

### macOS / Linux

#### Cloner le repository

- `cd /path/to/put/project/in`
- `git clone https://github.com/OpenClassrooms-Student-Center/Python-OC-Lettings-FR.git`

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

  Créer un fichier .envrc avec les variables suivantes (à adapter avec vos identifiants):

    export BETTERSTACK_SOURCE_TOKEN='SuperTokenFromBetterStack'
    export COVERALLS_REPO_TOKEN=SuperTokenFromCoveralls
    export SECRET_KEY='MakeYourOwnSecretKey'
    export DJANGO_ALLOWED_HOSTS='localhost,127.0.0.1'
    export DEBUG=0

  Ajouter les variables au PATH courant:

    `source .envrc`

  Noter que le logger est déclaré dans le fichier "logtail_handler.py".

#### Exécuter le site

- `cd /path/to/Python-OC-Lettings-FR`
- `source venv/bin/activate`
- `pip install --requirement ./oc_projet13/requirements.txt`
- `python manage.py runserver`
- Aller sur `http://localhost:8000` dans un navigateur.
- Confirmer que le site fonctionne et qu'il est possible de naviguer (vous devriez voir plusieurs profils et locations).

#### Linting

- `cd /path/to/Python-OC-Lettings-FR/`
- `source venv/bin/activate`
- `cd /path/to/Python-OC-Lettings-FR/oc_projet13/`
- `flake8`

#### Tests unitaires

- `cd /path/to/Python-OC-Lettings-FR/`
- `source venv/b-in/activate`
- `pytest oc_projet13/`

#### Base de données

- `cd /path/to/Python-OC-Lettings-FR/`
- `source venv/b-in/activate`
- `cd /path/to/Python-OC-Lettings-FR/oc_projet13/`
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

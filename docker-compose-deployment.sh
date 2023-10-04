#!/usr/bin/env bash

IMAGE_NAME=memphistools/public_repo

args=("$@")
function display_arg_error {
  echo "[INFO] You would either build, tag&publish, run or stop locally: "
  echo -e "$0 build"
  echo -e "$0 publish"
  echo -e "$0 run"
  echo -e "$0 down"
  echo "[INFO] On cloud, we only make a straight run after app update"
  echo -e "$0 cloud"
}

function update_application {
  docker-compose -f docker-compose.dev.yml exec web python manage.py makemigrations oc_lettings_site --noinput
  docker-compose -f docker-compose.dev.yml exec web python manage.py makemigrations lettings --noinput
  docker-compose -f docker-compose.dev.yml exec web python manage.py makemigrations profiles --noinput
  docker-compose -f docker-compose.dev.yml exec web python manage.py migrate --noinput
  docker-compose -f docker-compose.dev.yml exec web python manage.py collectstatic --no-input --clear
}

# Exécution conditionnelle nasée sur les arguments fournis.
if [ ${#args[@]} -eq 0 ]
then
  display_arg_error
else
  case $1 in
    "build" )
      source .envrc
      echo "[INFO] We (re)build images and (re)initialize the application."
      docker-compose -f docker-compose.dev.yml down -v
      sleep 1s
      docker-compose -f docker-compose.dev.yml up -d --build
      sleep 1s
      update_application
      ;;
    "publish" )
      source .envrc
      echo "[INFO] We tag and (re)publish images on DockerHub."
      podman login -u $DOCKER_HUB_USER docker.io --password $DOCKER_HUB_PASSWORD
      podman tag oc_projet13_orange_country_lettings_nginx:latest memphistools/public_repo:oc_projet13_orange_country_lettings_nginx
      podman tag oc_projet13_orange_country_lettings_web:latest memphistools/public_repo:oc_projet13_orange_country_lettings_web
      podman push memphistools/public_repo:oc_projet13_orange_country_lettings_web
      podman push memphistools/public_repo:oc_projet13_orange_country_lettings_nginx
      ;;
    "run" )
      source .envrc
      echo "[INFO] We (re)start application."
      docker-compose -f docker-compose.dev.yml down -v
      docker-compose -f docker-compose.dev.yml up -d
    	;;
    "cloud" )
      # Création d'un environnement virtuel qui pourra être utilisé par Render
      python -m venv venv
      source venv/bin/activate
      pip install -r oc_projet13/requirements.txt
      cd ./oc_projet13/
      python manage.py makemigrations oc_lettings_site --noinput
      python manage.py makemigrations lettings --noinput
      python manage.py makemigrations profiles --noinput
      python manage.py migrate --noinput
      python manage.py collectstatic --no-input --clear
      gunicorn oc_lettings_site.wsgi:application --bind 0.0.0.0:8000
      ;;
    "down" )
      docker-compose -f docker-compose.dev.yml down -v
      ;;
  esac
fi

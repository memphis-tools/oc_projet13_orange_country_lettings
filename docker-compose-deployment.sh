#!/usr/bin/env bash

IMAGE_NAME=memphistools/public_repo

args=("$@")
function display_arg_error {
  echo "[INFO] You would either build (which run bu default too) or run locally: "
  echo -e "$0 local build"
  echo -e "$0 local run"
  echo "[INFO] On cloud, we only make a straight run after app update"
  echo -e "$0 cloud"
  echo "[INFO] Finally you could expect to stop all services from docker-compose."
  echo -e "$0 down"
}

function update_application {
  docker-compose -f docker-compose.dev.yml exec web python manage.py makemigrations oc_lettings_site --noinput
  docker-compose -f docker-compose.dev.yml exec web python manage.py makemigrations lettings --noinput
  docker-compose -f docker-compose.dev.yml exec web python manage.py makemigrations profiles --noinput
  docker-compose -f docker-compose.dev.yml exec web python manage.py migrate --noinput
  docker-compose -f docker-compose.dev.yml exec web python manage.py collectstatic --no-input --clear
}


if [ ${#args[@]} -eq 0 ]
then
  display_arg_error
else
  case $1 in
    "local" )
        case $2 in
      		"build" )
            echo "[INFO] We (re)build images and (re)initialize the application."
            docker-compose -f docker-compose.dev.yml down -v
            sleep 1s
            docker-compose -f docker-compose.dev.yml up -d --build
            sleep 1s
            update_application
            ;;
        	"run" )
            echo "[INFO] We (re)start application."
            docker-compose -f docker-compose.dev.yml down -v
            docker-compose -f docker-compose.dev.yml up -d
        		;;
    		*)
		     display_arg_error
		    ;;
        esac
        ;;
    "cloud" )
        docker pull $IMAGE_NAME:oc_projet13_orange_country_lettings_web
        docker pull $IMAGE_NAME:oc_projet13_orange_country_lettings_nginx
        docker-compose -f docker-compose.prod.yml up -d
  ;;
    "down" )
        docker-compose -f docker-compose.dev.yml down -v
  ;;
	esac
fi

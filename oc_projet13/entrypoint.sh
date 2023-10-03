#!/bin/sh

python ./manage.py makemigrations oc_lettings_site --no-input
python ./manage.py makemigrations lettings --no-input
python ./manage.py makemigrations profiles --no-input
python ./manage.py migrate --no-input
python ./manage.py collectstatic --no-input --clear

gunicorn oc_lettings_site.wsgi:application --bind 0.0.0.0:8000

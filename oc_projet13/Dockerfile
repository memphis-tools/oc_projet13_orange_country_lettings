# pull official base image
FROM python:3.10.1-alpine

# create directory for the oc_projet13 user and create the oc_projet13 user
RUN mkdir -p /home/oc_projet13; \
    addgroup -S oc_projet13; \
    adduser -S oc_projet13 -G oc_projet13

# create the appropriate directories
ENV HOME=/home/oc_projet13
ENV APP_HOME=/home/oc_projet13/web
RUN mkdir $APP_HOME; \
    mkdir /var/log/gunicorn; \
    mkdir $APP_HOME/staticfiles;
WORKDIR $APP_HOME

# install dependencies
COPY ./requirements.txt .

RUN apk update; \
    apk add libpq; \
    apk add bash; \
    pip install -U pip; \
    pip install --no-cache -r requirements.txt

# copy project
COPY . $APP_HOME

# chown all the files to the dummy-operator user
RUN chown -R oc_projet13:oc_projet13 $APP_HOME

USER oc_projet13

FROM node:13.5

ARG USER
ARG DIR

WORKDIR $DIR
COPY ./config_files/package*.json $DIR/

RUN  npm ci \
  && rm ./package*.json \
  && chown -R ${USER}:${USER} .

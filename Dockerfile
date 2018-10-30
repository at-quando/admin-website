FROM node:8

# RUN apk add --no-cache make gcc g++ python bash bzr git subversion openssh-client ca-certificates
ARG APP_DIR
ENV APP_DIR=/admin-photo-client


# Install dependecies
COPY package.json /admin-photo-client/package.json
WORKDIR /admin-photo-client


RUN npm install
RUN npm rebuild node-sass

ADD . /admin-photo-client/

EXPOSE 8888

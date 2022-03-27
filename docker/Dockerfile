FROM node:latest

WORKDIR /usr/src/app

ADD package*.json /usr/src/app/

RUN npm install

ADD . /usr/src/app

EXPOSE 3000

CMD [ "npm", "start" ]
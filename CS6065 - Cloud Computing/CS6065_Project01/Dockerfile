FROM node:latest

WORKDIR /app

ADD package.json /app
RUN npm install

ADD . /app

EXPOSE 80

CMD [ "npm", "start" ]

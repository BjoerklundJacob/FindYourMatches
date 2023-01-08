FROM node:alpine-19 AS base

WORKDIR app

COPY package*.json .

RUN npm install

COPY . .

CMD ["npm", "start"]
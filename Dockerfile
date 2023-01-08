FROM node:19-alpine AS base

WORKDIR app

COPY find-your-matches/package*.json ./

RUN npm install

COPY find-your-matches .

EXPOSE 3000

CMD ["npm", "start"]
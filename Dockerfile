# syntax=docker/dockerfile:1

FROM node:lts-alpine as base

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

FROM base as test
ENV NODE_ENV=test
RUN npm ci
COPY . .
CMD [ "npm", "run", "test" ]

FROM base as production
ENV NODE_ENV=production
RUN npm ci --production
COPY ./app ./app
CMD [ "node", "app/index.js" ]

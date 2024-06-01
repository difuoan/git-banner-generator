FROM node:20-alpine

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

RUN chown -R node:node /app

USER node
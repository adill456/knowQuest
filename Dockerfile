FROM node:alpine

RUN mkdir -p /usr/src/knowquest && chown -R node:node /usr/src/knowquest

WORKDIR /usr/src/knowquest

COPY package.json package-lock.json ./

USER node

RUN yarn install --frozen-lockfile

COPY --chown=node:node . .

EXPOSE 5000

CMD ["yarn", "nodemon", "start"]

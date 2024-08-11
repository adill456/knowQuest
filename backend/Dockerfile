FROM node:latest as build

WORKDIR /usr/local/knowquest

COPY ./ /usr/local/knowquest/

RUN npm install -g pnpm \
    && pnpm install

EXPOSE 5000

CMD ["pnpm", "run", "dev"]

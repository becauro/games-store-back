FROM node:lts-buster

WORKDIR /myapp

ENV DB_NAME GamesStore
ENV DB_HOST games-store-db

COPY . .

EXPOSE 3000

RUN npm install

ENTRYPOINT ["npm", "start"]

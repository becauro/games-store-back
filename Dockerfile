FROM node:lts-buster

ENV DB_URL mongodb://store-db-cont-data:27017/StoreManager

WORKDIR /myapp

COPY . .

EXPOSE 3000

RUN npm install

ENTRYPOINT ["npm", "start"]

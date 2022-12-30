FROM node:lts-buster

WORKDIR /myapp

ENV PORT 3000
    DB_URL mongodb://localhost:27017/StoreManager

COPY . .

EXPOSE 3000

RUN npm install

ENTRYPOINT ["npm", "start"]

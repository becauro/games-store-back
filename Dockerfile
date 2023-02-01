
# Essa porta, em EXPOSE, é a padrão, mas poderia ser modificado, por  definir numa variavel PORT -- como feito na linha 19, por exemplo.
# Se for fazer o build fora do compose.yml e com rede separada, o nome do container precisa ser o mesmo da variável DB_HOST. 

FROM node:lts-bullseye-slim

WORKDIR /myapp

COPY package*.json ./

RUN npm install

COPY . .

ENV DB_NAME GamesStore
ENV DB_HOST games-store-db
ENV PORT 3001

EXPOSE 3001

ENTRYPOINT ["npm", "start"]

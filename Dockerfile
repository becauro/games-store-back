
# Essa porta, em EXPOSE, é a padrão, mas poderia ser modificado, por  definir numa variavel PORT -- como feito na linha 12, por exemplo.
# No entanto, para fins de estudo e testes sobre variáveis de ambiente, defini (variável PORT), também, em compose.yml com outro número.
# Fiz isso pra observar que  uma mesma variável tem seu valor sobrescrito, se redefinida na criação de um container.

FROM node:lts-buster

WORKDIR /myapp

ENV DB_NAME GamesStore
ENV DB_HOST localhost             # Se for fazer o build fora do compose.yml, coloque o nome do container do banco de dados nessa variável. 
ENV PORT 3001
COPY . .


EXPOSE 3000

RUN npm install

ENTRYPOINT ["npm", "start"]

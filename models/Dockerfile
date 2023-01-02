FROM mongo:4.4.6

ENV DB_NAME GamesStore

RUN mkdir /DataForImport

COPY dataTestForDb.js /DataForImport/
COPY db-import.sh /docker-entrypoint-initdb.d/

EXPOSE 27017

FROM mongo:4.4.6

EXPOSE 27017

RUN mkdir /DataForImport

COPY dataTestForDb.mongodb /DataForImport/

COPY db-import.sh /docker-entrypoint-initdb.d/

FROM mongo

RUN mkdir /DataForImport

COPY ../dataTestForDb.json /DataForImport/

RUN mongoimport --db=StoreManager --collection=products --file=/DataForImport/dataTestForDb.json



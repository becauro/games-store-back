#!/bin/bash

cd /DataForImport

mongo --eval "var mongo_name = '$DB_NAME'"  dataTestForDb.js > /dev/null 
test $? -eq 0 || mongo --eval "var mongo_name = 'GamesStore'"  dataTestForDb.js > /dev/null 
echo "EXECUTADO SCRIPT db-import.sh"



#!/bin/bash

cd /DataForImport

mongo --eval "var mongo_name = '$DB_NAME'"  dataTestForDb.js

echo "EXECUTADO SCRIPT db-import.sh"



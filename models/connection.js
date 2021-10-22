// const { MongoClient } = require('mongodb');
const { MongoClient } = require('mongodb');

const OPTIONS = {
   useNewUrlParser: true,
   useUnifiedTopology: true,
};
 
// Para usar com o avaliador:

// const MONGO_DB_URL = 'mongodb://mongodb:27017/StoreManager';

// Para uso local:

const MONGO_DB_URL = 'mongodb://localhost:27017/StoreManager';

// const DB_NAME = 'StoreManager'; // outra maneira
 
let db = null;
 
const connection = () => (db
   ? Promise.resolve(db)
   : MongoClient.connect(MONGO_DB_URL, OPTIONS)
   .then((conn) => {
   // db = conn.db(DB_NAME); // outra maneira
   db = conn.db();
   return db;
   }));
 
module.exports = connection;
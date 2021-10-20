const { MongoClient } = require('mongodb');
 
const OPTIONS = {
   useNewUrlParser: true,
   useUnifiedTopology: true,
}
 
// const MONGO_DB_URL = 'mongodb://127.0.0.1:27017'; // Usado nos exercícios

// const MONGO_DB_URL = 'mongodb://mongodb:27017/StoreManager'; // Para usar com o avaliador

const MONGO_DB_URL = 'mongodb://localhost:27017/StoreManager';
const DB_NAME = 'StoreManager';
 
let db = null;
 
const connection = () => {
   return db
   ? Promise.resolve(db)
   : MongoClient.connect(MONGO_DB_URL, OPTIONS)
   .then((conn) => {
   db = conn.db(DB_NAME);
   return db;
   })
};
 
module.exports = connection;
const { MongoClient } = require('mongodb');

require('dotenv').config();

const OPTIONS = {
   useNewUrlParser: true,
   useUnifiedTopology: true,
};
const MONGO_HOST = process.env.DB_HOST;
const MONGO_DB_URL = `mongodb://${MONGO_HOST}:27017/StoreManager`;
 
let db = null;

const connection = () => (db
   ? Promise.resolve(db)
   : MongoClient.connect(MONGO_DB_URL, OPTIONS)
   .then((conn) => {
   db = conn.db();
   return db;
   })
   .catch((err) => {
      console.log(err);
      process.exit(1);
   }));

module.exports = connection;

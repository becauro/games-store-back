const { MongoClient } = require('mongodb');

require('dotenv').config();

const OPTIONS = {
   useNewUrlParser: true,
   useUnifiedTopology: true,
};
const MONGO_HOST = process.env.DB_HOST || "games-store-db";
const MONGO_NAME = process.env.DB_NAME || "GamesStore";
const MONGO_PORT = process.env.DB_PORT || 27017; 
const MONGO_DB_URL = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_NAME}`;
 
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

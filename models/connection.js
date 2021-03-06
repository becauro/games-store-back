const { MongoClient } = require('mongodb');

const OPTIONS = {
   useNewUrlParser: true,
   useUnifiedTopology: true,
};

const MONGO_DB_URL = process.env.DB_URL;
 
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
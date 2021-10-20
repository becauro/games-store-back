// const { MongoClient } = require('mongodb');
const { MongoClient } = require('mongodb');

const OPTIONS = {
   useNewUrlParser: true,
   useUnifiedTopology: true,
};
 
// const MONGO_DB_URL = 'mongodb://127.0.0.1:27017'; // Usado nos exercícios

// Para usar com o avaliador:

const MONGO_DB_URL = 'mongodb://mongodb:27017/StoreManager';

// Para uso local:

// const MONGO_DB_URL = 'mongodb://localhost:27017/StoreManager';

const DB_NAME = 'StoreManager';
 
let db = null;
 
const connection = () => (db
   ? Promise.resolve(db)
   : MongoClient.connect(MONGO_DB_URL, OPTIONS)
   .then((conn) => {
   db = conn.db(DB_NAME);
   // db = conn.db();
   return db;
   }));
 
module.exports = connection;

// const { MongoClient } = require('mongodb');
 
// const OPTIONS = {
//    useNewUrlParser: true,
//    useUnifiedTopology: true,
// }
 
// const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';
 
// let db = null;
 
// const connection = () => {
//    return db
//    ? Promise.resolve(db)
//    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
//    .then((conn) => {
//    db = conn.db('msc');
//    return db;
//    })
// };
 
// module.exports = connection;

// const { MongoClient } = require('mongodb');

// const origin = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };

// const MONGO_DB_URL = 'mongodb://mongodb:27017/StoreManager';
// const DB_NAME = 'StoreManager';

// module.exports = () => MongoClient.connect(MONGO_DB_URL, origin)
//     .then((conn) => conn.db(DB_NAME))
//     .catch((err) => {
//       console.error(err);
//       process.exit(1);
//     }); 
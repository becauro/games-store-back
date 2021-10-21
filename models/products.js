const { ObjectId } = require('mongodb');
const connection = require('./connection');

const create = async (name, quantity) => connection()
    .then(async (db) => {
        const { insertedId } = await db.collection('products').insertOne({ name, quantity });

        return insertedId;
    });

const getByName = async (name) => connection()
.then(async (db) => {
    const product = await db.collection('products').findOne({ name });

    if (product) return product;
    return {};
});

const getAll = async () => connection()
    .then(async (db) => {
        const productS = await db.collection('products').find().toArray();
    
        if (productS) return productS; // Talvez deixar retorno direto aqui -- igual o getById
        // Isso porque, por enquanto, quando não acha nada --- por não ter nada no db, dá erro.
        // No entanto, nada disso é avaliado.
    });

const getById = async (id) => connection()
  .then(async (db) => {
    const product = await db.collection('products').findOne(new ObjectId(id));

    return product;
});

module.exports = {
    create,
    getByName,
    getAll,
    getById,
};

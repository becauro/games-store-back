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
    
    return productS;
    });

const getById = async (id) => connection()
  .then(async (db) => {
    const product = await db.collection('products').findOne(new ObjectId(id));

    return product;
});

const update = async (id, name, quantity) => connection()
    .then(async (db) => {
        const updateLog = await db.collection('products').updateOne({ _id: ObjectId(id) },
        { $set: { name, quantity } });

        return updateLog;
    });

// const updateQtd = async (id, quantity) => connection()
// .then(async (db) => {
//     const updateLog = await db.collection('products').updateOne({ _id: ObjectId(id) },
//     { $set: { quantity } });

//     return updateLog;
// });

const deleteIt = async (id) => connection()
.then(async (db) => {
    const product = await db.collection('products').findOneAndDelete({ _id: ObjectId(id) });

    return product;
});

module.exports = {
    create,
    getByName,
    getAll,
    getById,
    update,
    // updateQtd,
    deleteIt,
};

const { ObjectId } = require('mongodb');
const connection = require('./connection');

const create = async (productData) => connection()
    .then(async (db) => {
        const { insertedId } = await db.collection('products').insertOne({ ...productData });

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
        const products = await db.collection('products').find().toArray();
    
    return products;
    });

const getAllFiltered = async (query) => {
    const db = await connection();

    const products = await db.collection('products')
    .find({ name: { $regex: `/${query}/i` } }).toArray();
    
    return products;
};

const getById = async (id) => connection()
  .then(async (db) => {
    const product = await db.collection('products').findOne(new ObjectId(id));

    return product;
});

const update = async (productData) => connection()
    .then(async (db) => {
        const { id } = productData;
        const updateLog = await db.collection('products').updateOne({ _id: ObjectId(id) },
        { $set: { ...productData } });

        return updateLog;
    });

const updateQtd = async (id, quantity) => connection()
.then(async (db) => {
    const updateLog = await db.collection('products').updateOne({ _id: ObjectId(id) },
    { $inc: { quantity } });

    return updateLog;
});

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
    updateQtd,
    deleteIt,
    getAllFiltered,
};

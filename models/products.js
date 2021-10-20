// const { ObjectId } = require('mongodb');
const connection = require('./connection');

const create = async (name, quantity) => connection()
    .then(async (db) => {
        const { insertedId } = await db.collection('products').insertOne({ name, quantity });
       
        return insertedId;
    });

const getByName = async (name) => connection()
.then(async (db) => {
    const product = await db.collection('products').findOne({ name });

    if (product) return true;

    return false;
});

module.exports = {
    create,
    getByName,
};

const { ObjectId } = require('mongodb');
const connection = require('./connection');

const create = async (soldProducts) => connection()
    .then(async (db) => {
        const { insertedId } = await db.collection('sales')
        .insertOne({ itensSold: [...soldProducts] });

        return insertedId;
    });

const getByName = async (name) => connection()
.then(async (db) => {
    const sale = await db.collection('sales').findOne({ name });

    if (sale) return sale;
    return {};
});

const getAll = async () => connection()
    .then(async (db) => {
        const saleS = await db.collection('sales').find().toArray();
    
    return saleS;
    });

const getById = async (id) => connection()
  .then(async (db) => {
    const sale = await db.collection('sales').findOne(new ObjectId(id));

    return sale;
});

const update = async (id, soldProducts) => connection()
    .then(async (db) => {
        const updateLog = await db.collection('sales').updateOne({ _id: ObjectId(id) },
        { $set: { itensSold: [...soldProducts] } });

        return updateLog;
    });

const deleteIt = async (id) => connection()
.then(async (db) => {
    const saleDeleted = await db.collection('sales').findOneAndDelete({ _id: ObjectId(id) });

    return saleDeleted;
});

module.exports = {
    create,
    getByName,
    getAll,
    getById,
    update,
    deleteIt,
};

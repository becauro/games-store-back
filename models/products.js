const connection = require('./connection');
// const { ObjectId } = require('mongodb');

const create = async (name, quantity) => connection()
    .then((db) => {
        const { insertedId } = db.collection('products').insertOne({ name, quantity });

        return {
            insertedId,
            name,
            quantity,
        };
    });

module.exports = {
    create,
};

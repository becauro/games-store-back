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

    // if (product) return true;

    // return false;
    console.log('product em MODEL getByName:');
    console.log(product);

    if (product) return product;
    return {};
});

const getAll = async () => connection()
    .then(async (db) => {
        const productS = await db.collection('products').find().toArray();
        console.log('Aqui productS em MODEL');
        console.log(productS);

        if (productS) return productS;
    });

const getById = async (id) => connection()

  .then(async (db) => {
    // if (!ObjectId.isValid(id)) return null;
    // const product = await db.collection('products').findOne({ _id: ObjectId(id) });
    const product = await db.collection('products').findOne({ _id: { $eq: id } });

    console.log(' o q MODEL encontrou');
    console.log(product);

    // if (product.name) return product;
    if (product !== null) return product;
    // return {};
    console.log('MODEL não achou produto');
    return null;
});

module.exports = {
    create,
    getByName,
    getAll,
    getById,
};

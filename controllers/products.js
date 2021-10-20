const rescue = require('express-rescue');
const products = require('../services/products');

const CREATED = 201;

const create = rescue(async (req, res) => {
const { name, quantity } = req.body;

// console.log('Passou no controller');

    const product = await products.create(name, quantity);

    // console.log('Retorno de product em controller:');
    // console.log(product);

    if (product.code) {
 return res.status(product.status).json({
        err: {
            code: product.code,
            message: product.message,
        },
    }); 
}

    return res.status(CREATED).json(product);
});

module.exports = { 
    create,
};
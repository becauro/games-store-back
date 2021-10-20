const router = require('express').Router();
const rescue = require('express-rescue');
const products = require('../services/products');

const CREATED = 201;

router.post('/', rescue(async (req, res) => {
const { name, quantity } = req.body;

    const result = await products.create(name, quantity);

    if (result.code) {
        return res.status(result.status).json({
            err: {
                code: result.code,
                message: result.message,
            },
    }); 
}

    return res.status(CREATED).json({ _id: result, name, quantity });
}));

module.exports = router;
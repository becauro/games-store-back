const router = require('express').Router();
const rescue = require('express-rescue');
const products = require('../services/products');

const CREATED = 201;

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    // const result = await products.getById(id); // Estáva funcionando com outros. Cuidado
    const result = await products.getById(id);

    if (result.code) {
        console.log('MODEL: Não deveria chegar nesse IF');
        return res.status(result.status).json({
            err: {
                code: result.code,
                message: result.message,
            },
        });
    }

    // console.log('URL em CONTROLLER');
    // console.log(req.path);

    // console.log('O que chega no CONTROLLER:');
    // console.log({ _id, name, quantity });

    // return res.status(result.status).json({ ...result.product });
    return res.status(200).json(...result.product);
    // return res.status(200).json({ _id, name, quantity });
    // return res.status(200).json(id);
});

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

// Descomnetar pois estar funcionando. Comentado apenas pra teste

router.get('/', rescue(async (req, res) => {
    const result = await products.getAll();
        return res.status(result.status).json({ products: [...result.productS] });
}));

module.exports = router;
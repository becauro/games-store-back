const router = require('express').Router();
const rescue = require('express-rescue');
const products = require('../services/products');

const CREATED = 201;
const OK = 200;

router.get('/', rescue(async (_req, res) => {
    const result = await products.getAll();
        res.status(result.status).json({ products: [...result.productS] });

// The following comment is for dev debugging (e.g, To test whether nodemon is working):

/*
res.status(result.status).json({products:[{_id:"63b5f85dae0a4537077d63cc", name:"MICHELLLL", price:6499, thumbnail:"http://http2.mlstatic.com/D_799755-MLA47058389754_082021-I.jpg", description:"",quantity:7}]});

*/
}));

router.get('/search', rescue(async (req, res) => {
  const { name } = req.query;
  const result = await products.getAllFiltered(name);

  res.status(result.status).json({ products: [...result.products],
  message: result.message });
}));

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    const result = await products.getById(id);
  
    if (result.code) {
        return res.status(result.status).json({
            err: {
                code: result.code,
                message: result.message,
            },
        });
    }

    const { _id, name, quantity, price, thumbnail, description } = result;
    const productData = { id: _id, name, quantity, price, thumbnail, description };

    res.status(OK).json(productData);
});

router.post('/', rescue(async (req, res) => {
  const { name, quantity, price, thumbnail, description } = req.body;
  const productData = { name, quantity, price, thumbnail, description };
  const result = await products.create(productData);
   
  if (result.code) { 
    return res.status(result.status).json({
      err: {
          code: result.code,
          message: result.message,
      },
    });
  }
  
  res.status(CREATED).json({ _id: result, name, quantity });
}));

router.put('/:id', rescue(async (req, res) => {
    const { id } = req.params;
    const { name, quantity, price, thumbnail, description } = req.body;
    const productData = { name, quantity, price, thumbnail, description };
    
        const updateLog = await products.update({ id, ...productData });

        if (updateLog.code) {
            return res.status(updateLog.status).json({
                err: {
                    code: updateLog.code,
                    message: updateLog.message,
                },
        });
    }
        res.status(OK).json({ id, name, quantity });
    }));

router.delete('/:id', rescue(async (req, res) => {
  const { id } = req.params; 
  
  const result = await products.deleteIt(id);

    if (result.code) {
        return res.status(result.status).json({
            err: {
                code: result.code,
                message: result.message,
            },
    });
  }

  const { _id, name, quantity } = result;

  res.status(OK).json({ id: _id, name, quantity });
}));

module.exports = router;

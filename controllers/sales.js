const router = require('express').Router();
const rescue = require('express-rescue');
const sales = require('../services/sales');

const OK = 200;

router.get('/', rescue(async (req, res) => {
    const result = await sales.getAll();
        res.status(result.status).json({ sales: [...result.sales] });
}));

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    const result = await sales.getById(id);
  
    if (result.code) {
        return res.status(result.status).json({
            err: {
                code: result.code,
                message: result.message,
            },
        });
    }

    res.status(OK).json(result);
});

router.post('/', rescue(async (req, res) => {
const soldProducts = req.body;

    const result = await sales.create(soldProducts); // If registration successful, its log is returned ...
   
    if (result.code) { // ... otherwise its error logs are returned.
        return res.status(result.status).json({
            err: {
                code: result.code,
                message: result.message,
            },
    });
}
    res.status(OK).json({ _id: result, itensSold: [...soldProducts] }); // If there is no error, the "insertId" is catch and forward it here.
}));

router.put('/:id', rescue(async (req, res) => {
    const { id } = req.params;
    const soldProducts = req.body;
    
        const result = await sales.update(id, soldProducts); // If update successful, its log is returned ...

        if (result.code) { // ... otherwise its error logs are returned.
            return res.status(result.status).json({
                err: {
                    code: result.code,
                    message: result.message,
                },
        });
    }
    res.status(OK).json({ _id: id, itensSold: [...soldProducts] });
    }));

router.delete('/:id', rescue(async (req, res) => {
  const { id } = req.params; 
  
  const result = await sales.deleteIt(id); // Here is returned "deleted data product" OR "data Errors" from SERVICES.

    if (result.code) { // Check if SERVICES retuned some "data errors"
        return res.status(result.status).json({
            err: {
                code: result.code,
                message: result.message,
            },
    });
  }

  res.status(OK).json(result);
}));

module.exports = router;
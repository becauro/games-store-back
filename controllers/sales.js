const router = require('express').Router();
const rescue = require('express-rescue');
const sales = require('../services/sales');

const CREATED = 201;
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

    const { _id, name, quantity } = result;

    res.status(200).json({ id: _id, name, quantity });
});

router.post('/', rescue(async (req, res) => {
const { productId, quantity } = req.body;

    const result = await sales.create(productId, quantity); // Se der algum erro, o SERVICES interrompe e retorna código de personalizado.
   
    if (result.code) { 
        return res.status(result.status).json({
            err: {
                code: result.code,
                message: result.message,
            },
    });
}
    res.status(CREATED).json({ _id: result, productId, quantity }); // Se não houver erro, o SERVICE repassa insertedId da MODEL que é usado aqui. 
}));

router.put('/:id', rescue(async (req, res) => {
    const { id } = req.params; // Talvez tenha que validar o id também. Depois vejo.
    const { name, quantity } = req.body;
    
        const updateLog = await sales.update(id, name, quantity); // Retorna apenas o log de update
        
        // DEBUG:
        console.log('CONTROLLER: retorno updateLog:');
        console.log(updateLog);

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
  
  const result = await sales.deleteIt(id); // Retorna apenas o log de delete
    
  // DEBUG:
  console.log('CONTROLLER: retorno result:');
  console.log(result);

    if (result.code) {
        return res.status(result.status).json({
            err: {
                code: result.code,
                message: result.message,
            },
    });
  }

  const { _id, name, quantity } = result;

  res.status(200).json({ id: _id, name, quantity });
}));

module.exports = router;
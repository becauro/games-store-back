const router = require('express').Router();
const rescue = require('express-rescue');
const sales = require('../services/sales');

// const CREATED = 201;
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

    // const { _id, name, quantity } = result;

    res.status(200).json(result);
});

router.post('/', rescue(async (req, res) => {
const soldProducts = req.body;

    const result = await sales.create(soldProducts); // Se der algum erro, o SERVICES interrompe e retorna código de personalizado.
   
    if (result.code) { 
        return res.status(result.status).json({
            err: {
                code: result.code,
                message: result.message,
            },
    });
}
    res.status(OK).json({ _id: result, itensSold: [...soldProducts] }); // Se não houver erro, o SERVICE repassa insertedId da MODEL que é usado aqui. 
}));

router.put('/:id', rescue(async (req, res) => {
    const { id } = req.params; // Talvez tenha que validar o id também. Depois vejo.
    const soldProducts = req.body;
    
        const result = await sales.update(id, soldProducts); // Retorna apenas o log de update
        
        // // DEBUG:
        // console.log('CONTROLLER: retorno result:');
        // console.log(result);

        if (result.code) {
            return res.status(result.status).json({
                err: {
                    code: result.code,
                    message: result.message,
                },
        });
    }
    res.status(OK).json({ _id: id, itensSold: [...soldProducts] }); // Se não houver erro, o SERVICE repassa insertedId da MODEL que é usado aqui. 
    }));

// router.delete('/:id', rescue(async (req, res) => {
//   const { id } = req.params; 
  
//   const result = await sales.deleteIt(id); // Retorna apenas o log de delete
    
//   // DEBUG:
//   console.log('CONTROLLER: retorno result:');
//   console.log(result);

//     if (result.code) {
//         return res.status(result.status).json({
//             err: {
//                 code: result.code,
//                 message: result.message,
//             },
//     });
//   }

//   const { _id, name, quantity } = result;

//   res.status(200).json({ id: _id, name, quantity });
// }));

module.exports = router;
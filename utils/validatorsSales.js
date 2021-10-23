const { ObjectId } = require('mongodb');
const modelsProducts = require('../models/products');

const UNPROCESSABLE_ENTITY = 422;
const MSG_WRONG_ID = 'Wrong sale ID format';
const CODE_INVALID_DATA = 'invalid_data';
const STATUS_UNPROCESSABLE_ENTITY = 422;

function quantityInArray(soldProducts) {
  const msg = 'Wrong product ID or invalid quantity';
  const resultSize = soldProducts.some(({ quantity }) => quantity < 1);
  const resultType = soldProducts.some(({ quantity }) => typeof quantity !== 'number');
  
  if (resultSize || resultType) { 
    return { status: UNPROCESSABLE_ENTITY, code: CODE_INVALID_DATA, message: msg };
  }
  return {};
}

const idExistsInArray = async (soldProducts) => {
  const promises = soldProducts.map(async ({ productId }) => {
    const check = await modelsProducts.getById(productId); // Em services/products
    
    if (check === null) return productId; 

    // Promises return "undefined" for every item test returning nothing.
  });
  
  // Promises add value(undefined) when some promises return nothing.
  // That's why is needed to check ALL array itens, once some item is NOT undefined..
  // ...that means some product to be registered not exists, we need reject the insertion into database until every item ...
  // ...has a valid "producId". I've check it by using the "some() function" over "result" var.

  const result = await Promise.all(promises);
  
  const someNotFound = result.some((item) => item !== undefined); // Promise.all assign a "undefined" item to every not found id in "map".

  if (!someNotFound) { // if false ("allFound"), that means ALL "productId" were found. 
      return [];
  }

  return result; // However, if return to here, some "productId" was not found. :)
};

const validSaleId = (id) => {
  if (!ObjectId.isValid(id)) { // Get error if invalid id format id found.
    return { 
      status: STATUS_UNPROCESSABLE_ENTITY, code: CODE_INVALID_DATA, message: MSG_WRONG_ID }; 
  }
};

// const updateProductQtd = (id, qtd) => {

// };

module.exports = {
  idExistsInArray,
  quantityInArray,
  validSaleId,
};
const { ObjectId } = require('mongodb');
const modelsProducts = require('../models/products');

const CODE_INVALID_DATA = 'invalid_data';
const STATUS_UNPROCESSABLE_ENTITY = 422;
const MSG_WRONG_ID = 'Wrong sale ID format';

function quantityInArray(soldProducts) {
  const msg = 'Wrong product ID or invalid quantity';
  const resultSize = soldProducts.some(({ quantity }) => quantity < 1);
  const resultType = soldProducts.some(({ quantity }) => typeof quantity !== 'number');
  
  if (resultSize || resultType) { 
    return { status: STATUS_UNPROCESSABLE_ENTITY, code: CODE_INVALID_DATA, message: msg };
  }
  return {};
}

const idExistsInArray = async (soldProducts) => {
  const promises = soldProducts.map(async ({ productId }) => {
    const check = await modelsProducts.getById(productId);
    
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

  return result; // However, if get here, some "productId" was not found. :)
};

const validSaleId = (id) => {
  if (!ObjectId.isValid(id)) { // Get error if invalid id format id found.
    return { 
      status: STATUS_UNPROCESSABLE_ENTITY, code: CODE_INVALID_DATA, message: MSG_WRONG_ID }; 
  }
};

const decProductQtd = async (soldProducts) => {
  // map every "soldProducts" passed and decrement its quantity:

    const promises = soldProducts.map(async ({ productId, quantity }) => {
      const { modifiedCount } = await modelsProducts.updateQtd(productId, -quantity);
      if (modifiedCount === 0) return { modifiedCount, productId };

      return {};
    });

  const result = await Promise.all(promises);

  const checkIfAllUpdated = result.some((modifiedCount) => modifiedCount === 0);

  if (checkIfAllUpdated) { 
    return `Os seguintes itens não foram atualizados: ${result} `;
    }
    return 'Deu certo, atualizou todos produtos';
};

const incProductQtd = async (soldProducts) => {
// map every "soldProducts" passed and increment its quantity:

  const promises = soldProducts.map(async ({ productId, quantity }) => {
    const { modifiedCount } = await modelsProducts.updateQtd(productId, quantity);
    if (modifiedCount === 0) return { modifiedCount, productId };

    return {};
  });

const result = await Promise.all(promises);

const checkIfAllUpdated = result.some((modifiedCount) => modifiedCount === 0);

if (checkIfAllUpdated) { 
  return `Os seguintes itens não foram atualizados: ${result} `;
  }
  return 'Deu certo, atualizou todos produtos';
};

const checkProductQtd = async (soldProducts) => {
  const promises = soldProducts.map(async ({ productId, quantity }) => {
    const check = await modelsProducts.getById(productId);
    
    // if (check === null) return productId;
    if (check.quantity < quantity) return productId;

    // Promises return "undefined" for every item test returning nothing.
  });

  const result = await Promise.all(promises);
  
  const someNotFound = result.some((item) => item !== undefined); // Promise.all assign a "undefined" item to every not found id in "map".

  if (!someNotFound) { // if false ("allFound"), that means ALL "productId" were found. 
      return [];
  }

  return result; // However, if get here, some "productId" was not found. :)
};

module.exports = {
  idExistsInArray,
  quantityInArray,
  validSaleId,
  decProductQtd,
  incProductQtd,
  checkProductQtd,
};
const modelsProducts = require('../models/products');

// const UNPROCESSABLE_ENTITY = 422;
// const CODE = 'invalid_data';

// function name(field) {
//   const lengthMdg = '"name" length must be at least 5 characters long';

//   if (field.length < 5) {
//     return { status: UNPROCESSABLE_ENTITY, code: CODE, message: lengthMdg };
//   }

//   return {};
// }

// function quantity(qtd) {
//   const sizeMsg = '"quantity" must be larger than or equal to 1';
//   const typeMsg = '"quantity" must be a number';

//   if (qtd < 1) {
//     return { status: UNPROCESSABLE_ENTITY, code: CODE, message: sizeMsg };
//   }
  
//   if (typeof qtd !== 'number') {
//     return { status: UNPROCESSABLE_ENTITY, code: CODE, message: typeMsg };
//   }
  
//   return {};
// }

// function quantityInArray(qtd) { // Refatorar depois
//   const sizeMsg = '"quantity" must be larger than or equal to 1';
//   const typeMsg = '"quantity" must be a number';

//   if (qtd < 1) {
//     return { status: UNPROCESSABLE_ENTITY, code: CODE, message: sizeMsg };
//   }
  
//   if (typeof qtd !== 'number') {
//     return { status: UNPROCESSABLE_ENTITY, code: CODE, message: typeMsg };
//   }
  
//   return {};
// }

// const alreadyExists = async (field, msg) => {
//   const product = await models.getByName(field);

//   if (product.name) {
//     return { status: UNPROCESSABLE_ENTITY, code: CODE, message: msg };
//   }
  
//   return {};
// };

const idExistsInArray = async (soldProducts) => {
  const promises = soldProducts.map(async ({ productId }) => {
    const check = await modelsProducts.getById(productId); // Em services/products
    
    if (check === null) return productId; 

    // For every item test that return nothing, promises return "undefined" anyway.
  });
  
  // Promises add value(undefined) when some promises return nothing.
  // That's why is needed to check ALL array itens, once if some item is NOT undefined..
  // ...that means some product not exists, then we need reject the insertion into database until every item ...
  // ...has a valid "producId". I check about it using the "some() function" in "result"

  const result = await Promise.all(promises); 
  
  const someNotOk = result.some((item) => item !== undefined);

  if (!someNotOk) { // if false ("allOk"), that means ALL "productId" were found. 
      return [];
  }

  return result; // However, if return to here, some "productId" was not found. :)
};

module.exports = {
  // name,
  // quantity,
  // alreadyExists,
  idExistsInArray,
  // quantityInArray,
};
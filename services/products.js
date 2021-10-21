const { ObjectId } = require('mongodb');
const models = require('../models/products');
const validators = require('../utils/validators');

const OK = 200;
const UNPROCESSABLE_ENTITY = 422;
const CODE = 'invalid_data';

const create = async (name, quantity) => {
  const validQtd = validators.quantity(quantity);
  const validName = validators.name(name);
  const existsMsg = 'Product already exists';
  
  if (validQtd.code) {
    return { code: validQtd.code, status: validQtd.status, message: validQtd.message };
  }
  
  if (validName.code) {
    return { code: validName.code, status: validName.status, message: validName.message };
  }
  
  const found = await validators.areadyExists(name, existsMsg);

  if (found.code) {
    return { code: found.code, status: found.status, message: found.message };
  }
 
  const insertedId = await models.create(name, quantity);
  return { insertedId };
};

const getAll = async () => {
  const productS = await models.getAll();
  console.log('Aqui productS em SERVICES');
  console.log(productS);
  if (productS.length !== 0) return { status: OK, productS };
};

const MONGO_ID_LENGTH = 12 * 2;
const isValidId = (id) => id && typeof id === 'string' && id.length === MONGO_ID_LENGTH;

const getById = async (id) => {
  const notFoundMsg = 'Wrong id format';

  // if (!ObjectId.isValid(id)) { // Get error if invalid id format
  //   console.log('Services: Não deveria chegar nesse IF');
  //   return { status: UNPROCESSABLE_ENTITY, code: CODE, message: notFoundMsg }; 
  // }

  if (!isValidId(id)) { // Get error if invalid id format
    console.log('Services: Não deveria chegar nesse IF');
    return { status: UNPROCESSABLE_ENTITY, code: CODE, message: notFoundMsg }; 
  }

  const product = await models.getById(id);

  console.log('O que chega no SERVICES:');
    console.log(product);

  // return { status: OK, product };

  // if (product) return { status: OK, product }; // Estava indo em partes
  if (product) return product; // Estava indo em partes

  // Get SAME error if invalid id was not found:
  return { status: UNPROCESSABLE_ENTITY, code: CODE, message: notFoundMsg };
};

module.exports = {
    create,
    getAll,
    getById,
};
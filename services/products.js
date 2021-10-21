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
  return insertedId;
};

const getAll = async () => { // Precisa ser feito algum tratamento de falha depois.
  const productS = await models.getAll();
  if (productS.length !== 0) return { status: OK, productS };
};

const getById = async (id) => {
  const notFoundMsg = 'Wrong id format';

  if (!ObjectId.isValid(id)) { // Get error if invalid id format
    return { status: UNPROCESSABLE_ENTITY, code: CODE, message: notFoundMsg }; 
  }

  const product = await models.getById(id);

  // Get SAME error if invalid id was not found:
  if (!product) { 
    return { status: UNPROCESSABLE_ENTITY, 
    code: CODE, 
    message: notFoundMsg };
  }
  
  return product;
};

module.exports = {
    create,
    getAll,
    getById,
};
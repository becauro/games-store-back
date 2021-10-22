const models = require('../models/products');
const validators = require('../utils/validators');

const OK = 200;
const STATUS_UNPROCESSABLE_ENTITY = 422;
const CODE_INVALID_DATA = 'invalid_data';
const MSG_WRONG_ID = 'Wrong id format';

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

const getAll = async () => {
  const productS = await models.getAll();

  return { status: OK, productS };
};

const getById = async (id) => {
  // Validating id ...
  
   const validateId = validators.validProductId(id);
   if (validateId && validateId.code) return validateId;

  // Searching ...

  const product = await models.getById(id);

  if (!product) { 
    return { status: STATUS_UNPROCESSABLE_ENTITY, 
    code: CODE_INVALID_DATA, 
    message: MSG_WRONG_ID };
  }
  
  return product;
};

const update = async (id, name, quantity) => {
  const validQtd = validators.quantity(quantity);
  const validName = validators.name(name);
  const notUpdated = 'Ops! nothing updated';
  
  if (validQtd.code) {
    return { code: validQtd.code, status: validQtd.status, message: validQtd.message };
  }
  
  if (validName.code) {
    return { code: validName.code, status: validName.status, message: validName.message };
  }
 
  const updateLog = await models.update(id, name, quantity);

  if (updateLog.modifiedCount === 0) { 
    return { status: STATUS_UNPROCESSABLE_ENTITY, 
    code: CODE_INVALID_DATA, 
    message: notUpdated };
  }

  // // DEBUG:
  //   console.log('SERVICES: retorno updateLog:');
  //   console.log(updateLog);

  return updateLog;
};

const deleteIt = async (id) => {
  const notDeletedMsg = 'Wrong id format';
  const errorDeleteMsg = 'Ops!, Item not deleted';

  // Validating id ...
  
  const validateId = validators.validProductId(id);
  if (validateId && validateId.code) return validateId;
  
  // Searching ...
  
  const product = await models.getById(id);

  // Get the SAME error if invalid id was not found:

  if (!product) { 
    return { status: STATUS_UNPROCESSABLE_ENTITY, 
    code: CODE_INVALID_DATA,
message: notDeletedMsg };
  }
  
  // Deleting
 
  const deleteLog = await models.deleteIt(id);

  if (deleteLog.deletedCount === 0) { 
    return { status: STATUS_UNPROCESSABLE_ENTITY, 
    code: CODE_INVALID_DATA, 
    message: errorDeleteMsg };
  }

  return product;
};

module.exports = {
    create,
    getAll,
    getById,
    update,
    deleteIt,
};
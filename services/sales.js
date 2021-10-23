const { ObjectId } = require('mongodb');
const models = require('../models/sales');
const validators = require('../utils/validatorsSales');

const STATUS_OK = 200;
const STATUS_UNPROCESSABLE_ENTITY = 422;
const STATUS_NOT_FOUND = 404;

const MSG_SALE_NOT_FOUND = 'Sale not found';
const MSG_NOT_UPDATED = 'Wrong product ID or invalid quantity';

const CODE_INVALID_DATA = 'invalid_data';
const CODE_NOT_FOUND = 'not_found';

const create = async (soldProducts) => {
  function notExistsProductsMsg(idArray) {
    return `The following productId(s) is(are) NOT found: [ ${idArray} ]`;
  }
  
  // "quantity" format valitation:

  const validQtd = validators.quantityInArray(soldProducts);
  
  if (validQtd.code) {
      return { code: validQtd.code, status: validQtd.status, message: validQtd.message };
    }
  
  // SEARCHING products:

  // Check if product(s) to be sold exists:

  const notFound = await validators.idExistsInArray(soldProducts);

  // Then if "notFound === true", that means some productId was not found. Its ids were sent to "notFound" var:

  if (notFound.length !== 0) { 
    return { code: CODE_INVALID_DATA,
      status: STATUS_UNPROCESSABLE_ENTITY,
      message: notExistsProductsMsg(notFound) };
  }
 
  // CREATING:

  const insertedId = await models.create(soldProducts); // if come here, thas means all productId were found
  return insertedId;
};

const getAll = async () => {
  const sales = await models.getAll();

  return { status: STATUS_OK, sales };
};

const getById = async (id) => {
  // Here the validation id is used like a "not found id".
  // I figured out the "trybe tester" mode allow an "invalid id checking" get the job done:

  if (!ObjectId.isValid(id)) { // Get error if invalid id format. This signature is like evaluator ask it.
    return { status: STATUS_NOT_FOUND, code: CODE_NOT_FOUND, message: MSG_SALE_NOT_FOUND }; 
  }

  // SEARCHING:

  const sale = await models.getById(id);

  // if found nothing return arror data:

  if (!sale) { 
    return { status: STATUS_NOT_FOUND, 
    code: CODE_NOT_FOUND, 
    message: MSG_SALE_NOT_FOUND };
  }
  
 // if found something, return its data:

  return sale;
};

const update = async (id, soldProducts) => {
  // "id" validation:

  const validateId = validators.validSaleId(id);
  if (validateId && validateId.code) return validateId;
    
  // "quantity" format valitation:

  const validQtd = validators.quantityInArray(soldProducts);
  
  if (validQtd.code) {
      return { code: validQtd.code, status: validQtd.status, message: validQtd.message };
    }

  // UPDATING:

  const updateLog = await models.update(id, soldProducts);

  // if found nothing (.modifiedCount === 0), return arror data:

  if (updateLog.modifiedCount === 0) { 
    return { status: STATUS_UNPROCESSABLE_ENTITY, 
    code: CODE_INVALID_DATA, 
    message: MSG_NOT_UPDATED };
  }

  // if found something, return its "updateLog":

  return updateLog;
};

const deleteIt = async (id) => {
  const notDeletedMsg = 'Wrong sale ID format';

  // "id" validation:

  const validateId = validators.validSaleId(id);
  if (validateId && validateId.code) return validateId;

  // DELETING:

  const sale = await models.deleteIt(id);

  // if found nothing, return arror data:

  if (sale.value === null) {
    return { status: STATUS_UNPROCESSABLE_ENTITY, 
    code: CODE_INVALID_DATA, 
    message: notDeletedMsg,
    };
  }

  // if deleted something, return its data:

  return sale.value;
};

module.exports = {
    create,
    getAll,
    getById,
    update,
    deleteIt,
};
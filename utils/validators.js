const { ObjectId } = require('mongodb');
const models = require('../models/products');

const UNPROCESSABLE_ENTITY = 422;
const CODE_INVALID_DATA = 'invalid_data';
const STATUS_UNPROCESSABLE_ENTITY = 422;

const MSG_WRONG_ID = 'Wrong id format';

function name(field) {
  const lengthMdg = '"name" length must be at least 5 characters long';

  if (field.length < 5) {
    return { status: UNPROCESSABLE_ENTITY, code: CODE_INVALID_DATA, message: lengthMdg };
  }

  return {};
}

function quantity(qtd) {
  const sizeMsg = '"quantity" must be larger than or equal to 1';
  const typeMsg = '"quantity" must be a number';

  if (qtd < 1) {
    return { status: UNPROCESSABLE_ENTITY, code: CODE_INVALID_DATA, message: sizeMsg };
  }
  
  if (typeof qtd !== 'number') {
    return { status: UNPROCESSABLE_ENTITY, code: CODE_INVALID_DATA, message: typeMsg };
  }
  
  return {};
}

const areadyExists = async (field, msg) => {
  const product = await models.getByName(field);

  if (product.name) {
    return { status: UNPROCESSABLE_ENTITY, code: CODE_INVALID_DATA, message: msg };
  }
  
  return {};
};

const validProductId = (id) => {
  if (!ObjectId.isValid(id)) { // Get error if invalid id format
    return { 
      status: STATUS_UNPROCESSABLE_ENTITY, code: CODE_INVALID_DATA, message: MSG_WRONG_ID }; 
  }
};

module.exports = {
  name,
  quantity,
  areadyExists,
  validProductId,
};
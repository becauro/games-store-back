const models = require('../models/products');

const UNPROCESSABLE_ENTITY = 422;
const CODE = 'invalid_data';

function name(field) {
  const lengthMdg = '"name" length must be at least 5 characters long';

  if (field.length < 5) {
    return { status: UNPROCESSABLE_ENTITY, code: CODE, message: lengthMdg };
  }

  return {};
}

function quantity(qtd) {
  const sizeMsg = '"quantity" must be larger than or equal to 1';
  const typeMsg = '"quantity" must be a number';

  if (qtd < 1) {
    return { status: UNPROCESSABLE_ENTITY, code: CODE, message: sizeMsg };
  }
  
  if (typeof qtd !== 'number') {
    return { status: UNPROCESSABLE_ENTITY, code: CODE, message: typeMsg };
  }
  
  return {};
}

const areadyExists = async (field, msg) => {
  const product = await models.getByName(field);

  if (product.name) {
    return { status: UNPROCESSABLE_ENTITY, code: CODE, message: msg };
  }
  
  return {};
};

module.exports = {
  name,
  quantity,
  areadyExists,
};
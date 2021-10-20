const models = require('../models/products');
const validators = require('../utils/validators');

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

module.exports = {
    create,
};
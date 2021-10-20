const models = require('../models/products');

const UNPROCESSABLE_ENTITY = 422;
const CODE = 'invalid_data';

const validator = (name, quantity) => {
    const nameCharMsg = '"name" length must be at least 5 characters long';
    const qtdMsg = '"quantity" must be larger than or equal to 1';
    const qtdStringmsg = '"quantity" must be a number';

    if (name.length < 5) return { code: CODE, status: UNPROCESSABLE_ENTITY, message: nameCharMsg };
    if (quantity < 1) return { code: CODE, status: UNPROCESSABLE_ENTITY, message: qtdMsg };
    if (typeof quantity !== 'number') { 
        return { code: CODE, status: UNPROCESSABLE_ENTITY, message: qtdStringmsg };
    }

    return {};
};

const create = async (name, quantity) => {
    const isValid = validator(name, quantity);

    if (isValid.code) {
        return { code: isValid.code, status: isValid.status, message: isValid.message };
    }

    const product = await models.create(name, quantity);
    return product;

    // try {
        
    // } catch (error) {
    //     return error;
    // }
};

module.exports = {
    create,
};
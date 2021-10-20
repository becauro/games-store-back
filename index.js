const express = require('express');
const bodyParser = require('body-parser');
const products = require('./controllers/products');

const PORT = '3000';

const app = express();
app.use(bodyParser.json());

app.post('/products', products.create);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.listen(PORT, () => {
  console.log('Online');
});
const express = require('express');
const bodyParser = require('body-parser');
const products = require('./controllers/products');
const errorMiddleware = require('./utils/errorMiddleware');

const PORT = '3000';

const app = express();
app.use(bodyParser.json());

app.use('/products', products);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.all('*', (req, res) => res.status(404).send('Router not found'));

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log('Online');
});
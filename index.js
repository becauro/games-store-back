const express = require('express');
const products = require('./controllers/products');

const PORT = '3000';

const app = express();

app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', products);

app.all('*', (req, res) => res.status(404).send('Router not found'));

app.listen(PORT, () => {
  console.log('Online');
});
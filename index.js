const express = require('express');
const products = require('./controllers/products');
const sales = require('./controllers/sales');
const errorMiddleware = require('./utils/errorMiddleware');

const app = express();

app.use(express.json());

app.use('/products', products);
app.use('/sales', sales);

app.all('*', (req, res) => res.status(404).send('Router not found'));

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log('Online');
});
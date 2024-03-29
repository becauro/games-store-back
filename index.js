const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const products = require('./controllers/products');
const sales = require('./controllers/sales');
const errorMiddleware = require('./utils/errorMiddleware');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(cors());

app.use(express.static(path.join(`${__dirname}`, '/images')));

app.use('/products', products);
app.use('/sales', sales);

app.all('*', (_req, res) => res.status(404).send('Router not found'));

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Online na porta ${PORT}`);
});

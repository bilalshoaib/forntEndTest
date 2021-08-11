const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const productRoute = require('./route/productRoute');
const app = express();
app.use(cors())
// 1) 

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
app.use('/api/v1', productRoute);



module.exports = app;


const express = require('express');

const productController = require('../controller/productController');

const router = express.Router();

router.post('/add-product', productController.createProduct);
router.get('/get-products', productController.getProducts);
router.patch('/update-products/:id', productController.updateProduct);
router.delete('/delete-product/:id', productController.deleteProduct);

module.exports = router;

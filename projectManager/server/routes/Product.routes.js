const express = require('express');
const {
    handleCreateProduct,
    handleGetAllProducts,
    handleGetOneProduct,
    handleDeleteProduct,
    handleUpdateProductById
}= require('../controllers/Product.controller')

const router = express.Router();

router.get('/', handleGetAllProducts);
router.post('/', handleCreateProduct);
router.get('/:id', handleGetOneProduct);
router.delete('/:id', handleDeleteProduct);
router.put('/:id', handleUpdateProductById);


module.exports={ProductRouter: router}
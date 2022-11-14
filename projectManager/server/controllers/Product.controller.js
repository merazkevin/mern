const {
    createProduct,
    getAllProducts,
    getOneProduct,
    deleteProduct,
    updateProductByid
} = require('../services/Product.service');


const handleCreateProduct = async (request, response) => {
    console.log('<=== controller: handleCreateProduct request.body:',  request.body);
    try {
        const Product = await createProduct(request.body);
        return response.json(Product)
    } catch (error) {
        return response.status(400).json(error);
    }
}

const handleGetAllProducts = async (request, response) => {
    console.log('<=== controller: handleGetAllProducts');
    try {
        const Products = await getAllProducts();
        return response.json(Products)
    } catch (error) {
        return response.status(400).json(error);
    }
}

const handleGetOneProduct = async (request, response) => {
    console.log('<=== controller: handlegetOneProduct request.params ===> ')
    console.log(request.params.id);
    console.log('=====================');
    try {
        const Product = await getOneProduct(request.params.id);
        return response.json(Product)
    } catch (error) {
        return response.status(400).json(error);
    }
}

const handleDeleteProduct = async (request, response) => {
    console.log('<=== controller: handleDeleteProduct request.params ===> ')
    console.log(request.params.id);
    console.log('=====================');

    try {
        const Product = await deleteProduct(request.params.id);
        return response.json(Product)
    } catch (error) {
        return response.status(400).json(error);
    }
}

const handleUpdateProductById = async (request, response) => {
    console.log('<=== controller: handleUpdateProductById request.params ===> ');
    console.log(request.params.id);
    console.log('=====================');
    console.log('request.body :', request.body);
    console.log('=====================');
    try {
        const Product = await updateProductByid(request.params.id, request.body);
        return response.json(Product)
    } catch (error) {
        return response.status(400).json(error);
    }
}


    module.exports = {
        handleCreateProduct,
        handleGetAllProducts,
        handleGetOneProduct,
        handleDeleteProduct,
        handleUpdateProductById,
    }
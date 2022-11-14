const {Product} = require('../models/Product.model');

// <=== API methods ===>
const createProduct = async(data)=>{
    console.log('service: <=== createProduct ===>');
    const newProduct = await Product.create(data);
    return newProduct;
}

const getAllProducts = async()=>{
    console.log('service: <=== getAllProducts ===>');
    const allProducts = await Product.find();
    return allProducts;
}

const getOneProduct = async(id)=>{
    console.log('service: <=== getOneProduct ===>');
    const oneProduct = await Product.findById(id);
    return oneProduct;
}

const deleteProduct = async(id)=>{
    console.log('service: <=== deleteProductByid ===>');
    const deleteProduct = await Product.findByIdAndDelete(id);
    return deleteProduct;
}

const updateProductByid = async(id,data)=>{
    console.log('service: <=== updateProductByid ===>');
    const updateProduct = await Product.findByIdAndUpdate(id,data, {
        runValidators:true,
        new:true
    });
    return updateProduct;
}





// <=== exports ===>
module.exports={
    createProduct,
    getAllProducts,
    getOneProduct,
    deleteProduct,
    updateProductByid
};

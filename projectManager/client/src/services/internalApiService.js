import axios from 'axios';

const http=axios.create({
    baseURL: 'http://localhost:800/api',
})

export const getAllproducts = async()=>{
    const response = await http.get('/products')
    return res.data;
}

export const getOneProductById = async()=>{
    const response = await http.get(`/products/${id}`)
    return res.data;
}

export const createProduct = async(data)=>{
    const response = await http.post('/products/', data)
    return res.data;
}

export const updateProductById = async(id,data)=>{
    const response = await http.put(`/products/${id}`, data)
    return res.data;
}

export const deleteProductById = async(id)=>{
    const response = await http.delete(`/products/${id}`)
    return res.data;
}
import axios from 'axios';

const http= axios.create({
    baseURL:'http://localhost:8000/api'
});

export const getAllProducts = async ()=>{
    const response = await http.get('/products');
    return response.data;
}

export const getProductById = async (id)=>{
    const response = await http.get(`/products/${id}`);
    return response.data;
}

export const createProduct = async (data)=>{
    const response = await http.post('/products/', data);
    return response.data;
}

export const updateProduct = async (id, data)=>{
    const response = await http.put(`/products/${id}`, data);
    return response.data;
}

export const deleteProduct = async (id)=>{
    const response = await http.delete(`/products/${id}`);
    return response.data;
}
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { createProduct } from '../services/internalApiService'

export const NewProduct = (props) => {
    const [formData, setFormData] = useState({
        title:'',
        price:'',
        description:''
    })

    const [errors, setErrors] = useState(null);

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        for (const key in formData) {
            if (formData[key] === false) {
                delete formData[key];
            }
        }
        createProduct(formData)
            .then((data) => {
                console.log('new Product data:', data)
                navigate(`/Products/${data._id}`)
            })
            .catch((error) => {
                console.log(error.response?.data?.errors);
                setErrors(error.response?.data?.errors)
            })
    }

    const handleFormChanges = (event) => {
        if (event.target.checked) {
            setFormData({
                ...formData,
                [event.target.name]: event.target.checked,
            })
            return null;
        }
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div className="w-50 p-4 rounded mx-auto shadow">
            <h3 className="text-center"> New Product</h3>

            {/* <=== form ===> */}
            <form onSubmit={(event) => {handleSubmit(event);}}>
                <div className="form-group">
                    {/* <=== product input ===> */}
                    <label className="h6">product</label>
                    <input
                        onChange={handleFormChanges}
                        type="text"
                        name="product"
                        value={formData.product}
                        className="form-control"/>
                    {/* <===validation ===> */}
                    {errors?.product && (
                        <span className="text-danger">{errors.product?.message}</span>
                    )}

                    {/* <=== price input ===> */}
                    <label className="h6">price</label>
                    <input
                        onChange={handleFormChanges}
                        type="text"
                        name="price"
                        value={formData.price}
                        className="form-control"/>
                    {/* <===validation ===> */}
                    {errors?.price && (
                        <span className="text-danger">{errors.price?.message}</span>
                    )}
                </div>
                
                {/* <=== description input ===> */}
                <label className="h6">description</label>
                    <input
                        onChange={handleFormChanges}
                        type="text"
                        name="description"
                        value={formData.description}
                        className="form-control"/>
                    {/* <===validation ===> */}
                    {errors?.description && (
                        <span className="text-danger">{errors.description?.message}</span>
                    )}
                <hr />
                <button className="btn btn-sm btn-outline-success">Submit</button>
            </form>
        </div>
    )
}
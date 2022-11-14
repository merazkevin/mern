import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { updateProduct, getProductById } from '../services/internalApiService';

export const EditProduct = (props) => {
    const { id } = useParams();

    const [formData, setFormData] = useState({})

    const [errors, setErrors] = useState(null);

    const navigate = useNavigate()

    useEffect(() => {
        getProductById(id)
            .then((data) => {
                setFormData(data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [id])

    const handleSubmit = (event) => {
        event.preventDefault();
        for (const key in formData) {
            if (formData[key] === false) {
                delete formData[key];
            }
        }
        updateProduct(id, formData)
            .then((data) => {
                console.log('new Product data:', data)
                navigate(`/Products/${data._id}`)
            })
            .catch((error) => {
                console.log(error.response);
                setErrors(error.response?.data?.errors)
            })
    }

    const handleFormChanges = (event) => {
        console.log("here in the change", event.target.checked)
        if (event.target.type === "checkbox") {
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

    if (formData === null) {
        return null
    }

    return (
        <div className="w-50 p-4 rounded mx-auto shadow">
            <h3 className="text-center"> Edit Product</h3>

            {/* <=== form ===> */}
            <form onSubmit={(event) => {handleSubmit(event);}}>
                <div className="form-group">
                    {/* <=== product input ===> */}
                    <label className="h6">Product</label>
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
                    <label className="h6">Price</label>
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
                <label className="h6">Description</label>
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
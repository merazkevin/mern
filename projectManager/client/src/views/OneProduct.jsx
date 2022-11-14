import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById , deleteProduct} from '../services/internalApiService';

export const OneProduct = (props) => {
    const { id } = useParams();
    const [Product, setProduct] = useState(null)

    const navigate = useNavigate();

    useEffect(() => {
        getProductById(id)
            .then((data) => {
                setProduct(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id])

    const handleDeleteClick = () => {
        deleteProduct(id)
            .then((data) => {
                navigate('/Products')
            })
            .catch((error) => {
                console.log(error);
            })
    }

    if (Product === null) {
        return null;
    }
    
    const { title, price, description} = Product
    return (
        <div className="w-100 mx-auto shadow mb-4 rounded border p-4">
            <h4>{title}</h4>
            <p>{price}</p>
            <p>{description}</p>


            <button
            className="btn btn-sm btn-outline-danger mx-auto"
            onClick={()=> {
                handleDeleteClick()
            }}> Delete</button>

        </div>
    )
}
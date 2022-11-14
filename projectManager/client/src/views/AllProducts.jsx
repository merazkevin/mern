import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllProducts, deleteProduct } from "../services/internalApiService"

export const AllProducts = (props) => {
    const [Products, setProducts] = useState([])

    useEffect(()=>{
        getAllProducts()
            .then((data) => {
                setProducts(data);
            })
            .catch((error)=>{
                console.log(error);
            })
    }, []) 

    const handleDeleteClick = (idToDelete) => {
        deleteProduct(idToDelete)
        .then((data) => {
            console.log(data)
            const filteredProducts = Products.filter((Product) => {
                return Product._id !== idToDelete
            })
            setProducts(filteredProducts)
        })
        .catch((error) =>{
            console.log(error)
        })
    }

    return (
        <div className="w-50 mx-auto text-center">
            <h2>Products</h2>
            {Products.map((Product, i) => {
                const {_id, title, description, price} = Product;
                return (
                    <div key={i} className="shadow mb-4 rounded border p-4">
                        <Link to={`/Products/${_id}`}>
                            <h4>{title}</h4>
                        </Link>
                        <p>{description}</p>
                        <p>{price}</p>
                        <button 
                        className="btn btn-sm btn-outline-danger mx-1"
                        onClick={(event)=> {
                            handleDeleteClick(_id)
                        }}
                        >
                            Delete
                        </button>
                        <Link to={`/Products/${_id}/edit`}> Edit </Link>
                    </div>
                )
            })}
        </div>
    )
}
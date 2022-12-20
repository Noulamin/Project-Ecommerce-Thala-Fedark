import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Pagination from './Pagination'




const Products = () => {
    const [product, setProduct] = useState([]);
    const [currentProd, setCurrentProd] = useState(1);
    const [prodPerPage, setProdPerPage] = useState(8);

    const indexOfLastProd = currentProd * prodPerPage
    const indexOfFirstProd = indexOfLastProd - prodPerPage
    const currentProduct = product.slice(indexOfFirstProd, indexOfLastProd)


    useEffect(() => {
        getAllProduct()
    }, []);

    const url = 'http://localhost:8080/Product/getAllProduct'
    const getAllProduct = async () => {

        try {
            await axios.get(url)
                .then(res => {
                    console.log(res.data)
                    setProduct(res.data)
                    

                })
                .catch(err => {
                    console.log(err);
                })
        } catch (error) {
            console.log(error);
        }
    }

    const paginate = pageNumber => setCurrentProd(pageNumber);


    const addProdToPanier = () => {
        
    }



    return (
        <>

            <div className="container pb-16">
                <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">recomended for you</h2>
                <div className="grid grid-cols-4 gap-6">
                    {currentProduct.map(prod =>
                        <div className="bg-white shadow rounded overflow-hidden group">
                            <div className="relative">
                                <img src="assets/images/products/product1.jpg" alt="product 1" className="w-full" />
                                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                    <Link to="#"
                                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                        title="view product">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </Link>
                                    <Link to="#"
                                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                        title="add to wishlist">
                                        <i className="fa-solid fa-heart"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="pt-4 pb-3 px-4">
                                <Link to="#">
                                    <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">{prod.title_produit} </h4>
                                </Link>
                                <div className="flex items-baseline mb-1 space-x-2">
                                    <p className="text-xl text-primary font-semibold">${prod.prix_produit} </p>
                                    <p className="text-sm text-gray-400 line-through">{prod.promotion_produit == true ? prod.pourcentage_produit : null}</p>
                                </div>
                                <div className="flex items-center">

                                    <div className="text-xs text-gray-500 ml-3">Stock ({prod.stock_produit}) </div>
                                </div>
                            </div>
                            <button className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add to cart</button>
                        </div>
                    )}

                    <div>
                        <Pagination prodPerPage={prodPerPage} totalProd={product.length} paginate={paginate} />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Products
import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logout from './Home/Logout'
import axios from 'axios'



const NavBar = () => {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        getAllCategories()
    }, []);

    const url = 'http://localhost:8080/categorie/getAllCategorie'

    const getAllCategories = () => {
        try {
            axios.get(url)
            .then(response => {
                setCategory(response.data)
              console.log(response.data);
            })
            .catch(e => {
              console.log(e);
            });
        } catch (err) {
            console.log(err);
        }
    }
   
  return (
    <>
    
    <nav className="bg-gray-800">
        <div className="container flex">
            <div className="px-8 py-4 bg-primary flex items-center cursor-pointer relative group">
                <span className="text-white">
                    <i className="fa-solid fa-bars"></i>
                </span>
                <button onClick={getAllCategories} className="capitalize ml-2 text-white">All Categories</button>

                
                <div
                    className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
                    {category.map(categorie => 
                    <div className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <Link to='#' className="ml-6 text-gray-600 text-sm">{categorie.categorie}</Link>
                    </div>
                    )}
                </div>
            </div>

            <div className="flex items-center justify-between flex-grow pl-12">
                <div className="flex items-center space-x-6 capitalize">
                    <Link to="home" className="text-gray-200 hover:text-white transition">Home</Link>
                    <Link to="pages/shop.html" className="text-gray-200 hover:text-white transition">Shop</Link>
                    <Link to="#" className="text-gray-200 hover:text-white transition">About us</Link>
                    <Link to="#" className="text-gray-200 hover:text-white transition">Contact us</Link>
                </div>
                <Logout />
            </div>
        </div>
    </nav>
    
    </>
  )
}

export default NavBar
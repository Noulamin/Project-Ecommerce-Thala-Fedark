import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logout from './Home/Logout'
import axios from 'axios'
import Categories from './Categories'



const NavBar = () => {

   
  return (
    <>
    
    <nav className="bg-gray-800">
        <div className="container flex">
            <Categories />
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
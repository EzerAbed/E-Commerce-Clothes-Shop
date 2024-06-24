import React from 'react';
import { FaMoon, FaShoppingCart, FaBell, FaUser, FaSun } from 'react-icons/fa';
import { TfiAlignJustify } from "react-icons/tfi"
import '../CSS/navbar.css';
import ThemeContext from "../Context/ThemeContext"
import { useContext, useState, useEffect } from'react'

const Navbar = () => {

    //Context management
    let {theme, setTheme} = useContext(ThemeContext)

    //state management
    let [itemCount, setItemCount] = useState(0)

    //Managing the change of theme
    useEffect(() => {
        document.body.className = theme
    },[theme])

    return (
        <>
            <nav className="navbar">
                <div className="navbarContainer">
                    <div className="navbarLogo">
                        <img src="https://placeholderimage.eu/api/id/1" alt="Logo" />
                    </div>
                    <div className="navbarSearch">
                        <input type="text" placeholder="Search" />
                    </div>
                
                    <div className={`navbarIcons ${theme}`}>
                        <div onClick={() => {setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))}}>
                            {theme === 'light' ? <FaSun className="sun" /> : <FaMoon className="moon" />}
                        </div>
                        <div className="cartIcon">
                            <FaShoppingCart className={`category ${theme}`}/>
                            <span className="badge"> {itemCount} </span>
                        </div>
                        <FaBell className={`category ${theme}`}/>
                        <FaUser className={`category ${theme}`}/>
                    </div>
                </div>
            </nav>
            <div className={`menuContainer ${theme}`}>
                <div className='categoryIcon'>
                    <TfiAlignJustify className={`category ${theme}`}/>
                    <span className='text'>category</span>
                </div>
                <ul className="menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">My Favourite Stores</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Wishlist</a></li>
                    <li><a href="#">Shipping Info</a></li>
                    <li><a href="#">Be a vendor</a></li>
                    <li><a href="#">Track order</a></li>
                    <li><a href="#">Checkout</a></li>
                </ul>
            </div>
        </>
    );
};

export default Navbar

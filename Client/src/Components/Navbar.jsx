import React from 'react';
import { FaMoon, FaShoppingCart, FaBell, FaUser, FaSun } from 'react-icons/fa';
import { TfiAlignJustify } from "react-icons/tfi"
import '../CSS/navbar.css';
import ThemeContext from "../Context/ThemeContext"
import UserContext from "../Context/UserContext"
import { useContext, useState, useEffect } from'react'
import { Link } from "react-router-dom"

const Navbar = () => {

    //Context management
    let {theme, setTheme} = useContext(ThemeContext)
    let { user } = useContext(UserContext)

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
                    <div className={`navbarSearch ${theme}`}>
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
                        {user? <FaUser className={`category ${theme}`}/> : <Link to="/login" className={`logInBtn ${theme}`}> <button>Log in</button> </Link> }
                    </div>
                </div>
            </nav>
            <div className={`menuContainer ${theme}`}>
                <div className='categoryIcon'>
                    <TfiAlignJustify className={`category ${theme}`}/>
                    <span className='text'>category</span>
                </div>
                <ul className="menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="#">Wishlist</Link></li>
                    <li><Link to="#">Shipping Info</Link></li>
                    <li><Link to="#">Track order</Link></li>
                    <li><Link to="#">Checkout</Link></li>
                </ul>
            </div>
        </>
    );
};

export default Navbar

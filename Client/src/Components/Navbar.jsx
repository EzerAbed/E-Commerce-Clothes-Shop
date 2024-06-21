import React from 'react';
import { FaMoon, FaShoppingCart, FaBell, FaUser, FaSun } from 'react-icons/fa';
import { TfiAlignJustify } from "react-icons/tfi"
import '../CSS/navbar.css';

const Navbar = () => {
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
                
                    <div className="navbarIcons">
                        <FaMoon className='moon'/>
                        <FaSun className='sun'/>
                        <div className="cartIcon">
                            <FaShoppingCart />
                            <span className="badge">3</span>
                        </div>
                        <FaBell />
                        <FaUser />
                    </div>
                </div>
            </nav>
            <div className='menuContainer'>
                <div className='categoryIcon'>
                    <TfiAlignJustify />
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

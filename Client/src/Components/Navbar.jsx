import React from 'react';
import { FaMoon, FaShoppingCart, FaBell, FaUser, FaSun, FaSearch } from 'react-icons/fa';
import { TfiAlignJustify } from "react-icons/tfi";
import '../CSS/navbar.css';
import ThemeContext from "../Context/ThemeContext";
import UserContext from "../Context/UserContext";
import { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

    //Context management
    let { theme, setTheme } = useContext(ThemeContext);
    let { user, setUser } = useContext(UserContext);

    //state management
    let [itemCount, setItemCount] = useState(0);
    let [dropdownOpen, setDropdownOpen] = useState(false);

    //Managing the change of theme
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    //Toggle dropdown
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    //Handle logout
    const navigate = useNavigate();
    const handleLogout = () => {
        setUser(null);
        setDropdownOpen(false);
        navigate('/');
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbarContainer">
                    <div className="navbarLogo">
                        <Link to='/'> <img src="https://placeholderimage.eu/api/id/1" alt="Logo" /> </Link>
                    </div>

                    <div className={`navbarSearch ${theme}`}>
                        <FaSearch className="searchIcon" />
                        <input type="text" placeholder="Search" />
                    </div>

                    <div className={`navbarIcons ${theme}`}>
                        <div onClick={() => { setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light')) }}>
                            {theme === 'light' ? <FaSun className="sun" /> : <FaMoon className="moon" />}
                        </div>
                        <div className="cartIcon">
                            <Link to='/cart'><FaShoppingCart className={`category ${theme}`} /></Link>
                            <span className="badge"> {itemCount} </span>
                        </div>
                        <FaBell className={`category ${theme}`} />
                        {user? <div className="userIcon" onClick={toggleDropdown}>
                            <FaUser className={`category ${theme}`} />
                            {dropdownOpen && (
                                <div className={`dropdownMenu ${theme}`}>
                                    <Link to="/profile" onClick={() => setDropdownOpen(false)}>Profile</Link>
                                    <button onClick={handleLogout}>Logout</button>
                                </div>
                            )}
                        </div> :
                        <Link to="/login" className={`logInBtn ${theme}`}> <button>Log in</button> </Link>}
                    </div>
                </div>
            </nav>
            <div className={`menuContainer ${theme}`}>
                <div className='categoryIcon'>
                    <TfiAlignJustify className={`category ${theme}`} />
                    <span className='text'>category</span>
                </div>
                <ul className="menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/wishlist">Wishlist</Link></li>
                    <li><Link to="#">Shipping Info</Link></li>
                    <li><Link to="#">Track order</Link></li>
                    <li><Link to="#">Checkout</Link></li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;

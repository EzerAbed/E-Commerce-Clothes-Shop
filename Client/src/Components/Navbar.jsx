import { FaMoon, FaShoppingCart, FaBell, FaUser, FaSun } from 'react-icons/fa'
import { HiOutlineSearch } from 'react-icons/hi';
import '../CSS/navbar.css'


const Navbar = () => {

    return(
        <nav className='navbar'>
            <div className='navbarContainer'>

                <div className='logo'>
                    <img src="" alt="logo" />
                </div>

                <form className='nvabarSearch'>
                    <input
                        className='searchInput'
                        type="text"
                        placeholder="Search..."
                    />
                    <button type="submit" className='searchButton'>
                        <HiOutlineSearch className='searchIcon'/>
                    </button>
                </form>

                <div className="navbarIcons">
                    <FaMoon />
                    <FaSun />
                    <div className="cartIcon">
                        <FaShoppingCart />
                        <span className="badge">3</span>
                    </div>
                    <FaBell />
                    <FaUser />
                </div>
            </div>

            <div className="navbarMenu">
                <p>categories</p>
                <ul>
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

            
        </nav>
    )
}

export default Navbar
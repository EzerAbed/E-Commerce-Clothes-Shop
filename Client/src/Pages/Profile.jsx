import { useContext, useState } from 'react';
import '../CSS/profil.css';
import { FaKey, FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { RiStarSFill } from "react-icons/ri";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import userImagePlaceholder from '../assets/userplaceholder.jpg';
import ThemeContext from "../Context/ThemeContext";
import Editprofile from '../Components/Editprofil';
import Review from '../Components/Review';
import Orders from '../Components/Orders';
import Wishlist from '../Components/Wishlist';
import ChangePasswordPopup from '../Components/ChangePwdPopUp';
import UserContext from '../Context/UserContext';

const Profile = () => {
    // context management
    let { theme } = useContext(ThemeContext);
    let { user, setUser } = useContext(UserContext);

    // State management
    const [totalSpent, setTotalSpent ] = useState(0)
    const [numberOrder, setNumberOrder] = useState(0)
    const [numberReview, setNumberReview] = useState(0)
    const [selectedTab, setSelectedTab] = useState('')
    const [isPopupVisible, setIsPopupVisible] = useState(false)

    const togglePopup = () => {
        setIsPopupVisible(!isPopupVisible);
    };

    const renderContent = () => {
        switch (selectedTab) {
            case 'orders':
                return <Orders />;
            case 'reviews':
                return <Review />;
            case 'wishlist':
                return <Wishlist />;
            case 'personalInfo':
                return <Editprofile />;
            default:
                return <div></div>;
        }
    };

    return (
        <div className='profileContainer'>
            <div className='topSide'>
                <h1>Profile</h1>
                <div className='pbtns'>
                    <button className='Del'><FaTrash /> <span>Delete Account</span></button>
                    <button className='changePWD' onClick={togglePopup}><FaKey /><span>Change Password</span></button>
                </div>
            </div>

            <div className='midSide'>
                <div className={`right ${theme}`}>
                    <div className='profileDetailes'>
                        <img src={userImagePlaceholder} alt="" />
                        <div className='pDetailes'>
                            <h2> {user.username} </h2>
                            <p>created since {user.createdAT}</p>
                            <div className='pLinks'>
                                <a href={user.facebook} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" className='footer-icon' />
                                </a>
                                <a href={user.instagram} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" className='footer-icon' />
                                </a>
                                <a href={user.twitter} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faTwitter} size="2x" className='footer-icon' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='separator'></div>
                    <div className='oDetails'>
                        <div className='total'>
                            <h3>Total Spent</h3>
                            <p> {totalSpent} DT</p>
                        </div>
                        <div className='lastOrder'>
                            <h3>Last Order</h3>
                            <p>X Time</p>
                        </div>
                        <div className='totalOrders'>
                            <h3>Total Orders</h3>
                            <p> {numberOrder} </p>
                        </div>
                    </div>
                </div>
                <div className={`left ${theme}`}>
                    <h2 className="header">Address</h2>
                    <div className='separator'></div>
                    <table>
                        <tr>
                            <td>Address</td>
                            <td>{user.adress}</td>
                        </tr>
                        <div className='separator'></div>
                        <tr>
                            <td>Email</td>
                            <td> {user.email} </td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>{user.phoneNumber}</td>
                        </tr>
                    </table>
                </div>
            </div>

            <div className='botSide'>
                <ul>
                    <li className={selectedTab === 'orders' ? 'active' : ''} onClick={() => setSelectedTab('orders')}>
                        <FaShoppingCart /><span>Orders ({numberOrder})</span>
                    </li>
                    <li className={selectedTab === 'reviews' ? 'active' : ''} onClick={() => setSelectedTab('reviews')}>
                        <RiStarSFill /><span>Reviews ({numberReview})</span>
                    </li>
                    <li className={selectedTab === 'wishlist' ? 'active' : ''} onClick={() => setSelectedTab('wishlist')}>
                        <FaHeart /><span>Wishlist</span>
                    </li>
                    <li className={selectedTab === 'personalInfo' ? 'active' : ''} onClick={() => setSelectedTab('personalInfo')}>
                        <FaUser /><span>Personal info</span>
                    </li>
                </ul>
                <div>
                    {renderContent()}
                </div>

                {isPopupVisible && <ChangePasswordPopup togglePopup={togglePopup} />}
                
            </div>
        </div>
    );
}

export default Profile;

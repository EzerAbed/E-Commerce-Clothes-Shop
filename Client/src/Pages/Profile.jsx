import '../CSS/profil.css'
import { FaRegTrashCan } from "react-icons/fa6";
import { FaKey } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook ,  faInstagram , faTwitter} from '@fortawesome/free-brands-svg-icons';
import userImagePlaceholder from '../assets/userplaceholder.jpg'
import { useContext } from'react';
import ThemeContext from "../Context/ThemeContext"

const Profile = () => {
    let {theme} = useContext(ThemeContext)
    
    return(
        <div className='profileContainer'>
            <div className='topSide'>
                <h1>Profile</h1>
                <div className='pbtns'>
                    <button className='Del'><FaRegTrashCan /> <span>Delete Account</span></button>
                    <button className='changePWD'><FaKey/><span>Change Password</span></button>
                </div>
            </div>

            <div className='midSide'>
                <div className={`right ${theme}`}>
                    <div className='profileDetailes'>

                        <img src={userImagePlaceholder} alt="" />

                        <div className='pDetailes'>
                            <h2>Username</h2>
                            <p>last time of connection</p>
    

                            <div className='pLinks'>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" >
                                    <FontAwesomeIcon icon={faFacebook} size="2x" className='footer-icon'/>
                                </a>

                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" className='footer-icon' />
                                </a>

                                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faTwitter} size="2x" className='footer-icon'/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='separator'></div>

                    <div className='oDetails'>
                        <div className='total'>
                            <h3>Total Spent</h3>
                            <p>X DT</p>
                        </div>

                        <div className='lastOrder'>
                            <h3>Last Order</h3>
                            <p>X Time</p>
                        </div>

                        <div className='totalOrders'>
                            <h3>Total Orders</h3>
                            <p>X</p>
                        </div>
                    </div>
                </div>

                <div className={`left ${theme}`}>
                    <h2 className="header">Address</h2>
                    <div className='separator'></div>
                    <table>
                        <tr>
                            <td>Address</td>
                            <td>Address exemple</td>
                        </tr>
                    </table>
                    <div className='separator'></div>
                    <table>
                        <tr>
                            <td>Email</td>
                            <td>someone@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>0123456789</td>
                        </tr>
                    </table>
                </div>
            </div>

            
        </div>
    )
}

export default Profile
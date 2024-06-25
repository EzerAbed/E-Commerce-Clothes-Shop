import '../CSS/profil.css'
import { FaRegTrashCan } from "react-icons/fa6";
import { FaKey } from "react-icons/fa";

const Profile = () => {
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
                <div className='profileDetailes'>
                    
                </div>
            </div>
        </div>
    )
}

export default Profile
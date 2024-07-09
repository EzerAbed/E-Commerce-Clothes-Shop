import React, { useState, useContext } from 'react'
import '../CSS/popup.css';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ThemeContext from "../Context/ThemeContext"
import UserContext from '../Context/UserContext';

const ChangePasswordPopup = ({ togglePopup }) => {

    //context management
    let {theme} = useContext(ThemeContext)
    let {user} = useContext(UserContext)

    //state management
    const [oldPassword, setOldPassword] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    //handling password change
    const handleSubmit = (e) => {
        e.preventDefault()

        if (!oldPassword || !password || !confirmPassword) {
            toast.warn('All fields must be filled !')
            return;
        }

        if (password !== confirmPassword) {
            toast.warn('the new password and its confirmation does not match !')
            return 
        }

        let id = user.id
        let username = user.username
        let email = user.email
        let newUserInfo = { id : id, 
            username : username, 
            email : email, 
            password : oldPassword, 
            newpassword : password }
        
        //need to test this request
        fetch('http://localhost:8000/user/editPassword', { 
            method: 'PUT',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newUserInfo)
        })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                toast.error(data.message);
            } else {
                toast.success("Account updated!")
                setOldPassword('')
                setPassword('')
                setConfirmPassword('')
            }
        })
        .catch(error => {
            toast.error('An error occurred')
            console.log(error.message)
        })


    };

    return (
        <>
            <ToastContainer />
            <div className="popup">
                <div className={`popup-inner ${theme}`}>
                    <h2>Change Password</h2>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Old Password:
                            <br />
                            <input
                                type="password"
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            New Password:
                            <br />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Confirm New Password:
                            <br />
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </label>
                        <button type="submit">Change Password</button>
                    </form>
                    <button onClick={togglePopup}>Close</button>
                </div>
            </div>
        </>
    );
};

export default ChangePasswordPopup
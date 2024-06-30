import React, { useState, useContext } from 'react';
import '../CSS/popup.css';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ThemeContext from "../Context/ThemeContext";

const ChangePasswordPopup = ({ togglePopup }) => {
    //theme management
    let {theme} = useContext(ThemeContext)

    //state management
    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            // Handle password change 
            toast.success('Password changed successfully!');
            togglePopup();
        } else {
            toast.error('Passwords do not match!');
        }
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
                            Confirm Password:
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
import React, { useState } from 'react';
import '../CSS/deletepopup.css';
import { useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const DeleteAccountPopup = ({ togglePopup, deleteAccount }) => {

    const {theme} = useContext(ThemeContext)

    const [confirmationText, setConfirmationText] = useState('')

    const handleInputChange = (e) => {
        setConfirmationText(e.target.value);
    };

    const handleDelete = () => {
        if (confirmationText === 'Yes I want to delete my account') {
            deleteAccount();
        } else {
            toast.error('To delete your account you must type in \'Yes i want to delete my account\'')
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="popup">
                <div className={`popup-inner ${theme}`} >
                    <h2>Are you sure?</h2>
                    <p>Type 'Yes I want to delete my account' to confirm.</p>
                    <input
                        type="text"
                        value={confirmationText}
                        onChange={handleInputChange}
                        placeholder="Type the confirmation text"
                    />
                    <button onClick={handleDelete}>Confirm</button>
                    <button onClick={togglePopup}>Cancel</button>
                </div>
            </div>
        </>
    );
};

export default DeleteAccountPopup;

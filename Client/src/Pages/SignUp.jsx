import '../CSS/signUp.css'
import { useState, useContext } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'
import ThemeContext from "../Context/ThemeContext"
import UserContext from "../Context/UserContext"

const SignUp = () => {

    //context management
    let {theme} = useContext(ThemeContext)
    let {user, setUser} = useContext(UserContext)
    
    //state Management
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    //submit function
    const handleSubmit = (event) => {
        event.preventDefault()

        //check if all the fields are filled
        if(!username ||!email ||!password ||!confirmPassword){
            toast.error('Please fill all the fields')
            return
        }

        //check if password and confirm password are same
        if(password !== confirmPassword){
            toast.error('Passwords do not match')
            return
        }

        //Sending a post request to create a new user
        let newUser = { username, email, password };
        fetch("http://localhost:8000/user/signup", {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newUser)
        })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                toast.error(data.message);
                return;
            } else {
                toast.success(`Welcome ${username}, go to login to get started!`);
                setUsername('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            }
        })
        .catch(error => {
            toast.error("An unexpected error occurred. Please try again.");
            console.error("Error:", error);
        });
    }

    //navugate to login page
    const handleLogIn = () => {
        navigate('/login')
    }

    return (
        <>
            <ToastContainer />
            <div className={`signUpContainer ${theme}`} >
                <div className='buttons'>
                    <button className='buttonSignUp'> Sign Up </button>
                    <button className='buttonLogIn' onClick={handleLogIn}> Log In </button>
                </div>
                <h1 className='h1_signUp' >Sign Up</h1>
                <form onSubmit={handleSubmit} className={`signUpForm ${theme}`}>
                    <input 
                    type="text" 
                    placeholder="Username" 
                    value={username}
                    onChange={(e)=>{setUsername(e.target.value)}}/>

                    <input 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}/>

                    <input 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}/>

                    <input 
                    type="password" 
                    placeholder="Confirm Password" 
                    value={confirmPassword}
                    onChange={(e)=>{setConfirmPassword(e.target.value)}}/>

                    <button 
                    type="submit" 
                    className='submitBtn'>Create a new account</button>
                </form>
            </div>
        </>
    ) 
}

export default SignUp
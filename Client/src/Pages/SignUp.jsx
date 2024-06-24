import '../CSS/signUp.css'
import { useState, useContext } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'
import ThemeContext from "../Context/ThemeContext"

const SignUp = () => {

    //context management
    let {theme} = useContext(ThemeContext)
    
    //state Management
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
        if(password!== confirmPassword){
            toast.error('Passwords do not match')
            return
        }
    }

    //navugate to login page
    const navigate = useNavigate()
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
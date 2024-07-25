import '../../CSS/login.css'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import ThemeContext from "../../Context/ThemeContext"
import { toast, ToastContainer } from'react-toastify'
import'react-toastify/dist/ReactToastify.css'
import UserContext from '../../Context/UserContext'

const Login = () => {

    //context management
    let {theme} = useContext(ThemeContext)
    let {setUser} = useContext(UserContext)

    //state Management
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //navigate to sign up page
    const navigate = useNavigate()
    const handleSignUp = () => {
        navigate('/signUp')
    }

    //submit function
    const handleSubmit = (event) => {
        event.preventDefault()

        //check if all the fields are filled
        if(!email ||!password ){
            toast.error('Please fill all the fields')
            return
        }

        //sending the post request
        let userInfo = {email, password}
        fetch("http://localhost:8000/user/login", {
            method : 'POST',
            headers: {
                "content-type":"application/json",
            },
            body : JSON.stringify(userInfo)
        })
        .then(response => response.json())
        .then(data => {
            if(data.message){
                toast.error(data.message)
            }
            else{
                toast.success(`Welcome back ${data.user.username}`)
                setUser(prev => data.user)
                setEmail('')
                setPassword('')
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            }
        }) 
    }


    return(
        <>
            <ToastContainer />
            <div className={`logInContainer ${theme}`}>
                <div className='buttons'>
                    <button className='btnSignUp' onClick={handleSignUp}> Sign Up </button>
                    <button className='btnLogIn'> Log In </button>
                </div>
                <h1 className='h1_login' >Login</h1>
                <form className={`logInForm ${theme}`} onSubmit={handleSubmit}>
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

                    <button 
                    type="submit" 
                    className='submitBtn'>Log into your account</button>
                </form>
            </div>
        </>
    )
}

export default Login
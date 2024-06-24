import '../CSS/notfound.css'
import { Link } from 'react-router-dom'
import ThemeContext from "../Context/ThemeContext"
import { useContext } from'react'

const NotFound = () => {

    //Context management
    let {theme, setTheme} = useContext(ThemeContext)

    return(
        <div className={`not-found ${theme}`}>
            <h1>404</h1>
            <p>Oops! The page you're looking for doesn't exist.</p>
            <Link to="/">
                <button className="home-button">Go to Home</button>
            </Link>
        </div>
    )
}

export default NotFound
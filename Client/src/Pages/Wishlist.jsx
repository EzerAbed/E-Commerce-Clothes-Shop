import { Link } from "react-router-dom"
import '../CSS/wishlistpage.css'
import { useContext } from "react"
import ThemeContext from "../Context/ThemeContext"

const Wishlist = () => {

    //context management
    let {theme} = useContext(ThemeContext)

    return(
        <div className={`wishPage ${theme}`}>
            <h1>You have wished for nothing yet</h1>
            <Link to="/products">
                <button className="shoppingButton">Go back to store</button>
            </Link>
        </div>
    )
}

export default Wishlist
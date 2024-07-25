import { Link } from "react-router-dom"
import { useContext } from "react"
import ThemeContext from "../../Context/ThemeContext"
import '../../CSS/cart.css'

const Cart = () => {

    //Context management
    let {theme} = useContext(ThemeContext)

    return(
        <div className={`cartContainer ${theme}`}>
            <h1>You bought nothing for the moment go back to shopping</h1>
            <Link to="/products">
                <button className="shoppingButton">Go Shopping</button>
            </Link>
        </div>
    )
}

export default Cart
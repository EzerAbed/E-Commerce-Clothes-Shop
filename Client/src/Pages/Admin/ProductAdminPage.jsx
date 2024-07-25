import { useContext } from "react"
import ThemeContext from "../../Context/ThemeContext"

const ProductAdminPage = () => {

    //context management
    let {theme} = useContext(ThemeContext)

    return(
        <div className={`AdminProductContainer ${theme}`}>
            <h2>Add a Product</h2>
        </div>
    ) 
    
}

export default ProductAdminPage
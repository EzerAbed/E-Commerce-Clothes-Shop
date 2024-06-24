import '../CSS/productCard.css'
import Rating from 'react-rating-stars-component'
import { FaHeart } from 'react-icons/fa'
import ThemeContext from '../Context/ThemeContext'
import { useContext, useState } from'react'

const ProductCard = ({ image, title, price, rating, raters, colors }) => {

    //context management
    let {theme} = useContext(ThemeContext)

    //state management
    const [isLiked, setIsLiked] = useState(false)

    return(
        <div className={`productCardContainer ${theme}`}>
            <div className="heartIcon">
                {isLiked?  <FaHeart onClick={() => setIsLiked(!isLiked)} className='red'/> : <FaHeart onClick={() => setIsLiked(!isLiked)} />}
            </div>
            <img src={image} alt={title} className="productImage" />
            <div className="productInfo">
                <h3 className="productTitle">{title}</h3>
                <Rating 
                value={rating} 
                count={5} 
                size={24} 
                activeColor="#ffd700" 
                edit={false} 
                />
                <p className="raters">({raters} people rated)</p>
                <p className="price">{price} DT</p>
                <p className="colors">{colors} colors</p>
            </div>

        </div>
    )
}

export default ProductCard
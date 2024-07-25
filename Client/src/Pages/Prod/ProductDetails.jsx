import { IoMdHeartEmpty } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import '../../CSS/productDetails.css'
import Rating from 'react-rating-stars-component'
import { useContext, useState } from "react";
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ThemeContext from "../../Context/ThemeContext";

const ProductDetails = () => {

    //theme management 
    let { theme } = useContext(ThemeContext);

    //state management
    const [raiting, setRaiting] = useState(0)
    const [pplRate, setPplRate] = useState(0)
    const [price, setPrice] = useState(0)
    const [size, setSize] = useState('')
    const [quantity, setQuantity] = useState(0)

    //quantity selection handling
    const handleMins = () => {
        if(quantity > 0){
            setQuantity(quantity - 1)
        }
        else{
            toast.error('Quantity cannot be less than 0')
        }
    }

    const handlePlus = () => {
        setQuantity(quantity + 1)
    }



    return(
        <>  
            <ToastContainer />  
            <div className="productDetailsContainer">
                <div className="products">
                    <div className="productRightSide">
                        <div className="productImg">
                            <div className="leftSliderImages">
                                <img src="https://placeholderimage.eu/api/id/1" alt="" />
                                <img src="https://placeholderimage.eu/api/id/1" alt="" />
                            </div>
                            <img src="https://placeholderimage.eu/api/id/1" alt="" className="mainImg"/>
                        </div>
                        <div className="productBTN">
                            <button className="wishBTN"><IoMdHeartEmpty className="pwishIcon"/> <span>Add to Wishlist</span></button>
                            <button className="cartBTN"><FaShoppingCart className="pcartIcon"/> <span>Add to Cart</span></button>
                        </div>
                    </div>

                    <div className="productLeftSide">
                        <div className="pRaiting">
                            <Rating 
                                value={raiting} 
                                count={5} 
                                size={24} 
                                activeColor="#ffd700" 
                                edit={false} 
                            />
                            <span> {pplRate} People rated and reviewed</span>
                        </div>

                        <h2>Product name</h2>
                        <div>#1 best seller</div>

                        <h1> {price} DT </h1>

                        <p>size :</p>

                        <div className="sizeBTN">
                            {['S', 'M', 'L', 'XL'].map((s) => (
                            <button 
                                key={s} 
                                className={size === s ? 'selected' : ''} 
                                onClick={(s) => setSize(s)}
                            >
                                {s}
                            </button>
                            ))}
                        </div>

                        <div className="quantity">
                            <p>Quantity</p>
                            <div className="selectQuantity">
                                <button className="minus" onClick={handleMins}> - </button>
                                <p> {quantity} </p>
                                <button className="plus" onClick={handlePlus}> + </button>
                                </div>
                        </div>
                    </div>
                </div>

                <div className={`feedback ${theme}`}>
                    <div className="pRaiting">
                        <Rating 
                            value={raiting} 
                            count={5} 
                            size={24} 
                            activeColor="#ffd700" 
                            edit={false} 
                        />
                        <span> {pplRate} People rated and reviewed</span>

                        <button className="rateBTN">Rate this product</button>
                    </div>
                    <div className="allReviews">
                        <p>No Reviews for this product yet be the first to give us feedback</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails
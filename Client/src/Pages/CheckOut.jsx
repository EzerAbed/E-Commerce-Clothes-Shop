import '../CSS/checkOut.css'
import { Link } from "react-router-dom"

import ShippingBilling from '../Components/ShippingBilling';
import { useState } from 'react';

const CheckOut =  () => {

    //state management
    const [isChecked, setIsChecked] = useState(true)
    const [totalPrice, setTotalPrice] = useState(0)

    return(
        <div className="checkOutPage">
            <div className='checkRight'>
                <div className='ShippingContainer'>
                    <div className='shippingHeader'>
                        <h3> Shipping Details </h3>
                        <Link to="/checkout/shippingInfo"> Edit </Link>
                    </div>
                    <ShippingBilling
                    name={'Ahmed'}
                    address={'dar Ahmed'}
                    phoneNumber={'0123456789'}/>
                </div>

                <div className='BillingContainer'>
                    <div className='shippingHeader'>
                        <h3> Billing Details </h3>
                        <input type="checkbox" 
                            onClick={() => setIsChecked(!isChecked)} 
                            defaultChecked={isChecked}/><span>Use the same address as the Shipping</span>
                    </div>
                    <ShippingBilling
                    name={'Ahmed'}
                    address={isChecked? 'dar Ahmed' : 'an other address' }
                    phoneNumber={'0123456789'}/>
                </div>

                <div className='deliveryContainer'>
                    <h3>Delivery Type</h3>
                    <div className='deliveryType'>
                        we will see how we will deal with it later
                    </div>
                </div>

                <div className='paymentContainer'>
                    <h3>Payment Method</h3>
                    <form action="">
                        <label htmlFor="">
                            <input type="radio" value='paymentMethode' /> <span>Credit card</span>
                            <input type="radio" value='paymentMethode' /> <span>On delevery</span>
                        </label>

                        <select name="" id="">
                            <option value=""></option>
                        </select>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CheckOut
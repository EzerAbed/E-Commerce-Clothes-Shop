import { FiUser } from "react-icons/fi";
import { PiHouseLight } from "react-icons/pi";
import { BsTelephone } from "react-icons/bs";
import "../CSS/ShippingBilling.css"

const ShippingBilling = ( {name, address, phoneNumber} ) => {
    return(
        <div className='ShippingDetails'>
            <div className='sName'>
                <FiUser />
                <span> Name : {name} </span>
            </div>

            <div className='sAddress'>
                <PiHouseLight />
                <span> Address : {address} </span>
            </div>

            <div className='sPhone'>
                <BsTelephone />
                <span> Phone Number : {phoneNumber} </span>
            </div>
        </div>
    )
}

export default ShippingBilling
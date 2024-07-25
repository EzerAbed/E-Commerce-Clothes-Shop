import {  useState, useContext } from 'react'
import '../../CSS/shippingPage.css'
import ThemeContext from "../../Context/ThemeContext";

const ShippingPage = () => {

    //theme managment
    let {theme} = useContext(ThemeContext)

    //state management
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [addressLine1, setAddressLine1] = useState('')
    const [addressLine2, setAddressLine2] = useState('')
    const [city, setCity] = useState('')
    const [zipCode, setZipCode] = useState('')

    return(
        <div className='shippingContainer'>
            <h3>Shipping Informations</h3>
            <form className={`shippingForm ${theme}`}>
                <label>
                    Fullname :
                    <br />
                    <input type="text"
                    value={fullName}
                    placeholder="Full name" 
                    onChange={(e)=>{setFullName(e.target.value)}}/>
                </label>

                <br />

                <label htmlFor="">
                    Email :
                    <br />
                    <input type="email" 
                    value={email}
                    placeholder="Email"
                    onChange={(e)=>{setEmail(e.target.value)}}/>
                </label>

                <label htmlFor="">
                    Phone :
                    <br />
                    <input type="tel"
                    value={phone} 
                    placeholder="+123456789" 
                    onChange={(e)=>{setPhone(e.target.value)}}/>
                </label>

                <br />

                <label htmlFor="">
                    Address line 1 :
                    <br />
                    <input type="text"
                    value={addressLine1} 
                    placeholder="Address line 1" 
                    onChange={(e)=>{setAddressLine1(e.target.value)}}/>
                </label>

                <br />

                <label htmlFor="">
                    Address line 2 :
                    <br />
                    <input type="text" 
                    value={addressLine2}
                    placeholder="Address line 2" 
                    onChange={(e)=>{setAddressLine2(e.target.value)}}/>
                </label>

                <br />

                <label htmlFor="">
                    City
                    <br />
                    <select name="" id="">
                        <option value="">City 1</option>
                        <option value="">City 2</option>
                        <option value="">City 3</option>
                    </select>
                </label>

                <label htmlFor="">
                    Zip code :
                    <br />
                    <input type="number" 
                    value={zipCode}
                    placeholder="Zip code"
                    onChange={(e)=>{setZipCode(e.target.value)}}/>
                </label>

                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default ShippingPage
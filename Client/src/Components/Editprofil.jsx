import '../CSS/editProfile.css'
import { useContext } from 'react'
import ThemeContext from "../Context/ThemeContext"

const Editprofile = () => {

    //context management
    let {theme} = useContext(ThemeContext)
    return(
        <div className={`editContainer ${theme}`}>
            <form action="">
                <div className='user'>
                    <label htmlFor="username">Username</label>
                    <br />
                    <input type="text" className='username' placeholder='New Username'/>
                </div>

                <div className='genre'>
                    <label htmlFor="gender">Gender</label>
                    <br />
                    <select name="gender" className="gender">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="null">Other</option>
                    </select>
                </div>

                <div className='mail'>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input type="email" className='email' placeholder='New Email'/>
                </div>

                <div className='birthDate'>
                    <label htmlFor="BD">Date Of Birth</label>
                    <br />
                    <input type="date" className='BD' />
                </div>

                <div className='Address'>
                    <label htmlFor="address">Address</label>
                    <br />
                    <input type="text" className='address' placeholder='New Address'/>
                </div>

                <div className='phoneNum'>
                    <label htmlFor="phone">Phone Number</label>
                    <br />
                    <input type="text" className='phone' placeholder='New Phone Number'/>
                </div>

                <div className='social'>
                    <div>
                        <label htmlFor="facebook">Facebook</label>
                        <br />
                        <input type="text" className='facebook' placeholder='New Facebook Url'/>
                    </div>

                    <div>
                        <label htmlFor="instagram">Instagram</label>
                        <br />
                        <input type="text" className='instagram' placeholder='New Instagram Url'/>
                    </div>

                    <div>
                        <label htmlFor="twitter">Twitter</label>
                        <br />
                        <input type="text" className='twitter' placeholder='New Twitter Url'/>
                    </div>
                </div>

                <button type="submit">Save changes</button>
            </form>
        </div>
    )
}

export default Editprofile

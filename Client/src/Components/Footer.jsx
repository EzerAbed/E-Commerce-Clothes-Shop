import '../CSS/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook ,  faInstagram , faTwitter} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return(
        <div className='footerContainer'>
            <div className='about'>
                <img src="https://placeholderimage.eu/api/id/1" alt="Logo" />
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className='socialMedia'>
                <h1>Social Media</h1>

                <div className='links'>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" >
                        <FontAwesomeIcon icon={faFacebook} size="2x" className='footer-icon'/>
                        <span>Facebook</span>
                    </a>
                    <br />
                    <br />
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2x" className='footer-icon' />
                        <span>Instagram</span>
                    </a>
                    <br />
                    <br />
                    <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} size="2x" className='footer-icon'/>
                        <span>Twitter</span>
                    </a>
                </div>
            </div>

            <div className="support">
                <p>10 Rue Saint Augustin 1002 Tunis Tunisia</p>
                <p>+216 12 345 678</p>
                <p>contact@steVetement.com</p>
            </div>
        </div>
    )
}

export default Footer
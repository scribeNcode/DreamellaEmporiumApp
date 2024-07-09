import Phone from './assets/telephoneIcon.svg'
import LocationIcon from './assets/location.svg'
import '../Footer/Footer.css'

function Footer(){
    return(
        <div className="footerContentWrapper">
        <div className="footerAddress">
            <p className='footerTitle contactUsTitle'>CONTACT US</p>
            <div className='phonNumDiv'>
            <object  type="image/svg+xml" data= {Phone}></object>
            <p>08089161036</p>
            </div>
            <div className="address">
                <div className="addressIcon">
                <object  type="image/svg+xml" data= {LocationIcon}></object>

                    <p>Hughes Avenue Alagomeji , Yaba, Lagos,Nigeria 101245</p>                            </div>
            </div>
        </div>
        <div className="footerForm">
            <p className='footerTitle'>SIGN UP FOR DISCOUNTS & UPDATES</p>
            <input type="email" name="" id="" placeholder='Enter your email address' />
            <button>Subscribe</button>
            <div className="footerOthers">
                <p>Return Policy</p>
                <p>About Us</p>
            </div>
        </div>
    </div>
    )
}


export default Footer;
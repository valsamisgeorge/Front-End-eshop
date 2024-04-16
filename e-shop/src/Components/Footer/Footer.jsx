import React from 'react'
import './Footer.css'
import footer_img from '../Assets/logo.png'
import instagram_img from '../Assets/instagram_icon.png'
import Pinterest_img from '../Assets/pintester_icon.png'
import Whatsup_img from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_img} alt="" />
            <p>SHOPPER</p>
        </div>
        
        <ul className="footerlinks">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_img} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={Pinterest_img} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={Whatsup_img} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2023 - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer

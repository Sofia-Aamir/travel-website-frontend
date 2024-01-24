import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-column">
                    <ul>
                        <li><a href="#">MY ACCOUNT</a></li>
                        <li><a href="#">ORDER TRACKING</a></li>
                        <li><a href="#">ABOUT US</a></li>
                        <li><a href="#">CONTACT US</a></li>
                        <li><a href="#">STORE LOCATOR</a></li>
                        <li><a href="#">FAQS</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <ul>
                    <li><a href="#">FAQS</a></li>
                        <li><a href="#">PRIVACY</a></li>
                        <li><a href="#">TERMS & CONDITIONS</a></li>
                        <li><a href="#">RETURN & EXCHANGE POLICY</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <ul>
                        <li>Email: travelandtour@travelandtour.com.pk</li>
                        <li>WhatsApp Chat: +92-345-111-11-27</li>
                        <li>Call: UAN 042-111-000-110</li>
                        <li>Customer services timing</li>
                        <li>Monday-Sunday</li>
                        <li>10:00 am to 6:30 pm</li>
                    </ul>
                    <div className="subscribe-container">
                        <div className="subscribe">
                            <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                            <div className="subscribe-input">
                                <input type="email" placeholder="Enter your email" />
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p style={{color : "black"}}>&copy; Travel and Tour</p>
                <div className="social-links">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                </div>
                <p style={{color : "black"}}>Powered by Travel and Tour</p>
            </div>
        </footer>
    );
}

export default Footer;
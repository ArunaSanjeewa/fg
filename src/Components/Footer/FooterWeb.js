import React from 'react'
import logo from '../../assets/log1.svg';
import fb from '../../assets/fb.svg';
import ims from '../../assets/ims.svg';
import tiv from '../../assets/tiv.svg';
import pin from '../../assets/pin.svg';
function FooterWeb() {
    return (
        <footer class="footer">
            <hr></hr>
            <div class="footer-left col-md-6 col-sm-6">
                <img src={logo} alt="Logo" />
                <p class="about">
                    Explore places around your next adventure
                </p>
                <div class="icons">
                    <a href="#" style={{ padding: 7 }}><img src={fb} alt="Logo" /></a>
                    <a href="#" style={{ padding: 7 }}><img src={ims} alt="Logo" /></a>
                    <a href="#" style={{ padding: 7 }}><img src={tiv} alt="Logo" /></a>
                    <a href="#" style={{ padding: 7 }}><img src={pin} alt="Logo" /></a>

                </div>
            </div>
            <div class="footer-center col-md-4 col-sm-6">
                <div class="footer-pad">
                    <p>Legol</p>
                    <ul class="list-unstyled">
                        <li className='footer-header'>Privacy Policy</li>
                        <li className='footer-header'>Terms and Conditions</li>

                    </ul>
                </div>
            </div>
            <div class="footer-center col-md-4 col-sm-6">
                <div class="footer-pad">
                    <p>Links</p>
                    <ul class="list-unstyled">
                        <li className='footer-header'>Ditto Finda</li>
                        <li className='footer-header'>Download</li>
                        <li className='footer-header'>Features</li>

                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default FooterWeb
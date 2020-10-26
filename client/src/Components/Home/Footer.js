import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './Footer.css';
const Footer = () => {
    return (
        <footer className="page-footer grey darken-4">
            <div className="container">
                <h5 style={{ textAlign: 'center' }} className="Title">Safe Protests</h5>
            </div>
            <br></br>
            <div className="footer-copyright">
                <div className="container center">
                    © 2020 Copyright Text
                </div>
            </div>
        </footer>
    );
};

export default Footer;
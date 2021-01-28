import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <div className="container">
            <div className="footer">
                <p className = "col-sm">
                    &copy;{new Date().getFullYear()} Jonathan Learns Developing | All Rights Reserved |  | Privacy
                </p>
            </div>    
        </div>
    );
}

export default Footer;
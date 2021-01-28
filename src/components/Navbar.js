import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return(
        <nav className="main">
                <ul className="main-nav">
                        <img className = "logo" src="images/logo.jpg" alt="logo"/>
                            <div className = "list">
                                <li>About Me</li>
                                <li>Projects</li>
                                <li>Contact</li> 
                            </div>    
                </ul>
        </nav>
    );
}

export default Navbar;
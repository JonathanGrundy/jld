import React from 'react';
import './Home.css';

const Home = () => {
    return(
        <div>
            <div className = "pic">
                <img className = "profilepic" src="images/frontpage.jpg" alt="profilepic"></img>
            </div>
            <div className = "intro">
                <p>Hello, I'm Jonathan!</p>
                <p>I like making things and meeting new people.</p>
            </div>
            <div className = "devpics">
                <img className = "devpic" src="images/devpic.jpg" alt="devpic"></img>
            </div>
        </div>
    );
}

export default Home;
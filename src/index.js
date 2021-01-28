import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import Home from './components/home/Home';
import Footer from './components/Footer';
import About from './components/about/About';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <About />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();

import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Card from './Card';
import Header from './Header';
import Footer from './Footer';

import './index.css';



ReactDOM.render(<div>
    <Header />
    <Navbar />
    <Card />
    <Footer />            
    </div>, document.getElementById('root'));

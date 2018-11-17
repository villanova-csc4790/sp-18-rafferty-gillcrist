import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Navbar from './Navbar';
import Card from './Card';
import Footer from './Footer';
import Header from './Header';



ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<div>
    <Header />
    <Navbar />
    <Card />
    <Footer />
</div>, document.getElementById('root'));


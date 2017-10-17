import React from 'react';
import ReactDOM from 'react-dom';
import Page from './components/page';
import Header from './components/header';
import Footer from './components/footer';
require('../styles/main.scss');

ReactDOM.render(
    <div className="container">
        <Header />
        <Page />
        <Footer />
    </div>,

document.getElementById("root"));

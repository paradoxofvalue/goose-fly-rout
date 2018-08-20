import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import HomePage from '../home/HomePage';
import AboutPage from '../about/AboutPage';
import Header from './Header';
import Footer from './Footer';

const Layout = () => (
  <div className="base">
    <Header/>
    <div className="container">
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
    </div>
    <Footer/>
  </div>
)




export default Layout;
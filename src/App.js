import React, { Component } from 'react';
import './App.css';
import Layout from './common/Layout';

import { BrowserRouter, Route, Link } from 'react-router-dom';





const App = () => (
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
)
export default App;
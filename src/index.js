// React imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter} from 'react-router-dom';

// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';

// Component imports
import Router from './Components/Router'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <React.StrictMode>
      <Navbar/>
      <Router/>
      <Footer/>
    </React.StrictMode>
  </HashRouter>
);

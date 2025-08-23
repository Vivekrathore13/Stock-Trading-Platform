import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route }  from "react-router-dom";
import './index.css';
import HomePage from './Landing_page/home/HomePage';
import Signup from './Landing_page/signup/Signup';
import Login from './Landing_page/login/Login';
import AboutPage from './Landing_page/about/Aboutpage';
import ProductPage from './Landing_page/products/ProductPage';
import PricingPage from './Landing_page/pricing/Pricingpage';
import SupportPage from './Landing_page/Support/SupportPage';
import Footer from './Landing_page/Footer';
import Navbar from './Landing_page/Navbar';
import NotFound from './Landing_page/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/products' element={<ProductPage />}/>
        <Route path='/pricing' element={<PricingPage />}/>
        <Route path='/support' element={<SupportPage />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
      <Footer/>
 </BrowserRouter>
);

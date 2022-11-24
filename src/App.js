import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';
import Navbar from './components/Navbar/Navbar.jsx';
import Product from './pages/product/product.jsx';
import Introduce from './pages/introdution/introduce.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <div className="sideBar">
                    <Navbar />
                </div>
                <div className="main">
                    <Routes>
                        <Route path="/" element={<Content />}></Route>
                        <Route path="/product" element={<Product />}></Route>
                        <Route path="/introduce" element={<Introduce />}></Route>
                    </Routes>
                </div>
                <div className="Footer">
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;

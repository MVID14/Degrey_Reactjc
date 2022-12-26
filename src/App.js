import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';
import Navbar from './components/Navbar/Navbar.jsx';
import Product from './pages/product/product.jsx';
import Introduce from './pages/introdution/introduce.jsx';
import ProductDetail from './pages/productDetail/ProductDetail.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Store from './pages/store/store';

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
                        <Route path="/productDetail/:id" element={<ProductDetail />}></Route>
                        <Route path="/store" element={<Store />}></Route>
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

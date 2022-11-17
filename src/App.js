import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

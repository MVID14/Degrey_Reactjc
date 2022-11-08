import React from 'react'
import "./navbar.scss"

import img from "../../assets/img/logo.webp"
// import icon 
import {CiSearch} from "react-icons/ci"
import {BsCart2} from "react-icons/bs"


const Navbar = () => {
  return (
    <section className="navBarSection">
        <header className="header container flex">
            <div className="logoDiv">
                <a href="">
                  <img src={img} alt=""  className='logo' />
                </a>
            </div>
            <div className="navBar">
                <ul className='navLinks flex'>
                  <li className='navItem'> <a href="#">Trang chủ</a></li>
                  <li className='navItem'> <a href="#">Sản phẩm</a></li>
                  <li className='navItem'> <a href="#">Store </a></li>
                  <li className='navItem'> <a href="#">Giới thiệu</a></li>
                </ul>
            </div>

            <div className="searchOptions">
              <CiSearch className="icon"/>
              <input type="text" placeholder='Tìm kiếm sản phẩm' />
            </div>

            <div className="cart">
                <a href=""> <BsCart2 className="icon"/> </a>
                <span>Giỏ hàng</span>
            </div>
        </header>
    </section>
    
    
  
)}

export default Navbar
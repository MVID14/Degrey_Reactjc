import React from 'react';
import './navbar.scss';

import img from '../../assets/img/logo.webp';
// import icon
import { CiSearch } from 'react-icons/ci';
import { BsCart2 } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <section className="navBarSection">
            <header className="header container flex">
                <div className="flex-container-header">
                    <div className="logoDiv">
                        <a href="/">
                            <img src={img} alt="" className="logo" />
                        </a>
                    </div>
                    <div className="navBar">
                        <ul className="navLinks flex">
                            <li className="navItem">
                                {' '}
                                <Link to={'/'}>Trang chủ</Link>
                            </li>
                            <li className="navItem">
                                {' '}
                                <Link to={'/product'}>Sản phẩm</Link>
                            </li>
                            <li className="navItem">
                                {' '}
                                <Link to={'/store'}>Store </Link>
                            </li>
                            <li className="navItem">
                                {' '}
                                <Link to={'/introduce'}>Giới thiệu</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="searchOptions">
                        <CiSearch className="icon" />
                        <input type="text" placeholder="Tìm kiếm sản phẩm" />
                    </div>

                    <div className="cart">
                        <a href="/">
                            {' '}
                            <BsCart2 className="icon" />{' '}
                        </a>
                        <span>Giỏ hàng</span>
                    </div>
                </div>
            </header>
        </section>
    );
};

export default Navbar;

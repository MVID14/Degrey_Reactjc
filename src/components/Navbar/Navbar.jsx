import React, { useState } from 'react';
import './navbar.scss';

import img from '../../assets/img/logo.webp';
// import icon
import { CiSearch } from 'react-icons/ci';
import { BsCart2 } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Navbar = () => {
    const [active, setActive] = useState('navBar');

    const ShowNavBar = () => {
        setActive('navBar activeNavbar');
    };
    const removeNave = () => {
        setActive('navBar ');
    };
    return (
        <section className="navBarSection">
            <header className="header container flex">
                <div className="flex-container-header">
                    <div className="logoDiv">
                        <a href="/">
                            <img src={img} alt="" className="logo" />
                        </a>
                    </div>
                    <div className={active}>
                        <ul className="navLinks flex">
                            <li className="navItem">
                                <Link onClick={removeNave} to={'/'}>
                                    Trang chủ
                                </Link>
                            </li>
                            <li className="navItem">
                                <Link onClick={removeNave} to={'/product'}>
                                    Sản phẩm
                                </Link>
                            </li>
                            <li className="navItem">
                                <Link onClick={removeNave} to={'/store'}>
                                    Store{' '}
                                </Link>
                            </li>
                            <li className="navItem">
                                <Link onClick={removeNave} to={'/introduce'}>
                                    Giới thiệu
                                </Link>
                            </li>
                        </ul>
                        <div className="closeNavbar" onClick={removeNave}>
                            <AiOutlineArrowLeft className="icon" />
                        </div>
                    </div>

                    <div className="searchOptions">
                        <CiSearch className="icon" />
                        <input type="text" placeholder="Tìm kiếm sản phẩm" />
                    </div>

                    <div className="cart">
                        <a href="/">
                            <BsCart2 className="icon" />
                            <div className="numberCart">0</div>
                        </a>
                        <span>Giỏ hàng</span>
                    </div>
                    <div className="toggleNavbar" onClick={ShowNavBar}>
                        <AiOutlineMenu className="icon" />
                    </div>
                </div>
            </header>
        </section>
    );
};

export default Navbar;

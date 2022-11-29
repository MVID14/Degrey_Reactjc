import React from 'react';
import './sidebox.scss';

import { HiOutlinePlus } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Sidebox = () => {
    return (
        <div className="wrapperSidebox">
            <div className="group-sidebox">
                <div className="sidebox-title">
                    <h3>Danh mục page</h3>
                </div>
                <div className="side-box-content">
                    <li className="card-body_content">
                        <Link to={'/product'}>san phẩm của degrey</Link>
                        <HiOutlinePlus className="icon" />
                    </li>
                    <li className="card-body_content">
                        <Link to={'/store'}>store | cửa hàng</Link>
                        <HiOutlinePlus className="icon" />
                    </li>
                    <li className="card-body_content">
                        <Link to={'/introdution'}>degrey | about us</Link>
                    </li>
                </div>
            </div>
            <div className="group-sidebox-banner">
                <img
                    src="https://file.hstatic.net/1000281824/file/z3509830781478_ce69b71da0bf0aafd5d6455921bb9d4e_88f55bac63264b9c94bb5795b6a402d4.jpg"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Sidebox;

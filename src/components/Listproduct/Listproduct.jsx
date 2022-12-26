import React from 'react';
import { Link } from 'react-router-dom';

const Listproduct = ({ title, children, link }) => {
    return (
        <div>
            <div className="mainContent ">
                <div className="secTitle" data-aos="fade-right">
                    <h2 className="title">{title}</h2>
                    <a href="/">{link}</a>
                </div>
                <div className="wraplist-products ">
                    <div className="listProduct ">{children}</div>
                </div>
                <div className="buttonDiv">
                    <a href="/">
                        XEM THÊM SẢN PHẨM <b>{title}</b>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Listproduct;

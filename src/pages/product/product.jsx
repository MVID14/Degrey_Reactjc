import React from 'react';
import './product.scss';

//import icon
import { AiOutlineSortAscending } from 'react-icons/ai';
import { GiTriangleTarget } from 'react-icons/gi';
import { BsFunnel } from 'react-icons/bs';
import { FiChevronDown } from 'react-icons/fi';

import Tshirt1 from '../../assets/img/Tshirt1.webp';
import Tshirt2 from '../../assets/img/Tshirt2.webp';
import Tshirt3 from '../../assets/img/Tshirt3.webp';
import Tshirt4 from '../../assets/img/Tshirt4.webp';
import Tshirt5 from '../../assets/img/Tshirt5.webp';
import Tshirt6 from '../../assets/img/Tshirt6.webp';
import balo3 from '../../assets/img/balo3-3.jpeg';
import balo2 from '../../assets/img/balo1-1.jpeg';
import jacket1 from '../../assets/img/jacket1.webp';
import jacket2 from '../../assets/img/jacket2.webp';
import jacket3 from '../../assets/img/jacket3.webp';

//
const Data = [
    {
        id: 1,
        imgSrc: Tshirt1,
        destTitle: 'Áo Jean Degrey Basic - AJB Xanh',
        fees: '$200',
    },
    {
        id: 2,
        imgSrc: balo2,
        destTitle: 'Áo Jean Degrey Basic Đen - AJB Đen',
        fees: '$200',
    },
    {
        id: 3,
        imgSrc: Tshirt3,
        destTitle: 'Áo Khoác Nấm Degrey Navy SS2 - AKND Navy SS2',
        fees: '$200',
    },
    {
        id: 4,
        imgSrc: Tshirt4,
        destTitle: 'Áo Khoác Nấm Degrey ss2 - AKND ss2',
        fees: '$200',
    },
    {
        id: 5,
        imgSrc: balo3,
        destTitle: 'Hoodie Xoài Nhí Nhố - HNN',
        fees: '$200',
    },
    {
        id: 6,
        imgSrc: jacket1,
        destTitle: 'Hoodie Xoài Nhí Nhố - HNN',
        fees: '$200',
    },
    {
        id: 7,
        imgSrc: Tshirt5,
        destTitle: 'Degrey Cardigan D - DCD',
        fees: '$200',
    },
    {
        id: 8,
        imgSrc: jacket1,
        destTitle: 'Hoodie Xoài Nhí Nhố - HNN',
        fees: '$200',
    },
    {
        id: 9,
        imgSrc: Tshirt2,
        destTitle: 'Hoodie Xoài Nhí Nhố - HNN',
        fees: '$200',
    },
    {
        id: 10,
        imgSrc: Tshirt6,
        destTitle: 'Áo Khoác Nấm Degrey ss2 - AKND ss2',
        fees: '$200',
    },
    {
        id: 11,
        imgSrc: Tshirt6,
        destTitle: 'Áo Khoác Nấm Degrey ss2 - AKND ss2',
        fees: '$200',
    },
    {
        id: 12,
        imgSrc: jacket2,
        destTitle: 'Áo Khoác Nấm Degrey ss2 - AKND ss2',
        fees: '$200',
    },
    {
        id: 13,
        imgSrc: jacket3,
        destTitle: 'Áo Khoác Nấm Degrey ss2 - AKND ss2',
        fees: '$200',
    },
    {
        id: 14,
        imgSrc: Tshirt1,
        destTitle: 'Áo Jean Degrey Basic - AJB Xanh',
        fees: '$200',
    },
    {
        id: 15,
        imgSrc: jacket2,
        destTitle: 'Áo Jean Degrey Basic - AJB Xanh',
        fees: '$200',
    },
    {
        id: 16,
        imgSrc: jacket1,
        destTitle: 'Áo Jean Degrey Basic - AJB Xanh',
        fees: '$200',
    },
    {
        id: 17,
        imgSrc: jacket2,
        destTitle: 'Áo Jean Degrey Basic - AJB Xanh',
        fees: '$200',
    },
];

function ProductTshirt(props) {
    return (
        <div className="mainContent ">
            {/* <div className="secTitle">
                <h2 className="title" data-aos="fade-up">
                    {props.title}
                </h2>
                <a href="/">Xem tat ca</a>
            </div> */}
            <div className="wraplist-products ">
                <div className="listProduct ">
                    {Data.map(({ id, imgSrc, destTitle, fees, discound }) => {
                        return (
                            <div key={id} className="singleDestination">
                                <div className="imgDiv">
                                    <img src={imgSrc} alt="" />
                                </div>

                                <div className="cardInfo">
                                    <div className="destTitle">
                                        <span>{destTitle}</span>
                                    </div>

                                    <div className="priceProduct">
                                        <span className="fees">{fees}</span>
                                        <span className="discound">{discound}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="buttonDiv">
                <a href="/">XEM THÊM SẢN PHẨM</a>
            </div>
        </div>
    );
}
const Product = () => {
    return (
        <section>
            <div className="wrapMainContent">
                <div className="product container">
                    <div className="bannerProduct">
                        <div className="productTitle">
                            <span>Trang chủ | </span>
                            <span>Tất cả sản phẩm</span>
                        </div>
                        <div className="imgDiv">
                            <img
                                className="imgBannerProduct"
                                src="https://file.hstatic.net/1000281824/file/z3533341777412_f5edd4a273a3ef5093b6567f1acd7b0f_1d288245ef874e9fab99f73c62539549.jpg"
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="contentProduct">
                        <div className="contentProduct_header">
                            <div className="contentProduct_header_title">
                                <h1>Tất cả sản phẩm</h1>
                                <div className="inputDiv">
                                    <AiOutlineSortAscending className="icon" />
                                    <span className="inputDiv_sort">Sắp xếp</span>
                                    <GiTriangleTarget className="icon" />
                                </div>
                            </div>
                            <div className="contentProduct_header_select">
                                <div className="contentProduct_header_select_title1">
                                    <BsFunnel className="icon" /> <span>Bộ lọc</span>
                                </div>
                                <div className="contentProduct_header_select_content ">
                                    <span>Lọc giá</span> <FiChevronDown className="icon" />
                                </div>
                                <div className="contentProduct_header_select_content ">
                                    <span>Kích thước</span> <FiChevronDown className="icon" />
                                </div>
                                <div className="contentProduct_header_select_content ">
                                    <span>Màu sắc</span> <FiChevronDown className="icon" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <ProductTshirt></ProductTshirt>
                </div>
            </div>
        </section>
    );
};

export default Product;

import React from 'react';
import Slider from 'react-slick';

import './home.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

// const SLIDE = [
//     'https://file.hstatic.net/1000281824/file/bannernoel_6a4f8c68d85a47a893bcfdb100dffffd.jpg',
//     'https://file.hstatic.net/1000281824/file/bannerlayout1_d5a6cde23fe4498d8d29614bd5208d29.jpg',
//     'https://file.hstatic.net/1000281824/file/bannernoel_6a4f8c68d85a47a893bcfdb100dffffd.jpg',
//     'https://file.hstatic.net/1000281824/file/bannerlayout1_d5a6cde23fe4498d8d29614bd5208d29.jpg',
// ];

const SLIDE2 = [
    {
        id: 1,
        url: 'https://file.hstatic.net/1000281824/file/bannernoel_6a4f8c68d85a47a893bcfdb100dffffd.jpg',
    },
    {
        id: 2,
        url: 'https://file.hstatic.net/1000281824/file/bannerlayout1_d5a6cde23fe4498d8d29614bd5208d29.jpg',
    },
    {
        id: 3,
        url: 'https://file.hstatic.net/1000281824/file/bannernoel_6a4f8c68d85a47a893bcfdb100dffffd.jpg',
    },
];

const Home = () => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return <div className={className} style={{ ...style, display: 'none' }} onClick={onClick} />;
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow className={'nextSlide'} />,
    };

    return (
        <section className="home container">
            <Slider {...settings} className="slide">
                {SLIDE2.map((slide) => {
                    return <img key={slide.id} src={slide.url} alt="" />;
                })}
            </Slider>

            <div className="homeContent  ">
                <div className="homeContentTitle">
                    <h3>ĐẶC QUYỀN CHO BẠN HÔM NAY!</h3>
                </div>
                <div className="list-promotion flex">
                    <div className="promotion-item">
                        <div className="promotion__inner">
                            <div className="contentPromotion_inner">
                                <span>Giao hang de xoai lo</span>
                                <p>Freeship cho hoá đơn mua hàng 1 triệu (không áp dụng với các khuyến mãi khác)</p>
                            </div>
                            <div className="coppyCode">
                                <button className="btnCoppyCode">Sao chép mã</button>
                            </div>
                        </div>
                    </div>

                    <div className="promotion-item">
                        <div className="promotion__inner">
                            <div className="contentPromotion_inner">
                                <span>Degrey giao hoả tốc tại Sài Gòn</span>
                                <p>Xoài bếu tặng ngay mã giảm giá phí ship. Áp dụng cho hoá đơn 500.000 VNĐ</p>
                            </div>
                            <div className="coppyCode">
                                <button className="btnCoppyCode">Sao chép mã</button>
                            </div>
                        </div>
                    </div>

                    <div className="promotion-item">
                        <div className="promotion__inner">
                            <div className="contentPromotion_inner">
                                <span>Tặng 125.000đ</span>
                                <p>Áp dụng đặc biệt cho đơn hàng từ 2,5 triệu đồng.</p>
                            </div>
                            <div className="coppyCode">
                                <button className="btnCoppyCode">Sao chép mã</button>
                            </div>
                        </div>
                    </div>

                    <div className="promotion-item">
                        <div className="promotion__inner">
                            <div className="contentPromotion_inner">
                                <span>Khuyến mãi đến 10%</span>
                                <p>Mã giảm 10% cho hoá đơn mua hàng trên 5 triệu đồng</p>
                            </div>
                            <div className="coppyCode">
                                <button className="btnCoppyCode">Sao chép mã</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;

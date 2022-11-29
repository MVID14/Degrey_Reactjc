import React from 'react';
import './home.scss';
// import images from '../../../assets/img/slide.webp';
import images1 from '../../../assets/img/slide1.webp';
import images2 from '../../../assets/img/slide2.webp';

import { GrFormPrevious } from 'react-icons/gr';
import { GrFormNext } from 'react-icons/gr';

const Home = () => {
    return (
        <section className="home container">
            <div className="slide">
                <GrFormPrevious className="icon-left" />
                <ul className="slider-dot">
                    <li className="slider-dot-item active"></li>
                    <li className="slider-dot-item"></li>
                </ul>
                <div className="myslide">
                    <div className="slideItem">
                        <img src={images1} alt="" />
                    </div>
                    <div className="slideItem">
                        <img src={images2} alt="" />
                    </div>
                </div>
                <GrFormNext className="icon-right" />
            </div>
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

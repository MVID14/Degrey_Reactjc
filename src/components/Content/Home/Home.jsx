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
    // const [currentSlide, setCurrentSlide] = useState(0);
    // const plusSlide = () => {
    //     if (currentSlide <= 2) {
    //         setCurrentSlide(currentSlide + 1);
    //     }
    // };
    // const truSlide = () => {
    //     if (currentSlide > 0) {
    //         return setCurrentSlide(currentSlide - 1);
    //     }
    // };
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
            {/* <div className="slide">
                <img src={SLIDE[currentSlide]} alt="" className="imgSlide" />
                <div className="preSlide" onClick={truSlide}>
                    <GrFormPrevious />
                </div>
                <div className="nextSlide" onClick={plusSlide}>
                    <GrFormNext />
                </div>
            </div> */}
            <div className="homeContent  ">
                <div className="homeContentTitle">
                    <h3>?????C QUY???N CHO B???N H??M NAY!</h3>
                </div>
                <div className="list-promotion flex">
                    <div className="promotion-item">
                        <div className="promotion__inner">
                            <div className="contentPromotion_inner">
                                <span>Giao hang de xoai lo</span>
                                <p>Freeship cho ho?? ????n mua h??ng 1 tri???u (kh??ng ??p d???ng v???i c??c khuy???n m??i kh??c)</p>
                            </div>
                            <div className="coppyCode">
                                <button className="btnCoppyCode">Sao ch??p m??</button>
                            </div>
                        </div>
                    </div>

                    <div className="promotion-item">
                        <div className="promotion__inner">
                            <div className="contentPromotion_inner">
                                <span>Degrey giao ho??? t???c t???i S??i G??n</span>
                                <p>Xo??i b???u t???ng ngay m?? gi???m gi?? ph?? ship. ??p d???ng cho ho?? ????n 500.000 VN??</p>
                            </div>
                            <div className="coppyCode">
                                <button className="btnCoppyCode">Sao ch??p m??</button>
                            </div>
                        </div>
                    </div>

                    <div className="promotion-item">
                        <div className="promotion__inner">
                            <div className="contentPromotion_inner">
                                <span>T???ng 125.000??</span>
                                <p>??p d???ng ?????c bi???t cho ????n h??ng t??? 2,5 tri???u ?????ng.</p>
                            </div>
                            <div className="coppyCode">
                                <button className="btnCoppyCode">Sao ch??p m??</button>
                            </div>
                        </div>
                    </div>

                    <div className="promotion-item">
                        <div className="promotion__inner">
                            <div className="contentPromotion_inner">
                                <span>Khuy???n m??i ?????n 10%</span>
                                <p>M?? gi???m 10% cho ho?? ????n mua h??ng tr??n 5 tri???u ?????ng</p>
                            </div>
                            <div className="coppyCode">
                                <button className="btnCoppyCode">Sao ch??p m??</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;

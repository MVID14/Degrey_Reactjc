import React from 'react';
import { Link } from 'react-router-dom';
import Sidebox from '../../components/Sidebox/Sidebox';
import './introduce.scss';

const data = [
    {
        id: 1,
        title: 'Degrey x Linh Ngọc Đàm ',
        img: 'https://i.ytimg.com/vi_webp/MY7F09rjQxE/sddefault.webp',
        desc: '',
    },
    {
        id: 2,
        title: 'Degrey – Không chỉ là quần áo (Degrey x Koo)',
        img: 'https://i.ytimg.com/vi_webp/wnZWXRpGcZ4/maxresdefault.webp',
        desc: 'Không cần phải chạy theo xu hướng thị trường, thị hiếu của số đông. Cứ sáng tạo và tự do theo cách của mình muốn. Đó cũng chính là thông điệp của Koo và Degrey muốn gửi gắm cho các bạn thông qua sự kết hợp này.....',
    },
    {
        id: 3,
        title: 'Degrey - Sinh nhật vui vẻ Đạt G (Degrey x Đạt G)',
        img: 'https://i.ytimg.com/vi_webp/rO92dxA-Ftc/maxresdefault.webp',
        desc: 'Đánh dấu sinh nhật Đạt G, Degrey muốn tạo ra bst để dành cho các fan thân thương yêu mến Đạt G trong dịp đặc biệt này. Cũng là lời cảm ơn đặc biệt mà Degrey muốn gửi đến Đạt G và các bạn. Các bạn đã ủng hộ và chung vui cùng Đạt G....',
    },
    {
        id: 4,
        title: 'Degrey – Foudation wind Jacket (Degrey x Dossin) ',
        img: 'https://i.ytimg.com/vi_webp/jlLd9unvGss/sddefault.webp',
        desc: 'Sản phẩm được lấy cảm hứng từ album "Foundation Vol. 4" của rapper tài năng Basick, quán quân cuộc thi “Show Me The Money" mùa 4."Chúng ta luôn phải tuân theo quy luật của cuộc sống.Nhưng với thời trang thì KHÔNG.Chúng tôi thoải mái làm những điều khác biệt.VÌ VẬY CHÚNG TÔI TÌM ĐẾN NHAU".......',
    },
];

const IntroductionList = (props) => {
    return (
        <>
            <div className="contentParaSecondList">
                <div className="contentParaSecondItem">
                    <div className="contentParaSecond__title">
                        <span>{props.title}</span>
                    </div>
                    <div className="contentParaSecond__video">
                        <img src={props.img} alt="" />
                    </div>
                    <div className="contentParaSecond__desc">
                        <p>{props.desc}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

const Introduce = () => {
    return (
        <section>
            <div className="wrapper">
                <div className="container">
                    <div className="containerContent">
                        <div className="storeTitle">
                            <Link to={'/'}>Trang chủ | </Link>
                            <span>Giới thiệu</span>
                        </div>
                        <div className="row">
                            <div className="col-md-9">
                                <div className="titleDiv">
                                    <h1 className="introdutionTitle">Giới thiệu</h1>
                                </div>
                                <div className="contentDiv">
                                    <div className="contentPara">
                                        <div className="contentParagrap">
                                            <p>
                                                Cái tên Degrey được tạo ra rất ngẫu hứng, xuất phát từ{' '}
                                                <i>
                                                    “Chuỗi ngày u buồn về sự nghiệp, tương lai trong quá khứ của chính
                                                    mình”
                                                </i>{' '}
                                                – theo lời chia sẻ của Degrey’s founder. Là một local brand mang khuynh
                                                hướng Á Đông, kết hợp giữa hai yếu tố truyền thống và hiện đại, Degrey
                                                luôn cố gắng mang đến những thông điệp văn hoá ý nghĩa qua từng đường
                                                nét thiết kế. Tiếp theo đó sự sang trọng, thanh lịch cũng là những yếu
                                                tố tạo nên một Degrey đầy sức hút, sự lựa chọn hoàn hảo dành cho các bạn
                                                trẻ yêu thích phong cách hoài cổ nhưng vẫn muốn thoát xác trong những bộ
                                                cánh mới mẻ hơn.
                                            </p>
                                            <p>
                                                Thành lập từ năm 2016 và được nhiều bạn trẻ biết đến qua những mẫu áo
                                                truyền thông, Degrey hiện đang từng bước khẳng định vị trí của mình
                                                trong bản đồ streetwear Việt Nam.{' '}
                                            </p>
                                            <p>
                                                Hiện nay, Degrey vẫn đang tiếp tục hoàn thiện và phát triển về sản phẩm
                                                cũng như mở rộng nhiều phong cách thời trang.
                                            </p>
                                            <p>
                                                Degrey xin gửi lời cảm ơn đến tất cả những khách hàng đã, đang và sẽ ủng
                                                hộ Degrey cũng như Xoài thời gian qua và sắp tới. Cảm ơn rất nhiều !
                                            </p>
                                        </div>
                                        <img src="https://i.ytimg.com/vi_webp/H7vcKCjX-IE/sddefault.webp" alt="" />
                                    </div>

                                    <div className="contentParaSecond">
                                        <h3>Một số dự án tham gia: </h3>
                                        <div className="introducList">
                                            {data.map((item) => {
                                                return (
                                                    <IntroductionList
                                                        title={item.title}
                                                        img={item.img}
                                                        desc={item.desc}
                                                    ></IntroductionList>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    <div className="contentLink"></div>
                                    <div className="contentIntroductionBuy"></div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <Sidebox></Sidebox>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduce;

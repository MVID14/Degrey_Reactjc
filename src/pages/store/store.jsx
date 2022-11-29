import React from 'react';
import './store.scss';

//
import { CiLocationOn } from 'react-icons/ci';
import Sidebox from '../../components/Sidebox/Sidebox';
import { Link } from 'react-router-dom';

const addressData = [
    {
        id: 1,
        address: '43 Huỳnh Văn Bánh P.17 Quận Phú Nhuận - SÀI GÒN',
        imgL: 'https://channel.mediacdn.vn/2020/3/28/photo-5-15853728034991583019762.jpg',
    },
    {
        id: 2,
        address: '43 Huỳnh Văn Bánh P.17 Quận Phú Nhuận - SÀI GÒN',
        imgL: 'https://storage.googleapis.com/ops-shopee-files-live/live/shopee-blog/2020/06/shop-quan-ao-degrey.jpg',
    },
    {
        id: 3,
        address: '43 Huỳnh Văn Bánh P.17 Quận Phú Nhuận - SÀI GÒN',
        imgL: 'https://file.hstatic.net/1000281824/file/img_6314_65bbafd476ff43eebece46f09309ba99_large.jpg',
    },
    {
        id: 4,
        address: '43 Huỳnh Văn Bánh P.17 Quận Phú Nhuận - SÀI GÒN',
        imgL: 'https://file.hstatic.net/1000281824/file/dl3_7844ce95e2334d70bb508b1c029711b7_large.jpg',
    },
];

const StoreAddress = ({ address, imgL }) => {
    return (
        <>
            <div className="address">
                <CiLocationOn className="icon" />
                <h1 className="titleAddress">{address}</h1>
            </div>
            <div className="imgStore">
                <div className="imgL">
                    <img src={imgL} alt="" />
                </div>
            </div>
        </>
    );
};

const Store = () => {
    return (
        <section>
            <div className="wrapper">
                <div className="container">
                    <div className="containerContent">
                        <div className="storeTitle">
                            <Link to={'/'}>Trang chủ | </Link>
                            <span>Tất cả sản phẩm</span>
                        </div>
                        <div className="row">
                            <div className="col-md-9">
                                <div className="titleDiv">
                                    <h1>HỆ THỐNG CỬA HÀNG DEGREY</h1>
                                </div>
                                <div className="rowContent">
                                    <div className="videoDiv">
                                        <img
                                            src="https://i.ytimg.com/vi/kQ_pyG0jatk/sddefault.jpg?sqp=-oaymwEmCIAFEOAD8quKqQMa8AEB-AGUA4AC0AWKAgwIABABGGIgYihiMA8=&rs=AOn4CLD919rKX86nRGQvAWHI9HjOR5vtSg"
                                            alt=""
                                        />
                                    </div>

                                    <div className="addressCOntent">
                                        {addressData.map((item) => {
                                            return (
                                                <StoreAddress address={item.address} imgL={item.imgL}></StoreAddress>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <Sidebox></Sidebox>
                            </div>
                        </div>
                    </div>

                    <div className="contact">
                        <div className="contactTitle">
                            <h5>
                                Hotline: <a href="tel:0336311117">0336311117</a>
                            </h5>
                        </div>
                        <div className="contactContent">
                            <ul className="contactList">
                                <li className="contactItem">
                                    <img
                                        src="https://file.hstatic.net/1000281824/file/fb_15215b561f504b139fdb35856eaa7290_icon.png"
                                        alt=""
                                    />
                                    <a href="/"> https://www.facebook.com/degrey.saigon</a>
                                </li>
                                <li className="contactItem">
                                    <img
                                        src="https://file.hstatic.net/1000281824/file/ig_d1b18ea170384347808d4e782daac98d_icon.png"
                                        alt=""
                                    />
                                    <a href="/"> https://www.instagram.com/degrey.saigon/</a>
                                </li>
                                <li className="contactItem">
                                    <img
                                        src="https://file.hstatic.net/1000281824/file/tiktok_eddd53a7150d4de489a9ccf8dc5bf5d0_icon.png"
                                        alt=""
                                    />

                                    <a href="/">https://www.tiktok.com/@degrey.vn</a>
                                </li>
                                <li className="contactItem">
                                    <img
                                        src="https://file.hstatic.net/1000281824/file/youtube_f86089dee31340fe8b215049d4a8d401_icon.png"
                                        alt=""
                                    />

                                    <a href="/">https://www.youtube.com/degreyvn</a>
                                </li>
                                <li className="contactItem">
                                    <img
                                        src="https://file.hstatic.net/1000281824/file/sp1_71c31a6c127340f5ac8cf33346736e3b_icon.png"
                                        alt=""
                                    />

                                    <a href="/">https://shopee.vn/degrey.vn</a>
                                </li>
                                <li className="contactItem">
                                    <img
                                        src="https://file.hstatic.net/1000281824/file/lzd_48cf94502c9e448089c717b548e2997a_icon.png"
                                        alt=""
                                    />

                                    <a href="/">https://www.lazada.vn/shop/degrey-vietnam/</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Store;

import React from 'react';
import { Link } from 'react-router-dom';
import './productdetail.scss';
// import Product from '../product/product';
// import ProductItem from '../../components/ProductItem/ProductItem';

import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <section className="productDetail">
            <div className="container">
                <div className="productTitle">
                    <Link to={'/'}>Trang chủ | </Link>
                    <span>balo</span>
                </div>
                <div>
                    <div className="imgDiv">
                        <div className="imgDivleft"></div>
                        <div className="imgDivright"></div>
                        <div>icon</div>
                    </div>
                    <div className="productInfo"></div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;

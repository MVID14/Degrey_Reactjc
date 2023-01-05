import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, imgSrc, destTitle, fees, discound }) => {
    return (
        <>
            <Link to={`/productDetail/${id}`}>
                <div key={id} className="singleDestination">
                    <div className="imgDiv" data-aos="zoom-in" data-aos-duration="1000">
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
            </Link>
        </>
    );
};

export default ProductItem;

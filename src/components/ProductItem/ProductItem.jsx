import React from 'react';

const ProductItem = ({ id, imgSrc, destTitle, fees, discound }) => {
    return (
        <div>
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
        </div>
    );
};

export default ProductItem;

import React from 'react'
import "./home.scss"
import img from "../../assets/img/slide.webp"

const Home = () => {
  return (
      <section className='home container'>
        <div className='slide'>
          <img src={img} alt="" />
        </div>
        <div className="homeContent  ">
          <div className="homeContentTitle">
            <h4>ĐẶC QUYỀN CHO BẠN HÔM NAY!</h4>
          </div>
          <div className="list-promotion flex">
            <div className="promotion-item">
              <div className="promotion__inner">
                  <div className="contentPromotion_inner">
                    <span>Giao hang de xoai lo</span>
                    <p>Freeship cho hoá đơn mua hàng 1 triệu (không áp dụng với các khuyến mãi khác)</p>
                  </div>
                  <button className="coppyCode">Discound</button>
              </div>
            </div>

           
          </div>
        </div>
      </section>
  )
}

export default Home
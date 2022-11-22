import React from 'react'
import "./footer.scss"

import {ImFacebook} from "react-icons/im"
import {AiOutlineInstagram} from "react-icons/ai"
import {CiTwitter} from "react-icons/ci"
import {AiOutlineYoutube} from "react-icons/ai"
import {AiOutlineGooglePlus} from "react-icons/ai"
import {FiPhoneCall} from "react-icons/fi"



//
import img from "../../assets/img/logo_accept.webp"


const Footer = () => {
  return (
      <section className='footerSection'>
        <footer className='mainFooter'>
            <div className="footer container">
              <div className="footerContent grid ">
                <div className="footerContent_left ">
                  <div className="footerContent_left_title">
                      <h3>Về DEGREY</h3>
                  </div>
                  <div className="footerContent_left_content flex">
                      <div className="footerContent_left_content_left">
                        <p>Cái tên Degrey được tạo ra rất ngẫu hứng, xuất phát từ “Chuỗi ngày u buồn về sự nghiệp, tương lai trong quá khứ của chính mình” – theo lời chia sẻ của Degrey’s founder.</p>
                        <img src={img} alt="" />
                      </div>
                      <div className="footerContent_left_content_right">
                        <h6>Địa chỉ</h6>
                        <div className="footerContent_left_content_right_address">
                          <h6>-Sài Gòn:</h6>
                          <p>43 Huỳnh Văn Bánh P.17 Q.Phú Nhuận1041 Luỹ Bán Bích P.Tân Thành Q.Tân Phú</p>
                          <p>26 Lý Tự Trọng Q.1 - The New Playground</p>
                          <h6>-Đà Lạt:</h6>
                          <p>11 Khu Hoà Bình P.1</p>
                          <span><b>Điện thoại:</b></span>
                          <span>056 57 58 488 <br /></span>
                          <span><b>Email:</b></span>
                          <span>minhdz142001@gmail.com</span>
                        </div>
                      </div>
                  </div>
                </div>

                <div className="footerContent_right flex ">
                  <div className="footerContent_three flex  ">
                      <div className="support_customer_title">
                         <h3>Hỗ trợ khách hàng</h3>
                        <div className="supportFooter__inner">
                          <ul>
                            <li><a href="/">Hệ thống cửa hàng</a></li>
                            <li><a href="/">Hướng dẫn đặt hàng</a></li>
                            <li><a href="/">Chính sách và quy định</a></li>
                            <li><a href="/">Chính sách bảo mật</a></li>
                            <li><a href="/">Thông tin sở hữu</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  <div className="footerContent_three flex">
                      <div className="customer_care_title">
                        <h3>Chăm sóc khách hàng</h3>
                        <div className="customerCareFooter__inner">
                          <div className="customerCareFooter__inner__contact flex">
                                {/* <div className="customerCareFooter__inner__contact_icon">
                                </div> */}
                                <FiPhoneCall className="icon"/>
                                <div className="customerCareFooter__inner__contact_content">
                                  <p>0565758488</p>
                                  <u typeof='email'>minhdz142001@gmail.com</u>
                                </div>
                          </div>                
                        </div>
                        <div className="customerCareFooter__inner__social">
                            <div className="customerCareFooter__inner__social_title">
                              <p>Follow Us</p>
                            </div>
                            <ImFacebook className='icon'/>
                            <AiOutlineInstagram className='icon'/>
                            <CiTwitter className='icon'/>
                            <AiOutlineGooglePlus className='icon'/>
                            <AiOutlineYoutube className='icon'/>
                        </div>
                        </div>
                  </div>
                </div>
              </div>
            </div>
        </footer>
        <div className="footerFooter container flex">
          <p>Copyright © 2022 
          <a href="https://degrey.vn/?fbclid=IwAR1DMRsHT1TyEnlxmqd0_N6Aoku2PbU-XlIWRIVOXPQcLWOztWdirePz9Bs">DEGREY VIETNAM.</a>
          <a href="/">MVD</a>
          </p>
        </div>
      </section>
  )
}

export default Footer
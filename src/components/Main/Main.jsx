import React from 'react'
import "./main.scss"

// import img balo
import balo1 from '../../assets/img/balo1-1.jpeg'
import balo2 from '../../assets/img/balo2-2.webp'
import balo3 from '../../assets/img/balo3-3.jpeg'
import balo4 from '../../assets/img/balo4-4.webp'
import balo5 from '../../assets/img/balo5-5.jpeg'
// import img jacket
import jacket1 from '../../assets/img/jacket1.webp'
import jacket2 from '../../assets/img/jacket2.webp'
import jacket3 from '../../assets/img/jacket3.webp'
import jacket4 from '../../assets/img/jacket4.webp'
import jacket5 from '../../assets/img/jacket5.webp'
// import img Tshirt
import Tshirt1 from '../../assets/img/Tshirt1.webp'
import Tshirt2 from '../../assets/img/Tshirt2.webp'
import Tshirt3 from '../../assets/img/Tshirt3.webp'
import Tshirt4 from '../../assets/img/Tshirt4.webp'
import Tshirt5 from '../../assets/img/Tshirt5.webp'
import Tshirt6 from '../../assets/img/Tshirt6.webp'


const Data = [
  {
    id: 1,
    imgSrc: balo1,
    destTitle: "TieDye BackPack Dark Green - TDBP dark green",
    fees: '$700',
  },
  {
    id: 2,
    imgSrc: balo2,
    destTitle: "TieDye BackPack Dark Green - TDBP dark green",
    fees: '$500',
  },
  {
    id: 3,
    imgSrc: balo3,
    destTitle: "Balo Đám Mây Degrey - BDM",
    fees: '$300',
  },
  {
    id: 4,
    imgSrc: balo4,
    destTitle: "Degrey Tiedye Backpack - DTDB",
    fees: '$600',
  },
  {
    id: 5,
    imgSrc: balo4,
    destTitle: "Degrey Galaxy Backpack - DGB",
    fees: '$100',
    discound: '200$'
  },
  {
    id: 6,
    imgSrc: balo1,
    destTitle: "TieDye BackPack Dark Green - TDBP dark green",
    fees: '$500',
  },

  {
    id: 5,
    imgSrc: balo3,
    destTitle: "Degrey Galaxy Backpack - DGB",
    fees: '$900',
  },

  {
    id: 5,
    imgSrc: balo5,
    destTitle: "Degrey Galaxy Backpack - DGB",
    fees: '$700',
  },

  {
    id: 5,
    imgSrc: balo2,
    destTitle: "Degrey Galaxy Backpack - DGB",
    fees: '$700',
  },

  {
    id: 5,
    imgSrc: balo4,
    destTitle: "Degrey Galaxy Backpack - DGB",
    fees: '$700',
  },

]

const Jacket = [
  {
    id: 1,
    imgSrc: jacket1,
    destTitle: "Áo Jean Degrey Basic - AJB Xanh",
    fees: '$200',
  },
  {
    id: 2,
    imgSrc: jacket2,
    destTitle: "Áo Jean Degrey Basic Đen - AJB Đen",
    fees: '$200',
  },
  {
    id: 3,
    imgSrc: jacket3,
    destTitle: "Áo Khoác Nấm Degrey Navy SS2 - AKND Navy SS2",
    fees: '$200',
  },
  {
    id: 4,
    imgSrc: jacket4,
    destTitle: "Áo Khoác Nấm Degrey ss2 - AKND ss2",
    fees: '$200',
  },
  {
    id: 5,
    imgSrc: jacket1,
    destTitle: "Hoodie Xoài Nhí Nhố - HNN",
    fees: '$200',
  },
  {
    id: 6,
    imgSrc: jacket5,
    destTitle: "Hoodie Xoài Nhí Nhố - HNN",
    fees: '$200',
  },
  {
    id: 7,
    imgSrc: jacket2,
    destTitle: "Degrey Cardigan D - DCD",
    fees: '$200',
  },
  {
    id: 8,
    imgSrc: jacket5,
    destTitle: "Hoodie Xoài Nhí Nhố - HNN",
    fees: '$200',
  },
  {
    id: 9,
    imgSrc: jacket4,
    destTitle: "Hoodie Xoài Nhí Nhố - HNN",
    fees: '$200',
  },
  {
    id: 4,
    imgSrc: jacket2,
    destTitle: "Áo Khoác Nấm Degrey ss2 - AKND ss2",
    fees: '$200',
  },
]

const Tshirt = [
  {
    id: 1,
    imgSrc: Tshirt1,
    destTitle: "Áo Jean Degrey Basic - AJB Xanh",
    fees: '$200',
  },
  {
    id: 2,
    imgSrc: Tshirt2,
    destTitle: "Áo Jean Degrey Basic Đen - AJB Đen",
    fees: '$200',
  },
  {
    id: 3,
    imgSrc: Tshirt3,
    destTitle: "Áo Khoác Nấm Degrey Navy SS2 - AKND Navy SS2",
    fees: '$200',
  },
  {
    id: 4,
    imgSrc: Tshirt4,
    destTitle: "Áo Khoác Nấm Degrey ss2 - AKND ss2",
    fees: '$200',
  },
  {
    id: 5,
    imgSrc: Tshirt5,
    destTitle: "Hoodie Xoài Nhí Nhố - HNN",
    fees: '$200',
  },
  {
    id: 6,
    imgSrc: Tshirt6,
    destTitle: "Hoodie Xoài Nhí Nhố - HNN",
    fees: '$200',
  },
  {
    id: 7,
    imgSrc: Tshirt5,
    destTitle: "Degrey Cardigan D - DCD",
    fees: '$200',
  },
  {
    id: 8,
    imgSrc: Tshirt3,
    destTitle: "Hoodie Xoài Nhí Nhố - HNN",
    fees: '$200',
  },
  {
    id: 9,
    imgSrc: Tshirt2,
    destTitle: "Hoodie Xoài Nhí Nhố - HNN",
    fees: '$200',
  },
  {
    id: 10,
    imgSrc: Tshirt1,
    destTitle: "Áo Khoác Nấm Degrey ss2 - AKND ss2",
    fees: '$200',
  },
]

const Main = () => {
  return (
    <section className="main container">
      <div className="mainContent ">
        <div className="secTitle">
          <h2 className="title" data-aos="fade-up">BACKPACKS | BALO</h2>

          <a href="">Xem tat ca</a>
        </div>

        <div className="wraplist-products ">
          <div className="listProduct ">
              {
                Data.map(({ id, imgSrc, destTitle, fees,discound }) => {
                  return (
                    <div key={id} className="singleDestination">
                      <div className="imgDiv">
                        <img src={imgSrc} alt="" />
                      </div>

                      <div className="cardInfo">
                        <div className="destTitle">
                          <span>{destTitle}</span>
                        </div>

                        <div className="priceProduct">
                          <span className='fees'>{fees}</span>
                          <span className='discound'>{discound}</span>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
          </div>
        </div>
        
        <div className="buttonDiv">
          <a href="">XEM THÊM SẢN PHẨM <b>BLACKPACKS | BALO</b></a>
        </div>
      </div>

      {/* Jacket  */}
      <div className="mainContent ">
        <div className="secTitle">
          <h2 className="title" data-aos="fade-up">ÁO KHOÁC | JACKETS</h2>

          <a href="">Xem tat ca</a>
        </div>

        <div className="wraplist-products ">
          <div className="listProduct ">
              {
                Jacket.map(({ id, imgSrc, destTitle, fees,discound }) => {
                  return (
                    <div key={id} className="singleDestination">
                      <div className="imgDiv">
                        <img src={imgSrc} alt="" />
                      </div>

                      <div className="cardInfo">
                        <div className="destTitle">
                          <span>{destTitle}</span>
                        </div>

                        <div className="priceProduct">
                          <span className='fees'>{fees}</span>
                          <span className='discound'>{discound}</span>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
          </div>
        </div>
        
        <div className="buttonDiv">
          <a href="">XEM THÊM SẢN PHẨM <b> ÁO KHOÁC | JACKETS</b></a>
        </div>
      </div>
    {/* Tshirt    */}
    <div className="mainContent ">
        <div className="secTitle">
          <h2 className="title" data-aos="fade-up">ÁO KHOÁC | JACKETS</h2>
          <a href="">Xem tat ca</a>
        </div>
        <div className="wraplist-products ">
          <div className="listProduct ">
              {
                Tshirt.map(({ id, imgSrc, destTitle, fees,discound }) => {
                  return (
                    <div key={id} className="singleDestination">
                      <div className="imgDiv">
                        <img src={imgSrc} alt="" />
                      </div>

                      <div className="cardInfo">
                        <div className="destTitle">
                          <span>{destTitle}</span>
                        </div>

                        <div className="priceProduct">
                          <span className='fees'>{fees}</span>
                          <span className='discound'>{discound}</span>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
          </div>
        </div>
        <div className="buttonDiv">
          <a href="">XEM THÊM SẢN PHẨM <b> ÁO KHOÁC | JACKETS</b></a>
        </div>
      </div>
    </section>
  )
}

export default Main
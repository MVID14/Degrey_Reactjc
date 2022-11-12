import React from 'react'
import "./main.scss"

// import img 
import balo1 from '../../assets/img/balo1.jpeg'
import balo2 from '../../assets/img/balo2.webp'
import balo3 from '../../assets/img/balo3.webp'
import balo4 from '../../assets/img/balo4.webp'
import balo5 from '../../assets/img/balo5.webp'

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
    imgSrc: balo5,
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
        
      </div>
    </section>
  )
}

export default Main
import React from 'react'
import {AiFillClockCircle} from 'react-icons/ai'
import {TbSwimming} from 'react-icons/tb'

import img1 from "../assets/kids.jfif"
import img2 from "../assets/boy.jpg"
import img3 from "../assets/pool.jpg"


const Offers = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Anfänger - Schwimmkurse",
    day: "15. Januar - 05. März",
    time: "15551515",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Folge - Schwimmkurs",
    day: "15. Januar - 05. März",
    time: "17:00-17:45",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Bronze, Silber - und Goldkurs",
    day: "15. Januar - 05. März",
    time: "17:00-17:45",
  }
]

const Offer = () => {
  return (
    <section className='offer container section'>
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">
            Trainingseinheiten
          </h2>
          <p>Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Doloribus inventore corrupti amet laboriosam
            maxime at tempora iusto impedit nulla dolore!
          </p>
        </div>

        <div className="mainContent">
          {
            Offers.map(({id, imgSrc, destTitle, day, time}) => {
              return (
                <div key={id} className="singleOffer">
                  <div className="destImage">
                    <img src={imgSrc} alt="pic"/>
                    <span className="discount">
                      {destTitle}
                    </span>
                  </div>
                  <div className="offerBody">
                    <div className='price flex'>
                      <h4>
                        {id} Trainingseinheiten
                      </h4>
                      <span className="status">
                        {day}
                      </span>
                    </div>
                    <div className="amenities flex">
                      <div className="singleAmenity flex">
                        <TbSwimming className="icon"/>
                        <small>{day}</small>
                      </div>
                      <div className="singleAmenity flex">
                        <AiFillClockCircle className="icon"/>
                        <small>Sonntag</small>
                      </div>
                      <div className="singleAmenity flex">
                        <AiFillClockCircle className="icon"/>
                        <small>{time}</small>
                      </div>
                    </div>
                    <button className='btn flex'>
                      Kurs buchen
                    </button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Offer
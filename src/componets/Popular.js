import React from 'react'
import { BsArrowRightShort } from "react-icons/bs"

import img1 from "../assets/kids.jfif"
import img2 from "../assets/boy.jpg"
import img3 from "../assets/pool.jpg"


const data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Anfänger - Schwimmkurse",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Folge - Schwimmkurs",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Bronze, Silber - und Goldkurs",
  }
]
const Popular = () => {
  return (
    <section  className='popular section container'>
      <div className='secContainer'>
        <div className='secHeader flex'>
          <div className='textDiv'>
            <h2 className='secTitle'>
              wir bieten olgende schwimmkurse an
            </h2>
            <p>
              hhjggd sjkd sjkds sdjcbsjdbsj
            </p>
          </div>
        </div>
        <div className='mainContent grid'>
          {
            data.map(({ id, imgSrc, destTitle }) => {
              return (
                <div key={id} className='singInDestination'>
                  <div className='destImage'>
                    <img src={imgSrc} alt="title" />
                    <div className='overlayInfo'>
                      <h3>
                        {destTitle}
                      </h3>
                      <BsArrowRightShort className="icon" />
                    </div>
                  </div>
                  <div className="destFooter">
                    <div className='number'>
                      0{id}
                    </div>
                    <div className='desText flex'>
                      <h6>
                        {destTitle}
                      </h6>
                    </div>

                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </section>
  )
}
export default Popular
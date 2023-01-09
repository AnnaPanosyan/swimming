import React from 'react'
import {BsArrowRightShort} from "react-icons/bs"
import {data} from "../utilits/data";


const Popular = () => {
  return (
    <section className='popular'>
      <div className="container">
        <div className="popular_section">
          <h2 className='secTitle'>
            Wir bieten olgende schwimmkurse an
          </h2>
          <p>
            Lorem ipsum dolor sit amet.
          </p>
        </div>

        <div className='mainContent'>
          {
            data.map(({id, imgSrc, destTitle}) => {
              return (
                <div key={id} className='singInDestination'>
                  <div className='destImage'>
                    <img src={imgSrc} alt="title"/>
                    <div className='overlayInfo'>
                      <h3>
                        {destTitle}
                      </h3>
                      <BsArrowRightShort className="icon"/>
                    </div>
                  </div>
                  <div className="destFooter">
                    <div className='number'>
                      0{id}
                    </div>
                    <div className='desText'>
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
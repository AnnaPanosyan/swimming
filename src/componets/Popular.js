import React from 'react'
import { BsArrowRightShort } from "react-icons/bs"
import { data } from "../utilits/data";
import { Link} from "react-router-dom";

const Popular = () => {
  return (
    <section className='popular'>
      <div className="container">
        <div className="popular_section">
          <h2 className='secTitle'>
            Wir bieten Folgende schwimmkurse an
          </h2>
          <p>
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className='mainContent'>
          {
            data.map((item) => {
              return (
                <div key={item.id} className='singInDestination'>
                  <div className='destImage'>
                    <img src={item.imgSrc} alt="title" />
                    <div className='overlayInfo'>
                      <h3>
                        {item.destTitle}
                      </h3>
                      <Link to={`/courses/${item.id}`}>
                        <BsArrowRightShort className="icon" />
                      </Link>
                    </div>
                  </div>
                  <div className="destFooter">
                    <div className='number'>
                      0{item.number}
                    </div>
                    <div className='desText'>
                      <h6>
                        {item.destTitle}
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
import React from 'react'
import { AiFillClockCircle, AiFillEuroCircle, AiOutlineUsergroupAdd } from 'react-icons/ai'
import { TbSwimming } from 'react-icons/tb'
import { Link } from 'react-router-dom';
import { data } from "../utilits/data";
import { BsCheck2All } from 'react-icons/bs';



const Curses = () => {
  return (
    <section className='courses'>
      <div className="container">
        <div className="courses_section">
          <h2 className='secTitle'>
            Wir bieten Folgende schwimmkurse an
          </h2>
          {
            data.map((item) =>
            (
              <div key={item.id}>
                <div className='courses_description'>
                  <div className='description'>
                    <h2 className='courses_title'>
                      {item.destTitle}
                    </h2>
                    <span>{item.age}</span>
                    <div className='amenities'>
                      <div className="singleAmenity">
                        <AiFillClockCircle className="icon" />
                        <span>{item.duration}</span>
                      </div>
                      <div className="singleAmenity">
                        <TbSwimming className="icon" />
                        <span>{item.lessons}</span>
                      </div>
                      <div className="singleAmenity">
                        <AiOutlineUsergroupAdd className="icon" />
                        <span>{item.kids}</span>
                      </div>
                      <div className="singleAmenity">
                        <AiFillEuroCircle className="icon" />
                        <span>{item.preis}</span>
                      </div>
                    </div>
                    <button className='btn'>
                      <Link to='/kursbuchen'>Kurs buchen</Link>
                    </button>
                  </div>
                  <div className='destImage'>
                    <img src={item.imgSrc} alt="title" />
                  </div>
                </div>
                <div className='about_cours'>
                  <div>
                    <h2 className='courses_title'>Über diesen Kurs</h2>
                    <span>{item.about}</span>
                  </div>
                  <div className='courses_rule'>
                    <h2 className='courses_title'>
                      {item.subTitle}
                    </h2>
                    <ul className='courses_list'>
                      {
                        item.rouls.map((item) => (
                          <li key={item.id} className='courses_item'>
                            <BsCheck2All className="icon" />
                            {item}
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
                </div>
            )
            )
          }
        </div>

      </div>
    </section>
  )
}
export default Curses

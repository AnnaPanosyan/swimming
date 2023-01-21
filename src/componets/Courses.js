import React, { useEffect, useState } from 'react'
import { AiFillClockCircle, AiFillEuroCircle, AiOutlineUsergroupAdd } from 'react-icons/ai'
import {TiArrowBack} from  'react-icons/ti';
import { TbSwimming } from 'react-icons/tb';
import { Link, useParams } from 'react-router-dom';
import { data } from "../utilits/data";
import { BsCheck2All } from 'react-icons/bs';



const Courses = () => {
  const { id } = useParams();
  const [cours, setCours] = useState(null);

  useEffect(() => {
    setCours(
      data.filter((item) => (item.id == id))[0])
  }, [id]);
  return (
    <div>
      {
        cours && (

          <section className='courses'>
            <div className="container">
              <div className="courses_section">
                <h2 className='secTitle'>
                <Link to=''>
                        <TiArrowBack className="icon" />
                      </Link>
                  Wir bieten Folgende schwimmkurse an
                </h2>
                <div >
                  <div className='courses_description'>
                    <div className='description'>
                      <h2 className='courses_title'>
                        {cours.destTitle}
                      </h2>
                      <span>{cours.age}</span>
                      <div className='amenities'>
                        <div className="singleAmenity">
                          <AiFillClockCircle className="icon" />
                          <span>{cours.duration}</span>
                        </div>
                        <div className="singleAmenity">
                          <TbSwimming className="icon" />
                          <span>{cours.lessons}</span>
                        </div>
                        <div className="singleAmenity">
                          <AiOutlineUsergroupAdd className="icon" />
                          <span>{cours.kids}</span>
                        </div>
                        <div className="singleAmenity">
                          <AiFillEuroCircle className="icon" />
                          <span>{cours.preis}</span>
                        </div>
                      </div>
                      <Link className='btn' to='/kursbuchen'>Kurs buchen</Link>
                    </div>
                    <div className='destImage'>
                      <img src={cours.imgSrc} alt="title" />
                    </div>
                  </div>
                  <div className='about_cours'>
                    <div>
                      <h2 className='courses_title'>Über diesen Kurs</h2>
                      <span>{cours.about}</span>
                    </div>
                    <div className='courses_rule'>
                      <h2 className='courses_title'>
                        {cours.subTitle}
                      </h2>
                      <ul className='courses_list'>
                        {
                          cours.rouls.map((item) => (
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
              </div>
            </div>
          </section>
        )
      }
    </div>

  )
}
export default Courses


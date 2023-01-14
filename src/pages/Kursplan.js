import React from 'react'
import { TbSwimming } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { kursPlan } from '../utilits/agbData'

const Kursplan = () => {
  return (
    <div className="kursPlan">
      <div className='container'>
      <h2>Kursplan</h2>
        {
          kursPlan.map((item) => (
            <div key={item.id} className="kursPlan_des">
              <h3 className='title'><TbSwimming className="icon"/> {item.title}</h3>
               <div className='info'>
                <div>
              <h4 className="info_item">{item.date}</h4>
              <h4 className="info_item">{item.day}</h4>
              <h4 className="info_item">{item.time1}</h4>
              <h4 className="info_item">{item.time2}</h4>
              </div>
              <Link to="/kursbuchen" className='btn'>Kurs buchen</Link>
              </div>

            </div>

          ))
        }
      </div>
    </div>
  )
}

export default Kursplan
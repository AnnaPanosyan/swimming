import React from 'react'
import { impressumData } from '../utilits/agbData'

const Impressum = () => {
  return (
    <div className='impressum'>
      <div className='container'>
        <div className='impressum_title'>
          <h2>Impressum</h2>
        </div>

        <div className="contacts">
              <h4 className="title"> Angaben gemäs § 5 TMG </h4>
              <h4 className="linkTitle">Swimming From Zero to Hero</h4>
              <h4 className="linkTitle">Arno Setaghyan</h4>
              <h4 className="linkTitle">Steinmickerweg 6</h4>
              <h4 className="linkTitle">59505 Bad Sassendorf</h4>
              <h4  className='links'>
              <a href='tel:+ 49 17624310872' className="phone">Mobil: + 49 17624310872</a>
              <a href='mailto:test@gmail.com' className="email">Email: fromzerotohero@gmail.com</a>
              </h4>
            </div>

        <div className='impressum_contant'>
          {
            impressumData.map((item) => (
              <div key={item.id} className='impressum_item'>
                <h4 className='impressum_subtitle'>{item.title}</h4>
                <p className='impressum_text' >{item.text}</p>
                <p className='impressum_text' >{item.subText}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Impressum
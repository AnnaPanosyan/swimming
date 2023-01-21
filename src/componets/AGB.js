import React from 'react'
import { agbData } from "../utilits/agbData"

const AGB = () => {
  return (
    <div className='agb'>
      <div className='container'>
        <div className='agb_title'>
          <h2>AGB</h2>
        </div>
        <div className='agb_contant'>
          {
            agbData.map((item) => (
              <div key={item.id} className='agb_item'>
                <h4 className='agb_subtitle'>{item.title}</h4>

                {
                  item.text.map((i)=>(
                    <p className='agb_text' >{i}</p>
                  ))
                }
                
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default AGB
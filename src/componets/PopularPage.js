import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'



const PopularPage = ({ imgSrc, destTitle, number, id }) => {
  const navigate = useNavigate()
  const handleNavigate = (id) => {
    navigate(`/courses/${id}`)
  }
  return (
    <div className='singInDestination'>
      <div className='destImage'>
        <img src={imgSrc} alt="title" />
        <div className='overlayInfo'>
          <h3>
            {destTitle}
          </h3>
  
        </div>
      </div>
      <div className="destFooter">
        <div className='number'>
         <p> {number}</p>
          <button onClick={() => handleNavigate(id)}>
            <BsArrowRightShort className="icon" />
          </button>
        </div>
       
        <div className='desText'>
          <h6>
            {destTitle}
          </h6>
        </div>
      </div>
     
    </div>
  )
}

export default PopularPage
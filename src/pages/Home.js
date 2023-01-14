import React from 'react'
import {Link} from 'react-router-dom'
import Popular from "../componets/Popular";

const Home = () => {
  return (
    <div>
      <section className='home'>
        <div className='secContainer container'>
          <div className='homeText'>
            <h1 className='title'>
              Swimming from zero to hero
            </h1>
            <button className='btn'>
              <Link to='/kursbuchen'>Kurs buchen</Link>
            </button>
          </div>
        </div>
      </section>
      <Popular/>
    </div>


  )
}

export default Home
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className='home'>
      <div className='secContainer container'>
        <div className='homeText'>
          <h1 className='title'>
            Swimming from zero to hero
          </h1>
          <button className='btn'>
            <Link href="#">Kurs buchen</Link>
          </button>
        </div>
      </div>
    </section>






  )
}

export default Home
import React, { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots, TbSwimming } from "react-icons/tb"
import { Link } from 'react-router-dom'


const Navbar = () => {
  const [active, setActive] = useState('navBar')
  const showNav = () => {
    setActive('navBar activeNavbar')
  }

  const removeNav = () => {
    setActive("navBar")
  }

  const [transparent, setTransparent] = useState('header')
  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent("header activeHeader")
    }
    else {
      setTransparent("header")
    }
  }
  window.addEventListener("scroll", addBg)

  return (
    <section className='navBarSection'>
      <div className={transparent}>
        <div className="logoDiv">
          <Link href='#' className='logoIcon'>
            <TbSwimming className="icon" />
            <div className='flexIcon'>
              <span>SCHWIMMSCHULE</span>
              <span>swimming from zero to hero</span>
            </div>
          </Link>
        </div>
        <div className={active}>
          <ul className='navLists flex'>
            <li className='navItem'>
              <Link href='#' className='navLink'>Home</Link>
            </li>
            <li className='navItem'>
              <Link href='#' className='navLink'>Kurs buchen</Link>
            </li>
            <li className='navItem'>
              <Link href='#' className='navLink'>Kursplan</Link>
            </li>
            <li className='navItem'>
              <Link href='#' className='navLink'>Kontakt</Link>
            </li>
            <li className='navItem'>
              <Link href='#' className='navLink'>Feedback</Link>
            </li>
            <li className='navItem'>
              <Link href='#' className='navLink'>Baderegeln</Link>
            </li>
          </ul>
          <div onClick={removeNav}
            className="closeNavbar">
            <AiFillCloseCircle className='icon' />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className='icon' />
        </div>
      </div>
    </section>
  )
}

export default Navbar
import React from 'react'
import Logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
import { BiMenuAltRight } from "react-icons/bi"


const Header = () => {
  return (
    <header>
      <div className='logo'>
        <Link to="/home"><img className='logo-img' src={Logo} alt="logo" /></Link>
      </div>
      <nav>
        <ul className='nav-menu'>
          <li className='nav-list'>
            <Link to="/home" >Home</Link>
          </li>
          <li className='nav-list'>
            <Link to="/kursBuchen">Kurs buchen</Link>
          </li>
          <li className='nav-list'>
            <Link to="/Kursplan">Kursplan</Link>
          </li>
          <li className='nav-list'>
            <Link to="/">Kontakt</Link>
          </li>
          <li className='nav-list'>
            <Link to="/">Feedback</Link>
          </li>
          <li className='nav-list'>
            <Link to="/">Baderegeln</Link>
          </li>
        </ul>
      </nav>
      <div>
        <BiMenuAltRight />
      </div>
    </header>
  )
}

export default Header
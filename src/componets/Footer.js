import React from 'react'
import { TbSwimming } from "react-icons/tb"
import { ImFacebook } from "react-icons/im"
import { Link } from 'react-router-dom'
import { AiFillInstagram } from 'react-icons/ai'
import AGB from './AGB'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo">
            <Link href='#' className='logo flex'>
              <div className='flex'>
                <TbSwimming className="icon" />
                <div>
                  <span>SCHWIMMSCHULE</span>
                  <span>swimming from zero to hero</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="socials flex">
            <ImFacebook className="icon" />
            <ImFacebook className="icon" />
            <AiFillInstagram className="icon" />
          </div>
        </div>
        <div className="footerLinks">
          <span className="linkTitle">
            Information
          </span>
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Kurs buchen</Link>
          </li>
          <li>
            <Link href="#">Kursplan</Link>
          </li>
          <li>
            <Link href="#">Kontakt</Link>
          </li>
          <li>
            <Link href="#">Feedback</Link>
          </li>
          <li>
            <Link href="#">Baderegeln</Link>
          </li>
        </div>
        <div className="footerLinks">
          <span className="linkTitle">
            Kontaktiere uns
          </span>
          <span className="phone">+232 832 63782</span>
          <span className="">jjhjhsd@gmail.com</span>
        </div>
        <div className='line'></div>
        <div className='footerLinks'>
          <li className='linkTitle'>
            <Link to="/impressum">Impressum</Link>
          </li>
          <li className='linkTitle'>
            <Link to="/datenschutz">Datenschutz</Link>
          </li>
          <li className='linkTitle'>
            <Link to="/AGB" element={<AGB />}>AGB</Link>
          </li>
        </div>
      </div>
    </div>
  )
}

export default Footer
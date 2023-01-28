import React from 'react'
import {TbSwimming} from "react-icons/tb"
import {ImFacebook} from "react-icons/im"
import {Link} from 'react-router-dom'
import {AiFillInstagram} from 'react-icons/ai'
import {navlinks, roolsLink} from "../utilits/navlinks";
import Map from '../componets/Map'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className='footer_title'>
          <div className='footer_inner'>
            <div className="footer_inner-logo">
              <div className="footerLogo">
                <Link to='/' className='logo'>
                  <div className='footerLogo_title'>
                    <TbSwimming className="icon"/>
                    <div>
                      <h4>SCHWIMMSCHULE</h4>
                      <h4>swimming from zero to hero</h4>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="socials">
                <ImFacebook className="icon"/>
                <AiFillInstagram className="icon"/>
              </div>
            </div>
            <div className="footer_navbar">
              <h4 className="linkTitle"> Information </h4>
              <ul>
                {navlinks.map((item) => (
                  <li key={item.id}>
                    <Link to={item.to}>{item.link}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer_contacts">
              <h4 className="linkTitle"> Kontaktiere uns </h4>
              <a href='tel:+ 49 17624310872' className="phone">+ 49 17624310872</a>
              <a href='mailto:schwimmschulefromzerotohero@gmail.com' className="email">schwimmschulefromzerotohero@gmail.com</a>
            </div>

            <div className="footer_contacts">
              <h4 className="linkTitle">Anschrift</h4>
              <p>INI Gesamtschule Bad Sassendorf</p>
              <p>Zur Hepper Höhe 4</p>
              <p>59505 Bad Sassendorf</p>
              <Map/>
            </div>
            
          </div>
          <div className='footer_rolls'>
            <ul>
              {roolsLink.map((item) => (
                <li key={item.id}>
                  <Link to={item.to}>{item.link} </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
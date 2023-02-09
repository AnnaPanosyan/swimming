import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots, TbSwimming } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";
import { navlinks } from "../utilits/navlinks";

const Navbar = () => {
  const [active, setActive] = useState("navBar");

  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  const removeNav = () => {
    setActive("navBar");
  };
  return (
    <section className="navBarSection">
      <div className="container">
        <div className="header">
          <div className="logoDiv">
            <Link to="" className="logoIcon">
              <TbSwimming className="icon" />
              <div className="flexIcon">
                <span>SCHWIMMSCHULE</span>
                <span>swimming from zero to hero</span>
              </div>
            </Link>
          </div>
          <div className={active}>
            <ul className="navLists flex">
              {navlinks.map((item) => (
                <li className="navItem" key={item.id}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      isActive ? "navLink_active" : "navLink"
                    }
                    onClick={removeNav}
                  >
                    {item.link}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div onClick={removeNav} className="closeNavbar">
              <AiFillCloseCircle className="icon" />
            </div>
          </div>
          <div onClick={showNav} className="toggleNavbar">
            <TbGridDots className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

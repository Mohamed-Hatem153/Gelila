import React from "react";
import {Link} from 'react-router-dom';
import "./Navbar.css";
import logo from "../../Assets/logo/logo_final.svg";
import header from "../../Assets/images/header-bg.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="container">
        <input type="checkbox" id="nav-check" />
        <div className="social-links">
          <ul className="social-links__list">
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaLinkedinIn />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaMapMarkerAlt />
            </li>
          </ul>
        </div>
        <div className="nav-header">
          <div className="nav-title">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links">
          <Link className='link' to='/'>Home</Link>
          <Link className='link' to='/services'>Servises</Link>
          <Link className='link' to='/about' >About</Link>
          <Link className='link' to='/contact'>Contact</Link>
          <div className="social-links-mobile">
          <ul className="social-links-mobile-list">
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaLinkedinIn />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaMapMarkerAlt />
            </li>
          </ul>
        </div>
        </div>
      </div>
      <div className="header-bg">
        <img src={header} alt="header-bg" />
      </div>
    </div>
  );
};

export default Navbar;

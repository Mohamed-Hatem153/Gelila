import React,{useState} from 'react'
import styles from './Navbar.module.css'
import './Navbar.css'
import logo from '../../Assets/logo/logo_final.svg'

const Navbar = () => {
    return (
            <div className="nav">
            <div className='container'>
  <input type="checkbox" id="nav-check" />
  <div className="nav-header">
    <div className="nav-title">
      <img src={logo} alt='logo'/>
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
    <a href="//github.io/jo_geek">Home</a>
    <a href="http://stackoverflow.com/users/4084003/">Servises</a>
    <a href="https://codepen.io/jo_Geek/">About</a>
    <a href="https://jsfiddle.net/user/jo_Geek/">Contact</a>
  </div>
  </div>
</div>
    )
}

export default Navbar

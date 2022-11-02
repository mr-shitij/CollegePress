import React from 'react'

import PropTypes from 'prop-types'

import SolidButton from './solid-button'
import './navbar.css'

const Navbar = (props) => {
  return (
    <nav data-role="Header" className="navbar-navbar">
      <h1>{props.Logo}</h1>
      <div className="navbar-right-side">
        <div className="navbar-links-container">
          <span className="navbar-text">{props.text}</span>
          <span className="navbar-text1">{props.text2}</span>
        </div>
        <a href="#main-section" className="navbar-link">
          <SolidButton button="Explore"></SolidButton>
        </a>
      </div>
      <div data-type="BurgerMenu" className="navbar-burger-menu">
        <svg viewBox="0 0 1024 1024" className="navbar-burger-menu">
          <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
          <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
          <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
        </svg>
      </div>
      <div data-type="MobileMenu" className="navbar-mobile-menu">
        <div className="navbar-nav">
          <div className="navbar-top">
            <h1>{props.Logo1}</h1>
            <div data-type="CloseMobileMenu" className="navbar-close-menu">
              <svg viewBox="0 0 1024 1024" className="navbar-icon3">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="navbar-right-side1">
            <div className="navbar-links-container1">
              <span className="navbar-text2">{props.text4}</span>
              <span className="navbar-text3">{props.text5}</span>
              <span className="navbar-text4">{props.text6}</span>
              <span>{props.text7}</span>
            </div>
            <a href="#main-section" className="navbar-link1">
              <SolidButton button="Explore places"></SolidButton>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  text6: 'Tour Packages',
  Logo: 'collegepress.in',
  text7: 'Contact',
  text: 'Home',
  text5: 'About',
  text4: 'Home',
  text2: 'Contact',
  Logo1: 'Travel',
}

Navbar.propTypes = {
  text6: PropTypes.string,
  Logo: PropTypes.string,
  text7: PropTypes.string,
  text: PropTypes.string,
  text5: PropTypes.string,
  text4: PropTypes.string,
  text2: PropTypes.string,
  Logo1: PropTypes.string,
}

export default Navbar

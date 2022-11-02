import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import PlaceCard from '../components/place-card'
import Footer from '../components/footer'
import './landing-page.css'

const LandingPage = (props) => {
  return (
    <div className="landing-page-container">
      <Helmet>
        <title>CollegePress</title>
        <meta property="og:title" content="CollegePress" />
      </Helmet>
      <div id="top-section" className="landing-page-top-container">
        <nav data-role="Header" className="landing-page-navbar">
          <h1>collegepress.in</h1>
          <div className="landing-page-right-side">
            <div className="landing-page-links-container">
              <a href="#top-section" className="landing-page-link">
                Home
              </a>
              <span className="landing-page-text">Contact</span>
            </div>
            <a href="#main-section" className="landing-page-link1">
              <SolidButton button="Explore"></SolidButton>
            </a>
          </div>
          <div data-type="BurgerMenu" className="landing-page-burger-menu">
            <svg viewBox="0 0 1024 1024" className="landing-page-burger-menu">
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
          <div data-type="MobileMenu" className="landing-page-mobile-menu">
            <div className="landing-page-nav">
              <div className="landing-page-top">
                <h1>Travel</h1>
                <div
                  data-type="CloseMobileMenu"
                  className="landing-page-close-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="landing-page-icon3">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="landing-page-right-side1">
                <div className="landing-page-links-container1">
                  <span className="landing-page-text01">Home</span>
                  <span className="landing-page-text02">About</span>
                  <span className="landing-page-text03">Tour Packages</span>
                  <span>Contact</span>
                </div>
                <a href="#main-section" className="landing-page-link2">
                  <SolidButton button="Explore places"></SolidButton>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="landing-page-hero">
          <div className="landing-page-content-container">
            <h1 className="heading landing-page-text05">A Note Book</h1>
            <h2 className="subheading landing-page-subheading">
              Specially Created For You
            </h2>
            <span className="landing-page-text06">
              <span>Each Note Book Is Designed By Considering</span>
              <br></br>
              <span>
                Your Specific Needs
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <a href="#main-section" className="landing-page-link3">
              <SolidButton
                button="Explore Note Books"
                className="landing-page-component2"
              ></SolidButton>
            </a>
          </div>
        </div>
      </div>
      <div id="main-section" className="landing-page-main">
        <h1>Our Collection</h1>
        <span className="landing-page-text11">Recommended</span>
        <div className="landing-page-cards-container">
          <Link to="/c-o-e-p-edition-page" className="landing-page-navlink">
            <PlaceCard
              city="COEP Edition"
              image="https://images.unsplash.com/photo-1654931799020-ce7cf3f4a2c7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDM5fHxCbGFjayUyME5vdGUlMjBCb29rfGVufDB8fHx8MTY1ODIxNjk2NQ&amp;ixlib=rb-1.2.1&amp;w=300"
              description="A Special Edition Designed For The COEPian's"
              rootClassName="place-card-root-class-name"
              className="landing-page-component3"
            ></PlaceCard>
          </Link>
          <Link to="/dream-edition-page" className="landing-page-navlink1">
            <PlaceCard
              city="Dream Edition"
              image="https://images.unsplash.com/photo-1655720033654-a4239dd42d10?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fGRlZXAlMjBkcmVhbSUyMGFpfGVufDB8fHx8MTY1ODIxNzA2Mg&amp;ixlib=rb-1.2.1&amp;w=300"
              description="Special Note Books, Who's design is generated by AI and none of them are same"
              rootClassName="place-card-root-class-name1"
              className="landing-page-component4"
            ></PlaceCard>
          </Link>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default LandingPage

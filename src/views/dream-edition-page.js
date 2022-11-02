import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import FeatureCard43 from '../components/feature-card43'
import Footer from '../components/footer'
import './dream-edition-page.css'

const DreamEditionPage = (props) => {
  return (
    <div className="dream-edition-page-container">
      <Helmet>
        <title>Dream Edition Page - CollegePress</title>
        <meta property="og:title" content="Dream Edition Page - CollegePress" />
      </Helmet>
      <div id="top-section" className="dream-edition-page-top-container">
        <nav data-role="Header" className="dream-edition-page-navbar">
          <h1>collegepress.in</h1>
          <div className="dream-edition-page-right-side">
            <div className="dream-edition-page-links-container">
              <Link to="/" className="dream-edition-page-navlink">
                Home
              </Link>
              <a href="#bottom-section" className="dream-edition-page-link">
                Contact
              </a>
            </div>
            <a href="#order-section" className="dream-edition-page-link1">
              <SolidButton
                button="Order Now"
                className="dream-edition-page-component"
              ></SolidButton>
            </a>
          </div>
          <div
            data-type="BurgerMenu"
            className="dream-edition-page-burger-menu"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="dream-edition-page-burger-menu"
            >
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
          <div
            data-type="MobileMenu"
            className="dream-edition-page-mobile-menu"
          >
            <div className="dream-edition-page-nav">
              <div className="dream-edition-page-top">
                <h1>Travel</h1>
                <div
                  data-type="CloseMobileMenu"
                  className="dream-edition-page-close-menu"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="dream-edition-page-icon3"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="dream-edition-page-right-side1">
                <div className="dream-edition-page-links-container1">
                  <span className="dream-edition-page-text">Home</span>
                  <span className="dream-edition-page-text1">About</span>
                  <span className="dream-edition-page-text2">
                    Tour Packages
                  </span>
                  <span>Contact</span>
                </div>
                <SolidButton button="Explore places"></SolidButton>
              </div>
            </div>
          </div>
        </nav>
        <div className="dream-edition-page-hero">
          <div className="dream-edition-page-content-container">
            <h1 className="heading dream-edition-page-text4">Dream Edition</h1>
            <h2 className="subheading dream-edition-page-subheading">
              Everyone is unique
            </h2>
            <a href="#order-section" className="dream-edition-page-link2">
              <SolidButton
                button="Order Now"
                className="dream-edition-page-component2"
              ></SolidButton>
            </a>
          </div>
        </div>
      </div>
      <div className="dream-edition-page-container1">
        <div className="dream-edition-page-info">
          <h1 className="dream-edition-page-text5"> Dream Edition Details</h1>
          <div className="dream-edition-page-separator"></div>
          <div className="dream-edition-page-container2">
            <div className="dream-edition-page-container3">
              <FeatureCard43
                rootClassName="feature-card43-root-class-name5"
                title="Price"
                description="Standard Price Of 62 Ruppes"
              ></FeatureCard43>
              <FeatureCard43
                rootClassName="feature-card43-root-class-name6"
                title="Size"
                description="Standard Size Of 127 x 100"
              ></FeatureCard43>
              <FeatureCard43
                rootClassName="feature-card43-root-class-name7"
                title="Binding"
                description="Standard Spiral Binding"
              ></FeatureCard43>
              <FeatureCard43
                rootClassName="feature-card43-root-class-name8"
                title="Pages"
                description="Standard Page Count Of 170"
              ></FeatureCard43>
            </div>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1471086569966-db3eebc25a59?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxtaW5pbWFsaXNtfGVufDB8fHx8MTYyNjQ0NTY1Nw&amp;ixlib=rb-1.2.1&amp;w=500"
              className="dream-edition-page-image"
            />
          </div>
        </div>
        <div className="dream-edition-page-container4">
          <form
            enctype="multipart/form-data"
            autoComplete="on"
            id="order-section"
            method="post"
            action="newOrder"
            className="dream-edition-page-form"
          >
            <div className="dream-edition-page-container5">
              <h1 className="dream-edition-page-text6">
                Order
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h1>
              <div className="dream-edition-page-separator1"></div>
              <div className="dream-edition-page-container6">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  autoComplete="on"
                  name="name"
                  className="dream-edition-page-textinput input"
                />
                <input
                  type="email"
                  placeholder="email"
                  name="emal"
                  required
                  autoComplete="on"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]&#123;2,4&#125;$"
                  className="dream-edition-page-textinput1 input"
                />
                <input
                  type="text"
                  placeholder="Address"
                  name="address"
                  required
                  autoComplete="on"
                  className="dream-edition-page-textinput2 input"
                />
                <input
                  type="number"
                  placeholder="phone number"
                  name="phone"
                  required
                  autoComplete="on"
                  pattern="^(\\+\\d&#123;1,2&#125;\\s)?\\(?\\d&#123;3&#125;\\)?[\\s.-]\\d&#123;3&#125;[\\s.-]\\d&#123;4&#125;$"
                  maxlength="10"
                  minlength="10"
                  className="dream-edition-page-textinput3 input"
                />
                <button
                  type="submit"
                  className="dream-edition-page-button button"
                >
                  Get Details
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default DreamEditionPage

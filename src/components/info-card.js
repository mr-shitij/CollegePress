import React from 'react'

import PropTypes from 'prop-types'

import './info-card.css'

const InfoCard = (props) => {
  return (
    <div className={`info-card-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image}
        className="info-card-image"
      />
      <div className="info-card-container1">
        <span className="info-card-text">{props.city}</span>
        <span className="info-card-text1">{props.description}</span>
      </div>
    </div>
  )
}

InfoCard.defaultProps = {
  rootClassName: '',
  image:
    'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000',
  image_alt: 'image',
  city: 'City Name',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
}

InfoCard.propTypes = {
  rootClassName: PropTypes.string,
  image: PropTypes.string,
  image_alt: PropTypes.string,
  city: PropTypes.string,
  description: PropTypes.string,
}

export default InfoCard

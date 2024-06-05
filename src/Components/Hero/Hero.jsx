import React from 'react'
import './Hero.css'
import { Link } from "react-scroll";
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We provide quality services in record time</h1>
        <p>Our premium service delivery sets us apart from the competition as we deliver the best services in a timely fashion.</p>
        <button className='btn'><Link to="service" smooth={true} offset={-260} duration={500}>Explore More <img src={dark_arrow} alt="" />
          </Link></button>
      </div>
    </div>
  )
}

export default Hero

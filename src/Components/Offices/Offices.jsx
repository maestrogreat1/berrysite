import React from 'react'
import './Offices.css'
import { Link } from "react-scroll";
import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-31.png'
import gallery_4 from '../../assets/gallery-41.png'
import white_arrow from '../../assets/white-arrow.png'

const Offices = () => {
  return (
    <div className='office'>
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <button className='btn dark-btn'><Link to="testimonials" smooth={true} offset={-150} duration={500}>Get in Touch <img src={white_arrow} alt="" />
          </Link></button>
    </div>
  )
}

export default Offices

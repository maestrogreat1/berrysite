import React from 'react'
import './About.css'
import about_img from '../../assets/about1.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about_img'/>
        <img src={play_icon} alt="" className='play_icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT BERRY.CO</h3>
        <h2>Nuturing the Future Today</h2>
        <p>Embark on a transfromative business journey with our company's comprehensive business modules. Our cutting-edge packages is designed to empower businesses with the resources, skills and experince needed to excel in the dynamic business world.</p>
        <p>With a focus on innovation, hands-on practice and personalised services, our modules prepare both veteran and aspiring business persons to make an impact around the globe.</p>
        <p>Wether you aspire to be an entrepreneur, administrator, analyst, consultant or business trainer, our diverse range of modules offers you the perfect pathway to achieve your goals and unlock your full potential in shaping your future.</p>
      </div>
    </div>
  )
}

export default About

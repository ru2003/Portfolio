import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const  Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img}  alt="Profile image " />
        <h1> <span>I am Ruchita Chaudhari , </span> frontend developer based in India.</h1>
        <p> I am Frontend developer from India , japan with 5 years of experience.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero
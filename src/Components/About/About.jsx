import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.svg'


const About = () =>  {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt=" "/>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt=""/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Allow users to switch between multiple themes like light mode, dark mode, or a custom theme that reflects your personality.</p>
                    <p>Allow users to switch between multiple themes like light mode, dark mode, or a custom theme that reflects your personality.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p> <hr style={{width : "50%"}}></hr></div>
                    </div><div className="about-skill"><p>React JS</p> <hr style={{width : "70%"}}></hr></div>
                    <div className="about-skill"><p>JavaScript</p> <hr style={{width : "60%"}}></hr></div>
                    <div className="about-skill"><p>NExt JS</p> <hr style={{width : "50%"}}></hr></div>
            </div>
        </div>
        <div>
       
                <div className="about-achievements"> 
                    <h1>10+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr/>

                <div className="about-achievements">
                    <h1>10+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                  <hr/>

                <div className="about-achievements">
                    <h1>15+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>


            </div>
         </div>

         
  )
}

export default About
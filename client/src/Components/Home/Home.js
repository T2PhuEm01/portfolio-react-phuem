import React from 'react'
import "./Home.css";
import Typewrite from 'typewriter-effect';
import MyCv from "./Resume-TranThanhPhuEm.pdf"
import { BsMoonStarsFill} from "react-icons/bs";
import { IoSunny } from "react-icons/io5";
import Fade from 'react-reveal/Fade';

import {Link} from "react-scroll";

const Home = ({theme,changeTheme}) => {
  return (
    <div className='container-fluid home' id='home'>

      <div className='theme-change' onClick={changeTheme}>
        {theme === "light" ? (<p><BsMoonStarsFill size={40}/></p>):(<p className='sun-theme-icon'><IoSunny size={40}/></p>)}

      </div>
        <div className='container home-content'>
          <Fade right>
            <h1>Hi I'm Tran Thanh Phu Em</h1>
            <h3>
              <Typewrite options={{
                strings: [
                  "Full Stack Software Developer",
                  "MERN Stack Developer",
                  "Web Developer",
                  "UI/UX Designer",
                ],
                autoStart: true,
                loop: true,
                delay:5,
              }}/>
            </h3>
            </Fade>

            <Fade bottom>

            <div className='button-for-action'>
              <Link to="contact" spy={true} smooth={true} duration={100} offset={-100}>
              <div className='hire-me-button'>
                Hire me
              </div>
              </Link>
              <div className='get-resume-button'>
                <a href={MyCv} download="PhuEm_cv">
                  Get Resume
                </a>
              </div>
            </div>
            </Fade>
        </div>
    </div>
  )
}

export default Home
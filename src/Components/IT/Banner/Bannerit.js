
import React from 'react';
import "./Bannerit.css";
import Bannerim from "../Assetit/Group 2 (1).png";

import { Link } from 'react-scroll';
import "aos/dist/aos.css";


<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"/>
function Bannerit() {
  return (
    <div className='container-fluid bannerpage m-0 p-0' id='sapbanner'>
      <div className='row d-flex justify-content-evenly align-items-center'>
        <div className='col-md-12 col-lg-6' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <h1 className='main-text'>Creating Value Through Customized IT Solutions and Automation</h1>
          <p className='parasap'>Explore our tailored approach to IT services, where we analyse your distinct needs to craft solutions that perfectly align with your business objectives.</p>
          <Link to="formit" spy={true} smooth={true} duration={500}><button className='px-4 explorebutton text-light'>Explore </button></Link>
          {/* <button className='px-4 explorebutton text-light'>EXPLORE <FontAwesomeIcon icon={faCircleArrowRight}></FontAwesomeIcon></button> */}
        </div>
    
        <div className='col-md-12  col-lg-6'>
          <img src={Bannerim} alt='loading' className='banner-image'  data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"/>
      </div>
      </div>
    </div>
  )
}

export default Bannerit

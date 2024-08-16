import React, { useEffect } from 'react'
import about1 from '../Asset/sapabout1.png'; 
import about2 from'../Asset/sapabout2.png';
import "./Aboutsap.css";
import Aos from "aos";
import "aos/dist/aos.css";

function AboutSap(){ 
    useEffect(()=>{
Aos.init({duration:1500});
    },[]) 
  return (
    <div>
        <div className='container' id='aboutsap'>
            <div className='row mt-3'>
                <div className='col-sm-12 col-lg-6' data-aos="fade-in">
                    <img src={about1} className='aboutimg' alt='About KG Genius Lab' data-aos="fade-right" data-aos-duration="3000"/>
                </div>
                <div className='col-sm-12 col-lg-6'>
                    <h3 className='mt-3 aboutheading'>About Us</h3>
                    <h4>Transforming Business Digitally With SAP Automation</h4>
                    <p className='aboutcontent'>At KGGL, SAP Automation makes your business digitally powerful. Our innovative solutions automate operations, boost productivity and boost growth. With SAP’s innovative technology, we help businesses optimize processes, gain actionable insights and stay ahead in today’s dynamic market. SAP Automation boosts efficiency, agility and scalability, helping businesses thrive in the digital age. SAP Automation can transform your business for success. </p>
                </div>
            </div>
        </div> 
    </div>
  )
}
export default AboutSap

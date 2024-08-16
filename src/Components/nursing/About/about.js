import React from "react";
import about from '../Assest/About.jpg'
import './about.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import vision from '../Assest/Group 37369 (1).png'
import mission from '../Assest/Group 37370.png'
import LazyLoad from 'react-lazy-load';
export function Aboutnursing(){
    return(
        <>
            <div className="container-fluid pt-3 mb-5">
                <div className="row">
                    <div className="col-lg-4 mt-5 mb-5 pt-5">
                    <LazyLoad offset={300}>
                        <img src={about} className="col-lg-12 col-10 sizee ms-2" alt="Nursing Jobs Abroad"/>
                    </LazyLoad>
                    </div>
                    <div className="col-lg-8">
                        <h3  className="mt-5 ms-3"><b>About Us</b></h3>
                        <p className="ms-3 mt-3 col-lg-10">KG Genius Lab Healthcare excels in bespoke recruitment, connecting skilled nurses with global opportunities. Through a commitment to quality and integrity, we prioritize personalized service. With extensive industry experience and a dedicated team, we're a trusted partner for nurses and healthcare facilities worldwide. Our rigorous screening process ensures perfect matches, aligning candidates' skills and aspirations with companies' needs.</p>
                        <div className="container-fluid row">
                            <div className="col-lg-6 ">
                               
                                    
                                <img src={vision}/>
                                <p className="container-fluid">Our vision is to become the leading global platform for connecting professionals with diverse international healthcare opportunities, fostering a world where quality healthcare knows no boundaries.</p>
                                
                            </div>
                            <div className="col-lg-6">
                                <img src={mission} className="mt-4"/>
                                <p className="container-fluid">Our goal is to help professionals feel happy and fulfilled by giving them valuable opportunities to work abroad. At the same time, we want to make sure hospitals around the world have proficient staff to provide good healthcare to everyone.</p>
                            </div>
                        </div>
                        <div id="service">
                    </div>

                </div>

                </div>
            </div>
        </>
    );
}
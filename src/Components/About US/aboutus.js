import React, {useEffect } from 'react';
// import BIRDS from 'vanta/dist/vanta.birds.min';
import './aboutus.css'
import banner from '../Assest/Group 50.png'
import AOS from "aos";
import "aos/dist/aos.css";
export function Aboutus(){
    // const vantaRef = useRef(null);
    useEffect(() => {
        AOS.init();
        AOS.refresh();
        // const vantaEffect = BIRDS({
        //     el: vantaRef.current,
        //     backgroundColor: 'white'
            
        //   });
      
        //   return () => {
        //     if (vantaEffect) vantaEffect.destroy();
        //   };
      }, []);
    return(
        <>
            <div className="container-fluid bg-white pb-5"  id="aboutpage">
                <h3 className="text-center pt-5 credtext" >About Us</h3>
                <div className="row" >
                        <div className="col-lg-6 mt-n2"  > 

                            <img src={banner}   data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"  alt="IT Services"/> 
                        </div>
                    <div className="col-lg-6 p-5"  data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" >
                        {/* <h1 className="text-center p-5"></h1> */}
                        <p className="styl mb-3">The KG Group, with its decades-long legacy, is an established name in fields across the board, but we are best known for our innovative technologies. 25 years ago, the Group’s KG Information system private Limited (KGiSL) pioneered cutting-edge technological solutions in South India. Today, it is one of the fastest growing IT companies in the Indo-Pacific with an active presence in over 7 countries.  </p>
                        <p className="styl">Introducing KG Genius Labs, the latest venture from the KG brand, aimed at helping businesses worldwide succeed. Our team of experts offers custom solutions and services, including IT Startup Incubators/Accelerators, Manpower Consultancy for healthcare sectors targeting regions like MENA, UK and Canada, IT products for talent acquisition and comprehensive IT services and support such as KPO, BPO, Development services and SAP. KG Genius Labs stands out as the top choice for businesses seeking a progressive partner.</p>
                    </div>
                    {/* <div className="col-lg-6 ps-5 row">
                        <h1 className="text-center p-5">Why Work with Us</h1>
                        <div className="row ps-5">

                            <div className="ps-3 col-lg-5">
                                <img src={Experience}/>
                                <h4>Experience</h4>
                                <p>Presence for <b>25+</b> years.</p>
                            </div>
                            <div className="col-lg-5">
                                <img src={innovation}/>
                                <h4>Innovation</h4>
                                <p>At the forefront of the Indian tech revolution.</p>
                            </div>
                            <div className="col-lg-5">
                                <img src={Stability}/>
                                <h4>Stability</h4>
                                <p>Services and solutions that stand the test of time.</p>
                            </div>
                            <div className="col-lg-5">
                                <img src={Scalability}/>
                                <h4>Scalability</h4>
                                <p>Scalable solutions to match adapting needs.</p>
                            </div>
                            <div className=" text-center col-lg-8">
                                <img src={Dedication}/>
                                <h4>Dedication</h4>
                                <p>For lasting partnerships.</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
}
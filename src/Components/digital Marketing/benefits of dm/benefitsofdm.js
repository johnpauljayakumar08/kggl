import React from "react";
import icon from '../Assesst/495435-PHOAPO-981-02.png'  
import './benefitsofdm.css'
export function Benefitsofdm(){
    return(
        <>
            <div className="container-fluid pt-5 ">
                <h3 className="text-center txtbld">Explore the Numerous Benefits of Digital Marketing</h3>
                <div className="container p-5 ">
                    <div className="d-flex flex-wrap justify-content-around ">
                        <div className="col-lg-5 col-12 bgcolordm p-3 mt-4 boderradiusdm" data-aos="flip-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                            <div className="borderbuttondm d-flex  align-items-center">
                                <img src={icon} className="col-lg-2 col-2" />
                                <h5 className="text-white mt-2">Save time, money and resources</h5>   
                            </div>
                            <div className="borderbuttondm  d-flex  align-items-center">
                                <img src={icon} className="col-lg-2 col-2"/>
                                <h5 className="text-white  mt-2">Build your brand across online channels</h5>
                            </div>
                            <div className="borderbuttondm d-flex  align-items-center">
                                <img src={icon} className="col-lg-2 col-2"/>
                                <h5 className="text-white  mt-2">Acquire huge ROI</h5>
                            </div>
                            <div className="borderbuttondm d-flex  align-items-center">
                                <img src={icon} className="col-lg-2 col-2"/>
                                <h5 className="text-white  mt-2 ">Maximize various customer touch points</h5>
                            </div>
                            <div className="borderbuttondm d-flex  align-items-center">
                                <img src={icon} className="col-lg-2 col-2"/>
                                <h5 className="text-white mt-2">Track your campaign results</h5>
                            </div>
                        </div>
                        <div className="col-lg-2"></div>
                        <div className="col-lg-5 bgcolordm p-3 mt-4 boderradiusdm" data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                            <div className="borderbuttondm d-flex  align-items-center">
                                <img src={icon} className="col-lg-2 col-2"/>
                                <h5 className="text-white mt-2 ">Promote greater consumer engagement</h5>
                            </div>
                            <div className="borderbuttondm d-flex  align-items-center">
                                <img src={icon} className="col-lg-2 col-2"/>
                                <h5 className="text-white mt-2 ">Adjust your strategies based on analytics</h5>
                            </div>
                            <div className="borderbuttondm d-flex  align-items-center ">
                                <img src={icon} className="col-lg-2 col-2"/>
                                <h5 className="text-white mt-2  ">Drive profitable long-term growth</h5>
                            </div>
                            <div className="borderbuttondm d-flex  align-items-center">
                                <img src={icon} className="col-lg-2 col-2"/>
                                <h5 className="text-white mt-2 ">Leverage precise audience targeting</h5>
                            </div>
                            <div className="borderbuttondm d-flex  align-items-center">
                                <img src={icon} className="col-lg-2 col-2"/>
                                <h5 className="text-white mt-2 ">Improve your conversion rates</h5>
                            </div>
                        </div>  
                    </div>
                </div>

            </div>
        </>
    );
}
import React from "react";
import question from '../Assesst/Animation - 1712639687114.gif'
import './whydigitalmarketing.css'
import whydm from '../Assesst/Mask group.png'
export function Whydm(){
    return(
        <>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-lg-6" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <div className="d-flex">
                            <h3 className="col-lg-8 mt-3 ms-5 txtbld">Why Digital Marketing is Essential for Your Business</h3>
                            <img src={question} className="col-lg-2"/>
                        </div>
                        <div className="ms-lg-5 ms-3 mt-4 p-4 bgcolorpara mb-4">
                            <p>The online marketing industry is experiencing unprecedented growth, with digital media ad revenue in India reaching approximately 576 billion Indian rupees in 2023, as reported by Statista. India's total advertising revenue surpassed one trillion Indian rupees that same year, solidifying its position as one of the largest advertising markets globally in terms of ad spending. As more companies allocate their resources to online marketing, sticking to traditional advertising tactics is no longer sufficient to attract customers.</p>
                            <p>To maximize your sales and establish a strong digital presence, it's essential to embrace value-driven internet marketing services.</p>
                        </div>
                    </div>
                    <div className="col-lg-5" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <img src={whydm} className="col-lg-8" alt="digital marketing company"/>
                    </div>
                </div>
            </div>
        </>
    );
}
import React from "react";
import question from '../Assesst/Animation - 1712639687114.gif'
import whygl from '../Assesst/Rectangle 11.png'
export function Whygldm(){
    return(
        <>
            <div className="container-fluid mt-5">
                <div className="row">

                    <div className="col-lg-5 ms-lg-5 mx-auto " data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <img src={whygl} className="col-lg-8 ms-lg-5 ms-5 mb-5 mx-auto col-8" alt="best digital marketing agency"/>
                    </div>
                    <div className="col-lg-6 col-12" data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <div className="d-flex">
                            <img src={question} className="col-lg-2 col-2"/>
                            <h3 className="col-lg-8 text-center txtbld">Why KG Genius Labs?</h3>
                        </div>
                        <div className="col-lg-10 col-10 mt-4 p-4 bgcolorpara ms-4 ">
                            <p>The KGGL Internet Marketing Team specializes in delivering goal-oriented advertising solutions tailored to your business objectives. With a primary focus on enhancing client retention rates and maximizing conversion opportunities, we are committed to driving your brand's digital success.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
import React,{useEffect} from "react";
import './datadriven.css'
import centerimg from '../Assesst/Group 7.png'
import AOS from "aos";
import "aos/dist/aos.css";
export function Datadriven(){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return(
        <>
            <div className="container-fluid pt-5 mt-5 pb-5">
                <h3 className="text-center"><b>Data-Driven Digital Marketing Solutions</b></h3>
                <p className="text-center container">In the domain of achieving business success, research and data are crucial factors. KG -Genius Labs results-oriented digital marketing services ensure you deliver the right message, at the right time, through the right platform. Our approach begins with a comprehensive analysis of your brand's strengths, weaknesses, opportunities and threats (SWOT), enabling us to develop up-to-date metrics and actionable insights tailored to your specific needs.</p>
            </div>
            <div className="container">
                <div className="d-flex flex-wrap justify-content-around">

                    <div className="col-lg-4 p-4 col-12 mb-3 bgcolordata" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="800">
                        <p className="text-center">Industry Experts</p>
                    </div>
                    <div className="col-lg-4 p-4 col-12 bgcolordata mb-3" data-aos="zoom-in" data-aos-offset="250" data-aos-easing="ease-in-sine" data-aos-duration="800">
                        <p className="text-center">Custom Digital Marketing Framework</p>
                    </div>
                </div>

            </div>
            <div className="container p-4">
                <div className="d-flex flex-wrap justify-content-around ">

                    <div className="col-lg-4 h-25 col-12 mt-5 p-4 bgcolordata" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="800">
                        <p className="text-center">Campaign Monitoring and Evaluation</p>
                    </div>
                    <div className="col-lg-4 d-none d-lg-block">
                        <img src={centerimg} className="col-lg-8 ms-5" data-aos="zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="500" alt="online marketing"/>
                    </div>
                    <div className="col-lg-3 col-12 p-4 h-25 mt-5 bgcolordata" data-aos="zoom-in" data-aos-offset="250" data-aos-easing="ease-in-sine" data-aos-duration="800">
                        <p className="text-center">Omnichannel Personalization</p>
                    </div>
                </div>
            </div>    
        </>
    );
}
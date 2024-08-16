import React, { useEffect } from "react";
import './Carrous.css'
// import centerimg from '../Assesst/Group 7.png'
import centerim from "../../SAP/Asset/character-illustration-people-with-technology-icons_53876-66102.avif";
import AOS from "aos";
import "aos/dist/aos.css";
function Datadriven() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
            <div className="container-fluid pt-5 mt-5 pb-5 circlecard">
                <h3 className="text-center"><b>Why KG Genius Labs?</b></h3>
            </div>

            <div className="container">
                <div className="d-flex flex-wrap justify-content-center ">
                    <div className="col-lg-4 p-4 col-12 mb-3 bgsap" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="800">
                        <h3 className="text-center">Dedicated Team Work</h3>
                        <p className="text-center">Choose our expert SAP team for tailored solutions and dedicated support, ensuring your success.</p>
                    </div>

                </div>

            </div>
            {/* second */}
            <div className="container">
                <div className="d-flex flex-wrap justify-content-around">
                    <div className="col-lg-4 p-4 col-12 mb-3 bgsap" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="800">
                        <h3 className="text-center">Customer Focus</h3>
                        <p className="text-center">Opt for our top-tier SAP services for tailored solutions and expert support. Trust us to navigate the market and maximize your business.</p>
                    </div>
                    <div className="col-lg-4 p-4 col-12 bgsap" data-aos="zoom-in" data-aos-offset="250" data-aos-easing="ease-in-sine" data-aos-duration="800">
                        <h3 className="text-center">Experienced Consultants</h3>
                        <p className="text-center">Choose our top SAP consultants for seamless integration and high ROI. Get tailored solutions and expert support for business success.</p>
                    </div>
                </div>
            </div>

            <div className="container p-4">
                <div className="d-flex flex-wrap justify-content-around ">
                    <div className="col-lg-4 h-25 col-12 mb-5 p-4 bgsap" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="800">
                        <h3 className="text-center">Timely Delivery</h3>
                        <p className="text-center">Opt for our swift, top-notch SAP services. We prioritize deadlines, ensuring smooth implementations or upgrades. Count on our efficient processes and expert project management for high-quality results</p>
                    </div>
                    <div className="col-lg-4 d-none d-lg-block">
                        <img src={centerim} className="col-lg-8 ms-5" data-aos="zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="500" alt="Our Services" />
                    </div>
                    <div className="col-lg-4 col-12 p-4 h-25 mb-5 bgsap" data-aos="zoom-in" data-aos-offset="250" data-aos-easing="ease-in-sine" data-aos-duration="800">
                        <h3 className="text-center">Reliability</h3>
                        <p className="text-center">We ensure system reliability and uptime with our proven SAP solutions. Our expert team offers fast support, proactive maintenance and tailored innovative solutions to meet your needs.</p>
                    </div>
                </div>

            </div>

        </>
    );
}

export default Datadriven
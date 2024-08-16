import React,{useEffect} from "react";
// import './services.css'
import tic from '../Assest/Group 38.png'
import { ITandites } from "./itandites";
import { Ecommerce } from './E-Commerce';
import { Intelligent } from './Intelligent Platform';
import { Corportetraining } from './Corporate Training';
import { Ktag } from './K-TAG.';
import { Kpo } from './kpo';
import manpower from '../Assest/Services/2-Manpower-Consultancy.png'
import itservices from '../Assest/Services/4-IT-Services.png'
import digitalmarketing from '../Assest/Services/5-digital-marketing.png' 
import { Link } from "react-router-dom";
export function Services(){
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when component mounts
      }, []);
    return(
        <>
        <section  class="section overflow-visible bgcolors pb-5">
                    <div class="w-layout-grid cards-1-grid without-padding-bottom-phone  bgcolors" id="servicepage">
                        <div id="w-node-c7174560-254e-0043-5d8f-a83f594d9ec3-3d9acecd" class="cards-1-sticky-block  bgcolors">
                            <div class="cards-1-about-content ">
                                <h3 class="heading is-regular-title text-white credtext">Our Services</h3>
                                <p class="card-1-texts  text-bold text-white">We are a team of technology enthusiasts dedicated to providing outstanding digital solutions that are in harmony with your business objectives.</p>
                                <div class="horizontal-flex with-gap-1em">
                                    {/* <a data-w-id="354ce9a3-4fc9-d308-ac97-e434fca68df7" href="/layouts-1/about-1" class="main-button w-inline-block">
                                        <div class="button-text">About us</div>
                                        <div class="button-icon-block">
                                            <img src="https://assets.website-files.com/643d67b83069da05c59ace0c/64524a314e7c9ff8f57a27ee_arrow-right-v1-white.svg" loading="lazy" alt="" class="button-icon-image"/>
                                        </div>
                                        <div class="button-bg-animation"></div>
                                    </a> */}
                                    {/* <a data-w-id="1fbcd7df-944e-7197-41b6-a0515299960d" href="/general-layouts/team" class="main-button is-transparent w-inline-block">
                                        <div class="button-text">Meet the team</div>
                                        <div class="button-icon-block is-transparent">
                                            <img src="https://assets.website-files.com/643d67b83069da05c59ace0c/645e9f69a67b560f9e859918_arrow-right-v1%20(1).svg" loading="lazy" alt="" class="button-icon-image"/>
                                        </div>
                                        <div class="button-bg-animation is-transparent"></div>
                                    </a> */}
                                </div>
                            </div>
                            <div id="w-node-c7174560-254e-0043-5d8f-a83f594d9ecc-3d9acecd" class="cards-1-bg">
                                {/* <div class="dots">
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                    <div class="dot">
                                        <div class="dot-point is-2nd"></div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div id="w-node-c7174560-254e-0043-5d8f-a83f594d9ece-3d9acecd" class="cards-1-content-block">
                            <div class="cards-1-items-wrap">
                                <div class="while-scrolling-effect-6rem" id="E-Commerce">
                                    <div class="cards-6-item">
                                        <div class="card-6-icon-block">
                                            <img src={manpower} loading="lazy" alt="" class="icon is-large"/>
                                        </div>
                                        <h2 class="heading is-extra-small-title credtext">Manpower Consultancy for Healthcare</h2>
                                        <p class="">Experience the power of global healthcare recruitment with our trusted manpower consultancy services. <br/>Our dedicated team works tirelessly to match the right candidates with the right opportunities, ensuring mutual success and satisfaction for healthcare organisations and professionals alike. </p>
                                        <Link to="/healthcare" className="text-primary">View More</Link>
                                    </div>
                                </div>
                                <div class="while-scrolling-effect-6rem" id="DM">
                                    <div class="cards-6-item is-last">
                                        <div class="card-6-icon-block">
                                            <img src={digitalmarketing} loading="lazy" alt="" class="icon is-large"/>
                                        </div>
                                        <h2 class="heading is-extra-small-title credtext">Digital Marketing</h2>
                                        <p class="card-6-text-2">We follow a systematic approach to ensure that each online marketing effort generates profitable results. We utilise our proficiency in search engine optimization (SEO) and marketing tactics to achieve measurable outcomes.</p>
                                        <Link to="/digital marketing" className="text-white">View More</Link>
                                    </div>
                                </div>
                                <div class="while-scrolling-effect-6rem" id="Intelligent">
                                    <div class="cards-6-item">
                                        <div class="card-6-icon-block">
                                            <img src={itservices} loading="lazy" alt="" class="icon is-large"/>
                                        </div>
                                        <h2 class="heading is-extra-small-title credtext">SAP</h2>
                                        <p class="card-6-text-2">SAP Automation makes your business digitally powerful. Our innovative solutions automate operations, boost productivity and boost growth. With SAP’s innovative technology, we help businesses optimize processes, gain actionable insights and stay ahead in today’s dynamic market. SAP Automation boosts efficiency, agility and scalability, helping businesses thrive in the digital age. SAP Automation can transform your business for success.</p>
                                        <Link to="/sap" className="text-primary">View More</Link>
                                    </div>
                                </div>
                                <div class="while-scrolling-effect-6rem" id="DM">
                                    <div class="cards-6-item is-last">
                                        <div class="card-6-icon-block">
                                            <img src={digitalmarketing} loading="lazy" alt="" class="icon is-large"/>
                                        </div>
                                        <h2 class="heading is-extra-small-title credtext">IT Services and Support</h2>
                                        <p class="card-6-text-2">We provide dynamic IT service and support, offering a wide range of solutions including Business Process Outsourcing (BPO), Knowledge Process Outsourcing (KPO), Development Services and SAP consulting. With a customer-centric approach and a focus on delivering value-added solutions, we empower businesses to optimise their operations, streamline workflows and drive digital transformation.</p>
                                        <Link to="/ITServices" className="text-white">View More</Link>
                                    </div>
                                </div>
                                
                                
                                
                            </div>
                        </div>
                    </div>
                </section>
        </>
    );
}
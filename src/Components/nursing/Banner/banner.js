import React from "react";
import './banner.css'
import Typewriter from 'typewriter-effect';
import { Link as Sclink } from "react-scroll";
export function Bannernursing(){
    return(
        <>
            <div className="container-fluid backgrounddnursing pt-5" id="home">
                <div className="row">
                    <div className="col-lg-12 p-5">
                        <h4 className="text-white">Dreaming of Nursing Abroad?</h4>
                        <h1 className=" col-lg-5 text-bold  text-white"> <Typewriter
                            options={{
                                strings: ['Explore Exciting Careers Abroad with Us','Bridging Borders, Building Healthcare Futures','Empowering Dreams, Transforming Lives in Healthcare'],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 0.5,
                            }}
                            />
                        </h1>
                        <h5 className=" text-white col-lg-6">Empowering healthcare excellence worldwide, we specialise in matching talented professionals with prestigious positions overseas</h5>   
                    </div>

                </div>
                <div className="d-flex flex-wrap">

                    <Sclink activeClass="active" to="form" spy={true} smooth={true} duration={500} className="nav-link active text-white" aria-current="page"><button className="btn  btn-primary btn-lg ms-5">Get Started</button></Sclink>
                    <Sclink activeClass="active" to="form" spy={true} smooth={true} duration={500} className="nav-link active text-white" aria-current="page"><button className="btn  text-white bor  btn-lg ms-5">Check Your Eligibility</button></Sclink>
                </div>
                <div id="about"></div>
            </div>
        </>
    );
}
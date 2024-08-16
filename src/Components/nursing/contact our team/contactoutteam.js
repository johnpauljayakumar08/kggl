import { faEnvelope, faGraduationCap, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import BH from '../Assest/Kamal-profile.png'
// import BDE from '../Assest/Vivin-Richard.png'
import {Link as Sclink} from 'react-scroll'
export function Contactourteam(){
    return(
        <>
        <div className="container-fluid backgroundapa" id="footer">
            <h3 className="text-center mb-5 pt-5"><b>Contact Our Team</b></h3>
            <div className="container-fluid ">
                <div className="row  d-flex flex-column justify-content-between  ">

                    <div className="col-sm-12 col-lg-7 row boder mb-5 ms-1 bg-white ">
                        <div className="col-lg-5">
                            <img src={BH} alt="Business Head" />
                        </div>
                        <div className="col-sm-12 col-lg-7">
                          <h4 className="mt-4"><b>Kamal Vignesh</b></h4>
                          <p><FontAwesomeIcon icon={faGraduationCap} className="m-0 mx-lg-1"/>Business Head</p>
                          <p><FontAwesomeIcon icon={faPhone} className="m-0 mx-lg-1"/>86954 33663</p>
                          <p><FontAwesomeIcon icon={faEnvelope} className="m-0 mx-lg-1"/>kamalvignesh.v@kggeniuslabs.com</p>
                          <Sclink activeClass="active" to="form" spy={true} smooth={true} duration={500} className="nav-link active text-white" aria-current="page"><button className="btn btn-primary mb-4">Get appointment</button></Sclink>
                        </div>
                    </div>
                   
                </div>
               
            </div>
        </div>
            
        </>
    );
}
import React from "react";
import './service.css'
import card1 from '../Assest/Mask group.png'
import card2 from '../Assest/card2.png'
import card3 from '../Assest/card3.png'
import card4 from '../Assest/s4.png'
import card5 from '../Assest/s5.png'
import card6 from '../Assest/s6.png'
import services from '../json/services.json'
import overseas from '../Assest/Services/1-Overseas-Recruitment.png'
import certificate from '../Assest/Services/2-Licensing-Process.png'
import training from '../Assest/Services/3-Training.png'
export function Servicenursing(){
    return(
        <>
           
            <section class="service-2" id="services">
                <div class="container">
                    <h3 className="text-center mb-5"><b>Our Process</b></h3>
                    <div class="row">

                        <div class="col-lg-4 col-sm-6">
                            <div class="servicebox-2">
                                <div class="service-content">
                                    <div class="">
                                        <i class="flaticon-24-hours-phone-service"><img src={overseas}/></i>

                                        <span class="flaticon-24-hours-phone-service"></span>
                                    </div>
                                    <h4 class="title fw-bold">Overseas Recruitment</h4>
                                    <div class="text">
                                        Candidates will be placed abroad according to their eligibility
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-sm-6">
                            <div class="servicebox-2">
                                <div class="service-content">
                                    <div class="">
                                        <i class="flaticon-research"><img src={certificate}/></i>
                                        <span class="flaticon-research"></span>
                                    </div>
                                    <h4 class="title fw-bold">Licensing Process</h4>
                                    <div class="text">
                                        Data flow completion , prometric exam completion, eligibility 
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-sm-6">
                            <div class="servicebox-2">
                                <div class="service-content">
                                <div class="">
                                        <i class="flaticon-statistics"><img src={training}/></i>
                                        <span class="flaticon-statistics"></span>
                                </div>
                                <h4 class="title fw-bold">Training </h4>
                                    <div class="text">
                                        Nursing training for prometric exam<br/><br/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    
                     </div> 
             </div> 
            </section> 

        </>
    );
}
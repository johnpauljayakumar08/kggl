import React from "react";
import './services.css'
import tic from '../Assest/Group 38.png'
export function Kpo(){
    return(
        <>

             <div className="container-fluid bg-success p-5 zindex">
                <div className="col-lg-6 p-5" >
                    <h2 className="m-5 text-white">KPO</h2>
                    <p className="text-white styl">We provide a suite of KPO services from product listing, data backup and marketplace integration to competitor analysis and conversion rate optimization.</p>
                    <ul className="text-white">
                            <li className="mb-3"><img src={tic}/>Content Marketing  and Graphic Designer</li>
                            <li className="mb-3"><img src={tic}/>Conversion Rate Optimization</li>
                            <li className="mb-3"><img src={tic}/>Data Backup and Recovery</li>
                            <li className="mb-3"><img src={tic}/>Product Listing and Optimization</li>
                            <li className="mb-3"><img src={tic}/>Marketplace Integration</li>
                            <li className="mb-3"><img src={tic}/>Customer Support Services</li>
                            <li className="mb-3"><img src={tic}/>Competitor Analysis</li>
                            <li className="mb-3"><img src={tic}/>Content Research Development</li>
                        </ul>
                </div>
            </div>
        </>
    );
}
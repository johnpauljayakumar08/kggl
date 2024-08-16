import React from "react";
import './services.css'
import tic from '../Assest/Group 38.png'
export function ITandites(){
    return(
        <>
            
            <div className="container-fluid bgcolorit p-5 posist">
                <div className="col-lg-6 p-5" >
                    <h2 className="m-5 text-white">IT and ITeS</h2>
                    <p className="text-white styl">We specialize in delivering comprehensive IT/ITES services including automation consultancy, application development and maintenance, ERP and extended office operations, all designed to optimize your business operations.</p>
                    <ul className="text-white">

                            <li className="mb-5"><img src={tic}/>Automation Consultancy Services</li>
                            <li  className="mb-5"><img src={tic}/>Customized Application Development and Maintenance</li>
                            <li  className="mb-5"><img src={tic}/>Enterprise Resource Planning</li>
                            <li><img src={tic}/>Extended Office Ops </li>
                        </ul>
                </div>
            </div>
        </>
    );
}
import React from "react";
import './services.css'
import tic from '../Assest/Group 38.png'
export function Ecommerce(){
    return(
        <>
             <div className="container-fluid bg-primary p-5 posist">
                <div className="col-lg-6 p-5" >
                    <h2 className="m-5 text-white">E-Commerce</h2>
                    <p className="styl text-white">We take care of everything from account and inventory management to digital marketing, store creation and analytics for your online ventures.</p>
                    <ul className="text-white">
                        <li className="mb-5"><img src={tic}/>E-Commerce Solutions</li>
                        <li><img src={tic}/>Integrated Branding and Digital Solutions</li>

                        </ul>
                </div>
            </div>
        </>
    );
}
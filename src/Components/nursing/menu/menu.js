import React from "react";
import './menu.css'
import logo from '../Assest/logowhitesmaill.png';
import { Link as Sclink } from "react-scroll";
import { Link } from "react-router-dom";
export function Menunursing(){
    return(
        <>
            <nav class="navbar navbar-expand-lg bgcolor navmain">
                <div class="container-fluid">
                    <Link class="navbar-brand col-lg-5 col-8" to="/">
                        <img src={logo} className="siz1"/>
                    </Link>
                    <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon "></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item ms-4">
                        {/* <Sclink activeClass="active" to="home" spy={true} smooth={true} duration={500} className="nav-link active text-white" aria-current="page">Home</Sclink> */}
                        <Link to="/" className="nav-link active text-white">Home</Link>
                        </li>
                        <li class="nav-item ms-4">
                        <Sclink to="about" spy={true} smooth={true} duration={500} className="nav-link active text-white" aria-current="page">About Us</Sclink>
                        {/* <a class="nav-link text-white " href="#">About US</a> */}
                        </li>
                        {/* <li class="nav-item ms-4 ">
                        <Sclink to="wcu" spy={true} smooth={true} duration={500} className="nav-link active text-white" aria-current="page">Our Unique Edge</Sclink>
                        <a class="nav-link text-white " href="#">About US</a>
                        </li> */}
                        <li className="nav-item dropdown ms-4">
                                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link to="/healthcare" className="dropdown-item">Manpower Consultancy for Healthcare</Link></li>
                                    <li><Link to="/digitalmarketing" className="dropdown-item">Digital Marketing</Link></li>
                                    <li><Link to="/sap" className="dropdown-item">SAP</Link></li>
                                    <li><Link to="/itservices" className="dropdown-item">IT Services and Support</Link></li>
                                </ul>
                            </li>
                        <li class="nav-item ms-4">
                        <Sclink to="services" spy={true} smooth={true} duration={500} className="nav-link active text-white" aria-current="page">Our Process</Sclink>

                        
                        </li>
                       
                        
                        {/* <li class="nav-item me-5">
                        <Sclink to="flow" spy={true} smooth={true} duration={500} className="nav-link text-white"   href="#">Flow</Sclink>
                        </li> */}
                        <li class="nav-item me-5 ms-4">
                        <Sclink to="footer" spy={true} smooth={true} duration={500} className="nav-link text-white " href="#">Contact Us</Sclink>
                        </li>
                    </ul>
                    
                    </div>
                </div>
            </nav>
        </>
    );
}
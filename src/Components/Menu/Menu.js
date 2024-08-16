import React from "react";
import './menu.css';
import logo from '../Assest/GL.png';
import { Link as Sclink } from "react-scroll";
import { Link } from "react-router-dom";

export function Menu() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bgcolor navmain">
                <div className="container-fluid">
                    <Link className="navbar-brand col-lg-4" to="/">
                        <img src={logo} className="siz" />
                    </Link>
                    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item ms-4">
                                <Sclink activeClass="active" to="home" spy={true} smooth={true} duration={500} className="nav-link active text-white" aria-current="page">Home</Sclink>
                            </li>
                            <li className="nav-item ms-4">
                                <Sclink to="aboutpage" spy={true} smooth={true} duration={500} className="nav-link active text-white" aria-current="page">About Us</Sclink>
                            </li>
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
                            <li className="nav-item me-5 ms-4">
                                <Sclink to="footer" spy={true} smooth={true} duration={500} className="nav-link text-white">Contact Us</Sclink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

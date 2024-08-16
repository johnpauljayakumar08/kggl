import React from 'react';
// import BIRDS from 'vanta/dist/vanta.birds.min';
import './banner.css';
import kggl from '../Assest/Bannernew.png';
import healthcare from '../Assest/DeWatermark 7.png';
import digitalmarketing from '../Assest/image 25.png';
import it from "../Assest/Group 270989677.png";
import newservice from '../Assest/Why Us/sapcarousel.png'; // New image import
import { Link } from "react-router-dom";

export function Banner() {
    // const vantaRef = useRef(null);
    // useEffect(() => {
    //     // AOS.init();
    //     // AOS.refresh();
    //     const vantaEffect = BIRDS({
    //         el: vantaRef.current,
    //         // backgroundColor: 'white'
            
    //       });
      
    //       return () => {
    //         if (vantaEffect) vantaEffect.destroy();
    //       };
    //   }, []);
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button> {/* New button */}
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000" >
                        <img src={kggl} className="d-block w-100 textback" alt="IT Services" />
                        <div className="carousel-caption">
                            <h1 className="d-none d-md-block"><span>Unlock </span> the Full Potential of Your <span>Business</span><br />with KG Genius Labs</h1>
                            <p className="d-block d-md-none text-center"><span>Unlock </span> the full potential of your <span>business</span><br />with KG Genius Labs</p>
                            <h5 className="d-none d-md-block">An initiative supported by KGiSL to foster the next wave of inspiring business achievements.</h5>
                            {/* <button className="btn btn-primary ms-auto">Explore more</button> */}
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="10000">
                        <img src={healthcare} className="d-block w-100" alt="Global Healthcare" />
                        <div className="carousel-caption float-end">
                            <div className="float-end me-4">
                                <h1>Step into Global Healthcare </h1>
                                <h5>Globalize your nursing career with overseas opportunities</h5><br />
                                <Link to='/healthcare'><button className="btn btn-primary">Explore more</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={digitalmarketing} className="d-block w-100" alt="Digital Marketing" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Boost Your Online Presence</h1>
                            <h5>With KGGL Digital Marketing Services</h5>
                            <Link to='/digital marketing'><button className="btn btn-primary ms-auto">Explore more</button></Link>
                        </div>
                        <div className="carousel-caption d-block d-md-none">
                            <p className="text-center">Boost Your Online Presence</p>
                            <p className="text-center">With KGGL Digital Marketing Services</p>
                            <Link to='/digital marketing'><button className="btn btn-primary ms-auto">Explore more</button></Link>
                        </div>
                    </div>
                    <div className="carousel-item"> {/* New slide */}
                        <img src={newservice} className="d-block w-100" alt="SAP" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>SAP Excellence</h1>
                            <h5>Your Path to Business Success</h5>
                            <Link to='/sap'><button className="btn btn-primary ms-auto">Explore more</button></Link>
                        </div>
                        <div className="carousel-caption d-block d-md-none">
                            <p className="text-center">SAP Excellence</p>
                            <p className="text-center">Your Path to Business Success</p>
                            <Link to='/sap'><button className="btn btn-primary ms-auto">Explore more</button></Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={it} className="d-block w-100" alt="Digital Marketing" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Optimize Your Operations with</h1>
                            <h5>IT Solutions</h5>
                            <Link to='/ITServices'><button className="btn btn-primary ms-auto">Explore more</button></Link>
                        </div>
                        <div className="carousel-caption d-block d-md-none">
                            <p className="text-center">Optimize Your Operations with</p>
                            <p className="text-center">IT Solutions</p>
                            <Link to='/ITServices'><button className="btn btn-primary ms-auto">Explore more</button></Link>
                        </div>
                    </div>


                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

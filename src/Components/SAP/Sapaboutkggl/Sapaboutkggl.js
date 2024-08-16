// import React from "react";
// import { Link } from "react-router-dom";

// function Sapaboutkggl() {
//     return (
//         <div className="d-flex justify-content-center mt-5">
//             <div id="carouselExampleCaptions" className="carousel slide carousel-card" data-bs-ride="carousel">
//                 <div className="carousel-indicators">
//                     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//                     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
//                     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
//                     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
//                     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
//                 </div>
//                 <div className="carousel-inner">
//                     <div className="carousel-item active" data-bs-interval="10000">
//                         <div className="row d-flex justify-content-evenly">
//                             <div className="col-12 col-md-6 mb-3">
//                                 <div className="card w-50 m-auto">
//                                     <div className="card-body rounded-5">

//                                         <p className="card-text d-none d-md-block">We ensure system reliability and uptime with our proven SAP solutions. Our expert team offers fast support, proactive maintenance and tailored innovative solutions to meet your needs.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-12 col-md-6 mb-3">
//                                 <div className="card w-50 m-auto">
//                                     <div className="card-body rounded-5">

//                                         <p className="card-text">Opt for our top-tier SAP services for tailored solutions and expert support. Trust us to navigate the market and maximize your business.</p>
//                                         <Link to='/healthcare'><button className="btn btn-primary">Explore more</button></Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="carousel-item" data-bs-interval="10000">
//                         <div className="row">
//                             <div className="col-12 col-md-6 mb-3">
//                                 <div className="card w-50 m-auto">
                                   
//                                     <div className="card-body rounded-5">
//                                         <p className="card-text">Choose our top SAP consultants for seamless integration and high ROI. Get tailored solutions and expert support for business success.</p>
//                                         <Link to='/digital marketing'><button className="btn btn-primary">Explore more</button></Link>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-12 col-md-6 mb-3">
//                                 <div className="card w-50 m-auto">
                                 
//                                     <div className="card-body rounded-5"> 
//                                         <p className="card-text">Opt for our swift, top-notch SAP services. We prioritize deadlines, ensuring smooth implementations or upgrades. Count on our efficient processes and expert project management for high-quality results</p>
//                                         <Link to='/newservice'><button className="btn btn-primary">Explore more</button></Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
//                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Previous</span>
//                 </button>
//                 <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
//                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Next</span>
//                 </button>
//             </div>
//         </div>
//     );
// }


// export default Sapaboutkggl


import React from "react";
import { Link } from "react-router-dom";

function Sapaboutkggl() {
    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-center">
                <div id="carouselExampleCaptions" className="carousel slide carousel-card" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {/* Slide 1 */}
                        <div className="carousel-item active" data-bs-interval="10000">
                            <div className="row d-flex justify-content-center">
                                {/* Card 1 */}
                                <div className="col-sm-12 col-md-6 mb-3">
                                    <div className="card w-50 m-auto">
                                        <div className="card-body rounded-5">
                                            <p className="card-text d-none d-md-block">We ensure system reliability and uptime with our proven SAP solutions. Our expert team offers fast support, proactive maintenance and tailored innovative solutions to meet your needs.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Card 2 */}
                                <div className="col-sm-12 col-md-6 mb-3">
                                    <div className="card w-50 m-auto">
                                        <div className="card-body rounded-5">
                                            <p className="card-text">Opt for our top-tier SAP services for tailored solutions and expert support. Trust us to navigate the market and maximize your business.</p>
                                            <Link to='/healthcare' className="btn btn-primary">Explore more</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Slide 2 */}
                        <div className="carousel-item" data-bs-interval="10000">
                            <div className="row d-flex justify-content-center">
                                {/* Card 3 */}
                                <div className="col-sm-12 col-md-6 mb-3">
                                    <div className="card w-50 m-auto">
                                        <div className="card-body rounded-5">
                                            <p className="card-text">Choose our top SAP consultants for seamless integration and high ROI. Get tailored solutions and expert support for business success.</p>
                                            <Link to='/digital marketing' className="btn btn-primary">Explore more</Link>
                                        </div>
                                    </div>
                                </div>
                                {/* Card 4 */}
                                <div className="col-sm-12 col-md-6 mb-3">
                                    <div className="card w-50 m-auto">
                                        <div className="card-body rounded-5"> 
                                            <p className="card-text">Opt for our swift, top-notch SAP services. We prioritize deadlines, ensuring smooth implementations or upgrades. Count on our efficient processes and expert project management for high-quality results</p>
                                            <Link to='/newservice' className="btn btn-primary">Explore more</Link>
                                        </div>
                                    </div>
                                </div>
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
            </div>
        </div>
    );
}

export default Sapaboutkggl;                                                                                                                                                                                      

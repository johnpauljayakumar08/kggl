

import React from 'react';
import Slider from "react-slick";
import "./Servicesit.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import servicebg from "../Assetit/Frame 4.png";

function Servicesit() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='container-fluid bannerit' id='servicesitpage'>
      <div className='row text-center p-1'>
        <div className='d-flex flex-column justify-content-center align-items-center'></div>
        <h1 className='text-light pt-4'>Our Expertise</h1>
      </div>
      <div className='container'>
        <div className='row pt-5 pb-5'>
          <Slider {...settings}>
            <div className='col'>
              <div className="servicecard m-1 p-4">
                <h3 className="card-heading">UI/UX Design</h3>
                <p className="card-text">We specialize in creating intuitive and engaging user interfaces that enhance the digital experiences of our clients customers, driving higher engagement and satisfaction.</p>
              </div>
            </div>
            <div className='col'>
              <div className="servicecard m-1 p-4">
                <h3 className="card-heading">Web Development</h3>
                <p className="card-text">Our team of skilled developers leverages the latest technologies and frameworks to build responsive and scalable websites that deliver exceptional performance and user experience across devices.</p>
              </div>
            </div>
            <div className='col'>
              <div className="servicecard m-1 p-4">
                <h3 className="card-heading">SAP Solutions</h3>
                <p className="card-text">As a trusted SAP partner, we provide comprehensive SAP solutions tailored to the unique requirements of businesses, helping them streamline operations, optimise processes and achieve their strategic objectives.</p>
              </div>
            </div>
            <div className='col'>
              <div className="servicecard m-1 p-4">
                <h3 className="card-heading text-center">KPO</h3>
                <h6 className='text-center'>Knowledge Process Outsourcing</h6>
                <p className="card-text">We offer KPO services that enable businesses to leverage our expertise in data analysis, research and other knowledge-intensive tasks to gain valuable insights and make informed decisions.</p>
              </div>
            </div>
            <div className='col'>
              <div className="servicecard m-1 p-4">
                <h3 className="card-heading text-center">BPO</h3>
                <h6 className='text-center'>Business Process Outsourcing</h6>
                <p className="card-text">Our BPO services encompass a wide range of back-office functions, including customer support, data entry and administrative tasks, allowing businesses to focus on their core competencies while we handle the rest.</p>
              </div>
            </div>
            <div className='col'>
              <div className="servicecard m-1 p-4">
                <h3 className="card-heading">Digital Marketing</h3>
                <p className="card-text"> With our digital marketing expertise, we help companies grow their online presence, connect with their audience and reach their goals. Our team delivers tailored solutions to boost brand visibility, drive traffic and increase conversions.</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Servicesit;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#0579C6", borderRadius: "50%", position: "absolute", bottom: "10px", right: "50%", transform: "translateX(50%)" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#0579C6", borderRadius: "50%", position: "absolute", bottom: "10px", left: "50%", transform: "translateX(-50%)" }}
      onClick={onClick}
    />
  );
}




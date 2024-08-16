import React from 'react'
import "./Solution.css";
import im1 from "../Asset/Cloud1.png";
import im2 from "../Asset/Cloud2.png";
import im3 from "../Asset/Cloud3.png";
import im4 from "../Asset/Cloud4.png";
import "aos/dist/aos.css";
function Solutions(){
  return (
    <div className='container-fluid text-center'>
        <h3 className='mt-5'><b>Our Sap Solutions</b></h3>
        <p className='text-center'>Business Ready Solutions</p>
        <div className='row'>
            <div className='col'>
              <img src={im1} className='part1' alt='Rise with SAP' data-aos="fade-up"
              data-aos-duration="3000"/>
            <p className='text-center'>Rise with SAP</p>
            </div>
            <div className='col'>
            <img src={im2} className='part2' alt='SAP S/4 Hana' data-aos="fade-up"
            data-aos-duration="3000"/>
             <p className='text-center'>SAP S/4 Hana</p>   
            </div>
            <div className='col'>
            <img src={im3} className='part1' alt='SAP BTP' data-aos="fade-up"
            data-aos-duration="3000"/>
              <p className='text-center'>SAP BTP</p>  
            </div>
            <div className='col'>
            <img src={im4} className='part2' alt='SAP Successfactors' data-aos="fade-up"
              data-aos-duration="3000"/>
              <p className='text-center'>SAP Successfactors</p>  
            </div>
        </div>
    </div>
  )
}

export default Solutions
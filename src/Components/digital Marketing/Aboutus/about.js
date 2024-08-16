import  React,{useEffect} from "react";
import about from '../Assesst/About.png'
import './about.css'
import AOS from "aos";
import "aos/dist/aos.css";
export function Aboutdm(){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return(
        <>
            <div className="container">
                <div className="row">

                    <div className="col-lg-5" data-aos="fade-top" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <img src={about} className="container-fluid" alt="Digital Marketing Service"/>
                    </div>
                    <div className="col-lg-6 textjustify mt-5" data-aos="fade-top" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <h3><b>About Us</b></h3>
                        <p>At KGGL, we redefine digital marketing with our dynamic, versatile and comprehensive approach. We don't rely on smoke and mirrors to attract clients instead, we leverage our expertise in search engine optimization (SEO) and marketing strategies to drive tangible results.</p>
                        <p className="mt-3">Unlike static companies, we transcend industry boundaries. With a wealth of experience and a team of seasoned professionals, KGGL is equipped to tailor custom websites and deploy a range of digital marketing services to cater to businesses of all sizes and across diverse sectors.</p>
                    </div>
                </div>
                <div id="servicesdm"></div>
            </div>
        </>
    );
}
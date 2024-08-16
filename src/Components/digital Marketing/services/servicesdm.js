import React from "react";
import './services.css'
import img1 from '../Assesst/Component 1.png' 
import img2 from '../Assesst/Component 2.png' 
import img3 from '../Assesst/Component 3.png' 
import img4 from '../Assesst/Component 4.png' 
import img5 from '../Assesst/Component 5.png' 
import img6 from '../Assesst/Component 6.png' 
import img7 from '../Assesst/Component 7.png' 
import img8 from '../Assesst/Component 8.png' 
import img9 from '../Assesst/Rectangle 63.png' 
import img10 from '../Assesst/Rectangle 64.png'
import img11 from '../Assesst/laptopimg.png'; 
import Gallery from './gallery.js';


export function Servicesdm(){
    return(
        <>
            <div className="container-fluid ">
                <h3 className="text-center pt-5 mt-5"><b>Our Expertise <span className="servicestextcolor"></span></b></h3>
                <p className="text-center container pb-5 mt-2">At our KGGL, we adhere to a methodical approach to ensure that every online marketing endeavour yields profitable outcomes. Harness the power of KGGL's internet marketing services today and allow us to enhance both your customer acquisition and retention rates.</p>
            </div>
           
            <div class="image-container pb-5">
                <div class="image-wrapper">
                    <img src={img1} alt="Image 1"/>
                    <div class="overlay pt-4">   
                        <p> <span><b>Technical SEO</b></span><br/> Enhance your online presence with expert SEO services. We fix crawl errors, verify HTTPS, optimize site speed, and eliminate duplicate content to improve crawlability and indexability. Boost your search rankings and increase conversions with our expert team.

                        </p>
                    </div> 
                </div>
                <div class="image-wrapper">
                    <img src={img2} alt="Image 1"/>
                    <div class="overlay">
                        <p><b>Link Building</b><br/>Attract consistent traffic from reputable websites and build consumer trust. Our marketing team uses paid ads, sponsorships and strategic collaborations to position your content before influential audiences. We engage in targeted guest blogging, create original content, distribute data-driven infographics and boost your social media presence.</p>
                    </div>         
                </div>
                <div class="image-wrapper">
                    <img src={img3} alt="Image 1"/>
                    <div class="overlay pt-5">
                        <p><b>Social Media Marketing</b><br/>Ready to broaden your reach and engage your audience on social media? We craft targeted campaigns to foster growth and enhance engagement.</p>
                    </div>
                </div>
                <div class="image-wrapper">
                    <img src={img4} alt="Image 1"/>
                    <div class="overlay pt-5 py-2">
                        <p><b>Web Design & Development</b><br/>At KGGL, we create custom, mobile-friendly, SEO-optimized websites to meet your business goals and support digital marketing. Our strategic visual hierarchy highlights key elements to boost visitor engagement.</p>
                    </div>      
                </div>
                <div class="image-wrapper">
                    <img src={img5} alt="Image 1"/>
                    <div class="overlay pt-5 py-4">
                        <p><b>E-Commerce Marketing</b><br/>With eCommerce revenue growing 23% year-over-year, now is the perfect time to tap into its potential. Showcase your products and offer unmatched convenience to customers around the clock.</p>
                    </div>               
                </div>
                <div class="image-wrapper">
                    <img src={img6} alt="Image 1"/>
                    <div class="overlay pt-5 py-1">
                        <p><b>Conversion Rate Optimization <br/> (CRO)</b><br/>Your website's content is crucial for SEO and visitor engagement. At KGGL, we create informative, trend-aligned content that meets Google's standards and resonates with your target audience</p>
                    </div>   
                </div>
                <div class="image-wrapper">
                    <img src={img7} alt="Image 1"/>
                    <div class="overlay pt-4">
                        <p><b>Content Writing</b><br/>
                        Your website's content is key to enhancing SEO and engaging visitors. At KGGL, we craft informative content that meets Google's standards and incorporates industry trends. Our team stays updated on market shifts and user preferences to ensure your content resonates with your target audience..</p>
                    </div>         
                </div>
                <div class="image-wrapper">
                    <img src={img8} alt="Image 1"/>
                    <div class="overlay pt-3">
                        <p><b>Email Marketing</b><br/>KGGL improves your email marketing with personalized newsletters designed to bypass spam filters and drive engagement, ensuring effective customer action.</p>
                    </div>    
                </div> 
                <div class="image-wrapper">
                <source srcset={img11} media="(max-width: 576px)"/>
                    <img src={img9} alt="Image 1" className="imgsystem"/>
                    <div class="overlay pt-4">
                        <p><b>Online Reputation Management (ORM)</b><br/>Enhance your business success with KGGL's robust review generation and monitoring services. We employ cutting-edge Online Reputation Management (ORM) tools to actively manage and enhance your online presence. Our strategies include targeted two-way SMS communication for direct customer engagement and QR codes for seamless feedback collection. Trust us to optimize your online reputation effectively, ensuring your business maintains a positive image and attracts more customers.</p>
                    </div>    
                </div>
                <div class="image-wrapper">
                    <img src={img10} alt="Image 1"/>
                    <div class="overlay ">
                        <p><b>Pay Per Click (PPC) Management</b><br/>Swiftly reach customers with our data-driven PPC campaign. Our certified PPC Specialists manage campaigns expertly. We tailor ad copies, fine-tune bidding, optimize device targeting and monitor ROI. We also leverage seasonal trends to boost promotions.</p>
                    </div>    
                </div>
            </div>
          
        </>
    );
}
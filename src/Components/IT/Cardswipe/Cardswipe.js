import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./Cardswipe.css";

function Cardswipe() {
  return (
    <div className='container-fluid bannerit pb-5' id='servicesitpage'>
    <h3 className='text-center text-light txtbld'>Our Expertise</h3>
    <div className='slider-container'>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
      >
        <SwiperSlide>
          <div className='card1'>
            <h5><b>UI/UX Design</b></h5>
            <p>We focus on designing intuitive, engaging user interfaces that elevate our client's digital experiences, boosting engagement and satisfaction.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='card1'>
            <h5><b>Web Development</b></h5>
           
            <p>Our developers use advanced tech to build responsive, scalable websites for top performance on all devices.
</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card1'>
            <h5><b>Mobile Application</b></h5>
            <p>We design sleek mobile apps for iOS and Android, reflecting your brand and ensuring smooth user interaction.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card1'>
            <h5><b>E-Commerce Website</b></h5>
            <p>We create customizable e-commerce websites with secure payments, mobile optimization, SEO, inventory management and analytics to boost sales.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card1'>
          
            <h5><b>Learning Management System (LMS)</b></h5>
            <p>We specialize in custom LMS for seamless online training. Our solutions enhance learning, efficiency and organizational growth. </p>
            {/* <button class="btn btn-primary ms-auto">Demo</button> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card1'>
            
            <h5><b>Customer Relationship Management (CRM)</b></h5>
            <p>Our CRM solutions streamline customer interactions and sales processes and enhance satisfaction, fostering stronger customer relationships and revenue growth.</p>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className='card1'>
            <h3>Billing Software</h3>
            <p>Our billing software simplifies invoicing, billing and payment processes, allowing businesses to manage their finances more efficiently and effectively.
            </p>
          </div>
        </SwiperSlide> */}
        <SwiperSlide>
          <div className='card1'>
            <h5><b>WhatsApp Bulk Messaging Software</b></h5>
            <p>Enhance communication with WhatsApp Bulk Messaging. Automate campaigns, personalize messages and track performance effortlessly to drive growth.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card1'>
            <h5><b>Knowledge Process Outsourcing (KPO)</b></h5>
            <p>Our KPO services offer expertise in data analysis, research and knowledge tasks, enabling informed decisions and valuable insights.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card1'>
          
            <h5><b>Business Process Outsourcing (BPO)</b></h5>
            <p>Our BPO services manage customer support, data entry, and administrative tasks, freeing businesses to focus on core strengths.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  );
}

export default Cardswipe;


import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./Swipingcard.css";

function Swipingcard() {
  return (
    <div className='container-fluid bannerit pb-5' id='servicesitpage'>
    
    <div className='slider-container'>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          1024: {
            slidesPerView: 2,
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
          <h4><b>Industry Experts</b></h4>
          <p className="text-center">At KG Genius Labs, our team comprises digital marketing professionals with over a decade of industry expertise. We remain abreast of the latest trends and innovations, crafting goal-oriented strategies while ensuring strict adherence to search engine guidelines. Whether you seek assistance with Amazon/Flipkart Marketplace integration, Shopify SEO, or any other digital marketing solution, count on us to deliver exceptional results tailored to your needs</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='card1'>
        <h4><b>Custom Digital Marketing Framework</b></h4>
        <p className="text-center">At KG Genius Labs, our team comprises digital marketing professionals with over a decade of industry expertise. We remain abreast of the latest trends and innovations, crafting goal-oriented strategies while ensuring strict adherence to search engine guidelines. Whether you seek assistance with Amazon/Flipkart Marketplace integration, Shopify SEO, or any other digital marketing solution, count on us to deliver exceptional results tailored to your needs</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card1'>
          <h4><b>Omnichannel Personalization</b></h4>
          <p className="text-center">According to a survey conducted by The Harris Poll on behalf of RedPoint Global, 63 percent of consumers now anticipate personalized brand experiences as the norm in service. At KGGL, we conduct thorough audience analyses and needs assessments to craft tailored internet marketing strategies that yield tangible business outcomes. Leveraging omnichannel personalization not only amplifies revenue but also enhances brand loyalty, ensuring sustained success in today's competitive landscape.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card1'>
          <h4><b>Campaign Monitoring and Evaluation</b></h4>
          <p className="text-center">Wondering if our digital marketing services are delivering results for your business? At KGGL,We don't rely on chance, we establish precise campaign metrics and consistently monitor and evaluate to measure the effectiveness of your strategies.By leveraging insights from Google Analytics, we continuously refine your online marketing tactics and fine-tune your approach to audience targeting, ultimately positioning your firm for greater financial success.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  )
}

export default Swipingcard
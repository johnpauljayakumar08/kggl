import React from "react";
import './datadrivenfull.css'
export function Datadrivenfull(){
    return(
        <>       
<div className="container mt-4 pb-4">
  <div id="carouselExampleDark" class="carousel carousel-dark slide">
    {/* <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
    </div> */}
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="2000">
        <div className="sizdm">
          <div class="carousel-caption text-center">
            {/* <h4 className="pt-lg-n5"><b>Industry experts</b></h4> */}
            <h4><b>Industry Experts</b></h4>
            <p className="text-center">At KG Genius Labs, our team comprises digital marketing professionals with over a decade of industry expertise. We remain abreast of the latest trends and innovations, crafting goal-oriented strategies while ensuring strict adherence to search engine guidelines. Whether you seek assistance with Amazon/Flipkart Marketplace integration, Shopify SEO, or any other digital marketing solution, count on us to deliver exceptional results tailored to your needs</p>
          </div>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <div className="sizdm">
           <div class="carousel-caption  text-center">
            <h4><b>Custom Digital Marketing Framework</b></h4>
            <p className="text-center">At KG Genius Labs, our team comprises digital marketing professionals with over a decade of industry expertise. We remain abreast of the latest trends and innovations, crafting goal-oriented strategies while ensuring strict adherence to search engine guidelines. Whether you seek assistance with Amazon/Flipkart Marketplace integration, Shopify SEO, or any other digital marketing solution, count on us to deliver exceptional results tailored to your needs</p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        
        <div className="sizdm">
        <div class="carousel-caption  text-center">
            <h4><b>Omnichannel Personalization</b></h4>
            <p className="text-center">According to a survey conducted by The Harris Poll on behalf of RedPoint Global, 63 percent of consumers now anticipate personalized brand experiences as the norm in service. At KGGL, we conduct thorough audience analyses and needs assessments to craft tailored internet marketing strategies that yield tangible business outcomes. Leveraging omnichannel personalization not only amplifies revenue but also enhances brand loyalty, ensuring sustained success in today's competitive landscape.</p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div className="sizdm">
        <div class="carousel-caption  text-center">
            <h4><b>Campaign Monitoring and Evaluation</b></h4>
            <p className="text-center">Wondering if our digital marketing services are delivering results for your business? At KGGL,We don't rely on chance, we establish precise campaign metrics and consistently monitor and evaluate to measure the effectiveness of your strategies.By leveraging insights from Google Analytics, we continuously refine your online marketing tactics and fine-tune your approach to audience targeting, ultimately positioning your firm for greater financial success.</p>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

</div>
        </>
    );
}
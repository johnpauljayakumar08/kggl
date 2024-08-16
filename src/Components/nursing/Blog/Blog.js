import React from 'react';
import blogim from "../Assest/blogpicture.png";
import "./Blog.css";
import blog1img from "../Assest/Depth 6, Frame 0 (1).png";
import blog2img from "../Assest/Depth 6, Frame 0.png";
import blog3img from "../Assest/Depth 6, Frame 0 (2).png";
import searchimg2 from "../Assest/Blogsearch2.png";
import searchimg1 from "../Assest/blogsearch1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Blog() {
    return (
        <div id='blogpage' className='container-fluid blogpages'>
            <div className='row m-2'>
                <div className='col-sm-12 col-lg-9'>
                    <h2 className='m-1'>The Future of Nursing: How Technology is Changing the Industry</h2>
                    <p>By NurseStaff</p>
                    <p>Date</p>
                    <img src={blogim} />
                    <h4 className='mx-1 my-4'>Categories</h4>
                    <button className='btn btn-info text-light m-1'>Travel Nursing</button>
                    <button className='btn btn-info text-light m-1'>Nursing Careers</button>
                    <button className='btn btn-info text-light m-1'>Nursing Education</button>
                    <button className='btn btn-info text-light m-1'>Nursing News</button>
                    <button className='btn btn-info text-light m-1'>Nursing Tips</button>
                    <button className='btn btn-info text-light m-1'>Nursing Trends</button>
                    <p>In recent years, technology has played a major role in transforming the nursing industry. From electronic health
                        records to telemedicine, these innovations have not only improved patient care but also changed the way nurses
                        work. In this article, we'll explore the impact of technology on nursing and discuss what the future may hold for this
                        essential profession.</p>
                    <h2>Related Articles</h2>
                    <div className='bg-light d-flex justify-content-around my-1'>
                        <div>
                            <h5>The Role of AI in Nursing</h5>
                            <p>How artificial intelligence is transforming patient care</p>
                            <button className='btn btn-secondary'>Read More</button>
                        </div>
                        <img src={searchimg1} />
                    </div>
                    <div className='bg-light d-flex  justify-content-around my-1'>
                        <div>
                            <h5>Telemedicine: The Future of Healthcare</h5>
                            <p>Exploring the benefits and challenges of virtual care</p>
                            <button className='btn btn-secondary'>Read More</button>
                        </div>
                        <img src={searchimg2} />
                    </div>
                </div>
                <div className='col-sm-12 col-lg-3 '>
                    <h5 className='mx-3'>Categories</h5>
                    <div className='bg-light '>
                        <div className='d-flex justify-content-between m-4'>
                            <p>Nursing</p>
                            <p>22</p>
                        </div>
                        <div className='d-flex justify-content-between m-4'>
                            <p>Technology</p>
                            <p>22</p>
                        </div>
                        <div className='d-flex justify-content-between m-4'>
                            <p>Healthcare</p>
                            <p>22</p>
                        </div>
                        <div className='d-flex justify-content-between m-4'>
                            <p>Education</p>
                            <p>22</p>
                        </div>
                        <div className='d-flex justify-content-between m-4'>
                            <p>Career</p>
                            <p>22</p>
                        </div>
                        <div className='d-flex justify-content-between m-4'>
                            <p>Wellness</p>
                            <p>22</p>
                        </div>
                        <div>
                        </div>
                    </div>
                    <h5>Explore</h5>
                    <div className='bg-light p-4'>
                        <p><b>Travel Nursing</b></p>
                        <p className='text-secondary'>Travel Nurse Blog</p>
                        <p><b>For Employers</b></p>
                        <p className='text-secondary'>Healthcare Employer Blog</p>
                        <p><b>For Students</b></p>
                        <p className='text-secondary'>Nursing Student Blog</p>
                    </div>
                    <h5 className='my-2'>Follow Us</h5>
                    <div className='bg-light p-1'>
                        <a href="https://www.instagram.com/kggeniuslabs/" className='text-dark my-1'><FontAwesomeIcon icon={faInstagram} className="hoverani"></FontAwesomeIcon>Instagram</a><br />
                        <a href="https://www.linkedin.com/in/kg-genius-labs-3a73152a8/" className='text-dark my-1'><FontAwesomeIcon icon={faLinkedin} className="hoverani"></FontAwesomeIcon>Linkedin</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Blog

import React, { useEffect, useState } from 'react';
import './bannerdm.css';
import bannerimg from '../Assesst/Group 37441 (1).png';
import AOS from "aos";
import { Link as Sclink } from 'react-scroll';
import { Modal, Button } from 'react-bootstrap';
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export function Bannerdm() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        companyname: '',
        website: '',
        phonenumber: '',
        email: ''
        // Add more fields as needed
    });
    const [formErrors, setFormErrors] = useState({});

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setFormData({
            name: '',
            companyname: '',
            website: '',
            phonenumber: '',
            email: ''
        });
        setFormErrors({});
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        // Clear error message if field has content
        if (value.trim() !== '') {
            setFormErrors({
                ...formErrors,
                [name]: ''
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let errors = {};
        // Validate all fields
        if (formData.name.trim() === '') {
            errors.name = 'Name is required';
        } 
        else if (!/^[a-zA-Z\s]{2,}$/.test(formData.name)) {
            errors.name = 'Please enter a valid name with only letters and spaces';
        }
        else if (formData.phonenumber.trim() === '') {
            errors.phonenumber = 'Phone number is required';
        } 
        else if (!/^[6-9]\d{9}$/.test(formData.phonenumber)) {
            errors.phonenumber = 'Please enter a valid 10-digit phone number';
        }
        else if (formData.email.trim() === '') {
            errors.email = 'Email is required';
        } 
        else if (!/^[a-z]\S+@\S+\.\S{2,20}$/.test(formData.email)) {
            errors.email = 'Please enter a valid email address (2-20 characters after the dot)';
        }
        else if (formData.companyname.trim() === '') {
            errors.companyname = 'Company name is required';
        } 
        else if (!/^[a-zA-Z\s\d]{2,}$/.test(formData.companyname)) {
            errors.companynamename = 'Please enter a valid Company name ';
        }
        else if (formData.website.trim() === '') {
            errors.website = 'Website is required';
        }     
       // Update formErrors state with any errors found
        else{
            axios.post("http://kggeniuslabs.com:4000/freeaudit",formData)
            .then((res) => {
                if (res.data.status === "Inserted") {
                  alert("Will Get Back You Soon...");
                  window.location.reload();
                } else if (res.data.status === "error") {
                  alert("Already registered...");
                } else {
                  alert("Data are not Registered");
                }
              })
        }
    };

    return (
        <>
            <div className='container-fluid bgcolordm' id='dmbanner'>
                <div className='row'>
                    <div className='col-lg-6 p-5' data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <p className='text-white ms-5'>Elevate Your Online Presence</p>
                        <h1 className='text-white ms-5'>Transform Your <span className='textbannercolor'>Brand's Digital Landscape</span> with Our Dynamic <span className='textbannercolor'>Digital Marketing Strategies</span></h1>
                        <p className='text-white ms-5'>KGGL Introduces Tailored Digital Marketing Solutions!</p>
                        <div className="d-flex flex-wrap">
                            <button className="btn colorbtndm btn-lg ms-5 mt-5" onClick={openModal}>Get a Free Website Audit</button>
                            <Sclink activeClass="active" to="form" spy={true} smooth={true} duration={500} className="nav-link active text-white" aria-current="page"> <button className="btn text-white bor btn-lg ms-5 mt-5">Contact Us</button></Sclink>
                        </div>
                    </div>
                    <div className='col-lg-6 mt-5'>
                        <img src={bannerimg} className='container-fluid' data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" alt="banner" />
                    </div>

                </div>
                <div id="aboutdm"></div>
            </div>
            {/* Your existing JSX */}
            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Get a Free Website Audit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container-fluid">
                        <form onSubmit={handleSubmit}>
                            <div className="col-lg-12">
                                <input
                                    type="text"
                                    className="form-control mt-4"
                                    placeholder='Full name'
                                    required
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {formErrors.name && <small className="text-danger">{formErrors.name}</small>}
                            </div>
                            <div className="col-lg-12">
                                <input
                                    type="text"
                                    className="form-control mt-4"
                                    placeholder='Your Company Name/Institution Name'
                                    required
                                    name="companyname"
                                    value={formData.companyname}
                                    onChange={handleChange}
                                />
                                {formErrors.companyname && <small className="text-danger">{formErrors.companyname}</small>}
                            </div>
                            <div className="">
                                <input
                                    type="text"
                                    className="form-control mt-4"
                                    placeholder='Your Company Website'
                                    required
                                    name="website"
                                    value={formData.website}
                                    onChange={handleChange}
                                />
                                {formErrors.gstnumber && <small className="text-danger">{formErrors.gstnumber}</small>}
                            </div>
                            <div className="">
                                <input
                                    type="text"
                                    className="form-control mt-4"
                                    required
                                    placeholder='Phone number'
                                    name="phonenumber"
                                    value={formData.phonenumber}
                                    onChange={handleChange}
                                />
                                {formErrors.phonenumber && <small className="text-danger">{formErrors.phonenumber}</small>}
                            </div>
                            <div className="">
                                <input
                                    type="email"
                                    className="form-control mt-4"
                                    required
                                    placeholder='Email'
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {formErrors.email && <small className="text-danger">{formErrors.email}</small>}
                            </div>                           
                            <div className="input-box">
                                <input type="submit" value="Submit" className='btn btn-primary mt-3' />
                            </div>
                        </form>
                    </div>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Close
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    );
}

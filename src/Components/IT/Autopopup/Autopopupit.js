

import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import "../../nursing/call to action/contactform.css";
import axios from 'axios';
import "./Autopopupit.css";

const Autopopupit = () => {
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    phonenumber: '',
    email: '',
    services: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 8000); // 30 seconds in milliseconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setShowModal(false);

  const [formData, setFormData] = useState({
    name:'',
    phonenumber:'',
    email:'',
    services:'',
    message:''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear the error message when user starts typing again
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handlesubmit = (event) => {
    event.preventDefault();

    let formValid = true;
    const newErrors = {
      name: '',
      phonenumber: '',
      email: '',
      services: ''
    };

    if (formData.name === '') {
      newErrors.name = 'Please fill in the name';
      formValid = false;
    } else if (!/^[a-zA-Z\s]{2,}$/.test(formData.name)) {
      newErrors.name = 'Please enter a valid name with only letters and spaces';
      formValid = false;
    }

    if (formData.phonenumber === '') {
      newErrors.phonenumber = 'Please fill in the phone number';
      formValid = false;
    } else if (!/^[6-9]\d{9}$/.test(formData.phonenumber)) {
      newErrors.phonenumber = 'Please enter a valid 10-digit phone number';
      formValid = false;
    }

    if (formData.email === '') {
      newErrors.email = 'Please fill in the email';
      formValid = false;
    } else if (!/^[a-z]\S+@\S+\.\S{2,20}$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address (2-20 characters after the dot)';
      formValid = false;
    }

    if (formData.services === '' || formData.services === 'Select the Services') {
      newErrors.services = 'Please select the services';
      formValid = false;
    }
    if (formValid) {
      axios.post("https://kggeniuslabs.com:4000/dmform", formData)
        .then((res) => {
          if (res.data.status === "inserted") {
            alert("Will Get Back You Soon...");
            window.location.reload();
          } else if (res.data.status === "error") {
            alert("Already registered...");
          } else {
            alert("Data are not registered");
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <Modal show={showModal} onHide={handleClose} className='mt-5 zindexdm'>
      <Modal.Header closeButton>
        <Modal.Title className=''><b>Get in Touch with Us</b></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container-fluid mt-n5">
          <form onSubmit={handlesubmit}>
            <div className="col-lg-12 mb-2">
              <input type="text" className="form-control mb-3" placeholder='Full Name' required name="name" id="name" onChange={handleChange} />
              {errors.name && <p className="text-danger txtmsg" >{errors.name}</p>}
            </div>

            <div className="mb-2">
              <input type="tel" className="form-control mb-3" required placeholder='Phone Number' name="phonenumber" id="phonenumber" onChange={handleChange} />
              {errors.phonenumber && <p className="text-danger txtmsg">{errors.phonenumber}</p>}
            </div>

            <div className="mb-3">
              <input type="email" className="form-control mb-3" required name="email" placeholder='Email' id="email" onChange={handleChange} />
              {errors.email && <p className="text-danger txtmsg">{errors.email}</p>}
            </div>

            <div className="input-box ">
              <select className="border-bottom border-1 border-black rounded mb-3 col-lg-12 form-active-color  py-3" name='services' id="services" onChange={handleChange}>
                <option>Select the Services</option>
                <option value="UI/UX">UI/UX Design</option>
                <option value="Web Development">Web Development</option>
                <option value="Mobile Application Design and Development">Mobile Application Design and Development </option>
                <option value="E-Commerce Website">E-Commerce Website</option>
                <option value="LMS">LMS</option>
                <option value="CRM">CRM</option>
                <option value="Billing Software">Billing Software</option>
                <option value="WhatsApp Bulk Messaging Software">WhatsApp Bulk Messaging Software</option>
                <option value="KPO">KPO</option>
                <option value="BPO">BPO</option>
              </select>
              {errors.services && <p className="text-danger txtmsg">{errors.services}</p>}
            </div>

            <div className="input-box ">
              <textarea placeholder="Message" className="border-bottom border-1 border-black rounded form-control mb-3 col-lg-12  py-3" name='message' id="message" onChange={handleChange}></textarea>
            </div>

            <div className="input-box">
              <input type="submit" value="Submit" className='btn btn-primary' />
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Autopopupit;

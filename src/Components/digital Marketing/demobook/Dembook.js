import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import './Demobook.css';
import "../../nursing/call to action/contactform.css";

const Demobook = () => {
  const [showModal, setShowModal] = useState(false);

  // Function to handle opening modal
  const handleShow = () => setShowModal(true);

  // Function to handle closing modal
  const handleClose = () => setShowModal(false);

  const [formData, setFormData] = useState({
    name: '',
    phonenumber: '',
    email: '',
    services: '',
    message: ''
    // other form fields
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.name === '') {
      alert("Please fill in the name");
    } else if (formData.phonenumber === '') {
      alert("Please fill in the phone number");
    } else if (formData.email === '') {
      alert("Please fill in the email");
    } else if (formData.services === '') {
      alert("Please select the services");
    } else {
      axios.post("https://kggeniuslabs.com:4000/dmform", formData)
        .then((res) => {
          if (res.data.status === "inserted") {
            alert("Will Get Back to You Soon...");
            window.location.reload();
          } else if (res.data.status === "error") {
            alert("Already registered...");
          } else {
            alert("Data are not registered");
          }
        })
    }
  };

  return (
    <>  
      <div className='buttonpart'>
    <div className='d-flex flex-column justify-content-center pt-5 pb-5'>
    
      {/* <Button variant="primary" onClick={handleShow} className=' btn btn-light' >
        Book a Demo
      </Button> */}
      <button onClick={handleShow} className='btn btn-primary'>Book a Demo</button>
      </div>
      
      </div>
      <Modal show={showModal} onHide={handleClose} className='mt-5 zindexdm'>
        <Modal.Header closeButton>
          <Modal.Title>Get in touch with us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid mt-n5">
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <input type="email" className="form-control mt-4" required name="email" placeholder='Email' id="email" onChange={handleChange} />
              </div>
              <div className="mb-2">
                <input type="phone" className="form-control mt-4" required placeholder='Phone number' name="phonenumber" id="phonenumber" onChange={handleChange} />
              </div>
              <div className="input-box">
                <input type="submit" value="Connect with us" className='btn btn-primary' />
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Demobook;

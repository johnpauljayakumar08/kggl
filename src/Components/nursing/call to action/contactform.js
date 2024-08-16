import React, { useState } from "react";
import './contactform.css';
import contact from '../Assest/Group 37419.png';
import axios from "axios";

export function Contactform() {
  const [errors, setErrors] = useState({});

  function validateForm(values) {
    let errors = {};
    const nameRegex = /^[a-zA-Z\s]{2,}$/;
    const phoneRegex = /^[6-9][0-9]{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const degreeRegex = /^[a-zA-Z\s]{2,}$/;
    const specialisationRegex = /^[a-zA-Z\s]{2,}$/;
    const experienceRegex = /^[a-zA-Z\s\.]+$/;
    if (!values.name) {
      errors.name = "Please fill the name";
    } else if (!nameRegex.test(values.name)) {
      errors.name = "Name can only contain letters and spaces";
    }

    if (!values.phonenumber) {
      errors.phonenumber = "Please fill the phone number";
    } else if (!phoneRegex.test(values.phonenumber)) {
      errors.phonenumber = "Phone number must be 10 digits";
    }

    if (!values.email) {
      errors.email = "Please fill the email";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Email is not valid";
    }

    if (!values.degree) {
      errors.degree = "Please fill the degree";
    }else if (!degreeRegex.test(values.degree)) {
      errors.degree = "Enter a valid degree";
    }

    if (!values.specialization) {
      errors.specialization = "Please fill the specialization";
    }
    else if (!specialisationRegex.test(values.specialization)) {
      errors.specialization  = "Enter a valid data";
    }

    if (!values.experience) {
      errors.experience = "Please fill the experience";
    }
    else if (!experienceRegex .test(values.experience)) {
      errors.experience = "Enter a valid data";
    }
  
    return errors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const phonenumber = document.getElementById("phonenumber").value;
    const email = document.getElementById("email").value;
    const degree = document.getElementById("degree").value;
    const specialization = document.getElementById("specialization").value;
    const experience = document.getElementById("experience").value;

    const key = {
      name,
      phonenumber,
      email,
      degree,
      specialization,
      experience
    };

    const validationErrors = validateForm(key);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      axios.post("https://kggeniuslabs.com:4000/form", key)
        .then((res) => {
          if (res.data.status === "inserted") {
            alert("Will Get Back to You Soon...");
            window.location.reload();
          } else if (res.data.status === "error") {
            alert("Already registered...");
          } else {
            alert("Data not registered");
          }
        });
    }
  }

  return (
    <>
      <section className="" id="form">
        <div className="section-header ">
          <div className="container ">
            <h3><b>Get in Touch with Us</b></h3>
            <p className="text-center">Let's connect! Our experienced team is available to answer your questions and provide guidance, we're here to help.</p>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <img src={contact} className="col-lg-10 col-12" alt="Job Opportunity" />
            </div>
            <div className="col-lg-6">
              <form onSubmit={handleSubmit} id="contact-form">
                <h3>Send Message</h3>
                <div className="input-box">
                  <input type="text" name="name" id="name" className="form-control mb-3"  placeholder="Full Name" />
                  {errors.name && <small className="error text-danger">{errors.name}</small>}
                </div>

                <div className="input-box">
                  <input type="phone" name="phonenumber" className="form-control mb-3" id="phonenumber" placeholder="Phone Number" />
                  {errors.phonenumber && <small className="error text-danger">{errors.phonenumber}</small>}
                </div>

                <div className="input-box">
                  <input type="email" name="email" className="form-control mb-3" id="email" placeholder="Email" />
                  {errors.email && <small className="error text-danger">{errors.email}</small>}
                </div>

                <div className="input-box">
                  <input type="text" name="degree" className="form-control mb-3" id="degree" placeholder="Degree" />
                  {errors.degree && <small className="error text-danger">{errors.degree}</small>}
                </div>

                <div className="input-box">
                  <input type="text" name="specialization" className="form-control mb-3" id="specialization" placeholder="Specialization" />
                  {errors.specialization && <small className="error text-danger">{errors.specialization}</small>}
                </div>

                <div className="input-box">
                  <input type="text" name="experience" className="form-control mb-3" id="experience" placeholder="Years of Experience" />
                  {errors.experience && <small className="error text-danger">{errors.experience}</small>}
                </div>

                <div className="input-box">
                  <input type="submit" value="Connect with Us" className="btn btn-primary" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

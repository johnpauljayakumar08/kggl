// import React, { useEffect, useState } from "react";
// import "./Clientregistration.css";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import currencyData from './currency.json'; 

// function ClientRegister() {
//   const history = useNavigate();
//   const [countries, setCountries] = useState([]);
//   const [states, setStates] = useState([]);
//   const [cities, setCities] = useState([]);

//   const [formData, setFormData] = useState({
//     company: "",
//     company_short_name: "",
//     VAT_number: "",
//     city: "",
//     phone: "",
//     state: "",
//     website: "",
//     email: "",
//     zip_code: "",
//     groups: "",
//     country: "",
//     currency: "",
//     gst_no: "",
//     street: "",
//     address: "",
//   });

//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     const fetchCountries = async () => {
//       try {
//         const response = await axios.get('https://restcountries.com/v3.1/all');
//         const sortedCountries = response.data.sort((a, b) =>
//           a.name.common.localeCompare(b.name.common)
//         );
//         setCountries(sortedCountries);
//       } catch (error) {
//         console.error('Error fetching countries:', error);
//       }
//     };

//     fetchCountries();
//   }, []);

//   const fetchStates = async (country) => {
//     try {
//       const response = await axios.post('https://countriesnow.space/api/v0.1/countries/states', {
//         country: country
        
//       });
//       setStates(response.data.data.states);
//       console.log(response)
//     } catch (error) {
//       console.error('Error fetching states:', error);
//     }
//   };

//   const fetchCities = async (country, state) => {
//     try {
//       const response = await axios.post('https://countriesnow.space/api/v0.1/countries/state/cities', {
//         country: country,
//         state: state
//       });
//       setCities(response.data.data);
//     } catch (error) {
//       console.error('Error fetching cities:', error);
//     }
//   };

//   const fetchCurrency = (country) => {
//     const countryData = currencyData.find(c => c.name === country);
//     return countryData ? countryData.currency : "";
//   };

//   const handleChange = async (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });

//     if (name === 'country') {
//       fetchStates(value);
//       setCities([]);

//       // Fetch currency based on selected country
//       const currency = fetchCurrency(value);
//       setFormData((prevData) => ({
//         ...prevData,
//         currency: currency,
//       }));
//     }

//     if (name === 'state') {
//       fetchCities(formData.country, value);
//     }

//     setErrors({
//       ...errors,
//       [name]: "",
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const validationErrors = validate(formData);
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       console.log("Form has validation errors:", validationErrors);
//     } else {
//       axios
//         .post("http://192.168.253.177:5002/api/client/register", formData)
//         .then((res) => {
//           console.log(res);
//           const clientId = res.data.clientId;
//           if (
//             res.data.message ===
//             "Client created successfully and password sent via email."
//           ) {
//             alert("Data stored successfully.");
//             history(/admin/service/${btoa(clientId)});
//           } else {
//             alert("Server error: Unable to register client.");
//           }
//         })
//         .catch(error => {
//           console.error('Error submitting form:', error);
//           alert("Error submitting form. Please try again.");
//         });
//     }
//   };

//   const validate = (values) => {
//     let errors = {};
//     const alphabetPattern = /^[A-Za-z\s]+$/;

//     if (!values.company) {
//       errors.company = "Company Name is required";
//     }
//     if (!values.company_short_name) {
//       errors.company_short_name = "Company Short Name is required";
//     }
//     if (!values.VAT_number && !values.gst_no) {
//       errors.VAT_number = "VAT or GST Number is required";
//     }
//     if (!values.city) {
//       errors.city = "City is required";
//     } else if (!alphabetPattern.test(values.city)) {
//       errors.city = "City must contain only letters";
//     }
//     if (!values.phone) {
//       errors.phone = "Mobile Number is required";
//     } else if (!/^[6-9]\d{9}$/.test(values.phone)) {
//       errors.phone = "Invalid phone number (must start with 6, 7, 8, or 9)";
//     }
//     if (!values.state) {
//       errors.state = "State is required";
//     } else if (!alphabetPattern.test(values.state)) {
//       errors.state = "State must contain only letters";
//     }
//     if (!values.email) {
//       errors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(values.email)) {
//       errors.email = "Invalid email address";
//     }
//     if (!values.zip_code) {
//       errors.zip_code = "Zip Code is required";
//     } else if (!/^\d{6}$/.test(values.zip_code)) {
//       errors.zip_code = "Zip Code must contain exactly 6 digits";
//     }
//     if (!values.groups) {
//       errors.groups = "Group Name is required";
//     }
//     if (!values.country) {
//       errors.country = "Country is required";
//     }
//     if (!values.currency) {
//       errors.currency = "Currency is required";
//     }
//     if (!values.street) {
//       errors.street = "Street is required";
//     }
//     if (!values.address) {
//       errors.address = "Address is required";
//     }

//     return errors;
//   };

//   return (
  
//     <div className="container-fluid frmbox h-100">
//       <h2 className="logintxt text-center">Client Registration</h2>
//       <div className="d-flex justify-content-center px-5">
//         <div className="formscard my-3 px-5 regcrd">
//           <form>
//             <div className="row ">
//               <div className="col-sm-12 col-md-6 col-lg-3 m-1">


//               <div className="form-group">
//                   <label htmlFor="company">Company Name</label>
//                   <input
//                     type="text"
//                     id="company"
//                     name="company"
//                     placeholder="Enter your Company Name"
//                     className={form-control ${errors.company ? "is-invalid" : ""}}
//                     value={formData.company}
//                     onChange={handleChange}/>
//                   <div className="invalid-feedback">{errors.company}</div>
//                 </div>

//                  <div className="form-group">
//                   <label htmlFor="company_short_name">Company Short Name</label>
//                   <input
//                     type="text"
//                     id="company_short_name"
//                     name="company_short_name"
//                     placeholder="Enter your Company Short Name"
//                     className={form-control ${errors.company_short_name ? "is-invalid" : ""}}
//                     value={formData.company_short_name}
//                     onChange={handleChange}/>
//                   <div className="invalid-feedback">{errors.company_short_name}</div>
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="VAT_number">VAT Number</label>
//                   <input
//                     type="text"
//                     id="VAT_number"
//                     name="VAT_number"
//                     placeholder="Enter your VAT Number"
//                     className={form-control ${errors.VAT_number ? "is-invalid" : ""}}
//                     value={formData.VAT_number}
//                     onChange={handleChange}/>
//                   <div className="invalid-feedback">{errors.VAT_number}</div>
//                 </div>


//                 <div className="form-group">
//                   <label htmlFor="email">Email Address</label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     placeholder="Enter your Email Address"
//                     className={form-control ${errors.email ? "is-invalid" : ""}}
//                     value={formData.email}
//                     onChange={handleChange} />
//                   <div className="invalid-feedback">{errors.email}</div>
//                 </div>
           
              

//               <div className="form-group">
//                   <label htmlFor="phone">Mobile Number</label>
//                   <input
//                     type="text"
//                     id="phone"
//                     name="phone"
//                     placeholder="Enter a Mobile Number"
//                     className={form-control ${errors.phone ? "is-invalid" : ""}}
//                     value={formData.phone}
//                     onChange={handleChange}/>
//                   <div className="invalid-feedback">{errors.phone}</div>
//                 </div>
//                 </div>


// {/* secondpart */}


// <div className="col-sm-12 col-md-6 col-lg-3 m-1">




//                <div className="form-group">
//                   <label htmlFor="country">Country</label>
//                   <select
//                     id="country"
//                     name="country"
//                     className={form-control ${errors.country ? "is-invalid" : ""}}
//                     value={formData.country}
//                     onChange={handleChange}>
//                     <option value="">Select your Country</option>
//                     {countries.map((country, index) => (
//                       <option key={index} value={country.name.common}>
//                         {country.name.common}
//                       </option>
//                     ))}
//                   </select>
//                   <div className="invalid-feedback">{errors.country}</div>
//                 </div>


//                 <div className="form-group">
//                   <label htmlFor="state">State</label>
//                   <select
//                     id="state"
//                     name="state"
//                     className={form-control ${errors.state ? "is-invalid" : ""}}
//                     value={formData.state}
//                     onChange={handleChange}>
//                     <option value="">Select your State</option>
//                     {states.map((state, index) => (
//                       <option key={index} value={state.name}>
//                         {state.name}
//                       </option>
//                     ))}
//                   </select>
//                   <div className="invalid-feedback">{errors.state}</div>
//                 </div>
//                 </form>
//                 </div>
//                 </div>
//                 </div>
//                 );
//                 }

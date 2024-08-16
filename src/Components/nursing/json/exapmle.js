// // import React, { useState, useEffect } from 'react';

// // function Popup() {
// //   const [showPopup, setShowPopup] = useState(false);

// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       setShowPopup(true);
// //     }, 30000); // 2 minutes in milliseconds

// //     return () => clearTimeout(timer);
// //   });

// //   const handleClose = () => {
// //     setShowPopup(false);
// //   };

// //   return (
// //     <div>
// //       {showPopup && (
// //         <div className="popup">
// //           <div className="popup-content">
// //             <p>hiii</p>
// //           <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
// //                                 <div class="modal-dialog modal-dialog-centered">
// //                                     <div class="modal-content">
// //                                     <div class="modal-header modleborderbottom">
// //                                         <h5 class="modal-title" id="exampleModalLabel">Encure</h5>
// //                                         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
// //                                     </div>
// //                                     <div class="modal-body p-5">
// //                                         <p>Guiding your health journey with Experties and Compassion.</p>
// //                                         <div className=" d-flex justify-content-between">

// //                                             <button type="button" class="btn btnbgcolor"  >Individual</button>
// //                                             <button type="button" class="btn btnoutlinebgcolor" >Business</button>
                                            
// //                                         </div>

// //                                     </div>
                                    
// //                                     </div>
// //                                 </div>
// //                             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default Popup;
// import React, { useState, useEffect } from 'react';

// const PopupForm = () => {
//   // State to manage the visibility of the popup
//   const [showPopup, setShowPopup] = useState(false);
//   // State to manage form data
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: ''
//   });

//   // Function to show the popup after 30 seconds
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowPopup(true);
//     }, 30000); // 30 seconds in milliseconds

//     return () => clearTimeout(timer); // Clear the timer when component unmounts
//   }, []);

//   // Function to hide the popup
//   const closePopup = () => {
//     setShowPopup(false);
//   };

//   // Function to handle form input changes
//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can add your logic to handle form submission
//     console.log('Form submitted:', formData);
//     // Clear form fields
//     setFormData({
//       name: '',
//       email: '',
//       phone: ''
//     });
//     // Close the popup after submission
//     setShowPopup(false);
//   };

//   return (
//     <div>
//       {showPopup && (
//         <>
        
//         <h1>hii</h1>
//          <div class="modal fade" id="exampleModal"  >
//                                           <div class="modal-dialog modal-dialog-centered">
//                                               <div class="modal-content">
//                                               <div class="modal-header modleborderbottom">
//                                                  <h5 class="modal-title" id="exampleModalLabel">Encure</h5>
//                                                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                                              </div>
//                                               <div class="modal-body p-5">
//                                                   <p>Guiding your health journey with Experties and Compassion.</p>
//                                                  <div className=" d-flex justify-content-between">
         
//                                                      <button type="button" class="btn btnbgcolor"  >Individual</button>
//                                                       <button type="button" class="btn btnoutlinebgcolor" >Business</button>
                                                     
//                                               </div>
         
//                                               </div>
                                             
//                                               </div>
//                                           </div>
//                                       </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default PopupForm;
// import React, { useState, useEffect } from 'react';
// import './example.css'; // Import CSS file for styling

// const Form = () => {
//   const [showForm, setShowForm] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowForm(true);
//     }, 30000); // 30 seconds

//     return () => clearTimeout(timer);
//   }, []); // Run once on component mount

//   return (
//     <div className={`form-container ${showForm ? 'show' : ''}`}>
//       <div className="background-layer"></div> {/* Background layer with blur */}
//       <div className="form">
//         <h2>Form</h2>
//         <form>
//           <div className="form-group">
//             <label htmlFor="name">Name:</label>
//             <input type="text" id="name" name="name" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <input type="email" id="email" name="email" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="phone">Phone:</label>
//             <input type="tel" id="phone" name="phone" />
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Form;


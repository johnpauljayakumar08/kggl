import React, { useState } from 'react';
import Modal from 'react-modal';
import './Sapdemo.css';

Modal.setAppElement('#root');

function Sapdemo() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setEmail('');
    setMobileNumber('');
    setPassword('');
    setOtp('');
    setIsOtpSent(false);
    setIsVerified(false);
  };

  const handleOtpSend = () => {
    // Mock sending OTP, in real implementation, call your backend service
    if (validateEmail(email)) {
      setIsOtpSent(true);
      alert('OTP sent to your mobile number');
    } else {
      alert('Invalid email or password');
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and OTP verification
    if (otp === '123456') { // Mock OTP check
      alert('OTP verified. Form submitted successfully!');
      setIsVerified(true);
      closeModal();
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  const validateEmail = (email) => {
    // Simple email validation regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

 

  return (
    <div className="Sapdemopage">
      <button onClick={openModal} className="book-demo-button">Book a Demo</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Book a Demo Form"
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2>Book a Demo</h2>
        <form onSubmit={handleFormSubmit} className="demo-form">
          <label>
            Email:  </label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        
          <label>
            Mobile Number:
            <input type="tel" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} required />
          </label>
          {/* <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label> */}
          {isOtpSent && (
            <label>
              OTP:
              <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} required />
            </label>
          )}
          {!isOtpSent ? (
            <button type="button" onClick={handleOtpSend} className="send-otp-button">Send OTP</button>
          ) : (
            <button type="submit" className="submit-button">Submit</button>
          )}
        </form>
        <button onClick={closeModal} className="close-button"></button>
      </Modal>
    </div>
  );
}

export default Sapdemo;

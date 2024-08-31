import React, { useState } from 'react';
import emailjs from "emailjs-com";

function HireMeModal({ isOpen, onClose, onSubmit }) {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
        company_name: company, // Ensure this matches the placeholder in EmailJS template
        user_email: email,
      };
  
      emailjs.send(
        'service_ihwc5hf',
        'template_mochhtk',
        templateParams,
        'z0BCM4esaKAJK4rHp'
      ).then((result) => {
        console.log("SUCCESS!", result.status, result.text);
        alert('Email sent successfully!');
        onClose(); // Close the modal after sending the email
      }, (error) => {
        console.log("FAILED...", error.text);
        alert("Failed to send email.  Please try again")
      }); // Close the modal after submission
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Hire Me</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Company Name:
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
          </label>
          <button type="submit">Submit</button>
          <button onClick={onClose}>Close</button>
        </form>
        
      </div>
    </div>
  );
}

export default HireMeModal;

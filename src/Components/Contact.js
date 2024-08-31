import React, { useState , useEffect } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2whewnm', 'template_n9rmwn7', e.target, 'z0BCM4esaKAJK4rHp')
      .then((result) => {
          console.log(result.text);
          setFormSubmitted(true);  // Show popup on success
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();  // Reset the form after submission
  };

  useEffect(() => {
    if (formSubmitted) {
      const timer = setTimeout(() => {
        setFormSubmitted(false);  // Hide popup after 15 seconds
      }, 15000);

      // Cleanup the timeout if the component is unmounted or formSubmitted changes
      return () => clearTimeout(timer);
    }
  }, [formSubmitted]);

  return (
    <div className='contact'>
        <h2>Contact Me</h2>
        <form onSubmit={sendEmail}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required /> <br />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Your Email" required /> <br />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" placeholder="Your Message" required></textarea><br />
            </div>
            <button type="submit">Send</button>
        </form>
        {formSubmitted && <div className="popup">Your message has been sent!</div>}
    </div>
  );
}

export default Contact;

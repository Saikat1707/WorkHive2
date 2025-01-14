import React from 'react';
import './CSS/ContactSupport.css';

const ContactSupport = () => {
  return (
    <div className="contact-support-container">
      <h2 className="contact-support-heading">Contact Us</h2>
      
      {/* About Us Section */}
      <div className="about-us">
        <p>
          Welcome to our support page! We’re committed to helping you with any queries or concerns. Reach out to us via the form below or through the provided contact details.
        </p>
        <div className="contact-info">
          <p><strong>Location:</strong> Kolkata, India</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Email:</strong> support@example.com</p>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="map-container">
        <iframe
          title="Google Map of Kolkata"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d931265.5931054346!2d88.09961842708294!3d22.675752202333368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277be0d9fc597%3A0x2f835242096bf42e!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1699800000000!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          style={{ border: 0 }}
        ></iframe>
      </div>
      
      {/* Contact Form */}
      <form className="contact-support-form">
        <h3>Send Us a Message</h3>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" rows="5" placeholder="Enter your message"></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
};

export default ContactSupport;

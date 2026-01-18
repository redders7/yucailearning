// src/pages/Contact.js
import React from "react";
import "./Contact.css";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact | Yucai Learning</title>
        <meta
          name="description"
          content="Contact Yucai Learning - Tanah Merah Kechil Avenue, +65 97277483, Miss Chen, chenxiaoli7210@gmail.com."
        />
      </Helmet>
      <h1>Contact</h1>
      <div className="contact-info">
        <p>
          <strong>陈老师 (Ms Chen)</strong>
        </p>
        <p>
          <strong>Email:</strong> chenxiaoli7210@gmail.com
        </p>
        <p>
          <strong>Address:</strong> Tanah Merah Kechil Avenue
        </p>
        <p>
          <strong>Mobile / WhatsApp:</strong>{" "}
          <a
            href="https://wa.me/6597277483"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link"
          >
            <i className="fa fa-whatsapp"></i> +65 97277483
          </a>
        </p>
        <p className="contact-note">
          Click the mobile number above to chat directly with Ms Chen!
        </p>
      </div>
      <div className="map-container">
        <iframe
          title="Yucai Learning Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63398.86735560821!2d103.8756205!3d1.3631043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19bd8f3e19cd%3A0x80e7c8c3e6b5d4a7!2sTanah%20Merah%20Kechil%20Ave!5e0!3m2!1sen!2ssg!4v1616171570307!5m2!1sen!2ssg"
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;

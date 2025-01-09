// src/components/Footer.jsx
import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const FooterContainer = styled.footer`
  background: #333;
  color: #fff;
  padding: 2rem 0;
  text-align: center;
`;

const Socials = styled.div`
  margin-bottom: 1rem;

  a {
    color: #fff;
    margin: 0 0.5rem;
    font-size: 1.25rem;
    transition: color 0.3s ease;

    &:hover {
      color: #007bff;
    }
  }
`;

const ContactInfo = styled.p`
  margin-bottom: 0.5rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Socials>
        <a href="#">
          <FaFacebookF />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <FaLinkedinIn />
        </a>
      </Socials>
      <ContactInfo>
        Email: contact@jola-sg.com | Phone: +65 1234 5678
      </ContactInfo>
      <ContactInfo>Address: 123 Jola Street, Singapore</ContactInfo>
      <p>
        &copy; {new Date().getFullYear()} Jola Singapore. All rights reserved.
      </p>
    </FooterContainer>
  );
};

export default Footer;

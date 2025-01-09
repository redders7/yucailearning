// src/components/Footer.jsx
import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

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
        <a href="www.facebook.com">
          <FaFacebookF />
        </a>
        <a href="www.x.com">
          <FaTwitter />
        </a>
      </Socials>
      <ContactInfo>
        Email: chenxiaoli7210@gmail.com | Phone: +65 9727 7483
      </ContactInfo>
      <ContactInfo>Address: Tanah Merah Kechil Avenue, Singapore</ContactInfo>
      <p>
        &copy; {new Date().getFullYear()} Yucai Learning. All rights reserved.
      </p>
    </FooterContainer>
  );
};

export default Footer;

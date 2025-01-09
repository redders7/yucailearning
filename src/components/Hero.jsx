// src/components/Hero.jsx
import React from "react";
import styled from "styled-components";
import heroImage from "../assets/images/hero-placeholder.jpg"; // Use a placeholder image

const Section = styled.section`
  height: 100vh;
  background: url(${heroImage}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #fff;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
`;

const Content = styled.div`
  position: relative;
  text-align: center;
  z-index: 1;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }

  a {
    padding: 0.75rem 1.5rem;
    background: #007bff;
    color: #fff;
    border-radius: 5px;
    font-size: 1rem;
    transition: background 0.3s ease;

    &:hover {
      background: #0056b3;
    }
  }
`;

const Hero = () => {
  return (
    <Section id="hero">
      <Content>
        <h1>Welcome to Yu Cai Learning</h1>
        <p>
          Unlock the beauty of the Chinese language with personalized
          instruction tailored to your learning needs
        </p>
        <a href="#contact">Get Started</a>
      </Content>
    </Section>
  );
};

export default Hero;

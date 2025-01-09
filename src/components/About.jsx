// src/components/About.jsx
import React from "react";
import styled from "styled-components";
import aboutImage from "../assets/images/about-placeholder.jpg";

const Section = styled.section`
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 50%;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

const Content = styled.div`
  width: 50%;
  padding-left: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 0;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }
`;

const About = () => {
  return (
    <Section id="about">
      <Image src={aboutImage} alt="About Us" />
      <Content>
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis
          consectetur.
        </p>
        <p>
          Phasellus non sapien vitae purus sollicitudin consequat. Sed vitae
          lacus eget neque sodales mollis.
        </p>
      </Content>
    </Section>
  );
};

export default About;

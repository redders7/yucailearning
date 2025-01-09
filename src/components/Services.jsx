// src/components/Services.jsx
import React from "react";
import styled from "styled-components";
import { FaCogs, FaMobileAlt, FaChartLine } from "react-icons/fa";

const Section = styled.section`
  padding: 4rem 2rem;
  background: #f9f9f9;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const ServicesGrid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Service = styled.div`
  background: #fff;
  padding: 2rem;
  margin: 1rem;
  width: 300px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  svg {
    font-size: 3rem;
    color: #007bff;
    margin-bottom: 1rem;
  }

  h3 {
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.6;
  }
`;

const Services = () => {
  return (
    <Section id="services">
      <Container>
        <Title>Our Services</Title>
        <ServicesGrid>
          <Service>
            <FaCogs />
            <h3>Service One</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              scelerisque aliquam odio et faucibus.
            </p>
          </Service>
          <Service>
            <FaMobileAlt />
            <h3>Service Two</h3>
            <p>
              Phasellus non sapien vitae purus sollicitudin consequat. Sed vitae
              lacus eget neque sodales mollis.
            </p>
          </Service>
          <Service>
            <FaChartLine />
            <h3>Service Three</h3>
            <p>
              Integer nec bibendum lacus. Suspendisse dictum enim sit amet
              libero malesuada feugiat.
            </p>
          </Service>
        </ServicesGrid>
      </Container>
    </Section>
  );
};

export default Services;

// src/components/Testimonials.jsx
import React from "react";
import styled from "styled-components";
import testimonial1 from "../assets/images/testimonial-placeholder1.jpg";
import testimonial2 from "../assets/images/testimonial-placeholder2.jpg";
import testimonial3 from "../assets/images/testimonial-placeholder3.jpg";

const Section = styled.section`
  padding: 4rem 2rem;
  background: #f9f9f9;
  text-align: center;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Testimonial = styled.div`
  margin-bottom: 2rem;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
  }

  p {
    font-style: italic;
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 1rem;
    color: #007bff;
  }
`;

const Testimonials = () => {
  return (
    <Section id="testimonials">
      <Container>
        <Title>What Our Clients Say</Title>
        <Testimonial>
          <img src={testimonial1} alt="Client 1" />
          <p>
            "Jola Singapore provided excellent services and exceeded our
            expectations."
          </p>
          <h4>- Client One</h4>
        </Testimonial>
        <Testimonial>
          <img src={testimonial2} alt="Client 2" />
          <p>
            "Professional and reliable. Highly recommended for your business
            needs."
          </p>
          <h4>- Client Two</h4>
        </Testimonial>
        <Testimonial>
          <img src={testimonial3} alt="Client 3" />
          <p>
            "Their team is knowledgeable and committed to delivering quality
            results."
          </p>
          <h4>- Client Three</h4>
        </Testimonial>
      </Container>
    </Section>
  );
};

export default Testimonials;

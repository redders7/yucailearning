// src/components/Portfolio.jsx
import React from "react";
import styled from "styled-components";
import portfolio1 from "../assets/images/portfolio-placeholder1.jpg";
import portfolio2 from "../assets/images/portfolio-placeholder2.jpg";
import portfolio3 from "../assets/images/portfolio-placeholder3.jpg";
import portfolio4 from "../assets/images/portfolio-placeholder4.jpg";

const Section = styled.section`
  padding: 4rem 2rem;
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

const PortfolioGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const PortfolioItem = styled.div`
  margin: 1rem;
  width: 300px;
  position: relative;
  overflow: hidden;
  border-radius: 10px;

  img {
    width: 100%;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }

  &:hover div {
    opacity: 1;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 123, 255, 0.7);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  text-align: center;
  padding: 1rem;
`;

const Portfolio = () => {
  return (
    <Section id="portfolio">
      <Container>
        <Title>Our Portfolio</Title>
        <PortfolioGrid>
          <PortfolioItem>
            <img src={portfolio1} alt="Project 1" />
            <Overlay>
              <div>
                <h3>Project One</h3>
                <p>Brief description of the project.</p>
              </div>
            </Overlay>
          </PortfolioItem>
          <PortfolioItem>
            <img src={portfolio2} alt="Project 2" />
            <Overlay>
              <div>
                <h3>Project Two</h3>
                <p>Brief description of the project.</p>
              </div>
            </Overlay>
          </PortfolioItem>
          <PortfolioItem>
            <img src={portfolio3} alt="Project 3" />
            <Overlay>
              <div>
                <h3>Project Three</h3>
                <p>Brief description of the project.</p>
              </div>
            </Overlay>
          </PortfolioItem>
          <PortfolioItem>
            <img src={portfolio4} alt="Project 4" />
            <Overlay>
              <div>
                <h3>Project Four</h3>
                <p>Brief description of the project.</p>
              </div>
            </Overlay>
          </PortfolioItem>
        </PortfolioGrid>
      </Container>
    </Section>
  );
};

export default Portfolio;

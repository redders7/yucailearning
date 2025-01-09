// src/components/Navbar.jsx
import React, { useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  background: #fff;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    position: absolute;
    top: 60px;
    right: 0;
    background: #fff;
    width: 100%;
    text-align: center;
  }
`;

const MenuItem = styled.li`
  margin-left: 2rem;

  @media (max-width: 768px) {
    margin: 1.5rem 0;
  }
`;

const MenuLink = styled.a`
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    color: #007bff;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }

  div {
    width: 25px;
    height: 3px;
    background: #333;
    margin: 5px;
    transition: all 0.3s ease;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo href="#">Yucai Learning</Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuItem>
          <MenuLink href="#hero">Home</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#about">About</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#services">Services</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#portfolio">Portfolio</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#testimonials">Testimonials</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#contact">Contact</MenuLink>
        </MenuItem>
      </Menu>
    </Nav>
  );
};

export default Navbar;

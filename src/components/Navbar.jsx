// src/components/Navbar.jsx

import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.png"; // Adjust the path if necessary

const Nav = styled.nav`
  background: #ffffff;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  img {
    height: 40px; /* Adjust based on your logo size */
    width: auto;
  }
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    position: absolute;
    top: 60px;
    left: 0;
    background: #ffffff;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
  color: #333333;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;

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
    background: #333333;
    margin: 5px;
    transition: all 0.3s ease;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Nav>
      <Logo href="/" onClick={closeMenu} aria-label="Yucai Learning Home">
        <img src={logo} alt="Yucai Learning Logo" />
      </Logo>
      <Hamburger onClick={toggleMenu} aria-label="Toggle menu">
        <div></div>
        <div></div>
        <div></div>
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuItem>
          <MenuLink href="#hero" onClick={closeMenu}>
            Home
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#about" onClick={closeMenu}>
            About
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/schedule" onClick={closeMenu}>
            Schedule
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#portfolio" onClick={closeMenu}>
            Portfolio
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#testimonials" onClick={closeMenu}>
            Testimonials
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#contact" onClick={closeMenu}>
            Contact
          </MenuLink>
        </MenuItem>
      </Menu>
    </Nav>
  );
};

export default Navbar;

import React from "react";
import styled from "styled-components";
import { device } from "../device";
import { Navbar, Container, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <StyledNavbar collapseOnSelect bg="light" expand="lg">
      <StyledContainer>
        <StyledToggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <StyledNav className="me-auto">
            <StyledNavLink href="#about">About</StyledNavLink>
            <StyledNavLink href="#projects">Projects</StyledNavLink>
            <StyledNavLink href="#contact">Contact</StyledNavLink>
          </StyledNav>
        </Navbar.Collapse>
      </StyledContainer>
    </StyledNavbar>
  );
};

export default Navigation;

const StyledNavbar = styled(Navbar)`
  > .container {
  }
`;

const StyledContainer = styled(Container)`
  > .navbar-nav {
    @media ${device.sm} {
      width: 80%;
      margin: 0;
    }
  }
`;

const StyledToggle = styled(Navbar.Toggle)`
  border: none;

  &:focus {
    box-shadow: none;
  }
`;

const StyledNav = styled(Nav)`
  width: 50%;
  margin: 0 1.25rem;

  @media ${device.sm} {
    width: 80%;
    margin: 0;
  }
`;

const StyledNavLink = styled(Nav.Link)`
  font-weight: bold;
  letter-spacing: 0.0781rem;
  &:not(:last-child) {
    margin-right: 1.5rem;
  }

  @media ${device.sm} {
    padding-top: 0.9375rem;
    padding-left: 0.9375rem;
    margin-right: 0;
    font-size: .95rem;
  }
`;

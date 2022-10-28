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
    @media ${device.sm} {
      flex-direction: column;
      align-items: flex-end;
    }
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
  margin: 0 20px;

  @media ${device.sm} {
    width: 80%;
    margin: 0;
  }
`;

const StyledNavLink = styled(Nav.Link)`
  font-weight: bold;
  &:not(:last-child) {
    margin-right: 1.5rem;
  }
`;

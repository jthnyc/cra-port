import React from "react";
import styled from "styled-components";
import { device } from "../device";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const { t, ready } = useTranslation("common");
  if (!ready) return <p>Loading translations...</p>;

  return (
    <StyledNavbar collapseOnSelect bg="light" expand="lg">
      <StyledContainer>
        <StyledToggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <StyledNav className="me-auto">
            <StyledNavLink href="#about">{t("about")}</StyledNavLink>
            <StyledNavLink href="#projects">{t("projects")}</StyledNavLink>
            <StyledNavLink href="#contact">{t("contact")}</StyledNavLink>
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
  margin: 0 1.25rem;

  @media ${device.sm} {
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

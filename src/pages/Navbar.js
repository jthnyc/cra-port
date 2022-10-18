import styled from "styled-components";
import { device } from "../device";
import { Navbar, Nav, Container } from "react-bootstrap";
// import alignright from "../../public/images/alignright.svg";

export default function NavBar() {
  return (
    <NavigationBar
      fixed="top"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <NavContainer>
        {/* <Navbar.Brand href="/">繁</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Navigation>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
            <Nav.Link
              href="https://drive.google.com/file/d/1rSBj68wNNAn7MLEm6LEY1Z8Xevw6mAHE/view?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
            >
              Resume
            </Nav.Link>
          </Navigation>
        </Navbar.Collapse>
      </NavContainer>
    </NavigationBar>
  );
}

const NavigationBar = styled(Navbar)`
  background-color: var(--prussianblue) !important;
  display: flex;
  & a {
    color: white !important;
    &:not(last-child) {
      margin-right: 1.125rem;
    }
    &:last-child {
      border: 1px solid white;
      border-radius: 0.5rem;
    }
  }
`;

const NavContainer = styled(Container)`
  background-color: var(--prussianblue);
  padding-top: 15px;
  max-width: 2400px;
  padding-left: 3.125rem;
  & button {
    border: none;
    &:focus {
      box-shadow: none;
    }
    & span {
    }
  }
  @media ${device.sm} {
    padding-left: 1.5rem;
    // background-color: darkblue;
  }
`;

const Navigation = styled(Nav)`
  color: white;
  padding-bottom: 20px;
  @media ${device.md} {
    & a {
      display: flex;
      justify-content: flex-end;
      margin-right: 0.9375rem;
      &:first-child {
        margin-top: 0.625rem;
      }
      &:not(last-child) {
        margin-bottom: 0.625rem;
      }
      &:last-child {
        margin-left: 254px;
        display: flex;
        justify-content: center;
        margin-right: 1rem;
      }
    }
  }
`;

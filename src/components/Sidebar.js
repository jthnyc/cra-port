import Link from "next/link";
import styled from "styled-components";
import { device } from "../device";
import { GitHub, Linkedin, AtSign } from "react-feather";

export default function Navbar() {
  return (
    <SidebarContainer>
      <SidebarList>
        <Link href="https://github.com/jthnyc">
          <a target="_blank" rel="noreferrer noopener">
            <GitHub />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/joannathhuang/">
          <a target="_blank" rel="noreferrer noopener">
            <Linkedin />
          </a>
        </Link>
        <Link href="mailto:joannathhuang@gmail.com">
          <a target="_blank" rel="noreferrer noopener">
            <AtSign />
          </a>
        </Link>
      </SidebarList>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  width: 4.5rem;
  position: fixed;
  left: 1.25rem;
  right: auto;
  bottom: 0;
  z-index: 10;
`;

const SidebarList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  &::after {
    content: "";
    display: block;
    width: 0.0625rem;
    height: 5.625rem;
    margin: 0 auto;
    background-color: #edf5e1;
    margin-top: 0.765rem;
  }
  & > a {
    margin: 0.5rem 0.5rem;
    transition: all 0.125s ease;
    color: #edf5e1;
    &:hover {
      color: #ff7f11;
    }
  }
  @media ${device.sm} {
    display: none;
  }
`;

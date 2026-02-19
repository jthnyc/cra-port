import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { detectCurrentSection, getVisibleNavLinks } from "../utils/navigationHelpers";

const Navigation = () => {
  const { t } = useTranslation("common");
  const [isVisible, setIsVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Only show nav if scrolled AND viewport is wide enough (desktop)
      const isDesktopWidth = window.innerWidth > 1070;
      if (scrollY > 100 && isDesktopWidth) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Detect current section using shared utility
      setCurrentSection(detectCurrentSection(scrollY));
    };

    const handleResize = () => {
      // Hide nav if viewport gets too narrow
      if (window.innerWidth <= 1070) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <NavBar $isVisible={isVisible}>
      <NavContainer>
        <NavLinks>
          {getVisibleNavLinks(currentSection, t).map((link, index) => (
            <React.Fragment key={link.id}>
              {index > 0 && <Separator>|</Separator>}
              <NavLink href={link.href}>{link.label}</NavLink>
            </React.Fragment>
          ))}
        </NavLinks>
      </NavContainer>
    </NavBar>
  );
};

export default Navigation;

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(248, 249, 250, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  z-index: 1000;
  transform: translateY(${props => props.$isVisible ? '0' : '-100%'});
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Hide on mobile/tablet - mobile nav takes over */
  @media (max-width: 1070px) {
    display: none;
  }
`;

const NavContainer = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  padding: 1.25rem 2rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Separator = styled.span`
  color: var(--prussianblue);
  opacity: 0.3;
  font-size: 0.875rem;
`;

const NavLink = styled.a`
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--prussianblue);
  text-decoration: none;
  transition: color 0.2s ease;
  letter-spacing: 0.02em;
  
  &:hover {
    color: var(--cyan);
  }
`;
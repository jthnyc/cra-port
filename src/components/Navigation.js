import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { device } from "../device";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const { t } = useTranslation("common");
  const [isVisible, setIsVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Show nav once user starts scrolling
      if (scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Detect current section
      const sections = ['intro', 'about', 'projects', 'contact'];
      const scrollPosition = scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getVisibleLinks = () => {
    const allLinks = [
      { id: 'intro', label: 'Home', href: '#' },
      { id: 'about', label: t("about"), href: '#about' },
      { id: 'projects', label: t("projects"), href: '#projects' },
      { id: 'contact', label: t("contact"), href: '#contact' }
    ];
    
    return allLinks.filter(link => link.id !== currentSection);
  };

  return (
    <NavBar $isVisible={isVisible}>
      <NavContainer>
        <NavLinks>
          {getVisibleLinks().map((link, index) => (
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
  
  @media ${device.sm} {
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
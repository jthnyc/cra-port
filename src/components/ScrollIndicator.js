import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { ChevronDown } from "react-feather";
import { device } from "../device";

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide indicator once user starts scrolling
      if (window.scrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!isVisible) return null;

  return (
    <Indicator onClick={scrollToAbout}>
      <ChevronDown size={24} />
    </Indicator>
  );
};

export default ScrollIndicator;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
`;

const Indicator = styled.div`
  position: fixed;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  color: var(--cyan);
  opacity: 0.6;
  animation: ${bounce} 2s ease-in-out infinite;
  cursor: pointer;
  z-index: 10;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
  
  @media ${device.sm} {
    display: none;
  }
`;
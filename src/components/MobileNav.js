import { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { Menu, X } from 'react-feather';
import { useTranslation } from 'react-i18next';
import { device } from '../device';
import { detectCurrentSection, getVisibleNavLinks } from '../utils/navigationHelpers';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('intro');
  const { t, i18n } = useTranslation('common');
  const scrollPosition = useRef(0);
  const isNavigating = useRef(false);  // Track if user clicked a nav link

  // Track current section on scroll - BUT ONLY when menu is closed
  useEffect(() => {
    if (isOpen) {
      // Don't listen to scroll when menu is open (scroll position is fake due to fixed positioning)
      return;
    }

    const handleScroll = () => {
      setCurrentSection(detectCurrentSection(window.scrollY));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);  // Re-run when menu opens/closes

  // Lock body scroll when menu opens - preserve scroll position
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      scrollPosition.current = window.scrollY;
      
      // Lock body and maintain visual position
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosition.current}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scroll position ONLY if not navigating
      const scrollY = scrollPosition.current;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      
      // Only restore if user didn't click a nav link (just closed menu)
      if (!isNavigating.current) {
        window.scrollTo(0, scrollY);
      }
      
      // Reset navigation flag
      isNavigating.current = false;
    }
    
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ch' : 'en';
    i18n.changeLanguage(newLang);
  };

  const handleNavClick = (e) => {
    // Extract section id from href (e.g., "#about" -> "about", "#intro" -> "intro")
    const href = e.currentTarget.getAttribute('href');
    const sectionId = href.replace('#', '');
    
    // Set flag to indicate user is navigating (don't restore scroll)
    isNavigating.current = true;
    
    // Update current section immediately
    setCurrentSection(sectionId);
    
    // Close menu (browser will handle scrolling to the section)
    setIsOpen(false);
  };

  return (
    <>
      <TopBanner>
        <HamburgerButton onClick={() => setIsOpen(true)}>
          <Menu size={24} />
        </HamburgerButton>
        <BannerLanguageToggle onClick={toggleLanguage}>
          {i18n.language === 'en' ? '繁' : 'EN'}
        </BannerLanguageToggle>
      </TopBanner>

      <Overlay $isOpen={isOpen} onClick={() => setIsOpen(false)} />

      <SlideMenu $isOpen={isOpen}>
        <MenuContent>
          <NavLinks>
            {getVisibleNavLinks(currentSection, t).map((link) => (
              <NavLink 
                key={link.id}
                href={link.href} 
                onClick={handleNavClick}
              >
                {link.label}
              </NavLink>
            ))}
          </NavLinks>

          <CloseButton onClick={() => setIsOpen(false)}>
            <X size={20} />
          </CloseButton>
        </MenuContent>
      </SlideMenu>
    </>
  );
};

export default MobileNav;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const TopBanner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: rgba(4, 56, 108, 0.8);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(92, 225, 230, 0.2);
  display: none;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  z-index: 999;
  
  @media ${device.desktop} {
    display: flex;
  }
`;

const HamburgerButton = styled.button`
  background: transparent;
  border: none;
  color: var(--cyan);
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  &:hover {
    color: var(--white);
    transform: scale(1.1);
  }
  
  &:active {
    animation: ${pulse} 0.3s ease;
  }
`;

const BannerLanguageToggle = styled.button`
  background: transparent;
  color: var(--cyan);
  border: 1px solid var(--cyan);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 60px;
  
  &:hover {
    background: var(--cyan);
    color: var(--prussianblue-dark);
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 1000;
  opacity: ${props => props.$isOpen ? 1 : 0};
  pointer-events: ${props => props.$isOpen ? 'auto' : 'none'};
  transition: opacity 0.3s ease;
  touch-action: none;
  
  @media (min-width: 1071px) {
    display: none;
  }
`;

const SlideMenu = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 280px;
  max-width: 80vw;
  background: rgba(4, 56, 108, 0.7);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-right: 1px solid rgba(92, 225, 230, 0.3);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem 1.5rem 3rem 1.5rem;
  transform: translateX(${props => props.$isOpen ? '0' : '-100%'});
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${props => props.$isOpen ? '4px 0 30px rgba(0, 0, 0, 0.5)' : 'none'};
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg, 
      rgba(92, 225, 230, 0.08) 0%, 
      transparent 50%, 
      rgba(255, 107, 107, 0.08) 100%
    );
    pointer-events: none;
  }
  
  @media (min-width: 1071px) {
    display: none;
  }
`;

const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  z-index: 2;
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const NavLink = styled.a`
  color: var(--white);
  text-decoration: none;
  font-size: 1.75rem;
  font-weight: 600;
  padding: 0.75rem 0;
  transition: all 0.2s ease;
  
  &:hover {
    color: var(--cyan);
    transform: translateX(8px);
  }
`;

const CloseButton = styled.button`
  background: rgba(92, 225, 230, 0.1);
  border: 1px solid var(--cyan);
  color: var(--cyan);
  cursor: pointer;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  align-self: flex-end;
  transition: all 0.2s ease;
  
  &:hover {
    background: var(--cyan);
    color: var(--prussianblue-dark);
    transform: rotate(90deg);
  }
`;
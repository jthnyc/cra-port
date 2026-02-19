import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Menu, X } from 'react-feather';
import { useTranslation } from 'react-i18next';
import { device } from '../device';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation('common');

  // Lock body scroll when menu opens - fixed version
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.height = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
    };
  }, [isOpen]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ch' : 'en';
    i18n.changeLanguage(newLang);
  };

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <FloatingButton onClick={() => setIsOpen(true)}>
        <Menu size={24} />
      </FloatingButton>

      <Overlay $isOpen={isOpen} onClick={() => setIsOpen(false)} />

      <SlideMenu $isOpen={isOpen}>
        <MenuContent>
          <NavLinks>
            <NavLink href="#about" onClick={handleNavClick}>
              {t('about')}
            </NavLink>
            <NavLink href="#projects" onClick={handleNavClick}>
              {t('projects')}
            </NavLink>
            <NavLink href="#contact" onClick={handleNavClick}>
              {t('contact')}
            </NavLink>
          </NavLinks>

          <LanguageToggle onClick={toggleLanguage}>
            {i18n.language === 'en' ? '繁體中文' : 'English'}
          </LanguageToggle>

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

const FloatingButton = styled.button`
  position: fixed;
  bottom: 2rem;
  left: 1.5rem;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--cyan);
  border: none;
  display: none;
  align-items: center;
  justify-content: center;
  color: var(--prussianblue-dark);
  box-shadow: 0 4px 20px rgba(92, 225, 230, 0.4);
  cursor: pointer;
  z-index: 999;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 30px rgba(92, 225, 230, 0.6);
  }
  
  &:active {
    animation: ${pulse} 0.3s ease;
  }
  
  @media ${device.sm} {
    display: flex;
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
  
  @media (min-width: 577px) {
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
  
  @media (min-width: 577px) {
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
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease;
  
  &:hover {
    color: var(--cyan);
    border-bottom-color: var(--cyan);
    transform: translateX(8px);
  }
`;

const LanguageToggle = styled.button`
  background: var(--coral);
  color: var(--prussianblue-dark);
  border: none;
  padding: 0.875rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  align-self: stretch;
  
  &:hover {
    background: var(--cyan);
    transform: scale(1.02);
  }
  
  &:active,
  &:focus {
    background: var(--coral);
    outline: none;
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
import styled from 'styled-components';
import { Mail, Linkedin, GitHub } from 'react-feather';
import { device } from '../device';
import { useTranslation } from 'react-i18next';
import { track } from '@vercel/analytics';
import { useEffect, useRef } from 'react';

const Contact = () => {
  const { t } = useTranslation('contact');
  const sectionRef = useRef(null);

  // Track when section becomes visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          track('section_view', { 
            section: 'contact'
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Track contact interactions
  const handleEmailClick = () => {
    track('contact_click', { 
      type: 'email'
    });
  };

  const handleLinkedInClick = () => {
    track('contact_click', { 
      type: 'linkedin'
    });
  };

  const handleGitHubClick = () => {
    track('contact_click', { 
      type: 'github'
    });
  };

  return (
    <ContactSection id="contact" ref={sectionRef}>
      <ContactContainer>
        <Title>{t('title')}</Title>
        <Subtitle>{t('subtitle')}</Subtitle>

        <PrimaryAction 
          href="mailto:your.email@example.com"
          onClick={handleEmailClick}
        >
          <Mail size={22} />
          {t('cta')}
        </PrimaryAction>

        <Divider>
          <DividerLine />
          <DividerText>{t('divider')}</DividerText>
          <DividerLine />
        </Divider>

        <SocialLinks>
          <SocialLink 
            href="https://www.linkedin.com/in/joannathhuang/" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={handleLinkedInClick}
          >
            <Linkedin size={24} />
            {t('linkedin')}
          </SocialLink>
          <SocialLink 
            href="https://github.com/jthnyc" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={handleGitHubClick}
          >
            <GitHub size={24} />
            {t('github')}
          </SocialLink>
        </SocialLinks>

        <Footer>{t('footer')}</Footer>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;

const ContactSection = styled.section`
  max-width: 75rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 0 4rem 0;
  
  @media ${device.sm} {
    padding: 5rem 1rem 3rem 1rem;
    min-height: 80vh;
  }
`;

const ContactContainer = styled.div`
  max-width: 40rem;
  text-align: center;
  width: 100%;
`;

const Title = styled.h2`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: var(--cyan);
  margin-bottom: 1.5rem;
  
  @media ${device.sm} {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--white);
  margin-bottom: 2.5rem;
  opacity: 0.9;
  
  @media ${device.sm} {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const PrimaryAction = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.875rem;
  padding: 1.125rem 2.5rem;
  background: var(--cyan);
  color: var(--prussianblue-dark);
  font-weight: 600;
  font-size: 1.125rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(92, 225, 230, 0.3);
  margin-bottom: 3rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 30px rgba(92, 225, 230, 0.5);
    background: var(--coral);
  }
  
  @media ${device.sm} {
    padding: 1rem 2rem;
    font-size: 1rem;
    margin-bottom: 2.5rem;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media ${device.sm} {
    margin-bottom: 1.5rem;
  }
`;

const DividerLine = styled.div`
  flex: 1;
  height: 1px;
  background: rgba(92, 225, 230, 0.2);
`;

const DividerText = styled.span`
  font-size: 0.875rem;
  color: var(--white);
  opacity: 0.5;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 2.5rem;
  
  @media ${device.sm} {
    gap: 1rem;
    margin-bottom: 2rem;
  }
`;

const SocialLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--cyan);
  text-decoration: none;
  font-size: 0.9375rem;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    color: var(--coral);
    transform: translateY(-3px);
  }
  
  & svg {
    stroke-width: 2;
  }
`;

const Footer = styled.p`
  font-size: 0.9375rem;
  color: var(--white);
  opacity: 0.6;
  
  @media ${device.sm} {
    font-size: 0.875rem;
  }
`;
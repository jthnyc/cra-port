import styled, { keyframes } from "styled-components";
import { Greeting } from './';
import { spotify, duolingo, dumpling, profile } from '../images';
import { useTranslation } from "react-i18next";
import { track } from '@vercel/analytics';
import { useEffect, useRef } from 'react';

const Intro = () => {
  const { t, ready } = useTranslation("intro");
  const sectionRef = useRef(null); // Add ref for section tracking

  // Track when section becomes visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          track('Section View', { section: 'intro' });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Track activity icon clicks
  const handleActivityClick = (activity) => {
    track('Activity Click', { activity });
  };

  if (!ready) return <p>Loading translations...</p>;

  return (
    <HeroSection id="intro" ref={sectionRef}> {/* Add ref here */}
      <HeroContent>
        <ProfileSection>
          <VinylAccent />
          <AlbumCover src={profile} alt="Joanna Huang" />
        </ProfileSection>

        <TextSection>
          <Greeting />
          <IntroText>
            {t("intro-p1")}
            <br/><br/>
            {t("intro-p2")}
            <ActivityIcon 
              src={spotify} 
              alt="Spotify" 
              onClick={() => handleActivityClick('spotify')}
              style={{ cursor: 'pointer' }}
            /> {t("intro-p2-1")}
            <ActivityIcon 
              src={duolingo} 
              alt="duolingo" 
              onClick={() => handleActivityClick('duolingo')}
              style={{ cursor: 'pointer' }}
            /> {t("intro-p2-2")}
            <ActivityIcon 
              src={dumpling} 
              alt="dumpling" 
              onClick={() => handleActivityClick('dumpling')}
              style={{ cursor: 'pointer' }}
            /> {t("intro-p2-3")}
            <br/><br/>
            {t("intro-p3")}
          </IntroText>
        </TextSection>
      </HeroContent>
    </HeroSection>
  );
};

export default Intro;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const HeroSection = styled.section`
  max-width: 75rem;
  position: relative;
  padding: 4rem 0 6rem 0; /* Added more bottom padding for waveform spacing */
  min-height: 100vh;
  display: flex;
  align-items: center;
  
  @media (max-height: 700px) {
    padding-top: 5rem;
  }
  
  @media (max-width: 1070px) {
    padding: 8rem 0 4rem 0; /* Increased bottom padding on mobile */
    min-height: auto;
  }
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: minmax(320px, 450px) minmax(auto, 600px); /* Made text narrower, image wider */
  gap: clamp(3rem, 6vw, 5rem); /* Increased gap */
  align-items: center;
  justify-content: center; /* Center the whole grid */
  position: relative;
  z-index: 1;
  width: 100%;
  
  @media (max-width: 1070px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    text-align: center;
    max-width: 100%;
    overflow: hidden;
  }
`;

const ProfileSection = styled.div`
  position: relative;
  width: 100%;
  max-width: 450px; /* Increased from 420px */
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 1070px) {
    max-width: 360px; /* Increased from 300px - takes more screen width */
    margin: 0 auto;
  }
`;

const VinylAccent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 110%;
  height: 110%;
  border-radius: 50%;
  background: 
    /* More visible rings with higher opacity and contrast */
    radial-gradient(circle at center, transparent 30%, rgba(92, 225, 230, 0.85) 30.5%, transparent 31%),
    radial-gradient(circle at center, transparent 35%, rgba(255, 107, 107, 0.7) 35.5%, transparent 36%),
    radial-gradient(circle at center, transparent 40%, rgba(92, 225, 230, 0.75) 40.5%, transparent 41%),
    radial-gradient(circle at center, transparent 45%, rgba(255, 107, 107, 0.85) 45.5%, transparent 46%),
    /* More pronounced color sections */
    conic-gradient(
      from 0deg,
      rgba(92, 225, 230, 0.6) 0deg,
      rgba(255, 107, 107, 0.5) 90deg,
      rgba(92, 225, 230, 0.6) 180deg,
      rgba(255, 107, 107, 0.5) 270deg,
      rgba(92, 225, 230, 0.6) 360deg
    );
  animation: ${rotate} 20s linear infinite;
  z-index: 0;
`;

const AlbumCover = styled.img`
  width: 92%; /* Increased from 85% */
  height: 92%; /* Increased from 85% */
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center 5%; /* Adjusted to show more of photo */
  border-radius: 4px;
  border: 4px solid var(--cyan);
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.4),
    0 0 40px rgba(92, 225, 230, 0.2),
    inset 0 0 60px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  top: 25px; /* Center on vinyl */
  left: 25px; /* Center on vinyl */
  z-index: 1;
  
  /* Reduce offset on mobile for better centering */
  @media (max-width: 1070px) {
    top: 0;
    left: 0;
  }
  
  /* Album cover styling */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 50%,
      rgba(0, 0, 0, 0.2) 100%
    );
    border-radius: 2px;
    pointer-events: none;
  }
  
  &:hover {
    transform: scale(1.03) translateY(-4px);
    box-shadow: 
      0 25px 70px rgba(0, 0, 0, 0.5),
      0 0 60px rgba(92, 225, 230, 0.3),
      inset 0 0 60px rgba(0, 0, 0, 0.15);
  }
`;

const TextSection = styled.div`
  max-width: 600px; /* Constrained text width */
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @media (max-width: 1070px) {
    max-width: 100%;
    text-align: center;
  }
`;

const IntroText = styled.p`
  line-height: 1.75;
  font-size: clamp(1rem, 1.1vw, 1.0625rem);
  color: var(--white);
  margin: 0;
  
  & a {
    color: var(--coral);
    font-weight: 600;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--coral-light);
    }
  }
  
  @media (max-width: 1070px) {
    font-size: 1rem;
  }
`;

const ActivityIcon = styled.img`
  max-width: 1.125rem;
  margin: 0 0.125rem;
  vertical-align: middle;
`;
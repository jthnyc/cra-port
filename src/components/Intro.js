import styled, { keyframes } from "styled-components";
import { Greeting } from './';
import { spotify, duolingo, dumpling, profile } from '../images';
import { useTranslation } from "react-i18next";

const Intro = () => {
  const { t, ready } = useTranslation("intro");

  if (!ready) return <p>Loading translations...</p>;

  return (
    <HeroSection>
      <HeroContent>
        <ProfileSection>
          <VinylAccent />
          <ProfileImage src={profile} alt="Joanna Huang" />
        </ProfileSection>

        <TextSection>
          <Greeting />
          <IntroText>
            {t("intro-p1")}
            <br/><br/>
            {t("intro-p2")}
            <ActivityIcon src={spotify} alt="Spotify"/> {t("intro-p2-1")}
            <ActivityIcon src={duolingo} alt="duolingo" /> {t("intro-p2-2")}
            <ActivityIcon src={dumpling} alt="dumpling" /> {t("intro-p2-3")}
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
  padding: 4rem 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  
  @media (max-height: 700px) {
    padding-top: 5rem;
  }
  
  @media (max-width: 1070px) {
    padding: 8rem 0 3rem 0;
    min-height: auto;
  }
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: minmax(320px, 420px) 1fr;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: center;
  position: relative;
  z-index: 1;
  width: 100%;
  
  @media (max-width: 1070px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    text-align: center;
  }
`;

const ProfileSection = styled.div`
  position: relative;
  width: 100%;
  max-width: 420px;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 1070px) {
    max-width: 300px;
    margin: 0 auto;
  }
`;

const VinylAccent = styled.div`
  position: absolute;
  top: 30%;
  left: 30%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: 
    radial-gradient(circle at center, transparent 30%, rgba(92, 225, 230, 0.4) 30.5%, transparent 31%),
    radial-gradient(circle at center, transparent 35%, rgba(92, 225, 230, 0.3) 35.5%, transparent 36%),
    radial-gradient(circle at center, transparent 40%, rgba(92, 225, 230, 0.3) 40.5%, transparent 41%),
    radial-gradient(circle at center, transparent 45%, rgba(92, 225, 230, 0.4) 45.5%, transparent 46%),
    conic-gradient(
      from 0deg,
      rgba(92, 225, 230, 0.2) 0deg,
      rgba(4, 56, 108, 0.3) 90deg,
      rgba(92, 225, 230, 0.2) 180deg,
      rgba(4, 56, 108, 0.3) 270deg,
      rgba(92, 225, 230, 0.2) 360deg
    );
  animation: ${rotate} 20s linear infinite;
  z-index: -1;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  object-position: center 30%;
  border: 4px solid var(--cyan);
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.4),
    0 0 40px rgba(92, 225, 230, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 1;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 
      0 25px 70px rgba(0, 0, 0, 0.5),
      0 0 60px rgba(92, 225, 230, 0.3);
  }
`;

const TextSection = styled.div`
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @media (max-width: 1070px) {
    max-width: 100%;
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
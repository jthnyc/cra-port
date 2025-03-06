import styled from "styled-components";
import { device } from "../device";
import { Greeting } from './';
import { spotify, duolingo, dumpling } from '../images';
import { useTranslation } from "react-i18next";

const Intro = () => {
  const { t, ready } = useTranslation("intro");

  if (!ready) return <p>Loading translations...</p>;

  return (
    <HeroSection>
      <Greeting />
      <h1>{t("title")}</h1>
      <p>
        {t("intro-p1")}
        <br/><br/>
        {t("intro-p2")} <ActivityIcon src={spotify} alt="Spotify"/> {t("intro-p2-1")} <ActivityIcon src={duolingo} alt="duolingo" /> {t("intro-p2-2")} <ActivityIcon src={dumpling} alt="dumpling" /> {t("intro-p2-3")}
        <br/><br/>
        🚀 {t("intro-p3")}
      </p>
    </HeroSection>
  );
};

export default Intro;

const HeroSection = styled.section`
  max-width: 62.5rem;
  & code {
    color: white;
  }
  & a {
    color: var(--lightorange);
    font-weight: bold;
  }
  & code {
    margin: 0 0 1.875rem 0;
  }
  & h2 {
    font-size: 3rem;
  }
  & p {
    margin-top: 2rem;
    max-width: 38rem;
    line-height: 1.5rem;
  }
  @media ${device.sm} {
    padding-top: 7.5rem;
  }
`;

const ActivityIcon = styled.img`
  max-width: 1.125rem;
`;

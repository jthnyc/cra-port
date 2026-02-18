import styled from "styled-components";
import { device } from "../device";
import { profile } from '../images';
import { useTranslation, Trans} from "react-i18next";

export const About = () => {
  const { t, ready } = useTranslation("about");
  if (!ready) return <p>Loading translations...</p>;

  return (
    <AboutSection id="about">
      <h2>
        {t("title")}
      </h2>
      <AboutContent>
        <AboutText>
          <p>
            {t("p1")}
          </p>
          <p>
            <Trans i18nKey="p2" ns="about" components={[<strong key="0" />, <strong key="1" />]} />
          </p>
          <p>
            <Trans i18nKey="p3" ns="about" components={[<strong key="2" />, <strong key="3" />]} />
          </p>
          <br></br>
          <h3>🛠 {t("subheader")}</h3>
          <TechList>
            <div>
              <h4>{t("subtext1")}</h4>
              <List>
                <li><code>{t("list1-1")}</code></li>
                <li><code>{t("list1-2")}</code></li>
                <li><code>{t("list1-3")}</code></li>
              </List>
            </div>
            <div>
              <h4>{t("subtext2")}</h4>
              <List>  
                <li><code>{t("list2-1")}</code></li>
                <li><code>{t("list2-2")}</code></li>
                <li><code>{t("list2-3")}</code></li>
              </List>
            </div>
            <div>
              <h4>{t("subtext3")}</h4>
              <List> 
                <li><code>{t("list3-1")}</code></li>
                <li><code>{t("list3-2")}</code></li>
                <li><code>{t("list3-3")}</code></li>
              </List>
            </div>
          </TechList>
        </AboutText>
        <ImageContainer>
          <img src={profile} alt="profile" />
        </ImageContainer>
      </AboutContent>
    </AboutSection>
  );
};

export default About;

const AboutSection = styled.section`
  max-width: 62.5rem;
  align-items: flex-start;
  & h2 {
    margin-top: 2rem;
  }
  & p {
    margin-top: 2rem;
    line-height: 1.5rem;
  }
  @media ${device.md} {
    & p {
      margin: 1.5rem 0 0 0;
    }
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 5rem;
  @media ${device.lg} {
    display: block;
  }
`;

const AboutText = styled.div`
  @media ${device.lg} {
    margin-bottom: 3.125rem;
  }
  
  & p {
    margin-top: 1.5rem;
    line-height: 1.75;
    color: rgba(237, 245, 225, 0.95);
    
    &:first-of-type {
      font-size: 1.125rem;
      color: var(--white);
    }
  }
  
  & strong {
    color: var(--cyan);
    font-weight: 600;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  z-index: 5;

  @media ${device.lg} {
    display: flex;
    justify-content: center;
  }

  @media ${device.md} {
    & img {
      max-width: 95%;
    }
  }
`;

const TechList = styled.div`
  margin-top: 2rem;
  font-weight: 800;
`;

const List = styled.ul`
  & li {
    list-style-type: circle;
  }
`;

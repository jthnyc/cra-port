import styled from 'styled-components';
import { device } from '../device';
import { useTranslation } from 'react-i18next';
import SkillConstellation from './SkillConstellation';

const About = () => {
  const { t } = useTranslation('about');

  // Get timeline from i18n
  const timelineStops = t('timeline', { returnObjects: true });

  // Function to highlight projects as clickable links
  const highlightText = (text) => {
    let highlightedText = text;
    
    // Highlight projects as links
    const projects = t('highlight_projects', { returnObjects: true });
    if (Array.isArray(projects)) {
      projects.forEach(project => {
        const regex = new RegExp(`(${project.name})`, 'g');
        highlightedText = highlightedText.replace(regex, 
          `<a href="${project.anchor}" class="project-link">$1</a>`);
      });
    }
    
    return highlightedText;
  };

  return (
    <AboutSection id="about">
      <h2>{t('title')}</h2>
      
      <SplitContainer>
        {/* Left: Timeline */}
        <TimelineSidebar>
          <TimelineLine />
          {timelineStops.map((stop, index) => (
            <TimelineStop key={index}>
              <StopDot />
              <StopContent>
                <StopLabel>{stop.label}</StopLabel>
                <StopDetail $highlight={stop.highlight}>{stop.detail}</StopDetail>
              </StopContent>
            </TimelineStop>
          ))}
        </TimelineSidebar>

        {/* Right: Narrative */}
        <NarrativeContent>
          <Paragraph dangerouslySetInnerHTML={{ __html: highlightText(t('p1')) }} />
          <Paragraph dangerouslySetInnerHTML={{ __html: highlightText(t('p2')) }} />
          <Paragraph dangerouslySetInnerHTML={{ __html: highlightText(t('p3')) }} />
          <Paragraph dangerouslySetInnerHTML={{ __html: highlightText(t('p4')) }} />
          <Paragraph dangerouslySetInnerHTML={{ __html: highlightText(t('p5')) }} />
        </NarrativeContent>
      </SplitContainer>

      {/* Skill Constellation */}
      <SkillConstellation />
    </AboutSection>
  );
};

export default About;

const AboutSection = styled.section`
  max-width: 75rem;
  color: var(--white);
  padding: 0;
  
  & h2 {
    margin-top: 10rem;
    margin-bottom: 3rem;
  }
  
  @media ${device.sm} {
    & h2 {
      margin-top: 6rem;
    }
  }
`;

const SplitContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr;
  gap: 4rem;
  margin-bottom: 6rem;
  
  @media ${device.sm} {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const TimelineSidebar = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding-right: 2rem;
  
  @media ${device.sm} {
    padding-right: 0;
    gap: 2rem;
  }
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 0.35rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(
    to bottom,
    var(--cyan),
    var(--coral)
  );
`;

const TimelineStop = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const StopDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--cyan);
  border: 3px solid var(--prussianblue);
  flex-shrink: 0;
  margin-top: 0.25rem;
`;

const StopContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`;

const StopLabel = styled.div`
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--white);
  line-height: 1.3;
`;

const StopDetail = styled.div`
  font-size: 0.8125rem;
  color: ${props => props.$highlight ? 'var(--coral)' : 'rgba(255, 255, 255, 0.7)'};
  font-style: italic;
  line-height: 1.4;
`;

const NarrativeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  & > * {
    margin-bottom: 0;
  }
  
  @media ${device.sm} {
    gap: 1.25rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.0625rem;
  line-height: 1.7;
  color: var(--white);
  margin: 0;
  
  /* Company highlights - just text color, no background */
  & mark.company {
    background: none;
    color: var(--cyan);
    font-weight: 600;
  }
  
  /* Metric highlights */
  & mark.metric {
    background: none;
    color: var(--coral);
    font-weight: 600;
  }

  /* Chinese first sentence highlight */
  & span.first-sentence {
    color: var(--coral);
    font-weight: 500;
  }
  
  /* Project links */
  & a.project-link {
    color: var(--coral);
    font-weight: 600;
    text-decoration: none;
    border-bottom: 1px solid var(--coral);
    transition: all 0.2s ease;
    
    &:hover {
      border-bottom: 2px solid var(--coral);
      opacity: 0.9;
    }
  }
  
  @media ${device.sm} {
    font-size: 1rem;
  }
`;
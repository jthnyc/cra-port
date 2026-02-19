import { useState } from 'react';
import styled from 'styled-components';
import { ExternalLink, GitHub } from 'react-feather';
import { device } from '../device';

const Project = ({ id, img, title, description, stack, link, github, status }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const renderDescription = () => {
    const isChinese = /[\u4e00-\u9fa5]/.test(description);
    const parts = isChinese 
      ? description.split(/(?<=。)\s*/) 
      : description.split(/(?<=\.)\s+/);
    
    const paragraphs = [];
    
    // First 1-2 sentences = problem (lighter orange)
    if (parts.length > 0) {
      const problemText = parts.slice(0, 2).join(' ');
      paragraphs.push({ text: problemText, color: 'var(--lightorange)' });
    }
    
    // Find where status/results start (sentences with %, "launched", "transparency", etc.)
    let statusStartIndex = -1;
    for (let i = 2; i < parts.length; i++) {
      if (parts[i].includes('%') || 
          parts[i].includes('transparency') || 
          parts[i].includes('launched') || 
          parts[i].includes('Launched') ||
          parts[i].includes('完整透明度') ||
          parts[i].includes('上線') ||
          parts[i].includes('已上線')) {
        statusStartIndex = i;
        break;
      }
    }
    
    // Middle sentences = approach (white)
    if (statusStartIndex > 2) {
      const approachText = parts.slice(2, statusStartIndex).join(' ');
      if (approachText) {
        paragraphs.push({ text: approachText, color: 'var(--white)' });
      }
    } else if (parts.length > 2) {
      // If no status found, put all middle text together
      const approachText = parts.slice(2, parts.length - 1).join(' ');
      if (approachText) {
        paragraphs.push({ text: approachText, color: 'var(--white)' });
      }
    }
    
    // Last sentences = status (coral)
    if (statusStartIndex > -1) {
      const statusText = parts.slice(statusStartIndex).join(' ');
      paragraphs.push({ text: statusText, color: 'var(--coral)' });
    } else if (parts.length > 2) {
      // Last sentence as status
      paragraphs.push({ text: parts[parts.length - 1], color: 'var(--coral)' });
    }
    
    return paragraphs.map((para, index) => (
      <Paragraph key={index} $color={para.color}>
        {para.text}
      </Paragraph>
    ));
  };

  return (
    <ProjectCard 
      id={id}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      $isExpanded={isExpanded}
    >
      <ImageLayer $isExpanded={isExpanded}>
        <ProjectImage src={img} alt={title} $isExpanded={isExpanded} />
        {status && <StatusBadge $isExpanded={isExpanded}>{status}</StatusBadge>}
        
        {/* Show links on image when expanded */}
        <ImageLinks $isExpanded={isExpanded}>
          {link && (
            <ImageLink href={link} target="_blank" rel="noopener noreferrer" title="View Project">
              <ExternalLink size={24} />
            </ImageLink>
          )}
          {github && (
            <ImageLink href={github} target="_blank" rel="noopener noreferrer" title="View Code">
              <GitHub size={24} />
            </ImageLink>
          )}
        </ImageLinks>
      </ImageLayer>
      
      <ContentLayer $isExpanded={isExpanded}>
        <TitleRow>
          <ProjectTitle>{title}</ProjectTitle>
          <MobileLinks>
            {link && (
              <MobileLink href={link} target="_blank" rel="noopener noreferrer" title="View Project">
                <ExternalLink size={20} />
              </MobileLink>
            )}
            {github && (
              <MobileLink href={github} target="_blank" rel="noopener noreferrer" title="View Code">
                <GitHub size={20} />
              </MobileLink>
            )}
          </MobileLinks>
        </TitleRow>
        <ProjectDescription>
          {renderDescription()}
        </ProjectDescription>
        
        <TechStack>{stack}</TechStack>
      </ContentLayer>
    </ProjectCard>
  );
};

export default Project;

const ProjectCard = styled.li`
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(4, 56, 108, 0.3);
  border: 1px solid rgba(92, 225, 230, 0.1);
  margin-bottom: 2rem;
  cursor: default;
  scroll-margin-top: 6rem;  /* Add this to offset for nav bar */
  
  @media ${device.sm} {
    height: auto;
    min-height: 400px;
    scroll-margin-top: 4rem;
  }
`;

const ImageLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${props => props.$isExpanded ? '40%' : '100%'};
  height: 100%;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
  opacity: ${props => props.$isExpanded ? '0.4' : '1'};  /* Fade when expanded */
  
  @media ${device.sm} {
    position: relative;
    width: 100% !important;
    height: 250px;
    opacity: 1 !important;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;  /* Changed from cover to contain */
  object-position: center;
  background: rgba(0, 0, 0, 0.2);  /* Subtle background for letterboxing */
`;

const StatusBadge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${props => props.$isExpanded ? 'rgba(92, 225, 230, 0.2)' : 'rgba(92, 225, 230, 0.15)'};
  color: var(--cyan);
  border: 1px solid rgba(92, 225, 230, 0.3);
  padding: 0.375rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
`;

const ImageLinks = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 1.5rem;
  opacity: ${props => props.$isExpanded ? '1' : '0'};
  pointer-events: ${props => props.$isExpanded ? 'auto' : 'none'};
  transition: opacity 0.3s ease 0.2s;  /* Delay appearance */
  z-index: 10;
  
  @media ${device.sm} {
    display: none;
  }
`;

const ImageLink = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--cyan-dark);
  color: var(--prussianblue-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    background: var(--cyan);
    transform: scale(1.1);
    box-shadow: 0 4px 20px var(--cyan);
  }
`;

const ContentLayer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: ${props => props.$isExpanded ? '60%' : '100%'};
  height: 100%;
  padding: 2rem;
  opacity: ${props => props.$isExpanded ? '1' : '0'};
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
  background: linear-gradient(to right, transparent, rgba(4, 56, 108, 0.95) 10%);
  pointer-events: ${props => props.$isExpanded ? 'auto' : 'none'};
  
  @media ${device.sm} {
    position: relative;
    width: 100% !important;
    opacity: 1;
    padding: 1.5rem;
    background: transparent;
    pointer-events: auto;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.75rem;
  color: var(--cyan);
  margin: 0;
`;

const ProjectDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  line-height: 1.7;
  font-size: 0.9375rem;
`;

const Paragraph = styled.p`
  color: ${props => props.$color};
  margin: 0;
  line-height: 1.7;
  
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const TechStack = styled.p`
  font-size: 0.875rem;
  color: var(--white);
  opacity: 0.7;
  margin-top: auto;
  font-style: italic;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  
  @media ${device.sm} {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
`;

const MobileLinks = styled.div`
  display: none;
  
  @media ${device.sm} {
    display: flex;
    gap: 1rem;
  }
`;

const MobileLink = styled.a`
  color: var(--cyan);
  transition: all 0.2s ease;
  
  &:hover {
    color: var(--coral);
    transform: scale(1.1);
  }
`;
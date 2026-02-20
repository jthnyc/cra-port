import { useState } from 'react';
import styled from 'styled-components';
import { ExternalLink, GitHub } from 'react-feather';
import { device } from '../device';
import { track } from '@vercel/analytics';

const Project = ({ 
  id, 
  img, 
  title, 
  description, 
  stack, 
  link, 
  github, 
  status, 
  onProjectClick, 
  onGithubClick, 
  onLiveLinkClick 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Track hover interactions
  const handleMouseEnter = () => {
    setIsExpanded(true);
    track('project_hover', { 
      project: title,
      action: 'expand'
    });
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
    track('project_hover', { 
      project: title,
      action: 'collapse'
    });
  };

  // Track image link clicks
  const handleImageLinkClick = (type, e) => {
    e.stopPropagation();
    if (type === 'live' && onLiveLinkClick) {
      onLiveLinkClick();
    } else if (type === 'github' && onGithubClick) {
      onGithubClick();
    }
    track('project_image_link_click', { 
      project: title,
      link_type: type
    });
  };

  const handleMobileLinkClick = (type, e) => {
    e.stopPropagation();
    if (type === 'live' && onLiveLinkClick) {
      onLiveLinkClick();
    } else if (type === 'github' && onGithubClick) {
      onGithubClick();
    }
    track('project_mobile_link_click', { 
      project: title,
      link_type: type
    });
  };

  const handleCardClick = () => {
    if (onProjectClick) {
      onProjectClick();
    }
    track('project_card_click', { 
      project: title,
      status: status
    });
  };

  const renderDescription = () => {
    const isChinese = /[\u4e00-\u9fa5]/.test(description);
    const parts = isChinese 
      ? description.split(/(?<=。)\s*/) 
      : description.split(/(?<=\.)\s+/);
    
    const paragraphs = [];
    
    if (parts.length > 0) {
      const problemText = parts.slice(0, 2).join(' ');
      paragraphs.push({ text: problemText, color: 'var(--lightorange)' });
    }
    
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
    
    if (statusStartIndex > 2) {
      const approachText = parts.slice(2, statusStartIndex).join(' ');
      if (approachText) {
        paragraphs.push({ text: approachText, color: 'var(--white)' });
      }
    } else if (parts.length > 2) {
      const approachText = parts.slice(2, parts.length - 1).join(' ');
      if (approachText) {
        paragraphs.push({ text: approachText, color: 'var(--white)' });
      }
    }
    
    if (statusStartIndex > -1) {
      const statusText = parts.slice(statusStartIndex).join(' ');
      paragraphs.push({ text: statusText, color: 'var(--coral)' });
    } else if (parts.length > 2) {
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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      $isExpanded={isExpanded}
      onClick={handleCardClick}
    >
      <ImageLayer $isExpanded={isExpanded}>
        <ProjectImage src={img} alt={title} $isExpanded={isExpanded} />
        {status && <StatusBadge $isExpanded={isExpanded}>{status}</StatusBadge>}
        
        <ImageLinks $isExpanded={isExpanded}>
          {link && (
            <ImageLink 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              title="View Project"
              onClick={(e) => handleImageLinkClick('live', e)}
            >
              <ExternalLink size={24} />
            </ImageLink>
          )}
          {github && (
            <ImageLink 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer" 
              title="View Code"
              onClick={(e) => handleImageLinkClick('github', e)}
            >
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
              <MobileLink 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer" 
                title="View Project"
                onClick={(e) => handleMobileLinkClick('live', e)}
              >
                <ExternalLink size={20} />
              </MobileLink>
            )}
            {github && (
              <MobileLink 
                href={github} 
                target="_blank" 
                rel="noopener noreferrer" 
                title="View Code"
                onClick={(e) => handleMobileLinkClick('github', e)}
              >
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
  scroll-margin-top: 6rem;
  
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
  
  @media ${device.sm} {
    position: relative;
    width: 100% !important;
    height: 250px;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  background: rgba(0, 0, 0, 0.2);
  opacity: ${props => props.$isExpanded ? '0.4' : '1'};
  transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
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
  transition: opacity 0.3s ease 0.2s;
  z-index: 10;
  
  @media ${device.sm} {
    display: none;
  }
`;

const ImageLink = styled.a`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--coral);
  border: 2px solid var(--coral);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 0 30px rgba(255, 107, 107, 0.8);
  
  & svg {
    color: var(--white);
    stroke-width: 2.5;
  }
  
  &:hover {
    transform: scale(1.15);
    box-shadow: 0 0 40px rgba(92, 225, 230, 1);
    background: var(--cyan);
    border-color: var(--cyan);
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
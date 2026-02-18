import styled, { keyframes } from 'styled-components';
import { device } from '../device';
import { useTranslation } from 'react-i18next';

const SkillConstellation = () => {
  const { t } = useTranslation('common');
  const skills = [
    // Frontend - cyan, larger
    { name: 'React', size: 2.5, color: 'var(--cyan)', x: 15, y: 20, delay: 0 },
    { name: 'TypeScript', size: 2.2, color: 'var(--cyan)', x: 45, y: 15, delay: 0.5 },
    { name: 'JavaScript', size: 2.4, color: 'var(--cyan)', x: 30, y: 35, delay: 1 },
    { name: 'HTML/CSS', size: 2, color: 'var(--cyan)', x: 60, y: 30, delay: 1.5 },
    { name: 'Tailwind', size: 2.1, color: 'var(--cyan)', x: 75, y: 45, delay: 2 },
    { name: 'Redux', size: 1.8, color: 'var(--cyan)', x: 20, y: 55, delay: 2.5 },
    
    // Backend - coral, medium
    { name: 'Node.js', size: 2, color: 'var(--coral)', x: 50, y: 50, delay: 0.8 },
    { name: 'Express', size: 1.7, color: 'var(--coral)', x: 70, y: 65, delay: 1.3 },
    { name: 'PostgreSQL', size: 1.8, color: 'var(--coral)', x: 85, y: 75, delay: 1.8 },
    
    // Tools - white, smaller
    { name: 'Git', size: 1.9, color: 'rgba(255, 255, 255, 0.8)', x: 10, y: 70, delay: 0.3 },
    { name: 'Webpack', size: 1.6, color: 'rgba(255, 255, 255, 0.8)', x: 40, y: 75, delay: 0.6 },
    { name: 'TensorFlow.js', size: 1.7, color: 'rgba(255, 255, 255, 0.8)', x: 85, y: 20, delay: 0.9 },
    { name: 'Web Audio API', size: 1.6, color: 'rgba(255, 255, 255, 0.8)', x: 35, y: 85, delay: 1.2 },
    { name: 'Vercel', size: 1.5, color: 'rgba(255, 255, 255, 0.8)', x: 65, y: 85, delay: 1.7 }
  ];

  return (
    <SkillSection>
      <SectionTitle>{t('tech_header')}</SectionTitle>
      <ConstellationContainer>
        {skills.map((skill, i) => (
          <SkillText
            key={i}
            $size={skill.size}
            $color={skill.color}
            $x={skill.x}
            $y={skill.y}
            $delay={skill.delay}
          >
            {skill.name}
          </SkillText>
        ))}
      </ConstellationContainer>
    </SkillSection>
  );
};

export default SkillConstellation;

// Animations
const float = keyframes`
  0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
  50% { transform: translate(-50%, -50%) translateY(-8px); }
`;

const glow = keyframes`
  0%, 100% { text-shadow: 0 0 10px currentColor, 0 0 20px currentColor; }
  50% { text-shadow: 0 0 20px currentColor, 0 0 40px currentColor; }
`;

const SkillSection = styled.div`
  margin-top: 6rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--cyan);
  margin-bottom: 2rem;
`;

const SkillText = styled.div`
  position: absolute;
  left: ${props => props.$x}%;
  top: ${props => props.$y}%;
  transform: translate(-50%, -50%);
  font-size: ${props => props.$size * 0.625}rem;
  font-weight: 600;
  color: ${props => props.$color};
  white-space: nowrap;
  cursor: default;
  animation: ${float} ${props => 3 + props.$delay}s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
  transition: all 0.3s ease;
  text-shadow: 0 0 10px ${props => props.$color};
  
  &:hover {
    transform: translate(-50%, -50%) scale(1.3);
    animation: ${float} ${props => 3 + props.$delay}s ease-in-out infinite,
               ${glow} 1s ease-in-out infinite;
  }
  
  @media ${device.sm} {
    font-size: ${props => props.$size * 0.5}rem;
  }
`;

const ConstellationContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  margin-bottom: 1.5rem;
  
  @media ${device.sm} {
    height: 500px;
  }
`;
import styled, { keyframes } from "styled-components";
import { useState } from "react";

const FrequencyBars = () => {
  const [bars] = useState(() => 
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      height: Math.random() * 60 + 20,
      delay: Math.random() * 2,
      duration: Math.random() * 1.5 + 1.5
    }))
  );

  return (
    <BarsContainer>
      {bars.map((bar) => (
        <Bar
          key={bar.id}
          $height={bar.height}
          $delay={bar.delay}
          $duration={bar.duration}
        />
      ))}
    </BarsContainer>
  );
};

export default FrequencyBars;

const pulse = keyframes`
  0%, 100% {
    transform: scaleY(0.3);
    opacity: 0.3;
  }
  50% {
    transform: scaleY(1);
    opacity: 0.6;
  }
`;

const BarsContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 200px;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  gap: 4px;
  opacity: 0.15;
  pointer-events: none;
  overflow: hidden;
`;

const Bar = styled.div`
  width: 6px;
  height: ${props => props.$height}%;
  background: linear-gradient(to top, var(--cyan), var(--coral));
  border-radius: 3px 3px 0 0;
  transform-origin: bottom;
  animation: ${pulse} ${props => props.$duration}s ease-in-out ${props => props.$delay}s infinite;
`;
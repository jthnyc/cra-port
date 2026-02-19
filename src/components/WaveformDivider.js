import styled, { keyframes } from 'styled-components';

const WaveformDivider = () => {
  return (
    <DividerContainer>
      <Wave $delay={0} />
      <Wave $delay={0.1} />
      <Wave $delay={0.2} />
      <Wave $delay={0.3} />
      <Wave $delay={0.4} />
      <Wave $delay={0.5} />
      <Wave $delay={0.6} />
      <Wave $delay={0.7} />
      <Wave $delay={0.8} />
    </DividerContainer>
  );
};

export default WaveformDivider;

const pulse = keyframes`
  0%, 100% { height: 20%; }
  50% { height: 100%; }
`;

const DividerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  height: 60px;
  margin: 4rem 0;
  opacity: 0.3;
`;

const Wave = styled.div`
  width: 4px;
  height: 20%;
  background: linear-gradient(to top, var(--cyan), var(--coral));
  border-radius: 2px;
  animation: ${pulse} 1.5s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
`;
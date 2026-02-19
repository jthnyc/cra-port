import styled, { keyframes } from 'styled-components';

const SpotifyVinyl = () => {
  const playlistUrl = 'https://open.spotify.com/playlist/5EQaIY0gi0KvYHM8dmnnMq';

  return (
    <VinylWrapper>
      <VinylLink 
        href={playlistUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="Listen to my film score favorites on Spotify"
      >
        <TrackName>Current Favorites</TrackName>
        <VinylRecord>
          <VinylGroove />
          <VinylGroove style={{ width: '70%', height: '70%' }} />
          <VinylGroove style={{ width: '50%', height: '50%' }} />
          <VinylCenter />
        </VinylRecord>
      </VinylLink>
    </VinylWrapper>
  );
};

export default SpotifyVinyl;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const VinylWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  position: absolute;
  left: 3rem;
  bottom: .75rem;
  padding-top: 5rem;
`;

const TrackName = styled.span`
  writing-mode: vertical-lr;
  text-orientation: mixed;
  font-size: 0.5rem;
  letter-spacing: 0.15em;
  color: var(--cyan);
  font-weight: 600;
  text-transform: uppercase;
  opacity: 0.6;
  transform: rotate(180deg);
  transition: all 0.3s ease;
`;

const VinylLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover ${TrackName} {
    opacity: 1;
    color: var(--coral);
  }
`;

const VinylRecord = styled.div`
  position: relative;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  animation: ${spin} 3s linear infinite;
  transition: all 0.3s ease;
  
  ${VinylLink}:hover & {
    animation-duration: 1s;
    transform: scale(1.15);
    box-shadow: 0 0 15px rgba(92, 225, 230, 0.4);
  }
`;

const VinylGroove = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 90%;
  border-radius: 50%;
  border: 1px solid rgba(92, 225, 230, 0.15);
`;

const VinylCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: radial-gradient(circle, #2a2a2a 0%, #0a0a0a 100%);
  border: 2px solid rgba(92, 225, 230, 0.3);
  z-index: 1;
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--cyan);
    opacity: 0.5;
  }
`;
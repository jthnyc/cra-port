import styled from "styled-components";
import { useState, useEffect } from "react";
import { device } from "../device";
import { wavinghand } from "../images";

const Greeting = () => {
  const greetings = [
    "Hey, I'm Joanna Huang.",
    "Ehi, sono Joanna Huang.",
    "Hey, ich bin Joanna Huang.",
    "嗨，我是黃子軒。",
    "Salut, moi c'est Joanna Huang.",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <GreetingText>
      <WavingHand src={wavinghand} alt="waving hand icon"/>
      {greetings[index]}
    </GreetingText>
  );
};

export default Greeting;

const GreetingText = styled.p`
  opacity: 1;
  font-size: 1.125rem;
  color: var(--cyan);
  font-family: "Space Grotesk", sans-serif;
  font-weight: 600;
  margin: 0 0 1.5rem 0;
  letter-spacing: 0.02em;
  animation: fade-in-out 3s ease-in-out infinite;

  @keyframes fade-in-out {
    0% { opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { opacity: 0; }
  }
  
  @media ${device.md} {
    font-size: 1rem;
  }
  
  @media ${device.sm} {
    font-size: 0.9375rem;
  }
`;

const WavingHand = styled.img`
  max-width: 1.375rem;
  margin-right: 0.625rem;
  display: inline-block;
  vertical-align: middle;
  
  @media ${device.sm} {
    max-width: 1.25rem;
  }
`;